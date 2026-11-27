import { redirect } from "next/navigation";

import { getAuthContext } from "@/lib/auth-guard";
import AdminActivity from "@/components/authentication/admin/activity/AdminActivity";

export default async function AdminActivityPage() {
  const context = await getAuthContext();

  if (!context) {
    redirect("/login");
  }

  if (!["admin", "superadmin"].includes(context.role)) {
    redirect("/");
  }

  return <AdminActivity />;
}
