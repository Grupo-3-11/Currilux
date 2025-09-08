import React from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import IconInput from "../Form/IconInput";
import type { PersonalInfo } from "../../types/cv.types";
import AIEnhanceButton from "./AIEnhanceButton";
import { useAIEnhancement } from "../../hooks/useAIEnhancement";

export default function PersonalInfoForm({
  data,
  onChange,
}: {
  data: PersonalInfo;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  const { enhance, loading } = useAIEnhancement();

  const handleEnhanceSummary = async () => {
    const newText = await enhance(data.summary, "summary");
    onChange({ target: { name: "summary", value: newText } } as any);
  };

  return (
    <div className="space-y-6">
      {/* Campos de entrada com o estilo 'input-base' */}
      <IconInput
        icon={Mail}
        type="text"
        name="name"
        value={data.name}
        onChange={onChange}
        placeholder="Nome Completo"
        className="input-base"
      />
      <IconInput
        icon={Mail}
        type="email"
        name="email"
        value={data.email}
        onChange={onChange}
        placeholder="E-mail"
        className="input-base"
      />
      <IconInput
        icon={Phone}
        type="tel"
        name="phone"
        value={data.phone}
        onChange={onChange}
        placeholder="Telefone"
        className="input-base"
      />
      <IconInput
        icon={Linkedin}
        type="text"
        name="linkedin"
        value={data.linkedin}
        onChange={onChange}
        placeholder="Perfil do LinkedIn"
        className="input-base"
      />
      <IconInput
        icon={MapPin}
        type="text"
        name="location"
        value={data.location}
        onChange={onChange}
        placeholder="Localização (ex: São Paulo, Brasil)"
        className="input-base"
      />

      {/* Resumo com rótulo e o botão de IA */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Resumo Profissional
        </label>
        <textarea
          name="summary"
          value={data.summary}
          onChange={onChange}
          placeholder="Escreva um breve resumo sobre você..."
          rows={5}
          className="input-base"
        />
        <AIEnhanceButton onClick={handleEnhanceSummary} loading={loading} />
      </div>
    </div>
  );
}