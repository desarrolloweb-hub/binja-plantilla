# Binja Plantilla

Proyecto React / Next.js basado en una plantilla de landing / sitio web corporativo.

## Estado
- `next` 14.2.5
- `react` 18
- `react-dom` 18
- `react-bootstrap`, `swiper`, `react-slick`, `react-player`

## Estructura principal
- `app/` — páginas de la aplicación
- `components/` — componentes reutilizables
- `layouts/` — encabezado, pie de página y otros layouts
- `public/` — assets estáticos y estilos globales
- `utility/` — utilidades y hooks

## Comandos
```bash
npm install
npm run dev
npm run build
npm start
```

## Páginas activas (rutas reales del sitio)
Estas son las únicas páginas publicadas. El menú y el footer apuntan a estas rutas:

| Ruta | Descripción |
|------|-------------|
| `/` | Home (hero, soluciones, sectores, equipos, casos, FAQ, noticias) |
| `/amplimax` | Landing del producto Amplimax (agricultura 4.0) |
| `/cobertura` | Cobertura |
| `/contacto` | Contacto (formulario + datos) |
| `/privacidad` | Política de privacidad |
| `/aviso-privacidad` | Aviso de privacidad |
| `/terminos-condiciones` | Términos y condiciones |
| `/codigo-etica` | Código de ética |

SEO: `app/sitemap.js` y `app/robots.js` generan `/sitemap.xml` y `/robots.txt`
apuntando solo a estas rutas (dominio `https://binjamovil.com`).

## Páginas de plantilla ELIMINADAS
La plantilla original (NetBand) traía muchas páginas demo en inglés que **se
eliminaron** porque no se usan y Google las estaba indexando con contenido
incorrecto. Si en algún momento se necesita alguna, hay que recrearla en español:

```
about, checkout, faq, pricing, news, news-details, service, service-details,
shop, shop-cart, shop-details, shows, shows-details, team, team-details,
index-2, index-3, index-4, index-one-page, index-two-page, index-three-page,
index-four-page
```

> Nota: en `components/` aún quedan componentes de la plantilla que ya no se
> usan (p. ej. `BlogSideBar`, `MovieSlider`, `Home2/3/4`, `ManageItSection`).
> No afectan el build; se pueden borrar en una limpieza posterior si se desea.

## Notas
- Asegúrate de no subir `node_modules/`, `.next/` ni archivos de entorno.
- Si agregas variables de entorno, usa `.env` y añádelo a `.gitignore`.
