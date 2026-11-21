import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SetupMFA from "../admin/setup-mfa/SetupMFA";

export default async function MFAPage() {
  const supabase = await createClient();

  // 1. Проверяем, авторизован ли пользователь.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  // 2. Получаем роль пользователя.
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    redirect("/login");
  }

  if (profile.role !== "admin" && profile.role !== "client") {
    redirect("/login");
  }

  // 3. Проверяем, подтверждён ли второй фактор.
  const { data: assuranceData, error: assuranceError } =
    await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

  if (assuranceError) {
    throw assuranceError;
  }

  // 4. Если второй фактор уже подтверждён,
  // направляем пользователя по его роли.
  if (assuranceData.currentLevel === "aal2") {
    redirect(profile.role === "admin" ? "/admin" : "/");
  }

  // 5. Если второй фактор ещё не подтверждён,
  // показываем общую страницу настройки или проверки MFA.
  return <SetupMFA redirectTo={profile.role === "admin" ? "/admin" : "/"} />;
}
