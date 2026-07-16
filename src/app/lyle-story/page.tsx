"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

// Timeline events from Lyle's memoir
const voyageTimeline = [
  { date: "December 1942", event: "Enlists in U.S. Coast Guard at age 20. Pay: $66/month." },
  { date: "March 1945", event: "Assigned to USS Admiral E.W. Eberle (AP-123). Comes aboard in Los Angeles." },
  { date: "July 25, 1945", event: "The Eberle departs Marseilles, France. 5,000 troops aboard. Destination: Manila." },
  { date: "August 6, 1945", event: "Atomic bomb falls on Hiroshima. Lyle is at sea, somewhere in the Atlantic or Caribbean." },
  { date: "August 9, 1945", event: "Atomic bomb falls on Nagasaki. The Eberle continues its course through the Panama Canal." },
  { date: "August 14, 1945", event: "Japan surrenders. The war ends. The Eberle is still crossing the Pacific." },
  { date: "August 26, 1945", event: "The Eberle arrives in Manila, Philippines. 32 days. 16,000 miles." },
  { date: "March 25, 1945", event: "A Navy plane doing aerobatics for troops loses control during a loop. Rather than crash into the main deck full of soldiers watching, the pilot noses down into the ship's side. Both occupants of the plane are killed. 1 dead, 5 wounded on the ship. Lyle is aboard." },
  { date: "Mid-voyage", event: "Bow lookout spots a floating mine. Helmsman swerves. 40mm gun crew detonates it." },
  { date: "September 10, 1945", event: "The same day the Eberle is making its way back to the West Coast: In Fruita, Colorado, a farmer named Lloyd Olsen chops the head off a chicken named Mike. The chicken does not die." },
  { date: "September 23, 1945", event: "The Eberle docks at Tacoma, Washington, carrying 4,369 troops — the first soldiers to land there after the war." },
  { date: "October 1945", event: "Between voyages to Japan and Korea, the Eberle makes port calls in Los Angeles. Around this same time, Mike the Headless Chicken — now a national sensation — is being exhibited at a sideshow in Long Beach, California. Family story holds that Lyle saw him." },
  { date: "May 1946", event: "Honorably discharged. Total service: 41 months. Total miles at sea: 85,000." },
];

const portsList = [
  "Le Havre, France", "Marseille, France", "Naples, Italy", "Norfolk, Virginia",
  "Port of Spain, Trinidad", "Panama City, Panama", "Ulithi Atoll", "Manila, Philippines",
  "Naha, Okinawa", "Seoul, Korea", "Nagoya, Japan (×2)", "Los Angeles (×2)", "Seattle (×3)", "Tacoma, Washington",
];

const fastFacts = [
  { label: "Ship", value: "USS Admiral E.W. Eberle (AP-123)" },
  { label: "Length", value: "610 feet" },
  { label: "Armament", value: "5-inch guns, twin 40mm guns, 20mm guns" },
  { label: "Capacity", value: "Up to 5,000 troops" },
  { label: "Lyle's Role", value: "Deckhand, mess cook, crow's nest lookout" },
  { label: "Crow's Nest", value: "100 feet above the ocean (\"size of an outdoor garbage can\")" },
  { label: "Total Miles", value: "85,000 miles in approximately one year" },
  { label: "Atlantic Crossings", value: "6 times" },
  { label: "Pacific Crossings", value: "8 times" },
  { label: "Panama Canal", value: "2 transits" },
  { label: "Epic Voyage", value: "Marseilles → Manila, July 25–August 26, 1945 (32 days, 16,000 miles)" },
  { label: "Enlisted", value: "December 1942, age 20" },
  { label: "Discharged", value: "May 1946 (honorable)" },
];

