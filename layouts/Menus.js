"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { soluciones } from "@/data/soluciones";
import { equipos } from "@/data/equipos";

const solucionesSubmenu = soluciones.map((s) => ({
  href: `/soluciones/${s.slug}`,
  title: s.title,
  icon: s.icon,
}));

const equiposSubmenu = equipos.map((e) => ({
  href: `/equipos/${e.slug}`,
  title: e.title,
  icon: e.icon,
}));

const navItems = [
  {
    id: 1,
    href: "/soluciones",
    title: "Soluciones",
    submenu: solucionesSubmenu,
  },
  {
    id: 2,
    href: "/equipos",
    title: "Equipos",
    submenu: equiposSubmenu,
  },
  { id: 3, href: "/sectores", title: "Sectores" },
  { id: 4, href: "/contacto", title: "Contacto" },
];

// Coincidencia exacta o de ruta anidada (/soluciones activa en /soluciones/...)
const matchPath = (pathname, href) =>
  pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

const Menus = ({ single, menus }) => {
  const pathname = usePathname() || "/";
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "soluciones", title: "Soluciones" },
        { id: 2, href: "tecnologia", title: "Tecnología" },
        { id: 3, href: "cobertura", title: "Cobertura" },
        { id: 4, href: "contact", title: "Contacto" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          {singleMenus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {navItems.map((item) => {
            const active = matchPath(pathname, item.href);
            return item.submenu ? (
              <li
                key={item.id}
                className={`has-dropdown${active ? " binja-active" : ""}`}
              >
                <Link href={item.href}>
                  {item.title} <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu binja-submenu">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <Link
                        href={sub.href}
                        className={`binja-submenu__item${
                          pathname === sub.href
                            ? " binja-submenu__item--active"
                            : ""
                        }`}
                      >
                        <i className={sub.icon} />
                        <span>{sub.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li
                key={item.id}
                className={active ? "binja-active" : undefined}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const pathname = usePathname() || "/";
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value);
  const activeLi = (value) =>
    value === activeMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "soluciones", title: "Soluciones" },
        { id: 2, href: "tecnologia", title: "Tecnología" },
        { id: 3, href: "cobertura", title: "Cobertura" },
        { id: 4, href: "contact", title: "Contacto" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul>
        {single ? (
          <Fragment>
            <li>
              <Link href="/" className="border-none">
                Inicio
              </Link>
            </li>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            {navItems.map((item, idx) => {
              const active = matchPath(pathname, item.href);
              return item.submenu ? (
                <li
                  key={item.id}
                  className={`has-dropdown${active ? " binja-active" : ""}`}
                >
                  <Link href={item.href}>{item.title}</Link>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      activeMenuSet(item.title);
                    }}
                  >
                    <i
                      className={`fas fa-${
                        activeMenu === item.title ? "minus" : "plus"
                      }`}
                    />
                  </a>
                  <ul className="submenu" style={activeLi(item.title)}>
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className={
                            pathname === sub.href ? "binja-active" : undefined
                          }
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={item.id}
                  className={`${idx === navItems.length - 1 ? "mean-last" : ""}${
                    active ? " binja-active" : ""
                  }`}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
