export type UserProfile = {
  id: string;
  name: string;
  email: string;
  skills: string[];
  experience: Experience[];
  cvUrl?: string;
};

export type Experience = {
  id: string;
  jobTitle: string;
  duration: string;
  description: string;
};

export type JobRecommendation = {
  id: string;
  title: string;
  company: string;
  location: string;
  level: "junior" | "mid" | "senior";
  matchPercentage: number;
  requiredSkills: string[];
  description: string;
  salary: string;
  isSaved?: boolean;
};
