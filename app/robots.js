const BASE = "https://binjamovil.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/about",
          "/checkout",
          "/faq",
          "/pricing",
          "/news",
          "/news-details",
          "/service",
          "/service-details",
          "/shop",
          "/shop-cart",
          "/shop-details",
          "/shows",
          "/shows-details",
          "/team",
          "/team-details",
          "/index-2",
          "/index-3",
          "/index-4",
          "/index-one-page",
          "/index-two-page",
          "/index-three-page",
          "/index-four-page",
        ],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
