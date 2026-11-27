# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth\registration.spec.ts >> Пользователь может зарегистрироваться и получить тестовое письмо
- Location: e2e\auth\registration.spec.ts:3:1

# Error details

```
TypeError: apiRequestContext.delete: Invalid URL
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Пользователь может зарегистрироваться и получить тестовое письмо", async ({
  4  |   page,
  5  |   request,
  6  | }) => {
  7  |   const email = `e2e-${Date.now()}@example.com`;
  8  |   const password = "TestPassword123!";
  9  | 
> 10 |   await request.delete("/api/e2e/emails");
     |                       ^ TypeError: apiRequestContext.delete: Invalid URL
  11 | 
  12 |   await page.goto("/register");
  13 | 
  14 |   await page.getByLabel("Имя").fill("E2E");
  15 |   await page.getByLabel("Фамилия").fill("Test");
  16 |   await page.getByLabel("Номер телефона").fill("+77771234567");
  17 |   await page.getByLabel("Электронная почта").fill(email);
  18 |   await page.getByLabel("Пароль", { exact: true }).fill(password);
  19 |   await page.getByLabel("Повторите пароль").fill(password);
  20 | 
  21 |   await page
  22 |     .getByRole("button", {
  23 |       name: "Зарегистрироваться",
  24 |     })
  25 |     .click();
  26 | 
  27 |   await expect(
  28 |     page.getByRole("heading", {
  29 |       name: "Проверьте свою почту",
  30 |     }),
  31 |   ).toBeVisible();
  32 | 
  33 |   const response = await request.get("/api/e2e/emails");
  34 |   expect(response.ok()).toBeTruthy();
  35 | 
  36 |   const data = await response.json();
  37 | 
  38 |   expect(data.emails.length).toBeGreaterThan(0);
  39 |   expect(data.emails[0].to).toBe(email);
  40 |   expect(data.emails[0].html).toContain("Подтвердить электронную почту");
  41 | });
  42 | 
```