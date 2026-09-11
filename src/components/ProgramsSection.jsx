import React from "react";
import { webinarOffer } from "../data/programs";
import { Check, Clock, Video, ArrowRight, ShieldCheck, Award, Zap } from "lucide-react";

export default function ProgramsSection({ onOpenBooking }) {
  const prog = webinarOffer;

  return (
    <section id="programs" className="section-padding" style={{ position: "relative", background: "var(--bg-panel)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">LIVE WEBINAR</span>
          <h2 className="section-title">
            Join the <span className="text-gradient">Live Weight Loss Webinar</span>
          </h2>
          <p className="section-subtitle">
            One live session, one fixed date — learn the exact no-gym system for busy professionals.
          </p>
        </div>

        {/* Single Flagship Program Block */}
        <div
          className="glass-card"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            padding: "2.5rem 2rem",
            borderRadius: "24px",
            border: "2px solid #D4AF37",
            boxShadow: "0 0 45px rgba(212, 175, 55, 0.2), 0 20px 40px rgba(0, 0, 0, 0.6)",
            position: "relative",
            background: "linear-gradient(145deg, rgba(212, 175, 55, 0.08) 0%, rgba(21, 21, 23, 0.98) 100%)"
          }}
        >
          {/* Top Badge Overlay */}
          <div
            style={{
              position: "absolute",
              top: "-16px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--gradient-primary)",
              color: "#0B0B0D",
              fontWeight: "800",
              fontSize: "0.82rem",
              padding: "0.45rem 1.4rem",
              borderRadius: "var(--radius-pill)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              boxShadow: "0 4px 20px rgba(255, 122, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              whiteSpace: "nowrap"
            }}
          >
            <Award size={16} color="#0B0B0D" />
            <span>{prog.badge}</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "2.5rem",
              alignItems: "center",
              marginTop: "0.5rem"
            }}
            className="flagship-grid"
          >
            {/* Left Details Column */}
            <div>
              <div style={{ fontSize: "0.82rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                {prog.tag}
              </div>
              
              <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#F5F5F5", marginBottom: "0.6rem", lineHeight: "1.2" }}>
                {prog.title}
              </h3>
              
              <div style={{ fontSize: "0.95rem", color: "var(--accent-orange)", fontWeight: "600", marginBottom: "1.25rem" }}>
                {prog.tagline}
              </div>

              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                {prog.description}
              </p>

              {/* Duration & Format Pill Row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "1rem 1.25rem",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "#F5F5F5" }}>
                  <Clock size={18} color="var(--accent-gold)" />
                  <span><strong>Duration:</strong> {prog.duration}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "#F5F5F5" }}>
                  <Video size={18} color="var(--accent-orange)" />
                  <span><strong>Format:</strong> {prog.format}</span>
                </div>
              </div>

              {/* Key Outcomes Checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: "800", color: "#F5F5F5", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  What You'll Achieve:
                </div>
                {prog.outcomes.map((outcome, oIdx) => (
                  <div key={oIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    <Check size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pricing & Single CTA Card */}
            <div
              style={{
                background: "rgba(11, 11, 13, 0.9)",
                borderRadius: "18px",
                padding: "2rem 1.5rem",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            >
              <div style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                LIMITED ENROLLMENT
              </div>

              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "2.8rem", fontWeight: "800", color: "#F5F5F5", fontFamily: "var(--font-heading)" }}>
                  {prog.price}
                </span>
                {prog.originalPrice && (
                  <span style={{ fontSize: "1.1rem", color: "var(--text-muted)", textDecoration: "line-through" }}>
                    {prog.originalPrice}
                  </span>
                )}
              </div>

              <div style={{ fontSize: "0.8rem", color: "#25D366", fontWeight: "600", marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.4rem", justifyContent: "center" }}>
                <ShieldCheck size={16} /> Limited Seats — Live & Interactive
              </div>

              {/* Single "Book Now" CTA Button */}
              <button
                onClick={() => onOpenBooking(prog)}
                className="btn btn-primary pulse-button"
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  fontSize: "1.05rem",
                  fontWeight: "800"
                }}
              >
                {prog.ctaText} <ArrowRight size={20} />
              </button>

              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1rem" }}>
                Instant Confirmation • Webinar Link via Email
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .flagship-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
