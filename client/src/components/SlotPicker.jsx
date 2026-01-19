import React from "react";
import { useTranslation } from "react-i18next";

export default function SlotPicker({ slots, selectedSlot, onSelect }) {
  const { t } = useTranslation();

  if (!slots.length) {
    return <p style={{ textAlign: "center", color: "var(--color-text-secondary)", padding: "var(--spacing-lg)" }}>{t("no_slots")}</p>;
  }

  return (
    <div style={{ marginTop: "var(--spacing-lg)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "var(--spacing-md)"
      }}>
        {slots.map((slot) => (
          <button
            key={slot._id}
            onClick={() => onSelect(slot)}
            style={{
              padding: "var(--spacing-md)",
              border: selectedSlot && selectedSlot._id === slot._id ? "2px solid var(--color-accent-gold)" : "1px solid var(--color-border)",
              backgroundColor: selectedSlot && selectedSlot._id === slot._id ? "rgba(200, 169, 81, 0.1)" : "white",
              color: selectedSlot && selectedSlot._id === slot._id ? "var(--color-accent-gold)" : "var(--color-text-primary)",
              fontWeight: selectedSlot && selectedSlot._id === slot._id ? "600" : "400",
              cursor: "pointer",
              transition: "all var(--transition-base) var(--ease-smooth)",
              borderRadius: "4px"
            }}
            onMouseEnter={(e) => {
              if (!(selectedSlot && selectedSlot._id === slot._id)) {
                e.target.style.borderColor = "var(--color-accent-gold)";
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!(selectedSlot && selectedSlot._id === slot._id)) {
                e.target.style.borderColor = "var(--color-border)";
                e.target.style.transform = "translateY(0)";
              }
            }}
          >
            {slot.time || slot.timeSlot}
          </button>
        ))}
      </div>
    </div>
  );
}
