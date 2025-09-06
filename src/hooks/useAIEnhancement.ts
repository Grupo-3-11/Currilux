import { useState } from "react";
import { enhanceTextWithAI } from "../services/aiService";

export function useAIEnhancement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function enhance(text: string, context: "summary" | "experience") {
    setLoading(true);
    setError(null);
    try {
      const result = await enhanceTextWithAI(text, context);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { enhance, loading, error };
}
