import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEO Scout - AI Technical SEO Audit & Fix',
  description: 'Value Proposition: Helps SEO professionals and digital marketers efficiently identify, prioritize, and suggest actionable fixes for technical SEO issues across websites, saving significant time and improving search engine rankings.

Target Customer: Small to medium-sized SEO agencies, freelance SEO consultants, in-house marketing teams with SEO responsibilities, and web development agencies.

---
Category: MarTech
Target Market: Small to medium-sized SEO agencies, freelance SEO consultants, in-house marketing teams with SEO responsibilities, and web development agencies.
Source Hypothesis ID: b5cccb7d-53ac-42c2-ba5f-4f4a9fd8a8b1
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">SEO Scout - AI Technical SEO Audit & Fix</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
