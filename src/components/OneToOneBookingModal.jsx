import React, { useState } from "react";
import { X, UserCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { initiateOneToOnePayment } from "../services/leadsBackend";

// Standalone booking flow for the 1-on-1 Mentorship program: contact form -> Razorpay -> inline
// success state. Isolated from the webinar's BookingFunnelSection/paymentService on purpose so
// changes here can never break the working webinar flow.
export default function OneToOneBookingModal({ program, onClose }) {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "" });
  const [status, setStatus] = useState("form"); // form | processing | paid
  const [error, setError] = useState("");

  const amountInINR = parseInt(String(program.price).replace(/[^0-9]/g, ""), 10) || 0;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setStatus("processing");

    initiateOneToOnePayment({
      leadData: { ...formData, programTitle: program.title },
      amountInINR,
      onSuccess: () => setStatus("paid"),
      onError: (err) => {
        setError(err.message || "Payment could not be completed. Please try again.");
        setStatus("form");
      }
    });
  };

  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(11, 11, 13, 0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem"
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "100%", maxWidth: "520px", maxHeight: "90vh", overflowY: "auto",
          padding: "2.25rem 2rem", position: "relative", border: "2px solid #D4AF37",
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.25)", borderRadius: "20px"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "1.25rem", right: "1.25rem", background: "rgba(255,255,255,0.08)",
            border: "none", color: "#F5F5F5", borderRadius: "50%", width: "36px", height: "36px",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
          }}
        >
          <X size={20} />
        </button>

        {status === "paid" ? (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <CheckCircle2 size={54} color="#25D366" style={{ marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.5rem", color: "#F5F5F5", marginBottom: "0.5rem" }}>
              Radhe Radhe, {formData.fullName}! Payment Confirmed.
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
              Your spot for <strong>{program.title}</strong> is booked. Amit's team will reach out on WhatsApp/email
              within 24 hours to schedule your first session. A confirmation email is on its way to {formData.email}.
            </p>
            <button onClick={onClose} className="btn btn-secondary" style={{ width: "100%", padding: "0.75rem" }}>
              Close
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px", background: "rgba(212, 175, 55, 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#D4AF37"
              }}>
                <UserCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#F5F5F5" }}>{program.title}</h3>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontWeight: "600" }}>
                  {program.price} — 1-on-1 Personal Mentorship
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>Full Name *</label>
                <input
                  type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                  placeholder="e.g. Ananya Verma"
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>Email *</label>
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="ananya@company.com"
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "#F5F5F5", marginBottom: "0.3rem" }}>Phone Number *</label>
                <input
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  placeholder="+91 98765 43210"
                  style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", color: "#F5F5F5", outline: "none" }}
                />
              </div>

              {error && (
                <div style={{ fontSize: "0.82rem", color: "#FF6B6B", background: "rgba(255,107,107,0.08)", padding: "0.6rem 0.9rem", borderRadius: "8px" }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={status === "processing"} className="btn btn-gold" style={{ padding: "0.9rem", marginTop: "0.5rem" }}>
                {status === "processing" ? "Processing..." : `Pay ${program.price} & Book Now`}
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                <ShieldCheck size={14} color="#25D366" /> Secure payment via Razorpay
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
