import React from "react";
import { Plus, Trash2 } from "lucide-react";
import type { Experience } from "../../types/cv.types";

export default function ExperienceForm({
  experiences,
  onUpdate,
  onAdd,
  onRemove,
}: {
  experiences: Experience[];
  onUpdate: (id: string, field: keyof Experience, value: string) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div key={exp.id} className="space-y-3 rounded-lg border p-4">
          <input type="text" placeholder="Cargo" value={exp.title} onChange={(e) => onUpdate(exp.id, "title", e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800" />
          <input type="text" placeholder="Empresa" value={exp.company} onChange={(e) => onUpdate(exp.id, "company", e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800" />
          <div className="flex space-x-2">
            <input type="month" value={exp.startDate} onChange={(e) => onUpdate(exp.id, "startDate", e.target.value)} className="w-full rounded-md border px-3 py-2" />
            <input type="month" value={exp.endDate} onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)} className="w-full rounded-md border px-3 py-2" />
          </div>
          <textarea
            placeholder="Descrição do cargo e responsabilidades..."
            value={exp.description}
            onChange={(e) => onUpdate(exp.id, "description", e.target.value)}
            rows={4}
            className="w-full rounded-md border p-3 text-gray-800"
          />
          <button onClick={() => onRemove(exp.id)} className="flex items-center text-sm text-red-500 hover:text-red-700">
            <Trash2 className="mr-1 h-4 w-4" /> Remover Experiência
          </button>
        </div>
      ))}
      <button
        onClick={onAdd}
        className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-3 text-gray-500 hover:border-blue-500 hover:text-blue-500"
      >
        <Plus className="mr-2 h-5 w-5" /> Adicionar Experiência
      </button>
    </div>
  );
}
