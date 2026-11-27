import { redirect } from "next/navigation";

import { getAuthContext } from "@/lib/auth-guard";
import AdminAdministrators from "@/components/authentication/admin/administrators/AdminAdministrators";

export default async function AdminAdministratorsPage() {
  const context = await getAuthContext();

  if (!context) {
    redirect("/login");
  }

  if (!["admin", "superadmin"].includes(context.role)) {
    redirect("/");
  }

  return (
    <AdminAdministrators
      currentUser={{
        id: context.user.id,
        name: context.user.name,
        email: context.user.email,
        role: context.role,
      }}
    />
  );
}
