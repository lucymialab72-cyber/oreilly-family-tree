"use client";

import Link from "next/link";

type Side = "dad" | "mom";

const SIDE_CONFIG: Record<Side, { families: string[]; label: string; home: string; sources: string }> = {
  dad: {
    families: ["O\u2019Reilly", "Coffey", "Sheehan"],
    label: "Irish Heritage",
    home: "/dad",
    sources: "Irish National Archives \u00B7 Ellis Island Records \u00B7 Cook County Vital Records \u00B7 Newspapers.com \u00B7 FamilySearch \u00B7 Find a Grave \u00B7 irishgenealogy.ie",
  },
  mom: {
    families: ["Linnerud", "Lee", "Jakubicek", "Melka"],
    label: "Norwegian & Czech Heritage",
    home: "/mom",
    sources: "Norwegian Digital Archives \u00B7 U.S. Census (1900\u20131950) \u00B7 Ellis Island Records \u00B7 FamilySearch \u00B7 Find a Grave \u00B7 Wisconsin Historical Society",
  },
};

export default function ScopedFooter({ side }: { side: Side }) {
  const cfg = SIDE_CONFIG[side];

  return (
    <footer className="border-t border-border-light py-10 px-6 bg-parchment">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-ink-muted text-sm" style={{ fontFamily: "var(--font-sans)" }}>
          {cfg.families.join(" \u00B7 ")} — {cfg.label}
        </p>
        <p className="text-ink-muted text-xs mt-2" style={{ fontFamily: "var(--font-sans)" }}>
          Sources: {cfg.sources}
        </p>
        <p className="text-ink-muted text-xs mt-4" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href={cfg.home} className="hover:text-gold transition-colors">
            \u2190 Back to {side === "dad" ? "Dad\u2019s" : "Mom\u2019s"} Side
          </Link>
          {" \u00B7 "}
          <Link href="/" className="hover:text-gold transition-colors">
            Full Family Tree
          </Link>
        </p>
      </div>
    </footer>
  );
}
