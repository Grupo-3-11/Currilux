import React from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import IconInput from "./IconInput";
import type { PersonalInfo } from "../../types/cv.types";

export default function PersonalInfoForm({
  data,
  onChange,
}: {
  data: PersonalInfo;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) {
  return (
    <div className="space-y-4">
      <IconInput icon={Mail} type="text" name="name" value={data.name} onChange={onChange} placeholder="Nome Completo" />
      <IconInput icon={Mail} type="email" name="email" value={data.email} onChange={onChange} placeholder="E-mail" />
      <IconInput icon={Phone} type="tel" name="phone" value={data.phone} onChange={onChange} placeholder="Telefone" />
      <IconInput icon={Linkedin} type="text" name="linkedin" value={data.linkedin} onChange={onChange} placeholder="Perfil do LinkedIn" />
      <IconInput icon={MapPin} type="text" name="location" value={data.location} onChange={onChange} placeholder="Localização (ex: São Paulo, Brasil)" />
      <textarea
        name="summary"
        value={data.summary}
        onChange={onChange}
        placeholder="Resumo profissional..."
        rows={5}
        className="w-full rounded-md border border-gray-300 p-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}
