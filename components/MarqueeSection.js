"use client";

const items = [
  "Internet Satelital",
  "4G / 5G",
  "SIMs M2M",
  "IoT",
  "Cobertura Nacional",
  "Conectividad Híbrida",
  "MiFi",
  "eSIM",
  "Hotspots",
  "Routers Móviles",
];

const MarqueeSection = () => {
  // Duplicamos la lista para que el loop sea continuo
  const loop = [...items, ...items];
  return (
    <section className="binja-marquee">
      <div className="binja-marquee__track">
        {loop.map((item, i) => (
          <div className="binja-marquee__item" key={i}>
            <span>{item}</span>
            <span className="binja-marquee__dot" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
