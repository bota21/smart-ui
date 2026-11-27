import { redirect } from "next/navigation";
import { and, count, eq, gte, or } from "drizzle-orm";

import { getAuthContext } from "@/lib/auth-guard";
import { db } from "@/lib/db";
import { user as userTable } from "@/lib/db/schema";

import AdminDashboard from "@/components/authentication/admin/dashboard/AdminDashboard";

export default async function AdminPage() {
  const context = await getAuthContext();

  if (!context) {
    redirect("/login");
  }

  if (!["admin", "superadmin"].includes(context.role)) {
    redirect("/");
  }

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const configuredSuperadminEmail =
    process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();

  const administratorCondition = configuredSuperadminEmail
    ? or(
        eq(userTable.role, "admin"),
        eq(userTable.role, "superadmin"),
        and(
          eq(userTable.email, configuredSuperadminEmail),
          eq(userTable.emailVerified, true),
        ),
      )
    : or(eq(userTable.role, "admin"), eq(userTable.role, "superadmin"));

  const [
    totalResult,
    regularResult,
    verifiedResult,
    unverifiedResult,
    administratorsResult,
    newUsersResult,
  ] = await Promise.all([
    db.select({ value: count() }).from(userTable),

    db
      .select({ value: count() })
      .from(userTable)
      .where(eq(userTable.role, "user")),

    db
      .select({ value: count() })
      .from(userTable)
      .where(eq(userTable.emailVerified, true)),

    db
      .select({ value: count() })
      .from(userTable)
      .where(eq(userTable.emailVerified, false)),

    db.select({ value: count() }).from(userTable).where(administratorCondition),

    db
      .select({ value: count() })
      .from(userTable)
      .where(gte(userTable.createdAt, sevenDaysAgo)),
  ]);

  const stats = {
    totalUsers: totalResult[0].value,
    regularUsers: regularResult[0].value,
    verifiedUsers: verifiedResult[0].value,
    unverifiedUsers: unverifiedResult[0].value,
    administrators: administratorsResult[0].value,
    newUsers: newUsersResult[0].value,
  };

  return <AdminDashboard stats={stats} />;
}
