// ═══════════════════════════════════════════════
// FAMILY TREE DATA — Structured from Master Document
// ═══════════════════════════════════════════════

export interface Person {
  name: string;
  birthName?: string;
  born?: string;
  bornPlace?: string;
  died?: string;
  diedPlace?: string;
  occupation?: string;
  spouse?: string;
  immigrated?: string;
  ship?: string;
  description?: string;
  physical?: string;
  burial?: string;
  notes?: string[];
}

export interface FamilyLine {
  id: string;
  name: string;
  subtitle: string;
  country: string;
  flag: string;
  color: string;
  colorAccent: string;
  village: {
    name: string;
    region: string;
    country: string;
    description: string;
  };
  crossing: {
    person: string;
    ship: string;
    departed: string;
    departurePort: string;
    arrived: string;
    arrivalPort: string;
    age: number;
    year: number;
    details: string;
  }[];
  generations: {
    label: string;
    relation: string;
    people: Person[];
    notes?: string[];
  }[];
  stories: {
    title: string;
    content: string;
    pullQuote?: string;
  }[];
}

export const familyLines: FamilyLine[] = [
  // ═══════════════════════════════════════════════
  // O'REILLY LINE — County Kilkenny, Ireland
  // ═══════════════════════════════════════════════
  {
    id: "oreilly",
    name: "O'Reilly",
    subtitle: "From Thomastown to Chicago",
    country: "Ireland",
    flag: "🇮🇪",
    color: "cork-green",
    colorAccent: "#2D5A27",
    village: {
      name: "Thomastown",
      region: "County Kilkenny",
      country: "Ireland",
      description: "The O'Reilly family came from Thomastown, a medieval market town on the River Nore in County Kilkenny. Thomastown sits in the heart of Ireland's southeast — just miles from Jerpoint Abbey, the 12th-century Cistercian monastery where the family's great-great-grandfather Edward O'Reilly is buried. The area has deep roots: Norman, Gaelic, and Catholic, with parish records at the Church of the Assumption dating back centuries.",
    },
    crossing: [
      {
        person: "Patrick Joseph O'Reilly",
        ship: "Unknown (arrived 1906)",
        departed: "Ireland",
        departurePort: "Unknown",
        arrived: "1906",
        arrivalPort: "Unknown",
        age: 23,
        year: 1906,
        details: "Patrick left Thomastown, Kilkenny around age 23 and arrived in the United States in 1906, settling in Chicago. His father Edward had died in 1892 when Patrick was just 9 years old. His mother Johanna Hanrahan remained in Thomastown until her death in 1949 at age 90. Per the 1920 Census, he was living in Chicago Ward 7 by 1917 at 727 E 50th Street.",
      },
    ],
    generations: [
      {
        label: "Generation 0",
        relation: "Generation 1 — 3× Great-Grandparents",
        people: [
          {
            name: "James O'Reilly",
            born: "c. 1780",
            bornPlace: "Thomastown, Kilkenny, Ireland (Powerswood area)",
            spouse: "Ellen Walsh",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: I25)",
              "Born c.1780 in the Thomastown/Powerswood area of County Kilkenny",
              "Father of Edward (or Edmond) O'Reilly (b.1839)",
              "Note on Irish naming: the Mac and O prefixes were dropped and added at will — in early records he may appear as 'Reilly' without the O",
            ],
          },
          {
            name: "Ellen Walsh",
            born: "September 19, 1830",
            bornPlace: "Inistioge, County Kilkenny, Ireland",
            died: "Thomastown, Kilkenny, Ireland",
            spouse: "James O'Reilly",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P45)",
              "Born in Inistioge — the village on the River Nore near Thomastown, Co. Kilkenny",
              "Mother of Edward (or Edmond) O'Reilly (b.1839)",
            ],
          },
          {
            name: "Patrick Hanrahan",
            born: "April 4, 1831",
            bornPlace: "Ballingarry, Callan, Kilkenny, Ireland",
            died: "December 1902",
            diedPlace: "Callan, Thomastown, Co. Kilkenny, Ireland",
            spouse: "Ellen Cassin",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P48)",
              "Parents: Thomas Hanrahan (b.1810) and Honora Shunny (b.1810)",
              "Baptism (LDS): 4 Apr 1831, Windgap, Kilkenny",
              "Married Ellen Cassin on February 23, 1840 at Inistioge, Co. Kilkenny",
              "Children: Johanna (b.1858), Michael (c.1848), Patrick (b.1855)",
              "Father of Johanna Hanrahan, who married Edward (Edmond) O'Reilly",
              "Died December 1902 in Callan, Kilkenny, age 71",
            ],
          },
          {
            name: "Ellen Cassin",
            born: "April 29, 1836",
            bornPlace: "Inistioge Thomastown, Co. Kilkenny, Ireland",
            died: "March 1896",
            diedPlace: "Thomastown, Co. Kilkenny, Ireland",
            spouse: "Patrick Hanrahan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P47)",
              "Baptized 29 Apr 1836 at St. John's, Kilkenny",
              "Married Patrick Hanrahan on February 23, 1840 at Inistioge",
              "Mother of Johanna Hanrahan (b.1858)",
              "Died March 1896 in Thomastown, Co. Kilkenny, age ~59",
            ],
          },
          {
            name: "William Joseph Sheehy",
            born: "December 1824",
            bornPlace: "Newcastle West, Limerick, Ireland",
            died: "September 29, 1868",
            spouse: "Catherine Barrett",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P57)",
              "Parents: Richard Sheehy and Hanora Hough — both from Newcastle West, Limerick",
              "Married Catherine Barrett on November 16, 1856 at the Immaculate Conception Church, Newcastle West, Co. Limerick",
              "Children: John Sheehy (c.1857), Richard Joseph Sheehy (b.1860), Mary Sheehy",
              "Died young at age ~33 on September 29, 1868",
              "Father of Richard Joseph Sheehy (2× great-grandfather, Generation 2)",
            ],
          },
          {
            name: "Catherine Barrett",
            born: "1830",
            bornPlace: "Newcastle West, Limerick, Ireland",
            spouse: "William Joseph Sheehy",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P56)",
              "Married William Joseph Sheehy on November 16, 1856 at the Immaculate Conception Church, Newcastle West",
              "Husband William died September 29, 1868 at age 33",
              "Mother of Richard Joseph Sheehy (b.1860), who emigrated to Chicago",
            ],
          },
          {
            name: "Patrick Woulfe",
            bornPlace: "Cratloe West near Abbeyfeale, Limerick, Ireland",
            spouse: "Bridget Roche",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P50)",
              "Lived in the Cratloe West area of Abbeyfeale, County Limerick",
              "Father of Anna Woulfe (b.1875) — 2× great-grandmother, Generation 2",
              "Brought family to America when Anna was 12 (1887)",
            ],
          },
          {
            name: "Bridget Roche",
            born: "1850",
            bornPlace: "Cratloe West near Abbeyfeale, Limerick, Ireland",
            spouse: "Patrick Woulfe",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P49)",
              "Mother of Anna Woulfe (b.1875) — 2× great-grandmother, Generation 2",
              "Came to America with family when Anna was 12 (1887)",
            ],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Generation 2 — 2× Great-Grandparents",
        people: [
          {
            name: "Edward (Edmond) O'Reilly",
            born: "October 13, 1839",
            bornPlace: "Thomastown, Kilkenny, Ireland",
            died: "February 28, 1892",
            diedPlace: "Thomastown, Kilkenny, Ireland",
            burial: "Jerpoint Abbey Graveyard, Thomastown, Kilkenny",
            spouse: "Johanna Hanrahan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P17)",
              "Died at age 52 — his son Patrick was only 9 years old",
              "Buried at Jerpoint Abbey — a 12th-century Cistercian monastery, a significant and historic burial site",
              "Married Johanna Hanrahan in 1879 at either the Church of the Assumption in Thomastown or St. Columba's Church in Inistioge",
              "History: Edward only had to cross the Arrigle River at the bottom of the O'Reilly farm to be near the Hanrahan home. The Arrigle separates Powerswood from Inistioge.",
              "1911 Census: Residence at Powerswood, Pleberstown, Kilkenny (family still there after his death)",
              "10 children: Bridget (b.1877, d.1965, Coolroemore, Co. Kilkenny, age 87), James (b.1879, d.1955, Powerswood, age 75), Ellen (b.1881, d.1974, New Jersey, age 92), Patrick Joseph (b.1883, emigrated to Chicago 1906), Edward Jr. (b.1885, d.1959, Thomastown, age 74), Johanna (b.1889), Josephine (b.1889), Katie (b.1891), Michael Joseph (b.1893, d.1974, Chicago, age 81), Catherine (buried St. Mary Cemetery, Thomastown)",
            ],
          },
          {
            name: "Johanna Hanrahan",
            born: "October 13, 1858",
            bornPlace: "Kilkenny, Ireland",
            died: "March 6, 1949",
            diedPlace: "Thomastown, Kilkenny, Ireland",
            spouse: "Edward (Edmond) O'Reilly",
            burial: "St. Mary Cemetery, Thomastown (new cemetery, road to Dublin)",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P16)",
              "Nickname: Judy — all certificates list her as Judy",
              "Christened October 13, 1858 at Inistioge, Kilkenny — baptized by Rev. P. Doyle",
              "Birth certificate: parents Pat Hanrahan, Powerswood + Ellen Cassin; sponsors Thomas Rafter and Cathirine Rafter",
              "Lived to age ~90 — survived her husband by 57 years",
              "Remained in Thomastown her entire life",
              "Her brother John Hanrahan and sister Bridget Hanrahan were baptism sponsors for Patrick",
              "Known relatives: Patrick Hanrahan (first cousin, d.Nov 24 1944); Patrick Hanrahan (1902, nephew, d.Jun 27 1970 age 68); Anne (Hanrahan) Mullins (1864, first cousin, d.Nov 4 1955 age 91); Thomas Mullins (1896, cousin, d.Sep 11 1982 age 86)",
              "1911 Census documents: 4 records surviving at Powerswood, Pleberstown, Kilkenny",
            ],
          },
          {
            name: "Richard Joseph Sheehy",
            born: "April 17, 1860",
            bornPlace: "Newcastle West, Limerick, Ireland",
            died: "September 15, 1931",
            diedPlace: "Chicago, Cook County, Illinois",
            spouse: "Anna Woulfe",
            burial: "Holy Sepulchre Cemetery, Worth, IL — Lot #39, Section 10",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P22)",
              "Parents: William Joseph Sheehy (b.Dec 1824) and Catherine Barrett (b.1830), Newcastle West, Limerick",
              "Married Anna Woulfe on September 25, 1894 in Chicago",
              "Arrived in US ~1882-1890 (census sources vary)",
              "3 children: Catherine Loretta (b.1894), Marie (b.1898), Anna V. (b.1902)",
              "Father of Catherine Loretta Sheehy, who married Patrick Joseph O'Reilly",
              "Died September 15, 1931 in Chicago, age 71",
            ],
          },
          {
            name: "Anna Woulfe",
            born: "May 18, 1875",
            bornPlace: "Cratloe West, Abbeyfeale, Limerick, Ireland",
            died: "September 17, 1967",
            diedPlace: "Chicago, Cook County, Illinois",
            spouse: "Richard Joseph Sheehy",
            burial: "Holy Sepulcher Cemetery, Worth, IL (alongside husband Richard)",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P23)",
              "Nickname: Hanna. Known to great-grandchildren as 'Grandma Shug'",
              "Parents: Patrick Woulfe and Bridget Roche — both from Cratloe West near Abbeyfeale, Limerick",
              "Came to the US with her parents at age 12 (1887)",
              "Siblings: John, Katie, Bridget, Nelly",
              "Married Richard Joseph Sheehy on September 25, 1894 in Chicago",
              "Died of ASHD (arteriosclerotic heart disease) at age 92",
              "Residence at death: 8006 Paulina, Southside Chicago",
              "Mother of Catherine Loretta Sheehy, who married Patrick Joseph O'Reilly",
            ],
          },
        ],
      },
      {
        label: "Generation 2",
        relation: "Generation 3 — Great-Grandparents",
        people: [
          {
            name: "Patrick Joseph O'Reilly",
            born: "March 6, 1883",
            bornPlace: "Thomastown, Kilkenny, Ireland",
            died: "October 25, 1972",
            diedPlace: "Chicago, Cook County, Illinois",
            occupation: "City Railway Conductor → Chicago Transit Authority Conductor (1920–1950+). Drove South Side streetcars for 30+ years. Still conducting at age 67 in 1950 when the CTA had replaced the old City Surface Lines.",
            spouse: "Catherine Loretta Sheehy",
            immigrated: "1906 (age 23)",
            physical: 'Medium build, black hair, grey eyes (WWI Draft Card 1917-18, Cook County Draft Board 20)',
            burial: "St. Mary's Cemetery, Evergreen Park, IL (buried October 25, 1972)",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P15)",
              "Christened March 8, 1883 at the Church of the Assumption, Thomastown, by Rev. John Walsh",
              "Baptism sponsors: John Hanrahan and Bridget Hanrahan (his mother's siblings)",
              "Father died when Patrick was 9 — grew up fatherless in Thomastown",
              "Emigrated to the US in 1906 on the SS Celtic, departing Queenstown (Cobh), Ireland",
              "Ellis Island arrival: September 2, 1906 — age 22, single, $5.00 in his pocket",
              "Initial destination: Newark, New Jersey — going to his AUNT Annia Hoggins (unknown branch of family)",
              "At some point between 1906 and 1918, moved to Chicago where he married Catherine",
              "Married Catherine Loretta Sheehy on August 28, 1918 in Chicago",
              "WWI Draft Card (1917-1918): registered at 727 E 50th St, Chicago, Draft Board 13. Medium build, medium height, black hair, blue eyes. Listed wife Catherine O'Reilly as relative. Registered in the September 12, 1918 'Old Man's Registration' at age 35 — the war ended just 2 months later. Likely never served.",
              "Lived to age 89 — his grandson Terrence (Generation 5) would have been ~16 when Patrick died",
              "Ancestry sources: Irish Civil Registration (Mar 1883), Church baptism, 1920 Census, 1940 Census, SSDI (SSN 319-07-3900), Cook County Marriage Index, WWI Draft Card",
              "5 children: Loretta Josephine (1919-2000), Edward 'Bud' (1921-2002), Richard Joseph (1923-1980), James Patrick 'Uncle Jay' (1924-2012), Jerome (b.1932, possibly still living)",
            ],
          },
          {
            name: "Catherine Loretta Sheehy",
            born: "September 30, 1894",
            bornPlace: "Chicago, Cook County, Illinois",
            died: "October 9, 1990",
            diedPlace: "Arlington Heights, Cook County, Illinois",
            spouse: "Patrick Joseph O'Reilly",
            burial: "St. Mary's Cemetery, Evergreen Park, IL",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P14)",
              "Born in Chicago — an Irish-American, not an immigrant",
              "Father: Richard Joseph Sheehy (1860-1931); Mother: Anna Woulfe (1875-1967)",
              "Home address: 2821 W. 85th Place, Chicago, IL",
              "Lived to age 96 — her grandson Terrence (Generation 5) would have known her well",
              "Married Patrick on August 28, 1918 in Chicago",
              "Sisters: Marie Sheehy (b.1898, d.1993, age 94) and Anna V. Sheehy (b.1902, d.1975, Chicago, age 73)",
              "Ancestry sources: Cook County Marriage Index, 1920/1940 Census, SSDI (722-03-2283), 1910 Census",
            ],
          },
        ],
        notes: [
          "Their 5 children: Loretta Josephine (1919-2000), Edward Joseph 'Bud' (1921-2002), Richard Joseph (1923-1980, died at 56), James Patrick (1924-2012, bachelor missionary in Deming, NM), Jerome (b. 1932, possibly still living)",
        ],
      },
      {
        label: "Generation 3",
        relation: "Generation 4 — Grandparents",
        people: [
          {
            name: 'Edward Joseph "Bud" O\'Reilly',
            born: "January 24, 1921",
            bornPlace: "Chicago, Illinois",
            died: "April 7, 2002",
            occupation: "U.S. Army Veteran (WWII)",
            spouse: "Eileen M. Coffey",
            physical: '5\'11", 165 lbs, black hair, blue eyes, ruddy complexion',
            burial: "Holy Sepulchre Catholic Cemetery, Alsip, Cook County, Illinois — CONFIRMED (Find A Grave memorial #50749310). Same cemetery as John J. Coffey and Julia Coffey. The O'Reilly and Coffey families are buried together at Holy Sepulchre.",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P8)",
              "Born Edward Francis — adopted confirmation name Joseph, thereafter went by Edward Joseph O'Reilly (EJ O'Reilly)",
              "Second of 5 children — older sister Loretta was born 1919",
              "Leo High School, class of 1938 (yearbook photo confirmed)",
              "WWII Veteran — U.S. Army. WWII Draft Card (Feb 16, 1942, Chicago): listed as STUDENT, 5'11\", 165 lbs, black hair, blue eyes, ruddy complexion. Next of kin: mother Catherine O'Reilly. Enlisted January 21, 1942 per family records. Discharged January 5, 1946. Nearly 4 years of service. Service Number 16070923.",
              "Family says Patton's 3rd Army, Battle of the Bulge (unverified — Army personnel files largely destroyed in 1973 NPRC fire)",
              "Brought home a captured German pistol",
              "Post-war career details pending family verification",
              "Children (per O'Reilly family archive): MarySue, JoAnn, Tom, Terry, Patrick, Hugh. Terrence Patrick is Generation 5.",
              "Died April 7, 2002 in Oak Lawn, Illinois, age 81",
              "Funeral at St. Catherine of Alexandria Church, Oak Lawn",
              "Inherited his father Patrick's black hair and blue eyes",
              "Document on record: Edward F. O'Reilly's Certificate of Birth",
            ],
          },
          {
            name: "Eileen Marie Coffey",
            born: "May 18, 1923",
            bornPlace: "Chicago, Illinois",
            died: "June 20, 2013",
            spouse: 'Edward Joseph "Bud" O\'Reilly',
            burial: "Holy Sepulchre Cemetery, Alsip, IL — Section 19, Block 19, Lot 22, Grave 1",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P7)",
              "Had a twin brother Daniel Coffey — both born May 18, 1923, Chicago",
              "Parents were Irish immigrants from County Kerry",
              "Grew up at 7748 S. Langley Ave — ONE BLOCK from Edward's address on St. Lawrence Ave",
              "Told her grandchildren a shipwreck story 2-3 weeks before she died",
              "Siblings: John Patrick (b.1915), Mary Ellen (b.c.1918), Jeremiah 'Jerry' (b.c.1920), Paul T. (b.c.1921), Daniel (b.1923, her twin — CONFIRMED by 1940 Census: both listed age 16), Loretta (b.c.1924)",
              "1930 Census: Eileen listed as 'Jean M. Coffey, age 6' — name mangled by census taker. Twin Daniel listed as 'Donald J. Coffey, age 6'",
              "1940 Census: Eileen listed as 'Eillen Coffey, age 16' — Daniel listed as 'Daniel Coffey, age 16'. Twin status CONFIRMED.",
              "1940 Census confirms presence in Chicago household at age ~17",
            ],
          },
        ],
      },
    ],
    stories: [
      {
        title: "One Block Apart",
        content: "Edward O'Reilly's 1942 draft card lists his address as 7341 S. St. Lawrence Avenue. Eileen Coffey grew up at 7748 S. Langley Avenue. These streets are one block apart on Chicago's South Side. The O'Reilly boy and the Coffey girl from Kerry stock — they were neighbors before they were sweethearts.",
        pullQuote: "Two Irish families, one block apart on Chicago's South Side. Some things are not coincidence.",
      },
      {
        title: "Buried at the Abbey",
        content: "Edward O'Reilly — Patrick's father and the family's 2× great-grandfather (Generation 1) — is buried at Jerpoint Abbey in Thomastown, Kilkenny. Founded in 1180 by Cistercian monks, the abbey is one of Ireland's finest medieval ruins. Its carved cloister arcade features knights and saints and dragons. Edward died at 52 in 1892, leaving 9-year-old Patrick fatherless. Fourteen years later, Patrick would leave Thomastown for America.",
        pullQuote: "A medieval abbey in Kilkenny. That's where the O'Reilly story begins — and where it rests.",
      },
      {
        title: "Black Hair, Blue Eyes",
        content: "Patrick Joseph O'Reilly's 1918 WWI draft card describes him simply: medium build, medium height, black hair, blue eyes. His son Edward 'Bud' inherited the same features — the 1942 WWII draft card records black hair, blue eyes, ruddy complexion. The next generation carries the same coloring. Three generations of O'Reilly men, the same black hair and blue eyes, passed down from a stone town in Kilkenny to Chicago's South Side.\n\nPatrick registered on September 12, 1918 — the 'Old Man's Registration' for men 18 to 45 who hadn't previously registered. He was 35, married to Catherine, with a baby on the way (Loretta would arrive in 1920). The war ended just two months later. Patrick almost certainly never served. But he signed up.",
        pullQuote: "Three generations of O'Reilly men. The same black hair and blue eyes from Kilkenny.",
      },
      {
        title: "Two Immigrants, One Draft",
        content: "In 1917, the United States entered World War I. Every man between 18 and 45 was required to register for the draft. Two of the family's great-grandfathers — strangers to each other, from opposite corners of Europe — both walked into registration offices in Illinois and signed their names.\n\nPatrick Joseph O'Reilly, age 35, registered at Draft Board 13 in Chicago. Born in Thomastown, Kilkenny, Ireland. Medium build, black hair, blue eyes. Wife: Catherine O'Reilly. Address: 727 East 50th Street.\n\nAndrew Olaus Linnerud, age 32, registered in Boone County, 80 miles northwest of Chicago. Born in Vinger, Hedmark, Norway. Medium build, dark hair, blue eyes. Wife: Annie Linnerud. Living on a farm.\n\nNeither man likely served. Patrick was 35 with a baby on the way. Andrew was 32 with a young family in rural Illinois. The war ended two months after Patrick's registration. But both signed up. Two immigrants — one Irish, one Norwegian — who had left everything behind for America, and were willing to fight for it.\n\nA generation later, their sons would answer the call for real. Patrick's son Edward 'Bud' enlisted in the Army 45 days after Pearl Harbor. Andrew's son Lyle enlisted in the Coast Guard a year later. Both served the entire war. The fathers registered. The sons went.",
        pullQuote: "Two immigrants who had left everything behind for America, and were willing to fight for it.",
      },
      {
        title: "The Five Children of Patrick & Catherine",
        content: "Patrick and Catherine raised five children in Chicago: Loretta Josephine (1919), Edward 'Bud' (1921), Richard Joseph (1923), James Patrick (1924), and Jerome (1932). Richard died at just 56. James Patrick — 'Uncle Jay' — never married, becoming a lifelong bookworm and eventually a missionary in Deming, New Mexico. Jerome, the baby, may still be living at age 94. A photo from the early 1950s shows the four older children together: Richard, James, Edward, and Loretta.",
      },
      {
        title: "Five Dollars and an Aunt in Newark",
        content: "On September 2, 1906, a 22-year-old man named Patrick Oreilly walked through Ellis Island and into America.\n\nHe had sailed from Queenstown — the main Irish emigrant port, now called Cobh — on the SS Celtic. In his pocket: five dollars. His marital status: single. His declared destination: not Chicago, but Newark, New Jersey. His contact: an aunt named Annia Hoggins.\n\nAnnia Hoggins. The name appears on no other family record. She was not an O'Reilly — the name Hoggins suggests she may have been a relation through the Hanrahan side, Patrick's mother's family, already established in America. She was waiting for him in New Jersey.\n\nWe don't know how long he stayed in Newark, or what he did there. What we know is that by 1918, Patrick Joseph O'Reilly was in Chicago — and on August 28 of that year, he married Catherine Loretta Sheehy at a Chicago church. Somewhere in the twelve years between Newark and Chicago, he had found his way to the city where he would spend the rest of his life.\n\nHe arrived with five dollars. He died in 1972 at age 88 or 89, after raising five children and watching his grandchildren grow up in the American suburbs he could not have imagined as a young man on a ship from Queenstown.\n\nSources: Ellis Island / New York Passenger Lists, SS Celtic, 2 Sep 1906. Record ID 4013498907, Ancestry.com collection 7488.",
        pullQuote: "His declared destination: not Chicago, but Newark, New Jersey. His contact: an aunt named Annia Hoggins — a name that appears on no other family record.",
      },
      {
        title: "The Man on the Streetcar",
        content: "By 1920, Patrick O'Reilly had made it to Chicago.\n\nThe 1920 Federal Census finds him at an address on 65th Street, in Chicago's Ward 7 on the South Side — not far from the Irish working-class neighborhoods that had been absorbing immigrants from County Kerry and County Kilkenny for decades. He was 35. He had been in America for fourteen years.\n\nHis occupation: Conductor. City Railway.\n\nPatrick O'Reilly drove streetcars. He worked the Chicago surface lines — the clanging, open-sided cars that carried factory workers, shoppers, and schoolchildren across the South Side grid. It was solid union work. Regular hours, regular pay. The kind of job an Irish immigrant with no college education could hold with dignity for decades.\n\nIn the house with him: his wife Catherine, age 25. And a daughter — Loretta O'Reilly, listed in the census as age 0. An infant. Born in 1920.\n\nThe following year, on January 24, 1921, they would have another child: Edward Joseph O'Reilly — born Edward Francis, he would take Joseph as his confirmation name — the boy who would grow up to be called 'Bud,' who would enlist in the Army just weeks after Pearl Harbor, who would serve in Patton's Third Army, who would come home and become the grandfather of the current generation.\n\nAlso in the house: a lodger named Mary Driscoll, age 20. Probably another Irish immigrant taking a room. The O'Reillys were renting, not owning. Five dollars when he arrived, a streetcar route on the South Side, a baby daughter, and another child on the way.\n\nHe was building something.\n\nSources: 1920 United States Federal Census, Chicago Ward 7, Cook County, Illinois. Roll T625_315, Page 5A, Enumeration District 422.",
        pullQuote: "His occupation: Conductor. City Railway. Patrick O'Reilly drove streetcars across Chicago's South Side. In the summer of 1919, those streetcars became the front lines of one of the worst race riots in American history.",
      },
      {
        title: "The Summer the Streetcars Burned",
        content: "On July 27, 1919, Chicago exploded.\n\nA 17-year-old Black teenager named Eugene Williams drowned at a South Side beach after a white man hurled rocks at him for drifting into an unofficially 'white' swimming area near 29th Street. What followed was eight days of racial violence so severe it was called the worst riot of the Red Summer of 1919 — 38 dead, 537 injured, more than 1,000 residents losing their homes.\n\nThe riots spread through the neighborhoods. And they spread through the streetcars.\n\nWhite mobs pulled Black passengers off Chicago surface cars at South Side intersections and beat them with planks, pipes, and bricks. Conductors warned Black passengers not to ride beyond certain streets. One account describes white rioters forcing Black riders from cars at Canal and West 26th Street. The Chicago City Railway — the same company Patrick O'Reilly worked for as a conductor — was at the center of it.\n\nPatrick was 35 years old that summer. He was living at 65th Street in Ward 7, just south of where the worst violence occurred. He had been a City Railway conductor for at least a year, probably more. He drove the same South Side routes every day.\n\nWe don't know what Patrick O'Reilly saw or did during those eight days. The records don't say. But he was there — on the South Side, in the cars, during the worst week in Chicago's racial history.\n\nThe Irish were not bystanders in 1919. Wikipedia's account of the riot notes plainly: 'The long-established Irish fiercely defended their neighborhoods and political power against all newcomers.' Irish street gangs — the Ragen's Colts among them — were among the most aggressive white mobs. The neighborhoods around 65th Street were heavily Irish.\n\nPatrick came from Kilkenny. He drove streetcars. He lived blocks from the riot zone. What he thought, what he did, what he witnessed — that is a story that died with him in 1972. But the city that made him was burning that summer, and he was in the middle of it.\n\nSources: Chicago Race Riot of 1919, Wikipedia; Chicago Sun-Times, July 29, 2021; New York Times, August 3, 2019.",
        pullQuote: "White mobs pulled Black passengers off Chicago surface cars and beat them at South Side intersections. Patrick O'Reilly — City Railway conductor, 35 years old, living on 65th Street — was driving those routes that summer.",
      },
      {
        title: "The House on St. Lawrence",
        content: "By 1930, the O'Reilly family had moved.\n\nThe 1930 Federal Census finds them at 7341 St. Lawrence Avenue, in Chicago's 8th Ward. Patrick is still a conductor on the City Surface lines — the same streetcar job he'd held for at least a decade. He's 46 years old. His wife Katharine is 34.\n\nBut one thing has changed: they are no longer renters.\n\nThe house at 7341 St. Lawrence is listed as owned — valued at $12,000. The man who walked through Ellis Island in 1906 with five dollars in his pocket now owned a home.\n\nAnd the house was full. In the 1930 Census, Patrick and Katharine are listed with four children:\n\nLoretta, 11. Edward, 9. Richard, 7. James, 5.\n\nEdward — the boy who would be called Bud — is nine years old. He's growing up on the South Side of Chicago, in a house his father bought, in a neighborhood of Irish and Polish and Italian families who had all come across the same ocean and made the same bet. Eleven years later, Pearl Harbor will be attacked. The boy in that house will enlist.\n\nJerome, the youngest, hasn't arrived yet. He'll come in 1932.\n\nPatrick's immigration year is listed as 1906. The census taker confirmed it. Twenty-four years after the SS Celtic dropped anchor in New York Harbor, the man who arrived with five dollars and an aunt's address in Newark owned a house in Chicago worth $12,000, and had four children sleeping upstairs.\n\nHe built it.\n\nSources: 1930 United States Federal Census, Chicago, Cook County, Illinois. Page 21B, Enumeration District 0341.",
        pullQuote: "The house at 7341 St. Lawrence is listed as owned — valued at $12,000. The man who arrived with five dollars now owned a home, and had four children sleeping upstairs. By 1940, all five were still there — including a 19-year-old named Edward, one year before Pearl Harbor.",
      },
      {
        title: "Still on the Line — 1950",
        content: "In April 1950, a census taker knocked on the door at 7341 St. Lawrence Avenue.\n\nPatrick O'Reilly was 67 years old. He answered the door.\n\nHe was still working. Forty hours a week. His occupation: Conductor. His employer: the Chicago Transit Authority — the CTA, which in 1947 had absorbed the old Chicago Surface Lines and become a government agency. The same routes. The same cars. A new name on the paycheck.\n\nPatrick had been driving those routes for over thirty years.\n\nIn the house with him: Katharine, 55. Three of their five children were still at home — Richard (27), James (25, though the census transcriber bizarrely wrote 75), and Jerome (19). Loretta and Bud were gone. Both married.\n\nBud — Edward Joseph O'Reilly — had already married Eileen Coffey by this point. We know because when Eileen's father John Coffey died in January 1951, the Chicago Tribune obituary listed her as 'Eileen O'Reilly.'\n\nPatrick had arrived with five dollars in 1906. He was still driving the same South Side routes in 1950. He would keep going until he simply couldn't anymore.\n\nHe died in 1972, at approximately age 89. He spent 66 years in America. He drove streetcars — and then CTA buses and cars — for at least three decades of it.\n\nSources: 1950 United States Federal Census, Chicago, Cook County, Illinois. Roll 5819, Page 12, Enumeration District 103-966. Ancestry collection 62308, record 219901243.",
        pullQuote: "Patrick O'Reilly was still driving for the Chicago Transit Authority in 1950 — 40 hours a week, at age 67. He had driven the South Side routes for more than 30 years. The man who arrived with five dollars never stopped working.",
      },
      {
        title: "The River Between Them",
        content: "Before Edward O'Reilly married Johanna Hanrahan in 1879, there was a river between their families.\n\nThe O'Reillys farmed at Powerswood, a small townland outside Thomastown on the Kilkenny side of the Arrigle River. The Hanrahans lived across the water, on the Inistioge side. To visit the Hanrahan home, Edward only had to cross the Arrigle at the bottom of his family's farm.\n\nIt is not a wide river. But it divided two townlands, two parishes, two ways of life. The O'Reillys were Thomastown people. The Hanrahans were Inistioge people. When they married — either at the Church of the Assumption in Thomastown or at St. Columba's in Inistioge — they united both banks.\n\nEdward died in 1892 at 52. Johanna outlived him by 57 years, dying in Thomastown in 1949 at age 90 or 93 — the records vary, as they often do for women of that era. She is buried in St. Mary's Cemetery on the road to Dublin. A widow for half a century, in the same county where she was born.",
        pullQuote: "To visit the Hanrahan home, Edward only had to cross the Arrigle at the bottom of his family's farm.",
      },
      {
        title: "From Abbeyfeale to Chicago: The Sheehy-Woulfe Line",
        content: "Catherine Loretta Sheehy was born in Chicago in 1894 — but her roots ran deep into County Limerick. Her father Richard Joseph Sheehy came from Newcastle West, a market town in western Limerick. His father William Joseph Sheehy had married Catherine Barrett there in 1856 at the Immaculate Conception Church. William died young at 33, leaving Richard to grow up fatherless — just as Patrick O'Reilly would lose his father at 9.\n\nRichard emigrated to Chicago sometime in the 1880s and married Anna Woulfe in 1894 — the same year their daughter Catherine was born. Anna came from an even more remote corner of Limerick: Cratloe West, near the town of Abbeyfeale, close to the Kerry border. She had emigrated at age 12 with her parents Patrick Woulfe and Bridget Roche.\n\nAnna lived to 92. She was known to her great-grandchildren as 'Grandma Shug.' She died in 1967 on the south side of Chicago, and is buried at Holy Sepulcher Cemetery in Worth, Illinois — alongside her husband Richard, who preceded her by 36 years.\n\nFour Irish emigrants — from Newcastle West and Abbeyfeale and Cratloe West — converged on Chicago's South Side, married, and produced Catherine Loretta, who married Patrick O'Reilly, who produced Edward 'Bud', who married Eileen Coffey, who produced Terrence (Generation 5).",
        pullQuote: "Anna Woulfe was known to her great-grandchildren as 'Grandma Shug.' She died in Chicago at 92, never having forgotten Abbeyfeale.",
      },
      {
        title: "The Woulfe Who Built a Printing Empire on Streetcar Pads",
        content: "In August 1990, the Chicago Tribune ran an obituary for John V. Woulfe Sr., 83, who had just died in Palos Heights, Illinois — the same southwest Chicago suburb where the O'Reilly and Coffey families had settled.\n\nJohn V. Woulfe Sr. was a native of Chicago. He attended the University of Notre Dame in the late 1920s. He lived on Clyde Avenue in the South Shore neighborhood — the same South Side of Chicago where Anna Woulfe (née from Cratloe West, Abbeyfeale) had spent her life. He died Catholic. His funeral was held at Thompson & Kuenster Funeral Home on West 95th Street in Oak Lawn.\n\nAnd he had founded one of Chicago's oldest family-owned printing companies — named Clyde Printing Co., after his street — in the 1940s. The company began as a supplier of 'take-one' pads on Chicago streetcars.\n\nStreetcars again. The same City Surface Lines that Patrick O'Reilly conducted for three decades. The same cars that rumbled down 65th Street and St. Lawrence Avenue.\n\nAnna Woulfe was born in 1875 in Cratloe West, Limerick, and emigrated to Chicago as a child with her parents Patrick Woulfe and Bridget Roche. John V. Woulfe Sr. was a native Chicagoan — likely born around 1907, making him almost certainly the son or nephew of another Woulfe from the same Abbeyfeale/Cratloe West emigrant wave. The shared surnames, the shared South Side geography, the shared Catholic funeral home, the shared suburb at the end of life — these are not coincidences. They are the fingerprints of the same Limerick family, scattered across the same city.\n\nIf confirmed, John V. Woulfe Sr. was the family's great-grandmother Anna's nephew. Clyde Printing's clients included the Chicago White Sox, the Chicago Cubs, the Chicago Bears, WGN, and Wrigley Company. A Woulfe from Abbeyfeale built a Chicago institution — from a cart of streetcar pads to the Cubs' printing vendor.\n\nThe obituary deserves a follow-up. The connection is not confirmed. But it is very, very likely.\n\nSources: Chicago Tribune, August 19, 1990 (obituary, John V. Woulfe Sr.).",
        pullQuote: "He founded Clyde Printing Co. — started as a supplier of 'take-one' pads on Chicago streetcars. A Woulfe from Abbeyfeale, supplying paper to the same cars Patrick O'Reilly drove.",
      },
      {
        title: "The Man Who Straightened the Chicago River",
        content: "In 1885, a young man named Richard White Wolfe left the Glen — a farm in the townland of Cratloe, parish of Athea, County Limerick — and sailed from Queenstown to America.\n\nHis father was Richard Edmond Woulfe, known locally as 'Dicky Ned' — a Catholic farmer and celebrated storyteller whose tales were recorded by Ireland's National Folklore Project. The Glen in Cratloe was the Woulfe family seat. It sat on the border of western Limerick and northern Kerry, not far from Abbeyfeale.\n\nNot far from where Anna Woulfe grew up.\n\nBy 1900, Richard Wolfe was in Chicago. He became a naturalized citizen in Cook County. He sold real estate. He reported for the Stockyards Daily Sun. He lectured on economics. He served as treasurer of the Irish Freedom Fund, which advocated for an Irish republic. He was a member of the Sheridan Club — a fraternal organization of Irish Americans headquartered on Michigan Avenue at 41st Street, deep in the South Side.\n\nAnd then he became Commissioner of Public Works for the City of Chicago under Mayor William Hale 'Big Bill' Thompson.\n\nAs commissioner, Richard Wolfe straightened the Chicago River — redirecting its course from the North Shore Channel to Belmont Street. He established Chicago's water filtration system. He served as Thompson's 'orator and wordsmith,' writing campaign material with the memorable line: 'Capitol Hill is influenced by the king of England.' His tenure was marked by controversies over city streets, accusations of corruption, and Irish nationalist fire.\n\nHe died in 1951. His New York Times obituary noted that he 'was a descendant of Gen. James Wolfe, conqueror of Quebec.'\n\nAnd Anna Woulfe — born in 1875 in Cratloe West near Abbeyfeale, the same townland — lived on the same South Side until she died in 1967, at age 92, known to her great-grandchildren as 'Grandma Shug.'\n\nCousin and cousin. One straightened the river. The other raised a family. The same farm in Limerick produced both.\n\nSources: thewolfes.family/richard-w-wolfe-18661951; Chicago Tribune archives.",
        pullQuote: "Richard 'Dick' Wolfe straightened the Chicago River as Commissioner of Public Works. He was born in the townland of Cratloe, parish of Athea, Limerick — the same geographic area as Anna Woulfe's family. Whether they share a common ancestor is unproven, but they came from the same small corner of Ireland.",
      },
      {
        title: "The Woulfe Who Died Fighting Fascists in Spain",
        content: "In October 1922, a young man from Athea, County Limerick named James J. Woulfe was captured by Irish Free State forces. He was a signaler in the G (Athea) Company of the West Limerick Brigade of the Irish Republican Army. He had fought through the War of Independence and into the Civil War. He was held until December 1923.\n\nWhen he was released, he left.\n\nIn 1924, James Woulfe emigrated to Canada. He worked as a logger. He organized sailors for a union. In 1932 he joined the Communist Party of Canada.\n\nIn March 1937, he sailed for Spain.\n\nFrancisco Franco's Nationalist forces had been at war with the elected Spanish Republic since 1936. Volunteers from around the world — the International Brigades — had come to fight. Among them was James Woulfe, most likely with the Abraham Lincoln Battalion.\n\nOn September 3, 4, or 5, 1937, at the Battle of Belchite in the Aragón region, James Woulfe was hit. A grenade blew away his jaw. He was taken to a field hospital. He died there.\n\nA Spanish death certificate was issued to his mother in April 1938. She was still in Athea, County Limerick, waiting for news that never came.\n\nJames Woulfe and Anna Woulfe came from the same parish — Athea, in western Limerick. The same families who crossed to Chicago also stayed in Limerick and fought for Ireland, then for Spain. One branch made a life in America. One stayed and kept fighting — in Ireland, in Canada, in Spain.\n\nThe Woulfe name runs through all of it.\n\nSources: spanishcivilwar.ca/volunteers/james-wolfe; thewolfes.family.",
        pullQuote: "James Woulfe was an IRA fighter from Athea, County Limerick — the same parish as Anna Woulfe. In 1937, he died at the Battle of Belchite, Spain, fighting Franco. A grenade blew away his jaw.",
      },
      {
        title: "The 50th Anniversary",
        content: "In 1968, Patrick Joseph O'Reilly and Catherine Loretta Sheehy celebrated their 50th wedding anniversary. They had married on August 28, 1918 — the year the Great War ended, the year the Spanish flu swept through Chicago, the year Patrick was 35 and Catherine was 23.\n\nFifty years later, a photograph was taken. Three panels: Patrick and Catherine as a young couple, as a middle-aged pair, and as elders — the long arc of a life together compressed into a single composite image. Patrick died four years later in 1972 at 89. Catherine would live another 18 years, dying in 1990 at 96 in Arlington Heights.\n\nTogether they had crossed from immigrant tenement to Chicago suburb across five decades — and raised five children who went on to build their own lives across the American Midwest.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // COFFEY/SHEEHAN LINE — County Kerry, Ireland
  // ═══════════════════════════════════════════════
  {
    id: "coffey",
    name: "Coffey & Sheehan",
    subtitle: "From Kerry to the South Side",
    country: "Ireland",
    flag: "🇮🇪",
    color: "kerry-blue",
    colorAccent: "#1B4965",
    village: {
      name: "Ballydarrig & Cahirciveen",
      region: "County Kerry",
      country: "Ireland",
      description: "John J. Coffey came from Ballydarrig, a townland near Castlequin in County Kerry — the wild, beautiful southwest corner of Ireland. His wife Julia Sheehan came from Dromod Parish near Waterville, about 30 miles away along the Ring of Kerry. Both families were farming people, Roman Catholic, Irish-speaking.",
    },
    crossing: [
      {
        person: "John J. Coffey",
        ship: "SS Ivernia (Cunard Line)",
        departed: "Queenstown (Cobh), Ireland",
        departurePort: "Queenstown",
        arrived: "April 24, 1902",
        arrivalPort: "Boston",
        age: 29,
        year: 1902,
        details: "John left Kerry alone at 29. His last residence was listed as 'Davegetown' — a Kerry townland. His contact in America was 'Ellen Bacon.' The Ivernia was a Cunard liner — the same company that operated the Lusitania.",
      },
      {
        person: "Julia Sheehan",
        ship: "SS Arabic",
        departed: "Queenstown (Cobh), Ireland",
        departurePort: "Queenstown",
        arrived: "May 5, 1906",
        arrivalPort: "Boston",
        age: 18,
        year: 1906,
        details: "Julia left Killahane, Kerry at just 18 years old. She carried $10 and listed her contact as 'Hanna Sheehan' — likely an aunt already in America. Four years later, she met John Coffey in Chicago. They married in 1913.",
      },
    ],
    generations: [
      {
        label: "Generation 0",
        relation: "3× Great-Grandparents (Eileen's great-grandparents)",
        people: [
          {
            name: "Jeremiah Coffey Sr.",
            bornPlace: "Killorglin, Kerry, Ireland",
            spouse: "Mary Cronin",
            notes: [
              "Married Mary Cronin on February 7, 1824 in Killorglin, Kerry",
              "Father of Jeremiah Coffey (b.1836) — Eileen's grandfather",
              "The Coffey story begins in Killorglin — a market town at the mouth of the Laune River in County Kerry, home to the famous Puck Fair",
              "No further dates or records found",
            ],
          },
          {
            name: "Mary Cronin",
            born: "March 18, 1805",
            bornPlace: "Killorglin, Kerry, Ireland",
            died: "1885",
            diedPlace: "Killorglin, Kerry, Ireland",
            spouse: "Jeremiah Coffey Sr.",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: I29)",
              "Christened March 18, 1805 at Killarney, Kerry",
              "Parents: Mary and Michael Cronin",
              "Married Jeremiah Coffey Sr. on February 7, 1824 in Killorglin, Kerry",
              "Had 10 children in 22 years",
              "Mother of Jeremiah Coffey (b.1836) — Eileen's grandfather",
              "Died 1885 in Killorglin, Kerry, age ~80",
            ],
          },
          {
            name: "James Clifford",
            bornPlace: "County Kerry, Ireland",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P68)",
              "Father of Janet Clifford, who married Jeremiah Coffey",
              "Grandfather of John J. Coffey",
              "No dates or further details known",
            ],
          },
          {
            name: "Jeremia Sheehan",
            born: "1820",
            spouse: "Genita Thomas",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: I41)",
              "Father of Patrick Sheehan (b.1846, Waterville) — Eileen's grandfather",
              "Grandfather of Julia Sheehan",
            ],
          },
          {
            name: "Genita Thomas",
            born: "1820",
            bornPlace: "Waterville, County Kerry, Ireland",
            spouse: "Jeremia Sheehan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: I40)",
              "Mother of Patrick Sheehan (b.1846, Waterville) — Eileen's grandfather",
              "Grandmother of Julia Sheehan",
            ],
          },
          {
            name: "Daniel Sheehan",
            born: "1798",
            bornPlace: "County Kerry, Ireland",
            died: "August 20, 1870",
            diedPlace: "County Kerry, Ireland",
            spouse: "Ellen Fitzgerald Sheehan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: I38)",
              "Father of Mary Fitzgerald Sheehan — Eileen's grandmother",
              "Grandfather of Julia Sheehan",
              "Died August 20, 1870, County Kerry, age 72",
            ],
          },
          {
            name: "Ellen Fitzgerald Sheehan",
            born: "1810",
            died: "1887",
            diedPlace: "Tralee, Kerry, Ireland (per notes)",
            spouse: "Daniel Sheehan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: I39)",
              "Mother of Mary Fitzgerald Sheehan — Eileen's grandmother",
              "Grandmother of Julia Sheehan",
              "Died 1887, age 77",
            ],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "2× Great-Grandparents (Eileen's grandparents)",
        people: [
          {
            name: "Jeremiah (Jerry) Coffey",
            born: "August 28, 1836",
            bornPlace: "KOILCLOHIR (Caherleaheen), Killorglin, Kerry, Ireland",
            occupation: "Farmer",
            spouse: "Janet Clifford",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P30)",
              "Mother: Mary Cronin (b.18 Mar 1805, Killorglin; d.1885, Killorglin)",
              "Head of family at Ballydarrig, Castlequin, Kerry in 1901 Census",
              "1911 Census: widowed, had been married 23 years, 12 children born alive, 7 still living",
              "Married Janet Clifford on June 10, 1875 at Cahirciveen, Kerry — witnessed by Daniel Clifford and Patrick Coffey; Priest: Rev. J. Harding",
              "Children (confirmed): John Joseph (b.17 Jun 1875, Cahirciveen), Abby, Mary (b.20 Jun 1879, Ballydarrig), Daniel (b.c.1882, Ballydarrig), Debbie (b.1890, Ballydarrig), Timothy (b.1887)",
            ],
          },
          {
            name: "Janet Clifford",
            bornPlace: "FILEMORE, County Kerry, Ireland",
            died: "1895",
            spouse: "Jeremiah (Jerry) Coffey",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P29)",
              "Father: James Clifford (no dates known)",
              "Born in the FILEMORE townland of Kerry",
              "Died 1895 — before the 1901 Census (which shows Jeremiah as widowed)",
              "John J. Coffey's mother",
              "Marriage on June 10, 1875 at Cahirciveen, Kerry",
            ],
          },
          {
            name: "Patrick Sheehan",
            born: "February 20, 1846",
            bornPlace: "Waterville, County Kerry, Ireland",
            died: "Waterville, County Kerry, Ireland",
            spouse: "Mary Fitzgerald Sheehan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P34)",
              "Parents: Jeremia Sheehan (b.1820) and Genita Thomas (b.1820, Waterville)",
              "Julia's father — from the Waterville/Dromod area of Kerry",
              "12 children including Julia (b.1889), Deborah/Abby (b.1898, d.1995 age 97), Brigid/Brennan (b.1891, d.1972), Nellie/Thompson (b.1891, d.1993 age 102), Patrick John (b.1894, d.1962)",
              "⚠️ Note: 1901/1911 Census lists Florence Sheehan as head of Julia's household — Patrick may have been deceased before the census",
            ],
          },
          {
            name: "Mary Fitzgerald Sheehan",
            bornPlace: "Waterville, Kerry, Ireland",
            died: "June 1931",
            diedPlace: "Kerry, Ireland",
            spouse: "Patrick Sheehan",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P35)",
              "Parents: Daniel Sheehan (b.1798, d.20 Aug 1870) and Ellen Fitzgerald Sheehan (b.1810, d.1887)",
              "Julia's mother — maiden name Fitzgerald",
              "Had 12 children in ~16 years with Patrick Sheehan",
              "Died June 1931 in Kerry, Ireland",
              "⚠️ Note: one source lists death place as 'Londonderry, Northern Ireland' — likely a data entry error for a Kerry farming family",
            ],
          },
        ],
      },
      {
        label: "Generation 2",
        relation: "Great-Grandparents (Eileen's parents)",
        people: [
          {
            name: "John J. Coffey",
            born: "June 17, 1875",
            bornPlace: "Ballydarrig, Castlequin, County Kerry, Ireland",
            died: "January 4, 1951 — CONFIRMED by Chicago Tribune obituary published January 6, 1951 (Ancestry/Newspapers.com collection 61843, record 497888864). Note: ourclann.org records indicate Nov 26, 1957 — the Tribune obit overrides this as a primary source.",
            diedPlace: "Chicago, Illinois",
            occupation: "Railroad Freight Clerk → Gas Co. Superintendent → Freight Checker (1930 Census confirmed: 'Freightman, Steam Railroad')",
            spouse: "Julia Sheehan",
            immigrated: "1902 — CONFIRMED by 1930 Census (immigration year field). SS Ivernia from Queenstown was correct. A separate 1904 'Jno Coffey' on SS Arabic was a different person.",
            ship: "SS Ivernia",
            physical: "Medium build, black hair, gray eyes",
            burial: "Holy Sepulchre Catholic Cemetery, Alsip, IL — Sect. 22 Blk. 11 Lot 25 Grave 2 (Find A Grave #74618781 — consistent with 1951 death date). Note: ourclann.org records indicate Mount Olivet — likely an error given the confirmed 1951 death date.",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P25)",
              "Parents: Jeremiah Coffey (b.28 Aug 1836) and Janet Clifford (b. FILEMORE, Kerry; d.1895)",
              "Parents' marriage: June 10, 1875 at Cahirciveen, Kerry — witnessed by Daniel Clifford and Patrick Coffey",
              "WWI Veteran — registered September 12, 1918 (Old Man's Registration, age 43)",
              "Married Julia Sheehan on June 25, 1913 at St. Cyril Church, Chicago",
              "Nickel Plate Railroad clerk (from obituary)",
              "Funeral at St. Dorothy's Church",
              "Owned home at 7748 S. Langley Ave for 20+ years (1920-1940+)",
              "⚠️ DISCREPANCY RESOLVED: Chicago Tribune obituary (Jan 6, 1951) confirms death in 1951, NOT 1957. The ourclann.org Nov 26, 1957 date is incorrect — the Tribune is a primary source. Children listed in Tribune obit: John P., Mary Bering, Jerry, Paul, Daniel, Eileen O'Reilly, Loretta. EILEEN LISTED AS 'O'REILLY' — confirming she married Bud BEFORE Jan 1951.",
              "Siblings named in Tribune obit: Timothy Coffey, A. Dole McIlvaney, Mary Keating, Michael Coffey",
              "Siblings in Chicago: Timothy, Michael, Mary Keating, Mrs. McIlvaney",
              "Documents: Certificate of Marriage (John & Julia Coffey); John Coffey Naturalization Record",
              "7 children: John Patrick (b.1915, d.1996), Mary Ellen (b.c.1918), Jeremiah (b.c.1920), Paul T. (b.1920, d.1996), Eileen & Daniel (b.18 May 1923, TWINS), Loretta (b.2 Dec 1924)",
              "⚠️ Discrepancy: WWI Draft Card lists birth as June 24, 1878; birth record shows June 17, 1875 — common for immigrants using different ages on different documents",
            ],
          },
          {
            name: "Julia Therese Sheehan",
            born: "April 6, 1889",
            bornPlace: "Dromod Parish, Waterville, County Kerry, Ireland",
            died: "April 25, 1965",
            diedPlace: "Evergreen Park, Cook County, IL",
            spouse: "John J. Coffey",
            immigrated: "1906",
            ship: "SS Arabic",
            burial: "Holy Sepulchre Catholic Cemetery, Alsip, IL",
            notes: [
              "Source: O'Reilly family archive (ourclann.org, compiled by Thomas O'Reilly, Gen. 5) — Person ID: P24)",
              "Father: Patrick Sheehan (b.20 Feb 1846, Waterville); Mother: Mary Fitzgerald Sheehan (d. Jun 1931, Kerry)",
              "Born in Dromod Parish, near Waterville — about 30 miles from John's home in Castlequin",
              "Still in Ireland at age 23 in the 1911 Census",
              "Emigrated from Killahane, Kerry at 18 with $10",
              "Married John at St. Cyril Church, Chicago on June 25, 1913",
              "7 children, raised at 7748 S. Langley Ave",
              "Died April 25, 1965 in Evergreen Park, IL at age 76",
              "Documents: Julia Coffey 1920 Census Record; Certificate of Marriage",
              "⚠️ Minor discrepancy: ourclann.org records indicate 'born April 6, 1886' vs. personal info showing 1889 — 1889 is consistent with US Census records",
            ],
          },
        ],
        notes: [
          "Their 7 children: John P. (~1915), Mary Ellen/Bering (~1918), Jerry (~1920), Paul (~1921), Eileen & Daniel (~1923, TWINS), Loretta (~1925)",
        ],
      },
    ],
    stories: [
      {
        title: "The Ship That Sank",
        content: "In June 2013, just weeks before she passed away at 90, Eileen O'Reilly told her grandchildren a story she'd carried for decades: a woman in her family — her mother, or perhaps her grandmother — had left Ireland for a better life in America. The ship she was on sank. She survived.\n\nThe story has a remarkable anchor in fact. Eileen's mother, Julia Therese Sheehan, emigrated from County Kerry to Boston in 1906 aboard the SS Arabic — a White Star Line ocean liner on the Liverpool-Queenstown-Boston route. Julia arrived safely, married John J. Coffey in 1913, and raised seven children on Chicago's South Side.\n\nBut the SS Arabic did not survive. On August 19, 1915, a German submarine torpedoed the ship 50 miles off the coast of Kinsale, Ireland. It sank in under ten minutes. Forty-four people died. Three hundred and eighty survived.\n\nThe Arabic was the Sheehan family's ship. Between 1905 and 1914, at least five Sheehans from County Kerry sailed on it — including a Mary Sheehan in 1912 whose father was also named Patrick Sheehan, possibly Julia's own sister. Whether a Sheehan was aboard that final, fatal voyage remains unconfirmed. But the family knew the Arabic. They trusted it. And when it went down, the story entered the family's memory.\n\nEileen carried it for nearly a century. She passed it on just before she left.",
        pullQuote: "The family knew the Arabic. They trusted it. And when it went down, the story entered the family's memory.",
      },
      {
        title: "Kilkenny Meets Kerry",
        content: "The Generation 4 grandparents united two different corners of Ireland. The O'Reilly line came from County Kilkenny in the southeast — medieval Norman country, the heart of the Pale's edge. The Coffey and Sheehan lines came from County Kerry in the southwest — deep Gaelic territory, remote and wild. When Edward married Eileen, the southeast met the southwest in a Chicago parish.",
      },
      {
        title: "From Killorglin to Ballydarrig: The Coffey Roots",
        content: "The Coffey story begins at Killorglin — a market town at the mouth of the Laune River in County Kerry, home to the famous Puck Fair. It was there, in 1824, that Mary Cronin married Jeremiah Coffey Sr., and began raising the family that would eventually reach Chicago.\n\nTheir son Jeremiah Coffey (born 1836 in the townland of Koilclohir near Killorglin) married Janet Clifford on June 10, 1875 at Cahirciveen — the very day their son John Joseph Coffey was born. The witnesses were Daniel Clifford and Patrick Coffey; the priest was Rev. J. Harding.\n\nJanet died in 1895, leaving Jeremiah a widower. By 1911, the Census records show him still in Kerry — widowed, 75 years old, having had 12 children born alive, 7 still living.\n\nJohn Joseph Coffey — Eileen's father and the family's great-grandfather (Generation 3) — had already been gone from Kerry for nearly a decade by then. He had sailed from Queenstown in 1902 on the SS Ivernia, bound for Boston, carrying next to nothing. He would build a life on Chicago's South Side, work the railroads, marry Julia Sheehan from Waterville, and raise seven children at 7748 S. Langley Avenue — one block from where the O'Reilly boy lived.",
        pullQuote: "Jeremiah Coffey married Janet Clifford on June 10, 1875 — the very day their son John Joseph was born.",
      },
      {
        title: "Seven Children at 7748 Langley",
        content: "The 1940 Federal Census finds the Coffey family exactly where they've been for twenty years: 7748 S. Langley Avenue, Chicago's South Side. The house is still owned. Still valued at $5,000 — the same as in 1930, the Depression having flattened everything.\n\nJohn J. Coffey is 64. He's still working — freight checker on the steam railroad, 48 hours a week, 40 weeks in 1939, earning $1,800 a year. Eighth-grade education. The same job, the same house, the same street.\n\nJulia is 52. They have seven children. In 1940, five are still at home:\n\nJohn P., 25. Mary Ellen, 22. Jerry, 20. Paul, 19. Eileen and Daniel, 16 — twins, both still in the house. Loretta, 15.\n\nEileen is 16 years old. In one year — 1941 — Pearl Harbor will be attacked. In two years, the boy from one block over on St. Lawrence Avenue will have been in the Army. In six or seven years, Eileen Coffey and Edward 'Bud' O'Reilly will be married.\n\nBut in April 1940, she's a teenager in a house full of siblings on Langley Avenue. Her father checks freight for the railroad. Her twin brother Daniel is right beside her — same age, same bedroom, same South Side block.\n\nThe 1930 Census transcriber mangled both their names: Eileen became 'Jean M.' and Daniel became 'Donald J.' The 1940 transcriber got closer: 'Eillen' and 'Daniel.' Two different government workers, ten years apart, trying to write down names in an Irish Catholic Chicago household through a screen door.\n\nSources: 1930 Federal Census, Chicago, Cook, Illinois, ED 0354; 1940 Federal Census, Chicago, Cook, Illinois, ED 103-540.",
        pullQuote: "Eileen and Daniel Coffey — the twins — are both 16 in 1940. In 1930 the census taker called them 'Jean' and 'Donald.' In 1940: 'Eillen' and 'Daniel.' Two government workers, ten years apart, writing Irish names through a screen door on the South Side.",
      },
      {
        title: "The Sheehan Family of Waterville",
        content: "Julia Sheehan's family came from the Dromod Parish near Waterville — a remote and beautiful stretch of the Ring of Kerry where the mountains meet the Atlantic. Her father Patrick Sheehan was born in 1846. Her mother, Mary Fitzgerald, came from the same area. Together they had 12 children, including Julia and her sister Deborah — who would live to 97 — and Nellie Thompson, who made it to 102.\n\nLongevity was in the Sheehan blood. Julia herself lived to 76 despite the hardship of emigrating at 18 with $10 in her pocket. Her mother Mary died in Kerry in 1931. Her grandparents Daniel Sheehan (1798–1870) and Ellen Fitzgerald Sheehan (1810–1887) are the oldest confirmed ancestors on this branch of the family.\n\nJulia came to America on the SS Arabic in 1906, the same ship that would be torpedoed by a German submarine nine years later. She married John J. Coffey in 1913. Their daughter Eileen — born May 18, 1923, a twin — would grow up to marry Edward 'Bud' O'Reilly — the couple who became Generation 4's grandparents on the paternal side.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // LINNERUD LINE — Hedmark, Norway
  // ═══════════════════════════════════════════════
  {
    id: "linnerud",
    name: "Linnerud & Lee",
    subtitle: "From Hedmark to the Stockyards",
    country: "Norway",
    flag: "🇳🇴",
    color: "norway-blue",
    colorAccent: "#002868",
    village: {
      name: "Linnerud Farm & Vinger",
      region: "Hedmark (now Innlandet)",
      country: "Norway",
      description: "The Linnerud surname comes from a farm — Farm #52 in Mo Parish, Nord-Odal, Hedmark, Norway. Founded by Ole Gundersen around 1812-1814, the Linnerud farm sat in the forested hills east of Oslo, near the Swedish border. Andrew was born Anders Olaus Anderson — 'Anderson' being a patronymic (son of Anders). When he emigrated, he took the farm name as his surname, as was Norwegian custom.",
    },
    crossing: [
      {
        person: "Andrew Olaus Linnerud",
        ship: "SS Caronia",
        departed: "Liverpool, England",
        departurePort: "Liverpool",
        arrived: "May 18, 1906",
        arrivalPort: "New York",
        age: 24,
        year: 1906,
        details: "Listed as 'Andreas A. Linerud' on the manifest. He carried $10 and was headed to Minneapolis. He was the servant girl's son — born to an unmarried mother working as a domestic. He would become a blacksmith, a railroad mechanic, and a carpenter in Chicago.",
      },
      {
        person: "Sigvart Sørensen (Lee)",
        ship: "Juno",
        departed: "Oslo, Norway",
        departurePort: "Oslo",
        arrived: "1885",
        arrivalPort: "New York",
        age: 25,
        year: 1885,
        details: "Anna's father Sigvart left Norway alone at 25. He settled in Boone County, Illinois — part of a Norwegian farming community near Belvidere and the Wisconsin border. He would later change his surname from Sørensen to 'Lee,' an Americanization of a Norwegian farm name.",
      },
    ],
    generations: [
      {
        label: "Generation 0",
        relation: "3× Great-Grandparents (Lee/Sørensen & Arneson lines)",
        people: [
          {
            name: "Søren Sørensen",
            born: "~1829",
            bornPlace: "Norway",
            spouse: "Gubjør Olsdatter",
            notes: [
              "1865 Census: Head of household at Gylterud farm, Vinger/Austmarka, Hedmark",
              "His mother Sigri Andersdatter (born ~1797) lived with the family — 5× great-grandmother",
              "Children: Anne (~1854), Sigvard/Sigvart (~1858), Ole (~1860), Gunder (~1863)",
              "Father of Sigvart S. Lee (born Sigvard Sørensen)",
            ],
          },
          {
            name: "Gubjør Olsdatter",
            born: "~1824",
            bornPlace: "Norway",
            spouse: "Søren Sørensen",
            notes: [
              "Mother of Sigvart S. Lee (born Sigvard Sørensen)",
              "Grew up at Gylterud farm, same parish as the Arneson family",
            ],
          },
          {
            name: "Arne",
            bornPlace: "Vinger, Hedmark, Norway",
            notes: [
              "Father of Berthea Arnesdatter (Berthea S. Lee) — 3× great-grandmother",
              "Full name unknown — known only from Berthea's patronymic surname 'Arnesdatter' (daughter of Arne)",
              "Grew up at Kjærret farm, Vinger parish — same area as the Sørensen family at Gylterud",
              "No further records found",
            ],
          },
          {
            name: "Anne Gundersdatter",
            bornPlace: "Vinger, Hedmark, Norway",
            spouse: "Arne",
            notes: [
              "Mother of Berthea Arnesdatter (Berthea S. Lee)",
              "Known from Berthea's notes — 'Mother: Anne Gundersdatter'",
              "No dates or further records found",
            ],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Generation 2 — 2× Great-Grandparents",
        people: [
          {
            name: "Anders Pedersen",
            bornPlace: "Norway",
            notes: ["Andrew's birth father — named on 1885 baptism record", "Nothing else known"],
          },
          {
            name: "Marthe Arnesdatter",
            bornPlace: "Vinger, Hedmark, Norway",
            notes: [
              "Andrew's mother — an unmarried servant girl",
              "1891 Census: listed as domestic servant; Andrew listed as 'the servant girl's son'",
              "Later married Martin Olsen and lived at the Linnerud farm",
            ],
          },
          {
            name: "Sigvart S. Lee",
            birthName: "Sigvard Sørensen",
            born: "December 31, 1859",
            bornPlace: "Vinger, Hedmark, Norway",
            died: "March 10, 1943",
            diedPlace: "Manchester, Boone County, IL",
            occupation: "Farmer",
            spouse: "Berthea Arneson",
            immigrated: "1885",
            ship: "Juno",
            burial: "Borgen Cemetery, Clinton, Rock County, WI",
            notes: [
              "Changed surname from Sørensen to 'Lee' between 1900-1910",
              "Owned farm in Manchester Township, Boone County, IL for 30+ years",
              "Father: Søren Sørensen; Mother: Gubjør Olsdatter",
              "Married Berthea September 8, 1892 in Dane County, Wisconsin",
            ],
          },
          {
            name: "Berthea S. Lee",
            birthName: "Berthea Arnesdatter",
            born: "~1861-1862",
            bornPlace: "Vinger, Hedmark, Norway",
            died: "September 27, 1921",
            diedPlace: "Boone County, IL",
            spouse: "Sigvart S. Lee",
            notes: [
              "Father: Arne; Mother: Anne Gundersdatter",
              "Grew up at Kjærret farm — SAME PARISH as Sigvart's family at Gylterud farm",
              "They were neighbors in Norway and found each other again in America",
            ],
          },
        ],
      },
      {
        label: "Generation 2",
        relation: "Generation 3 — Great-Grandparents",
        people: [
          {
            name: "Andrew Olaus Linnerud",
            birthName: "Anders Olaus Anderson",
            born: "March 10, 1885",
            bornPlace: "Vinger, Hedmark, Norway",
            died: "December 4, 1948",
            diedPlace: "Chicago (7306 S. Talman Avenue)",
            occupation: "Blacksmith → Railroad Mechanic → Carpenter",
            spouse: "Anna Gudrun Lee",
            immigrated: "1906",
            ship: "SS Caronia",
            burial: "Bergen Cemetery (Jefferson Prairie), Clinton, Rock County, WI",
            notes: [
              "Born to an unmarried servant — 'the servant girl's son'",
              "Took his surname from the Linnerud farm where he grew up",
              "Married Anna Gudrun Lee in 1911, Boone County, IL (she was 18, he was 26)",
              "WWI Draft Card (1917-1918): registered in Boone County, IL. Medium build, medium height, dark hair, blue eyes. Listed wife Annie Linnerud as relative. Age 32, married farmer — registered but almost certainly never served.",
              "Obituary: Chicago Tribune, Dec 6, 1948 — funeral at Bergen, Wisconsin",
              "4 children: Grace, Albert (died age 20), Evelyn, Lyle",
            ],
          },
          {
            name: "Anna Gudrun Lee",
            birthName: "Annie Sorenson",
            born: "March 23, 1893",
            bornPlace: "Manchester, Boone County, Illinois",
            died: "April 11, 1987",
            occupation: "Homemaker",
            spouse: "Andrew Olaus Linnerud",
            burial: "Jefferson Prairie Cemetery, Clinton, Rock County, WI",
            notes: [
              "Listed as 'Annie Sorenson' in 1900 Census (family still using patronymic)",
              "Parents: Sigvart S. Lee & Berthea (Arneson)",
              "Lived to age 94",
              "Born in Illinois to Norwegian parents",
            ],
          },
        ],
        notes: [
          "Their 4 children: Grace Mable Othelia (1911-1998), Albert Siegel (1913-1933, killed in storm at 19), Evelyn Bernice/Conway (1915-1969), Lyle Andrew (1922-2015)",
        ],
      },
      {
        label: "Generation 3",
        relation: "Generation 4 — Grandparents",
        people: [
          {
            name: "Lyle Andrew Linnerud",
            born: "August 30, 1922",
            bornPlace: "Chicago, Illinois",
            died: "August 29, 2015",
            occupation: "Printer Foreman, R.R. Donnelley & Sons (per family); USCG WWII veteran",
            spouse: "Helen Marie Jakubicek",
            burial: "Abraham Lincoln National Cemetery",
            notes: [
              "Died ONE DAY before his 93rd birthday",
              "US Coast Guard WWII — enlisted December 1942, age 20",
              "Assigned to USS Admiral E.W. Eberle (AP-123) in March 1945",
              "Seaman 1st Class, 41 months service, $66/month",
              "Traveled 85,000 miles in one year — Atlantic 6×, Pacific 8×, Panama Canal 2×",
              "Survived a plane crash on the ship (March 25, 1945, Manus Island — Navy pilot lost control during aerobatics, 2 killed in plane, 1 dead + 5 wounded on ship) and a floating mine in the Pacific",
              "Japan surrendered while he was at sea (August 14, 1945)",
              "Honorably discharged May 1946",
              "Married Helen Marie Jakubicek on January 20, 1951",
              "5 children: Alan (firstborn), Calvin, twins Cary & Cheryl, Andrea (youngest)",
              "Valedictorian of Gage Park High School, 1940",
              "Post-war career: Printer Foreman at R.R. Donnelley & Sons, Chicago (per family oral history, not yet confirmed in public records)",
              "Author of memoir: 'The Rime of an Ancient Mariner'",
            ],
          },
          {
            name: "Helen Marie Jakubicek",
            born: "September 14, 1925",
            bornPlace: "Chicago, Illinois",
            died: "April 5, 2010",
            diedPlace: "Illinois",
            spouse: "Lyle Andrew Linnerud",
            burial: "Abraham Lincoln National Cemetery, Sec 5, Site 556",
            notes: [
              "Parents: Thomas Joseph Jakubicek (b.1886, Moravia) & Marie E. Melka (b.1896, Bohemia)",
              "Grew up speaking Czech at the dinner table on Chicago's South Side",
              "Known above all for her contagious JOY — her son Cary's eulogy opened with that single word",
              "Kept Bible verses around the house including by the ironing board: 'The Joy of the Lord is my strength' (Nehemiah 8:10)",
              "Member of Maranatha's 'Merry Heart's Club' — delivered encouragement to the sick",
              "Bohemian cooking was her specialty — incredible desserts, Joy dish soap as a secret ingredient",
              "Loved games: horseshoes, ping pong, bowling, bean bags, cards — and she won",
              "Her son Cary served as church organist for 20+ years including the Old Cadet Chapel at West Point — credits Helen for his love of music",
              "Married Lyle January 20, 1951 in Winnebago County, IL",
              "5 children: Alan (firstborn), Calvin, twins Cary & Cheryl, Andrea (youngest)",
              "Died during Easter season, April 5, 2010 — 'Let us remember Mom every time we laugh or hear the word JOY'",
              "Full story: see Helen — A Merry Heart on the Jakubicek & Melka family page",
            ],
          },
        ],
      },
    ],
    stories: [
      {
        title: "The Servant Girl's Son",
        content: "In the 1891 Norwegian census, six-year-old Anders Olaus is recorded not by his name but by his status: 'tjenestejentens Søn' — the servant girl's son. His mother Marthe was an unmarried domestic worker. His birth father Anders Pedersen is named only on the baptism record and then vanishes from history. Marthe later married Martin Olsen, and the family lived on a farm called Linnerud — Farm #52 in Mo Parish, Nord-Odal. When the boy grew up and sailed for America, he took the farm's name as his own. The servant girl's son became Andrew Olaus Linnerud.",
        pullQuote: "Tjenestejentens Søn — the servant girl's son.",
      },
      {
        title: "85,000 Miles at Sea",
        content: "In December 1942, at age 20, Lyle Linnerud enlisted in the U.S. Coast Guard. By March 1945, he was assigned to the USS Admiral E.W. Eberle (AP-123), a 610-foot troop transport — nearly a city block long — armed with four 5-inch guns, ten twin 40mm guns, and six 20mm guns. He was assigned to one of the 20mm guns. His duties: deckhand handling 3-inch hawsers while mooring and unmooring, chipping rust, painting, mess cook serving food to soldiers and crew, and lookout observer.\n\nThe crow's nest was something special. Attached near the top of the foremast, 100 feet above the ocean, it was the size of an outdoor garbage can with a lid to keep out the weather. Furnished with binoculars and a telephone to the bridge, you could see 15 miles to the horizon — and the curvature of the earth. 'Smoke on the horizon at 2 o'clock,' Lyle would report, then the smokestack, then the bridge, then the hull. The ladder climb was always white-knuckle time, with the ship rolling side to side and the arc growing wider the higher you climbed.\n\nOn March 25, 1945, at Manus Island, a Navy pilot doing aerobatics lost control and deliberately nosed his plane into the ship's side to avoid crashing into the main deck full of troops watching. Both occupants of the plane were killed. One crew member on the ship died and five were wounded. Lyle was there.\n\nOne of the bow lookouts spotted a floating mine directly in their path. Quick action by the helmsman avoided it. The crew circled the mine — about 4 to 5 feet across — and detonated it with a twin 40mm gun. A disaster averted.\n\nOn July 25, 1945, the Eberle departed Marseilles with 5,000 troops bound for the invasion of Japan. Thirty-two days and 16,000 miles later — through the Mediterranean, past Gibraltar, across the Atlantic, through the Caribbean, the Panama Canal, and across the Pacific — they reached Manila. Two-thirds around the earth at 22 knots. During this voyage, atomic bombs fell on Hiroshima (August 6) and Nagasaki (August 9). On August 14, Emperor Hirohito surrendered. 'The war ended with much joy aboard the ship and worldwide.'\n\nIn one year, the Eberle traveled 85,000 miles. They crossed the Atlantic 6 times, the Pacific 8 times, and the Panama Canal twice. Ports of call: Le Havre, Marseilles, Naples, Norfolk, Port of Spain, Panama City, Ulithi, Manila, Naha (Okinawa), Seoul, Nagoya (twice), Los Angeles (twice), Seattle (three times), and Tacoma.\n\nIn May 1946, Lyle was honorably discharged as Seaman 1st Class after 41 months of service at $66 per month. He titled his memoir 'The Rime of an Ancient Mariner' and ended it: 'The Angels, Goodness and Mercy, have followed me all the days of my life. Praise the Lord. Thanks for the memories.'",
        pullQuote: "I joined the Coast Guard to see the sea and what did I see? I saw the sea.",
      },
      {
        title: "Albert — Killed in the Storm",
        content: "Albert Siegel Linnerud was 19 years old and working as a printer in Chicago when he was killed on June 4, 1933. The family story says a roof piece fell on him while driving with his girlfriend, who survived. The Belvidere Daily Republican from June 8, 1933 tells a different story: 'KILLED IN STORM' — Albert died when a factory wall collapsed during a violent storm. He was buried three days later at Bergen Cemetery in Wisconsin, next to where his father Andrew would be buried fifteen years later. His gravestone says simply: SON.",
        pullQuote: "SON.",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // JAKUBICEK LINE — Moravia, Czech Republic
  // ═══════════════════════════════════════════════
  {
    id: "jakubicek",
    name: "Jakubicek & Melka",
    subtitle: "From Moravia to Pilsen",
    country: "Czech Republic",
    flag: "🇨🇿",
    color: "czech-red",
    colorAccent: "#D7141A",
    village: {
      name: "Lipov & Meremice",
      region: "South Moravia & Bohemia",
      country: "Czech Republic",
      description: "Thomas Jakubicek came from Lipov (German: Lippau) in the Hodonín District of South Moravia — a village of rolling hills and vineyards near the Austrian border, part of the Horňácko ethnographic region known for folk music and wine. Marie Melka came from nearby Meremice in Bohemia. Both villages sit in the heart of Czech wine country.",
    },
    crossing: [
      {
        person: "Thomas Jakubicek",
        ship: "SS Kronprinz Wilhelm",
        departed: "Bremen, Germany",
        departurePort: "Bremen",
        arrived: "May 6, 1903",
        arrivalPort: "Ellis Island, New York",
        age: 17,
        year: 1903,
        details: "Thomas arrived at Ellis Island at just 17, listed as 'Bohemian.' The Kronprinz Wilhelm was one of Germany's most famous ocean liners — a record-breaking transatlantic racer. When WWI started, it was converted into an auxiliary cruiser that sank 15 Allied ships without loss of life, before being interned in the US.",
      },
      {
        person: "Marie Melka",
        ship: "SS Kronprinz Wilhelm",
        departed: "Bremen, Germany",
        departurePort: "Bremen",
        arrived: "May 28, 1913",
        arrivalPort: "New York",
        age: 17,
        year: 1913,
        details: "A decade after Thomas, 17-year-old Marie Melka boarded the exact same ship — the Kronprinz Wilhelm — from the exact same port. They would meet in Chicago's Bohemian neighborhood and marry in 1922.",
      },
    ],
    generations: [
      {
        label: "Generation 0",
        relation: "2× Great-Grandparents (Thomas & Marie's parents)",
        people: [
          {
            name: "George Jakubicek",
            bornPlace: "Mähren (Moravia)",
            notes: [
              "Known only from Thomas's death record",
              "Father of Thomas Joseph Jakubicek",
              "Both he and wife Marie were from Moravia",
            ],
          },
          {
            name: "Marie Jakubicek",
            bornPlace: "Mähren (Moravia)",
            spouse: "George Jakubicek",
            notes: [
              "Mother of Thomas Joseph Jakubicek",
              "Known from Thomas's death record — both parents from Moravia",
              "No further details known",
            ],
          },
          {
            name: "Ludvik Melka",
            bornPlace: "Czech Republic",
            spouse: "Klara Marc/Marč",
            notes: [
              "Marie's father — from Ancestry tree match",
              "Wife Klara's maiden name: Marc or Marč (from death record)",
              "Father of Marie E. Melka Jakubicek",
            ],
          },
          {
            name: "Klara Marc",
            bornPlace: "Czech Republic",
            spouse: "Ludvik Melka",
            notes: [
              "Mother of Marie E. Melka Jakubicek",
              "Maiden name: Marc or Marč — recorded on Marie's death record",
              "Confirmed from Find A Grave: Mary (Marie) Jakubicek née Melka, parents listed as Ludvig Melka and Clara Marc",
              "No further details known",
            ],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Great-Grandparents (Helen's parents)",
        people: [
          {
            name: "Thomas Joseph Jakubicek",
            birthName: "Tomáš Jakubiček",
            born: "December 6, 1886",
            bornPlace: "Lipov, Moravia (now Czech Republic)",
            died: "January 3, 1963",
            diedPlace: "Chicago",
            occupation: "Printer → Laborer → Machine Operator (Storkline Furniture Co.)",
            spouse: "Marie Melka",
            immigrated: "1903 (age 17)",
            ship: "SS Kronprinz Wilhelm",
            burial: "Bohemian National Cemetery, Chicago — Lot 615, Section 34",
            notes: [
              "Arrived Ellis Island May 6, 1903",
              "Single boarder in 1920 — took 19 years to marry",
              "Married Mary Melka on August 12, 1922",
              "Naturalized September 26, 1928 — 25 years after arrival!",
              "Worked at Storkline Furniture Corp — a National Historic Landmark factory",
            ],
          },
          {
            name: "Marie E. Melka",
            born: "~November 19, 1896",
            bornPlace: "Meremice, Bohemia, Czechoslovakia",
            died: "March 19, 1989",
            diedPlace: "Crestwood, Cook County, IL",
            spouse: "Thomas Joseph Jakubicek",
            immigrated: "1913 (age 17)",
            ship: "SS Kronprinz Wilhelm",
            burial: "Bohemian National Cemetery — Lot 615, Section 34 (same plot as Thomas)",
            notes: [
              "Father: Ludvik Melka; Mother: Klara Marc/Marč",
              "Sailed on the SAME FAMOUS SHIP as Thomas, a decade later",
              "Lived to age 92",
              "3 children: Helen (married Lyle Linnerud), Marie/Mary (married Novak), Tommy",
            ],
          },
        ],
      },
      {
        label: "Generation 2",
        relation: "Grandparents",
        people: [
          {
            name: "Lyle Andrew Linnerud",
            born: "August 30, 1922",
            bornPlace: "Chicago, Illinois",
            died: "August 29, 2015",
            spouse: "Helen Marie Jakubicek",
            occupation: "Printer Foreman; US Coast Guard WWII veteran",
            burial: "Abraham Lincoln National Cemetery",
            notes: [
              "Died one day before his 93rd birthday",
              "US Coast Guard WWII — enlisted December 1942, served 41 months, traveled 85,000 miles",
              "Crossed the Atlantic 6×, Pacific 8×, survived a floating mine",
              "Japan surrendered while he was at sea (August 14, 1945)",
              "Married Helen Marie Jakubicek on January 20, 1951",
              "5 children: Alan, Calvin, twins Cary & Cheryl, Andrea (youngest)",
              "Author of memoir: 'The Rime of an Ancient Mariner'",
              "Full WWII story available on the Linnerud & Lee family page",
            ],
          },
          {
            name: "Helen Marie Jakubicek",
            born: "September 14, 1925",
            bornPlace: "Chicago, Illinois",
            died: "April 5, 2010",
            diedPlace: "Illinois",
            spouse: "Lyle Andrew Linnerud",
            notes: [
              "Parents: Thomas Joseph Jakubicek (b.1886, Moravia) & Marie E. Melka (b.1896, Bohemia)",
              "Married Lyle Andrew Linnerud on January 20, 1951 — Norwegian meets Czech on Chicago's South Side",
              "5 children: Alan (firstborn), Calvin, twins Cary & Cheryl, Andrea (youngest)",
              "Known for her contagious JOY — the defining word used in her eulogy",
              "Kept Bible verses all around the house, including by the ironing board: 'The Joy of the Lord is my strength' (Nehemiah 8:10)",
              "Bohemian dishes and desserts were her specialty — used Joy dish soap as a 'secret ingredient'",
              "Member of Maranatha's 'Merry Heart's Club' — delivered hearts of joy to the sick",
              "Loved games: horseshoes, ping pong, bowling, bean bags, cards",
              "Her son Cary became a church organist for 20+ years, including at the Old Cadet Chapel at West Point — he credits Helen for instilling his love of music",
              "Died April 5, 2010, during the Easter season — celebrated as a season of joy and resurrection",
              "Eulogy delivered by son Cary: 'Let us all try to maintain a joyful heart and to remember Mom every time we laugh or hear the word JOY!'",
            ],
          },
        ],
      },
    ],
    stories: [
      {
        title: "Helen — A Merry Heart",
        pullQuote: "Let us all try to maintain a joyful heart and to remember Mom every time we laugh or hear the word JOY.",
        content: "Helen Marie Jakubicek was born on September 14, 1925, the daughter of Thomas and Marie Jakubicek at their home on West 18th Street in Chicago's Bohemian neighborhood. She grew up speaking Czech at the dinner table, eating her mother's Bohemian dishes, and absorbing a culture of warmth, community, and faith.\n\nIf Thomas and Marie's story is about endurance — crossing an ocean alone, waiting 19 years to marry, building a life from nothing — Helen's story is about what gets made from that foundation. She had one defining characteristic, so central to who she was that her son Cary named it in the very first line of her eulogy: JOY.\n\n'Joy is gladness of the heart or rejoicing,' he said. 'Mom possessed an abundant and infectious joy that made all of our lives more enjoyable.' She kept Bible verses around the house — by the ironing board, above the sink — including her favorite: 'The Joy of the Lord is my strength' (Nehemiah 8:10). She was a member of her church's 'Merry Heart's Club,' delivering encouragement to the sick. When her son went through Beast Barracks at West Point in 1975 — grueling summer training where plebes were forbidden to smile — he later told her that her lessons in humor kept him going. He even got caught smiling once, and was punished by having to laugh for a full minute under a dirty laundry bag.\n\nHelen married Lyle Andrew Linnerud on January 20, 1951 — a Norwegian farmer's grandson from Wisconsin, meeting a Czech printer's daughter from Chicago. They had five children: Alan, Calvin, twins Cary and Cheryl, and their youngest, Andrea. Helen raised them on Bohemian cooking — her specialty was incredible desserts, and she reportedly used Joy dish soap as a secret ingredient in a way that became family legend. She loved horseshoes, ping pong, bowling, bean bags, and cards — and she won at all of them.\n\nShe died on April 5, 2010, during the Easter season — which Cary noted was fitting for a woman whose life was a testament to resurrection and hope. Her son, who had served as church organist for over twenty years including at the Old Cadet Chapel at West Point, credited her with teaching him to love music.\n\nTwo immigrants sailed on the Kronprinz Wilhelm and found each other in Chicago. Their daughter became the heart of a family — laughing, cooking, winning at horseshoes, and filling every room she entered with joy.",
      },
      {
        title: "The Same Ship, A Decade Apart",
        content: "In 1903, seventeen-year-old Thomas Jakubicek boarded the SS Kronprinz Wilhelm in Bremen, Germany, bound for Ellis Island. Ten years later, in 1913, seventeen-year-old Marie Melka boarded the exact same ship from the exact same port. Both were Czech teenagers leaving everything behind. They didn't know each other on those crossings. But they would find each other in Chicago's Pilsen neighborhood — the heart of Bohemian America — and marry in 1922. The Kronprinz Wilhelm itself would become a German warship in WWI, captured by the Americans, and scrapped. But the two teenagers it carried became a family.",
        pullQuote: "The same ship. The same port. A decade apart. They found each other in Chicago.",
      },
      {
        title: "Bohemian National Cemetery",
        content: "Thomas and Marie are buried together at Bohemian National Cemetery on Chicago's North Side — the cultural heart of the Czech-American community. Founded in 1877 as a 'freethought' cemetery (in contrast to Catholic cemeteries), it became the final resting place for generations of Czech immigrants. Thomas, who arrived knowing no one, who lived as a boarder for 19 years before marrying, rests there permanently in Lot 615, Section 34.",
      },
    ],
  },
];

// ═══════════════════════════════════════════════
// NOTE: Madden/Powell line data REMOVED — belonged to a different O'Reilly family
// (William O'Reilly from Cork, not our line from Kilkenny).
// Files kept on disk for reference only.
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// CONVERGENCE TIMELINE DATA
// ═══════════════════════════════════════════════

export const immigrationTimeline = [
  // Michael G. Madden removed — belongs to a different O'Reilly family (William O'Reilly from Cork, not our line)
  { year: 1885, person: "Sigvart Sørensen (Lee)", from: "Vinger, Norway", to: "Boone County, IL", flag: "🇳🇴", line: "Lee" },
  { year: 1902, person: "John J. Coffey", from: "Kerry, Ireland", to: "Boston → Chicago", flag: "🇮🇪", line: "Coffey" },
  { year: 1903, person: "Thomas Jakubicek", from: "Lipov, Moravia", to: "Ellis Island → Chicago", flag: "🇨🇿", line: "Jakubicek" },
  { year: 1906, person: "Andrew Olaus Linnerud", from: "Hedmark, Norway", to: "New York → Chicago", flag: "🇳🇴", line: "Linnerud" },
  { year: 1906, person: "Julia Sheehan", from: "Kerry, Ireland", to: "Boston → Chicago", flag: "🇮🇪", line: "Sheehan" },
  { year: 1913, person: "Marie Melka", from: "Meremice, Bohemia", to: "New York → Chicago", flag: "🇨🇿", line: "Melka" },
  { year: 1906, person: "Patrick Joseph O'Reilly", from: "Kilkenny, Ireland", to: "Chicago", flag: "🇮🇪", line: "O'Reilly" },
];

export const convergenceEvents = [
  { year: 1911, event: "Andrew Linnerud marries Anna Gudrun Lee in Boone County, IL", lines: ["Linnerud", "Lee"] },
  { year: 1913, event: "John J. Coffey marries Julia Sheehan in Cook County", lines: ["Coffey", "Sheehan"] },
  { year: 1918, event: "Patrick Joseph O'Reilly marries Catherine Loretta Sheehy in Cook County", lines: ["O'Reilly", "Sheehy"] },
  { year: 1922, event: "Thomas Jakubicek marries Marie Melka in Cook County", lines: ["Jakubicek", "Melka"] },
  { year: 1948, event: "Edward O'Reilly marries Eileen Coffey — O'Reilly meets Coffey", lines: ["O'Reilly", "Coffey"] },
  { year: 1951, event: "Lyle Linnerud marries Helen Jakubicek — Norwegian meets Czech", lines: ["Linnerud", "Jakubicek"] },
];
