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
        <div key={skill.id} className="card flex items-center space-x-4">
          {/* Campo nome da habilidade */}
          <div className="flex-grow space-y-2">
            <input
              type="text"
              placeholder="Habilidade (ex: React)"
              value={skill.name}
              onChange={(e) => onUpdate(skill.id, e.target.value, skill.level)}
              className="input-base"
            />
            <SkillLevel
              level={skill.level}
              onChange={(level) => onUpdate(skill.id, skill.name, level)}
            />
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col items-center space-y-1">
            <button
              onClick={() => onMove(index, "up")}
              className="btn-outline p-1 disabled:opacity-30"
              disabled={index === 0}
            >
              <ChevronUp size={20} />
            </button>
            <button
              onClick={() => onRemove(skill.id)}
              className="btn-outline p-1 text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
            <button
              onClick={() => onMove(index, "down")}
              className="btn-outline p-1 disabled:opacity-30"
              disabled={index === skills.length - 1}
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      ))}

      {/* Botão de adicionar habilidade */}
      <button onClick={onAdd} className="btn-primary w-full flex items-center justify-center gap-2">
        <Plus size={20} /> Adicionar Habilidade
      </button>
    </div>
  );
}
