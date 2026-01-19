import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email:String,
    language:{
        type:String,
        enum:["hi","en"],
        default:"hi",
    },
    service:String,
    mode:{
        type:String,
        enum:["call","video"]
    },
    slotId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"slot"
    },
    meetLink:{
        type:String,
        default:null
    },
    status:{
        type:String,
        enum:["PENDING","CONFIRMED","COMPLETED","CANCELLED"],
        default:"PENDING"
    },
    paymentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment",
        default:null
    }

},{timestamp:true});

export default mongoose.model("Booking",bookingSchema);