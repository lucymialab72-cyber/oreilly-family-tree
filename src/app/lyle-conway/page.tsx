"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const filmography = [
  {
    year: "1979–1981",
    title: "The Muppet Show (Seasons 4–5)",
    role: "Puppet sculptor & designer",
    detail: "Sculpted Miss Piggy. Created Lyle the Dog — the character was literally named after him. Also sculpted the Dodo and other minor characters.",
    emoji: "🐷",
  },
  {
    year: "1981",
    title: "The Great Muppet Caper",
    role: "Puppet sculptor",
    detail: "Continued sculpting Miss Piggy for the second Muppet feature film alongside Jim Henson's team.",
    emoji: "🎬",
  },
  {
    year: "1982",
    title: "The Dark Crystal",
    role: "Design & fabrication supervisor",
    detail: "Designed and built Aughra, the Skeksis, and the Urskeks. Developed cable and radio control systems for the animatronic characters. Also provided the voice of the Urskeks.",
    emoji: "🔮",
  },
  {
    year: "1985",
    title: "Return to Oz",
    role: "Lead creature designer & voice actor",
    detail: "Led the design team for Disney and Walter Murch's film. Created Jack Pumpkinhead, Billina the chicken, and the Gump — and voiced the Gump himself. Cast Brian Henson to voice Jack Pumpkinhead.",
    emoji: "🎃",
  },
  {
    year: "1985",
    title: "Dreamchild",
    role: "Creature Shop supervisor",
    detail: "Oversaw Jim Henson's Creature Shop for the film. Created six creatures in fourteen weeks on a minimal budget — describing it as 'one-fourth the work of The Dark Crystal at ten times the speed.'",
    emoji: "🐇",
  },
  {
    year: "1986",
    title: "Little Shop of Horrors",
    role: "Lead puppet designer — Audrey II",
    detail: "Co-created the iconic Audrey II puppet with director Frank Oz. Designed all versions of the man-eating plant from seedling to giant. Used cables, radio controls, and hydraulic pumps for movement. Actors performed in slow motion so the puppet's movements would look natural when sped up. Nominated for Academy Award, Saturn Award, and BAFTA for Best Visual Effects.",
    emoji: "🌱",
    highlight: true,
  },
  {
    year: "1986",
    title: "The Murders in the Rue Morgue",
    role: "Puppet designer & creator",
    detail: "Created the ape puppet for the television film adaptation.",
    emoji: "🦍",
  },
  {
    year: "1988",
    title: "The Blob",
    role: "Special effects designer",
    detail: "Originally in charge of the film's creature effects before personnel changes led to Tony Gardner taking over.",
    emoji: "🟢",
  },
  {
    year: "1996",
    title: "Trinity and Beyond: The Atomic Bomb Movie",
    role: "Associate producer",
    detail: "Served as associate producer on this documentary about nuclear weapons testing.",
    emoji: "☢️",
  },
  {
    year: "1998",
    title: "Deep Rising",
    role: "Creature effects",
    detail: "Worked on creature effects for the horror-action film.",
    emoji: "🐙",
  },
  {
    year: "1998",
    title: "Blade",
    role: "Special effects",
    detail: "Contributed to the special effects for the Marvel film.",
    emoji: "🧛",
  },
];

const awards = [
  { award: "Academy Award Nomination", category: "Best Visual Effects", film: "Little Shop of Horrors", year: "1987" },
  { award: "Saturn Award Nomination", category: "Best Special Effects", film: "Little Shop of Horrors", year: "1987" },
  { award: "BAFTA Nomination", category: "Best Special Visual Effects", film: "Little Shop of Horrors", year: "1987" },
  { award: "Art Institute of Chicago", category: "Multiple awards during art school", film: "", year: "Pre-1979" },
];

