import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

export const metadata = {
  title: "Código de Ética - Binja Móvil",
  description:
    "Código de Ética de Binja Móvil: los principios y valores que rigen nuestras relaciones, el cumplimiento legal, el respeto laboral y nuestra política de cero tolerancia a la corrupción.",
};

const secciones = [
  {
    id: "confianza",
    title: "1. Confianza en nuestras relaciones",
    body: (
      <p>
        En <strong>Binja Móvil</strong> la confianza es la base de todo lo que
        hacemos. La demostramos actuando con integridad, transparencia y
        responsabilidad en todas nuestras relaciones con clientes, colaboradores
        y proveedores.
      </p>
    ),
  },
  {
    id: "cumplimiento",
    title: "2. Cumplimiento legal",
    body: (
      <p>
        Cumplimos con las leyes y regulaciones aplicables como un valor central
        de nuestra cultura, integrando el cumplimiento legal en nuestras
        operaciones diarias.
      </p>
    ),
  },
  {
    id: "confidencialidad",
    title: "3. Confidencialidad y protección de la información",
    body: (
      <p>
        Nos comprometemos a resguardar la información de clientes, colaboradores
        y proveedores, protegiendo los datos personales, evitando su divulgación
        no autorizada y garantizando la privacidad en nuestros servicios
        tecnológicos.
      </p>
    ),
  },
  {
    id: "uso-informacion",
    title: "4. Uso responsable de la información",
    body: (
      <p>
        La información interna y estratégica es confidencial. Queda prohibido
        compartir en redes sociales datos no públicos, usar para fines
        personales información sensible o divulgar a terceros material
        privilegiado.
      </p>
    ),
  },
  {
    id: "competencia",
    title: "5. Competencia justa",
    body: (
      <p>
        Competimos de forma ética y transparente, rechazando prácticas
        monopólicas, la obtención indebida de información de la competencia y
        cualquier método ilegal para obtener ventajas.
      </p>
    ),
  },
  {
    id: "conflicto",
    title: "6. Conflicto de interés",
    body: (
      <p>
        Cualquier posible conflicto de interés debe reportarse de inmediato para
        asegurar decisiones de negocio objetivas y transparentes.
      </p>
    ),
  },
  {
    id: "innovacion",
    title: "7. Innovación tecnológica",
    body: (
      <p>
        Buscamos la mejora continua de nuestras redes, sistemas y servicios para
        ofrecer mayor calidad, desempeño y mejores soluciones a nuestros
        clientes.
      </p>
    ),
  },
  {
    id: "derechos-humanos",
    title: "8. Derechos humanos",
    body: (
      <p>
        Rechazamos el abuso, la explotación, el trabajo forzoso y el trabajo
        infantil, y colaboramos únicamente con entidades alineadas a estos
        principios.
      </p>
    ),
  },
  {
    id: "respeto-laboral",
    title: "9. Libertad y respeto laboral",
    body: (
      <p>
        Respetamos el derecho de los colaboradores a la libre expresión,
        asociación y participación laboral, sin represalias de ningún tipo.
      </p>
    ),
  },
  {
    id: "inclusion",
    title: "10. Inclusión y no discriminación",
    body: (
      <p>
        Fomentamos un entorno incluyente que valora el talento por su capacidad,
        con cero tolerancia a la discriminación o el acoso.
      </p>
    ),
  },
  {
    id: "salud-seguridad",
    title: "11. Salud y seguridad",
    body: (
      <p>
        Promovemos lugares de trabajo seguros y saludables, priorizando la
        prevención de riesgos y el bienestar de nuestros colaboradores.
      </p>
    ),
  },
  {
    id: "ambiente",
    title: "12. Ambiente libre de violencia",
    body: (
      <p>
        Mantenemos entornos basados en el respeto profesional, prohibiendo la
        violencia física o verbal, el acoso laboral o sexual y cualquier
        conducta ofensiva.
      </p>
    ),
  },
  {
    id: "sustancias",
    title: "13. Uso de alcohol y sustancias",
    body: (
      <p>
        Está prohibido trabajar bajo la influencia de sustancias, así como su
        consumo o distribución en las instalaciones o en las instalaciones de
        nuestros clientes.
      </p>
    ),
  },
  {
    id: "corrupcion",
    title: "14. Cero tolerancia a la corrupción",
    body: (
      <p>
        Mantenemos una política estricta de cero tolerancia a la corrupción y el
        fraude. Cualquier violación será investigada y sancionada conforme a la
        ley.
      </p>
    ),
  },
];

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-legal-hero">
        <div className="binja-legal-hero__overlay" />
        <div className="container binja-legal-hero__content">
          <span className="binja-legal-hero__label">LEGAL</span>
          <h1 className="binja-legal-hero__title">Código de Ética</h1>
          <p className="binja-legal-hero__desc">
            En Binja Móvil la confianza es la base de todo lo que hacemos. Estos
            son los principios y valores que rigen nuestras relaciones y nuestra
            forma de trabajar.
          </p>
          <span className="binja-legal-hero__date">
            Última actualización: junio 2026
          </span>
        </div>
      </section>

      {/* Contenido */}
      <section className="binja-legal">
        <div className="container">
          <div className="binja-legal__wrap">
            {secciones.map((s) => (
              <div className="binja-legal__block" key={s.id} id={s.id}>
                <h2>{s.title}</h2>
                <div className="binja-legal__body">{s.body}</div>
              </div>
            ))}

            <div className="binja-legal__cta">
              <p>¿Tienes dudas sobre nuestro Código de Ética?</p>
              <Link href="contacto" className="binja-legal__btn">
                Contáctanos <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
