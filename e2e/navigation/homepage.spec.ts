import { test, expect } from "@playwright/test";

test("Главная страница SmartÜi открывается", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("SmartÜi — Умный дом с Алисой");
  await page.pause();
});

test("Страница имеет правильный заголовок", async ({ page }) => {
  await page.goto("/");
  const locator = page.locator("h1");

  await expect(locator).toHaveText("Умный дом с Алисой в Алматы");
});

test("Основные пункты меню отображаются и ведут на правильные страницы", async ({
  page,
}) => {
  await page.goto("/");

  // Открываем бургер-меню
  const menu = page.locator(".burger-menu");
  await menu.click();

  // Проверяем пункты меню и их адреса
  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "/catalog" },
    { name: "Услуги", href: "/services" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "Пакеты", href: "/packages" },
  ];

  for (const item of menuItems) {
    const link = page.getByRole("link", { name: item.name, exact: true });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", item.href);
  }
});

test("Переходы по основным ссылкам работают", async ({ page }) => {
  await page.goto("/");
  // Открываем бургер-меню
  const menu = page.locator(".burger-menu");

  const menuItems = [
    { name: "Каталог", href: "/catalog" },
    { name: "Услуги", href: "/services" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "Пакеты", href: "/packages" },
    { name: "Главная", href: "/" },
  ];

  for (const item of menuItems) {
    await menu.click();

    await page.getByRole("link", { name: item.name, exact: true }).click();

    await expect(page).toHaveURL(item.href);
  }
});

test("Страницы сайта не возвращают ошибку 404", async ({ page }) => {
  await page.goto("/");
  // Открываем бургер-меню
  const menu = page.locator(".burger-menu");

  const menuItems = [
    { name: "Каталог", href: "/catalog" },
    { name: "Услуги", href: "/services" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "Пакеты", href: "/packages" },
    { name: "Главная", href: "/" },
  ];

  for (const item of menuItems) {
    const response = await page.goto(item.href);

    await menu.click();
    await page.getByRole("link", { name: item.name, exact: true }).click();

    expect(response?.status()).not.toBe(404);
  }
});
