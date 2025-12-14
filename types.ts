export enum ProjectCategory {
  ALL = 'ALL',
  WEBSITE = 'WEBSITE',
  APP = 'APP',
  SYSTEM = 'SYSTEM',
  LINKBIO = 'LINKBIO'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  tech: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}