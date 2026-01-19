import express from "express";
import cors from "cors";
import slotRoutes from "./routes/slot.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import paymentRoutes from "./routes/payment.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/payment/webhook", express.raw({ type: "application/json" })
);

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payment", paymentRoutes);

app.use(errorHandler);
export default app;





