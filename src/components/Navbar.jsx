import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/site";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "My Story", href: "#my-story", isRoute: false },
    { label: "Speaking (B2B)", href: "/speaking", isRoute: true },
    { label: "1TO1", href: "/1to1", isRoute: true },
    { label: "Results", href: "#results", isRoute: false },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.isRoute) {
      window.history.pushState({}, "", link.href);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo(0, 0);
    } else {
      const currentPath = window.location.pathname;
      if (currentPath !== "/") {
        window.history.pushState({}, "", "/" + link.href);
        window.dispatchEvent(new Event("popstate"));
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(11, 11, 13, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212, 175, 55, 0.2)" : "1px solid transparent",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand Logo */}
        <a
          href="/"
          onClick={handleBrandClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none"
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0B0B0D",
              fontWeight: "800",
              fontSize: "1.1rem",
              boxShadow: "0 0 15px rgba(255, 122, 0, 0.4)",
              border: "2px solid #D4AF37"
            }}
          >
            AV
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: "800", fontSize: "1.15rem", color: "#F5F5F5", letterSpacing: "-0.02em" }}>
              AMIT VERMA
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600" }}>
              Radhe Radhe
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              style={{
                color: "#A3A3A8",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
              onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="desktop-nav">
          <button
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{
              padding: "0.6rem 1.4rem",
              fontSize: "0.85rem",
            }}
          >
            Book a Session <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          style={{
            background: "none",
            border: "none",
            color: "#F5F5F5",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none"
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(11, 11, 13, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderTop: "1px solid rgba(212, 175, 55, 0.2)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              style={{
                color: "#F5F5F5",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "600",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                paddingBottom: "0.75rem"
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn btn-primary"
            style={{
              width: "100%",
              marginTop: "1rem",
              padding: "1rem",
              fontSize: "1rem"
            }}
          >
            Book a Session <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Embedded Style for Nav Media Queries */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
