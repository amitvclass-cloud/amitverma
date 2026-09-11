/**
 * Razorpay Payment Gateway Service
 * 
 * Integration Instructions for Developer/Client:
 * Add `VITE_RAZORPAY_KEY_ID=rzp_live_your_key_here` to your .env file.
 * If no key is set, this service runs in interactive Test Simulation mode so you can preview the booking flow.
 */

import { logLead } from "./leadService";
import { sendEmailConfirmation } from "./emailService";
import { sendWhatsAppConfirmation } from "./whatsappService";

export function initiateRazorpayPayment({ leadData, amountInINR, onSuccess, onError }) {
  const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || "";
  const amountPaise = amountInINR * 100;

  // Log lead entry before initiating payment
  logLead({
    ...leadData,
    amount: amountInINR,
    status: "initiated"
  });

  // If Razorpay SDK & Key ID are present, invoke standard checkout modal
  if (window.Razorpay && razorpayKey) {
    const options = {
      key: razorpayKey,
      amount: amountPaise,
      currency: "INR",
      name: "Amit Verma Coaching",
      description: "Sunday Live Transformation Masterclass Pass",
      image: "https://instagram.com/fitwithamitv",
      prefill: {
        name: leadData.fullName,
        email: leadData.email,
        contact: leadData.phone
      },
      theme: {
        color: "#FF7A00"
      },
      handler: function (response) {
        console.log("💳 [RAZORPAY SUCCESS]:", response);
        const paymentDetails = {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id || `ORD-${Date.now()}`,
          signature: response.razorpay_signature || "test_signature"
        };

        // Call onSuccess immediately so UI opens modal without delay
        if (onSuccess) onSuccess(paymentDetails);

        // Fire post-payment background processes in parallel (non-blocking)
        logLead({
          ...leadData,
          amount: amountInINR,
          status: "paid",
          paymentDetails
        }).catch(err => console.error("Error logging paid lead:", err));

        sendEmailConfirmation({ ...leadData, paymentDetails })
          .catch(err => console.error("Error sending email confirmation:", err));

        sendWhatsAppConfirmation({ ...leadData, paymentDetails })
          .catch(err => console.error("Error sending WhatsApp confirmation:", err));
      },
      modal: {
        ondismiss: function () {
          console.warn("Payment popup closed by user");
          if (onError) onError(new Error("Payment cancelled by user"));
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      if (onError) onError(response.error);
    });
    rzp.open();
  } else {
    // Interactive Test Mode (Simulated Payment)
    console.log("ℹ️ [RAZORPAY STUB]: No VITE_RAZORPAY_KEY_ID found. Executing simulated checkout transaction.");

    setTimeout(() => {
      const mockPaymentDetails = {
        paymentId: `pay_simulated_${Date.now()}`,
        orderId: `order_simulated_${Date.now()}`,
        signature: `sig_simulated_${Math.random().toString(36).substring(7)}`,
        mode: "simulated_test"
      };

      // Call onSuccess immediately when timeout fires
      if (onSuccess) onSuccess(mockPaymentDetails);

      // Fire post-payment background processes in parallel (non-blocking)
      logLead({
        ...leadData,
        amount: amountInINR,
        status: "paid",
        paymentDetails: mockPaymentDetails
      }).catch(err => console.error("Error logging paid lead (simulated):", err));

      sendEmailConfirmation({ ...leadData, paymentDetails: mockPaymentDetails })
        .catch(err => console.error("Error sending email confirmation (simulated):", err));

      sendWhatsAppConfirmation({ ...leadData, paymentDetails: mockPaymentDetails })
        .catch(err => console.error("Error sending WhatsApp confirmation (simulated):", err));
    }, 400);
  }
}
