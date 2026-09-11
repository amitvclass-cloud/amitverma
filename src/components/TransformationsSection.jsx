import React from "react";
import { clientTransformations } from "../data/transformations";
import { CheckCircle2, Flame, Award, TrendingDown } from "lucide-react";

export default function TransformationsSection({ onOpenBooking }) {
  return (
    <section id="results" className="section-padding" style={{ position: "relative", background: "var(--bg-panel)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">PROVEN CLIENT RESULTS</span>
          <h2 className="section-title">
            Real Transformations, <span className="text-gradient">Real Metrics</span>
          </h2>
          <p className="section-subtitle">
            See how corporate leaders, founders, and engineers shed weight, gained energy, and reprogrammed their lives using Amit's blueprint.
          </p>
        </div>

        {/* Transformations Uniform Grid — 4 Cards Horizontally in One Line */}
        <div className="four-cols-grid">
          {clientTransformations.map((item) => (
            <div
              key={item.id}
              className="glass-card uniform-tile"
              style={{
                padding: "1.5rem 1.15rem",
                justifyContent: "space-between"
              }}
            >
              <div>
                {/* Category & Verified Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {item.category}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: "#25D366", fontWeight: "600" }}>
                    <CheckCircle2 size={14} /> Verified Client
                  </div>
                </div>

                {/* Client Name & Role */}
                <h3 style={{ fontSize: "1.2rem", color: "#F5F5F5", marginBottom: "0.2rem" }}>
                  {item.name}
                </h3>
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                  {item.role}
                </div>

                {/* Weight Metrics Box */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1.2fr",
                    gap: "0.5rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "10px",
                    padding: "0.9rem 0.6rem",
                    textAlign: "center",
                    marginBottom: "1.25rem"
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#A3A3A8" }}>BEFORE</div>
                    <div style={{ fontSize: "1rem", fontWeight: "700", color: "#FF5555" }}>{item.beforeWeight}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#A3A3A8" }}>AFTER</div>
                    <div style={{ fontSize: "1rem", fontWeight: "700", color: "#25D366" }}>{item.afterWeight}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--accent-gold)" }}>LOST</div>
                    <div style={{ fontSize: "1rem", fontWeight: "800", color: "#FFB800" }}>{item.weightLost}</div>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    color: "var(--accent-orange)",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  }}
                >
                  <TrendingDown size={16} /> {item.highlight}
                </div>

                {/* Story Snippet */}
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  "{item.storySnippet}"
                </p>
              </div>

              {/* Timeframe Tag */}
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <span>TIMEFRAME:</span>
                <strong style={{ color: "#F5F5F5" }}>{item.duration}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onOpenBooking} className="btn btn-primary" style={{ padding: "0.9rem 2.2rem" }}>
            Get Results Like This — Book a Session
          </button>
        </div>

      </div>
    </section>
  );
}
