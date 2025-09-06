import React from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 border-b-2 border-gray-300 pb-1.5 text-xl font-bold uppercase tracking-wide text-gray-700">
        {title}
      </h2>
      {children}
    </section>
  );
}
