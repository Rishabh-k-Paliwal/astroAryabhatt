import mongoose from "mongoose";

const paymntSchema = new monogoose.Schema({
    razorpayOrderId:String,
    razorayPaymentId:String,
    razorpaySignature:String,
    amount:Number,
    currency:{
        type:String,
        default:"INR"
    },
    status:{
        type:String,
        enum:["CREATED","SUCCESS","FAILED"],
        default:"CREATED"
    }

},{timestamps:true});

export default mongoose.model("Payment",paymentSchema);