type Props = { message: string; type: "success" | "error" };

export default function Toast({ message, type }: Props) {
  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white z-50 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}
