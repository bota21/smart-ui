import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { logAdminActivity } from "@/lib/admin-activity";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

export async function PATCH(request, { params }) {
  const { context, response } = await requireRole(["superadmin"]);

  if (response) {
    return response;
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { role } = body;

    if (!["user", "admin"].includes(role)) {
      return NextResponse.json(
        { error: "Недопустимая роль." },
        { status: 400 },
      );
    }

    if (id === context.user.id) {
      return NextResponse.json(
        { error: "Нельзя изменять собственную роль." },
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
      targetUser.email.toLowerCase() === superadminEmail;

    if (isProtectedSuperadmin) {
      return NextResponse.json(
        { error: "Нельзя изменять роль главного администратора." },
        { status: 403 },
      );
    }

    if (!targetUser.emailVerified) {
      return NextResponse.json(
        { error: "Нельзя назначить роль до подтверждения почты." },
        { status: 400 },
      );
    }

    if (targetUser.role === role) {
      return NextResponse.json(
        { error: "У пользователя уже установлена эта роль." },
        { status: 400 },
      );
    }

    const [updatedUser] = await db
      .update(userTable)
      .set({ role })
      .where(eq(userTable.id, id))
      .returning({
        id: userTable.id,
        email: userTable.email,
        role: userTable.role,
      });

    await logAdminActivity({
      actor: context.user,
      action: role === "admin" ? "user_role_assigned" : "user_role_removed",
      targetUserId: targetUser.id,
      targetEmail: targetUser.email,
      details: {
        previousRole: targetUser.role,
        newRole: role,
      },
    });

    return NextResponse.json({
      message: "Роль пользователя обновлена.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Admin role update error:", error);

    return NextResponse.json(
      { error: "Не удалось изменить роль пользователя." },
      { status: 500 },
    );
  }
}
