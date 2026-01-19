import React from "react";
import { useTranslation } from "react-i18next";

export default function BookingForm({ onSubmit }) {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    onSubmit({
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      service: form.service.value,
      mode: form.mode.value
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "var(--spacing-lg)" }}>
      <div style={{ marginBottom: "var(--spacing-lg)" }}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t("name")}
          required
        />
      </div>

      <div style={{ marginBottom: "var(--spacing-lg)" }}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t("email")}
          required
        />
      </div>

      <div style={{ marginBottom: "var(--spacing-lg)" }}>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t("phone")}
          required
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-lg)", marginBottom: "var(--spacing-lg)" }}>
        <div>
          <label htmlFor="service">Consultation Type</label>
          <select id="service" name="service" required>
            <option value="">Select a service</option>
            <option value="birth_chart">{t("service_career") || "Birth Chart Analysis"}</option>
            <option value="career">{t("service_career") || "Career Guidance"}</option>
            <option value="marriage">{t("service_marriage") || "Relationship Guidance"}</option>
            <option value="health">Health & Well-Being</option>
            <option value="financial">Financial Guidance</option>
            <option value="muhurta">Muhurta Selection</option>
          </select>
        </div>

        <div>
          <label htmlFor="mode">Consultation Mode</label>
          <select id="mode" name="mode" required>
            <option value="video">{t("video") || "Video Call"}</option>
            <option value="call">{t("call") || "Phone Call"}</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="button-premium button-primary"
        style={{ width: "100%", padding: "var(--spacing-lg)", display: "flex", justifyContent: "center" }}
      >
        {t("pay") || "Proceed to Payment"}
      </button>
    </form>
  );
}
