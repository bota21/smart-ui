import { redirect } from "next/navigation";

import { getAuthContext } from "@/lib/auth-guard";

export default async function AdminPage() {
  const context = await getAuthContext();

  if (!context) {
    redirect("/login");
  }

  if (!["admin", "superadmin"].includes(context.role)) {
    redirect("/");
  }

  return (
    <main>
      <h1>Панель администратора</h1>

      <p>Добро пожаловать, {context.user.name || context.user.email}.</p>

      {context.role === "superadmin" && (
        <p>Вы вошли как главный администратор.</p>
      )}
    </main>
  );
}
