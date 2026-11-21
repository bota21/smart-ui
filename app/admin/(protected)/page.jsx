import LogoutButton from "./LogoutButton";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 24px",
        background: "#f8f7fc",
        color: "#242033",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1>Панель администратора SmartÜi</h1>

        <p>Добро пожаловать в административную часть SmartÜi.</p>

        <p>
          Вы вошли как: <strong>{user.email}</strong>
        </p>

        <p style={{ color: "#16834a" }}>
          Доступ подтверждён. Двухфакторная защита активна.
        </p>
        <div style={{ marginTop: "28px" }}>
          <LogoutButton />
        </div>
      </section>
    </main>
  );
}
