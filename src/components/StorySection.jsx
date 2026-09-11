import React from "react";
import { personalStory } from "../data/transformations";
import { ArrowRight, Check, Sparkles, Scale, Briefcase, HeartHandshake, Image as ImageIcon, UserCheck, Award, CheckCircle2 } from "lucide-react";

export default function StorySection({ onOpenBooking }) {
  const timelineSteps = [
    {
      year: "2002 - 2022",
      title: "20+ Years Corporate MNC Tech Leader",
      desc: "Managing high-pressure engineering projects, leading large technical teams, and scaling 500+ business processes — but burning out at 110kg.",
      icon: Briefcase,
      highlight: "110 kg Peak Weight"
    },
    {
      year: "The Awakening",
      title: "Health Warning & Mindset Shift",
      desc: "Realizing that corporate success without physical vitality is empty. Decided to apply engineering discipline to human health and habits.",
      icon: Scale,
      highlight: "Radhe Radhe Alignment"
    },
    {
      year: "The Breakthrough",
      title: "Lost 30kg Without Gym",
      desc: "Engineered a sustainable home nutrition blueprint, daily movement habit stacks, and mental strength framework. Weight dropped from 110kg → 80kg.",
      icon: Sparkles,
      highlight: "-30 kg Fat Loss"
    },
    {
      year: "Present Day",
      title: "Fitness & Life Transformation Coach",
      desc: "Now empowering corporate leaders, entrepreneurs, and busy professionals to shed fat, boost energy, and unlock peak life performance.",
      icon: HeartHandshake,
      highlight: "500+ Lives Impacted"
    }
  ];

  return (
    <section id="my-story" className="section-padding" style={{ position: "relative", background: "var(--bg-panel)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">MY TRANSFORMATION STORY</span>
          <h2 className="section-title">
            From <span className="text-gradient">110kg MNC Engineer</span> to 80kg Life Transformation Coach
          </h2>
          <p className="section-subtitle">
            I don't teach theory from textbooks. I teach the exact system I lived and tested while leading 60+ hour corporate workweeks.
          </p>
        </div>

        {/* Story Layout: Single Para Text Card + Real Person Card on Left, Image Placeholder Card on Right */}
        <div
          className="story-grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch",
            marginBottom: "4rem"
          }}
        >
          {/* Left Stack: Narrative Text Card + Real Person Card */}
          <div className="story-text-cell" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            
            {/* Single Paragraph Story Card */}
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
                {personalStory.title}
              </h3>
              
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  marginBottom: "1.25rem"
                }}
              >
                {personalStory.narrative[0]}
              </p>

              <div
                style={{
                  padding: "0.9rem 1.1rem",
                  background: "rgba(212, 175, 55, 0.08)",
                  borderLeft: "4px solid var(--accent-gold)",
                  borderRadius: "4px"
                }}
              >
                <div style={{ fontFamily: "var(--font-accent)", fontSize: "1.1rem", color: "#F5F5F5", fontStyle: "italic" }}>
                  "Fit in Life & Body starts when you align your spiritual purpose with daily physical discipline. Radhe Radhe."
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--accent-gold)", marginTop: "0.4rem", fontWeight: "600" }}>
                  — AMIT VERMA
                </div>
              </div>
            </div>

            {/* Real Person Highlight Card (Below Text Card) */}
            <div
              className="glass-card"
              style={{
                padding: "1.5rem 1.75rem",
                borderRadius: "16px",
                border: "1px solid rgba(255, 122, 0, 0.35)",
                background: "linear-gradient(135deg, rgba(255, 122, 0, 0.1) 0%, rgba(21, 21, 23, 0.95) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.25rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "var(--gradient-primary)",
                    border: "2px solid #D4AF37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0B0B0D",
                    flexShrink: 0,
                    boxShadow: "0 0 20px rgba(255, 122, 0, 0.4)"
                  }}
                >
                  <UserCheck size={26} color="#0B0B0D" />
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.15rem" }}>
                    <h4 style={{ fontSize: "1.05rem", color: "#F5F5F5", margin: 0 }}>Real Person, Tested System</h4>
                    <CheckCircle2 size={16} color="#25D366" />
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--accent-gold)", margin: 0, fontWeight: "600" }}>
                    110kg → 80kg • Ex-MNC Tech Leader & Coach
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(37, 211, 102, 0.15)",
                  border: "1px solid #25D366",
                  color: "#25D366",
                  fontSize: "0.72rem",
                  fontWeight: "700",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "var(--radius-pill)",
                  whiteSpace: "nowrap"
                }}
              >
                Verified Story
              </div>
            </div>

          </div>

          {/* Right Column: Image Placeholder Card */}
          <div
            className="glass-card story-image-cell"
            style={{
              padding: "1.5rem",
              borderRadius: "24px",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              minHeight: "380px"
            }}
          >
            {/* Top Corner Badge */}
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
                borderRadius: "var(--radius-pill)"
              }}
            >
              Transformation Photo
            </div>

            {/* Image Placeholder Frame Container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: "320px",
                borderRadius: "16px",
                background: "#151517",
                border: "2px dashed rgba(212, 175, 55, 0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                position: "relative"
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(255, 122, 0, 0.15)",
                  border: "1px solid rgba(255, 122, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  color: "var(--accent-orange)"
                }}
              >
                <ImageIcon size={32} />
              </div>

              <h4 style={{ fontSize: "1.1rem", color: "#F5F5F5", marginBottom: "0.4rem" }}>
                Amit Verma Photo Placeholder
              </h4>

              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", maxWidth: "260px", lineHeight: "1.4", marginBottom: "1rem" }}>
                Side-by-side photo (110kg Before → 80kg After) placeholder ready for client image upload.
              </p>

              {/* Metric Pill Badges */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <span
                  style={{
                    background: "rgba(255, 85, 85, 0.2)",
                    border: "1px solid #FF5555",
                    color: "#FF5555",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "6px"
                  }}
                >
                  BEFORE: 110 kg
                </span>
                <span
                  style={{
                    background: "rgba(37, 211, 102, 0.2)",
                    border: "1px solid #25D366",
                    color: "#25D366",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "6px"
                  }}
                >
                  AFTER: 80 kg
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Journey Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem"
          }}
        >
          {timelineSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: "700" }}>
                      {step.year}
                    </span>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(255, 122, 0, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <IconComponent size={18} color="var(--accent-orange)" />
                    </div>
                  </div>

                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", color: "#F5F5F5" }}>
                    {step.title}
                  </h4>
                  <p className="timeline-desc" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {step.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "var(--accent-gold)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  }}
                >
                  <Sparkles size={12} /> {step.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft CTA transition into Services */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{ padding: "0.9rem 2rem", fontSize: "0.95rem" }}
          >
            Start Your Own Story — Book a Session <ArrowRight size={18} />
          </button>
        </div>

      </div>

      {/* Embedded Mobile Layout Rules */}
      <style>{`
        @media (max-width: 768px) {
          .story-grid-container {
            display: flex !important;
            flex-direction: column !important;
          }
          .story-image-cell {
            order: -1 !important; /* Image comes first on mobile */
          }
          .story-text-cell {
            order: 1 !important; /* Left elements come after image on mobile */
          }
          .timeline-desc {
            display: none !important; /* Hide description paragraph in cards on mobile */
          }
        }
      `}</style>
    </section>
  );
}
