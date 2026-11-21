import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";
import styles from "./page.module.css";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <header className={styles.headerAdmin}>
          <div>
            <span className={styles.eyebrow}>SMARTÜI · ADMIN</span>
            <h1 className={styles.title}>Панель администратора</h1>
            <p className={styles.subtitle}>
              Управление системой умного дома и клиентами.
            </p>
          </div>

          <LogoutButton />
        </header>

        <div className={styles.accountInfo}>
          <span className={styles.statusDot} />
          <span>
            Вы вошли как <strong>{user.email}</strong>
          </span>
          <span className={styles.securityStatus}>2FA активна</span>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Управление</h2>

          <div className={styles.cards}>
            <Link href="/admin/clients" className={styles.card}>
              <div className={styles.cardIcon}>♙</div>
              <h3 className={styles.cardTitle}>Клиенты</h3>
              <p className={styles.cardDescription}>
                Добавление клиентов, приглашения и управление доступом к личным
                кабинетам.
              </p>
              <span className={styles.cardLink}>Перейти к клиентам →</span>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
