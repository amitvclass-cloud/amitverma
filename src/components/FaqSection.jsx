import React, { useState } from "react";
import { faqData, faqCategories } from "../data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState("faq-1");

  const filteredFaqs = activeCategory === "All"
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">GOT QUESTIONS?</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Pre-answering common DM questions regarding pricing, format, online/offline sessions, and coaching expectations.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem"
          }}
        >
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-pill)",
                border: activeCategory === cat ? "1px solid #D4AF37" : "1px solid rgba(255,255,255,0.1)",
                background: activeCategory === cat ? "var(--gradient-primary)" : "rgba(255,255,255,0.04)",
                color: activeCategory === cat ? "#0B0B0D" : "#F5F5F5",
                fontWeight: activeCategory === cat ? "700" : "500",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card"
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  border: isOpen ? "1px solid #D4AF37" : "1px solid rgba(212, 175, 55, 0.2)"
                }}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    background: isOpen ? "rgba(255, 122, 0, 0.08)" : "transparent",
                    border: "none",
                    color: "#F5F5F5",
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <HelpCircle size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    color="var(--accent-gold)"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0
                    }}
                  />
                </button>

                {/* Accordion Body Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem 3.25rem",
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6"
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
