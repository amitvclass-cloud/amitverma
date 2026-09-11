import React from "react";
import { siteConfig } from "../data/site";

export default function InstagramSection() {
  return (
    <section id="instagram" className="section-padding" style={{ position: "relative", background: "var(--bg-panel)", paddingBottom: "2rem" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-tag">SOCIAL PROOF & COMMUNITY</span>
          <h2 className="section-title">
            Join the <span className="text-gradient">@fitwithamitv</span> Movement
          </h2>
          <p className="section-subtitle">
            Daily motivation, no-gym workout tips, mindset resets, and live Q&As on Instagram.
          </p>
        </div>

        {/* Profile Banner Card */}
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            border: "2px solid rgba(212, 175, 55, 0.35)",
            borderRadius: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {/* Circular Highlight Avatar */}
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "var(--gradient-primary)",
                border: "3px solid #D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0B0B0D",
                fontWeight: "800",
                fontSize: "1.6rem",
                boxShadow: "0 0 20px rgba(255, 122, 0, 0.4)",
                flexShrink: 0
              }}
            >
              AV
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "#F5F5F5" }}>fitwithamitv</h3>
                <span
                  style={{
                    background: "#0095F6",
                    color: "#FFFFFF",
                    fontSize: "0.65rem",
                    fontWeight: "800",
                    borderRadius: "50%",
                    width: "16px",
                    height: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  ✓
                </span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-gold)", fontWeight: "600" }}>
                Amit Verma | Fitness & Motivation
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                🙏 Radhe Radhe | 110kg → 80kg | Ex-MNC Engineer
              </div>
            </div>
          </div>

          {/* Follower Count & Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#FFB800", fontFamily: "var(--font-heading)" }}>
                11.6K+
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                Active Instagram Followers
              </div>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}
            >
              <i className="fa-brands fa-instagram" style={{ fontSize: "1.1rem" }}></i> Follow on Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
