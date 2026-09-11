/**
 * Lead Logging Service — Captures all form submissions (paid or unpaid)
 * 
 * Integration Instructions for Developer/Client:
 * Replace the localStorage fallback below with your preferred backend endpoint or Google Sheets Webhook URL.
 * Example Google Sheets Webhook: fetch('YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL', { method: 'POST', body: JSON.stringify(leadData) })
 */

export async function logLead(leadData) {
  const leadWithTimestamp = {
    ...leadData,
    id: `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
    status: leadData.status || "initiated" // "initiated" | "paid" | "abandoned"
  };

  console.log("📝 [LEAD SERVICE] Logging Lead Submission:", leadWithTimestamp);

  // Only paid leads get written to the leads tab — "initiated" leads stay local-only noise.
  const sheetUrl = import.meta.env.VITE_SHEET_API_URL;
  if (sheetUrl && leadWithTimestamp.status === "paid") {
    try {
      await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // avoids CORS preflight on Apps Script
        body: JSON.stringify({
          name: leadWithTimestamp.fullName,
          email: leadWithTimestamp.email,
          phone: leadWithTimestamp.phone,
          batch_date: leadWithTimestamp.webinarDate,
          payment_id: leadWithTimestamp.paymentDetails?.paymentId || "",
          amount: leadWithTimestamp.amount
        })
      });
    } catch (err) {
      console.error("Error sending lead to Google Sheet:", err);
    }
  }

  // LocalStorage stub for offline/demo operation:
  try {
    const existingLeads = JSON.parse(localStorage.getItem("fitwithamitv_leads") || "[]");
    existingLeads.unshift(leadWithTimestamp);
    localStorage.setItem("fitwithamitv_leads", JSON.stringify(existingLeads));
  } catch (err) {
    console.warn("Could not save lead to localStorage", err);
  }

  return { success: true, lead: leadWithTimestamp };
}

export function getLoggedLeads() {
  try {
    return JSON.parse(localStorage.getItem("fitwithamitv_leads") || "[]");
  } catch (err) {
    return [];
  }
}
