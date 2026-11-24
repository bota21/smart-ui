import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

export async function GET() {
  const { response } = await requireRole(["admin", "superadmin"]);

  if (response) {
    return response;
  }

  try {
    const users = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        firstName: userTable.firstName,
        lastName: userTable.lastName,
        email: userTable.email,
        phoneNumber: userTable.phoneNumber,
        address: userTable.address,
        role: userTable.role,
        emailVerified: userTable.emailVerified,
        createdAt: userTable.createdAt,
      })
      .from(userTable)
      .orderBy(desc(userTable.createdAt))
      .limit(100);

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Admin users API error:", error);

    return NextResponse.json(
      { error: "Не удалось получить список пользователей." },
      { status: 500 },
    );
  }
}
