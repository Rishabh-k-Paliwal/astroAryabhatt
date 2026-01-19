import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
    { q: t("faq_q6"), a: t("faq_a6") },
    { q: t("faq_q7"), a: t("faq_a7") },
    { q: t("faq_q8"), a: t("faq_a8") }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="container">
          <div className="hero-content fade-up">
            <span className="hero-label">{t("hero_label")}</span>
            <h1 style={{ color: "white" }}>{t("hero_title")}</h1>
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px" }}>
              {t("hero_desc")}
            </p>
            <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
              <button className="button-premium button-primary" onClick={() => navigate("/book")}>
                {t("book_now")}
              </button>
              <button className="button-premium button-outline" onClick={() => navigate("/about")}>
                {t("scholars_path")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center" }}>
            <div className="img-reveal">
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80"
                alt="Classical Library"
                style={{ borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              />
            </div>
            <div>
              <div className="badge badge-gold mb-sm">{t("dual_credentials")}</div>
              <h2>{t("scholarly_authority")}</h2>
              <div className="ornament"></div>
              <p>
                <strong>{t("jyotirvid_name") || "Jyotirvid Kuldeep Paliwal"}</strong> {t("expertise_desc_1")}
                {t("expertise_desc_2")}
              </p>
              <p>
                {t("expertise_desc_3")}
              </p>
              <button className="button-premium button-outline" onClick={() => navigate("/about")}>
                {t("full_bio")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section--dark">
        <div className="container text-center">
          <h2 style={{ textAlign: "center", marginBottom: "15px" }}>{t("sky_watcher_tradition")}</h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 60px" }}>
            {t("sky_watcher_desc")}
          </p>

          <div className="grid grid--3">
            <div className="glass-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ color: "var(--color-accent-gold)" }}>{t("aakash_darshan")}</h3>
              <p>{t("aakash_darshan_desc")}</p>
            </div>
            <div className="glass-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ color: "var(--color-accent-gold)" }}>{t("nabh_darshan")}</h3>
              <p>{t("nabh_darshan_desc")}</p>
            </div>
            <div className="glass-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ color: "var(--color-accent-gold)" }}>{t("aakash_awalokan")}</h3>
              <p>{t("aakash_awalokan_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Pillars */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>{t("technical_consultation")}</h2>
          <div className="ornament" style={{ margin: "20px auto 50px" }}></div>

          <div className="grid grid--2">
            <div className="glass-card">
              <h3 style={{ fontSize: "1.2rem" }}>{t("empirical_analysis")}</h3>
              <p>{t("empirical_analysis_desc")}</p>
            </div>
            <div className="glass-card">
              <h3 style={{ fontSize: "1.2rem" }}>{t("scientific_remedies")}</h3>
              <p>{t("scientific_remedies_desc")}</p>
            </div>
            <div className="glass-card">
              <h3 style={{ fontSize: "1.2rem" }}>{t("holistic_guidance")}</h3>
              <p>{t("holistic_guidance_desc")}</p>
            </div>
            <div className="glass-card">
              <h3 style={{ fontSize: "1.2rem" }}>{t("ancient_vidhya")}</h3>
              <p>{t("ancient_vidhya_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--light">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>{t("faq_title")}</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="faq-text">{faq.q}</span>
                  </div>
                  <div className="faq-icon" style={{
                    transform: activeFaq === index ? "rotate(45deg)" : "rotate(0deg)"
                  }}>
                    +
                  </div>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Confidence */}
      <section className="section section--cream">
        <div className="container">
          <div className="glass-card" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", padding: "60px" }}>
            <h2 style={{ marginBottom: "20px" }}>{t("confidentiality_title")}</h2>
            <p style={{ fontSize: "1.2rem", color: "var(--color-text-primary)" }}>
              {t("trust_quote")}
            </p>
            <p><strong>— {t("jyotirvid_name") || "Jyotirvid Kuldeep Paliwal"}</strong></p>
            <button className="button-premium button-primary" style={{ marginTop: "30px" }} onClick={() => navigate("/book")}>
              {t("book_now")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}


