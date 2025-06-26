"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  // Here you would integrate with your email service
  // For example, using Resend, SendGrid, or similar
  console.log("Contact form submission:", {
    name,
    email,
    company,
    message,
    timestamp: new Date().toISOString(),
  });

  // Example email integration (you would replace this with actual email service)
  try {
    // await sendEmail({
    //   to: 'bpxailabs@gmail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send message");
  }
}
