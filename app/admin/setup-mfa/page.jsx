import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SetupMFA from "./SetupMFA";

export default async function SetupMFAPage() {
  const supabase = await createClient();

  // Проверяем действительную сессию пользователя.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/admin/login");
  }

  // Проверяем роль пользователя в базе.
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "admin") {
    redirect("/");
  }

  return <SetupMFA />;
}
