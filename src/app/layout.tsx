import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AI Job Matching - Find Your Perfect Job",
  description:
    "Match your skills with perfect job opportunities using AI-powered recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-linear-to-br from-blue-50 via-cyan-50 to-blue-100 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
