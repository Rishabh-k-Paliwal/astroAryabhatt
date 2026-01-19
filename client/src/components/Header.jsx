import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = () => {
    const newLang = i18n.language === "hi" ? "en" : "hi";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={pathname === to ? "active" : ""}
    >
      {children}
    </Link>
  );

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container header-container">
        <Link to="/" className="logo" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "15px" }}>
          <img src="/images/logo.png" alt="Astro Aryabhata Logo" style={{ height: "50px", width: "auto" }} />
          <span style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.5px"
          }}>
            Astro Aryabhata
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <nav className="nav-desktop">
            <NavLink to="/">{t("home")}</NavLink>
            <NavLink to="/about">{t("about")}</NavLink>
            <NavLink to="/services">{t("services")}</NavLink>
            <NavLink to="/book">{t("book_now")}</NavLink>
          </nav>

          <button
            onClick={changeLanguage}
            className="button-premium button-outline"
            style={{ padding: "8px 15px", fontSize: "0.85rem", minWidth: "90px", border: "1px solid var(--color-accent-gold)", fontWeight: "600" }}
          >
            {i18n.language === "hi" ? "English" : "हिंदी"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            display: "none"
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}


