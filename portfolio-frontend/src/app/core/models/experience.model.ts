export interface ExperiencePeriod {
  start: string;
  end: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: ExperiencePeriod;
  technologies: string[];
  description: string;
}