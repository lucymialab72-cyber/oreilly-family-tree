"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { familyLines } from "@/data/families";
import ScopedNav from "@/components/ScopedNav";
import ScopedFooter from "@/components/ScopedFooter";

const MOM_FAMILIES = ["linnerud", "jakubicek"];

export default function MomSidePage() {
  const families = familyLines.filter((f) => MOM_FAMILIES.includes(f.id));

  return (
    <div className="min-h-screen bg-parchment pb-20 md:pb-0">
      <ScopedNav side="mom" />

      <main className="pt-24 px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl mb-4">🌾</div>
            <h1
              className="text-3xl font-bold text-ink mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Linnerud, Lee, Jakubicek &amp; Melka Heritage
            </h1>
            <p className="text-ink-muted text-base">
              From Norway and Bohemia, to Wisconsin and Illinois.
            </p>
          </motion.div>
        </div>

        {/* Family cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {families.map((family, i) => (
            <motion.div
              key={family.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              <Link href={`/family/${family.id}`}>
                <div className="bg-white border border-border-light rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer text-left h-full">
                  <div className="text-3xl mb-2">{family.flag}</div>
                  <h2
                    className="text-lg font-bold text-ink mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {family.name}
                  </h2>
                  <p className="text-ink-muted text-xs leading-relaxed">
                    {family.subtitle}
                  </p>
                  <div className="mt-3 text-xs text-amber-700 font-medium">
                    View family →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick links */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2
            className="text-xl font-bold text-ink mb-6 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore Mom&apos;s Side
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href: "/stories?side=mom", icon: "📖", label: "Stories" },
              { href: "/map?side=mom", icon: "🗺️", label: "Map" },
              { href: "/documents?side=mom", icon: "🗂️", label: "Documents" },
              { href: "/tree", icon: "🌳", label: "Family Tree" },
            ].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              >
                <Link href={link.href}>
                  <div className="text-center p-4 bg-white/60 border border-border-light rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                    <div className="text-2xl mb-1">{link.icon}</div>
                    <div
                      className="text-sm text-ink-muted font-medium"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {link.label}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <ScopedFooter side="mom" />
    </div>
  );
}
