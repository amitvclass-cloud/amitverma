import React from "react";
import { siteConfig } from "../data/site";
import { ArrowRight, Flame, Award, Users } from "lucide-react";

export default function HeroSection({ onOpenBooking }) {
  const scrollToPrograms = (e) => {
    e.preventDefault();
    const element = document.querySelector("#programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section-wrapper"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 76px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "90px",
        paddingBottom: "40px",
        background: "radial-gradient(circle at 50% 20%, rgba(255, 122, 0, 0.12) 0%, rgba(11, 11, 13, 1) 70%)",
        overflow: "hidden"
      }}
    >
      {/* Background Decorative Rings */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)"
        }}
      />

      <div className="container hero-center-col" style={{ width: "100%", margin: "auto", textAlign: "center" }}>

        {/* Top Badge Pill */}
        <div
          className="badge-pill"
          style={{
            marginBottom: "24px",
            display: "inline-flex",
            background: "rgba(255, 122, 0, 0.15)",
            border: "1px solid rgba(255, 122, 0, 0.4)",
            padding: "0.5rem 1.25rem"
          }}
        >
          <Flame size={16} color="var(--accent-orange)" />
          <span>{siteConfig.hero.badge}</span>
        </div>

        {/* Headline — Line 1: Engineered Body. / Line 2: Re-programmed Mind. */}
        <h1
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
            fontWeight: "800",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            margin: "0 auto",
            maxWidth: "900px"
          }}
        >
          <span style={{ display: "block" }}>Engineered Body.</span>
          <span className="text-gradient" style={{ display: "block" }}>Re-programmed Mind.</span>
        </h1>

        {/* Video Placeholder — Centered, YouTube 16:9 Format */}
        <div className="hero-card-wrapper" style={{ margin: "2.5rem auto 0", position: "relative" }}>

          {/* Floating Top-Left Badge Pill */}
          <div
            style={{
              position: "absolute",
              top: "-18px",
              left: "-18px",
              zIndex: 10,
              background: "rgba(15, 15, 18, 0.98)",
              border: "1px solid #D4AF37",
              borderRadius: "12px",
              padding: "0.6rem 1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap"
            }}
          >
            <Award size={18} color="#D4AF37" />
            <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "#F5F5F5" }}>20+ Yrs MNC Exp</span>
          </div>

          {/* Floating Bottom-Right Badge Pill */}
          <div
            style={{
              position: "absolute",
              bottom: "-18px",
              right: "-18px",
              zIndex: 10,
              background: "rgba(15, 15, 18, 0.98)",
              border: "1px solid #FF7A00",
              borderRadius: "12px",
              padding: "0.6rem 1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap"
            }}
          >
            <Users size={18} color="#FF7A00" />
            <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "#F5F5F5" }}>500+ Businesses Scaled</span>
          </div>

          {/* Video Placeholder Frame (Ratio 16:9 — YouTube format) */}
          <div
            className="glass-card hero-video-frame"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "24px",
              background: "#151517",
              border: "1px solid rgba(255, 122, 0, 0.4)",
              boxShadow: "0 0 35px rgba(255, 122, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.8)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <video
              src=""
              poster=""
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.4,
                display: "none" // Displays when video source is provided
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255, 122, 0, 0.25) 0%, transparent 70%)",
                pointerEvents: "none",
                filter: "blur(20px)"
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.85rem"
              }}
            >
              <div
                className="hero-play-btn"
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 35px rgba(255, 122, 0, 0.8)",
                  border: "3px solid #D4AF37",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#0B0B0D" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "4px" }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>

              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "#F5F5F5", letterSpacing: "0.02em", display: "block" }}>
                  Watch Amit's Story
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: "500" }}>
                  110kg → 80kg Transformation
                </span>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "rgba(11, 11, 13, 0.85)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 122, 0, 0.4)",
                color: "var(--accent-orange)",
                fontSize: "0.72rem",
                fontWeight: "700",
                padding: "0.3rem 0.75rem",
                borderRadius: "var(--radius-pill)",
                zIndex: 5
              }}
            >
              ▶ Watch Trailer
            </div>
          </div>

        </div>

        {/* Italic Tagline */}
        <div
          className="font-accent"
          style={{
            color: "var(--accent-gold)",
            fontWeight: "600",
            fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
            marginTop: "2.5rem",
            lineHeight: "1.1"
          }}
        >
          Scaled Life.
        </div>

        {/* Subheadline Paragraph */}
        <p
          style={{
            fontSize: "var(--fz-md)",
            color: "var(--text-secondary)",
            lineHeight: "1.6",
            marginTop: "20px",
            marginBottom: "32px",
            maxWidth: "620px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {siteConfig.hero.subheadline}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn btn-primary pulse-button"
            style={{ padding: "1rem 2.2rem", fontSize: "1rem" }}
          >
            {siteConfig.hero.primaryCta} <ArrowRight size={20} />
          </button>

          <a
            href="#programs"
            onClick={scrollToPrograms}
            className="btn btn-secondary"
            style={{ padding: "1rem 2rem", fontSize: "1rem" }}
          >
            {siteConfig.hero.secondaryCta}
          </a>
        </div>

        {/* Bio Stats Bar */}
        <div
          className="glass-card"
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            textAlign: "center"
          }}
        >
          {siteConfig.bioStats.map((stat, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--fz-xl)",
                  fontWeight: "800",
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.1",
                  marginBottom: "0.3rem"
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "#F5F5F5", marginBottom: "0.2rem" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        .hero-card-wrapper {
          width: 100%;
          max-width: 640px;
        }

        @media (max-width: 768px) {
          .hero-section-wrapper {
            min-height: auto !important;
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }

          .hero-card-wrapper {
            max-width: 100%;
          }
        }
      `}</style>

    </section>
  );
}
