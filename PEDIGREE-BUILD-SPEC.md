# Pedigree Chart Build Spec — ACCURACY IS EVERYTHING

## Overview
Build a `PedigreeChart` component that renders an interactive ancestor pedigree chart on each `/family/[id]` page. The chart appears at the TOP of the page (after the hero section, before The Village section). Each person box is clickable → smooth-scrolls to their detail section below. A floating "↑ Back to Chart" button appears when the user scrolls past the chart.

## Design
- Horizontal layout: focal person on LEFT → parents → grandparents → great-grandparents going RIGHT
- Color coding: blue-tinted boxes for males (#E8F0FE border, #F0F6FF bg), pink-tinted boxes for females (#FCE4EC border, #FFF0F5 bg)
- Connecting lines between generations (thin gold lines, #B8860B)
- Each box shows: Name (bold), Birth year – Death year, Birth place (abbreviated)
- Font: var(--font-sans) for names, var(--font-serif) for dates
- Mobile: horizontal scroll container with the chart
- Responsive: on very small screens, boxes get smaller but stay readable

## Component API
```tsx
<PedigreeChart
  familyId="oreilly"        // used for scroll target IDs
  focal={...}               // the focal person (grandparent generation)
  colorAccent="#2D5A27"      // family line color for header
/>
```

## Data Structure
```tsx
interface PedigreeNode {
  name: string;
  born?: string;        // just the year or "c. 1780"
  died?: string;        // just the year
  birthPlace?: string;  // abbreviated: "Kilkenny, Ireland"
  gender: "M" | "F";
  scrollId?: string;    // ID to scroll to on the page
  father?: PedigreeNode;
  mother?: PedigreeNode;
}
```

## PEDIGREE DATA — VERIFIED FROM families.ts

### 1. O'REILLY LINE — Focal Person: Edward Joseph "Bud" O'Reilly (Grandpa)

```
Edward Joseph "Bud" O'Reilly (1921–2002) ♂
├── Father: Patrick Joseph O'Reilly (1883–1972) ♂
│   ├── Father: Edward (Edmond) O'Reilly (1839–1892) ♂
│   │   ├── Father: James O'Reilly (c. 1780–?) ♂
│   │   └── Mother: Ellen Walsh (1830–?) ♀
│   └── Mother: Johanna Hanrahan (1858–1949) ♀
│       ├── Father: Patrick Hanrahan (1831–1902) ♂
│       └── Mother: Ellen Cassin (1836–1896) ♀
└── Mother: Catherine Loretta Sheehy (1894–1990) ♀
    ├── Father: Richard Joseph Sheehy (1860–1931) ♂
    │   ├── Father: William Joseph Sheehy (1824–1868) ♂
    │   └── Mother: Catherine Barrett (1830–?) ♀
    └── Mother: Anna Woulfe (1875–1967) ♀
        ├── Father: Patrick Woulfe (? – ?) ♂
        └── Mother: Bridget Roche (1850–?) ♀
```

Spouse shown alongside focal person:
- Eileen Marie Coffey (1923–2013) ♀

### 2. COFFEY LINE — Focal Person: Eileen Marie Coffey (Grandma — she IS the Coffey line representative)

Actually, Eileen's parents are on the COFFEY page:

```
Eileen Marie Coffey (1923–2013) ♀ — shown as focal on Coffey page
├── Father: John J. Coffey (1875–1951) ♂
│   ├── Father: Jeremiah (Jerry) Coffey (1836–?) ♂
│   │   └── Mother: Mary Cronin (1805–1885) ♀ [grandmother of Jeremiah — this is his MOTHER's mother? No.]
│   └── Mother: Janet Clifford (?–1895) ♀
│       └── Father: James Clifford (?) ♂
└── Mother: Julia Therese Sheehan (1889–1965) ♀
    ├── Father: Patrick Sheehan (1846–?) ♂
    │   ├── Father: Jeremia Sheehan (1820–?) ♂
    │   └── Mother: Genita Thomas (1820–?) ♀
    └── Mother: Mary Fitzgerald Sheehan (?–1931) ♀
        ├── Father: Daniel Sheehan (1798–1870) ♂
        └── Mother: Ellen Fitzgerald Sheehan (1810–1887) ♀
```

Wait — I need to be more careful here. Let me re-read the data.

For Jeremiah (Jerry) Coffey:
- His parents: Mary Cronin is listed as his MOTHER (the notes say "Mother of Jeremiah Coffey (b.1836), grandfather of John J. Coffey"). So Mary Cronin (1805–1885) is Jeremiah's mother.
- His father: The notes mention "Married Jeremiah Coffey Sr. on February 7, 1824 in Killorglin, Kerry" — so there's a Jeremiah Coffey SR. who is the father.
- Actually wait — Mary Cronin married "Jeremiah Coffey Sr." So there's a Jeremiah Sr (the father of our Jeremiah) who married Mary Cronin.

CORRECTED Coffey pedigree:
```
Eileen Marie Coffey (1923–2013) ♀
├── Father: John J. Coffey (1875–1951) ♂
│   ├── Father: Jeremiah (Jerry) Coffey (1836–?) ♂
│   │   ├── Father: Jeremiah Coffey Sr. (implied, married Mary Cronin 1824) ♂ — NO DATA beyond marriage
│   │   └── Mother: Mary Cronin (1805–1885) ♀
│   └── Mother: Janet Clifford (?–1895) ♀
│       └── Father: James Clifford (?) ♂
└── Mother: Julia Therese Sheehan (1889–1965) ♀
    ├── Father: Patrick Sheehan (1846–?) ♂
    │   ├── Father: Jeremia Sheehan (1820–?) ♂
    │   └── Mother: Genita Thomas (1820–?) ♀
    └── Mother: Mary Fitzgerald Sheehan (?–1931) ♀
        ├── Father: Daniel Sheehan (1798–1870) ♂
        └── Mother: Ellen Fitzgerald Sheehan (1810–1887) ♀
```

Spouse shown alongside focal person:
- Edward Joseph "Bud" O'Reilly (1921–2002) ♂

### 3. LINNERUD LINE — Focal Person: Lyle Andrew Linnerud (Grandpa)

```
Lyle Andrew Linnerud (1922–2015) ♂
├── Father: Andrew Olaus Linnerud (1885–1948) ♂
│   ├── Father: Anders Pedersen (?) ♂ — birth father, nothing else known
│   └── Mother: Marthe Arnesdatter (?) ♀ — unmarried servant girl
└── Mother: Anna Gudrun Lee (1893–1987) ♀
    ├── Father: Sigvart S. Lee / Sigvard Sørensen (1859–1943) ♂
    │   ├── Father: Søren Sørensen (~1829–?) ♂
    │   └── Mother: Gubjør Olsdatter (~1824–?) ♀
    └── Mother: Berthea S. Lee / Berthea Arnesdatter (~1861–1921) ♀
        ├── Father: Arne (?) ♂ — first name only
        └── Mother: Anne Gundersdatter (?) ♀
```

Spouse shown alongside focal person:
- Helen Marie Jakubicek (1925–2010) ♀

### 4. JAKUBICEK LINE — Focal Person: Helen Marie Jakubicek (Grandma — she IS the Jakubicek representative)

```
Helen Marie Jakubicek (1925–2010) ♀
├── Father: Thomas Joseph Jakubicek (1886–1963) ♂
│   ├── Father: George Jakubicek (?) ♂ — from Moravia, known only from death record
│   └── Mother: Marie Jakubicek (?) ♀ — from Moravia, known only from death record
└── Mother: Marie E. Melka (~1896–1989) ♀
    ├── Father: Ludvik Melka (?) ♂
    └── Mother: Klara Marc/Marč (?) ♀
```

Spouse shown alongside focal person:
- Lyle Andrew Linnerud (1922–2015) ♂

## CRITICAL ACCURACY RULES

1. Use ONLY the data from families.ts — do NOT invent dates, places, or relationships
2. If a date is unknown, show "?" — NEVER guess
3. If only a first name is known (e.g., "Arne"), show just that — don't add a last name
4. Birth place abbreviations: use "Kilkenny, Ireland" not full addresses
5. The generation labels in families.ts (Generation 0, 1, 2, 3) map to different levels:
   - O'Reilly: Gen 0 = 3× great-grandparents, Gen 1 = 2× great-grandparents (Edward/Johanna), Gen 2 = great-grandparents (Patrick/Catherine), Gen 3 = grandparents (Bud/Eileen)
   - Coffey: Gen 0 = 3× great-grandparents, Gen 1 = great-grandparents (John/Julia)
   - Linnerud: Gen 0 = 3× great-grandparents (Lee side), Gen 1 = 2× great-grandparents, Gen 2 = great-grandparents (Andrew/Anna), Gen 3 = grandparents (Lyle/Helen)
   - Jakubicek: Gen 0 = 2× great-grandparents, Gen 1 = great-grandparents (Thomas/Marie)

## Scroll IDs
Each person card on the family/[id] page needs a scroll target ID based on the person's name (slugified). The PedigreeChart links to these. Add `id={slugify(person.name)}` to each PersonCard in the generations rendering.

## Implementation
1. Create `src/components/PedigreeChart.tsx`
2. Create `src/data/pedigree-data.ts` — exports the 4 pedigree trees as typed data
3. Modify `src/app/family/[id]/page.tsx` to:
   - Import and render PedigreeChart between hero and The Village
   - Add scroll IDs to each PersonCard
   - Add floating "↑ Back to Chart" button (shows after scrolling 800px)
4. Do NOT modify families.ts
5. Do NOT change any existing component styling

## File locations
- Project: /Users/daveoreilly/projects/oreilly-family-tree
- Component: src/components/PedigreeChart.tsx
- Data: src/data/pedigree-data.ts
- Page: src/app/family/[id]/page.tsx

## Build & Deploy
After building, run `npm run build` to verify no errors, then `git add -A && git commit && git push origin main`.
