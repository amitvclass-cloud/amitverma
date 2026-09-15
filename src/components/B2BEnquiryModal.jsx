import React, { useState } from "react";
import { X, Building2, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../data/site";
import { useSiteConfig, formatWhatsAppNumber } from "../hooks/useSiteConfig";
import { submitB2BEnquiry } from "../services/leadsBackend";

export default function B2BEnquiryModal({ onClose }) {
  const { config } = useSiteConfig();
  const whatsappNumber = formatWhatsAppNumber(config?.support_phone) || siteConfig.whatsappNumber;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    eventType: "Corporate Keynote / Annual Summit",
    estimatedAudience: "100 - 300 Attendees",
    tentativeDate: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitB2BEnquiry(formData).catch((err) => console.error("Error submitting B2B enquiry:", err));
    setSubmitted(true);
  };

  const sendDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Amit, I submitted a Corporate Speaking Enquiry for ${formData.organizationName}. Contact Person: ${formData.contactPerson}, Phone: ${formData.phone}.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(11, 11, 13, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        zIndex: 2000,
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
          maxWidth: "540px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2.25rem 2rem",
          position: "relative",
          border: "2px solid #D4AF37",
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.25)",
          borderRadius: "20px"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "rgba(255, 255, 255, 0.08)",
            border: "none",
            color: "#F5F5F5",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(212, 175, 55, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D4AF37"
                }}
              >
                <Building2 size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#F5F5F5" }}>Corporate & Event Keynote Proposal</h3>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: "600" }}>
                  B2B Motivational Speaking Enquiry
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                  Organization / Institution Name *
                </label>
                <input
                  type="text"
                  name="organizationName"
                  required
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="e.g. Infosys / Rotary Club / IIT Delhi"
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Verma"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ananya@company.com"
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "#151517", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                  >
                    <option value="Corporate Keynote / Annual Summit">Corporate Keynote / Summit</option>
                    <option value="Educational / Campus Keynote">Campus / College Event</option>
                    <option value="Executive Leadership Retreat">Leadership Retreat</option>
                    <option value="MSME / Business Association">MSME Business Summit</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    name="tentativeDate"
                    value={formData.tentativeDate}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>
                  Additional Event Details / Preferred Topic
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your audience and goals..."
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none", resize: "none" }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold" style={{ padding: "0.9rem", marginTop: "0.5rem" }}>
                Submit Event Proposal Request <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <CheckCircle2 size={54} color="#25D366" style={{ marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.5rem", color: "#F5F5F5", marginBottom: "0.5rem" }}>
              Enquiry Submitted Successfully!
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Thank you, {formData.contactPerson}! Amit Verma's team will contact you within 4 hours with topics and custom proposal details.
            </p>

            <button onClick={sendDirectWhatsApp} className="btn btn-whatsapp" style={{ width: "100%", padding: "0.9rem", marginBottom: "0.75rem" }}>
              Or Talk to Amit Directly on WhatsApp Now
            </button>

            <button onClick={onClose} className="btn btn-secondary" style={{ width: "100%", padding: "0.75rem" }}>
              Close Modal
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
