import { randomUUID } from "node:crypto";

import { db } from "@/lib/db";
import { adminActivity } from "@/lib/db/schema";

export async function logAdminActivity({
  actor,
  action,
  targetUserId = null,
  targetEmail = null,
  details = null,
}) {
  if (!actor?.id || !actor?.email || !action) {
    throw new Error("Недостаточно данных для записи действия администратора.");
  }

  await db.insert(adminActivity).values({
    id: randomUUID(),
    actorId: actor.id,
    actorName: actor.name || null,
    actorEmail: actor.email,
    action,
    targetUserId,
    targetEmail,
    details,
  });
}
