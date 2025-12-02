"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowLeft } from "lucide-react";

export default function SavedJobsPage() {
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
          <h1 className="text-2xl font-bold text-slate-900">Saved Jobs</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <Card className="text-center py-12">
          <p className="text-slate-600 text-lg">
            You haven't saved any jobs yet. Visit the recommendations page to
            save jobs!
          </p>
          <Link href="/recommendations" className="mt-4 inline-block">
            <Button>Browse Jobs</Button>
          </Link>
        </Card>
      </main>
    </div>
  );
}
