"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ArrowLeft } from "lucide-react";

export default function SettingsPage() {
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
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Account Settings */}
          <Card>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Account Settings
            </h2>
            <div className="space-y-4">
              <Input label="Email" type="email" value="user@example.com" />
              <Button>Update Email</Button>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded"
                />
                <span className="text-slate-700">
                  Receive email notifications for new job matches
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 rounded"
                />
                <span className="text-slate-700">
                  Receive weekly digest of recommended jobs
                </span>
              </label>
              <Button>Save Preferences</Button>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-6">
              Danger Zone
            </h2>
            <div className="space-y-4">
              <p className="text-slate-600">
                Deleting your account is permanent and cannot be undone.
              </p>
              <Button variant="danger">Delete Account</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
