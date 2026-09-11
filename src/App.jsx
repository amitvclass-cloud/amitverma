import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ClientPhotosSection from "./components/ClientPhotosSection";
import WhatIDoSection from "./components/WhatIDoSection";
import ProgramsSection from "./components/ProgramsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import InstagramSection from "./components/InstagramSection";
import FaqSection from "./components/FaqSection";
import BookingFunnelSection from "./components/BookingFunnelSection";
import PaymentConfirmationModal from "./components/PaymentConfirmationModal";
import B2BEnquiryModal from "./components/B2BEnquiryModal";
import Footer from "./components/Footer";

// Dedicated Page Routes
import SpeakingPage from "./pages/SpeakingPage";
import OneToOnePage from "./pages/OneToOnePage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [b2bModalOpen, setB2bModalOpen] = useState(false);
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleOpenBooking = (program = null) => {
    setSelectedProgram(program);
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/#book-now");
      setCurrentPath("/");
      setTimeout(() => {
        const element = document.querySelector("#book-now");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector("#book-now");
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handlePaymentSuccess = (data) => {
    setIsProcessingPayment(false);
    setPaymentSuccessData(data);
  };

  // Route 1: /speaking (B2B Motivational Speaking Dedicated Page)
  if (currentPath === "/speaking") {
    return (
      <SpeakingPage
        onOpenBooking={(prog) => handleOpenBooking(prog)}
      />
    );
  }

  // Route 2: /1to1 (1-on-1 Mentorship Dedicated Page)
  if (currentPath === "/1to1") {
    return (
      <OneToOnePage
        onOpenBooking={(prog) => handleOpenBooking(prog)}
      />
    );
  }

  // Route 3: Homepage (Default Route '/')
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-dark)", color: "var(--text-primary)" }}>
      {/* Sticky Glass Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Home / Hero (With 4:5 Video Placeholder Frame) */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} />

      {/* 2. My Story Section */}
      <StorySection onOpenBooking={() => handleOpenBooking()} />

      {/* 2b. Client Transformation Photos Section (Immediately After My Story, Before What I Do) */}
      <ClientPhotosSection onOpenBooking={() => handleOpenBooking()} />

      {/* 3. What I Do Section */}
      <WhatIDoSection onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Single Flagship Coaching Program Block */}
      <ProgramsSection onOpenBooking={(prog) => handleOpenBooking(prog)} />

      {/* 6. Testimonials & Video Reel Cards (With Duration Badge Only) */}
      <TestimonialsSection />

      {/* 7. Instagram Section (Top Profile Banner Only) */}
      <InstagramSection />

      {/* 8. FAQ Accordion */}
      <FaqSection />

      {/* 9. Booking Funnel / Pass Checkout */}
      <BookingFunnelSection
        selectedProgram={selectedProgram}
        onSuccessPayment={handlePaymentSuccess}
        onPaymentStart={() => setIsProcessingPayment(true)}
        onPaymentError={() => setIsProcessingPayment(false)}
      />

      {/* Footer */}
      <Footer />

      {/* Full-Screen Payment Processing Overlay */}
      {isProcessingPayment && !paymentSuccessData && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(11, 11, 13, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            backdropFilter: "blur(5px)"
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "4px solid rgba(255, 122, 0, 0.2)",
              borderTop: "4px solid var(--accent-orange, #FF7A00)",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              marginBottom: "1rem"
            }}
          />
          <p style={{ color: "#F5F5F5", fontSize: "1rem", fontWeight: "600" }}>
            Processing Payment & Confirming Pass...
          </p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Modals */}
      {paymentSuccessData && (
        <PaymentConfirmationModal
          data={paymentSuccessData}
          onClose={() => setPaymentSuccessData(null)}
        />
      )}

      {b2bModalOpen && (
        <B2BEnquiryModal onClose={() => setB2bModalOpen(false)} />
      )}
    </div>
  );
}
