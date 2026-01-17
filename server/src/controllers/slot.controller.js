import Slot from "../models/Slot";
import Campaign from "../models/Campaign";

export const getAvailableSlots = async(req,res)=>{
    try{
        const{date, mode} = req.query;
        const campaign = await Campaign.findOne({isActive:true});
        if(!campaign){
            return res.status(403).json({message:"Booking closed"});

        }

        const slots = await slot.find({
            date,
            mode,
            isBooked:false
        }).sort({time:1});

        res.json(slots);

    }catch(err){
        res.status(500).json({message:"Failed to fetch slots"});

    }
};