"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#du-an", label: "Dự án" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#blog", label: "Blog" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const current = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    setTheme(stored || current || "light");

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "var(--bg)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "20px",
            color: "var(--fg)",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "var(--brand)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 900,
            }}
          >
            D
          </span>
          DevStudio
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "32px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--fg)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1.5px solid var(--border)",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--muted)",
              fontSize: "16px",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* CTA */}
          <a
            href="#lien-he"
            className="hidden-mobile"
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              background: "var(--brand)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.opacity = "1")
            }
          >
            Báo giá
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            aria-label="Menu"
            style={{
              width: "36px",
              height: "36px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              padding: "6px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--fg)",
                  borderRadius: "99px",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "var(--fg)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lien-he"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              background: "var(--brand)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Báo giá ngay
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
