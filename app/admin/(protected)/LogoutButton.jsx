"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();

      const { error: logoutError } = await supabase.auth.signOut();

      if (logoutError) throw logoutError;

      router.replace("/admin/login");
      router.refresh();
    } catch (err) {
      setError(err.message || "Не удалось выйти из аккаунта.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "9px",
          background: "#7652d8",
          color: "#ffffff",
          fontSize: "14px",
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "Выходим..." : "Выйти из аккаунта"}
      </button>

      {error && <p style={{ color: "#c62828", marginTop: "12px" }}>{error}</p>}
    </div>
  );
}
