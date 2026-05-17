import { test, expect } from "@playwright/test";

test.describe("Pruebas de API - Sitio Est\u00E1tico", () => {
  const BASE_URL = "http://localhost:3000";

  test("GET / debe retornar status 200", async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
  });

  test("GET /sitemap.xml debe retornar XML v\u00E1lido", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/sitemap.xml`);
    expect(response.status()).toBe(200);
    const headers = response.headers();
    expect(headers["content-type"]).toContain("xml");
  });

  test("GET /_not-found debe retornar status 404", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/ruta-inexistente`);
    expect(response.status()).toBe(404);
  });

  test("verificar encabezados de seguridad en la respuesta", async ({ request }) => {
    const response = await request.get(BASE_URL);
    const headers = response.headers();
    expect(headers["content-type"]).toContain("text/html");
  });

  test("el HTML renderizado debe contener los meta tags SEO", async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.text();
    expect(body).toContain("Edwin Tovar");
    expect(body).toContain("lang=\"es\"");
  });

  test("el sitemap debe contener la URL principal", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/sitemap.xml`);
    const body = await response.text();
    expect(body).toContain("edwintovar.dev");
    expect(body).toContain("<url>");
    expect(body).toContain("<loc>");
  });

  test("verificar que no hay recursos rotos (im\u00E1genes, scripts)", async ({ page }) => {
    const responses: string[] = [];
    page.on("response", (response) => {
      if (response.status() >= 400) {
        responses.push(`${response.url()} -> ${response.status()}`);
      }
    });
    await page.goto(BASE_URL);
    expect(responses).toHaveLength(0);
  });
});
