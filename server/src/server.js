
// import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
// const app =express()
dotenv.config();

const PORT = process.env.PORT || 5000;

console.log("starting server....");

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("MongoDB Connected");
    app.listen(PORT,()=>{
        console.log(`server runnig on port ${PORT}`);
    });
  })
  .catch(err=>{
    console.error("DB connection failed",err);
  });