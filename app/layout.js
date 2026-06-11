import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@css/main.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Binja Móvil - Internet y Telefonía",
  description:
    "Binja Móvil — Soluciones de internet y telefonía para hogares y negocios.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
        <WhatsAppButton /></body>
    </html>
  );
}
