import razorpay from "../config/razorpay";
import Booking from "../models/Booking";
import Payment from "../models/payment.js";
import Slot from "../models/Slot.js";
import crypto from "crypto";



export const createOrder = async (req, res) => {
    try {
      const { bookingId, amount } = req.body;
  
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
  
      const order = await razorpay.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: bookingId
      });
  
      await Payment.create({
        razorpayOrderId: order.id,
        amount,
        status: "CREATED"
      });
  
      return res.json(order);
  
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  