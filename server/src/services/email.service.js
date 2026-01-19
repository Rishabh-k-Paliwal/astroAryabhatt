import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendBookingEmail = async (to, booking) => {
  await transporter.sendMail({
    from: `"Astrology Consultation" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Consultation Confirmed",
    html: `
      <h3>Booking Confirmed</h3>
      <p>Date: ${booking.date}</p>
      <p>Time: ${booking.time}</p>
      ${booking.meetLink ? `<p>Meet: ${booking.meetLink}</p>` : ""}
    `
  });
};
