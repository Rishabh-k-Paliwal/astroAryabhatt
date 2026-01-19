
// import express from "express";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
// const app =express()
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

console.log("starting server....");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

