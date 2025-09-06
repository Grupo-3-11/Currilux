import React from "react";

export default function IconInput({
  icon: Icon,
  ...props
}: {
  icon: React.ElementType;
  [key: string]: any;
}) {
  return (
    <div className="relative flex items-center">
      <Icon className="absolute left-3 h-5 w-5 text-gray-400" />
      <input
        className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-gray-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}
