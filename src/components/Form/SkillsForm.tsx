import React from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import type { Skill } from "../../types/cv.types";
import SkillLevel from "./SkillLevel";

export default function SkillsForm({
  skills,
  onUpdate,
  onAdd,
  onRemove,
  onMove,
}: {
  skills: Skill[];
  onUpdate: (id: string, name: string, level: number) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
  onMove: (index: number, dir: "up" | "down") => void;
}) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.id} className="flex items-center space-x-2 rounded-md border p-3">
          <div className="flex-grow space-y-2">
            <input
              type="text"
              placeholder="Habilidade (ex: React)"
              value={skill.name}
              onChange={(e) => onUpdate(skill.id, e.target.value, skill.level)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <SkillLevel level={skill.level} onChange={(level) => onUpdate(skill.id, skill.name, level)} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <button onClick={() => onMove(index, "up")} className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30" disabled={index === 0}>
              <ChevronUp size={20} />
            </button>
            <button onClick={() => onRemove(skill.id)} className="p-1 text-gray-500 hover:text-red-600">
              <Trash2 size={20} />
            </button>
            <button
              onClick={() => onMove(index, "down")}
              className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30"
              disabled={index === skills.length - 1}
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={onAdd}
        className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-3 text-gray-500 transition hover:border-blue-500 hover:text-blue-500"
      >
        <Plus className="mr-2 h-5 w-5" /> Adicionar Habilidade
      </button>
    </div>
  );
}
