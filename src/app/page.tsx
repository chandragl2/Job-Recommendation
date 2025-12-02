"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Zap,
  TrendingUp,
  Target,
  Sparkles,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">JobAI</div>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="primary">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Temukan Pekerjaan Terbaik dengan{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-accent-600">
                AI Job Matching
              </span>
            </h1>
            <p className="text-xl text-slate-900 mb-8">
              Cocokkan profil Anda dengan ribuan lowongan menggunakan teknologi
              AI. Dapatkan rekomendasi pekerjaan yang sesuai dengan skill dan
              pengalaman Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/register">
                <Button size="lg" className="w-full sm:w-auto font-bold">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto font-bold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="relative h-96 bg-linear-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-24 h-24 text-primary-600 mx-auto mb-4" />
              <p className="text-slate-900 text-lg font-semibold">
                AI Job Matching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section
        id="features"
        className="bg-white/70 backdrop-blur-sm py-20 border-t border-blue-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Fitur Unggulan Kami
            </h2>
            <p className="text-xl text-slate-900">
              Teknologi AI terdepan untuk menemukan pekerjaan sempurna Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card variant="elevated">
              <Zap className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                AI Job Matching
              </h3>
              <p className="text-slate-900">
                Algoritma AI canggih yang cocokkan profil dengan ribuan lowongan
              </p>
            </Card>

            {/* Feature 2 */}
            <Card variant="elevated">
              <Target className="w-12 h-12 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Skill Gap Analysis
              </h3>
              <p className="text-slate-900">
                Analisis detail skill yang perlu dikembangkan untuk target
                posisi
              </p>
            </Card>

            {/* Feature 3 */}
            <Card variant="elevated">
              <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Personalisasi Karir
              </h3>
              <p className="text-slate-900">
                Rencana pengembangan karir yang disesuaikan dengan tujuan Anda
              </p>
            </Card>

            {/* Feature 4 */}
            <Card variant="elevated">
              <BarChart3 className="w-12 h-12 text-accent-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Real-time Job Ranking
              </h3>
              <p className="text-slate-900">
                Peringkat pekerjaan yang diperbarui secara real-time sesuai
                profil
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card
          variant="elevated"
          className="bg-linear-to-r from-primary-600 to-accent-600 text-slate-900 text-center shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Mulai isi profil Anda sekarang
          </h2>
          <p className="text-lg mb-8 text-slate-900 opacity-95">
            Dapatkan rekomendasi pekerjaan yang dipersonalisasi hanya dalam
            beberapa menit
          </p>
          <Link href="/auth/register">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-slate-50 font-bold shadow-md"
            >
              Mulai Sekarang
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-900">
            &copy; 2024 JobAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
