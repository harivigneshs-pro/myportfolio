export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  logo: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  count?: number;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
