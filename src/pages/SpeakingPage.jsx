import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MotivationalSpeakingSection from "../components/MotivationalSpeakingSection";
import B2BEnquiryModal from "../components/B2BEnquiryModal";
import Footer from "../components/Footer";
import { siteConfig } from "../data/site";
import { useSiteConfig, formatWhatsAppNumber } from "../hooks/useSiteConfig";
import { Building2, Award, Users, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function SpeakingPage({ onOpenBooking }) {
  const [b2bModalOpen, setB2bModalOpen] = useState(false);
  const { config } = useSiteConfig();
  const whatsappNumber = formatWhatsAppNumber(config?.support_phone) || siteConfig.whatsappNumber;

  const openWhatsAppB2B = () => {
    const message = encodeURIComponent("Hi Amit, I would like to inquire about booking you for a Corporate/Event Motivational Keynote.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-dark)", color: "var(--text-primary)" }}>
      {/* Sticky Navbar */}
      <Navbar onOpenBooking={onOpenBooking} />

      {/* Dedicated B2B Speaking Page Hero */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "60px",
          background: "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, rgba(11, 11, 13, 1) 75%)",
          textAlign: "center"
        }}
      >
        <div className="container">
          <div
            className="badge-pill"
            style={{
              marginBottom: "20px",
              display: "inline-flex",
              background: "rgba(212, 175, 55, 0.15)",
              border: "1px solid #D4AF37"
            }}
          >
            <Building2 size={16} color="var(--accent-gold)" />
            <span>CORPORATE TRAINING & CONSULTING</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 6vw, 3.8rem)",
              fontWeight: "800",
              lineHeight: "1.2",
              margin: "0 0 1.25rem 0"
            }}
          >
            Cost Saving, Vendor Development & <br />
            <span className="text-gradient">Team Building — From the Factory Floor</span>
          </h1>

          <div className="speaking-hero-proof">
            <span><CheckCircle2 size={15} /> 21+ years of MNC leadership</span>
            <span><CheckCircle2 size={15} /> Engineer → Group Manager</span>
            <span><CheckCircle2 size={15} /> Tested on real floors & teams</span>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setB2bModalOpen(true)}
              className="btn btn-gold"
              style={{ padding: "1rem 2.2rem", fontSize: "1rem" }}
            >
              Request Speaker Proposal <ArrowRight size={18} />
            </button>
            
            <button
              onClick={openWhatsAppB2B}
              className="btn btn-whatsapp"
              style={{ padding: "1rem 2rem", fontSize: "1rem" }}
            >
              <MessageCircle size={18} /> Direct WhatsApp Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Main Speaking & Topics Section Component */}
      <MotivationalSpeakingSection onOpenB2BModal={() => setB2bModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* B2B Proposal Modal */}
      {b2bModalOpen && (
        <B2BEnquiryModal onClose={() => setB2bModalOpen(false)} />
      )}
    </div>
  );
}
