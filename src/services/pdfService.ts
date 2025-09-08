import jsPDF from "jspdf";
import "jspdf-autotable";
import type { CVData } from "../types/cv.types";

export function exportCVToPDF(cvData: CVData) {
  const doc = new jsPDF();

  // Cabeçalho
  doc.setFontSize(18);
  doc.text(cvData.personalInfo.name, 14, 20);

  doc.setFontSize(11);
  doc.text(cvData.personalInfo.email, 14, 30);
  doc.text(cvData.personalInfo.phone, 14, 36);
  doc.text(cvData.personalInfo.linkedin, 14, 42);
  doc.text(cvData.personalInfo.location, 14, 48);

  // Resumo
  doc.setFontSize(14);
  doc.text("Resumo Profissional", 14, 60);
  doc.setFontSize(11);
  doc.text(doc.splitTextToSize(cvData.personalInfo.summary, 180), 14, 68);

  // Habilidades
  doc.setFontSize(14);
  doc.text("Habilidades", 14, 90);
  doc.setFontSize(11);
  cvData.skills.forEach((skill, i) => {
    doc.text(`- ${skill.name} (${skill.level}/5)`, 14, 98 + i * 6);
  });

  // Experiências
  let y = 110 + cvData.skills.length * 6;
  doc.setFontSize(14);
  doc.text("Experiência Profissional", 14, y);

  y += 8;
  doc.setFontSize(11);
  cvData.experience.forEach((exp) => {
    doc.text(`${exp.title} - ${exp.company}`, 14, y);
    y += 6;
    doc.text(`${exp.startDate} até ${exp.endDate}`, 14, y);
    y += 6;
    doc.text(doc.splitTextToSize(exp.description, 180), 14, y);
    y += 12;
  });

  doc.save("curriculo.pdf");
}
