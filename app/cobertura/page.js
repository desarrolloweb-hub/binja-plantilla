import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

const stats = [
  { value: "12", label: "Estados con cobertura" },
  { value: "85+", label: "Municipios atendidos" },
  { value: "100%", label: "Cobertura satelital nacional" },
  { value: "24/7", label: "Monitoreo de red" },
];

const estados = [
  {
    estado: "Nuevo León",
    destacado: true,
    municipios: [
      "Agua Fría",
      "Allende",
      "Apodaca",
      "Cadereyta",
      "China",
      "Ciénega de Flores",
      "El Carmen",
      "El Cercado",
      "Escobedo",
      "García",
      "Guadalupe",
      "Hidalgo",
      "Hualahuises",
      "Juárez",
      "Linares",
      "Los Ramones",
      "Marín",
      "Montemorelos",
      "Monterrey",
      "Montesur",
      "Pesquería",
      "Salinas Victoria",
      "San Nicolás de los Garza",
      "San Pedro Garza García",
      "Santa Catarina",
      "Santiago",
      "Zuazua",
    ],
  },
  {
    estado: "Coahuila",
    municipios: [
      "Acuña",
      "Agua Nueva",
      "Arteaga",
      "Barroterán",
      "Derramadero",
      "Morelos",
      "Múzquiz",
      "Nueva Rosita",
      "Piedras Negras",
      "Ramos Arizpe",
      "Sabinas",
      "Saltillo",
      "San Carlos",
      "San Juan de la Vaquería",
      "San Juan de Sabinas",
      "Torreón",
      "Villa Unión",
    ],
  },
  {
    estado: "Estado de México",
    municipios: [
      "Cuautitlán Izcalli",
      "Huehuetoca",
      "Jaltenco",
      "Naucalpan",
      "Nextlalpan",
      "San Mateo Atenco",
      "Teoloyucan",
      "Tepotzotlán",
      "Tizayuca",
      "Tlalnepantla de Baz",
      "Toluca",
      "Xonacatlán",
      "Zumpango",
    ],
  },
  {
    estado: "Tamaulipas",
    municipios: [
      "Altamira",
      "Ciudad Madero",
      "Nuevo Laredo",
      "Reynosa",
      "Río Bravo",
      "Tampico",
    ],
  },
  {
    estado: "Jalisco",
    municipios: [
      "Acatlán de Juárez",
      "El Salto",
      "Guadalajara",
      "San Pedro Tlaquepaque",
      "Tonalá",
      "Zapopan",
    ],
  },
  {
    estado: "Querétaro",
    municipios: [
      "Corregidora",
      "El Marqués",
      "Pedro de Escobedo",
      "Querétaro",
      "San Juan del Río",
    ],
  },
  {
    estado: "Guanajuato",
    municipios: ["Celaya", "Irapuato", "León", "Silao"],
  },
  {
    estado: "Yucatán",
    municipios: ["Conkal", "Mérida", "Progreso", "Telchac"],
    zonas: [
      "Caucel",
      "Chablekal",
      "Chelem",
      "Cholul",
      "Chuburná",
      "Komchem",
      "Oncán",
      "Sacapuc",
      "Sierra Papacal",
      "Tamanché",
      "Telchac",
      "Timul",
      "Uaymitún",
    ],
  },
  {
    estado: "Puebla",
    municipios: ["Cuautlancingo", "Puebla"],
  },
  {
    estado: "Chihuahua",
    municipios: ["Chihuahua"],
  },
  {
    estado: "Ciudad de México",
    municipios: ["Ciudad de México"],
  },
  {
    estado: "San Luis Potosí",
    municipios: ["San Luis Potosí"],
  },
];

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/* Hero */}
      <section className="binja-cob-hero">
        <div className="binja-cob-hero__overlay" />
        <div className="container binja-cob-hero__content">
          <span className="binja-cob-hero__label">COBERTURA</span>
          <h1 className="binja-cob-hero__title">
            Conectividad donde tu operación lo necesita
          </h1>
          <p className="binja-cob-hero__desc">
            Llevamos internet satelital y móvil 4G/5G a empresas, flotas y sitios
            remotos en México. Conoce los estados y municipios donde ya contamos
            con cobertura activa.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="binja-cob-stats">
        <div className="container">
          <div className="binja-cob-stats__grid">
            {stats.map((s, i) => (
              <div className="binja-cob-stat" key={i}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estados y municipios */}
      <section className="binja-cob-zones">
        <div className="container">
          <div className="binja-cob-zones__head">
            <span className="binja-cob-eyebrow">ZONAS DE COBERTURA</span>
            <h2 className="binja-cob-zones__title">
              Estados y municipios donde operamos
            </h2>
            <p className="binja-cob-zones__subtitle">
              Cobertura móvil terrestre en las principales ciudades y áreas
              metropolitanas, respaldada por conectividad satelital disponible en
              todo el territorio nacional.
            </p>
          </div>

          <div className="row g-4">
            {estados.map((e, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className={`binja-cob-card${
                    e.destacado ? " binja-cob-card--featured" : ""
                  }`}
                >
                  {e.destacado && (
                    <span className="binja-cob-card__ribbon">Sede</span>
                  )}
                  <div className="binja-cob-card__head">
                    <div className="binja-cob-card__icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      <h3>{e.estado}</h3>
                      <span>{e.municipios.length} municipios</span>
                    </div>
                  </div>
                  <ul className="binja-cob-card__list">
                    {e.municipios.map((m, j) => (
                      <li key={j}>
                        <i className="fas fa-check" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  {e.zonas && (
                    <div className="binja-cob-card__zones">
                      <span className="binja-cob-card__zones-label">
                        Zonas especiales
                      </span>
                      <div className="binja-cob-card__tags">
                        {e.zonas.map((z, k) => (
                          <span key={k}>{z}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="binja-cob-note">
            <i className="fas fa-satellite-dish" />
            ¿No ves tu ciudad en la lista? Gracias a nuestra red satelital podemos
            llevar conectividad prácticamente a cualquier punto del país.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="binja-cob-cta">
        <div className="container">
          <div className="binja-cob-cta__box">
            <div>
              <h2>Verifica la cobertura en tu zona</h2>
              <p>
                Cuéntanos dónde está tu operación y te confirmamos la mejor
                solución de conectividad disponible.
              </p>
            </div>
            <div className="binja-cob-cta__btns">
              <Link href="contact" className="binja-cob-cta__btn">
                Consultar cobertura <i className="fas fa-chevron-right" />
              </Link>
              <a
                href="https://wa.me/525665938841"
                target="_blank"
                rel="noopener noreferrer"
                className="binja-cob-cta__btn binja-cob-cta__btn--wa"
              >
                <i className="fab fa-whatsapp" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;
