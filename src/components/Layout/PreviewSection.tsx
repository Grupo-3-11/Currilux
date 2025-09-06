import type { CVData } from "../../types/cv.types";



const PreviewSection = ({ cvData }: { cvData: CVData }) => (
    <div className="flex h-full items-center justify-center bg-gray-300 p-8">
      <div className="aspect-[210/297] h-full max-h-full overflow-hidden rounded-lg bg-white shadow-2xl">
          <div className="h-full w-full overflow-y-auto">
               <CVPreview data={cvData} />
          </div>
      </div>
    </div>
  );
