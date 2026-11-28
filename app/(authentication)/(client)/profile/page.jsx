"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/client-auth";
import styles from "./profile.module.css";

export default function ProfilePage() {
  const { data: session, isPending, refetch } = authClient.useSession();
  const user = session?.user;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phoneNumber: user.phoneNumber || "",
        address: user.address || "",
      });
    }
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "phoneNumber") {
      let digits = value.replace(/\D/g, "");

      // Убираем код страны, если он уже введён
      if (digits.startsWith("7")) {
        digits = digits.slice(1);
      }

      // Не допускаем больше 10 цифр
      digits = digits.slice(0, 10);

      setForm((previous) => ({
        ...previous,
        phoneNumber: `+7${digits}`,
      }));

      return;
    }

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const phoneNumber = form.phoneNumber.trim();

    if (!firstName || !lastName || !phoneNumber) {
      setError("Заполните все поля.");
      return;
    }

    if (!/^\+7\d{10}$/.test(phoneNumber)) {
      setError("Введите корректный номер телефона: +7 и 10 цифр.");
      return;
    }

    setLoading(true);

    try {
      const result = await authClient.updateUser({
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        phoneNumber,
        address: form.address.trim(),
      });

      if (result.error) {
        throw new Error(
          result.error.message || "Не удалось сохранить изменения.",
        );
      }

      await refetch();

      setMessage("Данные профиля успешно обновлены.");
    } catch (err) {
      setError(err.message || "Произошла ошибка при сохранении.");
    } finally {
      setLoading(false);
    }
  }

  if (isPending) {
    return <main className={styles.page}>Загрузка профиля...</main>;
  }

  if (!user) {
    return <main className={styles.page}>Необходимо войти в аккаунт.</main>;
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.avatar}>
          {(user.name || user.email || "U")[0].toUpperCase()}
        </div>

        <h1 className={styles.title}>Личный кабинет</h1>
        <p className={styles.subtitle}>Информация о вашем аккаунте SmartÜi</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.field}>
            <span>Имя</span>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Фамилия</span>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Телефон</span>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              autoComplete="tel"
              inputMode="numeric"
              maxLength={12}
              required
            />
          </label>

          <div className={styles.field}>
            <span>Электронная почта</span>
            <strong>{user.email}</strong>
          </div>

          <label className={styles.field}>
            <span>Адрес проживания</span>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Город, улица, дом, квартира"
              rows={3}
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}
          {message && <p className={styles.success}>{message}</p>}

          <button
            type="submit"
            className={styles.saveButton}
            disabled={loading}
          >
            {loading ? "Сохранение..." : "Сохранить изменения"}
          </button>
        </form>
      </section>
    </main>
  );
}
