"use client";

const WhatsAppButton = () => {
  const phone = "529215417921"; // sin signos ni espacios
  const message = encodeURIComponent(
    "Hola, me interesa conocer más sobre las soluciones de Binja Móvil."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      className="binja-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
};

export default WhatsAppButton;
