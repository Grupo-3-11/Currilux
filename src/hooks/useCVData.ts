import { useState } from "react";
import type { CVData, Experience } from "../types/cv.types";

export default function useCVData() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: "Seu Nome Completo",
      email: "seu.email@exemplo.com",
      phone: "(11) 98765-4321",
      linkedin: "linkedin.com/in/seu-perfil",
      location: "São Paulo, Brasil",
      summary:
        "Profissional dedicado com experiência em desenvolvimento de software e metodologias ágeis."
    },
    skills: [
      { id: crypto.randomUUID(), name: "React", level: 5 },
      { id: crypto.randomUUID(), name: "TypeScript", level: 4 },
      { id: crypto.randomUUID(), name: "Node.js", level: 4 }
    ],
    experience: []
  });

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  const addSkill = () => {
    setCvData((prev) => ({
      ...prev,
      skills: [...prev.skills, { id: crypto.randomUUID(), name: "", level: 3 }]
    }));
  };

  const updateSkill = (id: string, name: string, level: number) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.id === id ? { ...s, name, level } : s
      )
    }));
  };

  const removeSkill = (id: string) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id)
    }));
  };

  const moveSkill = (index: number, direction: "up" | "down") => {
    const newSkills = [...cvData.skills];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < newSkills.length) {
      [newSkills[index], newSkills[targetIndex]] = [
        newSkills[targetIndex],
        newSkills[index]
      ];
      setCvData((prev) => ({ ...prev, skills: newSkills }));
    }
  };

  const addExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          description: ""
        }
      ]
    }));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: string
  ) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      )
    }));
  };

  const removeExperience = (id: string) => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id)
    }));
  };

  return {
    cvData,
    handlePersonalInfoChange,
    addSkill,
    updateSkill,
    removeSkill,
    moveSkill,
    addExperience,
    updateExperience,
    removeExperience
  };
}
