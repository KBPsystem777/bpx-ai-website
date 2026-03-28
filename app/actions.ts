"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Name, email, and message are required");
  }

  try {
    await resend.emails.send({
      from: "BPxAI Labs <onboarding@resend.dev>",
      to: "bpxailabs@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f8f6; border-radius: 8px;">
          <div style="background: #0F2044; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #C9A84C; margin: 0; font-size: 18px;">New Contact Form Submission</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px; width: 100px;">Name</td>
                <td style="padding: 8px 0; color: #0F2044; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #0F2044; font-size: 14px;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Company</td>
                <td style="padding: 8px 0; color: #0F2044; font-size: 14px;">${company}</td>
              </tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #0F2044; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 11px; margin-top: 16px; text-align: center;">
            Sent from bpxai.com contact form
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message");
  }
}
