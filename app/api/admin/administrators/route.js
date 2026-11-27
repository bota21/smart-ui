import { NextResponse } from "next/server";
import { desc, eq, or } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

export async function GET() {
  const { response } = await requireRole(["admin", "superadmin"]);

  if (response) {
    return response;
  }

  try {
    const superadminEmail = process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();

    const administratorCondition = superadminEmail
      ? or(
          eq(userTable.role, "admin"),
          eq(userTable.role, "superadmin"),
          eq(userTable.email, superadminEmail),
        )
      : or(eq(userTable.role, "admin"), eq(userTable.role, "superadmin"));

    const administrators = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        firstName: userTable.firstName,
        lastName: userTable.lastName,
        email: userTable.email,
        phoneNumber: userTable.phoneNumber,
        role: userTable.role,
        emailVerified: userTable.emailVerified,
        createdAt: userTable.createdAt,
      })
      .from(userTable)
      .where(administratorCondition)
      .orderBy(desc(userTable.createdAt))
      .limit(100);

    const result = administrators.map((administrator) => ({
      ...administrator,
      role:
        superadminEmail && administrator.email.toLowerCase() === superadminEmail
          ? "superadmin"
          : administrator.role,
    }));

    return NextResponse.json({ administrators: result });
  } catch (error) {
    console.error("Admin administrators API error:", error);

    return NextResponse.json(
      { error: "Не удалось получить список администраторов." },
      { status: 500 },
    );
  }
}
