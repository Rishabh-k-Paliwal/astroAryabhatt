import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DatePicker from "../components/DatePicker";
import SlotPicker from "../components/SlotPicker";
import BookingForm from "../components/BookingForm";
import { fetchSlots, createBooking, createOrder } from "../services/api";
import { openRazorpay } from "../services/razorpay";

export default function Book() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const loadSlots = async () => {
        if (!date) {
            alert("Please select a date first");
            return;
        }

        try {
            setLoading(true);
            setSelectedSlot(null);

            const res = await fetchSlots(date, "video");
            setSlots(res.data);
            setCurrentStep(2);
        } catch (err) {
            alert("Failed to load slots");
        } finally {
            setLoading(false);
        }
    };

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
        setCurrentStep(3);
    };

    const handleBooking = async (formData) => {
        if (!selectedSlot) {
            alert("Please select a slot first");
            return;
        }

        const bookingRes = await createBooking({
            ...formData,
            slotId: selectedSlot._id,
            language: localStorage.getItem("lang") || "hi"
        });

        const bookingId = bookingRes.data.bookingId;
        const order = await createOrder(bookingId, 999);

        openRazorpay(order, bookingId);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="section section--dark" style={{ paddingTop: "120px" }}>
                <div className="container text-center">
                    <span className="hero-label">{t("live_session") || "Live Session"}</span>
                    <h1 style={{ color: "white" }}>{t("schedule_consultation") || "Schedule Your Consultation"}</h1>
                    <div className="ornament" style={{ margin: "20px auto" }}></div>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                        {t("book_hero_desc") || "Professional consultations conducted via Phone or Video Call (VC). Technical and scholarly analysis of your birth chart in real-time."}
                    </p>
                </div>
            </section>

            {/* Booking Flow */}
            <section className="section">
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="glass-card" style={{ background: "white" }}>
                        <h2 style={{ fontSize: "1.8rem", textAlign: "center" }}>{t("book_appointment") || "Book Appointment"}</h2>
                        <p style={{ textAlign: "center", color: "var(--color-text-muted)" }}>{t("book_appointment_desc") || "Select a date to view available time slots for your Phone/VC consultation."}</p>
                        <div className="ornament" style={{ margin: "20px auto 40px" }}></div>

                        <div style={{ marginTop: "30px" }}>
                            <DatePicker date={date} onChange={setDate} />
                            <button
                                onClick={loadSlots}
                                className="button-premium button-primary"
                                style={{ width: "100%", marginTop: "20px", display: "flex", justifyContent: "center" }}
                                disabled={loading || !date}
                            >
                                {loading ? t("searching") : t("load_slots")}
                            </button>
                        </div>

                        {currentStep >= 2 && slots.length > 0 && (
                            <div style={{ marginTop: "40px", borderTop: "1px solid var(--color-border)", paddingTop: "30px" }}>
                                <h3 style={{ marginBottom: "20px" }}>{t("select_slot")}</h3>
                                <SlotPicker
                                    slots={slots}
                                    selectedSlot={selectedSlot}
                                    onSelect={handleSlotSelect}
                                />
                            </div>
                        )}

                        {currentStep >= 3 && selectedSlot && (
                            <div style={{ marginTop: "40px", borderTop: "1px solid var(--color-border)", paddingTop: "30px" }}>
                                <h3 style={{ marginBottom: "20px" }}>{t("enter_details") || "Confirm Details"}</h3>
                                <div style={{ backgroundColor: "var(--color-bg-cream)", padding: "20px", borderRadius: "12px", marginBottom: "30px", border: "1px solid var(--color-accent-gold-light)" }}>
                                    <p style={{ marginBottom: "5px" }}><strong>{t("proposed_session") || "Proposed Session"}:</strong></p>
                                    <p style={{ fontSize: "1.2rem", color: "var(--color-accent-gold)", fontWeight: "600" }}>{date} at {selectedSlot.timeSlot}</p>
                                </div>
                                <BookingForm onSubmit={handleBooking} />
                            </div>
                        )}

                        {currentStep >= 2 && slots.length === 0 && !loading && (
                            <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", background: "var(--color-bg-cream)", borderRadius: "8px" }}>
                                <p>{t("no_slots_msg") || "No slots available for this date. Please try another date."}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="section section--cream">
                <div className="container">
                    <div className="grid grid--2" style={{ alignItems: "center" }}>
                        <div>
                            <h2 style={{ fontSize: "2rem" }}>{t("confidentiality_title")}</h2>
                            <div className="ornament"></div>
                            <p style={{ fontSize: "1.1rem" }}>
                                {t("confidentiality_desc")}
                            </p>
                            <div className="badge badge-gold" style={{ marginTop: "20px" }}>{t("sacred_secure_knowledge") || "Sacred & Secure Knowledge"}</div>
                        </div>
                        <div className="img-reveal">
                            <img src="/images/confidential.png" alt="Confidentiality and Wisdom" style={{ borderRadius: "12px" }} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


