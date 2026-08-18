"use client";

import { use, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { familyLines } from "@/data/families";
import type { Person } from "@/data/families";
import { notFound } from "next/navigation";
import DocumentGallery from "@/components/DocumentGallery";
import { getDocsByFamily } from "@/data/documents";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScopedNav from "@/components/ScopedNav";
import ScopedFooter from "@/components/ScopedFooter";
import PedigreeChart from "@/components/PedigreeChart";
import { pedigreeTrees } from "@/data/pedigree-data";

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['"()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

// Photo mapping for key people
const personPhotos: Record<string, { src: string; alt: string }[]> = {
  // ── O'Reilly Branch ──────────────────────────────────────────
  'Edward Joseph "Bud" O\'Reilly': [
    { src: "/docs/family-photos/Grandpa O.jpg", alt: "Grandpa O — Edward J. O'Reilly" },
    { src: "/docs/family-photos/Wedding photo.jpg", alt: "Wedding Photo — Edward & Eileen O'Reilly" },
    { src: "/photos/oreilly/oreilly-family-1952.jpg", alt: "O'Reilly Family, 1952 — Eileen, Catherine Loretta, James Patrick, Edward Joseph, Patrick J., Jerome" },
    { src: "/photos/oreilly/richard-oreilly-gloria-maloney-wedding-1952.jpg", alt: "Richard Joseph O'Reilly & Gloria Maloney Wedding, April 19, 1952" },
  ],
  "Eileen Marie Coffey": [
    { src: "/photos/coffey/eileen-coffey-bud-oreilly-wedding.jpg", alt: "Eileen Coffey & Edward O'Reilly — Wedding Photo" },
    { src: "/photos/oreilly/oreilly-family-1952.jpg", alt: "O'Reilly Family, 1952" },
  ],
  "Johanna Hanrahan": [
    { src: "/photos/oreilly/johanna-hanrahan.jpg", alt: "Johanna Hanrahan (1858–1949) — portrait" },
  ],
  "Patrick Joseph O'Reilly": [
    { src: "/photos/oreilly/patrick-joseph-oreilly.jpg", alt: "Patrick Joseph O'Reilly — portrait, c.1905–1920" },
    { src: "/photos/oreilly/patrick-catherine-50th-anniversary.jpg", alt: "Patrick & Catherine O'Reilly — 50th Wedding Anniversary, 1968" },
    { src: "/photos/oreilly/oreilly-children-richard-james-edward-loretta.jpg", alt: "Children of Patrick & Catherine O'Reilly — Richard, James, Edward, Loretta, c.1920s" },
  ],
  "Catherine Loretta Sheehy": [
    { src: "/photos/oreilly/patrick-catherine-50th-anniversary.jpg", alt: "Patrick & Catherine O'Reilly — 50th Wedding Anniversary, 1968" },
    { src: "/photos/oreilly/oreilly-children-richard-james-edward-loretta.jpg", alt: "Children of Patrick & Catherine O'Reilly — Richard, James, Edward, Loretta, c.1920s" },
  ],
  "Anna Woulfe": [
    { src: "/photos/oreilly/anna-woulfe.jpg", alt: "Anna Woulfe (1875–1967), known as 'Grandma Shug'" },
  ],
  // ── Coffey Branch ────────────────────────────────────────────
  "John J. Coffey": [
    { src: "/photos/coffey/john-joseph-coffey-wedding.jpg", alt: "John Joseph Coffey at son's wedding, c. late 1940s" },
  ],
  "Julia Therese Sheehan": [
    { src: "/photos/coffey/julia-sheehan-coffey.jpg", alt: "Julia Sheehan Coffey (1889–1965)" },
  ],
  // ── Linnerud Branch ──────────────────────────────────────────
  "Andrew Olaus Linnerud": [
    { src: "/docs/linnerud/Andrew-O-Linnerud-Family-Portrait-1915-Anna-Grace-Albert-Evelyn.jpg", alt: "Andrew & Anna Linnerud Family — 1915 (annotated by grandson Lyle)" },
  ],
  "Anna Gudrun Lee": [
    { src: "/docs/linnerud/Andrew-O-Linnerud-Family-Portrait-1915-Anna-Grace-Albert-Evelyn.jpg", alt: "Andrew & Anna Linnerud Family — 1915" },
  ],
  "Lyle Andrew Linnerud": [
    { src: "/docs/family-photos/Lyle-Andrew-Linnerud-1922-2015-PHOTO-Obituary-FindAGrave.png", alt: "Lyle Andrew Linnerud (1922–2015)" },
  ],
  "Sigvart S. Lee": [
    { src: "/docs/family-photos/PHOTO-Sigvart-Lee-Sorensen-Portrait-2xGreatGrandfather.png", alt: "Sigvart Lee Portrait" },
    { src: "/docs/family-photos/PHOTO-Lee-Family-Full-Portrait-Sigvart-Berthea-8-Children-CLEAN.png", alt: "Lee Family Portrait" },
  ],
  "Berthea S. Lee": [
    { src: "/docs/family-photos/PHOTO-Lee-Family-Full-Portrait-Sigvart-Berthea-8-Children-CLEAN.png", alt: "Lee Family Portrait" },
  ],
};

function PersonPhotoDisplay({ personName }: { personName: string }) {
  const photos = personPhotos[personName];
  if (!photos || photos.length === 0) return null;
  return (
    <div className="flex gap-4 mb-6 flex-wrap justify-center">
      {photos.map((photo, i) => (
        <div key={i} className="border-2 border-border rounded-sm overflow-hidden bg-white shadow-md" style={{ width: 160, height: 200 }}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
          </div>
        </div>
      ))}
      <p className="w-full text-[10px] text-ink-muted -mt-2" style={{ fontFamily: "var(--font-sans)" }}>
        {photos.map(p => p.alt).join(" · ")}
      </p>
    </div>
  );
}

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={index}
      id={slugify(person.name)}
      className="border border-border rounded-sm p-6 bg-white/50 hover:bg-white transition-colors scroll-mt-20 max-w-2xl mx-auto w-full"
    >
      <PersonPhotoDisplay personName={person.name} />
      <h4 className="text-xl font-bold mb-1 text-center" style={{ fontFamily: "var(--font-display)" }}>
        {person.name}
      </h4>
      {person.birthName && (
        <p className="text-ink-muted text-sm italic mb-3 text-center">
          Born: {person.birthName}
        </p>
      )}

      <div className="flex flex-col gap-1 mt-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2" style={{ fontFamily: "var(--font-sans)" }}>
        {person.born && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Born:</span>{" "}
            <span className="text-ink break-words">{person.born}</span>
          </div>
        )}
        {person.bornPlace && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Place:</span>{" "}
            <span className="text-ink break-words">{person.bornPlace}</span>
          </div>
        )}
        {person.died && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Died:</span>{" "}
            <span className="text-ink break-words">{person.died}</span>
          </div>
        )}
        {person.occupation && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Occupation:</span>{" "}
            <span className="text-ink break-words">{person.occupation}</span>
          </div>
        )}
        {person.spouse && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Spouse:</span>{" "}
            <span className="text-ink break-words">{person.spouse}</span>
          </div>
        )}
        {person.ship && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Ship:</span>{" "}
            <span className="text-ink italic break-words">{person.ship}</span>
          </div>
        )}
        {person.immigrated && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Immigrated:</span>{" "}
            <span className="text-ink break-words">{person.immigrated}</span>
          </div>
        )}
        {person.physical && (
          <div className="text-sm min-w-0">
            <span className="text-ink-muted">Physical:</span>{" "}
            <span className="text-ink break-words">{person.physical}</span>
          </div>
        )}
        {person.burial && (
          <div className="text-sm min-w-0 lg:col-span-2">
            <span className="text-ink-muted">Burial:</span>{" "}
            <span className="text-ink break-words">{person.burial}</span>
          </div>
        )}
      </div>

      {person.notes && person.notes.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border-light">
          <ul className="space-y-1.5">
            {person.notes.map((note, i) => (
              <li key={i} className="text-sm text-ink-light flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">·</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default function FamilyLinePage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <FamilyLineContent params={params} />
    </Suspense>
  );
}

function FamilyLineContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const side = searchParams.get("side") as "dad" | "mom" | null;

  const line = familyLines.find((l) => l.id === id);
  if (!line) return notFound();

  const lineIndex = familyLines.findIndex((l) => l.id === id);
  const prevLine = lineIndex > 0 ? familyLines[lineIndex - 1] : null;
  const nextLine = lineIndex < familyLines.length - 1 ? familyLines[lineIndex + 1] : null;

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {side === "dad" || side === "mom" ? (
        <ScopedNav side={side} />
      ) : (
        <SiteNav />
      )}

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-5xl mb-4 block">{line.flag}</span>
            <p className="text-ink-muted tracking-[0.2em] uppercase text-xs mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              {line.country}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              The {line.name} Line
            </h1>
            <p className="text-xl text-ink-light italic">{line.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURED PHOTOS (if any exist for this line) ═══ */}
      {(() => {
        const linePhotos: { src: string; alt: string; person: string }[] = [];
        Object.entries(personPhotos).forEach(([name, photos]) => {
          const familyId = id === "oreilly" ? "oreilly" : id === "coffey" ? "coffey" : id === "linnerud" ? "linnerud" : id === "jakubicek" ? "jakubicek" : "";
          // Map person names to family lines
          const personLineMap: Record<string, string> = {
            'Edward Joseph "Bud" O\'Reilly': "oreilly",
            "Lyle Andrew Linnerud": "linnerud",
            "Sigvart S. Lee": "linnerud",
            "Berthea S. Lee": "linnerud",
          };
          if (personLineMap[name] === familyId) {
            photos.forEach(p => linePhotos.push({ ...p, person: name }));
          }
        });
        // Deduplicate by src
        const seen = new Set<string>();
        const unique = linePhotos.filter(p => {
          if (seen.has(p.src)) return false;
          seen.add(p.src);
          return true;
        });
        if (unique.length === 0) return null;
        return (
          <section className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex flex-wrap justify-center gap-6">
              {unique.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="text-center"
                >
                  <div className="border-2 border-border bg-white p-3 rounded-sm shadow-md inline-block">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="max-h-96 object-contain"
                      style={{ maxWidth: "360px" }}
                      onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
                    />
                  </div>
                  <p className="text-xs text-ink-muted mt-2 max-w-[240px] mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
                    {photo.alt}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* ═══ PEDIGREE CHART ═══ */}
      {pedigreeTrees[id] && (
        <div id="pedigree-chart" className="scroll-mt-20">
          <PedigreeChart
            tree={pedigreeTrees[id]}
            colorAccent={line.colorAccent}
          />
        </div>
      )}

      {/* ═══ THE VILLAGE ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            The Village
          </h2>
          <p className="text-ink-muted text-sm mb-6" style={{ fontFamily: "var(--font-sans)" }}>
            {line.village.name}, {line.village.region}, {line.village.country}
          </p>
          <p className="text-lg leading-relaxed text-ink-light">
            {line.village.description}
          </p>
        </motion.div>
      </section>

      {/* ═══ THE CROSSING ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Crossing
        </motion.h2>

        {line.crossing.map((crossing, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={i}
            className="mb-12 last:mb-0"
          >
            <div className="border border-border rounded-sm p-8 bg-white/30">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {crossing.person}
                  </h3>
                  <p className="text-ink-muted text-sm mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                    Age {crossing.age} · {crossing.year}
                  </p>
                </div>
                <div className="text-right" style={{ fontFamily: "var(--font-sans)" }}>
                  <p className="text-sm text-ink-muted">Ship</p>
                  <p className="text-lg font-semibold italic text-sepia">{crossing.ship}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                <div className="text-center">
                  <p className="text-ink-muted text-xs uppercase tracking-wider">From</p>
                  <p className="font-medium">{crossing.departed}</p>
                </div>
                <div className="flex-1 border-t border-dashed border-border relative">
                  <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-parchment px-2 text-gold">
                    ⚓
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-ink-muted text-xs uppercase tracking-wider">To</p>
                  <p className="font-medium">{crossing.arrivalPort}</p>
                </div>
              </div>

              <p className="text-ink-light leading-relaxed">{crossing.details}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ═══ GENERATIONS ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-2xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Generations
        </motion.h2>

        {line.generations.map((gen, gi) => (
          <div key={gi} className="mb-16 last:mb-0" id={`gen-${gi}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
              className="mb-6 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {gen.label}
                </h3>
                <div className="flex items-center gap-3 text-xs" style={{ fontFamily: "var(--font-sans)" }}>
                  <a href="#pedigree-chart" className="text-gold hover:text-gold-dark transition-colors flex items-center gap-1">
                    ↑ Back to Tree
                  </a>
                  <span className="text-border">|</span>
                  {familyLines.map((fl) => (
                    <Link
                      key={fl.id}
                      href={`/family/${fl.id}`}
                      className={`hover:text-gold transition-colors ${fl.id === id ? "text-gold font-semibold" : "text-ink-muted"}`}
                      title={fl.name}
                    >
                      {fl.flag}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="text-ink-muted text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                {gen.relation}
              </p>
            </motion.div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {gen.people.map((person, pi) => (
                <PersonCard key={pi} person={person} index={pi} />
              ))}
            </div>

            {gen.notes && gen.notes.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={0}
                className="mt-4 p-4 bg-cream/50 border border-border-light rounded-sm"
              >
                {gen.notes.map((note, ni) => (
                  <p key={ni} className="text-sm text-ink-muted italic">
                    {note}
                  </p>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </section>

      {/* ═══ STORIES ═══ */}
      {line.stories.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-border-light" />
            <span className="text-gold">✦</span>
            <div className="flex-1 h-px bg-border-light" />
          </div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-2xl font-bold mb-12 mt-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Stories
          </motion.h2>

          {/* Albert newspaper article — featured for Linnerud page */}
          {id === "linnerud" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
              className="mb-12"
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Albert — The Newspaper
              </h3>
              <div className="border border-border bg-white/50 rounded-sm overflow-hidden">
                <div className="p-4 border-b border-border-light">
                  <p className="text-xs text-ink-muted uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                    Belvidere Daily Republican · June 8, 1933
                  </p>
                  <p className="text-xl font-bold text-ink mt-1" style={{ fontFamily: "var(--font-display)" }}>
                    KILLED IN STORM
                  </p>
                  <p className="text-sm text-ink-muted mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                    Albert S. Linnerud · Age 20 · Chicago, Illinois
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-4">
                    <a href="/docs/linnerud/Albert-Linnerud-KILLED-IN-STORM-Belvidere-Daily-Republican-Jun8-1933.png" target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in hover:opacity-90 transition-opacity">
                      <img
                        src="/docs/linnerud/Albert-Linnerud-KILLED-IN-STORM-Belvidere-Daily-Republican-Jun8-1933.png"
                        alt="Albert Linnerud — KILLED IN STORM — Belvidere Daily Republican"
                        className="w-full object-contain border border-border-light"
                      />
                    </a>
                    <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                      Belvidere Daily Republican, Jun 8, 1933 — click to view full size
                    </p>
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <a href="/docs/linnerud/Albert-S-Linnerud-1913-1933-Gravestone-Jefferson-Prairie-Cemetery.png" target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in hover:opacity-90 transition-opacity">
                      <img
                        src="/docs/linnerud/Albert-S-Linnerud-1913-1933-Gravestone-Jefferson-Prairie-Cemetery.png"
                        alt="Albert S. Linnerud Gravestone"
                        className="w-full object-contain border border-border-light mb-3"
                      />
                    </a>
                    <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                      Gravestone — Jefferson Prairie Cemetery, Clinton, WI · click to view full size
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Special Lyle WWII story CTA for Linnerud page */}
          {id === "linnerud" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
              className="mb-12 p-6 border border-gold/30 bg-gold/5 rounded-sm"
            >
              <span className="text-2xl mb-2 block">⚓</span>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Lyle Linnerud — Full WWII Story
              </h3>
              <p className="text-ink-light mb-4">
                Lyle served 41 months in the U.S. Coast Guard during WWII. He crossed the Atlantic 6 times,
                the Pacific 8 times, survived a floating mine, and was at sea when the atomic bombs fell.
                He sailed 85,000 miles in approximately one year.
              </p>
              <Link
                href={`/lyle-story${side ? `?side=${side}` : ""}`}
                className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors text-sm"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Read the full story →
              </Link>
            </motion.div>
          )}

          {/* Lyle Conway CTA for Linnerud page */}
          {id === "linnerud" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="mb-12 p-6 border border-sepia/30 bg-sepia/5 rounded-sm"
            >
              <span className="text-2xl mb-2 block">🎭</span>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Lyle Conway — The Hollywood Puppeteer
              </h3>
              <p className="text-ink-light mb-4">
                Evelyn's son Lyle Conway became one of Hollywood's most celebrated puppet and creature designers.
                He sculpted Miss Piggy for The Muppet Show, built the Skeksis for The Dark Crystal,
                and created Audrey II for Little Shop of Horrors — earning an Academy Award nomination.
                The Muppet character "Lyle the Dog" was named after him.
              </p>
              <Link
                href={`/lyle-conway${side ? `?side=${side}` : ""}`}
                className="inline-flex items-center gap-2 text-sepia font-semibold hover:opacity-75 transition-colors text-sm"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Read Lyle Conway's full story →
              </Link>
            </motion.div>
          )}

          {line.stories.map((story, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {story.title}
              </h3>

              {story.pullQuote && (
                <div className="pull-quote mb-6">
                  <p>&ldquo;{story.pullQuote}&rdquo;</p>
                </div>
              )}

              <p className="text-ink-light leading-relaxed text-lg">{story.content}</p>
            </motion.div>
          ))}
        </section>
      )}

      {/* ═══ DOCUMENT GALLERY ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>
        <DocumentGallery
          personDocs={getDocsByFamily(id)}
          title="Primary Source Documents"
        />
      </section>

      {/* ═══ NAVIGATION ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <div className="flex justify-between items-center mt-12" style={{ fontFamily: "var(--font-sans)" }}>
          {prevLine ? (
            <Link
              href={`/family/${prevLine.id}${side ? `?side=${side}` : ""}`}
              className="text-sm text-ink-muted hover:text-gold transition-colors"
            >
              ← {prevLine.flag} {prevLine.name}
            </Link>
          ) : (
            <Link href={side ? `/${side}` : "/"} className="text-sm text-ink-muted hover:text-gold transition-colors">
              ← Home
            </Link>
          )}

          <Link href={side ? `/${side}` : "/"} className="text-sm text-ink-muted hover:text-gold transition-colors">
            {side ? (side === "dad" ? "Dad's Side" : "Mom's Side") : "All Lines"}
          </Link>

          {nextLine ? (
            <Link
              href={`/family/${nextLine.id}${side ? `?side=${side}` : ""}`}
              className="text-sm text-ink-muted hover:text-gold transition-colors"
            >
              {nextLine.flag} {nextLine.name} →
            </Link>
          ) : (
            <Link href={side ? `/${side}` : "/tree"} className="text-sm text-ink-muted hover:text-gold transition-colors">
              {side ? "← Back to Home" : "Full Tree →"}
            </Link>
          )}
        </div>
      </section>

      {side === "dad" || side === "mom" ? (
        <ScopedFooter side={side} />
      ) : (
        <SiteFooter />
      )}
    </main>
  );
}
