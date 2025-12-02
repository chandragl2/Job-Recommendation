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
