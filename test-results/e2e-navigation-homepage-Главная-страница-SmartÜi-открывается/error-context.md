# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\navigation\homepage.spec.ts >> Главная страница SmartÜi открывается
- Location: e2e\navigation\homepage.spec.ts:3:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Главная страница SmartÜi открывается", async ({ page }) => {
> 4  |   await page.goto("/");
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  5  | 
  6  |   await expect(page).toHaveTitle("SmartÜi — Умный дом с Алисой");
  7  |   await page.pause();
  8  | });
  9  | 
  10 | test("Страница имеет правильный заголовок", async ({ page }) => {
  11 |   await page.goto("/");
  12 |   const locator = page.locator("h1");
  13 | 
  14 |   await expect(locator).toHaveText("Умный дом с Алисой в Алматы");
  15 | });
  16 | 
  17 | test("Основные пункты меню отображаются и ведут на правильные страницы", async ({
  18 |   page,
  19 | }) => {
  20 |   await page.goto("/");
  21 | 
  22 |   // Открываем бургер-меню
  23 |   const menu = page.locator(".burger-menu");
  24 |   await menu.click();
  25 | 
  26 |   // Проверяем пункты меню и их адреса
  27 |   const menuItems = [
  28 |     { name: "Главная", href: "/" },
  29 |     { name: "Каталог", href: "/catalog" },
  30 |     { name: "Услуги", href: "/services" },
  31 |     { name: "Портфолио", href: "/portfolio" },
  32 |     { name: "Пакеты", href: "/packages" },
  33 |   ];
  34 | 
  35 |   for (const item of menuItems) {
  36 |     const link = page.getByRole("link", { name: item.name, exact: true });
  37 | 
  38 |     await expect(link).toBeVisible();
  39 |     await expect(link).toHaveAttribute("href", item.href);
  40 |   }
  41 | });
  42 | 
  43 | test("Переходы по основным ссылкам работают", async ({ page }) => {
  44 |   await page.goto("/");
  45 |   // Открываем бургер-меню
  46 |   const menu = page.locator(".burger-menu");
  47 | 
  48 |   const menuItems = [
  49 |     { name: "Каталог", href: "/catalog" },
  50 |     { name: "Услуги", href: "/services" },
  51 |     { name: "Портфолио", href: "/portfolio" },
  52 |     { name: "Пакеты", href: "/packages" },
  53 |     { name: "Главная", href: "/" },
  54 |   ];
  55 | 
  56 |   for (const item of menuItems) {
  57 |     await menu.click();
  58 | 
  59 |     await page.getByRole("link", { name: item.name, exact: true }).click();
  60 | 
  61 |     await expect(page).toHaveURL(item.href);
  62 |   }
  63 | });
  64 | 
  65 | test("Страницы сайта не возвращают ошибку 404", async ({ page }) => {
  66 |   await page.goto("/");
  67 |   // Открываем бургер-меню
  68 |   const menu = page.locator(".burger-menu");
  69 | 
  70 |   const menuItems = [
  71 |     { name: "Каталог", href: "/catalog" },
  72 |     { name: "Услуги", href: "/services" },
  73 |     { name: "Портфолио", href: "/portfolio" },
  74 |     { name: "Пакеты", href: "/packages" },
  75 |     { name: "Главная", href: "/" },
  76 |   ];
  77 | 
  78 |   for (const item of menuItems) {
  79 |     const response = await page.goto(item.href);
  80 | 
  81 |     await menu.click();
  82 |     await page.getByRole("link", { name: item.name, exact: true }).click();
  83 | 
  84 |     expect(response?.status()).not.toBe(404);
  85 |   }
  86 | });
  87 | 
```