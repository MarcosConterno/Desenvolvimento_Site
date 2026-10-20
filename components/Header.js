import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", href: "#inicio", page: "/" },
  { name: "Tratamentos", href: "/tratamento", page: "/tratamento" },
  { name: "Sobre nós", href: "/sobrenos", page: "/sobrenos" },
  { name: "Carta", href: "/carta", page: "/carta" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`home-site-header${scrolling ? " is-scrolled" : ""}`}>
      <div className="home-header__inner">
        <Link
          href="/"
          className="home-header__brand"
          aria-label="Instituto EDMA — início"
          onClick={closeMobileMenu}
        >
          <img
            src="/img/novas/LogoHorizontalCorPaleta1(SVG).svg"
            alt="Instituto EDMA"
            width="225"
            height="84"
          />
        </Link>

        <nav
          className={`home-nav${isMobileMenuOpen ? " open" : ""}`}
          id="home-primary-navigation"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isCurrentPage = router.pathname === item.page;
            const href = item.page === "/" && router.pathname !== "/" ? "/#inicio" : item.href;

            return (
              <Link
                key={item.page}
                href={href}
                onClick={closeMobileMenu}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          className="home-menu-toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="home-primary-navigation"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {isMobileMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
