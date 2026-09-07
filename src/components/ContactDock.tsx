"use client";

import { Icon } from "@once-ui-system/core";
import { useEffect, useState } from "react";

import { person, social } from "@/resources";
import styles from "./ContactDock.module.scss";

type Language = "ar" | "en";

const copy = {
  ar: {
    dock: "تواصل سريع",
    whatsapp: "واتساب",
    chooseMessage: "اختر رسالتك",
    services: "الخدمات والمنتجات",
    research: "أبحاث السوق والاستراتيجية",
    content: "المحتوى ووسائل التواصل",
    email: "إرسال بريد",
    linkedin: "لينكدإن",
  },
  en: {
    dock: "Quick contact",
    whatsapp: "WhatsApp",
    chooseMessage: "Choose a message",
    services: "Services & products",
    research: "Market research & strategy",
    content: "Content & social media",
    email: "Send email",
    linkedin: "LinkedIn",
  },
} as const;

const messages = [
  "I want more info about your services and products",
  "I'd like a consultation about marketing research and market strategy.",
  "I'd like to discuss content creation and social media management.",
];

export const ContactDock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("ar");
  const linkedin = social.find((item) => item.name === "LinkedIn")?.link;
  const labels = copy[language];

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(document.documentElement.lang.startsWith("ar") ? "ar" : "en");
    };

    updateLanguage();
    const observer = new MutationObserver(updateLanguage);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

    return () => observer.disconnect();
  }, []);

  if (!person.whatsapp && !person.email && !linkedin) return null;

  const whatsappLink = (message: string) =>
    `https://wa.me/${person.whatsapp?.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <aside className={styles.dock} aria-label={labels.dock}>
      {isOpen && person.whatsapp && (
        <div className={styles.messages} role="menu" aria-label={labels.chooseMessage}>
          <span className={styles.menuTitle}>{labels.chooseMessage}</span>
          {messages.map((message, index) => (
            <a
              className={styles.message}
              href={whatsappLink(message)}
              key={message}
              onClick={() => setIsOpen(false)}
              rel="noreferrer"
              role="menuitem"
              target="_blank"
            >
              <Icon name="whatsapp" />
              <span>{[labels.services, labels.research, labels.content][index]}</span>
            </a>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        {person.whatsapp && (
          <button
            aria-expanded={isOpen}
            aria-label={labels.chooseMessage}
            className={`${styles.action} ${styles.whatsapp}`}
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            <Icon name="whatsapp" />
            <span>{labels.whatsapp}</span>
          </button>
        )}
        {linkedin && (
          <a
            aria-label={labels.linkedin}
            className={styles.action}
            href={linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="linkedin" />
            <span>{labels.linkedin}</span>
          </a>
        )}
        {person.email && (
          <a
            aria-label={labels.email}
            className={styles.action}
            href={`mailto:${person.email}?subject=${encodeURIComponent("Portfolio enquiry")}`}
          >
            <Icon name="email" />
            <span>{labels.email}</span>
          </a>
        )}
      </div>
    </aside>
  );
};
