"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Tabs } from "@/components/ui/Tabs";
import { ArrowLeft, Plus, X } from "lucide-react";

interface Skill {
  id: string;
  name: string;
}

interface Experience {
  id: string;
  jobTitle: string;
  duration: string;
  description: string;
}

const SUGGESTED_SKILLS = [
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
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React" },
    { id: "2", name: "JavaScript" },
    { id: "3", name: "Figma" },
  ]);
  const [skillInput, setSkillInput] = useState("");
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      duration: "2021 - Present",
      description: "Lead frontend team at Tech Company",
    },
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    location: "Jakarta, Indonesia",
  });

  const handleAddSkill = (skill: string) => {
    if (!skills.find((s) => s.name === skill)) {
      setSkills([...skills, { id: Date.now().toString(), name: skill }]);
    }
    setSkillInput("");
    setFilteredSkills([]);
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const handleSkillInputChange = (value: string) => {
    setSkillInput(value);
    if (value) {
      const filtered = SUGGESTED_SKILLS.filter(
        (skill) =>
          skill.toLowerCase().includes(value.toLowerCase()) &&
          !skills.find((s) => s.name === skill)
      );
      setFilteredSkills(filtered);
    } else {
      setFilteredSkills([]);
    }
  };

  const handleAddExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      jobTitle: "",
      duration: "",
      description: "",
    };
    setExperiences([...experiences, newExp]);
  };

  const handleRemoveExperience = (id: string) => {
    setExperiences(experiences.filter((e) => e.id !== id));
  };

  const tabs = [
    { id: "personal", label: "Personal Info" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "cv", label: "Upload CV" },
  ];

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
            Complete Your Profile
          </h1>
          <Button variant="secondary">Save Changes</Button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Card>
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

          <div className="py-8">
            {/* Personal Info Tab */}
            {activeTab === "personal" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    value={personalInfo.fullName}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        fullName: e.target.value,
                      })
                    }
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                  />
                  <Input
                    label="Phone"
                    value={personalInfo.phone}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                  <Input
                    label="Location"
                    value={personalInfo.location}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
                <Button>Save Personal Info</Button>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Add Skill
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Type skill name (e.g., React, Python)"
                      value={skillInput}
                      onChange={(e) => handleSkillInputChange(e.target.value)}
                    />
                    {filteredSkills.length > 0 && (
                      <div className="absolute top-full mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                        {filteredSkills.map((skill) => (
                          <button
                            key={skill}
                            onClick={() => handleAddSkill(skill)}
                            className="w-full text-left px-4 py-2 hover:bg-slate-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">
                    Your Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <div
                        key={skill.id}
                        className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full flex items-center gap-2"
                      >
                        <span>{skill.name}</span>
                        <button
                          onClick={() => handleRemoveSkill(skill.id)}
                          className="hover:text-primary-900"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button>Save Skills</Button>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <Card key={exp.id} className="bg-slate-50">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-slate-900">
                        Experience #{idx + 1}
                      </h4>
                      <button
                        onClick={() => handleRemoveExperience(exp.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <Input
                        label="Job Title"
                        placeholder="Senior Frontend Developer"
                        value={exp.jobTitle}
                        onChange={(e) => {
                          setExperiences(
                            experiences.map((ex) =>
                              ex.id === exp.id
                                ? { ...ex, jobTitle: e.target.value }
                                : ex
                            )
                          );
                        }}
                      />
                      <Input
                        label="Duration"
                        placeholder="2021 - Present"
                        value={exp.duration}
                        onChange={(e) => {
                          setExperiences(
                            experiences.map((ex) =>
                              ex.id === exp.id
                                ? { ...ex, duration: e.target.value }
                                : ex
                            )
                          );
                        }}
                      />
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Description
                        </label>
                        <textarea
                          placeholder="Describe your responsibilities and achievements"
                          value={exp.description}
                          onChange={(e) => {
                            setExperiences(
                              experiences.map((ex) =>
                                ex.id === exp.id
                                  ? { ...ex, description: e.target.value }
                                  : ex
                              )
                            );
                          }}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          rows={4}
                        />
                      </div>
                    </div>
                  </Card>
                ))}

                <Button
                  variant="secondary"
                  onClick={handleAddExperience}
                  className="gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Experience
                </Button>

                <Button>Save Experience</Button>
              </div>
            )}

            {/* CV Upload Tab */}
            {activeTab === "cv" && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4">
                    <Plus className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Upload CV
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Drag and drop your CV or click to browse
                  </p>
                  <Input type="file" accept=".pdf,.doc,.docx" />
                </div>

                <Button>Upload CV</Button>
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
