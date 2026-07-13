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
  // O'REILLY LINE — County Cork, Ireland
  // ═══════════════════════════════════════════════
  {
    id: "oreilly",
    name: "O'Reilly",
    subtitle: "From Meelin to Chicago",
    country: "Ireland",
    flag: "🇮🇪",
    color: "cork-green",
    colorAccent: "#2D5A27",
    village: {
      name: "Newmarket & Meelin",
      region: "County Cork",
      country: "Ireland",
      description: "The O'Reilly family came from Meelin parish, near the town of Newmarket in County Cork. Knockahely and Knockdaff — the townlands of Michael O'Reilly and Ellen Ryan — are neighboring farming communities in the rolling hills of north Cork, near the borders of Counties Limerick and Kerry. The area was heavily affected by the Great Famine (1845-1852) and the Land War (1879-1882).",
    },
    crossing: [
      {
        person: "William O'Reilly",
        ship: "SS New York",
        departed: "Liverpool, England",
        departurePort: "Liverpool",
        arrived: "April 26, 1915",
        arrivalPort: "New York",
        age: 22,
        year: 1915,
        details: "William left Cork during the Great War. His brother Daniel had already emigrated to Chicago. The ship manifest records him as 5'10\", brown hair, brown eyes, fair complexion. His father Michael was still alive in Newmarket — William would return to visit in 1927 on the SS Franconia.",
      },
    ],
    generations: [
      {
        label: "Generation 0",
        relation: "Dave's 3× Great-Grandparents",
        people: [
          {
            name: "Michael O'Reilly Sr",
            bornPlace: "Knockahely, Meelin, Cork, Ireland",
            occupation: "Farmer",
            died: "Before 1888",
            notes: ["Known only from his son's 1888 marriage certificate", "Farmer at Knockahely — a townland in Meelin parish"],
          },
          {
            name: "Daniel Ryan",
            bornPlace: "Knockdaff, Meelin, Cork, Ireland",
            occupation: "Farmer",
            died: "Before 1888",
            notes: ["Father of the bride (Ellen Ryan)", "Knockdaff neighbors Knockahely — the families literally lived next door"],
          },
        ],
      },
      {
        label: "Generation 1",
        relation: "Dave's 2× Great-Grandparents",
        people: [
          {
            name: "Michael O'Reilly",
            born: "~1863",
            bornPlace: "Knockahely, Meelin, Cork, Ireland",
            occupation: "Farmer (employed a servant by 1901)",
            spouse: "Ellen Ryan",
            notes: [
              "Married December 1, 1888 at the Roman Catholic Chapel of Meelin",
              "By 1901, prosperous enough to employ a servant (John Mulcahy, 20)",
              "9 children — 5 emigrated to America, others stayed in Ireland",
              "Still in Newmarket in 1911 at 14 Church Street",
            ],
          },
          {
            name: "Ellen Ryan",
            born: "~1864",
            bornPlace: "Knockdaff, Meelin, Cork, Ireland",
            spouse: "Michael O'Reilly",
            notes: [
              "Maiden name confirmed from 1888 civil marriage register",
              "Her father Daniel was a deceased farmer by the time she married",
            ],
          },
        ],
        notes: ["Their 9 children: Michael Jr (~1889), Daniel (~1891), William (~1894), Charles (~1896), Kate (~1898), Elizabeth/Eliza (~1901), Eilleen (~1902), Margaret Joseph (~1905), Francis (~1909)"],
      },
      {
        label: "Generation 2",
        relation: "Dave's Great-Grandparents",
        people: [
          {
            name: "William O'Reilly",
            born: "August 12, 1893",
            bornPlace: "Newmarket, County Cork, Ireland",
            died: "Before 1971",
            diedPlace: "Chicago",
            occupation: "Salesman, Real Estate",
            spouse: "Anna Margaret Madden",
            immigrated: "1915 (age 22)",
            ship: "SS New York",
            physical: "5'10\", brown hair, brown eyes",
            notes: [
              "WWI Veteran — served in US Army after immigrating",
              "Married Anna Margaret Madden on November 5, 1918",
              "Returned to Ireland in 1927 on SS Franconia to visit family",
              "Brother Daniel emigrated first, was already in Chicago",
              "Named his son Charles and daughter Eileen after siblings in Ireland",
            ],
          },
          {
            name: "Anna Margaret Madden",
            born: "~1893",
            bornPlace: "Chicago, Illinois",
            died: "April 11, 1971",
            diedPlace: "Cook County, Illinois",
            occupation: "Homemaker",
            spouse: "William O'Reilly",
            notes: [
              "Father: Michael G. Madden — Chicago Police Officer from Tipperary",
              "Mother: Bridget 'Biddie' Powell — also from Tipperary",
              "Had 6 Madden siblings: Thomas, George, Dennis, Edward, Joseph, Mary",
              "11 grandchildren (from obituary)",
            ],
          },
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
              "WWII Veteran — enlisted ~1942, Service Number 16070923",
              "Army records show Air Corps; family says Patton's 3rd Army, Battle of the Bulge",
              "Brought home a captured German pistol",
              "Known children: Mary Sue, Mike, Kathy, Tom, Eileen, Pat — Terry (Terrence Patrick) also a child, may not appear in obituary",
              "Tom and Mike are twins. Terry is Dave's father.",
              "Funeral at St. Catherine of Alexandria Church, Oak Lawn",
            ],
          },
          {
            name: "Eileen M. Coffey",
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
        content: "Edward O'Reilly's 1942 draft card lists his address as 7341 S. St. Lawrence Avenue. Eileen Coffey grew up at 7748 S. Langley Avenue. These streets are one block apart on Chicago's South Side. The O'Reilly boy from the West Side and the Coffey girl from Kerry stock — they were neighbors before they were sweethearts.",
        pullQuote: "Two Irish families, one block apart on Chicago's South Side. Some things are not coincidence.",
      },
      {
        title: "The Naming Tradition",
        content: "William O'Reilly named his daughter Eileen after his sister Eilleen back in Newmarket, Cork. Decades later, his son Edward married a woman also named Eileen — Eileen Coffey. The name crossed the Atlantic and came back around.",
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
      description: "John J. Coffey came from Ballydarrig, a townland near Castlequin in County Kerry — the wild, beautiful southwest corner of Ireland. His wife Julia Sheehan grew up on the Old Road in Cahirciveen, about 30 miles away along the Ring of Kerry. Both families were farming people, Roman Catholic, Irish-speaking.",
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
            born: "~1841",
            bornPlace: "Ireland",
            occupation: "Farmer",
            notes: [
              "Head of family at Ballydarrig, Castlequin, Kerry in 1901 Census",
              "Age 60 in 1901, Roman Catholic",
              "6 children: John (~1877), Mary (~1879), Daniel (~1885), Timothy (~1887), Michael (~1888), Debbie (~1890)",
            ],
          },
          {
            name: "Florence Sheehan",
            born: "~1849",
            bornPlace: "County Kerry, Ireland",
            spouse: "Debbie Sheehan",
            notes: [
              "Head of family at Old Road, Cahirciveen, Kerry in 1901 Census",
              "Large family — 7+ children",
              "Still at same address in 1911 Census (age 70)",
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
              "Married Julia Sheehan on June 25, 1913 in Cook County",
              "Nickel Plate Railroad clerk (from obituary)",
              "Funeral at St. Dorothy's Church",
              "Owned home at 7748 S. Langley Ave for 20+ years (1920-1940+)",
              "Siblings in Chicago: Timothy, Michael, Mary Keating, Mrs. McIlvaney",
            ],
          },
          {
            name: "Julia Therese Sheehan",
            born: "April 6, 1889",
            bornPlace: "Cahirciveen area, County Kerry, Ireland",
            died: "April 25, 1965",
            diedPlace: "Evergreen Park, Cook County, IL",
            spouse: "John J. Coffey",
            immigrated: "1906",
            ship: "SS Arabic",
            burial: "Holy Sepulchre Catholic Cemetery, Alsip, IL",
            notes: [
              "Father: Florence Sheehan, Mother: Debbie Sheehan",
              "Still in Ireland at age 23 in the 1911 Census",
              "Emigrated from Killahane, Kerry at 18 with $10",
              "7 children, raised at 7748 S. Langley Ave",
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
        title: "The Shipwreck Story",
        content: "Two to three weeks before Eileen O'Reilly (née Coffey) died in 2013, she told Dave a story: her mother — or grandmother — had left Ireland for a better life, and the ship she was on sank. She was the only survivor. The identity of this woman and the ship remains a mystery. Julia Sheehan arrived safely on the SS Arabic in 1906. The story may refer to Julia's mother, or to a more distant relative, or it may be a family legend polished by decades of retelling. Either way, it was important enough for Eileen to share in her final days.",
        pullQuote: "She was the only survivor.",
      },
      {
        title: "Two Sides of the Border",
        content: "Dave's grandparents united both sides of Ireland. The O'Reilly line came from Northern Ireland (as recorded in the 1930 Census). The Coffey and Sheehan lines came from the Irish Free State — County Kerry, deep in the Catholic south. When Edward married Eileen, North met South in a Chicago parish.",
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
          "Their 4 children: Grace Mabel/Margis (1911-1998), Albert S. (1913-1933, killed in storm), Evelyn Bernice/Conway (1916-1969), Lyle Andrew (1922-2015)",
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
            occupation: "Various — see WWII service",
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
              "Valedictorian of Gage Park High School, 1940",
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
        content: "Albert S. Linnerud was 20 years old and working as a printer in Chicago when he was killed on June 4, 1933. The family story says a roof piece fell on him while driving with his girlfriend, who survived. The Belvidere Daily Republican from June 8, 1933 tells a different story: 'KILLED IN STORM' — Albert died when a factory wall collapsed during a violent storm. He was buried three days later at Bergen Cemetery in Wisconsin, next to where his father Andrew would be buried fifteen years later. His gravestone says simply: SON.",
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
// MADDEN/POWELL LINE DATA
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
  { year: 1882, person: "Michael G. Madden", from: "Tipperary, Ireland", to: "Chicago", flag: "🇮🇪", line: "Madden" },
  { year: 1885, person: "Sigvart Sørensen (Lee)", from: "Vinger, Norway", to: "Boone County, IL", flag: "🇳🇴", line: "Lee" },
  { year: 1902, person: "John J. Coffey", from: "Kerry, Ireland", to: "Boston → Chicago", flag: "🇮🇪", line: "Coffey" },
  { year: 1903, person: "Thomas Jakubicek", from: "Lipov, Moravia", to: "Ellis Island → Chicago", flag: "🇨🇿", line: "Jakubicek" },
  { year: 1906, person: "Andrew Olaus Linnerud", from: "Hedmark, Norway", to: "New York → Chicago", flag: "🇳🇴", line: "Linnerud" },
  { year: 1906, person: "Julia Sheehan", from: "Kerry, Ireland", to: "Boston → Chicago", flag: "🇮🇪", line: "Sheehan" },
  { year: 1913, person: "Marie Melka", from: "Meremice, Bohemia", to: "New York → Chicago", flag: "🇨🇿", line: "Melka" },
  { year: 1915, person: "William O'Reilly", from: "Cork, Ireland", to: "New York → Chicago", flag: "🇮🇪", line: "O'Reilly" },
];

export const convergenceEvents = [
  { year: 1911, event: "Andrew Linnerud marries Anna Gudrun Lee in Boone County, IL", lines: ["Linnerud", "Lee"] },
  { year: 1913, event: "John J. Coffey marries Julia Sheehan in Cook County", lines: ["Coffey", "Sheehan"] },
  { year: 1918, event: "William O'Reilly marries Anna Margaret Madden in Cook County", lines: ["O'Reilly", "Madden"] },
  { year: 1922, event: "Thomas Jakubicek marries Marie Melka in Cook County", lines: ["Jakubicek", "Melka"] },
  { year: 1948, event: "Edward O'Reilly marries Eileen Coffey — O'Reilly meets Coffey", lines: ["O'Reilly", "Coffey"] },
  { year: 1951, event: "Lyle Linnerud marries Helen Jakubicek — Norwegian meets Czech", lines: ["Linnerud", "Jakubicek"] },
];
