"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { familyLines, immigrationTimeline } from "@/data/families";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

// Origin coordinates (approximate, positioned for the SVG viewbox)
// Using a simplified Euro-centric projection: viewBox="0 0 1000 600"
// X: ~-20W to ~30E mapped to 100-700, Y: ~45N to ~65N mapped to 50-500
interface OriginPoint {
  id: string;
  label: string;
  place: string;
  country: string;
  flag: string;
  x: number;
  y: number;
  color: string;
  people: string[];
  year: number;
  ship?: string;
  familyId: string;
}

const origins: OriginPoint[] = [
  {
    id: "kilkenny",
    label: "Thomastown, Kilkenny",
    place: "Thomastown",
    country: "Ireland",
    flag: "🇮🇪",
    x: 215,
    y: 265,
    color: "#2D5A27",
    people: ["Patrick Joseph O'Reilly (1906)"],
    year: 1906,
    familyId: "oreilly",
  },
  {
    id: "kerry",
    label: "Kerry",
    place: "Ballydarrig & Cahirciveen",
    country: "Ireland",
    flag: "🇮🇪",
    x: 160,
    y: 290,
    color: "#1B4965",
    people: ["John J. Coffey (1902)", "Julia Sheehan (1906)"],
    year: 1902,
    ship: "SS Ivernia / SS Arabic",
    familyId: "coffey",
  },
  {
    id: "tipperary",
    label: "Tipperary",
    place: "Lisgoriff, Templederry",
    country: "Ireland",
    flag: "🇮🇪",
    x: 195,
    y: 270,
    color: "#704214",
    people: ["Sheehy & Woulfe families (origins TBD)"],
    year: 1870,
    familyId: "oreilly",
  },
  {
    id: "hedmark",
    label: "Hedmark, Norway",
    place: "Vinger & Linnerud Farm",
    country: "Norway",
    flag: "🇳🇴",
    x: 390,
    y: 110,
    color: "#002868",
    people: ["Andrew Olaus Linnerud (1906)", "Sigvart Sørensen/Lee (1885)"],
    year: 1885,
    ship: "SS Caronia / Ship Juno",
    familyId: "linnerud",
  },
  {
    id: "lipov",
    label: "Lipov, Moravia",
    place: "South Moravia",
    country: "Czech Republic",
    flag: "🇨🇿",
    x: 455,
    y: 240,
    color: "#D7141A",
    people: ["Thomas Jakubicek (1903)", "Marie Melka (1913)"],
    year: 1903,
    ship: "SS Kronprinz Wilhelm",
    familyId: "jakubicek",
  },
];

const chicago = { x: 820, y: 300, label: "Chicago" };

// Immigration ports
const ports = [
  { name: "Queenstown (Cobh)", x: 165, y: 285, type: "departure" as const },
  { name: "Liverpool", x: 210, y: 235, type: "departure" as const },
  { name: "Bremen", x: 370, y: 215, type: "departure" as const },
  { name: "Oslo", x: 380, y: 120, type: "departure" as const },
  { name: "New York / Ellis Island", x: 780, y: 310, type: "arrival" as const },
  { name: "Boston", x: 800, y: 285, type: "arrival" as const },
];

