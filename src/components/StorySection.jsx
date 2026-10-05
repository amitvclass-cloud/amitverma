import React from "react";
import { personalStory } from "../data/transformations";
import { ArrowRight, Image as ImageIcon, UserCheck, CheckCircle2, BookOpen, Sparkles } from "lucide-react";

const goToMyStory = () => {
  window.history.pushState({}, "", "/my-story");
  window.dispatchEvent(new Event("popstate"));
  window.scrollTo(0, 0);
};

export default function StorySection({ onOpenBooking }) {
  return (
    <section id="my-story" className="section-padding" style={{ position: "relative", background: "var(--bg-panel)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag" style={{ color: "#A0B2C6" }}>MY TRANSFORMATION STORY</span>
          <h2 className="section-title" style={{ color: "#FFFFFF" }}>
            From 110kg MNC Engineer to 80kg Life Transformation Coach
          </h2>
          <p className="section-subtitle">
            I don't teach theory from textbooks. I teach the exact system I lived and tested while leading 60+ hour corporate workweeks.
          </p>
        </div>

        {/* Story Layout: Single Para Text Card + Real Person Card on Left, Image Placeholder Card on Right */}
        <div
          className="story-grid-container reveal"
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
            
            {/* Scannable story card */}
            <div className="glass-card story-summary-card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
                {personalStory.title}
              </h3>
              
              <p className="story-intro">{personalStory.narrative[0]}</p>

              <div className="story-highlights">
                {personalStory.highlights.map((item) => (
                  <div className="story-highlight" key={item.label}>
                    <Sparkles size={15} color="var(--accent-orange)" />
                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                {personalStory.companies.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: "700",
                      color: "var(--accent-gold)",
                      border: "1px solid rgba(212, 175, 55, 0.4)",
                      background: "rgba(212, 175, 55, 0.08)",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "var(--radius-pill)"
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <p className="company-disclaimer">{personalStory.companyDisclaimer}</p>

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
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "#08182F",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
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
                    background: "rgba(18, 43, 77, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    flexShrink: 0
                  }}
                >
                  <UserCheck size={26} color="#FFFFFF" />
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.15rem" }}>
                    <h4 style={{ fontSize: "1.05rem", color: "#FFFFFF", margin: 0 }}>Real Person, Tested System</h4>
                    <CheckCircle2 size={16} color="#25D366" />
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "#A0B2C6", margin: 0, fontWeight: "500" }}>
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

          {/* Right Column: Profile Photo Card */}
          <div
            className="glass-card story-image-cell"
            style={{
              padding: "1rem",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              background: "#08182F",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              minHeight: "380px"
            }}
          >
            {/* Top Corner Badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(11, 31, 58, 0.95)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#FFFFFF",
                fontSize: "0.72rem",
                fontWeight: "700",
                padding: "0.3rem 0.75rem",
                borderRadius: "var(--radius-pill)",
                zIndex: 2
              }}
            >
              Amit Verma
            </div>

            {/* Profile Image Container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: "340px",
                maxHeight: "480px",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                background: "#0B1F3A",
                border: "1px solid rgba(255, 255, 255, 0.12)"
              }}
            >
              <img
                src={personalStory.image || "https://res.cloudinary.com/yutescy6/image/upload/v1790574109/amit_verma.png"}
                alt="Amit Verma"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block"
                }}
              />

              {/* Metric Badges Overlay at Bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem 1rem 1rem",
                  background: "linear-gradient(to top, rgba(11, 31, 58, 0.95) 0%, rgba(11, 31, 58, 0.6) 60%, transparent 100%)",
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.75rem"
                }}
              >
                <span
                  style={{
                    background: "rgba(255, 85, 85, 0.25)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid #FF5555",
                    color: "#FF8888",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    padding: "0.35rem 0.8rem",
                    borderRadius: "6px"
                  }}
                >
                  BEFORE: 110 kg
                </span>
                <span
                  style={{
                    background: "rgba(37, 211, 102, 0.25)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid #25D366",
                    color: "#25D366",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    padding: "0.35rem 0.8rem",
                    borderRadius: "6px"
                  }}
                >
                  AFTER: 80 kg
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Soft CTA transition into Services */}
        <div style={{ textAlign: "center", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <button
            onClick={goToMyStory}
            className="btn btn-secondary"
            style={{ padding: "0.9rem 2rem", fontSize: "0.95rem" }}
          >
            <BookOpen size={18} /> Read My Full Journey (2002 → Now)
          </button>
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
          .story-summary-card { padding: 1.35rem !important; }
          .story-intro { font-size: 0.85rem !important; line-height: 1.55 !important; }
          .story-highlights { grid-template-columns: 1fr !important; gap: 0.55rem !important; }
        }
      `}</style>
    </section>
  );
}
