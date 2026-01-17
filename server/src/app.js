import express from "express";
import slotRoutes from "./routes/slot.routes.js";
import bookingRoutes from "./routes/booking.routes.js";

const app=express();


app.get("/", (req, res) => {
    res.send("API is running ✅");
  });

  
app.use(express.json());
app.use("/api/slots",slotRoutes);
app.use("/api/bookings",bookingRoutes);

export default app;





