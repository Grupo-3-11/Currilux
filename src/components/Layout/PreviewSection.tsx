// src/components/Preview/PreviewSection.tsx

import ExportButton from "../Preview/ExportButton";
import CVPreview from "../Preview/CVPreview";
import type { CVData } from "../../types/cv.types";

export default function PreviewSection({ cvData }: { cvData: CVData }) {
  return (
    <div className="flex h-full flex-col bg-gray-50 border-l p-8">
      {/* Aqui você pode adicionar um header para a seção de preview se quiser */}
      <h2 className="text-xl font-bold mb-4">Pré-visualização do Currículo</h2>

      {/* Container principal que centraliza o 'papel' do CV */}
      <div className="flex-grow flex items-center justify-center">
        {/* Este é o 'papel' A4 do currículo */}
        <div className="aspect-[210/297] h-full max-h-full overflow-hidden rounded-lg bg-white shadow-2xl">
          <div className="h-full w-full overflow-y-auto p-6">
            <CVPreview data={cvData} />
          </div>
        </div>
      </div>

      {/* Botão de exportação fora do preview para melhor UX */}
      <div className="mt-4 flex justify-center">
        <ExportButton cvData={cvData} />
      </div>
    </div>
  );
}