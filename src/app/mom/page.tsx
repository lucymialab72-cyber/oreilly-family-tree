"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { familyLines } from "@/data/families";

const MOM_FAMILIES = ["linnerud", "jakubicek"];

export default function MomSidePage() {
  const families = familyLines.filter((f) => MOM_FAMILIES.includes(f.id));

  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <div className="text-5xl mb-4">🌾</div>
        <h1 className="text-3xl font-bold text-ink mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Linnerud, Lee, Jakubicek &amp; Melka Heritage
        </h1>
        <p className="text-ink-muted text-base mb-10">
          From Norway and Bohemia, to Wisconsin and Illinois.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {families.map((family, i) => (
            <motion.div
              key={family.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              <Link href={`/family/${family.id}`}>
                <div className="bg-white border border-border-light rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer text-left">
                  <div className="text-3xl mb-2">{family.flag}</div>
                  <h2 className="text-lg font-bold text-ink mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {family.name}
                  </h2>
                  <p className="text-ink-muted text-xs leading-relaxed">{family.subtitle}</p>
                  <div className="mt-3 text-xs text-amber-700 font-medium">View family →</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
          ← Back to Full Family Tree
        </Link>
      </motion.div>
    </div>
  );
}
