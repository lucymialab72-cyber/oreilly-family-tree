"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface TreePerson {
  name: string;
  years?: string;
  origin?: string;
  flag?: string;
  highlight?: boolean;
  note?: string;
}

interface TreeCouple {
  left: TreePerson;
  right: TreePerson;
  married?: string;
}

function CoupleCard({ couple, index }: { couple: TreeCouple; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={index}
      className="flex flex-col md:flex-row items-center gap-2 md:gap-4"
    >
      <PersonBadge person={couple.left} />
      <div className="text-center">
        <span className="text-gold text-xs">✦</span>
        {couple.married && (
          <p className="text-[10px] text-ink-muted" style={{ fontFamily: "var(--font-sans)" }}>
            m. {couple.married}
          </p>
        )}
      </div>
      <PersonBadge person={couple.right} />
    </motion.div>
  );
}

function PersonBadge({ person }: { person: TreePerson }) {
  return (
    <div
      className={`border rounded-sm px-4 py-3 text-center min-w-[180px] transition-colors ${
        person.highlight
          ? "border-gold bg-gold/5"
          : "border-border bg-white/50 hover:bg-white"
      }`}
    >
      <p className="font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
        {person.flag && <span className="mr-1">{person.flag}</span>}
        {person.name}
      </p>
      {person.years && (
        <p className="text-[11px] text-ink-muted mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>
          {person.years}
        </p>
      )}
      {person.origin && (
        <p className="text-[10px] text-ink-muted italic mt-0.5">{person.origin}</p>
      )}
      {person.note && (
        <p className="text-[10px] text-gold mt-1 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
          {person.note}
        </p>
      )}
    </div>
  );
}

function ConnectorDown() {
  return (
    <div className="flex justify-center py-2">
      <div className="w-px h-8 bg-border" />
    </div>
  );
}

function BranchSplit() {
  return (
    <div className="flex justify-center py-2">
      <div className="relative w-full max-w-lg">
        <div className="absolute left-1/4 right-1/4 top-0 h-px bg-border" />
        <div className="absolute left-1/4 top-0 w-px h-6 bg-border" />
        <div className="absolute right-1/4 top-0 w-px h-6 bg-border" />
        <div className="h-6" />
      </div>
    </div>
  );
}

