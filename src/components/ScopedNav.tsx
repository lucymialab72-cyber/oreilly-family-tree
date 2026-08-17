"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { familyLines } from "@/data/families";

type Side = "dad" | "mom";

const SIDE_FAMILIES: Record<Side, string[]> = {
  dad: ["oreilly", "coffey"],
  mom: ["linnerud", "jakubicek"],
};

const SIDE_CONFIG: Record<Side, { title: string; emoji: string; home: string }> = {
  dad: { title: "Dad\u2019s Side", emoji: "\u2618\uFE0F", home: "/dad" },
  mom: { title: "Mom\u2019s Side", emoji: "\uD83C\uDF3E", home: "/mom" },
};

export default function ScopedNav({ side }: { side: Side }) {
  const pathname = usePathname();
  const families = familyLines.filter((f) => SIDE_FAMILIES[side].includes(f.id));
  const cfg = SIDE_CONFIG[side];

  const isActive = (href: string) => pathname === href;
  const isFamilyActive = (id: string) => pathname === `/family/${id}`;

  const linkClass = (active: boolean) =>
    `hidden md:block transition-colors ${
      active ? "text-gold font-medium" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <>
      {/* Desktop top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment border-b border-border-light">
        <div
          className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Link
            href={cfg.home}
            className="text-sm font-semibold text-ink hover:text-gold transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {cfg.emoji} {cfg.title}
          </Link>
          <div className="flex items-center gap-4 text-sm">
            {families.map((l) => (
              <Link
                key={l.id}
                href={`/family/${l.id}?side=${side}`}
                className={linkClass(isFamilyActive(l.id))}
              >
                {l.flag} {l.name}
              </Link>
            ))}
            <Link href={`/stories?side=${side}`} className={linkClass(isActive("/stories"))}>
              📖 Stories
            </Link>
            <Link href={`/map?side=${side}`} className={linkClass(isActive("/map"))}>
              🗺️ Map
            </Link>
            <Link href={`/documents?side=${side}`} className={linkClass(isActive("/documents"))}>
              🗂️ Documents
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-parchment border-t border-border-light safe-area-bottom"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <div className="flex items-stretch justify-around px-2 py-1">
          {families.map((l) => (
            <Link
              key={l.id}
              href={`/family/${l.id}?side=${side}`}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-sm transition-colors min-w-0 flex-1 ${
                isFamilyActive(l.id)
                  ? "text-gold"
                  : "text-ink-muted active:bg-ink/5"
              }`}
            >
              <span className="text-lg leading-none">{l.flag}</span>
              <span className="text-[10px] mt-0.5 truncate max-w-full">
                {l.name}
              </span>
            </Link>
          ))}
          <Link
            href={`/stories?side=${side}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-sm transition-colors min-w-0 flex-1 text-ink-muted active:bg-ink/5"
          >
            <span className="text-lg leading-none">📖</span>
            <span className="text-[10px] mt-0.5">Stories</span>
          </Link>
          <Link
            href={`/documents?side=${side}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-sm transition-colors min-w-0 flex-1 text-ink-muted active:bg-ink/5"
          >
            <span className="text-lg leading-none">🗂️</span>
            <span className="text-[10px] mt-0.5">Docs</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
