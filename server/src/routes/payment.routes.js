import express from "express";
import { verifyWebhook } from "../middlewares/verifyWebhook.js";
import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";
import Payment from "../models/payment.js";
import { getMeetLink } from "../services/googleMeet.services.js";
import { sendConfirmationEmail } from "../services/notification.service.js";

const router = express.Router();

router.post(
    "/webhook",
    verifyWebhook,
    async (req, res) => {
        const event = req.body.event;
        if (event === "payment.captured") {
            const paymentEntity = req.body.payload.entity;
            const bookingId = paymentEntity.receipt;

            const booking = await Booking.findById(bookingId);
            if (!booking) return res.sendStatus(200);

            const slot = await Slot.findById(booking.slotId);
            if (!slot) return res.sendStatus(200);

            if (booking.mode === "video") {
                booking.meetLink = getMeetLink(slot.date);
            }
            slot.isBooked = true;
            slot.bookingId = booking._id;
            await slot.save();

            // update booking
            booking.status = "CONFIRMED";
            await booking.save();

            // Send Email Notification
            sendConfirmationEmail(booking, slot);

            // update payment
            await Payment.findOneAndUpdate(
                { razorpayPaymentId: paymentEntity.order_id },
                {
                    razorpayPaymentId: paymentEntity.id,
                    status: "SUCCESS"
                }
            );
        }
        res.json({ status: "ok" });
    }
);

export default router;