export default function TreePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
            ← Home
          </Link>
          <span className="text-sm font-medium text-gold">Full Family Tree</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            The Complete Tree
          </h1>
          <p className="text-ink-muted text-lg">
            Six generations. Four countries. One family.
          </p>
        </motion.div>
      </section>

      {/* Tree */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        {/* ═══ CURRENT GENERATION — THE O'REILLY BROTHERS ═══ */}
        <div className="mb-8">
          <p className="text-center text-xs text-gold uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
            The Current Generation
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mb-6">
            {/* Dave's Family */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <CoupleCard
                index={0}
                couple={{
                  left: { name: "David Lyle O'Reilly", flag: "🇺🇸", highlight: true, note: "You are here" },
                  right: { name: "Michelle O'Reilly" },
                }}
              />
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {["Landon", "Chace", "Kaylee"].map((child) => (
                  <div key={child} className="border border-border-light rounded-sm px-3 py-1.5 text-center bg-white/50 text-sm">
                    <p className="font-medium" style={{ fontFamily: "var(--font-display)" }}>{child}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mike's Family */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <CoupleCard
                index={0}
                couple={{
                  left: { name: "Michael Edward O'Reilly" },
                  right: { name: "Michaela O'Reilly" },
                }}
              />
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {["Elliot", "Simon", "Quentin", "Conrad"].map((child) => (
                  <div key={child} className="border border-border-light rounded-sm px-3 py-1.5 text-center bg-white/50 text-sm">
                    <p className="font-medium" style={{ fontFamily: "var(--font-display)" }}>{child}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Adam's Family */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <CoupleCard
                index={0}
                couple={{
                  left: { name: "Adam Michael O'Reilly" },
                  right: { name: "Marianela O'Reilly" },
                }}
              />
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {["Max", "Skyler"].map((child) => (
                  <div key={child} className="border border-border-light rounded-sm px-3 py-1.5 text-center bg-white/50 text-sm">
                    <p className="font-medium" style={{ fontFamily: "var(--font-display)" }}>{child}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <p className="text-center text-[10px] text-ink-muted italic mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            9 grandchildren: Landon, Chace &amp; Kaylee · Elliot, Simon, Quentin &amp; Conrad · Max &amp; Skyler
          </p>
        </div>

        <ConnectorDown />

        {/* ═══ PARENTS ═══ */}
        <div className="flex justify-center mb-4">
          <CoupleCard
            index={1}
            couple={{
              left: { name: "Terrence O'Reilly", note: "Dave's Dad" },
              right: { name: "Andrea O'Reilly", note: "Dave's Mom (née Linnerud)" },
            }}
          />
        </div>

        {/* ═══ PARENTS' SIBLINGS ═══ */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
          <div className="text-center">
            <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-sans)" }}>
              Terrence&apos;s siblings (children of Edward &amp; Eileen)
            </p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {["Mary Sue", "Joanne", "Tom", "Terrence", "Patrick", "Hugh"].map((name) => (
                <div key={name} className={`border rounded-sm px-2 py-1 text-xs ${name === "Terrence" ? "border-gold bg-gold/5 font-semibold" : "border-border-light bg-white/50"}`}>
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-sans)" }}>
              Andrea&apos;s siblings (children of Lyle &amp; Helen)
            </p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {["Alan", "Calvin", "Cary", "Cheryl", "Andrea"].map((name) => (
                <div key={name} className={`border rounded-sm px-2 py-1 text-xs ${name === "Andrea" ? "border-gold bg-gold/5 font-semibold" : "border-border-light bg-white/50"}`}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <BranchSplit />

        {/* ═══ GRANDPARENTS ═══ */}
        {/* PATERNAL */}
        <div className="mb-12">
          <p className="text-center text-xs text-gold uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
            🇮🇪 Paternal Side — O&apos;Reilly &amp; Coffey
          </p>
          <div className="flex justify-center mb-4">
            <CoupleCard
              index={2}
              couple={{
                left: {
                  name: 'Edward J. "Bud" O\'Reilly',
                  years: "1921–2002",
                  origin: "Chicago (Cork heritage)",
                  flag: "🇮🇪",
                  note: "WWII Veteran",
                },
                right: {
                  name: "Eileen M. Coffey",
                  years: "1923–2013",
                  origin: "Chicago (Kerry parents)",
                  flag: "🇮🇪",
                },
                married: "~1948",
              }}
            />
          </div>
          <ConnectorDown />
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-sans)" }}>O&apos;Reilly Line</p>
              <CoupleCard index={3} couple={{ left: { name: "Patrick J. O'Reilly", years: "1883–1972", origin: "Thomastown, Kilkenny 🇮🇪" }, right: { name: "Catherine L. Sheehy", years: "1894–1990", origin: "Chicago" }, married: "1918" }} />
              <ConnectorDown />
              <CoupleCard index={4} couple={{ left: { name: "Edward O'Reilly", years: "1839–1892", origin: "Thomastown, Kilkenny 🇮🇪" }, right: { name: "Johanna Hanrahan", years: "1858–1949", origin: "Kilkenny 🇮🇪" }, married: "1879" }} />
              <ConnectorDown />
              <CoupleCard index={5} couple={{ left: { name: "James O'Reilly", origin: "Thomastown, Kilkenny 🇮🇪" }, right: { name: "Ellen Walsh", origin: "Thomastown, Kilkenny 🇮🇪" } }} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-sans)" }}>Coffey Line</p>
              <CoupleCard index={6} couple={{ left: { name: "John J. Coffey", years: "1875–1957", origin: "Ballydarrig, Kerry 🇮🇪", note: "WWI Vet" }, right: { name: "Julia T. Sheehan", years: "1889–1965", origin: "Dromod, Waterville, Kerry 🇮🇪" }, married: "1913" }} />
              <ConnectorDown />
              <CoupleCard index={7} couple={{ left: { name: "Jeremiah Coffey", years: "~1836–?", origin: "Kerry 🇮🇪" }, right: { name: "Janet Clifford", origin: "Kerry 🇮🇪" } }} />
              <ConnectorDown />
              <CoupleCard index={8} couple={{ left: { name: "Patrick Sheehan", years: "~1846–?", origin: "Kerry 🇮🇪" }, right: { name: "Mary Fitzgerald", years: "?–1931", origin: "Kerry 🇮🇪" } }} />
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="h-px w-full max-w-2xl bg-border-light" />
        </div>

        {/* MATERNAL */}
        <div className="mb-8">
          <p className="text-center text-xs text-gold uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
            🇳🇴 🇨🇿 Maternal Side — Linnerud &amp; Jakubicek
          </p>
          <p className="text-center text-[11px] text-ink-muted mb-4 italic" style={{ fontFamily: "var(--font-sans)" }}>
            Andrea O&apos;Reilly (née Linnerud) — youngest daughter of Lyle &amp; Helen Linnerud.
          </p>
          <div className="flex justify-center mb-4">
            <CoupleCard
              index={2}
              couple={{
                left: {
                  name: "Lyle A. Linnerud",
                  years: "1922–2015",
                  origin: "Chicago",
                  flag: "🇳🇴",
                  note: "USCG WWII · 85,000 mi",
                },
                right: {
                  name: "Helen M. Jakubicek",
                  years: "1925–2010",
                  origin: "Chicago",
                  flag: "🇨🇿",
                },
                married: "1951",
              }}
            />
          </div>
          <p className="text-center text-[10px] text-ink-muted italic mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            Children: Alan, Calvin, twins Cary &amp; Cheryl, Andrea (youngest). Andrea is Dave&apos;s mom.
          </p>
          <ConnectorDown />
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-sans)" }}>Linnerud Line</p>
              <CoupleCard index={9} couple={{ left: { name: "Andrew O. Linnerud", years: "1885–1948", origin: "Vinger, Hedmark 🇳🇴", note: "The servant girl's son" }, right: { name: "Anna Gudrun Lee", years: "1893–1987", origin: "Boone County, IL" }, married: "1911" }} />
              <ConnectorDown />
              <div className="flex flex-col items-center gap-1">
                <PersonBadge person={{ name: "Marthe Arnesdatter", origin: "Vinger, Norway 🇳🇴", note: "Unmarried servant — Andrew's mother" }} />
                <p className="text-[10px] text-ink-muted italic">Birth father: Anders Pedersen</p>
              </div>
              <ConnectorDown />
              <CoupleCard index={10} couple={{ left: { name: "Sigvart S. Lee", years: "1859–1943", origin: "Vinger, Hedmark 🇳🇴" }, right: { name: "Berthea Arneson", years: "~1862–1921", origin: "Vinger, Hedmark 🇳🇴" }, married: "1892" }} />
              <p className="text-[10px] text-ink-muted italic text-center mt-1">
                Deepest: <strong>Sigri Andersdatter</strong> (b. ~1797) — Dave&apos;s 5× great-grandmother
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] text-ink-muted uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-sans)" }}>Jakubicek Line</p>
              <CoupleCard index={11} couple={{ left: { name: "Thomas Jakubicek", years: "1886–1963", origin: "Lipov, Moravia 🇨🇿" }, right: { name: "Marie Melka", years: "1896–1989", origin: "Meremice, Bohemia 🇨🇿" }, married: "1922" }} />
              <ConnectorDown />
              <CoupleCard index={12} couple={{ left: { name: "George Jakubicek", origin: "Moravia 🇨🇿" }, right: { name: "Marie Jakubicek", origin: "Moravia 🇨🇿" } }} />
              <ConnectorDown />
              <CoupleCard index={13} couple={{ left: { name: "Ludvik Melka", origin: "Czech Republic 🇨🇿" }, right: { name: "Klara Marc", origin: "Czech Republic 🇨🇿" } }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          {[
            { number: "40+", label: "Ancestors Identified" },
            { number: "4", label: "Countries of Origin" },
            { number: "6", label: "Generations Deep" },
            { number: "133", label: "Source Documents" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
            >
              <p className="text-3xl font-bold text-gold" style={{ fontFamily: "var(--font-display)" }}>
                {stat.number}
              </p>
              <p className="text-sm text-ink-muted mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ DEEPEST LINES TABLE ═══ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
          How Deep Each Line Goes
        </h2>

        <div className="border border-border rounded-sm overflow-hidden">
          <table className="w-full text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            <thead>
              <tr className="bg-cream/50 border-b border-border">
                <th className="text-left px-4 py-3 font-semibold">Line</th>
                <th className="text-left px-4 py-3 font-semibold">Depth</th>
                <th className="text-left px-4 py-3 font-semibold">Earliest Ancestor</th>
                <th className="text-left px-4 py-3 font-semibold">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                { line: "🇳🇴 Lee/Sørensen", depth: "6 gen", ancestor: "Sigri Andersdatter", year: "~1797", best: true },
                { line: "🇮🇪 O'Reilly", depth: "5 gen", ancestor: "James O'Reilly & Ellen Walsh, Thomastown", year: "pre-1839" },
                { line: "🇮🇪 Sheehy/Woulfe", depth: "3 gen", ancestor: "Richard J. Sheehy & Anna Woulfe", year: "~1860" },
                { line: "🇮🇪 Coffey", depth: "4 gen", ancestor: "Jeremiah Coffey, Ballydarrig", year: "~1841" },
                { line: "🇮🇪 Sheehan", depth: "3 gen", ancestor: "Florence & Debbie Sheehan", year: "~1849" },
                { line: "🇳🇴 Linnerud", depth: "3 gen", ancestor: "Anders Pedersen", year: "~1860s" },
                { line: "🇨🇿 Jakubicek", depth: "3 gen", ancestor: "George & Marie Jakubicek", year: "~1860s" },
                { line: "🇨🇿 Melka", depth: "3 gen", ancestor: "Ludvik & Klara Melka", year: "~1870s" },
              ].map((row, i) => (
                <tr key={i} className={`border-b border-border-light ${row.best ? "bg-gold/5" : ""}`}>
                  <td className="px-4 py-3 font-medium">{row.line}</td>
                  <td className="px-4 py-3">{row.depth}</td>
                  <td className="px-4 py-3">{row.ancestor}</td>
                  <td className="px-4 py-3 text-gold font-medium">{row.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-ink-muted text-xs mt-4" style={{ fontFamily: "var(--font-sans)" }}>
          Deepest confirmed ancestor: Sigri Andersdatter, born ~1797 in Norway — Dave&apos;s 5× great-grandmother
        </p>
      </section>

      {/* ═══ CEMETERIES ═══ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
          Where They Rest
        </h2>

        <div className="space-y-4">
          {[
            { cemetery: "Holy Sepulchre Catholic Cemetery", location: "Alsip, IL", who: "Edward J. O'Reilly, Eileen M. O'Reilly, Julia Coffey (Sheehan)" },
            { cemetery: "Mount Olivet Catholic Cemetery", location: "Chicago, IL", who: "John J. Coffey" },
            { cemetery: "St. Mary's Cemetery", location: "Evergreen Park, IL", who: "Patrick Joseph O'Reilly" },
            { cemetery: "Jerpoint Abbey Graveyard", location: "Thomastown, Kilkenny, Ireland", who: "Edward (Edmond) O'Reilly" },
            { cemetery: "Jefferson Prairie / Bergen Cemetery", location: "Clinton, WI", who: "Andrew Linnerud, Anna Gudrun Linnerud, Albert S. Linnerud, Evelyn Conway" },
            { cemetery: "Borgen Cemetery", location: "Clinton, WI", who: "Sigvart S. Lee" },
            { cemetery: "Bohemian National Cemetery", location: "Chicago, IL", who: "Thomas Jakubicek, Marie Melka Jakubicek" },
            { cemetery: "Abraham Lincoln National Cemetery", location: "Elwood, IL", who: "Lyle Andrew Linnerud, Helen Jakubicek Linnerud" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
              className="flex items-start gap-4 p-4 border border-border-light rounded-sm bg-white/30"
            >
              <span className="text-lg mt-0.5">🪦</span>
              <div>
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  {c.cemetery}
                </p>
                <p className="text-xs text-ink-muted" style={{ fontFamily: "var(--font-sans)" }}>
                  {c.location}
                </p>
                <p className="text-sm text-ink-light mt-1">{c.who}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-light py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/" className="text-sm text-ink-muted hover:text-gold transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
            ← Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
