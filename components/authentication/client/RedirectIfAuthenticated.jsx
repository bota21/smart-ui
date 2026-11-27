"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client-auth";

export default function RedirectIfAuthenticated({ children }) {
  const router = useRouter();

  const { data: session, isPending, isRefetching } = authClient.useSession();

  const [initialCheckComplete, setInitialCheckComplete] = useState(false);

  useEffect(() => {
    if (!isPending && !isRefetching) {
      setInitialCheckComplete(true);
    }
  }, [isPending, isRefetching]);

  useEffect(() => {
    if (initialCheckComplete && session?.user) {
      router.replace("/profile");
    }
  }, [initialCheckComplete, session, router]);

  if (!initialCheckComplete || session?.user) {
    return (
      <div className="auth-redirect-loading">Проверяем авторизацию...</div>
    );
  }

  return children;
}
