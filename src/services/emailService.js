/**
 * Transactional Email Confirmation — sent via Resend, but the Resend call itself happens
 * server-side inside the Google Apps Script Web App (see backend/apps-script/Code.gs,
 * action=send_email). The Resend API key never touches the browser — it's an in-browser
 * fetch to VITE_SHEET_API_URL only, same Web App already used for the leads sheet.
 */

export async function sendEmailConfirmation(leadData) {
  const url = import.meta.env.VITE_SHEET_API_URL;
  if (!url) {
    console.warn("📧 [EMAIL] VITE_SHEET_API_URL not set — email not sent.");
    return { success: false, stub: true };
  }

  try {
    const res = await fetch(`${url}?action=send_email`, {
      method: "POST",
      headers: { "Content-Type": "text/plain" }, // avoids CORS preflight on Apps Script
      body: JSON.stringify({
        to: leadData.email,
        name: leadData.fullName,
        batch_date: leadData.webinarDate,
        payment_id: leadData.paymentDetails?.paymentId || ""
      })
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending confirmation email:", err);
    return { success: false, error: err.message };
  }
}
