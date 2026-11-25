"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client-auth";

export default function RedirectIfAuthenticated({ children }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && session?.user) {
      router.replace("/profile");
    }
  }, [isPending, session, router]);

  if (isPending || session?.user) {
    return (
      <div className="auth-redirect-loading">Проверяем авторизацию...</div>
    );
  }

  return children;
}
