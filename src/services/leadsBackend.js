/**
 * Backend for B2B speaking enquiries + 1-on-1 paid leads.
 * SEPARATE Google Sheet + Apps Script deployment from the webinar's (VITE_SHEET_API_URL).
 * See backend/apps-script/LeadsCode.gs for the server side.
 */

function post(action, payload) {
  const base = import.meta.env.VITE_LEADS_SHEET_API_URL;
  if (!base) {
    console.warn(`VITE_LEADS_SHEET_API_URL not set — ${action} lead not sent to Sheet.`);
    return Promise.resolve({ success: false, stub: true });
  }
  return fetch(`${base}?action=${action}`, {
    method: "POST",
    headers: { "Content-Type": "text/plain" }, // avoids CORS preflight on Apps Script
    body: JSON.stringify(payload)
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(`Error sending ${action} lead:`, err);
      return { success: false, error: err.message };
    });
}

export function submitB2BEnquiry(data) {
  return post("b2b", data);
}

export function submitOneToOneLead(data) {
  return post("onetoone", data);
}

export function sendOneToOneEmail(data) {
  return post("send_email", data);
}

// Mirrors paymentService.js's initiateRazorpayPayment but posts to the separate leads Sheet
// and uses 1-on-1-specific copy (no "batch"/Zoom concepts — this is a direct paid mentorship booking).
export function initiateOneToOnePayment({ leadData, amountInINR, onSuccess, onError }) {
  const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || "";
  const amountPaise = amountInINR * 100;

  const finalize = (paymentDetails) => {
    if (onSuccess) onSuccess(paymentDetails);

    submitOneToOneLead({
      name: leadData.fullName,
      email: leadData.email,
      phone: leadData.phone,
      program: leadData.programTitle,
      payment_id: paymentDetails.paymentId,
      amount: amountInINR
    }).catch((err) => console.error("Error logging 1-on-1 lead:", err));

    sendOneToOneEmail({
      to: leadData.email,
      name: leadData.fullName,
      program: leadData.programTitle,
      payment_id: paymentDetails.paymentId
    }).catch((err) => console.error("Error sending 1-on-1 confirmation email:", err));
  };

  if (window.Razorpay && razorpayKey) {
    const rzp = new window.Razorpay({
      key: razorpayKey,
      amount: amountPaise,
      currency: "INR",
      name: "Amit Verma Coaching",
      description: leadData.programTitle || "1-on-1 Mentorship Program",
      prefill: { name: leadData.fullName, email: leadData.email, contact: leadData.phone },
      theme: { color: "#FF7A00" },
      handler: (response) => {
        finalize({
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id || `ORD-${Date.now()}`
        });
      },
      modal: {
        ondismiss: () => onError && onError(new Error("Payment cancelled by user"))
      }
    });
    rzp.on("payment.failed", (response) => onError && onError(response.error));
    rzp.open();
  } else {
    // Interactive Test Mode (Simulated Payment) — same fallback pattern as the webinar flow
    setTimeout(() => {
      finalize({
        paymentId: `pay_simulated_${Date.now()}`,
        orderId: `order_simulated_${Date.now()}`,
        mode: "simulated_test"
      });
    }, 400);
  }
}
