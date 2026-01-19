import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendConfirmationEmail = async (booking, slot) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: booking.email,
        subject: `Booking Confirmed: Consultation with Jyotirvid Kuldeep Paliwal`,
        html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
        <h2 style="color: #8B0000; text-align: center;">Booking Confirmation</h2>
        <p>Namaste <strong>${booking.name}</strong>,</p>
        <p>Your astrology consultation has been successfully booked and confirmed.</p>
        <div style="background: #fdfcf9; border-left: 5px solid #c5a059; padding: 15px; margin: 20px 0;">
          <p style="margin: 0;">📅 <strong>Date:</strong> ${slot.date}</p>
          <p style="margin: 0;">⏰ <strong>Time:</strong> ${slot.timeSlot}</p>
          <p style="margin: 0;">💻 <strong>Mode:</strong> ${booking.mode === 'video' ? 'Video Call (VC)' : 'Phone Call'}</p>
        </div>
        ${booking.meetLink ? `<p>🔗 <strong>Video Link:</strong> <a href="${booking.meetLink}">${booking.meetLink}</a></p>` : ''}
        <p>Please be ready 5 minutes before your scheduled time.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.9rem; color: #777; text-align: center;">
          Astro Aryabhata | Jyotirvid Kuldeep Paliwal
        </p>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Confirmation email sent to ${booking.email}`);
    } catch (error) {
        console.error("❌ Failed to send email:", error);
    }
};
