import "server-only";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireAdmin() {
  const supabase = await createClient();

  // 1. Проверяем, авторизован ли пользователь
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/admin/login");
  }

  // 2. Проверяем роль пользователя в базе данных
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "admin") {
    redirect("/");
  }

  // 3. Проверяем уровень двухфакторной защиты
  const { data: assuranceData, error: assuranceError } =
    await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

  if (assuranceError) {
    throw assuranceError;
  }

  if (assuranceData.currentLevel !== "aal2") {
    redirect("/mfa");
  }

  // 4. Возвращаем данные подтверждённого администратора
  return {
    user,
    profile,
    assuranceLevel: assuranceData.currentLevel,
  };
}
