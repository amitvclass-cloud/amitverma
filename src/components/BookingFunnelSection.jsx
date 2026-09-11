import React, { useState, useEffect } from "react";
import { webinarOffer } from "../data/programs";
import { initiateRazorpayPayment } from "../services/paymentService";
import { useSiteConfig } from "../hooks/useSiteConfig";
import { Clock, ShieldCheck, CheckCircle2, Flame, Sparkles, ArrowRight, Lock } from "lucide-react";

export default function BookingFunnelSection({ selectedProgram, onSuccessPayment, onPaymentStart, onPaymentError }) {
  const activeItem = selectedProgram || webinarOffer;
  const { config: liveConfig, refresh: refreshConfig } = useSiteConfig();
  const liveDate = liveConfig?.next_batch_date || "Sunday, Next Batch";
  const isBookingOpen = !liveConfig || liveConfig.booking_status === "open"; // no config yet -> assume open
  const discountPct = activeItem.originalPrice
    ? Math.round((1 - parseInt(activeItem.price.replace(/[^0-9]/g, ""), 10) / parseInt(activeItem.originalPrice.replace(/[^0-9]/g, ""), 10)) * 100)
    : null;

  // Form State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    mainGoal: "Fat Loss & Energy Boost",
    triedBefore: "Tried self-dieting / workouts without consistency",
    commitmentLevel: "Ready to take action immediately"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Live Countdown Timer — counts down to the real next_batch_datetime from the Sheet.
  const targetTime = liveConfig?.next_batch_datetime ? new Date(liveConfig.next_batch_datetime).getTime() : null;
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!targetTime || isNaN(targetTime)) return; // no valid target yet — timer stays at 00:00:00
    const tick = () => {
      const diff = Math.max(targetTime - Date.now(), 0);
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in your name, email, and phone number to proceed.");
      return;
    }
    setErrorMsg("");
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (onPaymentStart) onPaymentStart();
    setIsSubmitting(true);

    const amountInINR = parseInt(activeItem.price.replace(/[^0-9]/g, ""), 10);

    initiateRazorpayPayment({
      leadData: {
        ...formData,
        bookedItemTitle: activeItem.title,
        webinarDate: liveDate
      },
      amountInINR,
      onSuccess: (paymentDetails) => {
        setIsSubmitting(false);
        onSuccessPayment({
          lead: formData,
          paymentDetails,
          item: activeItem
        });
      },
      onError: (err) => {
        setIsSubmitting(false);
        if (onPaymentError) onPaymentError();
        setErrorMsg(err.message || "Payment attempt failed. Please try again.");
      }
    });
  };

  return (
    <section id="book-now" className="section-padding" style={{ position: "relative", background: "radial-gradient(circle at 50% 50%, rgba(255, 122, 0, 0.15) 0%, rgba(11, 11, 13, 1) 80%)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">LIMITED SEATS BATCH</span>
          <h2 className="section-title">
            Book Your <span className="text-gradient">Transformation Pass</span>
          </h2>
          <p className="section-subtitle">
            Secure your seat for the next live masterclass batch with Amit Verma. Single batch schedule for maximum focus and Q&A quality.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
            maxWidth: "1050px",
            margin: "0 auto"
          }}
        >
          {/* Left Column: Fixed Batch Info & Perks */}
          <div
            className="glass-card"
            style={{
              padding: "2.25rem 1.75rem",
              border: "2px solid #D4AF37",
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)"
            }}
          >
            {/* Urgency Counter Header */}
            <div
              style={{
                background: "rgba(255, 122, 0, 0.15)",
                border: "1px solid rgba(255, 122, 0, 0.4)",
                borderRadius: "12px",
                padding: "1rem",
                textAlign: "center",
                marginBottom: "1.5rem"
              }}
            >
              <div style={{ fontSize: "0.8rem", color: "var(--accent-orange)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                ⚡ NEXT LIVE BATCH COUNTDOWN
              </div>

              {/* Countdown Numbers */}
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <div>
                  <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "#FFB800", fontFamily: "var(--font-heading)" }}>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <div style={{ fontSize: "0.65rem", color: "#A3A3A8" }}>HOURS</div>
                </div>
                <span style={{ fontSize: "1.5rem", color: "#D4AF37" }}>:</span>
                <div>
                  <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "#FFB800", fontFamily: "var(--font-heading)" }}>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <div style={{ fontSize: "0.65rem", color: "#A3A3A8" }}>MINS</div>
                </div>
                <span style={{ fontSize: "1.5rem", color: "#D4AF37" }}>:</span>
                <div>
                  <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "#FFB800", fontFamily: "var(--font-heading)" }}>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <div style={{ fontSize: "0.65rem", color: "#A3A3A8" }}>SECS</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {activeItem.tag}
            </div>

            <h3 style={{ fontSize: "1.5rem", color: "#F5F5F5", marginTop: "0.2rem", marginBottom: "0.5rem" }}>
              {activeItem.title}
            </h3>

            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "1.5rem" }}>
              {activeItem.description}
            </p>

            {/* Date & Time Pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "0.85rem 1rem",
                marginBottom: "1.5rem"
              }}
            >
              <Clock size={20} color="var(--accent-gold)" />
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#F5F5F5" }}>
                  {liveDate}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--accent-orange)" }}>
                  {isBookingOpen ? "Limited Seats — Live & Interactive" : "Registration Closed — Next Batch Opens Soon"}
                </div>
              </div>
            </div>

            {/* Inclusions List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#F5F5F5", textTransform: "uppercase" }}>
                Bonus Inclusions Included Free:
              </div>
              {activeItem.outcomes.map((bonus, bIdx) => (
                <div key={bIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.83rem", color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>{bonus}</span>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div style={{ paddingTop: "1.25rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#A3A3A8" }}>Total Investment</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{ fontSize: "2rem", fontWeight: "800", color: "#FFB800", fontFamily: "var(--font-heading)" }}>
                    {activeItem.price}
                  </span>
                  {activeItem.originalPrice && (
                    <span style={{ fontSize: "0.95rem", color: "var(--text-muted)", textDecoration: "line-through" }}>
                      {activeItem.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {discountPct && (
                <div style={{ background: "rgba(37, 211, 102, 0.15)", color: "#25D366", padding: "0.4rem 0.8rem", borderRadius: "var(--radius-pill)", fontSize: "0.75rem", fontWeight: "700" }}>
                  SAVE {discountPct}% OFF
                </div>
              )}
            </div>

          </div>

          {/* Right Column: 2-Step Lead Form & Payment Trigger */}
          <div
            className="glass-card"
            style={{
              padding: "2.25rem 1.75rem"
            }}
          >
            {!isBookingOpen ? (
              /* Registration Closed State */
              <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                <Lock size={40} color="var(--accent-gold)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.3rem", color: "#F5F5F5", marginBottom: "0.6rem" }}>
                  Registration Closed
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.75rem" }}>
                  This batch isn't accepting new sign-ups right now.<br />
                  Next batch registration opens soon — check back shortly!
                </p>
                <button
                  type="button"
                  onClick={() => refreshConfig()}
                  className="btn btn-secondary"
                  style={{ padding: "0.8rem 1.75rem", fontSize: "0.85rem" }}
                >
                  Check Again
                </button>
              </div>
            ) : (
            <>
            {/* Step Indicators */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: step === 1 ? "var(--gradient-primary)" : "#25D366",
                    color: "#0B0B0D",
                    fontWeight: "800",
                    fontSize: "0.85rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: "0.85rem", color: step === 1 ? "#F5F5F5" : "var(--text-muted)", fontWeight: "600" }}>
                  Contact Info
                </span>
              </div>

              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", flex: 1, margin: "0 0.75rem" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: step === 2 ? "var(--gradient-primary)" : "rgba(255,255,255,0.1)",
                    color: step === 2 ? "#0B0B0D" : "#A3A3A8",
                    fontWeight: "800",
                    fontSize: "0.85rem",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  2
                </span>
                <span style={{ fontSize: "0.85rem", color: step === 2 ? "#F5F5F5" : "var(--text-muted)", fontWeight: "600" }}>
                  Qualifiers & Pay
                </span>
              </div>
            </div>

            {errorMsg && (
              <div style={{ background: "rgba(255, 85, 85, 0.15)", border: "1px solid #FF5555", color: "#FF5555", padding: "0.75rem 1rem", borderRadius: "8px", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
                {errorMsg}
              </div>
            )}

            {/* STEP 1: Personal Details */}
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#F5F5F5", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F5F5F5",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#F5F5F5", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Email Address * (For Zoom Pass)
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F5F5F5",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#F5F5F5", fontWeight: "600", marginBottom: "0.4rem" }}>
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F5F5F5",
                      fontSize: "0.95rem",
                      outline: "none"
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.95rem", fontSize: "1rem" }}>
                  Continue to Qualifier Questions <ArrowRight size={18} />
                </button>
              </form>
            )}

            {/* STEP 2: Qualifier Questions & Razorpay Trigger */}
            {step === 2 && (
              <form onSubmit={handlePaymentSubmit}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#F5F5F5", fontWeight: "600", marginBottom: "0.4rem" }}>
                    What is your primary goal right now?
                  </label>
                  <select
                    name="mainGoal"
                    value={formData.mainGoal}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "#151517",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F5F5F5",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  >
                    <option value="Fat Loss & Energy Boost">Shed Stubborn Fat & Boost Work Energy (10-20kg)</option>
                    <option value="Corporate Stress & Sleep Reset">Reduce Corporate Stress & Fix Sleep Routine</option>
                    <option value="Mindset & Habit Discipline">Build Unshakable Daily Habit Discipline</option>
                    <option value="1-on-1 VIP Mentorship">Direct 1-on-1 VIP Coaching with Amit</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#F5F5F5", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Have you tried a weight loss / coaching program before?
                  </label>
                  <select
                    name="triedBefore"
                    value={formData.triedBefore}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "#151517",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F5F5F5",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  >
                    <option value="Tried self-dieting / workouts without consistency">Tried self-dieting / workouts without consistency</option>
                    <option value="Joined expensive gym but had no time/results">Joined expensive gym but had no time/results</option>
                    <option value="First time seeking structured coaching">First time seeking structured coaching</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#F5F5F5", fontWeight: "600", marginBottom: "0.4rem" }}>
                    Commitment Level:
                  </label>
                  <select
                    name="commitmentLevel"
                    value={formData.commitmentLevel}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "#151517",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F5F5F5",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  >
                    <option value="Ready to take action immediately">Ready to take action & follow the blueprint 100%</option>
                    <option value="Exploring options">Exploring options and want to learn the system first</option>
                  </select>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn btn-secondary"
                    style={{ padding: "0.85rem 1.25rem", fontSize: "0.85rem" }}
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isBookingOpen}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: "0.95rem", fontSize: "1rem", opacity: isBookingOpen ? 1 : 0.5, cursor: isBookingOpen ? "pointer" : "not-allowed" }}
                  >
                    {!isBookingOpen
                      ? "Booking Closed for This Batch"
                      : isSubmitting
                        ? "Initiating Secure Checkout..."
                        : `Pay ${activeItem.price} & Confirm Pass`}
                  </button>
                </div>

                {/* Razorpay Trust Badge Footer */}
                <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  <Lock size={12} color="var(--accent-gold)" />
                  <span>256-bit SSL Secure Payment via <strong>Razorpay</strong></span>
                </div>
              </form>
            )}
            </>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
