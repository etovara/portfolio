/* === INTERFACES DE TYPESCRIPT === */
/* Define los tipos de datos que consumen los componentes desde data.json */

import type { BilingualText } from "@/utils/lang";

export interface Personal {
  name: string;
  role: BilingualText;
  tagline: BilingualText;
  bio: BilingualText;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  englishLevel: string;
  availability: string;
  workAuthorization: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: BilingualText;
  period: string;
  modality: string;
  description: BilingualText;
  technologies: string[];
}

export interface Project {
  id: string;
  title: BilingualText;
  description: BilingualText;
  technologies: string[];
  url: string;
  github: string;
  image: string;
}

export interface PortfolioData {
  personal: Personal;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
