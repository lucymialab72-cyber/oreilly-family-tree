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
      description: "The O'Reilly family came from Thomastown, a medieval market town on the River Nore in County Kilkenny. Thomastown sits in the heart of Ireland's southeast — just miles from Jerpoint Abbey, the 12th-century Cistercian monastery where Dave's great-great-grandfather Edward O'Reilly is buried. The area has deep roots: Norman, Gaelic, and Catholic, with parish records at the Church of the Assumption dating back centuries.",
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
        relation: "Dave's 3× Great-Grandparents",
        people: [
          {
            name: "James O'Reilly",
            bornPlace: "Thomastown, Kilkenny, Ireland",
            notes: [
              "Known from an Ancestry family tree (O'Reilly Family Tree by Thoma O'Reilly)",
              "No birth or death dates recorded — further research needed in Kilkenny parish records",
              "Father of Edward (Edmond) O'Reilly",
            ],
          },
          {
            name: "Ellen Walsh",
            bornPlace: "Thomastown, Kilkenny, Ireland",
            spouse: "James O'Reilly",
            notes: [
              "Known from the same Ancestry family tree",
              "No birth or death dates recorded",
              "Mother of Edward (Edmond) O'Reilly",
            ],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Dave's 2× Great-Grandparents",
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
              "Died at age 52 — his son Patrick was only 9 years old",
              "Buried at Jerpoint Abbey — a 12th-century Cistercian monastery, a significant and historic burial site",
              "Married Johanna Hanrahan in 1879 at either the Church of the Assumption in Thomastown or St. Columba's Church in Inistioge",
              "Sources: Uncle Tom's ourclann.org research + Ancestry family trees",
            ],
          },
          {
            name: "Johanna Hanrahan",
            born: "October 13, 1858",
            bornPlace: "Kilkenny, Ireland",
            died: "March 6, 1949",
            diedPlace: "Thomastown, Kilkenny, Ireland",
            spouse: "Edward (Edmond) O'Reilly",
            notes: [
              "Lived to age 90 — survived her husband by 57 years",
              "Remained in Thomastown her entire life",
              "Her brother John Hanrahan and sister Bridget Hanrahan were baptism sponsors for Patrick",
            ],
          },
        ],
      },
      {
        label: "Generation 2",
        relation: "Dave's Great-Grandparents",
        people: [
          {
            name: "Patrick Joseph O'Reilly",
            born: "March 6, 1883",
            bornPlace: "Thomastown, Kilkenny, Ireland",
            died: "October 25, 1972",
            diedPlace: "Chicago, Cook County, Illinois",
            occupation: "Unknown",
            spouse: "Catherine Loretta Sheehy",
            immigrated: "1906 (age 23)",
            physical: 'Medium build, black hair, blue eyes',
            burial: "St. Mary's Cemetery, Evergreen Park, IL (buried October 25, 1972)",
            notes: [
              "Christened March 8, 1883 at the Church of the Assumption, Thomastown, by Rev. John Walsh",
              "Baptism sponsors: John Hanrahan and Bridget Hanrahan (his mother's siblings)",
              "Father died when Patrick was 9 — grew up fatherless in Thomastown",
              "Emigrated to the US in 1906, settled in Chicago",
              "Married Catherine Loretta Sheehy on August 28, 1918 in Chicago",
              "WWI Draft Card: registered at 727 E 50th St, Chicago (Draft Board 13)",
              "Lived to age 89 — Dave's father Terrence would have been ~16 when Patrick died",
              "Sources: Irish Civil Registration (Mar 1883), Church baptism, 1920 Census, 1940 Census, SSDI (SSN 319-07-3960), Cook County Marriage Index, WWI Draft Card",
            ],
          },
          {
            name: "Catherine Loretta Sheehy",
            born: "September 30, 1894",
            bornPlace: "Chicago, Cook County, Illinois",
            died: "October 9, 1990",
            diedPlace: "Arlington Heights, Cook County, Illinois",
            spouse: "Patrick Joseph O'Reilly",
            notes: [
              "Born in Chicago — an Irish-American, not an immigrant",
              "Father: Richard Joseph Sheehy (1860-1931)",
              "Mother: Anna Woulfe (1875-1967)",
              "Lived to age 96 — Dave's father would have known her well",
              "Married Patrick on August 28, 1918 in Chicago",
            ],
          },
        ],
        notes: [
          "Their 5 children: Loretta Josephine (1919-2000), Edward Joseph 'Bud' (1921-2002), Richard Joseph (1923-1980, died at 56), James Patrick (1924-2012, bachelor missionary in Deming, NM), Jerome (b. 1932, possibly still living)",
        ],
      },
      {
        label: "Generation 3",
        relation: "Dave's Grandparents",
        people: [
          {
            name: 'Edward Joseph "Bud" O\'Reilly',
            born: "January 24, 1921",
            bornPlace: "Chicago, Illinois",
            died: "April 7, 2002",
            occupation: "Food Salesman",
            spouse: "Eileen M. Coffey",
            physical: '5\'11", 165 lbs, black hair, blue eyes, ruddy complexion',
            burial: "Holy Sepulchre Cemetery, Alsip, IL",
            notes: [
              "Second of 5 children — older sister Loretta was born 1919",
              "WWII Veteran — enlisted ~1942, Service Number 16070923",
              "Army records show Air Corps; family says Patton's 3rd Army, Battle of the Bulge",
              "Brought home a captured German pistol",
              "Post-war career: Printer Foreman at R.R. Donnelley & Sons, then Food Salesman",
              "Children (per Uncle Tom): MarySue, JoAnn, Tom, Terry, Patrick, Hugh",
              "Tom is Dave's uncle. Terry (Terrence Patrick) is Dave's father.",
              "Funeral at St. Catherine of Alexandria Church, Oak Lawn",
              "Inherited his father Patrick's black hair and blue eyes",
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
              "Had a twin brother Daniel",
              "Parents were Irish immigrants from County Kerry",
              "Grew up at 7748 S. Langley Ave — ONE BLOCK from Edward's address on St. Lawrence Ave",
              "Told Dave a shipwreck story 2-3 weeks before she died",
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
        title: "Father Remembered",
        content: "Dave's father Terrence remembered his great-grandfather's name as Patrick — not William, as earlier research had incorrectly suggested. He was right. Patrick Joseph O'Reilly was born in 1883 and died in 1972, when Terrence was about 16 years old. Old enough to remember the man, and the name. Sometimes the best genealogical source is the family member who was there.",
      },
      {
        title: "Buried at the Abbey",
        content: "Edward O'Reilly — Patrick's father and Dave's 2× great-grandfather — is buried at Jerpoint Abbey in Thomastown, Kilkenny. Founded in 1180 by Cistercian monks, the abbey is one of Ireland's finest medieval ruins. Its carved cloister arcade features knights and saints and dragons. Edward died at 52 in 1892, leaving 9-year-old Patrick fatherless. Fourteen years later, Patrick would leave Thomastown for America.",
        pullQuote: "A medieval abbey in Kilkenny. That's where the O'Reilly story begins — and where it rests.",
      },
      {
        title: "The Five Children of Patrick & Catherine",
        content: "Patrick and Catherine raised five children in Chicago: Loretta Josephine (1919), Edward 'Bud' (1921), Richard Joseph (1923), James Patrick (1924), and Jerome (1932). Richard died at just 56. James Patrick — 'Uncle Jay' — never married, becoming a lifelong bookworm and eventually a missionary in Deming, New Mexico. Jerome, the baby, may still be living at age 94. A photo from the early 1950s shows the four older children together: Richard, James, Edward, and Loretta.",
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
        relation: "Dave's 3× Great-Grandparents",
        people: [
          {
            name: "Jeremiah (Jerry) Coffey",
            born: "~1836",
            bornPlace: "County Kerry, Ireland",
            occupation: "Farmer",
            spouse: "Janet Clifford",
            notes: [
              "Head of family at Ballydarrig, Castlequin, Kerry in 1901 Census",
              "Age 60 in 1901, Roman Catholic",
              "6 children: John (~1875), Mary (~1879), Daniel (~1885), Timothy (~1887), Michael (~1888), Debbie (~1890)",
            ],
          },
          {
            name: "Janet Clifford",
            bornPlace: "County Kerry, Ireland",
            spouse: "Jeremiah (Jerry) Coffey",
            notes: [
              "John J. Coffey's mother",
              "Source: Uncle Tom's ourclann.org research",
              "No further details known — Kerry parish records may reveal more",
            ],
          },
          {
            name: "Patrick Sheehan",
            born: "~1846",
            bornPlace: "County Kerry, Ireland",
            spouse: "Mary Fitzgerald",
            notes: [
              "Julia's father — from the Waterville/Dromod area of Kerry",
              "Source: Uncle Tom's ourclann.org research",
              "⚠️ Note: 1901/1911 Census lists Florence Sheehan as head of Julia's household at Old Road, Cahirciveen — Florence may be an uncle or grandfather, with Patrick deceased before the census",
            ],
          },
          {
            name: "Mary Fitzgerald Sheehan",
            died: "1931",
            bornPlace: "County Kerry, Ireland",
            spouse: "Patrick Sheehan",
            notes: [
              "Julia's mother — maiden name Fitzgerald",
              "Died 1931 — whether in Ireland or America is unknown",
              "⚠️ Note: 1901/1911 Census lists 'Debbie Sheehan' as Florence's wife — may be a different generation",
              "Source: Uncle Tom's ourclann.org research",
            ],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Dave's Great-Grandparents",
        people: [
          {
            name: "John J. Coffey",
            born: "June 17, 1875",
            bornPlace: "Ballydarrig, Castlequin, County Kerry, Ireland",
            died: "November 26, 1957",
            diedPlace: "Chicago",
            occupation: "Railroad Freight Clerk → Gas Co. Superintendent → Freight Checker",
            spouse: "Julia Sheehan",
            immigrated: "1902",
            ship: "SS Ivernia",
            physical: "Medium build, black hair, gray eyes",
            burial: "Mount Olivet Catholic Cemetery, Chicago",
            notes: [
              "WWI Veteran — registered September 12, 1918 (Old Man's Registration, age 43)",
              "Married Julia Sheehan on June 25, 1913 at St. Cyril Church, Chicago",
              "Nickel Plate Railroad clerk (from obituary)",
              "Funeral at St. Dorothy's Church",
              "Owned home at 7748 S. Langley Ave for 20+ years (1920-1940+)",
              "Siblings in Chicago: Timothy, Michael, Mary Keating, Mrs. McIlvaney",
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
              "Father: Patrick Sheehan (b. 1846), Mother: Mary Fitzgerald Sheehan (d. 1931)",
              "Born in Dromod Parish, near Waterville — about 30 miles from John's home in Castlequin",
              "Still in Ireland at age 23 in the 1911 Census",
              "Emigrated from Killahane, Kerry at 18 with $10",
              "Married John at St. Cyril Church, Chicago on June 25, 1913",
              "7 children, raised at 7748 S. Langley Ave",
              "Died April 25, 1965 in Evergreen Park, IL at age 76",
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
        content: "In June 2013, just weeks before she passed away at 90, Eileen O'Reilly told her grandson Dave and his wife a story she'd carried for decades: a woman in her family — her mother, or perhaps her grandmother — had left Ireland for a better life in America. The ship she was on sank. She survived.\n\nThe story has a remarkable anchor in fact. Eileen's mother, Julia Therese Sheehan, emigrated from County Kerry to Boston in 1906 aboard the SS Arabic — a White Star Line ocean liner on the Liverpool-Queenstown-Boston route. Julia arrived safely, married John J. Coffey in 1913, and raised seven children on Chicago's South Side.\n\nBut the SS Arabic did not survive. On August 19, 1915, a German submarine torpedoed the ship 50 miles off the coast of Kinsale, Ireland. It sank in under ten minutes. Forty-four people died. Three hundred and eighty survived.\n\nThe Arabic was the Sheehan family's ship. Between 1905 and 1914, at least five Sheehans from County Kerry sailed on it — including a Mary Sheehan in 1912 whose father was also named Patrick Sheehan, possibly Julia's own sister. Whether a Sheehan was aboard that final, fatal voyage remains unconfirmed. But the family knew the Arabic. They trusted it. And when it went down, the story entered the family's memory.\n\nEileen carried it for nearly a century. She passed it on just before she left.",
        pullQuote: "The family knew the Arabic. They trusted it. And when it went down, the story entered the family's memory.",
      },
      {
        title: "Kilkenny Meets Kerry",
        content: "Dave's grandparents united two different corners of Ireland. The O'Reilly line came from County Kilkenny in the southeast — medieval Norman country, the heart of the Pale's edge. The Coffey and Sheehan lines came from County Kerry in the southwest — deep Gaelic territory, remote and wild. When Edward married Eileen, the southeast met the southwest in a Chicago parish.",
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
        relation: "Dave's 3× Great-Grandparents (Lee/Sørensen line)",
        people: [
          {
            name: "Søren Sørensen",
            born: "~1829",
            bornPlace: "Norway",
            spouse: "Gubjør Olsdatter",
            notes: [
              "1865 Census: Head of household at Gylterud farm, Vinger/Austmarka, Hedmark",
              "His mother Sigri Andersdatter (born ~1797) lived with the family — Dave's 5× great-grandmother",
              "Children: Anne (~1854), Sigvard/Sigvart (~1858), Ole (~1860), Gunder (~1863)",
            ],
          },
          {
            name: "Gubjør Olsdatter",
            born: "~1824",
            bornPlace: "Norway",
            spouse: "Søren Sørensen",
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Dave's 2× Great-Grandparents",
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
        relation: "Dave's Great-Grandparents",
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
        relation: "Dave's Grandparents",
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
              "5 children: Alan (firstborn), Calvin, twins Cary & Cheryl, Andrea (youngest — Dave's mom)",
              "Valedictorian of Gage Park High School, 1940",
              "Post-war career: Printer Foreman at R.R. Donnelley & Sons, Chicago (per Dave O'Reilly — family oral history, not yet confirmed in public records)",
              "Author of memoir: 'The Rime of an Ancient Mariner'",
            ],
          },
          {
            name: "Helen Marie Jakubicek",
            born: "September 14, 1925",
            bornPlace: "Illinois",
            died: "April 5, 2010",
            diedPlace: "Chicago",
            spouse: "Lyle Andrew Linnerud",
            burial: "Abraham Lincoln National Cemetery, Sec 5, Site 556",
            notes: [
              "Parents: Thomas Jakubicek (Moravia) & Marie Melka (Bohemia)",
              "Married Lyle January 20, 1951 in Winnebago County, IL",
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
        content: "Lyle Linnerud spent a year aboard the USS Admiral E.W. Eberle, a 610-foot troop transport armed with 5-inch guns, twin 40mm guns, and 20mm guns. He served as a deckhand, mess cook, and lookout — perched 100 feet above the sea in the foremast crow's nest. On July 25, 1945, the ship departed Marseilles with 5,000 troops. Thirty-two days and 16,000 miles later — through the Mediterranean, Atlantic, Caribbean, Panama Canal, and Pacific — they reached Manila. The atomic bombs fell during this voyage. Japan surrendered while they were still at sea. Lyle would cross the Atlantic 6 times, the Pacific 8 times, and traverse the Panama Canal twice.",
        pullQuote: "Much joy aboard the ship and worldwide.",
      },
      {
        title: "Albert — Killed in the Storm",
        content: "Albert Siegel Linnerud was 19 years old and working as a printer in Chicago when he was killed on June 4, 1933. The family story says a roof piece fell on him while driving with his girlfriend, who survived. The Belvidere Daily Republican from June 8, 1933 tells a different story: 'KILLED IN STORM' — Albert died when a factory wall collapsed during a violent storm. He was buried three days later at Bergen Cemetery in Wisconsin, next to where his father Andrew would be buried fifteen years later. His gravestone says simply: SON.",
        pullQuote: "SON.",
      },
      {
        title: "Lyle Conway — The Puppeteer",
        content: "Dave's mom's first cousin Lyle Conway — son of Evelyn Bernice Linnerud Conway — became one of Hollywood's most acclaimed puppet and creature designers. He sculpted Miss Piggy for The Muppet Show. He created the terrifying Audrey II plant puppet for Little Shop of Horrors, earning an Academy Award nomination. He was the design and fabrication supervisor on Jim Henson's The Dark Crystal, bringing Aughra and the Skeksis to life. He created Jack Pumpkinhead for Return to Oz. The Muppet character 'Lyle the Dog' was literally named after him. He was found dead in his California apartment in March 2026. Those who knew him called him 'a very private man.'",
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
        relation: "Dave's 2× Great-Grandparents",
        people: [
          {
            name: "George Jakubicek",
            bornPlace: "Mähren (Moravia)",
            notes: ["Known only from Thomas's death record", "Both he and wife Marie were from Moravia"],
          },
          {
            name: "Ludvik Melka",
            bornPlace: "Czech Republic",
            spouse: "Klara Marc/Marč",
            notes: ["Marie's father — from Ancestry tree match", "Wife Klara's maiden name: Marc or Marč (from death record)"],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Dave's Great-Grandparents",
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
              "3 children: Helen (Dave's grandmother), Marie/Mary (married Novak), Tommy",
            ],
          },
        ],
      },
    ],
    stories: [
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
// MADDEN/POWELL LINE DATA — NOT PART OF DAVE'S FAMILY
// These records belong to a different O'Reilly family (William O'Reilly from Cork).
// Kept for reference but not displayed. The real O'Reilly great-grandmother is
// Catherine Loretta Sheehy (née Sheehy), not Anna Margaret Madden.
// ═══════════════════════════════════════════════

export const maddenLine = {
  id: "madden",
  name: "Madden & Powell",
  subtitle: "From Tipperary to the Chicago Police",
  country: "Ireland",
  flag: "🇮🇪",
  village: {
    name: "Lisgoriff & Templederry",
    region: "County Tipperary",
    country: "Ireland",
  },
  generations: [
    {
      label: "Dave's 3× Great-Grandparents",
      people: [
        { name: "Thomas Madden", origin: "Templederry, Tipperary" },
        { name: "Mary Griffin", origin: "Tipperary" },
        { name: "George Powell", origin: "Tipperary" },
        { name: "Mary Butler", origin: "Tipperary" },
      ],
    },
    {
      label: "Dave's 2× Great-Grandparents",
      people: [
        {
          name: "Michael G. Madden",
          born: "May 11, 1858",
          bornPlace: "Lisgoriff, Templederry, County Tipperary",
          died: "July 7, 1944",
          occupation: "Chicago Police Officer",
          immigrated: "1882",
          notes: "Baptized May 13, 1858 at Templederry Catholic Church. Irish immigrant who became a cop during Prohibition. Owned home free and clear by 1910. Buried Mount Carmel Catholic Cemetery.",
        },
        {
          name: 'Bridget "Biddie" Powell',
          born: "May 29, 1869",
          bornPlace: "County Tipperary, Ireland",
          died: "February 15, 1940",
          notes: "Married Michael ~1882. 7 children. Father: George Powell, Mother: Mary Butler. Buried Mount Carmel alongside Michael.",
        },
      ],
    },
  ],
};

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
