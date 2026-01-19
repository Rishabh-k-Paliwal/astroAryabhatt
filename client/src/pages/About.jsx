import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Intro Section */}
      <section className="section section--dark" style={{ paddingTop: "120px" }}>
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center" }}>
            <div>
              <span className="hero-label">{t("scholars_profile") || "The Scholar's Profile"}</span>
              <h1 style={{ color: "white" }}>{t("jyotirvid_name") || "Jyotirvid Kuldeep Paliwal"}</h1>
              <div className="ornament"></div>
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)" }}>
                {t("scholarly_intro") || "A dynamic Astrologer and Astronomer bridging ancient vidhya with modern engineering precision."}
              </p>
            </div>
            <div className="img-reveal">
              <img src="/images/about.png" alt="Kuldeep Paliwal" style={{ borderRadius: "12px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div>
              <h2 className="serif-font">{t("legacy_title") || "A Legacy of Knowledge"}</h2>
              <div className="ornament"></div>
              <p>
                {t("legacy_desc_1") || "With more than 20 years of experience in teaching and practicing astrology, Jyotirvid Kuldeep Paliwal has mentored thousands of students."}
              </p>
              <p>
                {t("legacy_desc_2") || "His journey began with traditional knowledge passed down from his grandparents, later refined through formal qualifications."}
              </p>
            </div>
            <div className="glass-card">
              <h3 className="serif-font" style={{ fontSize: "1.4rem" }}>{t("academic_technical_excellence") || "Academic & Technical Excellence"}</h3>
              <p>
                {t("academic_desc") || "Unlike traditional practitioners, Kuldeep Paliwal brings a rigorous technical mindset to the field:"}
              </p>
              <ul style={{ color: "var(--color-text-muted)", paddingLeft: "20px", marginBottom: "20px" }}>
                <li><strong>{t("btech") || "B.Tech (Honors)"}</strong> {t("btech_detail") || "in Computer Science & Engineering"}</li>
                <li><strong>{t("diploma") || "Diploma"}</strong> {t("diploma_detail") || "in Electronics Engineering"}</li>
                <li><strong>{t("mba") || "MBA"}</strong> {t("mba_detail") || "in Operations Management"}</li>
              </ul>
              <p>
                {t("academic_conclusion") || "This background allows him to treat Astrology as a technical subject."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Grid */}
      <section className="section section--cream">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>{t("fields_of_expertise")}</h2>
          <div className="ornament" style={{ margin: "20px auto 50px" }}></div>

          <div className="grid grid--3">
            <div className="glass-card">
              <h3>{t("mathematical_jyotish") || "Mathematical Jyotish"}</h3>
              <p>{t("mathematical_jyotish_desc") || "Specializing in Sadabal, Astakvarga, and the Dasa System with high-precision mathematical calculations."}</p>
            </div>
            <div className="glass-card">
              <h3>{t("vedic_astronomy") || "Vedic Astronomy"}</h3>
              <p>{t("vedic_astronomy_desc") || "Deep ancient knowledge of the sky (Star Gazing) related to Indian Vedic traditions."}</p>
            </div>
            <div className="glass-card">
              <h3>{t("scientific_remedies")}</h3>
              <p>{t("scientific_remedies_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Astronomy Programs */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: "center" }}>
            <div className="img-reveal">
              <img
                src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80"
                alt="Starry Sky"
                style={{ borderRadius: "12px" }}
              />
            </div>
            <div>
              <h2 className="serif-font">{t("aakash_darshan")}</h2>
              <p>
                {t("aakash_darshan_bio_desc") || "Deeply committed to reviving the ancient knowledge of Star Gazing."}
              </p>
              <ul style={{ color: "var(--color-text-muted)", paddingLeft: "20px" }}>
                <li><strong>{t("nabh_darshan")}:</strong> {t("nabh_darshan_target") || "Curated for Tourists."}</li>
                <li><strong>{t("aakash_awalokan")}:</strong> {t("aakash_awalokan_target") || "Educational sessions for Students."}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Info */}
      <section className="section section--dark">
        <div className="container text-center">
          <h2 style={{ color: "white" }}>{t("online_consultation") || "Online Consultation"}</h2>
          <div className="ornament" style={{ margin: "20px auto 40px" }}></div>
          <p style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
            {t("online_consultation_desc") || "To provide the benefit of accurate knowledge to a wider audience, Jyotirvid Kuldeep Paliwal is now available for online consultations."}
          </p>
          <div className="glass-card" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h3 style={{ color: "var(--color-accent-gold)", marginBottom: "20px" }}>{t("consultation_process") || "Consultation Process"}</h3>
            <p>{t("direct_live_sessions") || "Direct live sessions conducted via Phone or Video Call (VC)."}</p>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
              {t("confidentiality_desc")}
            </p>
          </div>
          <button className="button-premium button-primary" style={{ marginTop: "50px" }} onClick={() => navigate("/book")}>
            {t("schedule_live_session") || "Schedule Your Live Session"}
          </button>
        </div>
      </section>
    </main>
  );
}


