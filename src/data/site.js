// Site Metadata & Global Configurations for Amit Verma

export const siteConfig = {
  name: "Amit Verma",
  handle: "@fitwithamitv",
  title: "Motivational Speaker | Fitness & Life Transformation Coach",
  tagline: "Radhe Radhe — Fit in Life & Body",
  instagramUrl: "https://www.instagram.com/fitwithamitv/",
  facebookUrl: "https://www.facebook.com/share/1ElVe3ZAhd/",
  whatsappNumber: "919876543210", // Updated standard contact format
  whatsappMessage: "Hi Amit, I would like to inquire about your Coaching Programs & Motivational Speaking events.",
  
  bioStats: [
    { label: "Weight Loss", value: "30 kg", desc: "110kg → 80kg without gym" },
    { label: "MNC Experience", value: "20+ Yrs", desc: "Ex-Corporate Tech Leader" },
    { label: "Businesses Scaled", value: "500+", desc: "Mentored & Scaled" },
    { label: "Instagram Family", value: "11.6K+", desc: "Engaged Community" },
  ],

  hero: {
    badge: "⚡ Radhe Radhe | 110kg → 80kg Transformation",
    headline: "Engineered Body. Re-programmed Mind. Scaled Life.",
    subheadline: "From a burnt-out 110kg MNC Engineer to a 80kg Fitness Coach & Motivational Speaker. I help professionals lose weight, eliminate fatigue, and build elite mental toughness.",
    primaryCta: "Book a Session",
    secondaryCta: "Explore Programs",
  }
  // Webinar pricing/content lives in src/data/programs.js (webinarOffer) — single source of truth.
  // Live batch date/seats/booking-status come from the Google Sheet via useSiteConfig().
};
