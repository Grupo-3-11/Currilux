import React from "react";
import type { CVData } from "../../types/cv.types";
import PersonalHeader from "./PersonalHeader";
import Section from "./Section";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";

export default function CVPreview({ data }: { data: CVData }) {
  return (
    <div className="h-full w-full bg-white p-8 font-serif text-sm shadow-lg">
      <PersonalHeader info={data.personalInfo} />
      <Section title="Resumo Profissional">
        <p className="text-gray-700">{data.personalInfo.summary}</p>
      </Section>
      <SkillsSection skills={data.skills} />
      <ExperienceSection experiences={data.experience} />
    </div>
  );
}
