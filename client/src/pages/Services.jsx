import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Services() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const consultations = [
    { title: t("birth_chart_analysis"), desc: "Comprehensive interpretation of natal charts to understand life paths and personality structures." },
    { title: t("career_path"), desc: "Strategic guidance on professional transitions, success in business, and career alignment." },
    { title: t("finance_wealth"), desc: "Technical analysis of prosperity indicators and optimal periods for investments." },
    { title: t("health_wellbeing"), desc: "Astrological perspective on constitutional vitality and preventive awareness." },
    { title: t("marriage_relationship"), desc: "Match-making, compatibility analysis, and guidance for personal partnerships." },
    { title: t("children_newborn"), desc: "Insight into the path and potential of the next generation from an early age." },
    { title: t("yearly_predictions"), desc: "Detailed Varshphal analysis focused on the themes and opportunities of the coming year." },
    { title: t("muhurtha_timing"), desc: "Selection of auspicious timings for major life events and business initiatives." },
    { title: t("gem_color_therapy"), desc: "Scientific recommendation of remedies based on technical planetary strength (Sadabal)." }
  ];

  const astronomyPrograms = [
    { title: t("aakash_darshan"), target: "For Sky Lovers", desc: t("aakash_darshan_desc") },
    { title: t("nabh_darshan"), target: "For Tourists", desc: t("nabh_darshan_desc") },
    { title: t("aakash_awalokan"), target: "For Students", desc: t("aakash_awalokan_desc") }
  ];

  return (
    <main>
      {/* Hero Header */}
      <section className="section section--dark" style={{ paddingTop: "120px" }}>
        <div className="container text-center">
          <span className="hero-label">{t("technical_consultation")}</span>
          <h1 style={{ color: "white" }}>{t("scholarly_guidance") || "Scholarly Guidance"}</h1>
          <div className="ornament" style={{ margin: "20px auto" }}></div>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "rgba(255,255,255,0.8)" }}>
            {t("services_hero_desc") || "Our services are grounded in technical analysis and long-standing experience. We treat astrology as a technical subject, delivering clarity through mathematical precision."}
          </p>
        </div>
      </section>

      {/* Consultations Grid */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>{t("areas_of_expertise")}</h2>
          <div className="ornament" style={{ margin: "20px auto 50px" }}></div>

          <div className="grid grid--3">
            {consultations.map((item, idx) => (
              <div key={idx} className="glass-card">
                <h3 style={{ fontSize: "1.2rem", color: "var(--color-accent-gold)" }}>{item.title}</h3>
                <p style={{ fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Astronomy Programs */}
      <section className="section section--cream">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>{t("sky_watcher_tradition")}</h2>
          <div className="ornament" style={{ margin: "20px auto 50px" }}></div>

          <div className="grid grid--3">
            {astronomyPrograms.map((program, idx) => (
              <div key={idx} className="glass-card" style={{ background: "white" }}>
                <div className="badge badge-gold mb-sm">{program.target}</div>
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process / Requirement */}
      <section className="section section--dark">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ color: "white" }}>{t("data_accuracy") || "Data Accuracy"}</h2>
              <div className="ornament"></div>
              <p>
                {t("data_accuracy_desc") || "Prediction is strictly dependent on the data you provide. Wrong or fake data leads to wrong predictions."}
              </p>
              <div className="glass-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", marginTop: "30px" }}>
                <h3 style={{ color: "var(--color-accent-gold)", fontSize: "1.1rem" }}>{t("confidentiality_priority") || "Confidentiality Priority"}</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>
                  {t("confidentiality_desc")}
                </p>
              </div>
            </div>
            <div className="img-reveal">
              <img
                src="/images/confidential.png"
                alt="Professional Scholarly Consultation"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container text-center">
          <h2>{t("ready_for_insight") || "Ready for Technical Insight?"}</h2>
          <p style={{ maxWidth: "600px", margin: "20px auto 40px" }}>
            {t("final_cta_desc") || "Experience the engineering and management of Indian Vedic astrology with Jyotirvid Kuldeep Paliwal."}
          </p>
          <button className="button-premium button-primary" onClick={() => navigate("/book")}>
            {t("book_now")}
          </button>
        </div>
      </section>
    </main>
  );
}


