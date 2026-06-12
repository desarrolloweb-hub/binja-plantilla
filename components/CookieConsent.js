"use client";
import { useEffect, useRef, useState } from "react";

const COOKIE_NAME = "cookie-consent";
const COOKIE_DAYS = 365;

/* ===== Helpers de cookies ===== */
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? " Secure;" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Expires=${d.toUTCString()}; Path=/; SameSite=Lax;${secure}`;
}

function getCookie(name) {
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax;`;
}

/* ===== Aplicar preferencias ===== */
function applyPreferences(prefs) {
  // Analíticas
  if (!prefs.analytics) {
    deleteCookie("_ga");
    deleteCookie("_gid");
    document.cookie.split(";").forEach((c) => {
      const n = c.split("=")[0].trim();
      if (n.startsWith("_ga_")) deleteCookie(n);
    });
  }
  // Marketing
  if (!prefs.marketing) {
    deleteCookie("_gcl_au");
    deleteCookie("_fbp");
    deleteCookie("_fbc");
  }
  // Notificar a otros scripts (tracking) en tiempo real
  document.dispatchEvent(
    new CustomEvent("cookie-consent-updated", { detail: prefs })
  );
}

const categories = [
  {
    key: "necessary",
    title: "Esenciales / Técnicas",
    desc: "Necesarias para la navegación segura, protección de formularios (CSRF) y guardar tu consentimiento. Siempre activas.",
    locked: true,
  },
  {
    key: "preferences",
    title: "Preferencias y Funcionales",
    desc: "Recuerdan tus ajustes como idioma, tema y región para una mejor experiencia.",
    locked: false,
  },
  {
    key: "analytics",
    title: "Medición y Analíticas",
    desc: "Nos ayudan a entender el uso del sitio mediante Google Analytics (_ga, _gid, _ga_*).",
    locked: false,
  },
  {
    key: "marketing",
    title: "Publicidad y Marketing",
    desc: "Permiten anuncios relevantes con Google Ads (_gcl_au) y Meta/Facebook Pixel (_fbp, _fbc).",
    locked: false,
  },
];

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(false); // para animación
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  });
  const timerRef = useRef(null);

  useEffect(() => {
    const raw = getCookie(COOKIE_NAME);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          const valid = {
            necessary: true,
            preferences: !!parsed.preferences,
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
          };
          applyPreferences(valid);
          return; // ya consintió, no mostrar
        }
      } catch (e) {
        // JSON inválido → mostrar banner
      }
    }
    // No hay consentimiento válido → mostrar con retraso
    timerRef.current = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setShown(true));
    }, 1200);
    return () => clearTimeout(timerRef.current);
  }, []);

  const persist = (finalPrefs) => {
    const data = {
      necessary: true,
      preferences: !!finalPrefs.preferences,
      analytics: !!finalPrefs.analytics,
      marketing: !!finalPrefs.marketing,
    };
    setCookie(COOKIE_NAME, JSON.stringify(data), COOKIE_DAYS);
    applyPreferences(data);
    close();
  };

  const close = () => {
    setShown(false);
    setTimeout(() => setVisible(false), 500);
  };

  const acceptAll = () =>
    persist({ preferences: true, analytics: true, marketing: true });
  const rejectOptional = () =>
    persist({ preferences: false, analytics: false, marketing: false });
  const saveSelection = () => persist(prefs);

  const toggle = (key) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  if (!visible) return null;

  return (
    <div
      className={`binja-cookie ${shown ? "is-shown" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
    >
      {!customizing ? (
        /* ===== Vista principal ===== */
        <div className="binja-cookie__main">
          <span className="binja-cookie__icon" aria-hidden="true">
            <i className="fas fa-cookie-bite" />
          </span>
          <div className="binja-cookie__copy">
            <h3 className="binja-cookie__title">Preferencias de cookies</h3>
            <p className="binja-cookie__text">
              Usamos cookies para que el sitio funcione, recordar tus
              preferencias y medir el tráfico. Puedes aceptar, rechazar o{" "}
              <button className="binja-cookie__inline-link" onClick={() => setCustomizing(true)}>
                personalizar
              </button>
              . Consulta nuestra{" "}
              <a className="binja-cookie__inline-link" href="/privacy">
                Política de privacidad
              </a>
              .
            </p>
          </div>
          <div className="binja-cookie__actions">
            <button className="binja-cookie__btn binja-cookie__btn--ghost" onClick={rejectOptional}>
              Rechazar
            </button>
            <button className="binja-cookie__btn binja-cookie__btn--ghost" onClick={() => setCustomizing(true)}>
              Personalizar
            </button>
            <button className="binja-cookie__btn binja-cookie__btn--primary" onClick={acceptAll}>
              Aceptar todas
            </button>
          </div>
        </div>
      ) : (
        /* ===== Panel de personalización ===== */
        <div className="binja-cookie__panel">
          <h3 className="binja-cookie__title">Personalizar cookies</h3>
          <div className="binja-cookie__list">
            {categories.map((cat) => (
              <div className="binja-cookie__cat" key={cat.key}>
                <div className="binja-cookie__cat-head">
                  <span className="binja-cookie__cat-title">{cat.title}</span>
                  <label className={`binja-switch ${cat.locked ? "is-locked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={cat.locked ? true : prefs[cat.key]}
                      disabled={cat.locked}
                      onChange={() => !cat.locked && toggle(cat.key)}
                      aria-label={cat.title}
                    />
                    <span className="binja-switch__slider" />
                  </label>
                </div>
                <p className="binja-cookie__cat-desc">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="binja-cookie__actions">
            <button className="binja-cookie__btn binja-cookie__btn--primary" onClick={saveSelection}>
              Guardar selección
            </button>
            <button className="binja-cookie__btn binja-cookie__btn--ghost" onClick={() => setCustomizing(false)}>
              Atrás
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
