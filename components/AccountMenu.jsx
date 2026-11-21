"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AccountMenu() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    async function loadAccount() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error || !user) {
          setUser(null);
          setProfile(null);
          return;
        }

        const { data: assuranceData, error: assuranceError } =
          await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

        if (assuranceError) throw assuranceError;

        if (assuranceData.currentLevel !== "aal2") {
          setUser(null);
          setProfile(null);
          return;
        }

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("full_name, role")
          .eq("id", user.id)
          .single();

        if (profileError || !profile) {
          setUser(null);
          setProfile(null);
          return;
        }

        setUser(user);
        setProfile(profile);
      } catch (err) {
        console.error("Ошибка загрузки аккаунта:", err);
        setUser(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }

    loadAccount();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        setUser(null);
        setProfile(null);
        setOpen(false);
        setLoading(false);

        router.replace("/login");
        router.refresh();
      } else {
        loadAccount();
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  async function handleLogout() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut({
      scope: "local",
    });

    if (error) {
      alert("Не удалось выйти из аккаунта: " + error.message);
      return;
    }

    setUser(null);
    setProfile(null);
    setOpen(false);

    router.replace("/login");
    router.refresh();
  }

  if (loading) return null;

  if (!user) {
    return (
      <Link href="/login" className="account-login">
        Войти
      </Link>
    );
  }

  const isAdmin = profile?.role === "admin";

  const displayName =
    profile?.full_name?.trim() || user.email || "Пользователь";

  return (
    <div className="account-menu">
      <button
        type="button"
        className="account-menu-trigger"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="account-icon">♙</span>
        <span>{displayName}</span>
        <span className="account-arrow">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="account-dropdown">
          {isAdmin && (
            <Link href="/admin" onClick={() => setOpen(false)}>
              Панель администратора
            </Link>
          )}

          <Link href="/profile" onClick={() => setOpen(false)}>
            Личный кабинет
          </Link>

          <Link href="/profile/settings" onClick={() => setOpen(false)}>
            Настройки
          </Link>

          <button type="button" onClick={handleLogout}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}
