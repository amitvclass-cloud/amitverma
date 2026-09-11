import React from "react";
import { speakingData } from "../data/speaking";
import { siteConfig } from "../data/site";
import { MessageCircle, Calendar, Award, Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function MotivationalSpeakingSection({ onOpenB2BModal }) {
  const openWhatsAppB2B = () => {
    const message = encodeURIComponent("Hi Amit, I would like to inquire about booking you for a Corporate/Event Motivational Keynote.");
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="speaking" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-tag">{speakingData.header.tag}</span>
          <h2 className="section-title">
            Motivational Speaking & <span className="text-gradient">Corporate Keynotes</span>
          </h2>
          <p className="section-subtitle">
            {speakingData.header.subtitle}
          </p>
        </div>

        {/* B2B Stats Counter Row */}
        <div
          className="glass-card"
          style={{
            padding: "1.75rem 2rem",
            marginBottom: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            textAlign: "center"
          }}
        >
          {speakingData.stats.map((st, sIdx) => (
            <div key={sIdx}>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#FFB800", fontFamily: "var(--font-heading)" }}>
                {st.value}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Keynote Topics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3.5rem"
          }}
        >
          {speakingData.topics.map((topic) => (
            <div
              key={topic.id}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                {/* Topic Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(212, 175, 55, 0.15)",
                      border: "1px solid #D4AF37",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D4AF37",
                      flexShrink: 0
                    }}
                  >
                    <i className={topic.icon} style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", color: "#F5F5F5" }}>{topic.title}</h3>
                  </div>
                </div>

                <div style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: "600", marginBottom: "1rem" }}>
                  TARGET: {topic.targetAudience}
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  {topic.description}
                </p>

                {/* Key Takeaways */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#F5F5F5" }}>
                    Key Takeaways:
                  </div>
                  {topic.keyTakeaways.map((takeaway, tkIdx) => (
                    <div key={tkIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={14} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* B2B Event Enquiry Action Bar */}
        <div
          className="glass-card"
          style={{
            padding: "2.5rem 2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(255, 122, 0, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)",
            border: "2px solid rgba(212, 175, 55, 0.35)",
            borderRadius: "20px"
          }}
        >
          <Building2 size={40} color="var(--accent-gold)" style={{ marginBottom: "1rem" }} />
          <h3 style={{ fontSize: "1.6rem", color: "#F5F5F5", marginBottom: "0.5rem" }}>
            Planning a Corporate Event, Summit, or Campus Workshop?
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
            Connect directly with Amit Verma's event management team for customized keynote proposals, speaker fees, and availability.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.25rem"
            }}
          >
            <button
              onClick={openWhatsAppB2B}
              className="btn btn-whatsapp"
              style={{ padding: "0.9rem 2rem", fontSize: "0.95rem" }}
            >
              <MessageCircle size={20} /> Talk to Amit on WhatsApp
            </button>

            <button
              onClick={onOpenB2BModal}
              className="btn btn-gold"
              style={{ padding: "0.9rem 2rem", fontSize: "0.95rem" }}
            >
              <Calendar size={20} /> Request Event Proposal
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
