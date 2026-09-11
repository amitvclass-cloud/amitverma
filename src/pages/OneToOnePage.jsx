import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OneToOneBookingModal from "../components/OneToOneBookingModal";
import { oneToOneProgram } from "../data/programs";
import { ArrowRight, Check, ShieldCheck, Clock, Video, UserCheck, Flame, Star, Sparkles } from "lucide-react";

export default function OneToOnePage({ onOpenBooking }) {
  const prog = oneToOneProgram;
  const [bookingOpen, setBookingOpen] = useState(false);

  const features = [
    {
      title: "Direct 1-on-1 Access to Amit Verma",
      desc: "No junior coaches or generic support. You work directly with Amit, an Ex-MNC Lead Engineer who lost 30kg."
    },
    {
      title: "Custom No-Gym Nutrition & Calorie Blueprint",
      desc: "Tailored to your corporate schedule, travel routines, and local diet preferences without extreme restrictions."
    },
    {
      title: "Weekly Progress Audits & Habit Tracking",
      desc: "Structured data-driven review every week to eliminate bottlenecks and guarantee constant fat loss momentum."
    },
    {
      title: "24/7 Priority WhatsApp Support",
      desc: "Real-time meal tweaks, restaurant ordering assistance, and daily mindset accountability."
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-dark)", color: "var(--text-primary)" }}>
      {/* Sticky Navbar */}
      <Navbar onOpenBooking={onOpenBooking} />

      {/* Hero Header */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "60px",
          background: "radial-gradient(circle at 50% 20%, rgba(255, 122, 0, 0.15) 0%, rgba(11, 11, 13, 1) 75%)",
          textAlign: "center"
        }}
      >
        <div className="container">
          <div
            className="badge-pill"
            style={{
              marginBottom: "20px",
              display: "inline-flex",
              background: "rgba(255, 122, 0, 0.15)",
              border: "1px solid rgba(255, 122, 0, 0.4)"
            }}
          >
            <UserCheck size={16} color="var(--accent-orange)" />
            <span>VIP 1-ON-1 PERSONAL MENTORSHIP</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              margin: "0 0 1.25rem 0"
            }}
          >
            Re-engineer Your Body & Mind with <br />
            <span className="text-gradient">Personal 1-on-1 Mentorship</span>
          </h1>

          <p
            style={{
              fontSize: "var(--fz-md)",
              color: "var(--text-secondary)",
              maxWidth: "720px",
              margin: "0 auto 2.5rem auto",
              lineHeight: "1.6"
            }}
          >
            An exclusive 90-day transformation experience designed for high-performing corporate leaders, founders, and executives who demand peak physical energy and accountability.
          </p>

          <button
            onClick={() => setBookingOpen(true)}
            className="btn btn-primary pulse-button"
            style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}
          >
            Book 1-on-1 Mentorship Session <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Program Breakdown Section */}
      <section className="section-padding" style={{ background: "var(--bg-panel)" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-tag">WHY 1-ON-1 COACHING?</span>
            <h2 className="section-title">
              Built Around Your <span className="text-gradient">60-Hour Workweek</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem"
            }}
          >
            {features.map((item, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(255, 122, 0, 0.15)",
                      border: "1px solid rgba(255, 122, 0, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-orange)",
                      marginBottom: "1.25rem"
                    }}
                  >
                    <Sparkles size={20} />
                  </div>

                  <h3 style={{ fontSize: "1.2rem", color: "#F5F5F5", marginBottom: "0.6rem" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div
            className="glass-card"
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              padding: "2.5rem 2rem",
              borderRadius: "24px",
              border: "2px solid #D4AF37",
              textAlign: "center",
              background: "linear-gradient(145deg, rgba(212, 175, 55, 0.08) 0%, rgba(21, 21, 23, 0.98) 100%)",
              boxShadow: "0 0 40px rgba(212, 175, 55, 0.2)"
            }}
          >
            <span className="section-tag" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
              FLAGSHIP 1-ON-1 INVENTORY
            </span>

            <h3 style={{ fontSize: "1.8rem", color: "#F5F5F5", marginBottom: "1rem" }}>
              Ready to Re-program Your Life & Body?
            </h3>

            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "3rem", fontWeight: "800", color: "#F5F5F5", fontFamily: "var(--font-heading)" }}>
                {prog.price}
              </span>
              <span style={{ fontSize: "1.2rem", color: "var(--text-muted)", textDecoration: "line-through" }}>
                {prog.originalPrice}
              </span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "2rem" }}>
              Includes full 90-day personal mentorship, daily accountability, and custom nutrition blueprint.
            </p>

            <button
              onClick={() => setBookingOpen(true)}
              className="btn btn-primary pulse-button"
              style={{ padding: "1.1rem 3rem", fontSize: "1.05rem" }}
            >
              Book Now <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {bookingOpen && <OneToOneBookingModal program={prog} onClose={() => setBookingOpen(false)} />}
    </div>
  );
}
