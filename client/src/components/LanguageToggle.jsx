import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="language-toggle">
      <button 
        onClick={() => changeLang("hi")}
        className={currentLang === "hi" ? "active" : ""}
      >
        हिंदी
      </button>
      <button 
        onClick={() => changeLang("en")}
        className={currentLang === "en" ? "active" : ""}
      >
        English
      </button>
    </div>
  );
}
