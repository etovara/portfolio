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
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: BilingualText;
  period: string;
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
}
