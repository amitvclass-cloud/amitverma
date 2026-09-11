import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Calendar, Video, MessageCircle, X, Sparkles, ShieldCheck } from "lucide-react";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function PaymentConfirmationModal({ data, onClose }) {
  const { config: liveConfig } = useSiteConfig();
  useEffect(() => {
    // Trigger confetti cannon on modal mount
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  }, []);

  if (!data) return null;
  const { lead, paymentDetails, item } = data;
  const liveDate = liveConfig?.next_batch_date || lead.webinarDate || "Your confirmed batch date";
  const zoomLink = liveConfig?.zoom_link;

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
          maxWidth: "580px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2.25rem 2rem",
          position: "relative",
          border: "2px solid #D4AF37",
          boxShadow: "0 0 50px rgba(212, 175, 55, 0.3)",
          borderRadius: "24px"
        }}
      >
        {/* Close Button */}
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

        {/* Success Header */}
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              background: "var(--gradient-primary)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 30px rgba(255, 122, 0, 0.6)",
              marginBottom: "1rem"
            }}
          >
            <CheckCircle2 size={40} color="#0B0B0D" />
          </div>

          <div style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            RADHE RADHE — BOOKING CONFIRMED!
          </div>

          <h2 style={{ fontSize: "1.6rem", color: "#F5F5F5", marginTop: "0.2rem" }}>
            Welcome to the Transformation Batch, {lead.fullName}!
          </h2>
          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
            Your pass for <strong>{item?.title}</strong> is active.
          </p>
        </div>

        {/* Ticket Breakdown Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px dashed #D4AF37",
            borderRadius: "16px",
            padding: "1.5rem",
            marginBottom: "1.5rem"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#A3A3A8" }}>BOOKING REF ID</div>
              <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "#FFB800", fontFamily: "monospace" }}>
                {paymentDetails?.paymentId || "PAY-LOCAL-DEMO"}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.75rem", color: "#A3A3A8" }}>ATTENDEE PHONE</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#F5F5F5" }}>
                {lead.phone}
              </div>
            </div>
          </div>

          {/* Date / Time / Zoom */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.88rem", color: "#F5F5F5" }}>
              <Calendar size={18} color="var(--accent-gold)" />
              <span><strong>Batch:</strong> {liveDate}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.88rem", color: "#F5F5F5" }}>
              <Video size={18} color="#25D366" />
              <span><strong>Zoom Link:</strong> Sent to {lead.email}</span>
            </div>
          </div>
        </div>

        {/* VIP WhatsApp Group Access Button */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
            Step 2: Join the private VIP WhatsApp group to receive session reminder links & PDF bonus blueprints:
          </p>

          <a
            href="https://chat.whatsapp.com/fitwithamitv-vip-pass"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%", padding: "0.95rem", fontSize: "0.95rem" }}
          >
            <MessageCircle size={20} /> Join VIP WhatsApp Group Now
          </a>
        </div>

        {/* Notifications Sent Info */}
        <div style={{ background: "rgba(212, 175, 55, 0.08)", border: "1px solid rgba(212, 175, 55, 0.2)", borderRadius: "10px", padding: "0.85rem", textAlign: "center", fontSize: "0.78rem", color: "var(--accent-gold)" }}>
          ✨ Email confirmation triggered to <strong>{lead.email}</strong>. WhatsApp notification stub triggered for <strong>{lead.phone}</strong>.
        </div>

        <button
          onClick={onClose}
          className="btn btn-secondary"
          style={{ width: "100%", marginTop: "1.25rem", padding: "0.75rem" }}
        >
          Return to Website
        </button>

      </div>
    </div>
  );
}
