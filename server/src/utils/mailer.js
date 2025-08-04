import nodemailer from "nodemailer";

// Create transporter based on environment
const createTransporter = () => {
  // For development, you can use Gmail or a service like Ethereal
  if (process.env.NODE_ENV === "development") {
    return nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use app password for Gmail
      },
    });
  }

  // For production, you can use services like SendGrid, AWS SES, or Resend
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Send contact form email
export const sendContactEmail = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Where you want to receive emails
    subject: `New Contact Form Submission from ${contactData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #555;">Contact Details:</h3>
          
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
            ${contactData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; font-size: 12px; color: #666;">
          <p><strong>Submission Details:</strong></p>
          <p>Date: ${new Date().toLocaleString()}</p>
          <p>IP: ${contactData.ip || 'Not available'}</p>
          <p>User Agent: ${contactData.userAgent || 'Not available'}</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}

Message:
${contactData.message}

---
Submitted on: ${new Date().toLocaleString()}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw new Error("Failed to send email");
  }
};

// Send auto-reply to the person who submitted the form
export const sendAutoReply = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: contactData.email,
    subject: `Thank you for contacting me - ${contactData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for reaching out!</h2>
        
        <p>Hi ${contactData.name},</p>
        
        <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #555;">Your Message:</h3>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #28a745;">
            ${contactData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <p>I typically respond within 24-48 hours. If you have any urgent inquiries, please don't hesitate to reach out through other channels.</p>
        
        <p>Best regards,<br>
        [Your Name]</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 12px; color: #666;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    `,
    text: `
Thank you for reaching out!

Hi ${contactData.name},

Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.

Your Message:
Subject: ${contactData.subject}
Message: ${contactData.message}

I typically respond within 24-48 hours. If you have any urgent inquiries, please don't hesitate to reach out through other channels.

Best regards,
[Your Name]

---
This is an automated response. Please do not reply to this email.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Auto-reply sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending auto-reply:", error);
    // Don't throw error for auto-reply failure, just log it
    return { success: false, error: error.message };
  }
};

// Test email configuration
export const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log("Email configuration is valid");
    return { success: true, message: "Email configuration is valid" };
  } catch (error) {
    console.error("Email configuration error:", error);
    return { success: false, error: error.message };
  }
};