export interface Education {
  university: string;
  degree: string;
  year: string;
  thesis: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  summary: string;
  education: Education;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "kerja" | "organisasi";
  descriptions: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  field: string;
}
