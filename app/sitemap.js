const BASE = "https://binjamovil.com";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/amplimax", priority: 0.9 },
    { path: "/cobertura", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    { path: "/privacidad", priority: 0.3 },
    { path: "/aviso-privacidad", priority: 0.3 },
    { path: "/terminos-condiciones", priority: 0.3 },
    { path: "/codigo-etica", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
