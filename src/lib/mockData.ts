// Mock data for demonstration purposes
// This will be replaced with real API calls in production

import { JobRecommendation, UserProfile } from "@/types";

export const MOCK_USER_PROFILE: UserProfile = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  skills: ["React", "JavaScript", "TypeScript", "Node.js", "Tailwind CSS"],
  experience: [
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      duration: "2021 - Present",
      description:
        "Lead frontend team at Tech Company, building scalable React applications",
    },
    {
      id: "2",
      jobTitle: "Frontend Developer",
      duration: "2019 - 2021",
      description:
        "Developed responsive web applications using React and TypeScript",
    },
  ],
};

export const MOCK_JOBS: JobRecommendation[] = [
  {
    id: "1",
    title: "Senior React Developer",
    company: "Tech Company Inc",
    location: "Jakarta, Indonesia",
    level: "senior",
    matchPercentage: 92,
    requiredSkills: ["React", "TypeScript", "Node.js"],
    description: "Lead our frontend team and build scalable applications",
    salary: "$80,000 - $120,000",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Digital Solutions",
    location: "Bandung, Indonesia",
    level: "mid",
    matchPercentage: 87,
    requiredSkills: ["React", "Node.js", "MongoDB"],
    description: "Build and maintain our web application stack",
    salary: "$50,000 - $80,000",
  },
  {
    id: "3",
    title: "Frontend Engineer",
    company: "Creative Studio",
    location: "Surabaya, Indonesia",
    level: "mid",
    matchPercentage: 85,
    requiredSkills: ["React", "CSS", "JavaScript"],
    description: "Create beautiful and responsive user interfaces",
    salary: "$45,000 - $70,000",
  },
  {
    id: "4",
    title: "JavaScript Developer",
    company: "StartUp XYZ",
    location: "Remote",
    level: "junior",
    matchPercentage: 78,
    requiredSkills: ["JavaScript", "HTML", "CSS"],
    description: "Join our growing team as a junior developer",
    salary: "$30,000 - $50,000",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Jakarta, Indonesia",
    level: "senior",
    matchPercentage: 82,
    requiredSkills: ["Docker", "AWS", "Node.js"],
    description: "Manage our cloud infrastructure and deployment",
    salary: "$70,000 - $110,000",
  },
];

export const SUGGESTED_SKILLS = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "SQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Figma",
  "UI Design",
  "REST API",
  "GraphQL",
  "Git",
  "Next.js",
  "Vue.js",
  "Angular",
  "Java",
  "C++",
  "AWS Lambda",
  "Kubernetes",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "GraphQL",
  "Express.js",
  "Django",
  "Flask",
  "FastAPI",
  "Ruby on Rails",
];
