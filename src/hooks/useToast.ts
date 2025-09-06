import { useState } from "react";

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error" | null>(null);

  function showToast(msg: string, t: "success" | "error") {
    setMessage(msg);
    setType(t);
    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000); // desaparece depois de 3s
  }

  return { message, type, showToast };
}
