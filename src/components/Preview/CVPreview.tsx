// src/components/Preview/CVPreview.tsx

import React from "react";
import PersonalHeader from "./PersonalHeader";
import Section from "./Section";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ExportButton from "./ExportButton";
import type { CVData } from "../../types/cv.types";

export default function CVPreview({ data }: { data: CVData }) {
  return (
    // Adicione a classe 'pb-10' para dar um padding na parte inferior
    <div className="h-full w-full bg-white p-10 font-sans text-sm leading-relaxed text-gray-800 pb-10">
      <PersonalHeader info={data.personalInfo} />
      <Section title="Resumo Profissional">
        <p className="text-gray-700">{data.personalInfo.summary}</p>
      </Section>
      <SkillsSection skills={data.skills} />
      <ExperienceSection experiences={data.experience} />
      <ExportButton cvData={data} />
    </div>
    
  );
}