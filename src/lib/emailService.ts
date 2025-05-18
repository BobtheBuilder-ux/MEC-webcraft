import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: import.meta.env.VITE_MAILTRAP_HOST || "sandbox.smtp.mailtrap.io",
  port: Number(import.meta.env.VITE_MAILTRAP_PORT) || 2525,
  auth: {
    user: import.meta.env.VITE_MAILTRAP_USER,
    pass: import.meta.env.VITE_MAILTRAP_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  cc?: string[];
  bcc?: string[];
}

export const sendEmail = async (options: EmailOptions) => {
  const mailOptions = {
    from: import.meta.env.VITE_MAILTRAP_FROM_EMAIL || 'noreply@mecwebcraft.com',
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    cc: options.cc,
    bcc: options.bcc,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};