import React from "react";
import { Star } from "lucide-react";

export default function SkillLevel({
  level,
  onChange,
}: {
  level: number;
  onChange: (level: number) => void;
}) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 cursor-pointer ${
            level >= star ? "text-blue-500 fill-current" : "text-gray-300"
          }`}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  );
}
