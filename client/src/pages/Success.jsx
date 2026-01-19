import { useSearchParams } from "react-router-dom";

export default function Success() {
    const [params] = useSearchParams();
    const bookingId = params.get("booking");

    return (
        <>
            {/* Success Message Section */}
            <section className="section--dark" style={{ textAlign: "center", paddingTop: "var(--spacing-2xl)", paddingBottom: "var(--spacing-2xl)" }}>
                <div className="container">
                    <div style={{ fontSize: "72px", marginBottom: "var(--spacing-lg)" }}>✓</div>
                    <h1 style={{ color: "var(--color-accent-gold)", marginBottom: "var(--spacing-md)" }}>Consultation Booked</h1>
                    <p style={{ color: "var(--color-bg-light)", fontSize: "20px", marginBottom: "var(--spacing-lg)" }}>
                        Your appointment has been successfully scheduled.
                    </p>
                    <div style={{
                        backgroundColor: "rgba(200, 169, 81, 0.1)",
                        border: "1px solid var(--color-accent-gold)",
                        padding: "var(--spacing-lg)",
                        borderRadius: "4px",
                        display: "inline-block",
                        marginBottom: "var(--spacing-lg)"
                    }}>
                        <p style={{ color: "var(--color-bg-light)", margin: 0 }}>Your Booking Reference</p>
                        <p style={{ color: "var(--color-accent-gold)", fontSize: "24px", fontWeight: "700", margin: "var(--spacing-sm) 0 0 0" }}>
                            {bookingId || "Processing..."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Next Steps Section */}
            <section className="section--light" style={{ paddingTop: "var(--spacing-2xl)", paddingBottom: "var(--spacing-2xl)" }}>
                <div className="container" style={{ maxWidth: "900px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)", color: "#4b3f72" }}>What Happens Next</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-2xl)" }}>
                        <div style={{ padding: "var(--spacing-lg)", backgroundColor: "var(--color-bg-light)", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
                            <h3 style={{ color: "var(--color-accent-gold)", marginBottom: "var(--spacing-md)" }}>Confirmation</h3>
                            <p>Check your email and WhatsApp for booking confirmation. The meeting link will be sent 24 hours before your scheduled consultation time.</p>
                        </div>
                        <div style={{ padding: "var(--spacing-lg)", backgroundColor: "var(--color-bg-light)", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
                            <h3 style={{ color: "var(--color-accent-gold)", marginBottom: "var(--spacing-md)" }}>Preparation</h3>
                            <p>Have your birth details (date, time, and location) ready. Prepare any specific questions you'd like to discuss during the consultation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Return Home CTA */}
            <section className="section--dark" style={{ textAlign: "center", paddingTop: "var(--spacing-2xl)", paddingBottom: "var(--spacing-2xl)" }}>
                <div className="container">
                    <p style={{ marginBottom: "var(--spacing-lg)", fontSize: "18px", color: "rgba(246, 245, 242, 0.9)" }}>Thank you for choosing our consultation services.</p>
                    <a href="/" className="btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
                        Return to Home
                    </a>
                </div>
            </section>
        </>
    );
}