export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
};

export type Skill = {
  id: string;
  name: string;
  level: number;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type CVData = {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
};
