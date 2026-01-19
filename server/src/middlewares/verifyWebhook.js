import crypto from "crypto";

export const verifyWebhook = (req, res, next) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  const signature = req.headers["x-razorpay-signature"];
  const body = req.body;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.error("❌ Webhook signature mismatch");
    return res.status(401).json({ message: "Invalid webhook signature" });
  }

  next();
};

export default verifyWebhook;
