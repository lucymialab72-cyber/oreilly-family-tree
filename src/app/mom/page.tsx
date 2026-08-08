"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { familyLines } from "@/data/families";

const MOM_FAMILIES = ["linnerud", "jakubicek"];

export default function MomSidePage() {
  const families = familyLines.filter((f) => MOM_FAMILIES.includes(f.id));

  return (
    <div className="min-h-screen bg-parchment">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
            O&apos;Reilly Family Tree — Mom&apos;s Side
          </span>
          <div className="flex items-center gap-6 text-sm">
            {families.map((l) => (
              <Link key={l.id} href={`/family/${l.id}`} className="hidden md:block text-ink-muted hover:text-ink transition-colors">
                {l.flag} {l.name}
              </Link>
            ))}
            <Link href="/stories" className="hidden md:block text-ink-muted hover:text-ink transition-colors">📖 Stories</Link>
            <Link href="/map" className="hidden md:block text-ink-muted hover:text-ink transition-colors">🗺 Map</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-16 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-5xl mb-4">🌾</div>
          <h1 className="text-4xl font-bold text-ink mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Andrea O&apos;Reilly&apos;s Family History
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            The Linnerud and Jakubicek families — from Norway and Bohemia, to Wisconsin and Illinois.
          </p>
        </motion.div>
      </div>

      {/* Family Cards */}
      <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {families.map((family, i) => (
          <motion.div
            key={family.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <Link href={`/family/${family.id}`}>
              <div className="bg-white border border-border-light rounded-lg p-8 hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{family.flag}</div>
                <h2 className="text-2xl font-bold text-ink mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {family.name}
                </h2>
                <p className="text-ink-muted text-sm leading-relaxed">{family.subtitle}</p>
                <div className="mt-4 text-sm text-amber-700 font-medium">View family →</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <footer className="text-center text-xs text-ink-muted pb-8">
        <Link href="/" className="hover:text-ink transition-colors">← Full Family Tree</Link>
      </footer>
    </div>
  );
}
