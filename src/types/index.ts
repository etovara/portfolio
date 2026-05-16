export interface Personal {
  name: string;
  role: string;
  tagline: string;
  bio: string;
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
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
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
