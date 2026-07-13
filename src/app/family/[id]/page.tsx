"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { familyLines } from "@/data/families";
import type { Person } from "@/data/families";
import { notFound } from "next/navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={index}
      className="border border-border rounded-sm p-6 bg-white/50 hover:bg-white transition-colors"
    >
      <h4 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
        {person.name}
      </h4>
      {person.birthName && (
        <p className="text-ink-muted text-sm italic mb-3">
          Born: {person.birthName}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4" style={{ fontFamily: "var(--font-sans)" }}>
        {person.born && (
          <div className="text-sm">
            <span className="text-ink-muted">Born:</span>{" "}
            <span className="text-ink">{person.born}</span>
          </div>
        )}
        {person.bornPlace && (
          <div className="text-sm">
            <span className="text-ink-muted">Place:</span>{" "}
            <span className="text-ink">{person.bornPlace}</span>
          </div>
        )}
        {person.died && (
          <div className="text-sm">
            <span className="text-ink-muted">Died:</span>{" "}
            <span className="text-ink">{person.died}</span>
          </div>
        )}
        {person.occupation && (
          <div className="text-sm">
            <span className="text-ink-muted">Occupation:</span>{" "}
            <span className="text-ink">{person.occupation}</span>
          </div>
        )}
        {person.spouse && (
          <div className="text-sm">
            <span className="text-ink-muted">Spouse:</span>{" "}
            <span className="text-ink">{person.spouse}</span>
          </div>
        )}
        {person.ship && (
          <div className="text-sm">
            <span className="text-ink-muted">Ship:</span>{" "}
            <span className="text-ink italic">{person.ship}</span>
          </div>
        )}
        {person.immigrated && (
          <div className="text-sm">
            <span className="text-ink-muted">Immigrated:</span>{" "}
            <span className="text-ink">{person.immigrated}</span>
          </div>
        )}
        {person.physical && (
          <div className="text-sm">
            <span className="text-ink-muted">Physical:</span>{" "}
            <span className="text-ink">{person.physical}</span>
          </div>
        )}
        {person.burial && (
          <div className="text-sm col-span-2">
            <span className="text-ink-muted">Burial:</span>{" "}
            <span className="text-ink">{person.burial}</span>
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
  const { id } = use(params);
  const line = familyLines.find((l) => l.id === id);
  if (!line) return notFound();

  const lineIndex = familyLines.findIndex((l) => l.id === id);
  const prevLine = lineIndex > 0 ? familyLines[lineIndex - 1] : null;
  const nextLine = lineIndex < familyLines.length - 1 ? familyLines[lineIndex + 1] : null;

  return (
    <main className="min-h-screen">
      {/* ═══ NAVIGATION BAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
            ← Home
          </Link>
          <div className="flex items-center gap-4 text-sm">
            {familyLines.map((l) => (
              <Link
                key={l.id}
                href={`/family/${l.id}`}
                className={`hidden md:block transition-colors ${
                  l.id === id ? "text-gold font-medium" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.flag} {l.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
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
          <div key={gi} className="mb-16 last:mb-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
              className="mb-6"
            >
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {gen.label}
              </h3>
              <p className="text-ink-muted text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                {gen.relation}
              </p>
            </motion.div>

            <div className="space-y-4">
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
          <div className="heritage-divider">
            <span className="text-gold">✦</span>
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

      {/* ═══ NAVIGATION ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <div className="flex justify-between items-center mt-12" style={{ fontFamily: "var(--font-sans)" }}>
          {prevLine ? (
            <Link
              href={`/family/${prevLine.id}`}
              className="text-sm text-ink-muted hover:text-gold transition-colors"
            >
              ← {prevLine.flag} {prevLine.name}
            </Link>
          ) : (
            <Link href="/" className="text-sm text-ink-muted hover:text-gold transition-colors">
              ← Home
            </Link>
          )}

          <Link href="/" className="text-sm text-ink-muted hover:text-gold transition-colors">
            All Lines
          </Link>

          {nextLine ? (
            <Link
              href={`/family/${nextLine.id}`}
              className="text-sm text-ink-muted hover:text-gold transition-colors"
            >
              {nextLine.flag} {nextLine.name} →
            </Link>
          ) : (
            <Link href="/tree" className="text-sm text-ink-muted hover:text-gold transition-colors">
              Full Tree →
            </Link>
          )}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border-light py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink-muted text-xs" style={{ fontFamily: "var(--font-sans)" }}>
            Compiled July 2026 · Primary source documentation
          </p>
        </div>
      </footer>
    </main>
  );
}
