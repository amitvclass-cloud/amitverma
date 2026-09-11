import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { personalStory } from "../data/transformations";
import { timelineSteps } from "../data/timeline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MyStoryPage({ onOpenBooking }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-dark)", color: "var(--text-primary)" }}>
      <Navbar onOpenBooking={onOpenBooking} />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "50px",
          background: "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, rgba(11, 11, 13, 1) 75%)",
          textAlign: "center"
        }}
      >
        <div className="container">
          <span className="section-tag">MY COMPLETE JOURNEY</span>
          <h1 className="section-title" style={{ maxWidth: "800px", margin: "0 auto 1rem" }}>
            {personalStory.subtitle}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "680px", margin: "0 auto" }}>
            {personalStory.narrative[0]}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "var(--bg-panel)" }}>
        <div className="container">
          <div className="story-timeline">
            {timelineSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="story-timeline-row reveal"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="story-timeline-marker">
                    <div className="story-timeline-icon">
                      <IconComponent size={22} color="var(--accent-orange)" />
                    </div>
                    {idx < timelineSteps.length - 1 && <div className="story-timeline-line" />}
                  </div>

                  <div className="glass-card story-timeline-card">
                    <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: "700" }}>
                      {step.year}
                    </span>
                    <h3 style={{ fontSize: "1.25rem", color: "#F5F5F5", margin: "0.4rem 0 0.6rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1rem" }}>
                      {step.desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", fontWeight: "700", color: "var(--accent-gold)" }}>
                      <Sparkles size={13} /> {step.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <button onClick={onOpenBooking} className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
              Start Your Own Transformation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Vertical alternating timeline — desktop; collapses to a single left-aligned column on mobile */}
      <style>{`
        .story-timeline {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .story-timeline-row {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .story-timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .story-timeline-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 122, 0, 0.12);
          border: 2px solid var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .story-timeline-line {
          width: 2px;
          flex: 1;
          margin-top: 0.5rem;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.5), rgba(212, 175, 55, 0));
          min-height: 40px;
        }
        .story-timeline-card {
          flex: 1;
          padding: 1.5rem 1.75rem;
        }
        @media (min-width: 900px) {
          .story-timeline-row:nth-child(even) {
            flex-direction: row-reverse;
          }
        }
      `}</style>
    </div>
  );
}
