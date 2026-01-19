import React from "react";
import { useTranslation } from "react-i18next";

export default function DatePicker({ date, onChange }) {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: "var(--spacing-lg)" }}>
      <label htmlFor="date-input">{t("select_date")}</label>
      <input
        id="date-input"
        type="date"
        value={date}
        onChange={(e) => onChange(e.target.value)}
        required
        style={{
          borderColor: date ? "var(--color-accent-gold)" : "var(--color-border)",
          borderWidth: "2px"
        }}
      />
    </div>
  );
}
