import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright Config: Minimalista y de Alto ROI.
 * Enfocado en estabilidad y velocidad.
 */
export default defineConfig({
  testDir: "./specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? "100%" : undefined, // Maximizamos recursos en CI
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: "http://localhost:3000/portfolio",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],
  webServer: {
    // Comando simplificado y robusto para servir el build de producción
    command: "npm run build && npx serve out -l 3000",
    url: "http://localhost:3000/portfolio",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
