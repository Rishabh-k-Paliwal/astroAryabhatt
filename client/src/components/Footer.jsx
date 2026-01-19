import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="section section--dark" style={{ borderTop: "1px solid rgba(197, 160, 89, 0.2)", padding: "60px 0 30px" }}>
            <div className="container">
                <div className="grid grid--3">
                    <div>
                        <h3 style={{ color: "var(--color-accent-gold)", marginBottom: "20px" }}>Astro Aryabhata</h3>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
                            Vedic Astrology & Astronomy Research Centre.
                            Bridging ancient celestial wisdom with modern technical precision.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ color: "white", marginBottom: "20px", fontSize: "1.1rem" }}>Quick Links</h3>
                        <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
                            <li style={{ marginBottom: "10px" }}><Link to="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link></li>
                            <li style={{ marginBottom: "10px" }}><Link to="/about" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>About Pd. K. Paliwal</Link></li>
                            <li style={{ marginBottom: "10px" }}><Link to="/services" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Services</Link></li>
                            <li style={{ marginBottom: "10px" }}><Link to="/book" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Consultation</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ color: "white", marginBottom: "20px", fontSize: "1.1rem" }}>Contact</h3>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
                            Email: Jyotirvid.kp@gmail.com<br />
                            Online Consultations Only
                        </p>
                        <div className="badge badge-gold" style={{ marginTop: "10px" }}>Confidentiality Guaranteed</div>
                    </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "40px", paddingTop: "20px", textAlign: "center", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                    <p>&copy; {new Date().getFullYear()} Astro Aryabhata. All Rights Reserved. | Jyotirvid Kuldeep Paliwal</p>
                </div>
            </div>
        </footer>
    );
}
