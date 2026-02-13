import { useState } from "react";

export default function ContactForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let x = e.target.value.replace(/\D/g, "");
    if (x.startsWith("7")) x = x.slice(1);
    let formatted = "+7 ";
    if (x.length > 0) formatted += x.substring(0, 3);
    if (x.length > 3) formatted += " " + x.substring(3, 6);
    if (x.length > 6) formatted += " " + x.substring(6, 8);
    if (x.length > 8) formatted += " " + x.substring(8, 10);
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

          fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
              Accept: "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                alert("Форма отправлена! Мы свяжемся с вами в ближайшее время");
                form.reset();
                setValue("");
              } else {
                alert("Ошибка отправки формы");
              }
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
        <button type="submit" data-i18n="form_send">
          Отправить
        </button>
      </form>
    </section>
  );
}
