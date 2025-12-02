export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  level: "junior" | "mid" | "senior";
  salary: string;
  description: string;
  skills: string[];
  matchPercentage: number;
  isSaved?: boolean;
}

export interface JobFilter {
  searchQuery: string;
  level?: string;
  location?: string;
  minMatch?: number;
}

export interface JobStats {
  totalMatches: number;
  averageMatch: number;
  savedJobs: number;
  skillsCount: number;
}
