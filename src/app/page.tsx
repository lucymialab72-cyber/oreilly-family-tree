"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { familyLines, immigrationTimeline } from "@/data/families";

// ═══ TOP NAV ═══
function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between" style={{ fontFamily: "var(--font-sans)" }}>
        <span className="text-sm font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
          O&apos;Reilly Family Tree
        </span>
        <div className="flex items-center gap-6 text-sm">
          {familyLines.map((l) => (
            <Link key={l.id} href={`/family/${l.id}`} className="hidden md:block text-ink-muted hover:text-ink transition-colors">
              {l.flag} {l.name}
            </Link>
          ))}
          <Link
            href="/tree"
            className="text-gold font-semibold hover:text-gold-light transition-colors flex items-center gap-1"
          >
            🌳 <span>Family Tree</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopNav />
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2416' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="text-center max-w-4xl relative z-10"
        >
          <p className="text-ink-muted tracking-[0.3em] uppercase text-sm mb-6" style={{ fontFamily: "var(--font-sans)" }}>
            A Heritage Document
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            The O&apos;Reilly
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Family Tree
          </h1>

          <div className="heritage-divider max-w-md mx-auto">
            <span className="text-gold text-lg">✦</span>
          </div>

          <p className="text-xl md:text-2xl text-ink-light mt-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-serif)" }}>
            Four countries. Six generations. One family.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 text-3xl">
            <span>🇮🇪</span>
            <span className="text-border">·</span>
            <span>🇳🇴</span>
            <span className="text-border">·</span>
            <span>🇨🇿</span>
            <span className="text-border">·</span>
            <span>🇺🇸</span>
          </div>

          <p className="text-ink-muted mt-12 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Ireland · Norway · Czech Republic · Chicago
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/tree"
              className="px-8 py-3 bg-gold text-white font-semibold rounded-sm hover:bg-gold-dark transition-colors text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              🌳 View Full Family Tree
            </Link>
            <Link
              href="/family/oreilly"
              className="px-8 py-3 border border-border bg-white/50 hover:bg-white rounded-sm transition-colors text-sm text-ink"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Explore the Lines →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 text-ink-muted"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
              <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ═══ INTRODUCTION ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
        >
          <p className="text-lg md:text-xl leading-relaxed text-ink-light mb-8">
            Between 1882 and 1915, eight people left their homes in Ireland, Norway, and the
            Czech lands. They crossed the Atlantic on steamships — the Kronprinz Wilhelm, the
            Caronia, the Ivernia, the Arabic, the New York. They carried almost nothing. They
            knew almost no one.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-ink-light mb-8">
            They all ended up in Chicago.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-ink-light">
            Over three generations, their families converged — on the same streets, in the same
            parishes, at the same stockyards and railroad yards. An Irish cop&apos;s granddaughter
            married a Norwegian servant girl&apos;s grandson. A Kerry farmer&apos;s son raised his
            family one block from a Cork immigrant&apos;s boy. Two Czech teenagers who sailed on
            the same famous ship a decade apart found each other in Pilsen.
          </p>
        </motion.div>

        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-lg md:text-xl leading-relaxed text-ink-light"
        >
          This document traces every line. Every ship. Every address. Every census record. From
          a farmhouse in Meelin, Cork to a stone cottage in Ballydarrig, Kerry. From the Linnerud
          farm in Hedmark to the vineyards of Lipov, Moravia. All the way to a family on
          Chicago&apos;s South Side.
        </motion.p>
      </section>

      {/* ═══ IMMIGRATION TIMELINE ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Crossings
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="text-center text-ink-muted mb-16 text-lg"
        >
          Eight immigrants. Thirty-three years. One city.
        </motion.p>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {immigrationTimeline.map((event, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              custom={i}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-parchment" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-gold font-bold text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                  {event.year}
                </span>
                <h3 className="text-lg font-semibold mt-1">
                  {event.flag} {event.person}
                </h3>
                <p className="text-ink-muted text-sm mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                  {event.from} → {event.to}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ FAMILY LINES ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Four Lines
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="text-center text-ink-muted mb-16 text-lg"
        >
          Each grandparent traces back to a different country.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {familyLines.map((line, i) => (
            <motion.div
              key={line.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
            >
              <Link href={`/family/${line.id}`}>
                <div
                  className="group relative border border-border rounded-sm p-8 hover:border-gold transition-all duration-300 cursor-pointer bg-white/50 hover:bg-white"
                  style={{ minHeight: "280px" }}
                >
                  {/* Country accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-sm"
                    style={{ backgroundColor: line.colorAccent }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-4xl mb-2 block">{line.flag}</span>
                      <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                        {line.name}
                      </h3>
                      <p className="text-ink-muted text-sm mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                        {line.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-ink-light text-sm leading-relaxed mt-4">
                    {line.village.description.slice(0, 200)}...
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all" style={{ fontFamily: "var(--font-sans)" }}>
                    <span>Read the full story</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CONVERGENCE ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Convergence
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="text-center text-ink-muted mb-16 text-lg"
        >
          How eight immigrant families became one.
        </motion.p>

        <div className="pull-quote">
          <p>
            The Coffey family lived at 7748 S. Langley Avenue. Edward O&apos;Reilly&apos;s 1942 draft card
            lists 7341 S. St. Lawrence Avenue. These streets are one block apart.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="mt-12"
        >
          <p className="text-lg leading-relaxed text-ink-light mb-8">
            All roads led to Chicago&apos;s South Side. The Irish families settled in Chatham and
            Grand Crossing. The Norwegians made their home in Marquette Park and Chicago Lawn.
            The Czechs rooted in Pilsen. Over decades, these neighborhoods — separated by just
            a few miles of city blocks — brought the families together.
          </p>

          <div className="space-y-6 mt-12">
            {[
              { year: 1911, text: "Andrew Linnerud marries Anna Lee — Norwegian farm boy meets Norwegian-American girl in Boone County" },
              { year: 1913, text: "John Coffey marries Julia Sheehan — two Kerry immigrants unite on Chicago's South Side" },
              { year: 1918, text: "William O'Reilly marries Anna Madden — Cork meets Tipperary in wartime Chicago" },
              { year: 1922, text: "Thomas Jakubicek marries Marie Melka — two Kronprinz Wilhelm passengers find each other in Pilsen" },
              { year: "~1948", text: "Edward O'Reilly marries Eileen Coffey — the boy from one block over marries the girl from Kerry stock" },
              { year: 1951, text: "Lyle Linnerud marries Helen Jakubicek — the servant girl's grandson marries the Moravian printer's daughter" },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
                className="flex items-start gap-4"
              >
                <span className="text-gold font-bold text-lg min-w-[60px]" style={{ fontFamily: "var(--font-display)" }}>
                  {event.year}
                </span>
                <p className="text-ink-light">{event.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ AL CAPONE CONNECTION ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="border border-border-light rounded-sm p-8 bg-white/30">
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            A Neighborhood Note
          </h3>
          <p className="text-ink-light leading-relaxed">
            Al Capone&apos;s Chicago home was at 7244 S. Prairie Avenue. John J. Coffey&apos;s 1918 WWI
            draft card lists his address as 7141 Vernon Avenue — literally one block away. The
            Coffey household at 7748 S. Langley was six blocks from Capone. John Coffey was a
            railroad freight clerk raising seven children in the same neighborhood as the most
            famous gangster in American history. Michael Madden was a Chicago cop during the
            same era.
          </p>
        </div>
      </section>

      {/* ═══ NAVIGATION ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <div className="text-center mt-12">
          <p className="text-ink-muted mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            Explore each family line in detail
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {familyLines.map((line) => (
              <Link
                key={line.id}
                href={`/family/${line.id}`}
                className="px-6 py-3 border border-border rounded-sm hover:border-gold hover:bg-white transition-all text-sm"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {line.flag} {line.name}
              </Link>
            ))}
            <Link
              href="/tree"
              className="px-6 py-3 border border-gold bg-gold/5 rounded-sm hover:bg-gold/10 transition-all text-sm text-gold-dark font-medium"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              🌳 Full Family Tree
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-border-light py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink-muted text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Compiled July 2026 · 133 primary source documents · 4 countries · 6 generations
          </p>
          <p className="text-ink-muted text-xs mt-2" style={{ fontFamily: "var(--font-sans)" }}>
            Sources: U.S. Census (1900-1950) · Irish National Archives · Norwegian Digital Archives ·
            Ellis Island Records · Cook County Vital Records · Newspapers.com · FamilySearch ·
            Find a Grave · irishgenealogy.ie
          </p>
          <p className="text-ink-muted text-xs mt-4" style={{ fontFamily: "var(--font-sans)" }}>
            Researched &amp; built for Dave O&apos;Reilly
          </p>
        </div>
      </footer>
    </main>
  );
}
