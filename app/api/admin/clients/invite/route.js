import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request) {
  try {
    // Проверяем авторизованного пользователя.
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Необходима авторизация." },
        { status: 401 },
      );
    }

    // Проверяем роль.
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      return NextResponse.json(
        { error: "Недостаточно прав." },
        { status: 403 },
      );
    }

    // Проверяем второй фактор.
    const { data: assurance, error: assuranceError } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

    if (assuranceError || assurance.currentLevel !== "aal2") {
      return NextResponse.json(
        { error: "Требуется подтверждение второго фактора." },
        { status: 403 },
      );
    }

    // Получаем данные формы.
    const body = await request.json();

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "")
      .trim()
      .toLowerCase();

    if (!fullName || fullName.length > 120) {
      return NextResponse.json(
        { error: "Укажите корректное имя клиента." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Укажите корректный email." },
        { status: 400 },
      );
    }

    // Формируем адрес возврата после подтверждения приглашения.
    const origin = new URL(request.url).origin;

    const redirectTo = `${origin}/auth/callback?next=/account/setup`;

    // Отправляем приглашение.
    const { data, error: inviteError } =
      await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        redirectTo,
        data: {
          full_name: fullName,
          role: "client",
        },
      });

    if (inviteError) {
      console.error("Ошибка приглашения:", inviteError);

      return NextResponse.json(
        { error: inviteError.message || "Не удалось отправить приглашение." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message: `Приглашение отправлено на ${email}.`,
      userId: data.user?.id,
    });
  } catch (error) {
    console.error("Ошибка API приглашения:", error);

    return NextResponse.json(
      { error: "Внутренняя ошибка сервера." },
      { status: 500 },
    );
  }
}
