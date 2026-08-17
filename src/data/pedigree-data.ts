// ═══════════════════════════════════════════════
// PEDIGREE CHART DATA — Verified against families.ts
// Each tree is rooted at the grandparent generation (Generation 4)
// ═══════════════════════════════════════════════

export interface PedigreeNode {
  name: string;
  born?: string;
  died?: string;
  birthPlace?: string;
  gender: "M" | "F";
  scrollId?: string;
  father?: PedigreeNode;
  mother?: PedigreeNode;
}

export interface PedigreeTree {
  focal: PedigreeNode;
  spouse: PedigreeNode;
  familyId: string;
  title: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['"()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ═══════════════════════════════════════════════
// O'REILLY LINE
// Focal: Edward Joseph "Bud" O'Reilly (Grandpa)
// Spouse: Eileen Marie Coffey
// ═══════════════════════════════════════════════
const oreillyTree: PedigreeTree = {
  familyId: "oreilly",
  title: "O'Reilly Ancestors",
  focal: {
    name: 'Edward Joseph "Bud" O\'Reilly',
    born: "1921",
    died: "2002",
    birthPlace: "Chicago, IL",
    gender: "M",
    scrollId: slugify('Edward Joseph "Bud" O\'Reilly'),
    father: {
      name: "Patrick Joseph O'Reilly",
      born: "1883",
      died: "1972",
      birthPlace: "Kilkenny, Ireland",
      gender: "M",
      scrollId: slugify("Patrick Joseph O'Reilly"),
      father: {
        name: "Edward (Edmond) O'Reilly",
        born: "1839",
        died: "1892",
        birthPlace: "Kilkenny, Ireland",
        gender: "M",
        scrollId: slugify("Edward (Edmond) O'Reilly"),
        father: {
          name: "James O'Reilly",
          born: "c. 1780",
          birthPlace: "Kilkenny, Ireland",
          gender: "M",
          scrollId: slugify("James O'Reilly"),
        },
        mother: {
          name: "Ellen Walsh",
          born: "1830",
          birthPlace: "Kilkenny, Ireland",
          gender: "F",
          scrollId: slugify("Ellen Walsh"),
        },
      },
      mother: {
        name: "Johanna Hanrahan",
        born: "1858",
        died: "1949",
        birthPlace: "Kilkenny, Ireland",
        gender: "F",
        scrollId: slugify("Johanna Hanrahan"),
        father: {
          name: "Patrick Hanrahan",
          born: "1831",
          died: "1902",
          birthPlace: "Kilkenny, Ireland",
          gender: "M",
          scrollId: slugify("Patrick Hanrahan"),
        },
        mother: {
          name: "Ellen Cassin",
          born: "1836",
          died: "1896",
          birthPlace: "Kilkenny, Ireland",
          gender: "F",
          scrollId: slugify("Ellen Cassin"),
        },
      },
    },
    mother: {
      name: "Catherine Loretta Sheehy",
      born: "1894",
      died: "1990",
      birthPlace: "Chicago, IL",
      gender: "F",
      scrollId: slugify("Catherine Loretta Sheehy"),
      father: {
        name: "Richard Joseph Sheehy",
        born: "1860",
        died: "1931",
        birthPlace: "Limerick, Ireland",
        gender: "M",
        scrollId: slugify("Richard Joseph Sheehy"),
        father: {
          name: "William Joseph Sheehy",
          born: "1824",
          died: "1868",
          birthPlace: "Limerick, Ireland",
          gender: "M",
          scrollId: slugify("William Joseph Sheehy"),
        },
        mother: {
          name: "Catherine Barrett",
          born: "1830",
          birthPlace: "Limerick, Ireland",
          gender: "F",
          scrollId: slugify("Catherine Barrett"),
        },
      },
      mother: {
        name: "Anna Woulfe",
        born: "1875",
        died: "1967",
        birthPlace: "Limerick, Ireland",
        gender: "F",
        scrollId: slugify("Anna Woulfe"),
        father: {
          name: "Patrick Woulfe",
          birthPlace: "Limerick, Ireland",
          gender: "M",
          scrollId: slugify("Patrick Woulfe"),
        },
        mother: {
          name: "Bridget Roche",
          born: "1850",
          birthPlace: "Limerick, Ireland",
          gender: "F",
          scrollId: slugify("Bridget Roche"),
        },
      },
    },
  },
  spouse: {
    name: "Eileen Marie Coffey",
    born: "1923",
    died: "2013",
    birthPlace: "Chicago, IL",
    gender: "F",
    scrollId: slugify("Eileen Marie Coffey"),
  },
};

// ═══════════════════════════════════════════════
// COFFEY LINE
// Focal: Eileen Marie Coffey (Grandma)
// Spouse: Edward Joseph "Bud" O'Reilly
// ═══════════════════════════════════════════════
const coffeyTree: PedigreeTree = {
  familyId: "coffey",
  title: "Coffey & Sheehan Ancestors",
  focal: {
    name: "Eileen Marie Coffey",
    born: "1923",
    died: "2013",
    birthPlace: "Chicago, IL",
    gender: "F",
    scrollId: slugify("Eileen Marie Coffey"),
    father: {
      name: "John J. Coffey",
      born: "1875",
      died: "1951",
      birthPlace: "Kerry, Ireland",
      gender: "M",
      scrollId: slugify("John J. Coffey"),
      father: {
        name: "Jeremiah Coffey",
        born: "1836",
        birthPlace: "Kerry, Ireland",
        gender: "M",
        scrollId: slugify("Jeremiah (Jerry) Coffey"),
        father: {
          name: "Jeremiah Coffey Sr.",
          birthPlace: "Kerry, Ireland",
          gender: "M",
          scrollId: slugify("Jeremiah Coffey Sr."),
        },
        mother: {
          name: "Mary Cronin",
          born: "1805",
          died: "1885",
          birthPlace: "Kerry, Ireland",
          gender: "F",
          scrollId: slugify("Mary Cronin"),
        },
      },
      mother: {
        name: "Janet Clifford",
        died: "1895",
        birthPlace: "Kerry, Ireland",
        gender: "F",
        scrollId: slugify("Janet Clifford"),
        father: {
          name: "James Clifford",
          birthPlace: "Kerry, Ireland",
          gender: "M",
          scrollId: slugify("James Clifford"),
        },
      },
    },
    mother: {
      name: "Julia Therese Sheehan",
      born: "1889",
      died: "1965",
      birthPlace: "Kerry, Ireland",
      gender: "F",
      scrollId: slugify("Julia Therese Sheehan"),
      father: {
        name: "Patrick Sheehan",
        born: "1846",
        birthPlace: "Kerry, Ireland",
        gender: "M",
        scrollId: slugify("Patrick Sheehan"),
        father: {
          name: "Jeremia Sheehan",
          born: "1820",
          gender: "M",
          scrollId: slugify("Jeremia Sheehan"),
        },
        mother: {
          name: "Genita Thomas",
          born: "1820",
          birthPlace: "Kerry, Ireland",
          gender: "F",
          scrollId: slugify("Genita Thomas"),
        },
      },
      mother: {
        name: "Mary Fitzgerald Sheehan",
        died: "1931",
        birthPlace: "Kerry, Ireland",
        gender: "F",
        scrollId: slugify("Mary Fitzgerald Sheehan"),
        father: {
          name: "Daniel Sheehan",
          born: "1798",
          died: "1870",
          birthPlace: "Kerry, Ireland",
          gender: "M",
          scrollId: slugify("Daniel Sheehan"),
        },
        mother: {
          name: "Ellen Fitzgerald Sheehan",
          born: "1810",
          died: "1887",
          gender: "F",
          scrollId: slugify("Ellen Fitzgerald Sheehan"),
        },
      },
    },
  },
  spouse: {
    name: 'Edward Joseph "Bud" O\'Reilly',
    born: "1921",
    died: "2002",
    birthPlace: "Chicago, IL",
    gender: "M",
    scrollId: slugify('Edward Joseph "Bud" O\'Reilly'),
  },
};

// ═══════════════════════════════════════════════
// LINNERUD LINE
// Focal: Lyle Andrew Linnerud (Grandpa)
// Spouse: Helen Marie Jakubicek
// ═══════════════════════════════════════════════
const linnerudTree: PedigreeTree = {
  familyId: "linnerud",
  title: "Linnerud & Lee Ancestors",
  focal: {
    name: "Lyle Andrew Linnerud",
    born: "1922",
    died: "2015",
    birthPlace: "Chicago, IL",
    gender: "M",
    scrollId: slugify("Lyle Andrew Linnerud"),
    father: {
      name: "Andrew Olaus Linnerud",
      born: "1885",
      died: "1948",
      birthPlace: "Hedmark, Norway",
      gender: "M",
      scrollId: slugify("Andrew Olaus Linnerud"),
      father: {
        name: "Anders Pedersen",
        birthPlace: "Norway",
        gender: "M",
        scrollId: slugify("Anders Pedersen"),
      },
      mother: {
        name: "Marthe Arnesdatter",
        birthPlace: "Hedmark, Norway",
        gender: "F",
        scrollId: slugify("Marthe Arnesdatter"),
      },
    },
    mother: {
      name: "Anna Gudrun Lee",
      born: "1893",
      died: "1987",
      birthPlace: "Boone Co., IL",
      gender: "F",
      scrollId: slugify("Anna Gudrun Lee"),
      father: {
        name: "Sigvart S. Lee",
        born: "1859",
        died: "1943",
        birthPlace: "Hedmark, Norway",
        gender: "M",
        scrollId: slugify("Sigvart S. Lee"),
        father: {
          name: "Søren Sørensen",
          born: "c. 1829",
          birthPlace: "Norway",
          gender: "M",
          scrollId: slugify("Søren Sørensen"),
        },
        mother: {
          name: "Gubjør Olsdatter",
          born: "c. 1824",
          birthPlace: "Norway",
          gender: "F",
          scrollId: slugify("Gubjør Olsdatter"),
        },
      },
      mother: {
        name: "Berthea S. Lee",
        born: "c. 1861",
        died: "1921",
        birthPlace: "Hedmark, Norway",
        gender: "F",
        scrollId: slugify("Berthea S. Lee"),
        father: {
          name: "Arne",
          birthPlace: "Norway",
          gender: "M",
        },
        mother: {
          name: "Anne Gundersdatter",
          birthPlace: "Norway",
          gender: "F",
        },
      },
    },
  },
  spouse: {
    name: "Helen Marie Jakubicek",
    born: "1925",
    died: "2010",
    birthPlace: "Illinois",
    gender: "F",
    scrollId: slugify("Helen Marie Jakubicek"),
  },
};

// ═══════════════════════════════════════════════
// JAKUBICEK LINE
// Focal: Helen Marie Jakubicek (Grandma)
// Spouse: Lyle Andrew Linnerud
// ═══════════════════════════════════════════════
const jakubicekTree: PedigreeTree = {
  familyId: "jakubicek",
  title: "Jakubicek & Melka Ancestors",
  focal: {
    name: "Helen Marie Jakubicek",
    born: "1925",
    died: "2010",
    birthPlace: "Illinois",
    gender: "F",
    scrollId: slugify("Helen Marie Jakubicek"),
    father: {
      name: "Thomas Joseph Jakubicek",
      born: "1886",
      died: "1963",
      birthPlace: "Lipov, Moravia",
      gender: "M",
      scrollId: slugify("Thomas Joseph Jakubicek"),
      father: {
        name: "George Jakubicek",
        birthPlace: "Moravia",
        gender: "M",
        scrollId: slugify("George Jakubicek"),
      },
      mother: {
        name: "Marie Jakubicek",
        birthPlace: "Moravia",
        gender: "F",
        scrollId: slugify("Marie Jakubicek"),
      },
    },
    mother: {
      name: "Marie E. Melka",
      born: "c. 1896",
      died: "1989",
      birthPlace: "Bohemia",
      gender: "F",
      scrollId: slugify("Marie E. Melka"),
      father: {
        name: "Ludvik Melka",
        birthPlace: "Czech Republic",
        gender: "M",
        scrollId: slugify("Ludvik Melka"),
      },
      mother: {
        name: "Klara Marc",
        gender: "F",
        scrollId: slugify("Klara Marc"),
      },
    },
  },
  spouse: {
    name: "Lyle Andrew Linnerud",
    born: "1922",
    died: "2015",
    birthPlace: "Chicago, IL",
    gender: "M",
    scrollId: slugify("Lyle Andrew Linnerud"),
  },
};

// ═══════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════

export const pedigreeTrees: Record<string, PedigreeTree> = {
  oreilly: oreillyTree,
  coffey: coffeyTree,
  linnerud: linnerudTree,
  jakubicek: jakubicekTree,
};
