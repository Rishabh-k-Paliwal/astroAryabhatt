import mongoose from "mongoose";
import dotenv from "dotenv";
import Slot from "./models/Slot.js";
import Campaign from "./models/Campaign.js"; // Assuming Campaign model exists
import connectDB from "./config/db.js";

dotenv.config();

const seedSlots = async (daysAhead = 7) => {
    await connectDB();

    try {
        // 1. Ensure a Campaign is active
        let campaign = await Campaign.findOne({ isActive: true });
        if (!campaign) {
            console.log("No active campaign found. Creating a default one...");
            campaign = await Campaign.create({
                name: "General Consultation",
                isActive: true,
                price: 500
            });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const timeSlots = [
            
            "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"
        ];

        for (let i = 1; i <= daysAhead; i++) {
            const targetDate = new Date(today);
            targetDate.setDate(today.getDate() + i);
            const dateString = targetDate.toISOString().split('T')[0];

            // Check if slots already exist for this date
            const existing = await Slot.findOne({ date: dateString });
            if (existing) {
                console.log(`Slots already exist for ${dateString}, skipping...`);
                continue;
            }

            const slotsToCreate = timeSlots.map(time => ({
                date: dateString,
                timeSlot: time,
                isBooked: false,
                price: campaign.price,
                mode: "video" // Default, can be mixed
            }));

            await Slot.insertMany(slotsToCreate);
            console.log(`✅ Created ${slotsToCreate.length} slots for ${dateString}`);
        }

        console.log("\n🚀 Slot seeding complete!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding failed:", error);
        process.exit(1);
    }
};

// Run the script
seedSlots();
