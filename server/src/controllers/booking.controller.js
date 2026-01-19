import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";
import Payment from "../models/payment.js";

export const createBooking = async(req,res)=>{
    try{
        const{
            name,
            phone,
            email,
            language,
            service,
            mode,
            slotId
        } =  req.body;
        const slot = await Slot.findById(slotId);
        if(!slot||slot.isBooked){
            return res.status(400).json({message:"Slot unavailabe"});
        }
        const booking = await Booking.create({
            name,
            phone,
            email,
            language,
            service,
            mode,
            slotId,
            status:"PENDING"
        });
        res.status(201).json({
            bookingId:booking._id,
            message:"Booking Created , You can Proceed to Payment"
        }
        );
      
          

    }catch(err){
        res.status(500).json({message:"Booking failed"});
    }
};

export const completeBooking = async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
  
      booking.status = "COMPLETED";
      await booking.save();
  
      res.json({ message: "Booking marked completed" });
    } catch (err) {
      res.status(500).json({ message: "Completion failed" });
    }
  };