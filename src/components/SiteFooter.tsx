"use client";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-light py-10 px-6 bg-parchment">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-ink-muted text-sm"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Compiled July 2026 · Primary source documents · 4 countries · 6
          generations
        </p>
        <p
          className="text-ink-muted text-xs mt-2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Sources: U.S. Census (1900–1950) · Irish National Archives ·
          Norwegian Digital Archives · Ellis Island Records · Cook County Vital
          Records · Newspapers.com · FamilySearch · Find a Grave ·
          irishgenealogy.ie
        </p>
        <p
          className="text-ink-muted text-xs mt-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Researched &amp; built for the O&apos;Reilly-Linnerud family
        </p>
      </div>
    </footer>
  );
}
