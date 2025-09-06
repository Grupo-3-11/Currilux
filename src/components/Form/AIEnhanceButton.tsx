// import { useAIEnhancement } from "../../hooks/useAIEnhancement";
// import { useToast } from "../../hooks/useToast";
// import LoadingSpinner from "../UI/LoadingSpinner";

// type Props = {
//   text: string;
//   onEnhanced: (newText: string) => void;
//   context: "summary" | "experience";
// };

// export default function AIEnhanceButton({ text, onEnhanced, context }: Props) {
//   const { enhance, loading } = useAIEnhancement();
//   const { showToast } = useToast();

//   async function handleClick() {
//     const result = await enhance(text, context);
//     if (result) {
//       onEnhanced(result);
//       showToast("Texto melhorado com sucesso!", "success");
//     } else {
//       showToast("Erro ao melhorar texto.", "error");
//     }
//   }

//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       disabled={loading}
//       className="ml-2 px-3 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50 flex items-center gap-2"
//     >
//       {loading ? <LoadingSpinner /> : "✨ Melhorar"}
//     </button>
//   );
// }
