import React from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import type { PersonalInfo } from "../../types/cv.types";

export default function PersonalHeader({ info }: { info: PersonalInfo }) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">{info.name}</h1>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
        <a href={`mailto:${info.email}`} className="flex items-center hover:text-blue-600">
          <Mail size={14} className="mr-1.5" />
          {info.email}
        </a>
        <a href={`tel:${info.phone}`} className="flex items-center hover:text-blue-600">
          <Phone size={14} className="mr-1.5" />
          {info.phone}
        </a>
        <a
          href={`https://${info.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-600"
        >
          <Linkedin size={14} className="mr-1.5" />
          {info.linkedin}
        </a>
        <span className="flex items-left">
          <MapPin size={14} className="mr-1.5" />
          {info.location}
        </span>
      </div>
    </div>
  );
}
