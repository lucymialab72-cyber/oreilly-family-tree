"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { familyLines } from "@/data/families";

export default function SiteNav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isFamilyActive = (id: string) => pathname === `/family/${id}`;

  const linkClass = (active: boolean) =>
    `hidden md:block transition-colors ${
      active ? "text-gold font-medium" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <>
      {/* Desktop top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div
          className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Link
            href="/"
            className="text-sm font-semibold text-ink hover:text-gold transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O&apos;Reilly Family Tree
          </Link>
          <div className="flex items-center gap-4 text-sm">
            {familyLines.map((l) => (
              <Link
                key={l.id}
                href={`/family/${l.id}`}
                className={linkClass(isFamilyActive(l.id))}
              >
                {l.flag} {l.name}
              </Link>
            ))}
            <Link href="/stories" className={linkClass(isActive("/stories"))}>
              📖 Stories
            </Link>
            <Link href="/map" className={linkClass(isActive("/map"))}>
              🗺️ Map
            </Link>
            <Link href="/documents" className={linkClass(isActive("/documents"))}>
              🗂️ Documents
            </Link>
            <a
              href="/oreilly-family-tree-print.pdf"
              download="OReilly-Family-Tree.pdf"
              className="hidden md:block text-ink-muted hover:text-ink transition-colors"
            >
              🖨️ Print
            </a>
            <Link
              href="/tree"
              className={`hidden md:block transition-colors font-semibold ${
                isActive("/tree")
                  ? "text-gold"
                  : "text-gold hover:text-gold-light"
              }`}
            >
              🌳 Family Tree
            </Link>
            {/* Mobile: compact links */}
            <Link
              href="/tree"
              className="md:hidden text-gold font-semibold hover:text-gold-light transition-colors"
            >
              🌳
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-parchment/95 backdrop-blur-sm border-t border-border-light safe-area-bottom"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <div className="flex items-stretch justify-around px-2 py-1">
          {familyLines.map((l) => (
            <Link
              key={l.id}
              href={`/family/${l.id}`}
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
            href="/tree"
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-sm transition-colors min-w-0 flex-1 ${
              isActive("/tree")
                ? "text-gold"
                : "text-gold active:bg-gold/5"
            }`}
          >
            <span className="text-lg leading-none">🌳</span>
            <span className="text-[10px] mt-0.5 font-semibold">Tree</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
