export type Language = 'id' | 'en';

export interface Education {
  university: string;
  degree: string;
  year: string;
  thesis: string;
}

export interface Profile {
  name: string;
  title: {
    id: string;
    en: string;
  };
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: {
    id: string;
    en: string;
  };
  highlights: {
    id: { label: string; sublabel: string }[];
    en: { label: string; sublabel: string }[];
  };
  education: {
    university: string;
    degree: {
      id: string;
      en: string;
    };
    year: string;
    thesis: {
      id: string;
      en: string;
    };
  };
}

export interface Experience {
  title: {
    id: string;
    en: string;
  };
  company: string;
  location: string;
  period: string;
  type: "kerja" | "organisasi";
  descriptions: {
    id: string[];
    en: string[];
  };
}

export interface CaseStudy {
  problem: {
    id: string;
    en: string;
  };
  solution: {
    id: string;
    en: string;
  };
  architecture: {
    id: string[];
    en: string[];
  };
  qaMetrics: {
    label: string;
    value: string;
    description: {
      id: string;
      en: string;
    };
  }[];
}

export interface Project {
  title: string;
  subtitle?: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  techStack: string[];
  features: {
    id: string[];
    en: string[];
  };
  github?: string;
  demo?: string;
  image: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export interface SkillItem {
  name: string;
  level?: string;
}

export interface Skill {
  category: {
    id: string;
    en: string;
  };
  items: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  field: {
    id: string;
    en: string;
  };
  credentialId?: string;
  credentialUrl?: string;
}
