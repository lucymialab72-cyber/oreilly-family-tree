"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { familyLines } from "@/data/families";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScopedNav from "@/components/ScopedNav";
import ScopedFooter from "@/components/ScopedFooter";

const SIDE_FAMILIES: Record<string, string[]> = {
  dad: ["oreilly", "coffey"],
  mom: ["linnerud", "jakubicek"],
};

// "all" familyId stories are shared — show for dad only to avoid duplication
const SIDE_ALL_STORIES: Record<string, boolean> = {
  dad: false, // "The Convergence" mentions all families — skip on filtered views
  mom: false,
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

// Collect all stories with their family line context
const allStories = familyLines.flatMap((line) =>
  line.stories.map((story) => ({
    ...story,
    familyId: line.id,
    familyName: line.name,
    flag: line.flag,
    colorAccent: line.colorAccent,
  }))
);

// Additional standalone stories not in the family data
const bonusStories = [
  {
    title: "Al Capone's Neighbor",
    content:
      "Al Capone's Chicago home was at 7244 S. Prairie Avenue. John J. Coffey's 1918 WWI draft card lists his address as 7141 Vernon Avenue — literally one block away. The Coffey household at 7748 S. Langley was six blocks from Capone. John Coffey was a railroad freight clerk raising seven children in the same neighborhood as the most famous gangster in American history. Meanwhile, Patrick Joseph O'Reilly — great-grandfather on the O'Reilly side (Generation 3) — was living at 727 E 50th Street, just a few miles north on the South Side.",
    pullQuote:
      "A railroad clerk, a Chicago cop, and America's most famous gangster — all within six blocks.",
    familyId: "coffey",
    familyName: "Coffey & O'Reilly",
    flag: "🇮🇪",
    colorAccent: "#1B4965",
  },
  {
    title: "Lyle Conway — The Puppeteer",
    content:
      "Andrea's first cousin Lyle Conway — son of Evelyn Bernice Linnerud Conway — became one of Hollywood's most acclaimed puppet and creature designers. He sculpted Miss Piggy for The Muppet Show. He created the terrifying Audrey II plant puppet for Little Shop of Horrors, earning an Academy Award nomination. He was the design and fabrication supervisor on Jim Henson's The Dark Crystal, bringing Aughra and the Skeksis to life. He created Jack Pumpkinhead for Return to Oz. The Muppet character 'Lyle the Dog' was literally named after him. He was found dead in his California apartment in March 2026. Those who knew him called him 'a very private man.'",
    pullQuote: "The Muppet character 'Lyle the Dog' was named after him.",
    familyId: "linnerud",
    familyName: "Linnerud",
    flag: "🇳🇴",
    colorAccent: "#002868",
  },
  {
    title: "The Convergence",
    content:
      "All roads led to Chicago's South Side. The Irish families settled in Chatham and Grand Crossing. The Norwegians made their home in Marquette Park and Chicago Lawn. The Czechs rooted in Pilsen. Over decades, these neighborhoods — separated by just a few miles of city blocks — brought the families together. An Irish cop's granddaughter married a Norwegian servant girl's grandson. A Kerry farmer's son raised his family one block from a Kilkenny immigrant's boy. Two Czech teenagers who sailed on the same famous ship a decade apart found each other in Pilsen. By the 1950s, all four lines had converged into one family.",
    pullQuote:
      "Four countries. Six generations. Separated by just a few miles of city blocks.",
    familyId: "all",
    familyName: "All Lines",
    flag: "🇺🇸",
    colorAccent: "#B8860B",
  },
];

const stories = [...allStories, ...bonusStories];

function StoriesPageInner() {
  const searchParams = useSearchParams();
  const side = searchParams.get("side") as "dad" | "mom" | null;
  const sideFilter = side && SIDE_FAMILIES[side] ? SIDE_FAMILIES[side] : null;

  const filteredStories = sideFilter
    ? stories.filter((s) => sideFilter.includes(s.familyId))
    : stories;

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      {side ? <ScopedNav side={side} /> : <SiteNav />}

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-5xl mb-6 block">📖</span>
          <p
            className="text-ink-muted tracking-[0.3em] uppercase text-xs mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            The Narrative Moments
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Stories
          </h1>
          <p
            className="text-xl text-ink-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Every family tree is made of dates and names. But the stories between the
            lines — the crossings, the coincidences, the near-misses — are what make
            a family real.
          </p>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>
      </div>

      {/* Stories */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        {filteredStories.map((story, i) => (
          <motion.article
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={i % 4}
            className="mb-20 last:mb-8"
          >
            {/* Family badge */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: story.colorAccent }}
              />
              <span
                className="text-xs text-ink-muted uppercase tracking-widest font-semibold"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {story.flag} {story.familyName}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {story.title}
            </h2>

            {/* Pull quote */}
            {story.pullQuote && (
              <div className="pull-quote mb-6">
                <p>&ldquo;{story.pullQuote}&rdquo;</p>
              </div>
            )}

            {/* Content */}
            <p className="text-lg leading-relaxed text-ink-light">
              {story.content}
            </p>

            {/* Link to family page or dedicated story page */}
            {story.familyId !== "all" && (
              <Link
                href={
                  story.title === "85,000 Miles at Sea"
                    ? "/lyle-story"
                    : story.title === "Lyle Conway — The Puppeteer"
                    ? "/lyle-conway"
                    : `/family/${story.familyId}`
                }
                className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4 hover:text-gold-dark transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {story.title === "Lyle Conway — The Puppeteer"
                  ? "See his full career & creations →"
                  : `Read the full ${story.familyName} line →`}
              </Link>
            )}

            {/* Divider between stories */}
            {i < filteredStories.length - 1 && (
              <div className="heritage-divider mt-16">
                <span className="text-gold text-xs">✦</span>
              </div>
            )}
          </motion.article>
        ))}
      </section>

      {/* Lyle WWII CTA — only for mom's side or full view */}
      {side !== "dad" && <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="p-8 border border-gold/30 bg-gold/5 rounded-sm text-center"
        >
          <span className="text-4xl mb-4 block">⚓</span>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lyle Linnerud — The Full WWII Story
          </h3>
          <p className="text-ink-light mb-6 max-w-xl mx-auto">
            41 months in the U.S. Coast Guard. 85,000 miles at sea. The atomic
            bombs fell while he crossed the Pacific. A floating mine. A crow&apos;s
            nest 100 feet above the ocean. His full story has its own page.
          </p>
          <Link
            href="/lyle-story"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-white font-semibold rounded-sm hover:bg-gold-dark transition-colors text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Read the Full Story →
          </Link>
        </motion.div>
      </section>}

      {/* Navigation */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <div
          className="flex justify-between items-center mt-12"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Link
            href={side ? `/${side}` : "/"}
            className="text-sm text-ink-muted hover:text-gold transition-colors"
          >
            ← {side === "dad" ? "Dad\u2019s Side" : side === "mom" ? "Mom\u2019s Side" : "Home"}
          </Link>
          <Link
            href={side ? `/map?side=${side}` : "/map"}
            className="text-sm text-ink-muted hover:text-gold transition-colors"
          >
            🗺️ Map
          </Link>
          <Link
            href={side ? `/documents?side=${side}` : "/tree"}
            className="text-sm text-ink-muted hover:text-gold transition-colors"
          >
            {side ? "🗂️ Documents" : "🌳 Full Tree →"}
          </Link>
        </div>
      </section>

      {side ? <ScopedFooter side={side} /> : <SiteFooter />}
    </main>
  );
}

export default function StoriesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-parchment" />}>
      <StoriesPageInner />
    </Suspense>
  );
}
