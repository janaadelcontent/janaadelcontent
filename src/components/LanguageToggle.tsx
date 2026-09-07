"use client";

import { ToggleButton } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import { Language, translateText } from "@/resources/language";

const storageKey = "portfolio-language";

function applyLanguage(language: Language) {
  const root = document.documentElement;
  root.lang = language;
  root.dir = language === "ar" ? "rtl" : "ltr";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node = walker.nextNode();

  while (node) {
    nodes.push(node as Text);
    node = walker.nextNode();
  }

  nodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (parent && !["SCRIPT", "STYLE"].includes(parent.tagName)) {
      const translated = translateText(textNode.textContent ?? "", language);
      if (translated !== textNode.textContent) {
        textNode.textContent = translated;
      }
    }
  });
}

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey) as Language | null;
    const initialLanguage = savedLanguage === "en" ? "en" : "ar";
    setLanguage(initialLanguage);
    applyLanguage(initialLanguage);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => applyLanguage(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage = language === "ar" ? "en" : "ar";
    window.localStorage.setItem(storageKey, nextLanguage);
    applyLanguage(nextLanguage);
    setLanguage(nextLanguage);
  };

  return (
    <ToggleButton
      label={language === "ar" ? "EN" : "العربية"}
      onClick={toggleLanguage}
      aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    />
  );
}
