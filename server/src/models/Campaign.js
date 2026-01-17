import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    name:String,
    isActive:{
      type:Boolean,
      default:true
    },
    maxSlotsPerDay:Number
},{timestamps:true});

export default mongoose.model("Campaign", campaignSchema);