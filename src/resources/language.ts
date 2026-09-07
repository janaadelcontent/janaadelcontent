export type Language = "ar" | "en";

// Visitor-facing Arabic copy and its English equivalent. Content is authored in Arabic first.
export const translations: Record<string, string> = {
  "الرئيسية": "Home",
  "جنا عادل": "Jana Adel",
  "خبيرة وسائل التواصل الاجتماعي وصانعة محتوى ومدربة تسويق رقمي": "Social media expert, content creator, and digital marketing trainer",
  "عن جانا": "About",
  "دراسات الحالة": "Case studies",
  "صناعة المحتوى": "Content creation",
  "محتوى يحوّل الاهتمام إلى تأثير.": "Social media that turns attention into action.",
  "أعمال مختارة في المحتوى والاستراتيجية": "Selected content and strategy work",
  "نبذة": "Introduction",
  "لنعمل معاً": "Let's work together",
  "الخبرات العملية": "Work experience",
  "التعليم والشهادات": "Education & certifications",
  "مجالات الخبرة": "Core expertise",
  "إدارة وسائل التواصل الاجتماعي": "Social media management",
  "أبحاث التسويق ورؤى الجمهور": "Marketing research & insights",
  "استراتيجية السوق": "Market strategy",
  "دراسات الحالة والأعمال الاستراتيجية – جنا عادل": "Case studies & strategic work – Jana Adel",
  "معرض صناعة المحتوى – جنا عادل": "Content creation showcase – Jana Adel",
  "محتوى أصلي من صناعة جانا": "Original content creation",
  "دليل تخطيط الحمام": "Bathroom planning guide",
  "خطط لجدار التلفزيون قبل التشطيب": "Plan the TV wall before finishing",
  "اختر السماد بثقة": "Choose fertilizer with confidence",
  "لماذا تصفر الأوراق الجديدة؟": "Why new leaves turn yellow",
  "التعريف بمنتج كيوب كيه": "Cube-K product awareness",
  "رسالة نمو جديدة": "A new-growth brand message",
  "تجنب مشكلات السباكة مبكراً": "Prevent plumbing problems early",
  "توعية عملية للعناية بالمحاصيل": "Practical crop-care education",
  "سرد بصري للعلامة الزراعية": "Agricultural brand storytelling",
  "تسليط الضوء على فائدة المنتج": "Product benefit spotlight",
  "تصميم رسالة الحملة": "Campaign message visual",
  "مرجع الهوية البصرية": "Brand identity reference",
  "عرض دراسة الحالة": "Read case study",
  "دراسات حالة ذات صلة": "Related case studies",
  "الصفحة غير موجودة": "Page not found",
  "الصفحة التي تبحث عنها غير موجودة.": "The page you are looking for does not exist.",
  "احجز مكالمة": "Schedule a call",
  "كلمة المرور": "Password",
  "إرسال": "Submit",
  "تواصل عبر واتساب": "Contact on WhatsApp",
  "سيظهر زر واتساب هنا بعد إضافة الرقم في إعدادات الملف الشخصي.": "A WhatsApp button will appear here once the number is added to the profile settings.",
  "أحدث المقالات": "Latest articles",
  "قالب دراسة حالة لحملة على وسائل التواصل الاجتماعي، يشمل الموجز ونهج المحتوى وخطة القنوات والنتائج.": "A social media campaign case-study template covering the brief, content approach, channel plan, and results.",
  "قالب دراسة حالة بحثية يوضح كيف شكّلت رؤى السوق والجمهور والمنافسين توصية تسويقية.": "A research case-study template showing how market, audience, and competitor insight shaped a marketing recommendation.",
  "قالب عمل استراتيجي يوضح كيف تحولت الأبحاث إلى خطة للسوق والقنوات والمحتوى.": "A strategic-work template showing how research became a market, channel, and content plan.",
  "نبذة عن الحملة": "Campaign overview",
  "التحدي": "The challenge",
  "الاستراتيجية والتنفيذ": "Strategy & execution",
  "أمثلة على المحتوى": "Content examples",
  "النتائج": "Results",
  "الخلاصة الرئيسية": "Key takeaway",
  "نبذة عن البحث": "Research overview",
  "سؤال البحث": "Research question",
  "المنهجية": "Approach",
  "الرؤى الرئيسية": "Key insights",
  "التوصية": "Recommendation",
  "نبذة عن الاستراتيجية": "Strategy overview",
  "السياق": "Context",
  "التوجه الاستراتيجي": "Strategic direction",
  "المخرجات": "Deliverables",
  "خطة القياس": "Measurement plan",
};

const englishToArabic = Object.fromEntries(
  Object.entries(translations).map(([arabic, english]) => [english, arabic]),
);

export function translateText(text: string, language: Language) {
  const value = text.trim();
  if (!value) return text;

  const translated = language === "en" ? translations[value] : englishToArabic[value];
  return translated ? text.replace(value, translated) : text;
}
