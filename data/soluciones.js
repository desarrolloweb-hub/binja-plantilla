// Datos de las 6 soluciones de Conectividad Móvil de Binja Móvil.
// Se usan en: SectoresSection (cards), menú de navegación (dropdown),
// índice /soluciones y páginas interiores /soluciones/[slug].

export const soluciones = [
  {
    slug: "vehiculos-campo",
    img: "vehiculos.jpg",
    icon: "fas fa-satellite-dish",
    title: "Vehículos y equipos en campo",
    shortDesc:
      "Conectividad móvil para unidades en ruta, cuadrillas, supervisión y operación en campo.",
    heroDesc:
      "Mantén conectadas tus unidades, cuadrillas y equipos de supervisión donde quiera que operen, con internet móvil confiable que se mueve contigo.",
    intro:
      "Las operaciones en campo no pueden detenerse por falta de señal. Con Binja Móvil, tus vehículos y cuadrillas mantienen conectividad estable para reportar, navegar, transmitir datos y coordinar en tiempo real, incluso en zonas con cobertura limitada gracias a nuestras soluciones híbridas 4G/5G y satelital.",
    beneficios: [
      {
        icon: "fas fa-route",
        title: "Conexión en ruta",
        desc: "Internet estable para unidades en movimiento, sin importar la zona de operación.",
      },
      {
        icon: "fas fa-users-cog",
        title: "Coordinación de cuadrillas",
        desc: "Comunicación y reporte en tiempo real entre campo y oficina central.",
      },
      {
        icon: "fas fa-shield-alt",
        title: "Respaldo confiable",
        desc: "Conectividad de respaldo para no detener la operación ante caídas de red.",
      },
    ],
    idealPara: [
      "Flotillas y unidades en ruta",
      "Cuadrillas de mantenimiento y servicio",
      "Supervisión y logística en campo",
      "Monitoreo de operaciones remotas",
    ],
  },
  {
    slug: "eventos-temporales",
    img: "eventos.jpg",
    icon: "fas fa-calendar-alt",
    title: "Eventos y sitios temporales",
    shortDesc:
      "Conectividad rápida para eventos, ferias, pop-ups, staff, producción y puntos de venta móviles.",
    heroDesc:
      "Internet listo para usarse en eventos, ferias y sitios temporales. Lo instalamos rápido y lo retiramos cuando termina tu operación.",
    intro:
      "Cada evento necesita conectividad confiable desde el primer minuto: registro, cobros, transmisión, staff y producción dependen de ella. Binja Móvil entrega internet plug-and-play que se despliega en minutos y soporta la demanda de tu evento sin depender de la infraestructura del recinto.",
    beneficios: [
      {
        icon: "fas fa-bolt",
        title: "Despliegue inmediato",
        desc: "Equipos plug-and-play listos para conectar en minutos en cualquier sede.",
      },
      {
        icon: "fas fa-users",
        title: "Soporta alta demanda",
        desc: "Conectividad para staff, producción, registro y múltiples dispositivos.",
      },
      {
        icon: "fas fa-calendar-check",
        title: "Por el tiempo que necesites",
        desc: "Planes flexibles para eventos de un día o producciones de varias semanas.",
      },
    ],
    idealPara: [
      "Ferias, congresos y exposiciones",
      "Conciertos y producción de eventos",
      "Pop-ups y activaciones de marca",
      "Puntos de venta y registro temporales",
    ],
  },
  {
    slug: "home-office",
    img: "homeoffice.jpg",
    icon: "fas fa-wifi",
    title: "Home Office",
    shortDesc:
      "Conectividad móvil de respaldo para colaboradores, videollamadas, sistemas y trabajo remoto.",
    heroDesc:
      "Internet de respaldo para que tu equipo trabaje desde casa sin interrupciones, con videollamadas y sistemas siempre disponibles.",
    intro:
      "El trabajo remoto exige una conexión que no falle. Binja Móvil ofrece conectividad móvil de respaldo para tus colaboradores, garantizando que las videollamadas, los sistemas empresariales y la productividad sigan en marcha aunque el internet principal del hogar se caiga.",
    beneficios: [
      {
        icon: "fas fa-video",
        title: "Videollamadas estables",
        desc: "Ancho de banda confiable para reuniones, capacitaciones y soporte.",
      },
      {
        icon: "fas fa-sync-alt",
        title: "Respaldo automático",
        desc: "Conectividad de continuidad cuando el internet principal falla.",
      },
      {
        icon: "fas fa-laptop-house",
        title: "Listo para colaboradores",
        desc: "Fácil de instalar en casa, sin contratos complejos ni instalaciones largas.",
      },
    ],
    idealPara: [
      "Colaboradores en home office",
      "Equipos remotos e híbridos",
      "Respaldo para internet residencial",
      "Continuidad de videollamadas y sistemas",
    ],
  },
  {
    slug: "obras-construccion",
    img: "obras.jpg",
    icon: "fas fa-hard-hat",
    title: "Obras y construcción",
    shortDesc:
      "Internet confiable para construcción, casetas, proyectos temporales y equipos de trabajo.",
    heroDesc:
      "Conectividad robusta para obras y proyectos de construcción, donde aún no llega la infraestructura tradicional.",
    intro:
      "En una obra no hay tiempo que perder esperando que llegue el internet. Binja Móvil lleva conectividad a casetas, frentes de trabajo y proyectos temporales desde el día uno, con equipos rugged preparados para resistir polvo, sol y condiciones exigentes del sitio.",
    beneficios: [
      {
        icon: "fas fa-hammer",
        title: "Desde el día uno",
        desc: "Internet en la obra sin esperar infraestructura fija ni cableado.",
      },
      {
        icon: "fas fa-shield-virus",
        title: "Equipos rugged",
        desc: "Hardware resistente a polvo, agua y vibración para entornos duros.",
      },
      {
        icon: "fas fa-clipboard-check",
        title: "Gestión y reporte",
        desc: "Conecta sistemas de control, cámaras y reporte de avance en sitio.",
      },
    ],
    idealPara: [
      "Casetas y oficinas de obra",
      "Proyectos de construcción temporales",
      "Cámaras y control de acceso en sitio",
      "Equipos de trabajo en frentes de obra",
    ],
  },
  {
    slug: "hotspots-flotillas",
    img: "flotillas.jpg",
    icon: "fas fa-wifi",
    title: "Hotspots para equipos y flotillas",
    shortDesc:
      "MiFi, routers móviles y equipos administrados para conectar laptops, tablets y dispositivos.",
    heroDesc:
      "MiFi y routers móviles administrados para conectar a tus equipos y flotillas estén donde estén.",
    intro:
      "Conecta laptops, tablets, terminales y dispositivos de tu operación con hotspots móviles administrados. Binja Móvil entrega y gestiona los equipos, controla el consumo y te da visibilidad de toda tu flota desde una sola plataforma.",
    beneficios: [
      {
        icon: "fas fa-mobile-alt",
        title: "MiFi y routers móviles",
        desc: "Equipos portátiles para conectar varios dispositivos al instante.",
      },
      {
        icon: "fas fa-tachometer-alt",
        title: "Administración central",
        desc: "Visualiza consumo, estado y rendimiento de toda tu flota en un panel.",
      },
      {
        icon: "fas fa-sim-card",
        title: "Planes flexibles",
        desc: "Desde pocos MB hasta datos ilimitados, según el tamaño de tu flota.",
      },
    ],
    idealPara: [
      "Flotillas de vehículos y reparto",
      "Equipos de venta y servicio en campo",
      "Laptops y tablets corporativas",
      "Dispositivos que requieren WiFi portátil",
    ],
  },
  {
    slug: "punto-venta-food-trucks",
    img: "foodtruck.jpg",
    icon: "fas fa-store",
    title: "Punto de venta y food trucks",
    shortDesc:
      "Conectividad para food trucks, puestos móviles y puntos de venta con terminal y cobro digital.",
    heroDesc:
      "Internet confiable para cobrar siempre: terminales, puntos de venta y food trucks conectados estén donde estén.",
    intro:
      "Un punto de venta sin conexión es una venta perdida. Binja Móvil mantiene tus terminales, sistemas de cobro y food trucks siempre en línea, para que proceses pagos digitales y factures sin interrupciones, sin importar dónde te instales.",
    beneficios: [
      {
        icon: "fas fa-credit-card",
        title: "Cobros sin interrupción",
        desc: "Procesa pagos con tarjeta y digitales sin caídas de conexión.",
      },
      {
        icon: "fas fa-truck",
        title: "Movilidad total",
        desc: "Conéctate donde te instales: calle, evento, plaza o ruta.",
      },
      {
        icon: "fas fa-receipt",
        title: "Sistemas en línea",
        desc: "Mantén tu punto de venta, inventario y facturación siempre disponibles.",
      },
    ],
    idealPara: [
      "Food trucks y cocinas móviles",
      "Puntos de venta móviles",
      "Terminales de cobro y pago digital",
      "Puestos en ferias y mercados",
    ],
  },
];

export const getSolucion = (slug) =>
  soluciones.find((s) => s.slug === slug);
