// ═══════════════════════════════════════════════
// DOCUMENT GALLERY DATA
// Maps people to their primary source documents
// ═══════════════════════════════════════════════

export interface Document {
  file: string;       // path relative to /public/docs/
  caption: string;    // human-readable description
  isPhoto?: boolean;  // true = actual photo (not a records document)
}

export interface PersonDocuments {
  personName: string;
  familyId: string;   // matches familyLines id
  docs: Document[];
}

export const personDocuments: PersonDocuments[] = [

  // ═══════════════════════════
  // O'REILLY LINE
  // ═══════════════════════════

  {
    personName: 'Edward Joseph "Bud" O\'Reilly',
    familyId: "oreilly",
    docs: [
      { file: "oreilly/Edward-Joseph-OReilly-Draft-Card-Front.png", caption: "WWII Draft Card (Front)" },
      { file: "oreilly/Edward-Joseph-OReilly-Draft-Card-Back.png", caption: "WWII Draft Card (Back)" },
      { file: "oreilly/Edward-OReilly-WWII-Draft-Card-FRONT.png", caption: "WWII Draft Card — Ancestry Transcription" },
      { file: "oreilly/Edward-OReilly-WWII-Draft-Card-BACK.png", caption: "WWII Draft Card — Back" },
      { file: "oreilly/1950-Census-Edward-Eileen-OReilly-Rhodes-Ave-Chicago.png", caption: "1950 Census — Edward & Eileen, Rhodes Ave, Chicago" },
      { file: "oreilly/1950-Census-Edward-Eileen-OReilly-7903-Rhodes-Ave.png", caption: "1950 Census — Detail" },
      { file: "oreilly/Edward-OReilly-Eileen-Coffey-Marriage-Apr10-1948-Cook-County-SEARCH.png", caption: "Marriage Record — Edward O'Reilly & Eileen Coffey, 1948" },
      { file: "oreilly/Grandpa O - In Loving Memory.jpg", caption: "In Loving Memory Card — Edward J. O'Reilly", isPhoto: true },
      { file: "oreilly/Grandma O - In Loving Memory.jpg", caption: "In Loving Memory Card — Eileen M. O'Reilly", isPhoto: true },
    ],
  },

  {
    personName: "Patrick Joseph O'Reilly",
    familyId: "oreilly",
    docs: [
      // Note: Documents for Patrick are on O'Reilly family archive (ourclann.org) (marriage certificate, photos, bio)
      // Ancestry records confirmed: WWI Draft Card (Chicago, Catherine O'Reilly as relative), SSDI, 1920/1940 Census, Irish Civil Registration
      // Physical document images to be added when obtained from Tom's site
    ],
  },

  // ═══════════════════════════
  // COFFEY LINE
  // ═══════════════════════════

  {
    personName: "John J. Coffey",
    familyId: "coffey",
    docs: [
      { file: "coffey/John-J-Coffey-WWI-Draft-Card-Born-Jun17-1875-Ireland.png", caption: "WWI Draft Card — John J. Coffey (b. Jun 17, 1875, Ireland)" },

      { file: "coffey/John-Coffey-SS-Ivernia-Boston-Apr24-1902-Immigration-Record.png", caption: "Immigration Record — SS Ivernia, Boston, Apr 24 1902" },
      { file: "coffey/John-Coffey-SS-Ivernia-1902-HANDWRITTEN-Manifest-Cunard-Line.png", caption: "SS Ivernia 1902 — Handwritten Cunard Manifest" },
      { file: "coffey/Ancestry-Trees-John-Coffey-Julia-Sheehan-Marriage-Jun25-1913-Cook-County.png", caption: "Marriage Record — John Coffey & Julia Sheehan, Jun 25 1913" },
      { file: "coffey/1920-Census-John-Julia-Coffey-Chicago.png", caption: "1920 Census — John & Julia Coffey, Chicago" },
      { file: "coffey/John-J-Coffey-Obituary-ChicagoTribune-Jan6-1951.png", caption: "Obituary — John J. Coffey, Chicago Tribune, Jan 6 1951" },
      { file: "coffey/John-J-Coffey-Obituary-1957-ChicagoTribune-Index.png", caption: "Obituary Index Entry — John J. Coffey, 1957" },
      { file: "coffey/Ancestry-Tree-John-J-Coffey-FULL-Profile-Ballydarrig-Kerry.png", caption: "Ancestry Profile — John J. Coffey, Ballydarrig, Kerry" },
      { file: "coffey/Ancestry-Tree-John-J-Coffey-Children-Eileen-Born-May18-1923.png", caption: "Ancestry Tree — Children, including Eileen (b. May 18 1923)" },
      { file: "coffey/1901-Census-Jeremiah-Coffey-House3-Ballydarrig-Castlequin-Kerry.png", caption: "1901 Irish Census — Jeremiah Coffey family, Ballydarrig" },
    ],
  },

  {
    personName: "Julia Therese Sheehan",
    familyId: "coffey",
    docs: [
      { file: "coffey/Julia-Sheehan-SS-Arabic-Boston-May5-1906-Record.png", caption: "Immigration Record — SS Arabic, Boston, May 5 1906" },

      { file: "coffey/1913-Adriatic-Detained-Aliens-Julia-Coffey.png", caption: "1913 Detained Aliens Record — SS Adriatic" },
      { file: "coffey/1901-Census-Florence-Debbie-JULIA-Sheehan-Old-Road-Caher-Kerry.png", caption: "1901 Irish Census — Florence, Debbie & Julia Sheehan, Cahirciveen" },
      { file: "coffey/Julia-Coffey-Sheehan-Obituary-ChicagoTribune-Apr27-1965.png", caption: "Obituary — Julia Coffey (Sheehan), Chicago Tribune, Apr 27 1965" },
      { file: "coffey/Julia-Therese-Coffey-Sheehan-FindAGrave-HolySepulchre.png", caption: "Find a Grave — Julia Therese Coffey Sheehan, Holy Sepulchre" },
    ],
  },

  // ═══════════════════════════
  // LINNERUD LINE
  // ═══════════════════════════

  {
    personName: "Andrew Olaus Linnerud",
    familyId: "linnerud",
    docs: [
      { file: "linnerud/1885-Baptism-Anders-Olaus-Vinger-Hedmark.png", caption: "1885 Baptism Record — Anders Olaus, Vinger, Hedmark, Norway" },
      { file: "linnerud/1891-Norway-Census-Anders-Olaus-Anderson-Vinger-Hedmark.png", caption: "1891 Norwegian Census — 'The Servant Girl's Son'" },
      { file: "linnerud/1900-Norway-Census-Anders-Andersen-Linnerud-Farm-Vinger.png", caption: "1900 Norwegian Census — Linnerud Farm, Vinger" },
      { file: "linnerud/Andreas-Linerud-SS-Caronia-1906-Ellis-Island.png", caption: "Immigration Record — SS Caronia, Ellis Island, 1906" },
      { file: "linnerud/Andrew-O-Linnerud-Family-Portrait-1915-Anna-Grace-Albert-Evelyn.jpg", caption: "FAMILY PHOTO: Andrew & Anna Linnerud with Grace, Albert & Evelyn — 1915 (annotated by Lyle Linnerud)", isPhoto: true },
      { file: "linnerud/Andrew-Linnerud-WWI-Draft-Card-Record.png", caption: "WWI Draft Card — Andrew Linnerud" },
      { file: "linnerud/1920-Census-Andrew-Linnerud-Family-Oakley-Chicago.png", caption: "1920 Census — Andrew Linnerud Family, Oakley Ave, Chicago" },
      { file: "linnerud/1930-Census-Andrew-Linnerud-Family-Washtenaw-Chicago.png", caption: "1930 Census — Andrew Linnerud Family, Washtenaw, Chicago" },
      { file: "linnerud/1940-Census-Andrew-Linnerud-Family-7007-Artesian-Chicago.png", caption: "1940 Census — Andrew Linnerud Family, 7007 S. Artesian" },
      { file: "linnerud/Andrew-O-Linnerud-Obituary-ChicagoTribune-Dec6-1948.png", caption: "Obituary — Andrew O. Linnerud, Chicago Tribune, Dec 6 1948" },
      { file: "linnerud/Andrew-Olaus-Linnerud-1885-1948-Jefferson-Prairie-Cemetery-Clinton-WI.png", caption: "Gravestone — Andrew Olaus Linnerud, Jefferson Prairie Cemetery, Clinton, WI" },
      { file: "linnerud/FindAGrave-Andrew-Linnerud-Full-Page-With-Family.png", caption: "Find a Grave — Andrew Linnerud Memorial with Family" },
    ],
  },

  {
    personName: "Albert S. Linnerud",
    familyId: "linnerud",
    docs: [
      { file: "linnerud/Albert-Linnerud-KILLED-IN-STORM-Belvidere-Daily-Republican-Jun8-1933.png", caption: "NEWSPAPER: 'Killed in Storm' — Belvidere Daily Republican, Jun 8 1933" },
      { file: "linnerud/Albert-S-Linnerud-Death-Record-Jun4-1933-Chicago.png", caption: "Death Record — Albert S. Linnerud, Jun 4 1933, Chicago" },
      { file: "linnerud/Albert-S-Linnerud-1913-1933-Gravestone-Jefferson-Prairie-Cemetery.png", caption: "Gravestone — Albert S. Linnerud (1913–1933), Jefferson Prairie Cemetery" },
    ],
  },

  {
    personName: "Lyle Andrew Linnerud",
    familyId: "linnerud",
    docs: [
      { file: "linnerud/Lyle-Andrew-Linnerud-1922-2015-PHOTO-Obituary-FindAGrave.png", caption: "Photo & Obituary — Lyle Andrew Linnerud (1922–2015), Find a Grave", isPhoto: true },
      { file: "linnerud/Lyle-Linnerud-Helen-Jakubicek-Marriage-Jan20-1951-Winnebago-County.png", caption: "Marriage Record — Lyle Linnerud & Helen Jakubicek, Jan 20 1951" },
      { file: "linnerud/Helen-Marie-Jakubicek-Linnerud-1925-2010-OBITUARY-FindAGrave.png", caption: "Obituary — Helen Marie Jakubicek-Linnerud (1925–2010)" },
    ],
  },

  {
    personName: "Anna Gudrun Lee",
    familyId: "linnerud",
    docs: [
      { file: "linnerud/Anna-Gudrun-Lee-Linnerud-1893-1987-FindAGrave-Gravestone-Family.png", caption: "Find a Grave — Anna Gudrun Lee Linnerud (1893–1987)" },
      { file: "linnerud/Anna-Gudrun-Linnerud-Lee-FindAGrave-Jefferson-Prairie-WI.png", caption: "Gravestone — Anna Gudrun Linnerud, Jefferson Prairie Cemetery" },
    ],
  },

  // ═══════════════════════════
  // LEE LINE (within Linnerud page)
  // ═══════════════════════════

  {
    personName: "Sigvart S. Lee",
    familyId: "linnerud",
    docs: [
      { file: "lee/PHOTO-Sigvart-Lee-Sorensen-Portrait-2xGreatGrandfather.png", caption: "PHOTO — Sigvart Lee (Sørensen), 2× Great-Grandfather (Generation 2)", isPhoto: true },
      { file: "lee/PHOTO-Lee-Family-Full-Portrait-Sigvart-Berthea-8-Children-CLEAN.png", caption: "PHOTO — Lee Family Portrait: Sigvart, Berthea & Their 8 Children", isPhoto: true },
      { file: "lee/Baptism-Record-Sigvard-Sorensen-Dec30-1859-Vinger-Hedmark.png", caption: "Baptism Record — Sigvard Sørensen, Dec 30 1859, Vinger, Norway" },
      { file: "lee/1865-Norway-Census-Sigvard-Sorensen-Vinger-Hedmark.png", caption: "1865 Norwegian Census — Sigvard Sørensen, Vinger, Hedmark" },
      { file: "lee/Norwegian-Church-Book-Sigvard-Sorensen-Confirmation-Aug1876-Vinger.png", caption: "Church Book — Sigvard Sørensen Confirmation, Aug 1876, Vinger" },
      { file: "lee/Emigration-Record-Sigvard-Sorensen-1885-Oslo-to-NewYork-Ship-Juno.png", caption: "Emigration Record — Sigvard Sørensen, 1885, Oslo → New York, Ship Juno" },
      { file: "lee/Ship-Manifest-SS-England-May1885-Sigvart-Sorensen-HANDWRITTEN.png", caption: "Ship Manifest — Handwritten, SS England, May 1885" },
      { file: "lee/Marriage-Record-Sigvart-Sorensen-Bertha-Arneson-Sep8-1892-Dane-WI.png", caption: "Marriage Record — Sigvart & Berthea, Sep 8 1892, Dane County, WI" },
      { file: "lee/1900-Census-Sorenson-Family-Annie-age7-Manchester-IL.png", caption: "1900 Census — Sorenson Family with Annie (age 7), Manchester, IL" },
      { file: "lee/1910-Census-Sigvart-Berthea-Lee-Family-Manchester-IL.png", caption: "1910 Census — Sigvart & Berthea Lee Family, Manchester, IL" },
      { file: "lee/1930-Census-Sigvart-Lee-Manchester-Boone-IL.png", caption: "1930 Census — Sigvart Lee, Manchester, Boone County, IL" },
      { file: "lee/FindAGrave-Sigvart-Lee-ALL-PHOTOS-Portrait-Gravestones.png", caption: "Find a Grave — Sigvart Lee: Photos & Gravestones" },
      { file: "lee/Death-Record-Sigvart-S-Lee-1943-Father-Sorne-Spouse-Berthea-Arneson.png", caption: "Death Record — Sigvart S. Lee, 1943" },
    ],
  },

  {
    personName: "Berthea S. Lee",
    familyId: "linnerud",
    docs: [
      { file: "lee/1865-Norway-Census-Berthea-Arnesdatter-age4-Vinger-Hedmark.png", caption: "1865 Norwegian Census — Berthea Arnesdatter (age 4), Vinger" },
      { file: "lee/1865-Norwegian-Census-FULL-Kjaerret-Farm-Erland-Andersen-Berthea-Family.png", caption: "1865 Census — Full Kjærret Farm Record, Berthea's Family" },
      { file: "lee/Norwegian-Church-Book-Berthea-Arnesdatter-Confirmation-1877-Vinger.png", caption: "Church Book — Berthea Arnesdatter Confirmation, 1877" },
      { file: "lee/FindAGrave-Berthea-S-Lee-FULL-PAGE-With-Photo-Gravestone.png", caption: "Find a Grave — Berthea S. Lee with Photo & Gravestone" },
      { file: "lee/Death-Record-Berthea-Lee-1921-Father-Arsu-Erlandson.png", caption: "Death Record — Berthea Lee, 1921" },
    ],
  },

  // ═══════════════════════════
  // JAKUBICEK LINE
  // ═══════════════════════════

  {
    personName: "Thomas Joseph Jakubicek",
    familyId: "jakubicek",
    docs: [
      { file: "jakubicek/Thomas-Jakubicek-Ellis-Island-Kronprinz-Wilhelm-1903.png", caption: "Ellis Island Record — Thomas Jakubicek, SS Kronprinz Wilhelm, 1903" },
      { file: "jakubicek/1920-Census-Thomas-Jakubicek-Chicago-Boarder.png", caption: "1920 Census — Thomas Jakubicek, Chicago Boarder" },
      { file: "jakubicek/1930-Census-Thomas-Mary-Helen-Jakubicek-1157-W-18th-Chicago.png", caption: "1930 Census — Thomas, Mary & Helen Jakubicek, 1157 W. 18th St, Chicago" },
      { file: "jakubicek/1940-Census-Thomas-Jakubicek-Family-South-May-St-Chicago.png", caption: "1940 Census — Thomas Jakubicek Family, S. May St, Chicago" },
      { file: "jakubicek/Thomas-Joseph-Jakubicek-WWII-Draft-Card-1942-1864-S-Throop-Chicago.png", caption: "WWII Draft Card — Thomas Joseph Jakubicek, 1942" },
      { file: "jakubicek/Thomas-Jakubicek-Declaration-of-Intention-Naturalization-1924.png", caption: "Declaration of Intention — Naturalization, 1924" },
      { file: "jakubicek/Thomas-Jakubicek-Naturalization-Petition-1928.png", caption: "Naturalization Petition — 1928" },
      { file: "jakubicek/Thomas-Jakubicek-PETITION-Naturalization-1941-HANDWRITTEN.png", caption: "Naturalization Petition — 1941, Handwritten" },
      { file: "jakubicek/Thomas-Jakubicek-Mary-Melka-Marriage-Aug12-1922-Cook-County.png", caption: "Marriage Record — Thomas Jakubicek & Mary Melka, Aug 12 1922" },
      { file: "jakubicek/Thomas-Jakubicek-1886-1963-FindAGrave-BohemianNationalCemetery.png", caption: "Find a Grave — Thomas Jakubicek (1886–1963), Bohemian National Cemetery" },
    ],
  },

  {
    personName: "Marie E. Melka",
    familyId: "jakubicek",
    docs: [
      { file: "jakubicek/Marie-Melka-Navratil-Naturalization-Petition-1933.png", caption: "Naturalization Petition — Marie Melka Navratil, 1933" },
      { file: "jakubicek/Marie-Melka-Ancestry-Tree-Match-Parents-Ludvik-Klara.png", caption: "Ancestry Tree — Marie Melka, Parents: Ludvik & Klara" },
      { file: "jakubicek/Mary-Marie-Jakubicek-nee-Melka-1896-1989-FindAGrave-Parents-Ludvig-Melka-Clara-Marc.png", caption: "Find a Grave — Marie (Melka) Jakubicek (1896–1989)" },
    ],
  },

  // ═══════════════════════════
  // MADDEN LINE (shown on oreilly page)
  // ═══════════════════════════

  // ═══════════════════════════
  // REMOVED: William O'Reilly (Cork) family — different O'Reilly line, not ours.
  // Removed: Michael G. Madden, Bridget Powell, William O'Reilly, Ann Madden,
  //          Michael O'Reilly & Ellen Ryan (Cork), James & Isabella Reilly.
  // Files kept on disk for reference but not displayed in gallery.
  // ═══════════════════════════

  // ═══════════════════════════
  // ADDITIONAL COFFEY DOCUMENTS
  // ═══════════════════════════

  {
    personName: "Coffey Family — Irish Census (Kerry)",
    familyId: "coffey",
    docs: [
      { file: "coffey/1901-Irish-Census-Coffey-Family-Farran-Kerry.png", caption: "1901 Irish Census — Coffey Family, Farran, Kerry" },
      { file: "coffey/1901-HANDWRITTEN-Census-Coffey-Family-Farran-Kerry-FormA.png", caption: "1901 Census — Handwritten Form A, Farran, Kerry" },
      { file: "coffey/1901-Farm-Steadings-Return-Farran-Kerry.png", caption: "1901 Farm Steadings Return — Farran, Kerry" },
      { file: "coffey/1901-House-Building-Return-Coffey-Farran-Kerry.png", caption: "1901 House & Building Return — Coffey, Farran, Kerry" },
      { file: "coffey/1911-Census-Michael-Coffey-Farran-Castleisland-Kerry.png", caption: "1911 Census — Michael Coffey, Farran, Castleisland, Kerry" },
      { file: "coffey/1940-Census-Eileen-Coffey-Family.png", caption: "1940 Census — Eileen Coffey Family" },
    ],
  },

  {
    personName: "John J. Coffey — Additional Records",
    familyId: "coffey",
    docs: [
      { file: "coffey/Ancestry-Tree-John-J-Coffey-Death-Jan4-1951-Burial-Alsip-HolySepulchre.png", caption: "Ancestry Tree — Death Jan 4, 1951, Burial at Holy Sepulchre, Alsip" },
      { file: "coffey/Ancestry-Tree-John-J-Coffey-More-Children-Father-Death-1927-Kerry.png", caption: "Ancestry Tree — More Children, Father's Death 1927, Kerry" },
      { file: "coffey/Ancestry-Tree-John-J-Coffey-Timeline-1930-1950.png", caption: "Ancestry Tree — Timeline 1930–1950" },
      { file: "coffey/Ancestry-Tree-John-J-Coffey-Timeline-Marriage-Children-Scrolled.png", caption: "Ancestry Tree — Marriage & Children Timeline" },
    ],
  },

  // ═══════════════════════════
  // ADDITIONAL LINNERUD DOCUMENTS
  // ═══════════════════════════

  {
    personName: "Anna Gudrun Lee — Additional",
    familyId: "linnerud",
    docs: [
      { file: "linnerud/Emigration-Gudrun-Martinsen-Linnerud-1913-Oslo.png", caption: "Emigration Record — Gudrun Martinsen (Linnerud), 1913, Oslo" },
      { file: "linnerud/FindAGrave-Anna-Gudrun-Lee-Linnerud-Full-Page.png", caption: "Find a Grave — Full Memorial Page" },
    ],
  },

  // ═══════════════════════════
  // ADDITIONAL LEE DOCUMENTS
  // ═══════════════════════════

  {
    personName: "Sigvart S. Lee — Additional",
    familyId: "linnerud",
    docs: [
      { file: "lee/FindAGrave-Sigvart-S-Lee-FULL-PAGE-With-Photos.png", caption: "Find a Grave — Full Page with Photos" },
      { file: "lee/Lutheran-Church-Record-Sigvart-Lee-Sorenson-Spouse-Berthea.png", caption: "Lutheran Church Record — Sigvart Lee Sorenson & Spouse Berthea" },
      { file: "lee/Norwegian-Church-Book-Sigvard-Sorensen-BIRTH-Record-Dec30-1859-Vinger.png", caption: "Norwegian Church Book — Birth Record, Dec 30 1859, Vinger" },
      { file: "lee/PHOTO-Lee-Family-Portrait-Sigvart-Berthea-Children.png", caption: "PHOTO — Lee Family Portrait, Sigvart, Berthea & Children", isPhoto: true },
    ],
  },

  // ═══════════════════════════
  // LYLE CONWAY — PHOTOS & CREATIONS
  // ═══════════════════════════

  {
    personName: "Lyle Conway — Hollywood Career",
    familyId: "linnerud",
    docs: [
      { file: "conway/creations/miss-piggy-1979.jpg", caption: "Miss Piggy — sculpted by Lyle Conway (1979)", isPhoto: true },
      { file: "conway/creations/dark-crystal-poster.jpg", caption: "The Dark Crystal — Design & Fabrication Supervisor", isPhoto: true },
      { file: "conway/creations/little-shop-poster.jpg", caption: "Little Shop of Horrors — Academy Award Nominated (Audrey II)", isPhoto: true },
      { file: "conway/creations/return-to-oz-poster.jpg", caption: "Return to Oz — Jack Pumpkinhead Creator", isPhoto: true },
      { file: "conway/creations/skeksis-display.jpg", caption: "Skeksis Display — The Dark Crystal Creatures", isPhoto: true },
      { file: "conway/lyle-the-dog-muppet.png", caption: "'Lyle the Dog' — Muppet character named after him", isPhoto: true },
      { file: "conway/lyle-the-dog-2.png", caption: "Lyle the Dog — Additional Image", isPhoto: true },
      { file: "conway/lyle-claghound.webp", caption: "Cla'Ghound — Conway Creation", isPhoto: true },
      { file: "conway/lyle-dogginit.webp", caption: "Dog City — Conway Creation", isPhoto: true },
      { file: "conway/lyle-peace-pipe.webp", caption: "Peace Pipe — Conway Creation", isPhoto: true },
      { file: "conway/newspaper/chicago-tribune-1967-article.png", caption: "Chicago Tribune Article, 1967" },
      { file: "conway/newspaper/chicago-tribune-1967-context.png", caption: "Chicago Tribune 1967 — Context" },
      { file: "conway/newspaper/chicago-tribune-1967-lyle-name.png", caption: "Chicago Tribune 1967 — Lyle Name Mention" },
    ],
  },

  // ═══════════════════════════
  // FAMILY PHOTOS (cross-family)
  // ═══════════════════════════

  {
    personName: "Family Photos",
    familyId: "oreilly",
    docs: [
      { file: "family-photos/Grandpa O.jpg", caption: "PHOTO — Grandpa O (Edward Joseph O'Reilly)", isPhoto: true },
      { file: "family-photos/Wedding photo.jpg", caption: "PHOTO — Wedding Photo", isPhoto: true },
    ],
  },

  // ═══════════════════════════
  // USS EBERLE — WWII SHIP (Bud's transport)
  // ═══════════════════════════

  {
    personName: "USS Eberle (DD-430) — Lyle Linnerud's WWII Transport",
    familyId: "linnerud",
    docs: [
      { file: "eberle/eberle-aerial-underway.jpg", caption: "USS Eberle — Aerial View Underway", isPhoto: true },
      { file: "eberle/eberle-ap123-wwii.jpg", caption: "USS Eberle (AP-123) — WWII Transport Configuration", isPhoto: true },
      { file: "eberle/eberle-color-1950s.jpg", caption: "USS Eberle — Color Photo, 1950s", isPhoto: true },
      { file: "eberle/eberle-usat-broadside.jpg", caption: "USAT Eberle — Broadside View", isPhoto: true },
    ],
  },

  // ═══════════════════════════
  // MIKE THE HEADLESS CHICKEN (Bonus)
  // ═══════════════════════════

  {
    personName: "Mike the Headless Chicken — Fruita, CO",
    familyId: "linnerud",
    docs: [
      { file: "mike-chicken/mike-on-display.png", caption: "Mike — On Display", isPhoto: true },
      { file: "mike-chicken/mike-with-head.jpg", caption: "Mike — With Head", isPhoto: true },
    ],
  },
];

// Helper: get all documents for a given familyId
export function getDocsByFamily(familyId: string): PersonDocuments[] {
  return personDocuments.filter((pd) => pd.familyId === familyId);
}

// Helper: get documents for a specific person (fuzzy match on personName)
export function getDocsByPerson(personName: string): Document[] {
  const match = personDocuments.find((pd) =>
    pd.personName.toLowerCase().includes(personName.toLowerCase()) ||
    personName.toLowerCase().includes(pd.personName.toLowerCase())
  );
  return match?.docs ?? [];
}