export default function LyleStoryPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/family/linnerud" className="text-sm text-ink-muted hover:text-ink transition-colors">
            ← Linnerud Line
          </Link>
          <span className="text-sm font-medium text-gold">Lyle Linnerud · WWII Service</span>
          <Link href="/" className="text-sm text-ink-muted hover:text-ink transition-colors">
            Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-5xl mb-6 block">⚓</span>
          <p className="text-ink-muted tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            U.S. Coast Guard · 1942–1946
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Lyle Andrew Linnerud
          </h1>
          <p className="text-xl md:text-2xl text-gold italic mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            85,000 Miles at Sea
          </p>
          <p className="text-ink-muted max-w-2xl mx-auto text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
            Dave O&apos;Reilly&apos;s maternal grandfather. A 20-year-old from Chicago who sailed across every ocean
            while the atomic age began — and lived to bowl a 290 at age 79.
          </p>
        </motion.div>
      </section>

      {/* Key photo */}
      <section className="max-w-2xl mx-auto px-6 pb-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
            <img
              src="/docs/linnerud/Lyle-Andrew-Linnerud-1922-2015-PHOTO-Obituary-FindAGrave.png"
              alt="Lyle Andrew Linnerud (1922–2015)"
              className="w-full object-contain max-h-80"
            />
            <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
              Lyle Andrew Linnerud (August 30, 1922 – August 29, 2015) · Find a Grave memorial
            </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
      </div>

      {/* The Ship */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The Ship: USS Admiral E.W. Eberle (AP-123)
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-6">
            The USS Admiral E.W. Eberle was 610 feet long — longer than two football fields — and built
            to carry troops. An armed transport vessel, she carried 5-inch naval guns, twin 40mm anti-aircraft
            guns, and 20mm guns. She was designed to move men and supplies to the Pacific, and that is exactly
            what she did.
          </p>
          <p className="text-lg leading-relaxed text-ink-light">
            Lyle came aboard in Los Angeles in March 1945. He was 22 years old. He had enlisted in December 1942
            at age 20 — $66 a month, U.S. Coast Guard. He would serve 41 months total, traversing every major
            ocean on earth.
          </p>
        </motion.div>
      </section>

      {/* Ship Photos */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            📸 The Ship in Photographs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
              <img
                src="/docs/eberle/eberle-ap123-wwii.jpg"
                alt="USS Admiral E.W. Eberle (AP-123) — halftone photograph from 1945"
                className="w-full object-contain max-h-64"
              />
              <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                USS Admiral E.W. Eberle (AP-123), 1945 — the ship Lyle served on.
                610 feet long, carrying up to 5,000 troops. U.S. Navy photo.
              </p>
            </div>
            <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
              <img
                src="/docs/eberle/eberle-usat-broadside.jpg"
                alt="USS Admiral E.W. Eberle (AP-123) — broadside view at sea"
                className="w-full object-contain max-h-64"
              />
              <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Broadside view of the Eberle at sea — one of eleven Admiral W.S. Benson-class
                troop transports manned by the U.S. Coast Guard during WWII.
              </p>
            </div>
            <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
              <img
                src="/docs/eberle/eberle-aerial-underway.jpg"
                alt="USS Admiral E.W. Eberle (AP-123) — aerial view underway"
                className="w-full object-contain max-h-64"
              />
              <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Aerial view underway — showing the deck layout, cargo booms,
                and the twin funnels. The Eberle traveled 85,000 miles in one year.
              </p>
            </div>
            <div className="border border-border bg-white p-3 rounded-sm shadow-sm">
              <img
                src="/docs/eberle/eberle-color-1950s.jpg"
                alt="USS Admiral E.W. Eberle (AP-123) — color photograph"
                className="w-full object-contain max-h-64"
              />
              <p className="text-center text-xs text-ink-muted mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Rare color photograph of the same vessel, later renamed USNS General
                Simon B. Buckner (T-AP-123). Gray hull with buff upper works.
              </p>
            </div>
          </div>
          <p className="text-sm text-ink-muted mt-4 italic" style={{ fontFamily: "var(--font-sans)" }}>
            Photos: U.S. Naval History and Heritage Command · Wikimedia Commons (public domain)
          </p>
        </motion.div>
      </section>

      {/* Fast facts */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            By the Numbers
          </h2>
          <div className="border border-border rounded-sm overflow-hidden">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              <tbody>
                {fastFacts.map((fact, i) => (
                  <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? "bg-cream/20" : ""}`}>
                    <td className="px-4 py-3 font-semibold text-ink-muted w-1/3">{fact.label}</td>
                    <td className="px-4 py-3 text-ink">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* The crow's nest */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <div className="pull-quote">
            <p>&ldquo;The crow&apos;s nest was 100 feet above the ocean. The size of an outdoor garbage can.
            You had binoculars and a phone line to the bridge. You looked for everything — enemy ships,
            aircraft, submarines, floating mines.&rdquo;</p>
          </div>
          <p className="text-lg leading-relaxed text-ink-light mt-6">
            Among Lyle&apos;s duties: lookout in the foremast crow&apos;s nest, 100 feet above the ocean surface.
            The crow&apos;s nest was barely large enough to stand in — described by Lyle in his memoir as the
            size of an outdoor garbage can. Armed with binoculars and a phone line to the bridge, he watched
            the horizon for threats: enemy aircraft, submarines, mines, other vessels.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mt-4">
            The threats were real.
          </p>
        </motion.div>
      </section>

      {/* The mine */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The Floating Mine
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Somewhere in the Pacific, the bow lookout spotted it first: a floating contact mine drifting
            in the ship&apos;s path. A sphere of steel packed with explosives, designed to sink ships.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            The helmsman swerved. The 40mm gun crew came to the rail. They detonated it at a safe distance.
          </p>
          <p className="text-lg leading-relaxed text-ink-light">
            The ship continued. Five thousand troops never knew how close they came.
          </p>
        </motion.div>
      </section>

      {/* The plane crash */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The Plane Crash
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            On March 25, 1945, the Eberle was at Manus Island in Papua New Guinea. A Navy pilot decided
            to put on a show for the troops — aerobatics over the ship. During a loop, he lost control.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Rather than crash into the main deck, where hundreds of soldiers stood watching, the pilot
            made a choice. He nosed the plane down into the ship&apos;s side.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Both occupants of the plane were killed. One man died on the ship. Five more were wounded.
          </p>
          <div className="pull-quote">
            <p>
              Two weeks after Lyle came aboard, a plane crashed into his ship. He hadn&apos;t even left port yet.
              He still had 85,000 miles ahead of him.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Epic voyage timeline */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mt-12">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            The Voyage
          </h2>
          <p className="text-ink-muted text-sm mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            July 25 – August 26, 1945 · Marseilles → Manila · 16,000 miles · 32 days
          </p>

          <div className="pull-quote mb-8">
            <p>
              The atomic bombs fell on Hiroshima and Nagasaki while Lyle was at sea, crossing from the
              Atlantic through the Caribbean, through the Panama Canal, and into the Pacific.
              Japan surrendered while he was still aboard. The war ended at sea.
            </p>
          </div>

          <div className="space-y-6">
            {voyageTimeline.map((event, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gold" style={{ fontFamily: "var(--font-sans)" }}>
                    {event.date}
                  </p>
                  <p className="text-ink-light mt-0.5">{event.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Route map label */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Ports Visited
          </h2>
          <div className="flex flex-wrap gap-2">
            {portsList.map((port, i) => (
              <span
                key={i}
                className="px-3 py-1.5 border border-border-light bg-white/50 rounded-sm text-sm text-ink-light"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {port}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mike the Headless Chicken */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mt-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            🐔 Mike the Headless Chicken
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Family story, passed down through Dave&apos;s brother: somewhere on the West Coast, probably
            during a shore leave in Los Angeles or Long Beach, Grandpa Lyle saw a headless chicken.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            This sounds like a tall tale. It&apos;s not.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            On September 10, 1945 — three days before the Eberle docked at Tacoma with its returning
            troops — a farmer named Lloyd Olsen in Fruita, Colorado, attempted to behead a five-month-old
            Wyandotte rooster named Mike for supper. The axe missed the jugular vein. The brain stem
            stayed mostly intact. A blood clot stopped the bleeding. Mike didn&apos;t die.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Mike stumbled around the yard, attempting to preen and peck. Olsen started feeding him
            corn and worms through an eyedropper down his exposed neck. Mike kept living. Olsen realized
            he had something and took Mike on the road.
          </p>
          <div className="pull-quote my-6">
            <p>
              By early October 1945, Mike the Headless Chicken was being exhibited at a sideshow
              in <strong>Long Beach, California</strong> — charging 25 cents a look. He would go on to
              tour Los Angeles, San Diego, New York, and Atlantic City, earning his owner
              $4,500 a month.
            </p>
          </div>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            The Eberle docked in Los Angeles twice. After the war ended, the ship made three voyages
            from the West Coast to Japan and Korea between October 1945 and March 1946 — meaning
            there were multiple LA port calls right when Mike was touring Southern California.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Mike was featured in <em>LIFE</em> and <em>TIME</em> magazines. He was a national
            sensation. Any sailor with a few hours of shore leave in LA or Long Beach in the fall
            of 1945 would have seen the signs.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Mike lived for 18 months headless before choking on mucus in a Phoenix motel room in
            March 1947. His hometown of Fruita, Colorado, still holds an annual &ldquo;Mike the
            Headless Chicken Day&rdquo; every May.
          </p>
          <div className="border border-border rounded-sm p-5 bg-white/30 mt-6" style={{ fontFamily: "var(--font-sans)" }}>
            <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-3">Timeline Overlap</h3>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="text-gold font-semibold w-32 shrink-0">Sept 10, 1945</span>
                <span className="text-ink-light">Mike the Headless Chicken survives beheading in Fruita, Colorado</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold font-semibold w-32 shrink-0">Sept 23, 1945</span>
                <span className="text-ink-light">Eberle docks at Tacoma, Washington — war is over, troops coming home</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold font-semibold w-32 shrink-0">Oct 1945</span>
                <span className="text-ink-light">Mike exhibited in Long Beach, CA — Eberle making West Coast port calls before voyages to Japan</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold font-semibold w-32 shrink-0">Oct 1945–Mar 1946</span>
                <span className="text-ink-light">Three Eberle voyages: West Coast → Japan/Korea, with LA stops between runs</span>
              </div>
            </div>
            <p className="text-xs text-ink-muted mt-4 italic">
              The geography and timing match. This family story holds up.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The man behind the service */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mt-12">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            The Man
          </h2>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            Lyle Andrew Linnerud was born August 30, 1922 in Chicago, Illinois. He was the valedictorian
            of Gage Park High School in 1940 — the same year he would have been 18, too young to know
            that two years later he would enlist in a war that was already consuming the world.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            He married Helen Marie Jakubicek on January 20, 1951 — a Czech-American girl from Chicago,
            whose own father Thomas had arrived at Ellis Island on the famous Kronprinz Wilhelm in 1903.
            Two immigrant lines, converging in one marriage.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            He had five children. He was a gardener. He carved figures from fence posts — Vikings,
            cadets, Uncle Sam. He was a calligrapher. He was a Cubs fan.
          </p>
          <p className="text-lg leading-relaxed text-ink-light mb-4">
            He bowled a 290 at age 79. One pin short of perfect.
          </p>
          <p className="text-lg leading-relaxed text-ink-light">
            He died August 29, 2015 — one day before his 93rd birthday. He was buried at Abraham
            Lincoln National Cemetery with full military honors.
          </p>

          <div className="pull-quote mt-8">
            <p>
              His first cousin was <Link href="/lyle-conway" className="text-gold hover:text-gold-light underline">Lyle Conway</Link> —
              the puppeteer who created Miss Piggy and Audrey II.
              The Muppet character &ldquo;Lyle the Dog&rdquo; was named after him.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Marriage document */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Documents
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/docs/linnerud/Lyle-Linnerud-Helen-Jakubicek-Marriage-Jan20-1951-Winnebago-County.png", caption: "Marriage Record — Lyle & Helen, Jan 20 1951" },
              { src: "/docs/linnerud/Lyle-Andrew-Linnerud-1922-2015-PHOTO-Obituary-FindAGrave.png", caption: "Find a Grave — Lyle Andrew Linnerud (1922–2015)" },
              { src: "/docs/linnerud/Helen-Marie-Jakubicek-Linnerud-1925-2010-OBITUARY-FindAGrave.png", caption: "Find a Grave — Helen Marie Linnerud (1925–2010)" },
            ].map((doc, i) => (
              <div key={i} className="border border-border bg-white p-2 rounded-sm">
                <img src={doc.src} alt={doc.caption} className="w-full object-contain max-h-48" />
                <p className="text-[10px] text-ink-muted mt-2 text-center" style={{ fontFamily: "var(--font-sans)" }}>{doc.caption}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider"><span className="text-gold">✦</span></div>
        <div className="flex justify-between items-center mt-12" style={{ fontFamily: "var(--font-sans)" }}>
          <Link href="/family/linnerud" className="text-sm text-ink-muted hover:text-gold transition-colors">
            ← Linnerud Line
          </Link>
          <Link href="/tree" className="text-sm text-ink-muted hover:text-gold transition-colors">
            🌳 Full Family Tree
          </Link>
          <Link href="/" className="text-sm text-ink-muted hover:text-gold transition-colors">
            Home →
          </Link>
        </div>
      </section>

      <footer className="border-t border-border-light py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink-muted text-xs" style={{ fontFamily: "var(--font-sans)" }}>
            Sources: Lyle A. Linnerud&apos;s Coast Guard Experience (personal memoir) · Eulogy for Lyle A. Linnerud ·
            Find a Grave · Abraham Lincoln National Cemetery records
          </p>
        </div>
      </footer>
    </main>
  );
}
