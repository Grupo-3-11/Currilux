import React from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function AIEnhanceButton({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="btn-outline text-sm flex items-center justify-center gap-2"
    >
      {loading ? <LoadingSpinner /> : "✨"}
      {loading ? "Melhorando..." : "Melhorar com IA"}
    </button>
  );
}