export default function MapPage() {
  const [selectedOrigin, setSelectedOrigin] = useState<OriginPoint | null>(null);
  const [hoveredOrigin, setHoveredOrigin] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-light">
        <div
          className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <Link
            href="/"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            ← Home
          </Link>
          <span className="text-sm font-medium text-gold">
            🗺️ Origins Map
          </span>
          <Link
            href="/tree"
            className="text-sm text-ink-muted hover:text-ink transition-colors"
          >
            🌳 Tree
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Journey to Chicago
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Five villages across three countries. Eight immigrants. All roads led
            to the same city.
          </p>
        </motion.div>
      </section>

      {/* Map */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border border-border rounded-sm bg-white/50 p-4 md:p-8 overflow-hidden"
        >
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            style={{ maxHeight: "70vh" }}
          >
            {/* Background */}
            <defs>
              <linearGradient id="ocean" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E8EEF4" />
                <stop offset="100%" stopColor="#D4DFE9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ocean */}
            <rect
              x="0"
              y="0"
              width="1000"
              height="500"
              fill="url(#ocean)"
              rx="4"
            />

            {/* Atlantic label */}
            <text
              x="550"
              y="380"
              textAnchor="middle"
              fill="#B0C4D8"
              fontSize="18"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              opacity="0.6"
            >
              Atlantic Ocean
            </text>

            {/* Simplified landmasses */}
            {/* Ireland */}
            <path
              d="M155,240 Q165,225 180,230 Q200,235 210,250 Q215,265 210,280 Q200,300 185,310 Q170,315 160,305 Q150,290 148,275 Q145,260 155,240Z"
              fill="#E5DCC8"
              stroke="#D4C5A9"
              strokeWidth="1"
              opacity="0.8"
            />
            {/* Britain */}
            <path
              d="M215,200 Q225,190 235,195 Q245,205 240,220 Q238,240 230,260 Q225,270 220,265 Q212,250 215,235 Q215,215 215,200Z"
              fill="#E5DCC8"
              stroke="#D4C5A9"
              strokeWidth="1"
              opacity="0.6"
            />
            {/* Scandinavia (simplified) */}
            <path
              d="M340,50 Q360,40 380,50 Q400,60 410,80 Q405,100 395,120 Q385,140 375,155 Q365,160 355,145 Q345,130 340,110 Q335,90 338,70 Q338,55 340,50Z"
              fill="#E5DCC8"
              stroke="#D4C5A9"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Continental Europe (simplified) */}
            <path
              d="M250,210 Q280,200 320,205 Q360,210 400,215 Q440,220 480,230 Q500,240 490,260 Q470,275 440,280 Q400,285 360,275 Q320,270 290,260 Q260,250 250,235 Q248,220 250,210Z"
              fill="#E5DCC8"
              stroke="#D4C5A9"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* North America East Coast (simplified) */}
            <path
              d="M750,200 Q770,190 790,200 Q810,210 825,230 Q840,260 835,290 Q830,320 820,340 Q810,360 795,370 Q780,375 770,360 Q760,340 755,310 Q750,280 748,250 Q747,225 750,200Z"
              fill="#E5DCC8"
              stroke="#D4C5A9"
              strokeWidth="1"
              opacity="0.7"
            />

            {/* Travel routes — curved paths from origins to Chicago */}
            {origins.map((origin) => {
              const isHovered = hoveredOrigin === origin.id;
              const isSelected =
                selectedOrigin?.id === origin.id;
              // Bezier control points for arched Atlantic crossing
              const midX = (origin.x + chicago.x) / 2;
              const midY = Math.min(origin.y, chicago.y) - 80;
              return (
                <motion.path
                  key={origin.id}
                  d={`M${origin.x},${origin.y} Q${midX},${midY} ${chicago.x},${chicago.y}`}
                  fill="none"
                  stroke={origin.color}
                  strokeWidth={isHovered || isSelected ? 3 : 1.5}
                  strokeDasharray={isHovered || isSelected ? "none" : "6,4"}
                  opacity={isHovered || isSelected ? 1 : 0.4}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: 0.5 + origins.indexOf(origin) * 0.3,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Origin points */}
            {origins.map((origin) => {
              const isHovered = hoveredOrigin === origin.id;
              const isSelected =
                selectedOrigin?.id === origin.id;
              return (
                <g
                  key={origin.id}
                  className="cursor-pointer"
                  onClick={() =>
                    setSelectedOrigin(
                      selectedOrigin?.id === origin.id ? null : origin
                    )
                  }
                  onMouseEnter={() => setHoveredOrigin(origin.id)}
                  onMouseLeave={() => setHoveredOrigin(null)}
                >
                  {/* Pulse ring */}
                  {(isHovered || isSelected) && (
                    <circle
                      cx={origin.x}
                      cy={origin.y}
                      r="16"
                      fill="none"
                      stroke={origin.color}
                      strokeWidth="2"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        from="10"
                        to="20"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.5"
                        to="0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  {/* Point */}
                  <circle
                    cx={origin.x}
                    cy={origin.y}
                    r={isHovered || isSelected ? 8 : 6}
                    fill={origin.color}
                    stroke="white"
                    strokeWidth="2"
                    filter={isHovered || isSelected ? "url(#glow)" : undefined}
                    style={{
                      transition: "r 0.2s ease",
                    }}
                  />
                  {/* Label */}
                  <text
                    x={origin.x}
                    y={origin.y - 14}
                    textAnchor="middle"
                    fill={origin.color}
                    fontSize={isHovered || isSelected ? "12" : "10"}
                    fontFamily="var(--font-sans)"
                    fontWeight={isHovered || isSelected ? "700" : "500"}
                    style={{ transition: "font-size 0.2s ease" }}
                  >
                    {origin.flag} {origin.label}
                  </text>
                </g>
              );
            })}

            {/* Chicago destination */}
            <g>
              {/* Star burst */}
              <circle
                cx={chicago.x}
                cy={chicago.y}
                r="14"
                fill="#B8860B"
                stroke="white"
                strokeWidth="2"
                filter="url(#glow)"
              />
              <text
                x={chicago.x}
                y={chicago.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
                fontFamily="var(--font-sans)"
              >
                ★
              </text>
              <text
                x={chicago.x}
                y={chicago.y - 22}
                textAnchor="middle"
                fill="#B8860B"
                fontSize="14"
                fontFamily="var(--font-display)"
                fontWeight="bold"
              >
                🇺🇸 Chicago
              </text>
              <text
                x={chicago.x}
                y={chicago.y + 30}
                textAnchor="middle"
                fill="#8B7E6B"
                fontSize="9"
                fontFamily="var(--font-sans)"
              >
                1882 – 1915
              </text>
            </g>

            {/* Year labels along routes */}
            {immigrationTimeline.map((event, i) => {
              const origin = origins.find(
                (o) =>
                  o.people.some((p) =>
                    p.toLowerCase().includes(event.person.split(" ")[0].toLowerCase())
                  ) ||
                  o.label
                    .toLowerCase()
                    .includes(event.from.split(",")[0].toLowerCase())
              );
              if (!origin) return null;
              const t = 0.35 + i * 0.02;
              const cx =
                (1 - t) * (1 - t) * origin.x +
                2 * (1 - t) * t * ((origin.x + chicago.x) / 2) +
                t * t * chicago.x;
              const cy =
                (1 - t) * (1 - t) * origin.y +
                2 * (1 - t) * t * (Math.min(origin.y, chicago.y) - 80) +
                t * t * chicago.y;
              return (
                <text
                  key={i}
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  fill={origin.color}
                  fontSize="8"
                  fontFamily="var(--font-sans)"
                  fontWeight="600"
                  opacity="0.5"
                >
                  {event.year}
                </text>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {origins.map((origin) => (
              <button
                key={origin.id}
                onClick={() =>
                  setSelectedOrigin(
                    selectedOrigin?.id === origin.id ? null : origin
                  )
                }
                onMouseEnter={() => setHoveredOrigin(origin.id)}
                onMouseLeave={() => setHoveredOrigin(null)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border text-sm transition-all ${
                  selectedOrigin?.id === origin.id
                    ? "border-gold bg-gold/10 font-semibold"
                    : "border-border-light bg-white/50 hover:border-gold/50"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: origin.color }}
                />
                <span>
                  {origin.flag} {origin.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected origin detail card */}
        <AnimatePresence>
          {selectedOrigin && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 border border-border rounded-sm p-6 bg-white/70"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-1.5 h-8 rounded-full"
                      style={{
                        backgroundColor: selectedOrigin.color,
                      }}
                    />
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {selectedOrigin.flag} {selectedOrigin.place}
                      </h3>
                      <p
                        className="text-sm text-ink-muted"
                        style={{
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {selectedOrigin.country}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedOrigin(null)}
                  className="text-ink-muted hover:text-ink text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <p
                  className="text-sm font-semibold text-ink-muted"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Who Crossed
                </p>
                {selectedOrigin.people.map((person, i) => (
                  <p key={i} className="text-ink-light">
                    {person}
                  </p>
                ))}
              </div>

              {selectedOrigin.ship && (
                <div className="mt-3">
                  <p
                    className="text-sm text-ink-muted"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Ship:{" "}
                    <span className="italic text-sepia font-medium">
                      {selectedOrigin.ship}
                    </span>
                  </p>
                </div>
              )}

              <Link
                href={`/family/${selectedOrigin.familyId}`}
                className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4 hover:text-gold-dark transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Explore the {familyLines.find((l) => l.id === selectedOrigin.familyId)?.name || ""} line →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Chicago neighborhoods section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="mt-12"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where They Settled
          </h2>
          <p className="text-center text-ink-muted mb-10 text-lg">
            Chicago&apos;s South Side and West Side
          </p>

          <div className="space-y-6">
            {[
              {
                neighborhood: "South Side — Chatham & Grand Crossing",
                families: "Coffey, O'Reilly (Edward & Eileen)",
                address:
                  "7748 S. Langley Ave (Coffey) · 7341 S. St. Lawrence Ave (O'Reilly)",
                flag: "🇮🇪",
                note: "One block apart. Al Capone lived at 7244 S. Prairie — six blocks away.",
              },
              {
                neighborhood: "West Side — Ferdinand St & Madison St",
                families: "O'Reilly (Patrick & Catherine)",
                address:
                  "727 E 50th St (1917-1918, Patrick J. O'Reilly)",
                flag: "🇮🇪",
                note: "Patrick J. O'Reilly lived on the South Side, near the Coffey family on S. Langley Ave.",
              },
              {
                neighborhood:
                  "South Side — Marquette Park & Chicago Lawn",
                families: "Linnerud",
                address:
                  "7007 S. Artesian Ave (1940) · 7306 S. Talman Ave (Andrew's death, 1948)",
                flag: "🇳🇴",
                note: "Norwegian community. Andrew worked as a blacksmith, then railroad mechanic, then carpenter.",
              },
              {
                neighborhood: "Pilsen — Heart of Bohemian Chicago",
                families: "Jakubicek & Melka",
                address:
                  "1157 W. 18th St (1930) · S. May St (1940) · 1864 S. Throop (1942)",
                flag: "🇨🇿",
                note: "Thomas worked at Storkline Furniture Corp — now a National Historic Landmark.",
              },
              {
                neighborhood:
                  "Boone County, IL — Norwegian Farm Country",
                families: "Lee/Sørensen",
                address: "Manchester Township, near Belvidere",
                flag: "🇳🇴",
                note: "Sigvart farmed here 30+ years. Anna Gudrun was born here in 1893. Andrew came here from Norway and married her.",
              },
            ].map((n, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
                className="border border-border-light rounded-sm p-6 bg-white/30 hover:bg-white transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{n.flag}</span>
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {n.neighborhood}
                    </h3>
                    <p
                      className="text-sm text-gold font-medium mt-1"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {n.families}
                    </p>
                    <p
                      className="text-xs text-ink-muted mt-1"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {n.address}
                    </p>
                    <p className="text-ink-light text-sm mt-3 italic">
                      {n.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline recap */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="heritage-divider">
          <span className="text-gold">✦</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="mt-12"
        >
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Arrival Timeline
          </h2>

          <div className="space-y-4">
            {immigrationTimeline.map((event, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i}
                className="flex items-center gap-4"
              >
                <span
                  className="text-gold font-bold text-2xl w-16 text-right shrink-0"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {event.year}
                </span>
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <div className="flex-1">
                  <p className="font-medium">
                    {event.flag} {event.person}
                  </p>
                  <p
                    className="text-sm text-ink-muted"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {event.from} → {event.to}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

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
            href="/stories"
            className="text-sm text-ink-muted hover:text-gold transition-colors"
          >
            ← Stories
          </Link>
          <Link
            href="/"
            className="text-sm text-ink-muted hover:text-gold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/tree"
            className="text-sm text-ink-muted hover:text-gold transition-colors"
          >
            🌳 Full Tree →
          </Link>
        </div>
      </section>

      <footer className="border-t border-border-light py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-ink-muted text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Map positions approximate. Sources: ship manifests, census records,
            draft cards, naturalization petitions, 1901/1911 Irish Census,
            Norwegian Digital Archives.
          </p>
        </div>
      </footer>
    </main>
  );
}
