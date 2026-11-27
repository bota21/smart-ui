import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Папка с тестами — текущая папка e2e и все её подпапки
  testDir: ".",

  // Результаты тестирования сохраняются внутри e2e
  outputDir: "./results/test-results",

  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",

  use: {
    baseURL: "http://127.0.0.1:3000",
    // baseURL: "https://smartui.kz",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "cd ../ && npx dotenv -e .env.test -o -- npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: false,
    timeout: 120_000,
    env: {
      E2E_TEST_MODE: "true",
      BETTER_AUTH_URL: "http://127.0.0.1:3000",
    },
  },
});
