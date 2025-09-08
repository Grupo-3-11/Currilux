import axios from "axios";

type AIContext = "summary" | "experience";

interface GeminiResponse {
  candidates: { content: { parts: { text: string }[] } }[];
}

export async function enhanceTextWithAI(text: string, context: AIContext) {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Ajuste do prompt para garantir uma resposta única
    const prompt =
      context === "summary"
        ? `Melhore este resumo profissional de forma clara, objetiva e impactante. Retorne apenas uma versão final:\n\n${text}`
        : `Melhore esta descrição de experiência profissional, usando verbos de ação e quantificação quando possível. Retorne apenas uma versão final:\n\n${text}`;

    const response = await axios.post<GeminiResponse>(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
      }
    );

    // Pega apenas o primeiro candidato e o primeiro trecho de texto
    const bestCandidate = response.data.candidates[0];
    const improvedText = bestCandidate.content.parts[0].text.trim();

    return improvedText;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro ao chamar Gemini:", error.message);
      throw new Error(error.message);
    }
    throw new Error("Erro desconhecido ao chamar Gemini.");
  }
}
