/* === GENERADOR DE SITEMAP === */
/* Genera dinámicamente el sitemap.xml para motores de búsqueda con la URL principal y referencias de idioma */

import type { MetadataRoute } from "next";

const BASE_URL = "https://edwintovar.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: BASE_URL,
          en: BASE_URL,
        },
      },
    },
  ];
}
