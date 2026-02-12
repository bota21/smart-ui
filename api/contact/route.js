import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, phone } = data;

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: "Заполните все поля" }), {
        status: 400,
      });
    }

    // Настройка почты
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp сервер
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true для 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SmartUi Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // куда приходят заявки
      subject: "Новая заявка с сайта",
      text: `Имя: ${name}\nТелефон: ${phone}`,
      html: `<p><strong>Имя:</strong> ${name}</p><p><strong>Телефон:</strong> ${phone}</p>`,
    });

    return new Response(JSON.stringify({ message: "Заявка отправлена!" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Ошибка отправки" }), {
      status: 500,
    });
  }
}
