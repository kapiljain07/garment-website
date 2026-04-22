const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendLeadNotification(lead) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
        🎯 New Lead Received!
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px;">${lead.name}</td></tr>
        <tr style="background: #f3f4f6;"><td style="padding: 8px; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px;">${lead.phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px;">${lead.email || 'N/A'}</td></tr>
        <tr style="background: #f3f4f6;"><td style="padding: 8px; font-weight: bold; color: #374151;">Business Type:</td><td style="padding: 8px;">${lead.businessType || 'N/A'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Requirement:</td><td style="padding: 8px;">${lead.requirement || 'N/A'}</td></tr>
        <tr style="background: #f3f4f6;"><td style="padding: 8px; font-weight: bold; color: #374151;">Message:</td><td style="padding: 8px;">${lead.message || 'N/A'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Source:</td><td style="padding: 8px;">${lead.source}</td></tr>
      </table>
      <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
        Received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Arsh NetSolutions" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Lead: ${lead.name} - ${lead.businessType || 'General'}`,
      html,
    });
    console.log('Lead notification email sent');
  } catch (err) {
    console.error('Email send failed:', err.message);
  }
}

module.exports = { sendLeadNotification };
