import { redirect } from "next/navigation";

import { getAuthContext } from "@/lib/auth-guard";
import AdminHeader from "@/components/authentication/admin/layout/AdminHeader";

export default async function AdminLayout({ children }) {
  const context = await getAuthContext();

  if (!context) {
    redirect("/login");
  }

  if (!["admin", "superadmin"].includes(context.role)) {
    redirect("/");
  }

  const currentUser = {
    id: context.user.id,
    name: context.user.name,
    email: context.user.email,
    role: context.role,
  };

  return (
    <>
      <AdminHeader currentUser={currentUser} />
      {children}
    </>
  );
}
