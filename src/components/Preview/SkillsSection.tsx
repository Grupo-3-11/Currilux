import React from "react";
import { Star } from "lucide-react";
import type { Skill } from "../../types/cv.types";
import Section from "./Section";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <Section title="Habilidades">
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {skills.map((skill) => (
          <div key={skill.id}>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`mr-1 ${i < skill.level ? "text-blue-500" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
