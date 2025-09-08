import React, { useState } from "react";
import useCVData from "./hooks/useCVData";
import type { CVData } from "./types/cv.types";

// Componentes do Formulário
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import SkillsForm from "./components/Form/SkillsForm";
import ExperienceForm from "./components/Form/ExperienceForm";

// Componentes da Pré-visualização
import CVPreview from "./components/Preview/CVPreview";

// --- Componente de Seção do Formulário ---
function FormSection({
  cvData,
  ...handlers
}: {
  cvData: CVData;
  [key: string]: any;
}) {
  const [activeSection, setActiveSection] = useState("personal");

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return (
          <div className="card fade-in">
            <PersonalInfoForm
              data={cvData.personalInfo}
              onChange={handlers.handlePersonalInfoChange}
            />
          </div>
        );
      case "skills":
        return (
          <div className="card fade-in">
            <SkillsForm
              skills={cvData.skills}
              onAdd={handlers.addSkill}
              onUpdate={handlers.updateSkill}
              onRemove={handlers.removeSkill}
              onMove={handlers.moveSkill}
            />
          </div>
        );
      case "experience":
        return (
          <div className="card fade-in">
            <ExperienceForm
              experiences={cvData.experience}
              onAdd={handlers.addExperience}
              onUpdate={handlers.updateExperience}
              onRemove={handlers.removeExperience}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const NavButton = ({
    section,
    children,
  }: {
    section: string;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex-1 px-4 py-3 text-sm font-medium transition rounded-t-md
        ${
          activeSection === section
            ? "bg-white text-[var(--color-primary)] shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex h-full flex-col bg-gray-50 border-r">
      <nav className="flex bg-gray-100 border-b shadow-inner">
        <NavButton section="personal">Informações Pessoais</NavButton>
        <NavButton section="skills">Habilidades</NavButton>
        <NavButton section="experience">Experiências</NavButton>
      </nav>
      <div className="flex-grow overflow-y-auto p-6">{renderSection()}</div>
    </div>
  );
}

// --- Componente de Pré-visualização ---
function PreviewSection({ cvData }: { cvData: CVData }) {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <div className="aspect-[210/297] h-full max-h-full overflow-hidden rounded-lg bg-white shadow-xl border border-gray-200">
        <div className="h-full w-full overflow-y-auto">
          <CVPreview data={cvData} />
        </div>
      </div>
    </div>
  );
}

// --- Componente Raiz da Aplicação (App) ---
export default function App() {
  const cvHandlers = useCVData();

  return (
    <main className="flex h-screen w-full bg-gray-100">
      
      {/* Lado esquerdo: Formulário */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-300">
        <FormSection {...cvHandlers} />
      </div>

      {/* Lado direito: Pré-visualização */}
      <div className="w-1/2 overflow-y-auto bg-gray-200">
        <PreviewSection cvData={cvHandlers.cvData} />
      </div>
    </main>

  );
}