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

          <div className="border border-gold/30 bg-gold/5 rounded-sm p-4 mt-4 mb-2 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            <strong>🔍 Which puppet is Lyle?</strong> The real Lyle the Dog is the distinguished-looking
            terrier with <strong>short, upright pointy ears</strong>, tan/beige face, a tuft of gray hair
            on top, and a suit jacket with bow tie. Some images online show long-eared shaggy white dogs
            from the same &ldquo;Pass That Peace Pipe&rdquo; scene — those are <em>other</em> Muppet dog
            characters (Muppy, Baskerville, the Wolfhound) who sang alongside Lyle.
          </div>

          {/* More Lyle the Dog images */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border border-border bg-white p-2 rounded-sm">
              <img
                src="/docs/conway/lyle-claghound.webp"
                alt="Lyle the Dog as Colonel Claghound — Dog City series"
                className="w-full object-contain max-h-40"
              />
              <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                Lyle as Colonel Claghound (Dog City) — same puppet, different role.
                Note the short pointy ears and bow tie.
              </p>
            </div>
            <div className="border border-border bg-white p-2 rounded-sm">
              <img
                src="/docs/conway/lyle-peace-pipe.webp"
                alt="The Pass That Peace Pipe number — The Muppet Show Season 4, Ep 14 (Liza Minnelli)"
                className="w-full object-contain max-h-40"
              />
              <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>
                &ldquo;Pass That Peace Pipe&rdquo; — Muppet Show S4E14 with Liza Minnelli.
                Lyle debuted here alongside Muppy, Baskerville, and the Wolfhound.
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
