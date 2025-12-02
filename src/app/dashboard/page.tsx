"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  LogOut,
  Settings,
  Bookmark,
  BarChart3,
  Upload,
  Zap,
  Menu,
  X,
} from "lucide-react";

interface DashboardStats {
  totalMatches: number;
  averageMatch: number;
  savedJobs: number;
  skillsCount: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("User");
  const [stats] = useState<DashboardStats>({
    totalMatches: 24,
    averageMatch: 85,
    savedJobs: 5,
    skillsCount: 8,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth/login");
      return;
    }
    try {
      const userData = JSON.parse(user);
      setUserName(userData.name || "User");
    } catch (e) {
      console.error("Error parsing user data");
      router.push("/auth/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 bg-slate-900 text-white p-6 overflow-hidden md:w-64`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">JobAI</h2>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-2">
          {[
            { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
            { href: "/profile", label: "Profile", icon: Settings },
            {
              href: "/recommendations",
              label: "Job Recommendations",
              icon: Zap,
            },
            { href: "/saved-jobs", label: "Saved Jobs", icon: Bookmark },
            { href: "/settings", label: "Settings", icon: Settings },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center md:sticky md:top-0 md:z-40">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-slate-900 hidden md:block">
            Dashboard
          </h1>
          <div className="w-10 h-10 bg-primary-600 rounded-full"></div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {/* Welcome Banner */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">
              Hello, {userName} 👋
            </h2>
            <p className="text-lg text-slate-900">
              Let's find the best job for you!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card variant="elevated">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 text-sm">Total Job Match</p>
                  <p className="text-4xl font-bold text-slate-900 mt-2">
                    {stats.totalMatches}
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-primary-600" />
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 text-sm">Average Match %</p>
                  <p className="text-4xl font-bold text-slate-900 mt-2">
                    {stats.averageMatch}%
                  </p>
                </div>
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 text-sm">Pekerjaan Tersimpan</p>
                  <p className="text-4xl font-bold text-slate-900 mt-2">
                    {stats.savedJobs}
                  </p>
                </div>
                <Bookmark className="w-8 h-8 text-orange-600" />
              </div>
            </Card>

            <Card variant="elevated">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 text-sm">Skill Terbaca</p>
                  <p className="text-4xl font-bold text-slate-900 mt-2">
                    {stats.skillsCount}
                  </p>
                </div>
                <Zap className="w-8 h-8 text-green-600" />
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/profile">
                <Button className="w-full justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  Update Skills
                </Button>
              </Link>
              <Link href="/profile">
                <Button
                  variant="secondary"
                  className="w-full justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Upload CV
                </Button>
              </Link>
              <Link href="/recommendations">
                <Button className="w-full justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start Job Matching
                </Button>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <Card>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between pb-4 border-b border-slate-200 last:border-0"
                >
                  <div>
                    <p className="font-semibold text-slate-900">
                      Job match found: Senior React Developer
                    </p>
                    <p className="text-sm text-slate-900">Tech Company Inc.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-600">87%</p>
                    <p className="text-xs text-slate-900">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
