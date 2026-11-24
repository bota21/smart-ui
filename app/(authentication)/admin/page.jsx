import { redirect } from "next/navigation";

import { getAuthContext } from "@/lib/auth-guard";
import AdminUsers from "@/components/authentication/admin/users/AdminUsers";

export default async function AdminPage() {
  const context = await getAuthContext();

  if (!context) {
    redirect("/login");
  }

  if (!["admin", "superadmin"].includes(context.role)) {
    redirect("/");
  }

  return (
    <AdminUsers
      currentUser={{
        name: context.user.name,
        email: context.user.email,
        role: context.role,
      }}
    />
  );
}
