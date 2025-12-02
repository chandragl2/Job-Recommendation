// Auth types
export interface User {
  id?: string;
  email: string;
  name: string;
  phone?: string;
  location?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthError {
  message: string;
  code?: string;
}

// Job types
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

// User Profile types
export interface Skill {
  id: string;
  name: string;
}

export interface Experience {
  id: string;
  jobTitle: string;
  duration: string;
  description: string;
}

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  skills: Skill[];
  experiences: Experience[];
  cvFile?: File;
}

// Legacy types for compatibility
export type JobRecommendation = Job;
