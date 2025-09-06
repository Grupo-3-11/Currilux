import React from "react";
import type { Experience } from "../../types/cv.types";
import Section from "./Section";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <Section title="Experiência Profissional">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-sm font-medium text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="text-md italic text-gray-600">{exp.company}</p>
            <p className="mt-1 text-sm text-gray-700 whitespace-pre-wrap">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
