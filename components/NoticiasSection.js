"use client";
import Link from "next/link";

const articulos = [
  {
    img: "noticia-1.jpg",
    category: "Tecnología",
    title: "Starlink V3: más capacidad y menor latencia",
    date: "Junio 15, 2025",
    readTime: "3 min de lectura",
    excerpt:
      "La nueva generación de satélites Starlink V3 promete más de 10 veces el ancho de banda de V2, mayor capacidad total de red y una reducción importante en la latencia mínima.",
  },
  {
    img: "noticia-2.jpg",
    category: "Industria",
    title: "5G llega a carreteras rurales: ¿qué significa para flotillas?",
    date: "Junio 10, 2025",
    readTime: "4 min de lectura",
    excerpt:
      "Las nuevas bandas de espectro habilitadas por el IFT permitirán cobertura 5G en carreteras secundarias, beneficiando a empresas de logística y transporte.",
  },
  {
    img: "noticia-3.jpg",
    category: "Negocios",
    title: "El internet híbrido se consolida como estándar en construcción",
    date: "Junio 5, 2025",
    readTime: "5 min de lectura",
    excerpt:
      "Las grandes constructoras mexicanas adoptan conectividad M2M para monitorear obras en tiempo real, reduciendo costos operativos hasta en un 30%.",
  },
];

const NoticiasSection = () => {
  return (
    <section className="binja-noticias">
      <div className="container">
        <div className="binja-noticias__head">
          <span className="binja-noticias__label">NOTICIAS Y ARTÍCULOS</span>
          <h2 className="binja-noticias__title">
            Lo último en <br /> conectividad móvil
          </h2>
          <p className="binja-noticias__subtitle">
            Noticias, tendencias y análisis del mundo de la conectividad
            híbrida.
          </p>
        </div>

        <div className="row g-4">
          {articulos.map((a, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <article className="binja-noticia-card">
                <div className="binja-noticia-card__img">
                  <img src={`assets/img/noticias/${a.img}`} alt={a.title} />
                  <span className="binja-noticia-card__badge">{a.category}</span>
                </div>
                <div className="binja-noticia-card__body">
                  <h3 className="binja-noticia-card__title">{a.title}</h3>
                  <div className="binja-noticia-card__meta">
                    <span>
                      <i className="far fa-calendar" /> {a.date}
                    </span>
                    <span>
                      <i className="far fa-clock" /> {a.readTime}
                    </span>
                  </div>
                  <p className="binja-noticia-card__excerpt">{a.excerpt}</p>
                  <Link href="news" className="binja-noticia-card__link">
                    Leer Artículo <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
