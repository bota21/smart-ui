"use client";

import { useEffect, useRef, Suspense } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client-auth";
import MfaForm from "@/components/authentication/shared/mfa/MfaForm";
import SetupMFA from "@/components/authentication/shared/mfa/SetupMFA";

function MfaContent() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const initialSessionChecked = useRef(false);

  useEffect(() => {
    if (isPending || initialSessionChecked.current) return;

    initialSessionChecked.current = true;

    if (session?.user?.twoFactorEnabled) {
      router.replace(
        ["admin", "superadmin"].includes(session.user.role) ? "/admin" : "/",
      );
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <p style={{ textAlign: "center", padding: 40 }}>Загрузка...</p>;
  }

  if (session?.user && !initialSessionChecked.current) {
    return null;
  }

  if (session?.user) {
    return <SetupMFA />;
  }

  return <MfaForm />;
}

export default function MfaPage() {
  return (
    <Suspense
      fallback={<p style={{ textAlign: "center", padding: 40 }}>Загрузка...</p>}
    >
      <MfaContent />
    </Suspense>
  );
}
