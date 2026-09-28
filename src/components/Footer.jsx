import React from "react";
import { siteConfig } from "../data/site";
import { useSiteConfig, formatWhatsAppNumber } from "../hooks/useSiteConfig";
import { navigateTo } from "../utils/navigation";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const { config } = useSiteConfig();
  const whatsappNumber = formatWhatsAppNumber(config?.support_phone) || siteConfig.whatsappNumber;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#060608", borderTop: "1px solid rgba(212, 175, 55, 0.2)", color: "#A3A3A8", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem"
          }}
        >
          {/* Brand Column */}
          <div>
            <a
              href="/"
              onClick={(e) => navigateTo(e, "/")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
                textDecoration: "none"
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0B0B0D",
                  fontWeight: "800",
                  fontSize: "1rem"
                }}
              >
                AV
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: "800", fontSize: "1.2rem", color: "#F5F5F5" }}>
                AMIT VERMA
              </span>
            </a>

            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem" }}>
              Motivational Speaker | Fitness & Life Transformation Coach. Ex-MNC Engineer (20+ Yrs), 110kg → 80kg transformation.
            </p>

            <div style={{ fontFamily: "var(--font-accent)", fontSize: "1.1rem", color: "var(--accent-gold)", fontStyle: "italic" }}>
              "Radhe Radhe — Fit in Life & Body."
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1rem", color: "#F5F5F5", marginBottom: "1rem" }}>Quick Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.88rem" }}>
              <a
                href="/my-story"
                onClick={(e) => navigateTo(e, "/my-story")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                My Story (110kg → 80kg)
              </a>
              <a
                href="/speaking"
                onClick={(e) => navigateTo(e, "/speaking")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                Motivational Speaking (B2B Page)
              </a>
              <a
                href="/1to1"
                onClick={(e) => navigateTo(e, "/1to1")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                1-on-1 Mentorship Page
              </a>
              <a
                href="#what-i-do"
                onClick={(e) => navigateTo(e, "#what-i-do")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                4 Core Pillars
              </a>
              <a
                href="#programs"
                onClick={(e) => navigateTo(e, "#programs")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                Coaching Programs
              </a>
              <a
                href="#results"
                onClick={(e) => navigateTo(e, "#results")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                Transformation Results
              </a>
              <a
                href="#faq"
                onClick={(e) => navigateTo(e, "#faq")}
                style={{ color: "#A3A3A8", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent-gold)")}
                onMouseLeave={(e) => (e.target.style.color = "#A3A3A8")}
              >
                FAQ & DM Pre-Answers
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 style={{ fontSize: "1rem", color: "#F5F5F5", marginBottom: "1rem" }}>Connect & Follow</h4>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-gold)",
                  transition: "all 0.2s ease"
                }}
              >
                <i className="fa-brands fa-instagram" style={{ fontSize: "1.1rem" }}></i>
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-gold)",
                  transition: "all 0.2s ease"
                }}
              >
                <i className="fa-brands fa-facebook-f" style={{ fontSize: "1rem" }}></i>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(37, 211, 102, 0.15)",
                  border: "1px solid #25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#25D366",
                  transition: "all 0.2s ease"
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Instagram Handle: <strong style={{ color: "#F5F5F5" }}>@fitwithamitv</strong> (12.9K Followers)
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)"
          }}
        >
          <div>
            © {new Date().getFullYear()} Amit Verma. All Rights Reserved. Built with React + Vite.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "var(--accent-gold)",
              padding: "0.4rem 0.9rem",
              borderRadius: "var(--radius-pill)",
              fontSize: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem"
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
