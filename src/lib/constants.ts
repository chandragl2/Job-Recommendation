// Application constants

export const APP_NAME = "JobAI";
export const APP_DESCRIPTION =
  "AI-powered job matching and skill recommendation platform";

// Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  RECOMMENDATIONS: "/recommendations",
  SAVED_JOBS: "/saved-jobs",
  SETTINGS: "/settings",
};

// Job levels
export const JOB_LEVELS = ["junior", "mid", "senior"] as const;

// Locations
export const LOCATIONS = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Medan",
  "Makassar",
  "Remote",
  "All",
] as const;

// Skill categories
export const SKILL_CATEGORIES = {
  FRONTEND: [
    "React",
    "Vue.js",
    "Angular",
    "Next.js",
    "Svelte",
    "CSS",
    "HTML",
    "JavaScript",
  ],
  BACKEND: [
    "Node.js",
    "Python",
    "Java",
    "Go",
    "Ruby",
    "C#",
    "PHP",
    "Express.js",
  ],
  DATABASE: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"],
  DEVOPS: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "Azure",
    "Jenkins",
    "GitLab CI",
  ],
  TOOLS: ["Git", "GitHub", "Figma", "Jira", "VS Code", "Postman"],
} as const;

// Match score thresholds
export const MATCH_THRESHOLDS = {
  EXCELLENT: 90,
  GOOD: 80,
  FAIR: 70,
  POOR: 0,
} as const;

// Pagination
export const ITEMS_PER_PAGE = 10;

// API endpoints (for future use)
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },
  USER: {
    PROFILE: "/user/profile",
    UPDATE_PROFILE: "/user/profile",
    SKILLS: "/user/skills",
    ADD_SKILL: "/user/skills",
    REMOVE_SKILL: "/user/skills/:id",
    EXPERIENCE: "/user/experience",
    ADD_EXPERIENCE: "/user/experience",
    UPDATE_EXPERIENCE: "/user/experience/:id",
    REMOVE_EXPERIENCE: "/user/experience/:id",
  },
  JOBS: {
    LIST: "/jobs",
    GET: "/jobs/:id",
    RECOMMENDATIONS: "/jobs/recommendations",
    SAVE: "/jobs/:id/save",
    UNSAVE: "/jobs/:id/unsave",
    SEARCH: "/jobs/search",
  },
} as const;