export default function LyleConwayPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/family/linnerud" className="text-sm text-ink-muted hover:text-ink transition-colors">
            ← Linnerud Line
          </Link>
          <span className="text-sm font-medium text-gold">Lyle Conway · The Puppeteer</span>
          <Link href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
            Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-5xl mb-6 block">🎭</span>
          <p className="text-ink-muted tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            Puppet Designer · Sculptor · Voice Actor · 1945–2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Lyle Conway
          </h1>
          <p className="text-xl md:text-2xl text-gold italic mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            The Man Who Built Miss Piggy and Brought Audrey II to Life
          </p>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
            Dave O&apos;Reilly&apos;s mom&apos;s first cousin. Son of Evelyn Bernice Linnerud Conway. A kid from
            Chicago&apos;s Southwest Side who became one of Hollywood&apos;s most brilliant puppet and creature
            designers — working alongside Jim Henson, Frank Oz, and Walter Murch.
          </p>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
      </div>

      {/* Early Life */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            A Kid from the Southwest Side
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Lyle Conway was raised on Chicago&apos;s Southwest Side — the same neighborhoods where the
            Linnerud family had made their home since Andrew and Anna arrived from Norway. He was the son
            of Evelyn Bernice Linnerud (1915–1969), the third child of Andrew and Anna Linnerud.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            As a kid, he was captivated by two things: the TV show <em>Kukla, Fran, and Ollie</em> — a
            pioneering puppet show that aired from Chicago — and the original 1933 <em>King Kong</em>. He
            started building his own puppets and creatures from household materials, trying to replicate
            what he saw on screen.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            He attended the Chicago Academy of Fine Arts, where he won multiple awards from the Art
            Institute of Chicago. His work was reportedly provocative and dark — family members recall
            him describing pieces from this period, including a baby bottle nipple with needles
            protruding from it. The kind of work that wins awards at art school and gets remembered
            by everyone who saw it. He worked as a social worker for four years — then left it all
            behind for Hollywood.
          </p>
          <p className="text-lg leading-relaxed text-ink-light">
            He started with Gene Warren and David Allen in the special effects world, which led him
            straight to the door of Jim Henson&apos;s Muppet Workshop.
          </p>
        </motion.div>
      </section>

      {/* Family Connection */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <div className="border border-border rounded-sm p-6 bg-white/30">
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
              🌳 Family Connection
            </h3>
            <div className="text-sm text-ink-light space-y-2" style={{ fontFamily: "var(--font-sans)" }}>
              <p><strong>Andrew Linnerud</strong> (1885–1948) + <strong>Anna Gudrun Lee</strong> (1893–1987)</p>
              <p className="pl-4">├── Grace Mable Othelia (1911–1998)</p>
              <p className="pl-4">├── Albert Siegel (1913–1933) — <em>killed in storm at 19</em></p>
              <p className="pl-4">├── <strong>Evelyn Bernice</strong> (1915–1969) — <em>married a Conway</em></p>
              <p className="pl-8">└── <strong>Lyle Conway</strong> (~1945–2026) — <em>the puppeteer</em></p>
              <p className="pl-4">└── <strong>Lyle Andrew</strong> (1922–2015) — <em>Dave&apos;s grandfather</em></p>
              <p className="mt-3 text-ink-muted">Lyle Conway was named after his uncle — Dave&apos;s grandfather Lyle Andrew Linnerud.</p>
              <p className="text-ink-muted">Conway and Grandpa Lyle were first cousins. Conway&apos;s mom Evelyn was Grandpa Lyle&apos;s sister.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Newspaper Article Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mt-12">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            📰 Found in the Chicago Tribune — March 3, 1967
          </h2>
          <p className="text-sm text-gold font-semibold mb-6" style={{ fontFamily: "var(--font-sans)" }}>
            70th Annual Chicago and Vicinity Exhibition · Art Institute of Chicago
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-6">
            The Chicago Tribune art critic reviewed the 70th Annual Chicago and Vicinity Exhibition at the
            Art Institute of Chicago — and singled out Lyle Conway&apos;s work by name. His piece,{" "}
            <em>&ldquo;Birth of Venus,&rdquo;</em> was shown alongside works by notable Chicago-area
            artists of the era.
          </p>

          <div className="pull-quote my-6">
            <p>
              &ldquo;Lyle A. Conway&apos;s &lsquo;Birth of Venus&rsquo; shows a partly peeled banana
              touched up to resemble&hellip;&rdquo;
            </p>
            <cite className="block text-sm text-ink-muted mt-2 not-italic" style={{ fontFamily: "var(--font-sans)" }}>
              — Chicago Tribune, March 3, 1967, Page 53
            </cite>
          </div>

          <p className="text-ink-light text-base leading-relaxed mb-6">
            The Tribune critic noted the show contained &ldquo;sexual imagery.&rdquo; Conway&apos;s
            banana piece fit squarely in that category — dark, surrealist, deliberately provocative.
            He was 21 years old. His family told stories about work like this for the rest of his life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/newspaper/chicago-tribune-1967-lyle-name.png"
                alt="Chicago Tribune March 3 1967 — Lyle A. Conway name highlighted in 70th Chicago and Vicinity Art Show review"
                className="w-full object-contain"
              />
              <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Chicago Tribune · Fri, Mar 03, 1967 · Page 53 — &ldquo;Lyle A. Conway&apos;s &lsquo;Birth of Venus&rsquo;&rdquo; highlighted
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/newspaper/chicago-tribune-1967-context.png"
                alt="Chicago Tribune March 3 1967 — Full article context showing Conway alongside other notable Chicago artists"
                className="w-full object-contain"
              />
              <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Full article context — Conway in the left column alongside Suellen Rocca, James Barbee, Vincent Arcilesi, and others
              </p>
            </div>
          </div>

          <div className="border border-border rounded-sm p-5 bg-white/30 mt-6" style={{ fontFamily: "var(--font-sans)" }}>
            <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-3">What This Confirms</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>✅ Lyle Conway exhibited at the Art Institute of Chicago Annual Show in <strong>1967</strong>, age 21</li>
              <li>✅ His piece <strong>&ldquo;Birth of Venus&rdquo;</strong> was named by the Chicago Tribune art critic</li>
              <li>✅ The work was deliberately provocative — a peeled banana altered to resemble something else</li>
              <li>✅ He was shown alongside serious Chicago artists: Vincent Arcilesi, Jim Hayes, Suellen Rocca, James Barbee, Harry Bouras</li>
              <li>📚 The Smithsonian Archives of American Art holds the Art Institute&apos;s exhibition files — including artists&apos; own biographical data sheets. Lyle may have filled one out in his own handwriting. Contact: <a href="https://www.aaa.si.edu" className="text-gold hover:underline" target="_blank" rel="noreferrer">aaa.si.edu</a></li>
            </ul>
          </div>
          <p className="text-xs text-ink-muted mt-3 italic" style={{ fontFamily: "var(--font-sans)" }}>
            Source: Chicago Tribune · Friday March 3, 1967 · Page 53 · Via Newspapers.com / Ancestry
          </p>
        </motion.div>
      </section>

      {/* Creations Gallery */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            📸 His Most Famous Creations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/creations/miss-piggy-1979.jpg"
                alt="Miss Piggy — sculpted by Lyle Conway for The Muppet Show Season 5, 1979"
                className="w-full object-cover object-top max-h-48"
              />
              <p className="text-[11px] text-ink-muted mt-2 text-center font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                Miss Piggy (1979)
              </p>
              <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Conway sculpted her face for Season 5 of The Muppet Show
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/creations/skeksis-display.jpg"
                alt="Skeksis puppet on display — The Dark Crystal (1982), designed by Lyle Conway"
                className="w-full object-contain max-h-48"
              />
              <p className="text-[11px] text-ink-muted mt-2 text-center font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                Skeksis — The Dark Crystal (1982)
              </p>
              <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Conway was design & fabrication supervisor
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/creations/little-shop-poster.jpg"
                alt="Little Shop of Horrors (1986) — Lyle Conway created Audrey II"
                className="w-full object-contain max-h-48"
              />
              <p className="text-[11px] text-ink-muted mt-2 text-center font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                Little Shop of Horrors (1986)
              </p>
              <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Conway created all versions of Audrey II — Oscar / Saturn / BAFTA nominated
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/creations/dark-crystal-poster.jpg"
                alt="The Dark Crystal (1982) movie poster"
                className="w-full object-contain max-h-48"
              />
              <p className="text-[11px] text-ink-muted mt-2 text-center font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                The Dark Crystal (1982)
              </p>
              <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Designed Aughra, Skeksis, Urskeks. Also voiced the Urskeks.
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/creations/return-to-oz-poster.jpg"
                alt="Return to Oz (1985) movie poster — Lyle Conway led creature design and voiced the Gump"
                className="w-full object-contain max-h-48"
              />
              <p className="text-[11px] text-ink-muted mt-2 text-center font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                Return to Oz (1985)
              </p>
              <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Led creature design. Created Jack Pumpkinhead + the Gump. Voiced the Gump.
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm shadow-sm">
              <img
                src="/docs/conway/lyle-the-dog-muppet.png"
                alt="Lyle the Dog — the Muppet character named after Lyle Conway"
                className="w-full object-contain max-h-48"
              />
              <p className="text-[11px] text-ink-muted mt-2 text-center font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                Lyle the Dog
              </p>
              <p className="text-[10px] text-ink-muted text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Conway designed and named this Muppet dog after himself
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
      </div>

      {/* Filmography */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Career & Creations
          </h2>
          <div className="space-y-6">
            {filmography.map((film, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
                className={`border rounded-sm p-5 ${film.highlight ? "border-gold bg-gold/5" : "border-border bg-white/30"}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{film.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                        {film.title}
                      </h3>
                      <span className="text-sm text-gold font-semibold" style={{ fontFamily: "var(--font-sans)" }}>
                        ({film.year})
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted font-medium mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                      {film.role}
                    </p>
                    <p className="text-ink-light mt-2 leading-relaxed">{film.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Awards */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            🏆 Awards & Nominations
          </h2>
          <div className="border border-border rounded-sm overflow-hidden">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              <thead>
                <tr className="bg-cream/30 border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-ink-muted">Award</th>
                  <th className="px-4 py-3 text-left font-semibold text-ink-muted">Category</th>
                  <th className="px-4 py-3 text-left font-semibold text-ink-muted hidden md:table-cell">Film</th>
                  <th className="px-4 py-3 text-left font-semibold text-ink-muted">Year</th>
                </tr>
              </thead>
              <tbody>
                {awards.map((a, i) => (
                  <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? "bg-cream/10" : ""}`}>
                    <td className="px-4 py-3 font-medium text-ink">{a.award}</td>
                    <td className="px-4 py-3 text-ink-light">{a.category}</td>
                    <td className="px-4 py-3 text-ink-light hidden md:table-cell">{a.film || "—"}</td>
                    <td className="px-4 py-3 text-gold font-semibold">{a.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
      </div>

      {/* Lyle the Dog */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            🐕 Lyle the Dog — His Namesake Puppet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
              <img
                src="/docs/conway/lyle-the-dog-muppet.png"
                alt="Lyle the Dog — a Muppet character named after Lyle Conway"
                className="w-full object-contain max-h-64"
              />
              <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Lyle the Dog — designed, built, and named after Lyle Conway
              </p>
            </div>
            <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
              <img
                src="/docs/conway/lyle-the-dog-2.png"
                alt="Lyle the Dog puppet close-up"
                className="w-full object-contain max-h-64"
              />
              <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Lyle the Dog close-up — The Muppet Show
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Yes, it&apos;s real. Lyle Conway designed and built a Muppet dog puppet, and the character
            was literally named after him. <strong>Lyle the Dog</strong> first appeared on The Muppet Show
            Episode 414 (with guest Liza Minnelli) in 1979, singing &ldquo;Pass That Peace Pipe&rdquo;
            with three other dogs.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            The character went on to appear in <em>The Muppet Christmas Carol</em>, <em>Muppet Treasure
            Island</em> (as a pirate), <em>The Jim Henson Hour</em>, the <em>Dog City</em> series (as
            Colonel Claghound, a Texas businessman), and <em>The Muppets at Walt Disney World</em>.
          </p>

          {/* Lyle as Colonel Claghound */}
          <div className="max-w-xs mt-4">
            <div className="border border-border bg-white p-2 rounded-sm">
              <img
                src="/docs/conway/lyle-claghound.webp"
                alt="Lyle the Dog as Colonel Claghound — Dog City series"
                className="w-full object-contain max-h-40"
              />
              <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Lyle as Colonel Claghound — Dog City series. Same puppet, different role.
              </p>
            </div>
          </div>

          <p className="text-sm text-ink-muted mt-4 italic" style={{ fontFamily: "var(--font-sans)" }}>
            Sources: Muppet Wiki, ToughPigs, The Muppet Mindset, Wikipedia
          </p>
        </motion.div>
      </section>

      {/* The Gump Voice - YouTube embed */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            🎙️ His Voice: The Gump in Return to Oz
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-6">
            Lyle Conway didn&apos;t just design the creatures — he voiced the Gump, a flying sofa made
            from a mounted moose head, two sofas, palm fronds for wings, and a broom for a tail. The
            Gump&apos;s deep, sardonic voice was all Conway.
          </p>
          <div className="aspect-video w-full border border-border rounded-sm overflow-hidden shadow-sm">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/30lsMTkcPc0"
              title="Return to Oz — The Gump in Flight (Deleted Scene) — Voice by Lyle Conway"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-ink-muted mt-3 italic" style={{ fontFamily: "var(--font-sans)" }}>
            Deleted scene from Return to Oz (1985) — The Gump in flight.
            Conway designed the puppet, operated it, and provided its voice.
          </p>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
      </div>

      {/* Audrey II Deep Dive */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            🌱 Audrey II — His Masterpiece
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Conway&apos;s work on <em>Little Shop of Horrors</em> (1986) was the pinnacle of his career.
            Working with director Frank Oz, Conway designed every version of Audrey II — from the tiny
            seedling to the massive, building-sized final form.
          </p>
          <div className="pull-quote my-6">
            <p>
              Frank Oz wanted Audrey II to look soft and cute. Conway wanted it to look horrific.
              The final design — the one that earned three award nominations — was the compromise
              between them.
            </p>
          </div>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Conway drew inspiration from flower shops and botanical gardens, envisioning Audrey II as a
            cross between a cactus and Ukrainian Easter eggs — something precious enough that Seymour
            would take it home with him.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            He used cables, radio controls, and hydraulic pumps to make the puppet move. But his real
            breakthrough was the slow-motion technique: Conway realized that when he sped up footage of
            the puppet moving, it looked incredibly natural. So he had the actors perform in slow motion
            alongside the puppet, then sped the film up. The result was seamless.
          </p>
          <p className="text-lg leading-relaxed text-ink-light">
            The film earned Conway nominations for the Academy Award, Saturn Award, and BAFTA for Best
            Visual Effects — all for a practical puppet with no CGI.
          </p>
        </motion.div>
      </section>

      {/* The end */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            A Very Private Man
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Lyle Conway was found dead in his California apartment in March 2026. The Muppet community
            mourned him with tributes on ToughPigs and across social media. Those who knew him called him
            &ldquo;a very private man.&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            He left behind a body of work that shaped how the world experienced puppetry and creature
            design in film. Miss Piggy. Aughra. The Skeksis. Jack Pumpkinhead. The Gump. Audrey II. Lyle
            the Dog. All built by a kid from Chicago&apos;s Southwest Side who grew up watching <em>Kukla,
            Fran, and Ollie</em> and dreaming of monsters.
          </p>
          <div className="pull-quote mt-6">
            <p>
              A Norwegian servant girl&apos;s grandson, raised in the same Chicago neighborhoods as his
              family for three generations. He never came home famous. But in Hollywood, the people who
              built the creatures knew his name.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
        <div className="flex justify-between items-center mt-12 flex-wrap gap-4" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/lyle-story" className="text-sm text-ink-muted hover:text-gold transition-colors">
            ⚓ Lyle Linnerud&apos;s WWII Service
          </Link>
          <Link href="/family/linnerud" className="text-sm text-ink-muted hover:text-gold transition-colors">
            🇳🇴 Linnerud Line
          </Link>
          <Link href="/stories" className="text-sm text-ink-muted hover:text-gold transition-colors">
            📖 All Stories
          </Link>
          <Link href="/" className="text-sm text-ink-muted hover:text-gold transition-colors">
            🏠 Home
          </Link>
        </div>
      </section>

      <footer className="border-t border-border-light py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink-muted text-xs" style={{ fontFamily: "var(--font-sans)" }}>
            Sources: Wikipedia · Muppet Wiki · ToughPigs · The Muppet Mindset · IMDB · Little Shop of Horrors Wiki ·
            Dark Crystal Wiki · EverybodyWiki · Classic Horror Film Board
          </p>
        </div>
      </footer>
    </main>
  );
}
