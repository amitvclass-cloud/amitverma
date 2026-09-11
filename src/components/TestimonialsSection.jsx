import React, { useState, useRef } from "react";
import { videoReelTestimonials } from "../data/testimonials";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export default function TestimonialsSection() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const scrollTrackRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollTrackRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-tag">VOICES OF TRUST</span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Authentic video reel transformations from corporate executives, business owners, and masterclass attendees.
          </p>
        </div>

        {/* REEL FORMAT VIDEO TESTIMONIALS (HORIZONTAL SCROLL) */}
        <div style={{ position: "relative" }}>
          
          {/* Scroll Navigation Arrows */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.75rem",
              marginBottom: "1rem"
            }}
          >
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                color: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)")}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "var(--gradient-primary)",
                border: "none",
                color: "#0B0B0D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(255, 122, 0, 0.4)",
                transition: "all 0.2s ease"
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Horizontal Reel Track Container */}
          <div
            ref={scrollTrackRef}
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: "1.5rem",
              scrollbarWidth: "thin",
              scrollbarColor: "var(--accent-gold) var(--bg-dark)"
            }}
          >
            {videoReelTestimonials.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveVideoModal(reel)}
                className="glass-card"
                style={{
                  flex: "0 0 270px",
                  height: "450px", // Vertical video format
                  borderRadius: "20px",
                  scrollSnapAlign: "start",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: reel.gradient || "#151517",
                  border: "1px solid rgba(255, 122, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "var(--accent-gold)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 122, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 122, 0, 0.4)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
                }}
              >
                {/* ONLY Top-Right Duration Badge */}
                <div style={{ position: "absolute", top: "14px", right: "14px", zIndex: 5 }}>
                  <span
                    style={{
                      background: "rgba(11, 11, 13, 0.85)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255, 122, 0, 0.4)",
                      color: "var(--accent-orange)",
                      fontSize: "0.72rem",
                      fontWeight: "700",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-pill)"
                    }}
                  >
                    {reel.duration}
                  </span>
                </div>

                {/* Centered Glowing Play Button */}
                <div
                  style={{
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.6rem"
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "var(--gradient-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 30px rgba(255, 122, 0, 0.8)",
                      border: "3px solid #D4AF37",
                      transition: "transform 0.2s ease"
                    }}
                  >
                    <Play size={26} fill="#0B0B0D" color="#0B0B0D" style={{ marginLeft: "4px" }} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* INTERACTIVE VIDEO REEL MODAL PLAYER */}
        {activeVideoModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(11, 11, 13, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 3000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem"
            }}
          >
            <div
              className="glass-card"
              style={{
                width: "100%",
                maxWidth: "360px",
                height: "640px", // 9:16 Vertical Reel Player
                position: "relative",
                borderRadius: "24px",
                border: "2px solid #D4AF37",
                overflow: "hidden",
                boxShadow: "0 0 50px rgba(212, 175, 55, 0.4)",
                background: "#0B0B0D",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoModal(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(0, 0, 0, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#F5F5F5",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              {/* Video Element */}
              <video
                src={activeVideoModal.videoUrl}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0
                }}
              />

              {/* Video Overlay Top Badge */}
              <div style={{ position: "relative", zIndex: 5, padding: "1.25rem 1rem", background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: "700" }}>
                  🎬 {activeVideoModal.program}
                </span>
              </div>

              {/* Video Overlay Bottom Caption */}
              <div style={{ position: "relative", zIndex: 5, padding: "1.25rem 1rem", background: "linear-gradient(0deg, rgba(0,0,0,0.95) 0%, transparent 100%)" }}>
                <div style={{ fontSize: "1rem", fontWeight: "800", color: "#FFB800", marginBottom: "0.2rem" }}>
                  🏆 {activeVideoModal.result}
                </div>
                <div style={{ fontSize: "1rem", fontWeight: "700", color: "#F5F5F5" }}>
                  {activeVideoModal.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                  {activeVideoModal.title}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#F5F5F5", lineHeight: "1.4" }}>
                  "{activeVideoModal.quote}"
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
