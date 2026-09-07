"use client";

import { ToggleButton } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import { Language, translateText } from "@/resources/language";

const storageKey = "portfolio-language-v2";

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

  document.querySelectorAll<HTMLElement>("[alt], [aria-label], [title]").forEach((element) => {
    (["alt", "aria-label", "title"] as const).forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;

      const translated = translateText(value, language);
      if (translated !== value) element.setAttribute(attribute, translated);
    });
  });

  const translatedTitle = translateText(document.title, language);
  if (translatedTitle !== document.title) document.title = translatedTitle;
}

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey) as Language | null;
    const initialLanguage = savedLanguage === "ar" ? "ar" : "en";
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
      label={language === "ar" ? "EN" : "AR"}
      onClick={toggleLanguage}
      aria-label={language === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic"}
    />
  );
}
