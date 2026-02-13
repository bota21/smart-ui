import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [value, setValue] = useState("");
  const [modal, setModal] = useState({
    show: false,
    success: true,
  });

  const { t, lang } = useLanguage();

  useEffect(() => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }, [lang, t, modal.show]);

  const handleChange = (e) => {
    let digits = e.target.value.replace(/\D/g, "");

    // если ввели 7 или 8 в начале — убираем
    if (digits.startsWith("7") || digits.startsWith("8")) {
      digits = digits.slice(1);
    }

    // ограничиваем строго 10 цифрами
    digits = digits.slice(0, 10);

    let formatted = "+7";

    if (digits.length > 0) formatted += " " + digits.slice(0, 3);
    if (digits.length >= 4) formatted += " " + digits.slice(3, 6);
    if (digits.length >= 7) formatted += " " + digits.slice(6, 8);
    if (digits.length >= 9) formatted += " " + digits.slice(8, 10);

    setValue(formatted);
  };

  return (
    <section id="form">
      <h2 data-i18n="form_header" className="form_header">
        Оставьте заявку
      </h2>
      <form
        action="https://formspree.io/f/mjgeybwd" // ваш URL формы на Formspree
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;

          const formData = new FormData(form);

          const digits = value.replace(/\D/g, "");

          if (digits.length !== 11) {
            setModal({ show: true, success: false });
            return;
          }

          fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
              Accept: "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                setModal({ show: true, success: true });
                form.reset();
                setValue("");
              } else {
                setModal({ show: true, success: false });
              }
            })
            .catch((error) => {
              console.error(error);
              setModal({ show: true, success: false });
            })
            .catch((error) => {
              console.error(error);
              alert("Ошибка отправки формы");
            });
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Ваше имя / Аты-жөні / Name"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="+7 777 123 45 67"
          value={value}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={value.replace(/\D/g, "").length !== 11}
          data-i18n="form_send"
        >
          Отправить
        </button>
      </form>
      {modal.show && (
        <div className="modal-overlay">
          <div className="modal">
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>
              {modal.success ? "✓" : "⚠"}
            </div>

            <h3
              data-i18n={
                modal.success ? "modal_success_title" : "modal_error_title"
              }
            >
              {modal.success ? "Спасибо! Заявка отправлена" : "Ошибка отправки"}
            </h3>

            <p
              data-i18n={
                modal.success ? "modal_success_text" : "modal_error_text"
              }
            >
              {modal.success
                ? "Мы свяжемся с вами в ближайшее время"
                : "Попробуйте отправить форму позже"}
            </p>

            <button
              data-i18n="modal_close"
              onClick={() => setModal({ ...modal, show: false })}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
