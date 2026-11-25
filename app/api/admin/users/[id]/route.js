import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { logAdminActivity } from "@/lib/admin-activity";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

export async function PATCH(request, { params }) {
  const { context, response } = await requireRole(["admin", "superadmin"]);

  if (response) {
    return response;
  }

  try {
    const { id } = await params;
    const body = await request.json();

    const allowedFields = [
      "name",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ];

    const [targetUser] = await db
      .select({
        id: userTable.id,
        email: userTable.email,
        role: userTable.role,
        name: userTable.name,
        firstName: userTable.firstName,
        lastName: userTable.lastName,
        phoneNumber: userTable.phoneNumber,
        address: userTable.address,
      })
      .from(userTable)
      .where(eq(userTable.id, id))
      .limit(1);

    if (!targetUser) {
      return NextResponse.json(
        { error: "Пользователь не найден." },
        { status: 404 },
      );
    }

    if (targetUser.role !== "user") {
      return NextResponse.json(
        { error: "Этот аккаунт не относится к обычным пользователям." },
        { status: 403 },
      );
    }

    const updates = {};
    const changedFields = [];

    for (const field of allowedFields) {
      if (!Object.hasOwn(body, field)) {
        continue;
      }

      if (typeof body[field] !== "string") {
        return NextResponse.json(
          { error: `Некорректное значение поля ${field}.` },
          { status: 400 },
        );
      }

      const newValue = body[field].trim();
      const oldValue = targetUser[field] ?? "";

      if (newValue !== oldValue) {
        updates[field] = newValue;
        changedFields.push(field);
      }
    }

    if (changedFields.length === 0) {
      return NextResponse.json({
        message: "Данные пользователя не изменились.",
        user: targetUser,
      });
    }

    const [updatedUser] = await db
      .update(userTable)
      .set(updates)
      .where(eq(userTable.id, id))
      .returning({
        id: userTable.id,
        name: userTable.name,
        firstName: userTable.firstName,
        lastName: userTable.lastName,
        phoneNumber: userTable.phoneNumber,
        address: userTable.address,
      });

    await logAdminActivity({
      actor: context.user,
      action: "user_updated",
      targetUserId: targetUser.id,
      targetEmail: targetUser.email,
      details: {
        changedFields,
      },
    });

    return NextResponse.json({
      message: "Данные пользователя обновлены.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Admin user update error:", error);

    return NextResponse.json(
      { error: "Не удалось обновить данные пользователя." },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  const { context, response } = await requireRole(["superadmin"]);

  if (response) {
    return response;
  }

  try {
    const { id } = await params;

    if (id === context.user.id) {
      return NextResponse.json(
        { error: "Нельзя удалить собственный аккаунт." },
        { status: 403 },
      );
    }

    const [targetUser] = await db
      .select({
        id: userTable.id,
        email: userTable.email,
        emailVerified: userTable.emailVerified,
        role: userTable.role,
      })
      .from(userTable)
      .where(eq(userTable.id, id))
      .limit(1);

    if (!targetUser) {
      return NextResponse.json(
        { error: "Пользователь не найден." },
        { status: 404 },
      );
    }

    const superadminEmail = process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();

    const isProtectedSuperadmin =
      targetUser.role === "superadmin" ||
      (Boolean(superadminEmail) &&
        targetUser.emailVerified &&
        targetUser.email.toLowerCase() === superadminEmail);

    if (isProtectedSuperadmin) {
      return NextResponse.json(
        { error: "Нельзя удалить аккаунт главного администратора." },
        { status: 403 },
      );
    }

    await db.delete(userTable).where(eq(userTable.id, id));

    await logAdminActivity({
      actor: context.user,
      action: "user_deleted",
      targetUserId: targetUser.id,
      targetEmail: targetUser.email,
    });

    return NextResponse.json({
      success: true,
      message: "Пользователь успешно удалён.",
      deletedUserId: id,
    });
  } catch (error) {
    console.error("Admin user deletion error:", error);

    return NextResponse.json(
      { error: "Не удалось удалить пользователя." },
      { status: 500 },
    );
  }
}
