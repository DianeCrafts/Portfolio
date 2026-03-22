export interface EducationPeriod {
  start: string;
  end: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: EducationPeriod;
  description: string;
  courses: string[];
}