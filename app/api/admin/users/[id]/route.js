import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

export async function PATCH(request, { params }) {
  const { response } = await requireRole(["admin", "superadmin"]);

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

    const updates = {};

    for (const field of allowedFields) {
      if (Object.hasOwn(body, field)) {
        updates[field] =
          typeof body[field] === "string" ? body[field].trim() : body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "Нет данных для обновления." },
        { status: 400 },
      );
    }

    const [targetUser] = await db
      .select({
        id: userTable.id,
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
