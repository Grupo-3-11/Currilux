import React from "react";
import type { Experience } from "../../types/cv.types";
import AIEnhanceButton from "./AIEnhanceButton";
import { useAIEnhancement } from "../../hooks/useAIEnhancement";

interface ExperienceFormProps {
  experiences: Experience[];
  onUpdate: (id: string, field: keyof Experience, value: string) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export default function ExperienceForm({
  experiences,
  onUpdate,
  onAdd,
  onRemove,
}: ExperienceFormProps) {
  const { enhance, loading } = useAIEnhancement();

  const handleEnhanceDescription = async (id: string, currentText: string) => {
    const newText = await enhance(currentText, "experience");
    onUpdate(id, "description", newText);
  };

  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div key={exp.id} className="space-y-3 rounded-lg border p-4">
          <input
            type="text"
            placeholder="Cargo"
            value={exp.title}
            onChange={(e) => onUpdate(exp.id, "title", e.target.value)}
            className="input-base"
          />
          <input
            type="text"
            placeholder="Empresa"
            value={exp.company}
            onChange={(e) => onUpdate(exp.id, "company", e.target.value)}
            className="input-base"
          />

          <div className="flex space-x-2">
            <input
              type="month"
              value={exp.startDate}
              onChange={(e) => onUpdate(exp.id, "startDate", e.target.value)}
              className="input-base"
            />
            <input
              type="month"
              value={exp.endDate}
              onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)}
              className="input-base"
            />
          </div>

          <div className="flex items-start gap-2">
            <textarea
              placeholder="Descrição do cargo e responsabilidades..."
              value={exp.description}
              onChange={(e) => onUpdate(exp.id, "description", e.target.value)}
              rows={4}
              className="input-base flex-1"
            />
            {/* Botão IA funcional */}
            <AIEnhanceButton
              onClick={() => handleEnhanceDescription(exp.id, exp.description)}
              loading={loading}
            />
          </div>

          <button
            type="button"
            onClick={() => onRemove(exp.id)}
            className="btn-outline text-red-500 hover:text-red-700"
          >
            Remover Experiência
          </button>
        </div>
      ))}

      <button type="button" onClick={onAdd} className="btn-primary w-full">
        + Adicionar Experiência
      </button>
    </div>
  );
}
