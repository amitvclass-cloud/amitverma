import React from "react";
import { Flame, Dumbbell, Compass, Users } from "lucide-react";

export default function WhatIDoSection({ onOpenBooking }) {
  const pillars = [
    {
      icon: Flame,
      title: "Mindset & Motivation",
      tagline: "Rewire beliefs, kill excuses, build daily discipline."
    },
    {
      icon: Dumbbell,
      title: "No-Gym Fitness",
      tagline: "30kg loss method, zero heavy gym equipment."
    },
    {
      icon: Compass,
      title: "Life Transformation",
      tagline: "20+ years of MNC systems, applied to your daily life."
    },
    {
      icon: Users,
      title: "Coaching",
      tagline: "1-on-1 and group mentorship with real accountability."
    }
  ];

  return (
    <section id="what-i-do" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)" }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">CORE PILLARS</span>
          <h2 className="section-title">
            What I <span className="text-gradient">Do</span>
          </h2>
        </div>

        {/* 4 Pillars Grid — Icon + Title + One-Line Only */}
        <div className="four-cols-grid">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.75rem 1.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(255, 122, 0, 0.2) 0%, rgba(212, 175, 55, 0.2) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: "0 0 20px rgba(255, 122, 0, 0.2)"
                  }}
                >
                  <IconComp size={26} color="var(--accent-orange)" />
                </div>

                <h3 style={{ fontSize: "1.1rem", color: "#F5F5F5", marginBottom: "0.5rem" }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {pillar.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section End CTA */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onOpenBooking} className="btn btn-gold">
            Explore Coaching & Masterclasses
          </button>
        </div>

      </div>
    </section>
  );
}
