import React, { useState } from "react";
import useCVData from "./hooks/useCVData";
import type { CVData } from "./types/cv.types";

// Form
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import SkillsForm from "./components/Form/SkillsForm";
import ExperienceForm from "./components/Form/ExperienceForm";

// Preview
import CVPreview from "./components/Preview/CVPreview";

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
          <PersonalInfoForm
            data={cvData.personalInfo}
            onChange={handlers.handlePersonalInfoChange}
          />
        );
      case "skills":
        return (
          <SkillsForm
            skills={cvData.skills}
            onAdd={handlers.addSkill}
            onUpdate={handlers.updateSkill}
            onRemove={handlers.removeSkill}
            onMove={handlers.moveSkill}
          />
        );
      case "experience":
        return (
          <ExperienceForm
            experiences={cvData.experience}
            onAdd={handlers.addExperience}
            onUpdate={handlers.updateExperience}
            onRemove={handlers.removeExperience}
          />
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
      className={`flex-1 rounded-t-lg px-4 py-3 text-sm font-medium transition ${
        activeSection === section
          ? "bg-white text-blue-600 shadow-md"
          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex h-full flex-col bg-gray-100">
      <nav className="flex bg-gray-200 p-1 shadow-inner">
        <NavButton section="personal">Informações Pessoais</NavButton>
        <NavButton section="skills">Habilidades</NavButton>
        <NavButton section="experience">Experiências</NavButton>
      </nav>
      <div className="flex-grow overflow-y-auto p-6">{renderSection()}</div>
    </div>
  );
}

function PreviewSection({ cvData }: { cvData: CVData }) {
  return (
    <div className="flex h-full items-center justify-center bg-gray-300 p-8">
      <div className="aspect-[210/297] h-full max-h-full overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="h-full w-full overflow-y-auto">
          <CVPreview data={cvData} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const cvHandlers = useCVData();

  return (
    <main className="grid h-screen w-full grid-cols-1 md:grid-cols-2">
      <FormSection {...cvHandlers} />
      <PreviewSection cvData={cvHandlers.cvData} />
    </main>
  );
}
