import { createClient } from "@/lib/supabase/server";
import ClientInviteForm from "./ClientInviteForm";
import styles from "./clients.module.css";

export default async function ClientsPage() {
  const supabase = await createClient();

  const { data: clients, error } = await supabase
    .from("profiles")
    .select("id, full_name, phone, created_at")
    .eq("role", "client")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Не удалось загрузить список клиентов.");
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1>Клиенты</h1>
            <p>Управление клиентскими аккаунтами SmartÜi</p>
          </div>

          <a href="/admin">Назад в панель</a>
        </header>

        <div className={styles.stats}>
          <span>Всего клиентов</span>
          <strong>{clients?.length || 0}</strong>
        </div>

        <ClientInviteForm />

        <section className={styles.listSection}>
          <h2>Список клиентов</h2>

          {!clients?.length ? (
            <p className={styles.empty}>Пока нет добавленных клиентов.</p>
          ) : (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Телефон</th>
                    <th>Дата создания</th>
                  </tr>
                </thead>

                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id}>
                      <td>{client.full_name || "Без имени"}</td>
                      <td>{client.phone || "Не указан"}</td>
                      <td>
                        {new Date(client.created_at).toLocaleDateString(
                          "ru-RU",
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
