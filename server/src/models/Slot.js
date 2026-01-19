import mongoose from "mongoose";
const slotSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        enum:["call","video"],
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false
    },
    bookingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        default:null
    }

},{timestamps:true});

export default mongoose.model("slot",slotSchema);