import express from "express";
import {createBooking, completeBooking} from "../controllers/booking.controller.js"

const router = express.Router();

router.post("/create",createBooking);
router.post("/complete/:id",completeBooking);

export default router;
