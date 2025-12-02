"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  MapPin,
  Briefcase,
  DollarSign,
  Search,
  Filter,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  level: "junior" | "mid" | "senior";
  matchPercentage: number;
  requiredSkills: string[];
  description: string;
  salary: string;
  isSaved: boolean;
}

const MOCK_JOBS: Job[] = [
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
    isSaved: false,
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
    isSaved: false,
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
    isSaved: false,
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
    isSaved: false,
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
    isSaved: false,
  },
];

export default function RecommendationsPage() {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    level: "all",
    location: "all",
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleSave = (jobId: string) => {
    setJobs(
      jobs.map((job) =>
        job.id === jobId ? { ...job, isSaved: !job.isSaved } : job
      )
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel = filters.level === "all" || job.level === filters.level;

    const matchesLocation =
      filters.location === "all" || job.location.includes(filters.location);

    return matchesSearch && matchesLevel && matchesLocation;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "junior":
        return "bg-green-100 text-green-700";
      case "mid":
        return "bg-blue-100 text-blue-700";
      case "senior":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    return "text-orange-600";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">
            Job Recommendations
          </h1>
          <div className="w-10"></div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b border-slate-200 p-6 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search jobs, companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={filters.level}
                  onChange={(e) =>
                    setFilters({ ...filters, level: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Levels</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid-Level</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Locations</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Jobs List */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {filteredJobs.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-slate-600 text-lg">
              No jobs found matching your criteria
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                variant="elevated"
                className="hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {job.title}
                      </h3>
                      <button
                        onClick={() => handleToggleSave(job.id)}
                        className="text-slate-400 hover:text-primary-600 transition-colors"
                      >
                        {job.isSaved ? (
                          <BookmarkCheck className="w-6 h-6 text-primary-600" />
                        ) : (
                          <Bookmark className="w-6 h-6" />
                        )}
                      </button>
                    </div>

                    <p className="text-slate-900 font-semibold mb-3">
                      {job.company}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-1 text-slate-900">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-900">
                        <Briefcase className="w-4 h-4" />
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${getLevelColor(
                            job.level
                          )}`}
                        >
                          {job.level.charAt(0).toUpperCase() +
                            job.level.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-900">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{job.salary}</span>
                      </div>
                    </div>

                    <p className="text-slate-900 mb-4">{job.description}</p>

                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.requiredSkills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Match Score */}
                  <div className="flex flex-col items-center gap-4 md:text-center">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold mb-1">
                        <span className={getMatchColor(job.matchPercentage)}>
                          {job.matchPercentage}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">Match Score</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
