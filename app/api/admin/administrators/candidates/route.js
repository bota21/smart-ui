import { NextResponse } from "next/server";
import { and, desc, eq } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

export async function GET() {
  const { response } = await requireRole(["superadmin"]);

  if (response) {
    return response;
  }

  try {
    const candidates = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        firstName: userTable.firstName,
        lastName: userTable.lastName,
        email: userTable.email,
        emailVerified: userTable.emailVerified,
        createdAt: userTable.createdAt,
      })
      .from(userTable)
      .where(and(eq(userTable.role, "user"), eq(userTable.emailVerified, true)))
      .orderBy(desc(userTable.createdAt))
      .limit(100);

    return NextResponse.json({ candidates });
  } catch (error) {
    console.error("Admin candidates API error:", error);

    return NextResponse.json(
      { error: "Не удалось получить список пользователей." },
      { status: 500 },
    );
  }
}
