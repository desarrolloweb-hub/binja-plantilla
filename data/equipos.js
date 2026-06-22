// Datos de los equipos de conectividad de Binja Móvil, organizados por marca.
// Se usan en: EquiposSection (home), menú de navegación (dropdown),
// índice /equipos y páginas interiores /equipos/[slug].

export const equipos = [
  {
    slug: "elsys-amplimax",
    label: "Elsys - Amplimax",
    title: "Elsys · Amplimax",
    icon: "fas fa-satellite-dish",
    shortDesc:
      "Antenas amplificadoras de largo alcance para conectar IoT, sensores y drones en zonas remotas.",
    heroDesc:
      "Antenas integradas de alto rendimiento que llevan internet 4G hasta donde la señal no llega, con alcance de hasta 30 km.",
    intro:
      "Las antenas Elsys / Amplimax amplifican y enfocan la señal celular para entregar conectividad confiable en zonas rurales y remotas. Ideales para agricultura 4.0, IoT, drones y sensores, conectan tu operación donde la infraestructura tradicional no llega.",
    products: [
      {
        img: "antena-exterior.jpg",
        name: "Antena Direccional de Alto Rendimiento",
        desc: "Enfoca la señal hacia la torre para máxima cobertura en zonas lejanas.",
        specs: ["Exterior", "Direccional", "Alta ganancia"],
      },
      {
        img: "antena-exterior.jpg",
        name: "Kit de Antenas para Router 4G/5G",
        desc: "Mejora la recepción de tu router en sitios con señal débil.",
        specs: ["4G/5G", "Kit completo", "Fácil instalación"],
      },
      {
        img: "antena-exterior.jpg",
        name: "Amplimax 4G - Antena Amplificadora de Largo Alcance",
        desc: "Antenas integradas 4G/3G/2G con hasta 30 km de alcance para conectar sensores, drones e IoT en zonas remotas.",
        specs: ["30 km alcance", "4G/3G/2G", "IoT"],
        link: "/amplimax",
        fit: "cover",
      },
    ],
  },
  {
    slug: "teltonika",
    label: "Teltonika",
    title: "Teltonika",
    icon: "fas fa-route",
    shortDesc:
      "Routers celulares 4G/5G robustos y administrables para conectividad empresarial.",
    heroDesc:
      "Routers celulares confiables y plug-and-play para conectar tu operación en minutos, con gestión remota.",
    intro:
      "Los routers Teltonika ofrecen conectividad celular 4G/5G estable para empresas, flotillas y sitios temporales. Compactos, administrables de forma remota y listos para usarse, mantienen tu operación conectada estés donde estés.",
    products: [
      {
        img: "router-portatil.jpg",
        name: "CSG m106 Pro - Router 4G Portátil",
        desc: "Compacto y plug-and-play para conectar tu equipo en minutos.",
        specs: ["4G LTE", "WiFi", "Portátil"],
      },
      {
        img: "router-rugged.jpg",
        name: "Katalyst Spark 5G - Router Empresarial",
        desc: "Alto rendimiento para operaciones que exigen máxima velocidad.",
        specs: ["5G", "Multi-SIM", "Empresarial"],
      },
      {
        img: "mifi-hotspot.jpg",
        name: "InHand CR202 Lite - Router 4G LTE CAT6 con WiFi",
        desc: "Conectividad confiable con WiFi integrado para varios dispositivos.",
        specs: ["LTE CAT6", "WiFi", "Compacto"],
      },
    ],
  },
  {
    slug: "ruijie",
    label: "Ruijie",
    title: "Ruijie",
    icon: "fas fa-shield-alt",
    shortDesc:
      "Equipos de red industriales y rugged para entornos exigentes y operación continua.",
    heroDesc:
      "Equipos de red resistentes para entornos industriales, obra y campo, donde la operación no puede detenerse.",
    intro:
      "Los equipos Ruijie están pensados para condiciones exigentes: polvo, agua, vibración y operación continua. Conectan obras, plantas industriales y sitios de campo con hardware reforzado y rendimiento confiable las 24 horas.",
    products: [
      {
        img: "router-rugged.jpg",
        name: "Katalyst Spark 5G - Router Industrial Rugged",
        desc: "Resistente a polvo, agua y vibración para entornos industriales.",
        specs: ["IP67", "5G", "Industrial"],
      },
      {
        img: "router-portatil.jpg",
        name: "CSG m106 Pro - Router 4G para Campo",
        desc: "Pensado para obra y campo, soporta condiciones exigentes.",
        specs: ["4G", "Robusto", "Campo"],
      },
      {
        img: "router-rugged.jpg",
        name: "InHand CR202 Lite - Router Resistente a Golpes",
        desc: "Carcasa reforzada para operación continua en exteriores.",
        specs: ["Anti-golpes", "LTE", "Exterior"],
      },
    ],
  },
  {
    slug: "peplink",
    label: "Peplink",
    title: "Peplink",
    icon: "fas fa-server",
    shortDesc:
      "Routers SD-WAN y multi-WAN para máxima continuidad y balanceo de enlaces.",
    heroDesc:
      "Soluciones SD-WAN que combinan varios enlaces para máxima continuidad y velocidad en tu conectividad.",
    intro:
      "Los routers Peplink integran múltiples enlaces (celular, fibra, satelital) con tecnología SD-WAN para balanceo de carga y conmutación automática. Garantizan que tu conexión nunca se detenga, ideal para operaciones críticas que no pueden quedarse sin internet.",
    products: [
      {
        img: "router-rugged.jpg",
        name: "Katalyst Spark 5G - Router Empresarial",
        desc: "Alto rendimiento para operaciones que exigen máxima velocidad.",
        specs: ["5G", "Multi-SIM", "Empresarial"],
      },
      {
        img: "router-portatil.jpg",
        name: "CSG m106 Pro - Router 4G Portátil",
        desc: "Compacto y plug-and-play para conectar tu equipo en minutos.",
        specs: ["4G LTE", "WiFi", "Portátil"],
      },
      {
        img: "mifi-hotspot.jpg",
        name: "InHand CR202 Lite - Router 4G LTE CAT6 con WiFi",
        desc: "Conectividad confiable con WiFi integrado para varios dispositivos.",
        specs: ["LTE CAT6", "WiFi", "Compacto"],
      },
    ],
  },
];

export const getEquipo = (slug) => equipos.find((e) => e.slug === slug);
