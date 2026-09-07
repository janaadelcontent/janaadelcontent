import { about, gallery, person } from "@/resources";
import { isValidElement, type ReactNode } from "react";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const pageWidth = 595;
const pageHeight = 842;
const margin = 48;
const maxCharacters = 88;

type PdfLine = {
  text: string;
  size: number;
  bold?: boolean;
  gapAfter?: number;
};

function nodeToText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (isValidElement(node)) return nodeToText((node.props as { children?: ReactNode }).children);
  return "";
}

function toPdfSafeText(value: string) {
  return value
    .replace(/[–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrap(text: string, lineLength = maxCharacters) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const lines: string[] = [];
  let line = "";

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > lineLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function createPortfolioLines(): PdfLine[] {
  const lines: PdfLine[] = [
    { text: person.name, size: 26, bold: true, gapAfter: 4 },
    { text: person.role, size: 12, gapAfter: 18 },
    { text: "PORTFOLIO SUMMARY", size: 10, bold: true, gapAfter: 8 },
    { text: `Cairo, Egypt | ${person.email} | +20 102 767 0707`, size: 9, gapAfter: 18 },
    { text: "ABOUT", size: 15, bold: true, gapAfter: 6 },
    ...wrap(nodeToText(about.intro.description)).map((text) => ({ text, size: 10 })),
    { text: "", size: 6, gapAfter: 8 },
    { text: "CORE EXPERTISE", size: 15, bold: true, gapAfter: 6 },
    ...about.technical.skills.flatMap((skill) => [
      { text: skill.title, size: 11, bold: true },
      ...wrap(nodeToText(skill.description)).map((text) => ({ text, size: 10 })),
      { text: "", size: 5, gapAfter: 4 },
    ]),
    { text: "EXPERIENCE", size: 15, bold: true, gapAfter: 6 },
    ...about.work.experiences.flatMap((experience) => [
      { text: `${experience.company} | ${experience.role}`, size: 11, bold: true },
      { text: experience.timeframe, size: 9 },
      ...experience.achievements.flatMap((achievement) =>
        wrap(`- ${nodeToText(achievement)}`).map((text) => ({ text, size: 9 })),
      ),
      { text: "", size: 5, gapAfter: 4 },
    ]),
    { text: "SELECTED CONTENT AND RESULTS", size: 15, bold: true, gapAfter: 6 },
    ...gallery.images.slice(0, 6).flatMap((image) => [
      { text: image.title, size: 11, bold: true },
      ...wrap(image.description).map((text) => ({ text, size: 9 })),
      { text: "", size: 5, gapAfter: 4 },
    ]),
    { text: "CONTACT", size: 15, bold: true, gapAfter: 6 },
    { text: `Email: ${person.email}`, size: 10 },
    { text: "WhatsApp: +20 102 767 0707", size: 10 },
    { text: "LinkedIn: linkedin.com/in/jana-affan-4a886a15b", size: 10 },
  ];

  return lines;
}

function paginate(lines: PdfLine[]) {
  const pages: Array<Array<PdfLine & { y: number }>> = [];
  let page: Array<PdfLine & { y: number }> = [];
  let y = pageHeight - margin;

  lines.forEach((line) => {
    const leading = line.size + 5;
    if (y - leading < margin) {
      pages.push(page);
      page = [];
      y = pageHeight - margin;
    }

    page.push({ ...line, y });
    y -= leading + (line.gapAfter ?? 0);
  });

  if (page.length) pages.push(page);
  return pages;
}

function pageStream(lines: Array<PdfLine & { y: number }>, pageNumber: number, pageCount: number) {
  const content = lines
    .map((line) => {
      const font = line.bold ? "F2" : "F1";
      return `BT /${font} ${line.size} Tf ${margin} ${line.y} Td (${toPdfSafeText(line.text)}) Tj ET`;
    })
    .join("\n");
  const footer = `BT /F1 8 Tf ${margin} 28 Td (Jana Adel Portfolio - ${pageNumber} of ${pageCount}) Tj ET`;
  return `${content}\n${footer}`;
}

function createPdf() {
  const pages = paginate(createPortfolioLines());
  const objects: string[] = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  ];
  const pageObjectNumbers: number[] = [];

  pages.forEach((page, index) => {
    const pageObjectNumber = objects.length + 1;
    const contentObjectNumber = pageObjectNumber + 1;
    pageObjectNumbers.push(pageObjectNumber);
    const stream = pageStream(page, index + 1, pages.length);

    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`,
      `<< /Length ${Buffer.byteLength(stream, "ascii")} >>\nstream\n${stream}\nendstream`,
    );
  });

  objects[1] = `<< /Type /Pages /Kids [${pageObjectNumbers.map((number) => `${number} 0 R`).join(" ")}] /Count ${pages.length} >>`;

  let pdf = "%PDF-1.4\n%PDF portfolio\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "ascii"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "ascii");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "ascii");
}

export async function GET() {
  return new Response(createPdf(), {
    headers: {
      "Content-Disposition": 'attachment; filename="jana-adel-portfolio.pdf"',
      "Content-Type": "application/pdf",
      "Cache-Control": "no-store",
    },
  });
}
