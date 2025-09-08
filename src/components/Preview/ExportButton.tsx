import { exportCVToPDF } from "../../services/pdfService";
import type { CVData } from "../../types/cv.types";

export default function ExportButton({ cvData }: { cvData: CVData }) {
  return (
    <button
      type="button"
      onClick={() => exportCVToPDF(cvData)}
      className="btn-secondary mt-4"
    >
      📄 Exportar PDF
    </button>
  );
}
