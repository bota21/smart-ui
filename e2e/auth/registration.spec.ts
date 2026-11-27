import { test, expect } from "@playwright/test";

test("Пользователь может зарегистрироваться и получить тестовое письмо", async ({
  page,
  request,
}) => {
  const email = `e2e-${Date.now()}@example.com`;
  const password = "TestPassword123!";

  await request.delete("/api/e2e/emails");

  await page.goto("/register");

  await page.getByLabel("Имя").fill("E2E");
  await page.getByLabel("Фамилия").fill("Test");
  await page.getByLabel("Номер телефона").fill("+77771234567");
  await page.getByLabel("Электронная почта").fill(email);
  await page.getByLabel("Пароль", { exact: true }).fill(password);
  await page.getByLabel("Повторите пароль").fill(password);

  await page
    .getByRole("button", {
      name: "Зарегистрироваться",
    })
    .click();

  await expect(
    page.getByRole("heading", {
      name: "Проверьте свою почту",
    }),
  ).toBeVisible();

  const response = await request.get("/api/e2e/emails");
  expect(response.ok()).toBeTruthy();

  const data = await response.json();

  expect(data.emails.length).toBeGreaterThan(0);
  expect(data.emails[0].to).toBe(email);
  expect(data.emails[0].html).toContain("Подтвердить электронную почту");
});
