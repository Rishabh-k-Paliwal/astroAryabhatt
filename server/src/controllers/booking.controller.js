import Booking from "../models/Booking.js";
import Slot from "../models/payment.js";
import Payment from "../models/payment.js";

export const createBooking = async(req,res)=>{
    try{
        const{
            name,
            phone,
            email,
            language,
            service,
            module,
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
        });

    }catch(err){
        res.status(500).json({message:"Booking failed"});
    }
};