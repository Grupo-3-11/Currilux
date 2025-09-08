import { useState } from "react";
import { enhanceTextWithAI } from "../services/aiService";

export function useAIEnhancement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enhance = async (text: string, context: "summary" | "experience") => {
    setLoading(true);
    setError(null);
    try {
      const result = await enhanceTextWithAI(text, context);
      return result;
    } catch (err) {
      setError("Erro ao melhorar o texto");
      return text;
    } finally {
      setLoading(false);
    }
  };

  return { enhance, loading, error };
}
