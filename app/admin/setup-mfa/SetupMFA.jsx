"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SetupMFA() {
  const [supabase] = useState(() => createClient());

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mode, setMode] = useState("loading");

  const [factorId, setFactorId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [secret, setSecret] = useState("");
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function prepareMFA() {
      try {
        const { data: factorsData, error: factorsError } =
          await supabase.auth.mfa.listFactors();

        if (factorsError) throw factorsError;

        const verifiedFactor = factorsData.totp?.find(
          (factor) => factor.status === "verified",
        );

        // Если TOTP уже подключён, предлагаем проверить код.
        if (verifiedFactor) {
          if (!cancelled) {
            setFactorId(verifiedFactor.id);
            setMode("verify");
          }
          return;
        }

        // Удаляем незавершённые настройки TOTP,
        // если пользователь ранее начал подключение,
        // но не подтвердил его.
        const unverifiedFactors = (factorsData.totp || []).filter(
          (factor) => factor.status === "unverified",
        );

        for (const factor of unverifiedFactors) {
          const { error: removeError } = await supabase.auth.mfa.unenroll({
            factorId: factor.id,
          });

          if (removeError) throw removeError;
        }

        // Создаём новый TOTP-фактор.
        const { data: enrollment, error: enrollError } =
          await supabase.auth.mfa.enroll({
            factorType: "totp",
            friendlyName: "SmartUi Authenticator",
          });

        if (enrollError) throw enrollError;

        if (!cancelled) {
          setFactorId(enrollment.id);
          setQrCode(enrollment.totp.qr_code);
          setSecret(enrollment.totp.secret);
          setMode("enroll");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Не удалось подготовить MFA.");
          setMode("error");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    prepareMFA();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  async function verifyCode(event) {
    event.preventDefault();

    setError("");

    if (!/^\d{6}$/.test(code)) {
      setError("Введите все 6 цифр кода.");
      return;
    }

    setLoading(true);

    try {
      // Создаём запрос на проверку кода.
      const { data: challenge, error: challengeError } =
        await supabase.auth.mfa.challenge({
          factorId,
        });

      if (challengeError) throw challengeError;

      // Проверяем код из приложения.
      const { error: verifyError } = await supabase.auth.mfa.verify({
        factorId,
        challengeId: challenge.id,
        code,
      });

      if (verifyError) throw verifyError;

      // Проверяем уровень защиты текущей сессии
      const { data: assuranceData, error: assuranceError } =
        await supabase.auth.mfa.getAuthenticatorAssuranceLevel();

      if (assuranceError) throw assuranceError;

      console.log("Уровень защиты Supabase:", assuranceData);

      setSuccess(true);
      setMode("success");
      setCode("");
    } catch (err) {
      setError(err.message || "Неверный код. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "9px",
    boxSizing: "border-box",
    fontSize: "18px",
    textAlign: "center",
    letterSpacing: "8px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "9px",
    background: "#7652d8",
    color: "#fff",
    fontSize: "16px",
    cursor: loading ? "wait" : "pointer",
    opacity: loading ? 0.7 : 1,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        background: "#f7f5fc",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "480px",
          padding: "32px",
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 12px 40px rgba(40, 20, 80, 0.10)",
        }}
      >
        <h1 style={{ color: "#7652d8", textAlign: "center" }}>SmartÜi</h1>

        <h2 style={{ textAlign: "center", fontSize: "21px" }}>
          Двухфакторная защита
        </h2>

        {loading && mode === "loading" && (
          <p style={{ textAlign: "center" }}>
            Подготавливаем двухфакторную авторизацию...
          </p>
        )}

        {mode === "enroll" && (
          <>
            <p>
              Открой Google Authenticator, Microsoft Authenticator или другое
              совместимое приложение.
            </p>

            <p>
              Выбери добавление новой учётной записи и отсканируй QR-код ниже.
            </p>

            <div style={{ textAlign: "center", margin: "24px 0" }}>
              <img
                src={qrCode}
                alt="QR-код для настройки двухфакторной авторизации"
                style={{
                  width: "220px",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>

            <details style={{ marginBottom: "22px" }}>
              <summary style={{ cursor: "pointer" }}>
                Не получается отсканировать QR-код?
              </summary>

              <p style={{ fontSize: "13px" }}>
                Введи этот секрет вручную в приложение-аутентификатор:
              </p>

              <p
                style={{
                  overflowWrap: "anywhere",
                  padding: "12px",
                  background: "#f4f1fb",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              >
                {secret}
              </p>
            </details>

            <p style={{ fontSize: "13px", color: "#777" }}>
              Не передавай QR-код и секрет другим людям. Они позволяют создавать
              коды для входа в аккаунт.
            </p>
          </>
        )}

        {mode === "verify" && (
          <p>
            Приложение-аутентификатор уже подключено. Открой его и введи текущий
            шестизначный код.
          </p>
        )}

        {(mode === "enroll" || mode === "verify") && (
          <form onSubmit={verifyCode}>
            <label
              htmlFor="totp-code"
              style={{ display: "block", marginBottom: "10px" }}
            >
              Шестизначный код
            </label>

            <input
              id="totp-code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              pattern="[0-9]{6}"
              placeholder="000000"
              value={code}
              onChange={(event) =>
                setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
              }
              required
              style={{ ...inputStyle, marginBottom: "18px" }}
            />

            <button
              type="submit"
              disabled={loading || code.length !== 6}
              style={buttonStyle}
            >
              {loading ? "Проверяем..." : "Подтвердить код"}
            </button>
          </form>
        )}

        {mode === "success" && success && (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "18px", color: "#238636" }}>
              Двухфакторная авторизация успешно подтверждена!
            </p>

            <p>
              Приложение-аутентификатор подключено. Теперь Supabase подтвердил
              второй фактор для этой сессии.
            </p>
          </div>
        )}

        {error && (
          <p
            role="alert"
            style={{
              marginTop: "18px",
              color: "#c62828",
              overflowWrap: "anywhere",
            }}
          >
            {error}
          </p>
        )}
      </section>
    </main>
  );
}
