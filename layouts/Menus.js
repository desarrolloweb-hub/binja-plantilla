"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const navItems = [
  { id: 1, href: "/", title: "Inicio" },
  { id: 2, href: "soluciones", title: "Soluciones" },
  { id: 3, href: "tecnologia", title: "Tecnología" },
  { id: 4, href: "cobertura", title: "Cobertura" },
  { id: 5, href: "contacto", title: "Contacto" },
];

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "soluciones", title: "Soluciones" },
        { id: 2, href: "tecnologia", title: "Tecnología" },
        { id: 3, href: "cobertura", title: "Cobertura" },
        { id: 4, href: "contacto", title: "Contacto" },
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
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
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
        { id: 4, href: "contacto", title: "Contacto" },
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
            {navItems.map((item, idx) => (
              <li
                key={item.id}
                className={idx === navItems.length - 1 ? "mean-last" : ""}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
