import axios from "axios";

type AIContext = "summary" | "experience";

interface GeminiResponse {
  candidates: { content: { parts: { text: string }[] } }[];
}

export async function enhanceTextWithAI(text: string, context: AIContext) {
  try {
    const prompt =
      context === "summary"
        ? "Você é um especialista em RH. Melhore o resumo profissional de forma clara, objetiva e impactante."
        : "Você é um especialista em RH. Melhore a descrição da experiência profissional usando verbos de ação e quantificação.";

    const response = await axios.post<GeminiResponse>(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
        import.meta.env.VITE_GEMINI_API_KEY
      }`,
      {
        contents: [
          {
            role: "user",
            parts: [
              { text: `${prompt}\n\nTexto original:\n${text}` }
            ]
          }
        ]
      }
    );

    const generatedText =
      response.data.candidates[0].content.parts[0].text.trim();

    return generatedText;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro ao chamar Gemini:", error.message);
      throw new Error(error.message);
    }
    throw new Error("Erro desconhecido ao chamar Gemini.");
  }
}
