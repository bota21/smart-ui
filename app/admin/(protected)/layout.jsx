import { requireAdmin } from "@/lib/auth/require-admin";

export default async function ProtectedAdminLayout({ children }) {
  await requireAdmin();

  return <>{children}</>;
}
