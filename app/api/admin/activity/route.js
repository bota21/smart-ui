import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";

import { requireRole } from "@/lib/auth-guard";
import { db } from "@/lib/db";
import { adminActivity } from "@/lib/db/schema";

export async function GET() {
  const { response } = await requireRole(["admin", "superadmin"]);

  if (response) {
    return response;
  }

  try {
    const activities = await db
      .select({
        id: adminActivity.id,
        actorId: adminActivity.actorId,
        actorName: adminActivity.actorName,
        actorEmail: adminActivity.actorEmail,
        action: adminActivity.action,
        targetUserId: adminActivity.targetUserId,
        targetEmail: adminActivity.targetEmail,
        details: adminActivity.details,
        createdAt: adminActivity.createdAt,
      })
      .from(adminActivity)
      .orderBy(desc(adminActivity.createdAt))
      .limit(200);

    return NextResponse.json({
      activities,
    });
  } catch (error) {
    console.error("Admin activity fetch error:", error);

    return NextResponse.json(
      { error: "Не удалось загрузить журнал действий." },
      { status: 500 },
    );
  }
}
