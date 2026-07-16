"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const GALLERY: {
  src: string;
  filename: string;
  caption: string;
  line: string;
  lineLabel: string;
  flag: string;
  origin: string;
  docType: string;
}[] = [
  { src: "/docs/gallery/Edward-Joseph-OReilly-Draft-Card-Back.png", filename: "Edward-Joseph-OReilly-Draft-Card-Back.png", caption: "Edward Joseph O'Reilly — Draft Card (Back)", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Draft Card" },
  { src: "/docs/gallery/Edward-Joseph-OReilly-Draft-Card-Front.png", filename: "Edward-Joseph-OReilly-Draft-Card-Front.png", caption: "Edward Joseph O'Reilly — Draft Card (Front)", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Draft Card" },
  { src: "/docs/gallery/Grandpa O & Grandma O/Grandma O - In Loving Memory.jpg", filename: "Grandma O - In Loving Memory.jpg", caption: "Grandma O — In Loving Memory", line: "oreilly", lineLabel: "Grandpa & Grandma O'Reilly", flag: "🍀", origin: "Chicago", docType: "Photo" },
  { src: "/docs/gallery/Grandpa O & Grandma O/Grandpa O - In Loving Memory.jpg", filename: "Grandpa O - In Loving Memory.jpg", caption: "Grandpa O — In Loving Memory", line: "oreilly", lineLabel: "Grandpa & Grandma O'Reilly", flag: "🍀", origin: "Chicago", docType: "Photo" },
  { src: "/docs/gallery/Grandpa O & Grandma O/Grandpa O.jpg", filename: "Grandpa O.jpg", caption: "Grandpa O — Portrait", line: "oreilly", lineLabel: "Grandpa & Grandma O'Reilly", flag: "🍀", origin: "Chicago", docType: "Photo" },
  { src: "/docs/gallery/Grandpa O & Grandma O/Wedding photo.jpg", filename: "Wedding photo.jpg", caption: "Grandpa & Grandma O'Reilly — Wedding Photo", line: "oreilly", lineLabel: "Grandpa & Grandma O'Reilly", flag: "🍀", origin: "Chicago", docType: "Photo" },
  { src: "/docs/gallery/OReilly-Side/Ann-M-OReilly-Obituary-ChicagoTribune-Apr13-1971.png", filename: "Ann-M-OReilly-Obituary-ChicagoTribune-Apr13-1971.png", caption: "Ann M. O'Reilly — Obituary, Chicago Tribune, Apr 13, 1971", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Obituary" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1900-Census-James-Bell-Riely-Dickson-St.png", filename: "1900-Census-James-Bell-Riely-Dickson-St.png", caption: "1900 Census — James & Bell Riely, Dickson St.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1910-Census-James-Isabelle-Reilly-Dickson-St.png", filename: "1910-Census-James-Isabelle-Reilly-Dickson-St.png", caption: "1910 Census — James & Isabelle Reilly, Dickson St.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1920-Census-William-Anna-Baby-Edward-Daniel-OReilly-Madison-St.png", filename: "1920-Census-William-Anna-Baby-Edward-Daniel-OReilly-Madison-St.png", caption: "1920 Census — William, Anna, Baby Edward & Daniel O'Reilly, Madison St.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1930-Census-Edward-William-Ann-OReilly-Chicago.png", filename: "1930-Census-Edward-William-Ann-OReilly-Chicago.png", caption: "1930 Census — Edward, William & Ann O'Reilly, Chicago", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1930-Census-Edward-William-Ann-OReilly-Ferdinand-St.png", filename: "1930-Census-Edward-William-Ann-OReilly-Ferdinand-St.png", caption: "1930 Census — O'Reilly Family, Ferdinand St.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1930-Census-William-OReilly-Head-Ferdinand-St.png", filename: "1930-Census-William-OReilly-Head-Ferdinand-St.png", caption: "1930 Census — William O'Reilly (Head), Ferdinand St.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1940-Census-Ann-OReilly-Madden-Ferdinand-St.png", filename: "1940-Census-Ann-OReilly-Madden-Ferdinand-St.png", caption: "1940 Census — Ann O'Reilly (née Madden), Ferdinand St.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1950-Census-Edward-Eileen-OReilly-7903-Rhodes-Ave.png", filename: "1950-Census-Edward-Eileen-OReilly-7903-Rhodes-Ave.png", caption: "1950 Census — Edward & Eileen O'Reilly, 7903 Rhodes Ave.", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Census-Images/1950-Census-Edward-Eileen-OReilly-Rhodes-Ave-Chicago.png", filename: "1950-Census-Edward-Eileen-OReilly-Rhodes-Ave-Chicago.png", caption: "1950 Census — Edward & Eileen O'Reilly, Rhodes Ave., Chicago", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Draft-Cards/William-OReilly-WWI-Draft-Card-Born-Aug12-1893-Ireland.png", filename: "William-OReilly-WWI-Draft-Card-Born-Aug12-1893-Ireland.png", caption: "William O'Reilly — WWI Draft Card, born Aug 12, 1893, Ireland", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Draft Card" },
  { src: "/docs/gallery/OReilly-Side/Draft-Cards/William-OReilly-WWI-Draft-Card-HANDWRITTEN-Original.png", filename: "William-OReilly-WWI-Draft-Card-HANDWRITTEN-Original.png", caption: "William O'Reilly — WWI Draft Card, Handwritten Original", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Draft Card" },
  { src: "/docs/gallery/OReilly-Side/Irish-Census/1901-Census-Willie-OReilly-Newmarket-Cork.png", filename: "1901-Census-Willie-OReilly-Newmarket-Cork.png", caption: "1901 Irish Census — Willie O'Reilly, Newmarket, Cork", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Irish-Census/1911-Census-William-OReilly-Church-St-Newmarket-Cork.png", filename: "1911-Census-William-OReilly-Church-St-Newmarket-Cork.png", caption: "1911 Irish Census — William O'Reilly, Church St., Newmarket, Cork", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/OReilly-Side/Marriage-Records/1888-Civil-Marriage-Michael-OReilly-Ellen-Ryan-Kanturk-Cork.png", filename: "1888-Civil-Marriage-Michael-OReilly-Ellen-Ryan-Kanturk-Cork.png", caption: "1888 Civil Marriage — Michael O'Reilly & Ellen Ryan, Kanturk, Cork", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Marriage Record" },
  { src: "/docs/gallery/OReilly-Side/Marriage-Records/1888-HANDWRITTEN-Marriage-Certificate-Michael-OReilly-Ellen-Ryan-Meelin-Cork.png", filename: "1888-HANDWRITTEN-Marriage-Certificate-Michael-OReilly-Ellen-Ryan-Meelin-Cork.png", caption: "1888 Handwritten Marriage Certificate — Michael O'Reilly & Ellen Ryan, Meelin, Cork", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Marriage Record" },
  { src: "/docs/gallery/OReilly-Side/Marriage-Records/Edward-OReilly-Eileen-Coffey-Marriage-Apr10-1948-Cook-County-SEARCH.png", filename: "Edward-OReilly-Eileen-Coffey-Marriage-Apr10-1948-Cook-County-SEARCH.png", caption: "Edward O'Reilly & Eileen Coffey — Marriage, Apr 10, 1948, Cook County", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Marriage Record" },
  { src: "/docs/gallery/OReilly-Side/Marriage-Records/William-Oreilly-Anna-Madden-Marriage-1918-Cook-County.png", filename: "William-Oreilly-Anna-Madden-Marriage-1918-Cook-County.png", caption: "William O'Reilly & Anna Madden — Marriage, 1918, Cook County", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Marriage Record" },
  { src: "/docs/gallery/OReilly-Side/Military/Edward-Joseph-OReilly-WWII-Draft-Card-Ancestry.png", filename: "Edward-Joseph-OReilly-WWII-Draft-Card-Ancestry.png", caption: "Edward Joseph O'Reilly — WWII Draft Card (Ancestry)", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Military Record" },
  { src: "/docs/gallery/OReilly-Side/Military-Records/Edward-OReilly-WWII-Draft-Card-BACK.png", filename: "Edward-OReilly-WWII-Draft-Card-BACK.png", caption: "Edward O'Reilly — WWII Draft Card (Back)", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Military Record" },
  { src: "/docs/gallery/OReilly-Side/Military-Records/Edward-OReilly-WWII-Draft-Card-FRONT.png", filename: "Edward-OReilly-WWII-Draft-Card-FRONT.png", caption: "Edward O'Reilly — WWII Draft Card (Front)", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Military Record" },
  { src: "/docs/gallery/OReilly-Side/Obituaries/Ann-M-OReilly-nee-Madden-Obituary-1971-ChicagoTribune.png", filename: "Ann-M-OReilly-nee-Madden-Obituary-1971-ChicagoTribune.png", caption: "Ann M. O'Reilly (née Madden) — Obituary, 1971, Chicago Tribune", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Obituary" },
  { src: "/docs/gallery/OReilly-Side/Ship-Records/William-OReilly-SS-Franconia-Cobh-1927-Return-From-Ireland.png", filename: "William-OReilly-SS-Franconia-Cobh-1927-Return-From-Ireland.png", caption: "William O'Reilly — SS Franconia, Cobh, 1927, Return From Ireland", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Ship Record" },
  { src: "/docs/gallery/OReilly-Side/Ship-Records/William-OReilly-SS-New-York-Liverpool-1915-Age22-Cork.png", filename: "William-OReilly-SS-New-York-Liverpool-1915-Age22-Cork.png", caption: "William O'Reilly — SS New York, Liverpool, 1915, age 22, from Cork", line: "oreilly", lineLabel: "O'Reilly Side", flag: "🍀", origin: "Cork, Ireland", docType: "Ship Record" },
  { src: "/docs/gallery/Coffey-Side/Ancestry-Tree-John-J-Coffey-Children-Eileen-Born-May18-1923.png", filename: "Ancestry-Tree-John-J-Coffey-Children-Eileen-Born-May18-1923.png", caption: "Ancestry Tree — John J. Coffey, Children incl. Eileen (born May 18, 1923)", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Coffey-Side/Ancestry-Tree-John-J-Coffey-Death-Jan4-1951-Burial-Alsip-HolySepulchre.png", filename: "Ancestry-Tree-John-J-Coffey-Death-Jan4-1951-Burial-Alsip-HolySepulchre.png", caption: "Ancestry Tree — John J. Coffey, Death Jan 4, 1951, Burial Alsip Holy Sepulchre", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Coffey-Side/Ancestry-Tree-John-J-Coffey-FULL-Profile-Ballydarrig-Kerry.png", filename: "Ancestry-Tree-John-J-Coffey-FULL-Profile-Ballydarrig-Kerry.png", caption: "Ancestry Tree — John J. Coffey, Full Profile, Ballydarrig, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Coffey-Side/Ancestry-Tree-John-J-Coffey-More-Children-Father-Death-1927-Kerry.png", filename: "Ancestry-Tree-John-J-Coffey-More-Children-Father-Death-1927-Kerry.png", caption: "Ancestry Tree — John J. Coffey, More Children, Father's Death 1927, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Coffey-Side/Ancestry-Tree-John-J-Coffey-Timeline-1930-1950.png", filename: "Ancestry-Tree-John-J-Coffey-Timeline-1930-1950.png", caption: "Ancestry Tree — John J. Coffey Timeline, 1930–1950", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Coffey-Side/Ancestry-Tree-John-J-Coffey-Timeline-Marriage-Children-Scrolled.png", filename: "Ancestry-Tree-John-J-Coffey-Timeline-Marriage-Children-Scrolled.png", caption: "Ancestry Tree — John J. Coffey, Marriage & Children Timeline", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Coffey-Side/Julia-Coffey-Sheehan-Obituary-ChicagoTribune-Apr27-1965.png", filename: "Julia-Coffey-Sheehan-Obituary-ChicagoTribune-Apr27-1965.png", caption: "Julia Coffey Sheehan — Obituary, Chicago Tribune, Apr 27, 1965", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Obituary" },
  { src: "/docs/gallery/Coffey-Side/Census-Records/1920-Census-John-Julia-Coffey-Chicago.png", filename: "1920-Census-John-Julia-Coffey-Chicago.png", caption: "1920 Census — John & Julia Coffey, Chicago", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Census-Records/1940-Census-Eileen-Coffey-Family.png", filename: "1940-Census-Eileen-Coffey-Family.png", caption: "1940 Census — Eileen Coffey Family", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Draft-Cards/John-J-Coffey-WWI-Draft-Card-Born-Jun17-1875-Ireland.png", filename: "John-J-Coffey-WWI-Draft-Card-Born-Jun17-1875-Ireland.png", caption: "John J. Coffey — WWI Draft Card, born Jun 17, 1875, Ireland", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Draft Card" },
  { src: "/docs/gallery/Coffey-Side/Draft-Cards/John-J-Coffey-WWI-Draft-Card-HANDWRITTEN-Original.png", filename: "John-J-Coffey-WWI-Draft-Card-HANDWRITTEN-Original.png", caption: "John J. Coffey — WWI Draft Card, Handwritten Original", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Draft Card" },
  { src: "/docs/gallery/Coffey-Side/Graves/Julia-Therese-Coffey-Sheehan-FindAGrave-HolySepulchre.png", filename: "Julia-Therese-Coffey-Sheehan-FindAGrave-HolySepulchre.png", caption: "Julia Therese Coffey Sheehan — FindAGrave, Holy Sepulchre", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Gravestone" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census/1901-Farm-Steadings-Return-Farran-Kerry.png", filename: "1901-Farm-Steadings-Return-Farran-Kerry.png", caption: "1901 Irish Census — Farm Steadings Return, Farran, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census/1901-HANDWRITTEN-Census-Coffey-Family-Farran-Kerry-FormA.png", filename: "1901-HANDWRITTEN-Census-Coffey-Family-Farran-Kerry-FormA.png", caption: "1901 Irish Census — Coffey Family, Farran, Kerry (Handwritten Form A)", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census/1901-House-Building-Return-Coffey-Farran-Kerry.png", filename: "1901-House-Building-Return-Coffey-Farran-Kerry.png", caption: "1901 Irish Census — House & Building Return, Coffey, Farran, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census/1901-Irish-Census-Coffey-Family-Farran-Kerry.png", filename: "1901-Irish-Census-Coffey-Family-Farran-Kerry.png", caption: "1901 Irish Census — Coffey Family, Farran, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census/1911-Census-Michael-Coffey-Farran-Castleisland-Kerry.png", filename: "1911-Census-Michael-Coffey-Farran-Castleisland-Kerry.png", caption: "1911 Irish Census — Michael Coffey, Farran, Castleisland, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census-Ballydarrig/1901-Census-DIFFERENT-Jeremiah-Coffey-Cloghanelinaghan-NOT-OURS.png", filename: "1901-Census-DIFFERENT-Jeremiah-Coffey-Cloghanelinaghan-NOT-OURS.png", caption: "1901 Census — Different Jeremiah Coffey, Cloghanelinaghan (NOT our family)", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census-Ballydarrig/1901-Census-Jeremiah-Coffey-House3-Ballydarrig-Castlequin-Kerry.png", filename: "1901-Census-Jeremiah-Coffey-House3-Ballydarrig-Castlequin-Kerry.png", caption: "1901 Census — Jeremiah Coffey, House 3, Ballydarrig, Castlequin, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Irish-Census-Ballydarrig/1901-Census-Search-Results-Jeremiah-Coffey-Kerry-ALL.png", filename: "1901-Census-Search-Results-Jeremiah-Coffey-Kerry-ALL.png", caption: "1901 Census — Search Results, All Jeremiah Coffeys in Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Marriage-Records/Ancestry-Trees-John-Coffey-Julia-Sheehan-Marriage-Jun25-1913-Cook-County.png", filename: "Ancestry-Trees-John-Coffey-Julia-Sheehan-Marriage-Jun25-1913-Cook-County.png", caption: "John Coffey & Julia Sheehan — Marriage, Jun 25, 1913, Cook County", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Marriage Record" },
  { src: "/docs/gallery/Coffey-Side/Obituaries/John-J-Coffey-Obituary-1957-ChicagoTribune-Index.png", filename: "John-J-Coffey-Obituary-1957-ChicagoTribune-Index.png", caption: "John J. Coffey — Obituary, 1957, Chicago Tribune Index", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Obituary" },
  { src: "/docs/gallery/Coffey-Side/Obituaries/John-J-Coffey-Obituary-ChicagoTribune-Jan6-1951.png", filename: "John-J-Coffey-Obituary-ChicagoTribune-Jan6-1951.png", caption: "John J. Coffey — Obituary, Chicago Tribune, Jan 6, 1951", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Obituary" },
  { src: "/docs/gallery/Coffey-Side/Sheehan-Irish-Census/1901-Census-Florence-Debbie-JULIA-Sheehan-Old-Road-Caher-Kerry.png", filename: "1901-Census-Florence-Debbie-JULIA-Sheehan-Old-Road-Caher-Kerry.png", caption: "1901 Irish Census — Florence, Debbie & Julia Sheehan, Old Road, Caher, Kerry", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Coffey-Side/Ship-Records/1913-Adriatic-Detained-Aliens-Julia-Coffey.png", filename: "1913-Adriatic-Detained-Aliens-Julia-Coffey.png", caption: "1913 — SS Adriatic, Detained Aliens List: Julia Coffey", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ship Record" },
  { src: "/docs/gallery/Coffey-Side/Ship-Records/John-Coffey-SS-Ivernia-1902-HANDWRITTEN-Manifest-Cunard-Line.png", filename: "John-Coffey-SS-Ivernia-1902-HANDWRITTEN-Manifest-Cunard-Line.png", caption: "John Coffey — SS Ivernia, 1902, Handwritten Manifest, Cunard Line", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ship Record" },
  { src: "/docs/gallery/Coffey-Side/Ship-Records/John-Coffey-SS-Ivernia-Boston-Apr24-1902-Immigration-Record.png", filename: "John-Coffey-SS-Ivernia-Boston-Apr24-1902-Immigration-Record.png", caption: "John Coffey — SS Ivernia, Boston, Apr 24, 1902, Immigration Record", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Immigration Record" },
  { src: "/docs/gallery/Coffey-Side/Ship-Records/Julia-Sheehan-SS-Arabic-Boston-May5-1906-Record.png", filename: "Julia-Sheehan-SS-Arabic-Boston-May5-1906-Record.png", caption: "Julia Sheehan — SS Arabic, Boston, May 5, 1906", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ship Record" },
  { src: "/docs/gallery/Coffey-Side/Ship-Records/SS-Arabic-1906-Manifest-HANDWRITTEN-Julia-Sheehan-Boston.png", filename: "SS-Arabic-1906-Manifest-HANDWRITTEN-Julia-Sheehan-Boston.png", caption: "SS Arabic, 1906 — Handwritten Manifest, Julia Sheehan, Boston", line: "coffey", lineLabel: "Coffey Side", flag: "🍀", origin: "Kerry, Ireland", docType: "Ship Record" },
  { src: "/docs/gallery/Linnerud-Side/Albert-Linnerud-KILLED-IN-STORM-Belvidere-Daily-Republican-Jun8-1933.png", filename: "Albert-Linnerud-KILLED-IN-STORM-Belvidere-Daily-Republican-Jun8-1933.png", caption: "Albert Linnerud — \"Killed in Storm\" · Belvidere Daily Republican, Jun 8, 1933", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Newspaper" },
  { src: "/docs/gallery/Linnerud-Side/Albert-S-Linnerud-Death-Record-Jun4-1933-Chicago.png", filename: "Albert-S-Linnerud-Death-Record-Jun4-1933-Chicago.png", caption: "Albert S. Linnerud — Death Record, Jun 4, 1933, Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Death Record" },
  { src: "/docs/gallery/Linnerud-Side/Emigration-Gudrun-Martinsen-Linnerud-1913-Oslo.png", filename: "Emigration-Gudrun-Martinsen-Linnerud-1913-Oslo.png", caption: "Gudrun Martinsen Linnerud — Emigration Record, 1913, Oslo", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Emigration Record" },
  { src: "/docs/gallery/Linnerud-Side/FindAGrave-Andrew-Linnerud-Full-Page-With-Family.png", filename: "FindAGrave-Andrew-Linnerud-Full-Page-With-Family.png", caption: "Andrew Linnerud — FindAGrave Full Page With Family", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Linnerud-Side/FindAGrave-Andrew-Olaus-Linnerud-Gravestone.png", filename: "FindAGrave-Andrew-Olaus-Linnerud-Gravestone.png", caption: "Andrew Olaus Linnerud — Gravestone (FindAGrave)", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Gravestone" },
  { src: "/docs/gallery/Linnerud-Side/FindAGrave-Anna-Gudrun-Lee-Linnerud-Full-Page.png", filename: "FindAGrave-Anna-Gudrun-Lee-Linnerud-Full-Page.png", caption: "Anna Gudrun Lee Linnerud — FindAGrave Full Page", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Linnerud-Side/Census-Records/1920-Census-Andrew-Anna-Linnerud-Chicago.png", filename: "1920-Census-Andrew-Anna-Linnerud-Chicago.png", caption: "1920 Census — Andrew & Anna Linnerud, Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Census-Records/1920-Census-Andrew-Linnerud-Family-Oakley-Chicago.png", filename: "1920-Census-Andrew-Linnerud-Family-Oakley-Chicago.png", caption: "1920 Census — Andrew Linnerud Family, Oakley Ave., Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Census-Records/1930-Census-Andrew-Anna-Lyle-Linnerud-Chicago.png", filename: "1930-Census-Andrew-Anna-Lyle-Linnerud-Chicago.png", caption: "1930 Census — Andrew, Anna & Lyle Linnerud, Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Census-Records/1930-Census-Andrew-Linnerud-Family-Washtenaw-Chicago.png", filename: "1930-Census-Andrew-Linnerud-Family-Washtenaw-Chicago.png", caption: "1930 Census — Andrew Linnerud Family, Washtenaw Ave., Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Census-Records/1940-Census-Andrew-Linnerud-7007-S-Artesian-Chicago.png", filename: "1940-Census-Andrew-Linnerud-7007-S-Artesian-Chicago.png", caption: "1940 Census — Andrew Linnerud, 7007 S. Artesian Ave., Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Census-Records/1940-Census-Andrew-Linnerud-Family-7007-Artesian-Chicago.png", filename: "1940-Census-Andrew-Linnerud-Family-7007-Artesian-Chicago.png", caption: "1940 Census — Andrew Linnerud Family, 7007 Artesian Ave., Chicago", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Church-Records/1885-Baptism-Anders-Olaus-Vinger-Hedmark.png", filename: "1885-Baptism-Anders-Olaus-Vinger-Hedmark.png", caption: "1885 Baptism Record — Anders Olaus, Vinger, Hedmark", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Church Record" },
  { src: "/docs/gallery/Linnerud-Side/Draft-Cards/Andrew-Linnerud-WWI-Draft-Card-Record.png", filename: "Andrew-Linnerud-WWI-Draft-Card-Record.png", caption: "Andrew Linnerud — WWI Draft Card", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Draft Card" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Albert-S-Linnerud-1913-1933-Gravestone-Jefferson-Prairie-Cemetery.png", filename: "Albert-S-Linnerud-1913-1933-Gravestone-Jefferson-Prairie-Cemetery.png", caption: "Albert S. Linnerud (1913–1933) — Gravestone, Jefferson Prairie Cemetery", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Gravestone" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Andrew-Olaus-Linnerud-1885-1948-Jefferson-Prairie-Cemetery-Clinton-WI.png", filename: "Andrew-Olaus-Linnerud-1885-1948-Jefferson-Prairie-Cemetery-Clinton-WI.png", caption: "Andrew Olaus Linnerud (1885–1948) — Jefferson Prairie Cemetery, Clinton, WI", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Gravestone" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Andrew-Olaus-Linnerud-FindAGrave-Memorial-Full-Family.png", filename: "Andrew-Olaus-Linnerud-FindAGrave-Memorial-Full-Family.png", caption: "Andrew Olaus Linnerud — FindAGrave Memorial with Full Family", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Anna-Gudrun-Lee-Linnerud-1893-1987-FindAGrave-Gravestone-Family.png", filename: "Anna-Gudrun-Lee-Linnerud-1893-1987-FindAGrave-Gravestone-Family.png", caption: "Anna Gudrun Lee Linnerud (1893–1987) — FindAGrave Gravestone & Family", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Gravestone" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Anna-Gudrun-Linnerud-Lee-FindAGrave-Jefferson-Prairie-WI.png", filename: "Anna-Gudrun-Linnerud-Lee-FindAGrave-Jefferson-Prairie-WI.png", caption: "Anna Gudrun Linnerud Lee — FindAGrave, Jefferson Prairie, WI", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Helen-Marie-Jakubicek-Linnerud-1925-2010-OBITUARY-FindAGrave.png", filename: "Helen-Marie-Jakubicek-Linnerud-1925-2010-OBITUARY-FindAGrave.png", caption: "Helen Marie Jakubicek Linnerud (1925–2010) — Obituary on FindAGrave", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Linnerud-Side/Graves/Lyle-Andrew-Linnerud-1922-2015-PHOTO-Obituary-FindAGrave.png", filename: "Lyle-Andrew-Linnerud-1922-2015-PHOTO-Obituary-FindAGrave.png", caption: "Lyle Andrew Linnerud (1922–2015) — Photo & Obituary on FindAGrave", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Linnerud-Side/Immigration/Andreas-Linerud-SS-Caronia-1906-Ellis-Island.png", filename: "Andreas-Linerud-SS-Caronia-1906-Ellis-Island.png", caption: "Andreas Linnerud — SS Caronia, 1906, Ellis Island", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Immigration Record" },
  { src: "/docs/gallery/Linnerud-Side/Marriage-Records/Lyle-Linnerud-Helen-Jakubicek-Marriage-Jan20-1951-Winnebago-County.png", filename: "Lyle-Linnerud-Helen-Jakubicek-Marriage-Jan20-1951-Winnebago-County.png", caption: "Lyle Linnerud & Helen Jakubicek — Marriage, Jan 20, 1951, Winnebago County", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Marriage Record" },
  { src: "/docs/gallery/Linnerud-Side/Norwegian-Census/1891-Norway-Census-Anders-Olaus-Anderson-Vinger-Hedmark.png", filename: "1891-Norway-Census-Anders-Olaus-Anderson-Vinger-Hedmark.png", caption: "1891 Norwegian Census — Anders Olaus Anderson, Vinger, Hedmark", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Norwegian-Census/1900-Norway-Census-Anders-Andersen-Linnerud-Farm-Vinger.png", filename: "1900-Norway-Census-Anders-Andersen-Linnerud-Farm-Vinger.png", caption: "1900 Norwegian Census — Anders Andersen Linnerud, Linnerud Farm, Vinger", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Linnerud-Side/Obituaries/Andrew-O-Linnerud-Obituary-ChicagoTribune-Dec6-1948.png", filename: "Andrew-O-Linnerud-Obituary-ChicagoTribune-Dec6-1948.png", caption: "Andrew O. Linnerud — Obituary, Chicago Tribune, Dec 6, 1948", line: "linnerud", lineLabel: "Linnerud Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Obituary" },
  { src: "/docs/gallery/Lee-Side/1865-Norway-Census-Berthea-Arnesdatter-age4-Vinger-Hedmark.png", filename: "1865-Norway-Census-Berthea-Arnesdatter-age4-Vinger-Hedmark.png", caption: "1865 Norwegian Census — Berthea Arnesdatter, age 4, Vinger, Hedmark", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Lee-Side/1865-Norway-Census-Sigvard-Sorensen-Vinger-Hedmark.png", filename: "1865-Norway-Census-Sigvard-Sorensen-Vinger-Hedmark.png", caption: "1865 Norwegian Census — Sigvard Sorensen, Vinger, Hedmark", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Lee-Side/1865-Norwegian-Census-FULL-Kjaerret-Farm-Erland-Andersen-Berthea-Family.png", filename: "1865-Norwegian-Census-FULL-Kjaerret-Farm-Erland-Andersen-Berthea-Family.png", caption: "1865 Norwegian Census — Full Page, Kjærret Farm, Erland Andersen & Berthea Family", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Lee-Side/1900-Census-Sorenson-Family-Annie-age7-Manchester-IL.png", filename: "1900-Census-Sorenson-Family-Annie-age7-Manchester-IL.png", caption: "1900 Census — Sorenson Family, Annie age 7, Manchester, IL", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Lee-Side/1910-Census-Sigvart-Berthea-Lee-Family-Manchester-IL.png", filename: "1910-Census-Sigvart-Berthea-Lee-Family-Manchester-IL.png", caption: "1910 Census — Sigvart & Berthea Lee Family, Manchester, IL", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Lee-Side/1930-Census-Sigvart-Lee-Manchester-Boone-IL.png", filename: "1930-Census-Sigvart-Lee-Manchester-Boone-IL.png", caption: "1930 Census — Sigvart Lee, Manchester, Boone County, IL", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Census Record" },
  { src: "/docs/gallery/Lee-Side/Baptism-Record-Sigvard-Sorensen-Dec30-1859-Vinger-Hedmark.png", filename: "Baptism-Record-Sigvard-Sorensen-Dec30-1859-Vinger-Hedmark.png", caption: "Baptism Record — Sigvard Sorensen, Dec 30, 1859, Vinger, Hedmark", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Church Record" },
  { src: "/docs/gallery/Lee-Side/Death-Record-Berthea-Lee-1921-Father-Arsu-Erlandson.png", filename: "Death-Record-Berthea-Lee-1921-Father-Arsu-Erlandson.png", caption: "Death Record — Berthea Lee, 1921, father: Arsu Erlandson", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Death Record" },
  { src: "/docs/gallery/Lee-Side/Death-Record-Sigvart-S-Lee-1943-Father-Sorne-Spouse-Berthea-Arneson.png", filename: "Death-Record-Sigvart-S-Lee-1943-Father-Sorne-Spouse-Berthea-Arneson.png", caption: "Death Record — Sigvart S. Lee, 1943, father: Sorne, spouse: Berthea Arneson", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Death Record" },
  { src: "/docs/gallery/Lee-Side/Emigration-Record-Sigvard-Sorensen-1885-Oslo-to-NewYork-Ship-Juno.png", filename: "Emigration-Record-Sigvard-Sorensen-1885-Oslo-to-NewYork-Ship-Juno.png", caption: "Emigration Record — Sigvard Sorensen, 1885, Oslo to New York, Ship Juno", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Emigration Record" },
  { src: "/docs/gallery/Lee-Side/FindAGrave-Berthea-S-Lee-FULL-PAGE-With-Photo-Gravestone.png", filename: "FindAGrave-Berthea-S-Lee-FULL-PAGE-With-Photo-Gravestone.png", caption: "Berthea S. Lee — FindAGrave Full Page with Photo & Gravestone", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Lee-Side/FindAGrave-Sigvart-Lee-ALL-PHOTOS-Portrait-Gravestones.png", filename: "FindAGrave-Sigvart-Lee-ALL-PHOTOS-Portrait-Gravestones.png", caption: "Sigvart Lee — FindAGrave, All Photos: Portrait & Gravestones", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Lee-Side/FindAGrave-Sigvart-S-Lee-FULL-PAGE-With-Photos.png", filename: "FindAGrave-Sigvart-S-Lee-FULL-PAGE-With-Photos.png", caption: "Sigvart S. Lee — FindAGrave Full Page with Photos", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "FindAGrave" },
  { src: "/docs/gallery/Lee-Side/Lutheran-Church-Record-Sigvart-Lee-Sorenson-Spouse-Berthea.png", filename: "Lutheran-Church-Record-Sigvart-Lee-Sorenson-Spouse-Berthea.png", caption: "Lutheran Church Record — Sigvart Lee Sorenson, spouse Berthea", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Church Record" },
  { src: "/docs/gallery/Lee-Side/Marriage-Record-Sigvart-Sorensen-Bertha-Arneson-Sep8-1892-Dane-WI.png", filename: "Marriage-Record-Sigvart-Sorensen-Bertha-Arneson-Sep8-1892-Dane-WI.png", caption: "Marriage Record — Sigvart Sorensen & Bertha Arneson, Sep 8, 1892, Dane County, WI", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Marriage Record" },
  { src: "/docs/gallery/Lee-Side/Norwegian-Church-Book-Berthea-Arnesdatter-Confirmation-1877-Vinger.png", filename: "Norwegian-Church-Book-Berthea-Arnesdatter-Confirmation-1877-Vinger.png", caption: "Norwegian Church Book — Berthea Arnesdatter, Confirmation 1877, Vinger", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Church Record" },
  { src: "/docs/gallery/Lee-Side/Norwegian-Church-Book-Sigvard-Sorensen-BIRTH-Record-Dec30-1859-Vinger.png", filename: "Norwegian-Church-Book-Sigvard-Sorensen-BIRTH-Record-Dec30-1859-Vinger.png", caption: "Norwegian Church Book — Sigvard Sorensen, Birth Record, Dec 30, 1859, Vinger", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Church Record" },
  { src: "/docs/gallery/Lee-Side/Norwegian-Church-Book-Sigvard-Sorensen-Confirmation-Aug1876-Vinger.png", filename: "Norwegian-Church-Book-Sigvard-Sorensen-Confirmation-Aug1876-Vinger.png", caption: "Norwegian Church Book — Sigvard Sorensen, Confirmation Aug 1876, Vinger", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Church Record" },
  { src: "/docs/gallery/Lee-Side/PHOTO-Lee-Family-Full-Portrait-Sigvart-Berthea-8-Children-CLEAN.png", filename: "PHOTO-Lee-Family-Full-Portrait-Sigvart-Berthea-8-Children-CLEAN.png", caption: "Lee Family — Full Portrait: Sigvart, Berthea & 8 Children", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Photo" },
  { src: "/docs/gallery/Lee-Side/PHOTO-Lee-Family-Portrait-Sigvart-Berthea-Children.png", filename: "PHOTO-Lee-Family-Portrait-Sigvart-Berthea-Children.png", caption: "Lee Family Portrait — Sigvart, Berthea & Children", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Photo" },
  { src: "/docs/gallery/Lee-Side/PHOTO-Sigvart-Lee-Sorensen-Portrait-2xGreatGrandfather.png", filename: "PHOTO-Sigvart-Lee-Sorensen-Portrait-2xGreatGrandfather.png", caption: "Sigvart Lee (Sorensen) — Portrait, 2× Great-Grandfather", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Photo" },
  { src: "/docs/gallery/Lee-Side/Ship-Manifest-SS-England-May1885-Sigvart-Sorensen-HANDWRITTEN.png", filename: "Ship-Manifest-SS-England-May1885-Sigvart-Sorensen-HANDWRITTEN.png", caption: "Ship Manifest — SS England, May 1885, Sigvart Sorensen (Handwritten)", line: "lee", lineLabel: "Lee Side", flag: "🇳🇴", origin: "Vinger, Norway", docType: "Ship Record" },
  { src: "/docs/gallery/Jakubicek-Side/FindAGrave-Thomas-Jakubicek-Bohemian-National-Cemetery.png", filename: "FindAGrave-Thomas-Jakubicek-Bohemian-National-Cemetery.png", caption: "Thomas Jakubicek — FindAGrave, Bohemian National Cemetery", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "FindAGrave" },
  { src: "/docs/gallery/Jakubicek-Side/FindAGrave-Thomas-Jakubicek-Full-Page-Bohemian-Cemetery.png", filename: "FindAGrave-Thomas-Jakubicek-Full-Page-Bohemian-Cemetery.png", caption: "Thomas Jakubicek — FindAGrave Full Page, Bohemian National Cemetery", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "FindAGrave" },
  { src: "/docs/gallery/Jakubicek-Side/Marie-Melka-Ancestry-Tree-Match-Parents-Ludvik-Klara.png", filename: "Marie-Melka-Ancestry-Tree-Match-Parents-Ludvik-Klara.png", caption: "Marie Melka — Ancestry Tree Match, Parents: Ludvik & Klara", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Ancestry Tree" },
  { src: "/docs/gallery/Jakubicek-Side/Thomas-Jakubicek-Declaration-of-Intention-Naturalization-1924.png", filename: "Thomas-Jakubicek-Declaration-of-Intention-Naturalization-1924.png", caption: "Thomas Jakubicek — Declaration of Intention (Naturalization), 1924", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Thomas-Jakubicek-Petition-Naturalization-ZOOMED-Apr14-1928.png", filename: "Thomas-Jakubicek-Petition-Naturalization-ZOOMED-Apr14-1928.png", caption: "Thomas Jakubicek — Naturalization Petition (Zoomed), Apr 14, 1928", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Thomas-Jakubicek-Petition-for-Naturalization-Apr14-1928-Chicago.png", filename: "Thomas-Jakubicek-Petition-for-Naturalization-Apr14-1928-Chicago.png", caption: "Thomas Jakubicek — Petition for Naturalization, Apr 14, 1928, Chicago", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Census-Records/1920-Census-Thomas-Jakubicek-Chicago-Boarder.png", filename: "1920-Census-Thomas-Jakubicek-Chicago-Boarder.png", caption: "1920 Census — Thomas Jakubicek, Chicago (listed as Boarder)", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Census Record" },
  { src: "/docs/gallery/Jakubicek-Side/Census-Records/1930-Census-Helen-Jakubicek-Family-Chicago.png", filename: "1930-Census-Helen-Jakubicek-Family-Chicago.png", caption: "1930 Census — Helen Jakubicek Family, Chicago", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Census Record" },
  { src: "/docs/gallery/Jakubicek-Side/Census-Records/1930-Census-Thomas-Mary-Helen-Jakubicek-1157-W-18th-Chicago.png", filename: "1930-Census-Thomas-Mary-Helen-Jakubicek-1157-W-18th-Chicago.png", caption: "1930 Census — Thomas, Mary & Helen Jakubicek, 1157 W. 18th St., Chicago", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Census Record" },
  { src: "/docs/gallery/Jakubicek-Side/Census-Records/1940-Census-Thomas-Jakubicek-Family-South-May-St-Chicago.png", filename: "1940-Census-Thomas-Jakubicek-Family-South-May-St-Chicago.png", caption: "1940 Census — Thomas Jakubicek Family, South May St., Chicago", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Census Record" },
  { src: "/docs/gallery/Jakubicek-Side/Draft-Cards/Thomas-Joseph-Jakubicek-WWII-Draft-Card-1942-1864-S-Throop-Chicago.png", filename: "Thomas-Joseph-Jakubicek-WWII-Draft-Card-1942-1864-S-Throop-Chicago.png", caption: "Thomas Joseph Jakubicek — WWII Draft Card, 1942, 1864 S. Throop St., Chicago", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Draft Card" },
  { src: "/docs/gallery/Jakubicek-Side/Graves/Mary-Marie-Jakubicek-nee-Melka-1896-1989-FindAGrave-Parents-Ludvig-Melka-Clara-Marc.png", filename: "Mary-Marie-Jakubicek-nee-Melka-1896-1989-FindAGrave-Parents-Ludvig-Melka-Clara-Marc.png", caption: "Mary Marie Jakubicek (née Melka, 1896–1989) — FindAGrave, Parents: Ludvig Melka & Clara", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "FindAGrave" },
  { src: "/docs/gallery/Jakubicek-Side/Graves/Thomas-Jakubicek-1886-1963-FindAGrave-BohemianNationalCemetery.png", filename: "Thomas-Jakubicek-1886-1963-FindAGrave-BohemianNationalCemetery.png", caption: "Thomas Jakubicek (1886–1963) — FindAGrave, Bohemian National Cemetery", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "FindAGrave" },
  { src: "/docs/gallery/Jakubicek-Side/Marriage-Records/Thomas-Jakubicek-Mary-Melka-Marriage-1922-Cook-County.png", filename: "Thomas-Jakubicek-Mary-Melka-Marriage-1922-Cook-County.png", caption: "Thomas Jakubicek & Mary Melka — Marriage, 1922, Cook County", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Marriage Record" },
  { src: "/docs/gallery/Jakubicek-Side/Marriage-Records/Thomas-Jakubicek-Mary-Melka-Marriage-Aug12-1922-Cook-County.png", filename: "Thomas-Jakubicek-Mary-Melka-Marriage-Aug12-1922-Cook-County.png", caption: "Thomas Jakubicek & Mary Melka — Marriage, Aug 12, 1922, Cook County", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Marriage Record" },
  { src: "/docs/gallery/Jakubicek-Side/Naturalization/Marie-Melka-Navratil-Naturalization-Petition-1933.png", filename: "Marie-Melka-Navratil-Naturalization-Petition-1933.png", caption: "Marie Melka Navratil — Naturalization Petition, 1933", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Naturalization/Thomas-Jakubicek-Naturalization-Born-Dec6-1886-Married-Aug12-1922.png", filename: "Thomas-Jakubicek-Naturalization-Born-Dec6-1886-Married-Aug12-1922.png", caption: "Thomas Jakubicek — Naturalization, born Dec 6, 1886, married Aug 12, 1922", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Naturalization/Thomas-Jakubicek-Naturalization-Petition-1928.png", filename: "Thomas-Jakubicek-Naturalization-Petition-1928.png", caption: "Thomas Jakubicek — Naturalization Petition, 1928", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Naturalization/Thomas-Jakubicek-PETITION-Naturalization-1941-HANDWRITTEN.png", filename: "Thomas-Jakubicek-PETITION-Naturalization-1941-HANDWRITTEN.png", caption: "Thomas Jakubicek — Naturalization Petition, 1941 (Handwritten)", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Naturalization" },
  { src: "/docs/gallery/Jakubicek-Side/Ship-Records/Thomas-Jakubicek-Ellis-Island-Kronprinz-Wilhelm-1903.png", filename: "Thomas-Jakubicek-Ellis-Island-Kronprinz-Wilhelm-1903.png", caption: "Thomas Jakubicek — Ellis Island, SS Kronprinz Wilhelm, 1903", line: "jakubicek", lineLabel: "Jakubicek Side", flag: "🇨🇿", origin: "Bohemia, Czech", docType: "Immigration Record" },
  { src: "/docs/gallery/Madden-Side/1858-Catholic-Baptism-Record-Michael-Madden-Templederry-Tipperary.png", filename: "1858-Catholic-Baptism-Record-Michael-Madden-Templederry-Tipperary.png", caption: "1858 Catholic Baptism Record — Michael Madden, Templederry, Tipperary", line: "madden", lineLabel: "Madden Side", flag: "🍀", origin: "Tipperary, Ireland", docType: "Church Record" },
  { src: "/docs/gallery/Madden-Side/1900-Census-Michael-Bridget-Madden-Family-121-Iowa-St-Chicago.png", filename: "1900-Census-Michael-Bridget-Madden-Family-121-Iowa-St-Chicago.png", caption: "1900 Census — Michael & Bridget Madden Family, 121 Iowa St., Chicago", line: "madden", lineLabel: "Madden Side", flag: "🍀", origin: "Tipperary, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Madden-Side/1910-Census-Michael-Bridget-Madden-Family-W-Superior-St-Chicago.png", filename: "1910-Census-Michael-Bridget-Madden-Family-W-Superior-St-Chicago.png", caption: "1910 Census — Michael & Bridget Madden Family, W. Superior St., Chicago", line: "madden", lineLabel: "Madden Side", flag: "🍀", origin: "Tipperary, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Madden-Side/1910-Census-Michael-J-Madden-Head-Policeman-1933-W-Superior-St.png", filename: "1910-Census-Michael-J-Madden-Head-Policeman-1933-W-Superior-St.png", caption: "1910 Census — Michael J. Madden (Head, Policeman), 1933 W. Superior St.", line: "madden", lineLabel: "Madden Side", flag: "🍀", origin: "Tipperary, Ireland", docType: "Census Record" },
  { src: "/docs/gallery/Madden-Side/FindAGrave-Bridget-Biddie-Powell-Madden-1869-1940-Tipperary.png", filename: "FindAGrave-Bridget-Biddie-Powell-Madden-1869-1940-Tipperary.png", caption: "Bridget 'Biddie' Powell Madden (1869–1940) — FindAGrave, from Tipperary", line: "madden", lineLabel: "Madden Side", flag: "🍀", origin: "Tipperary, Ireland", docType: "FindAGrave" },
  { src: "/docs/gallery/Madden-Side/FindAGrave-Michael-G-Madden-1858-1944-Lisgoriff-Tipperary.png", filename: "FindAGrave-Michael-G-Madden-1858-1944-Lisgoriff-Tipperary.png", caption: "Michael G. Madden (1858–1944) — FindAGrave, from Lisgoriff, Tipperary", line: "madden", lineLabel: "Madden Side", flag: "🍀", origin: "Tipperary, Ireland", docType: "FindAGrave" },
];

const LINES = [
  { key: "all", label: "All Families", flag: "🌳" },
  { key: "oreilly", label: "O'Reilly", flag: "🍀" },
  { key: "coffey", label: "Coffey", flag: "🍀" },
  { key: "linnerud", label: "Linnerud", flag: "🇳🇴" },
  { key: "lee", label: "Lee", flag: "🇳🇴" },
  { key: "jakubicek", label: "Jakubicek", flag: "🇨🇿" },
  { key: "madden", label: "Madden", flag: "🍀" },
];

const DOC_TYPES = ["All Types", "Census Record", "Ship Record", "Marriage Record", "Draft Card", "Military Record", "Church Record", "Naturalization", "Immigration Record", "Emigration Record", "Obituary", "FindAGrave", "Ancestry Tree", "Death Record", "Gravestone", "Newspaper", "Photo"];

const TYPE_COLORS: Record<string, string> = {
  "Census Record": "bg-blue-100 text-blue-800",
  "Ship Record": "bg-cyan-100 text-cyan-800",
  "Marriage Record": "bg-pink-100 text-pink-800",
  "Draft Card": "bg-orange-100 text-orange-800",
  "Military Record": "bg-red-100 text-red-800",
  "Church Record": "bg-purple-100 text-purple-800",
  "Naturalization": "bg-green-100 text-green-800",
  "Immigration Record": "bg-teal-100 text-teal-800",
  "Emigration Record": "bg-teal-100 text-teal-800",
  "Obituary": "bg-gray-200 text-gray-700",
  "FindAGrave": "bg-stone-100 text-stone-700",
  "Ancestry Tree": "bg-amber-100 text-amber-800",
  "Death Record": "bg-gray-200 text-gray-700",
  "Gravestone": "bg-stone-200 text-stone-700",
  "Newspaper": "bg-yellow-100 text-yellow-800",
  "Photo": "bg-indigo-100 text-indigo-800",
  "Document": "bg-slate-100 text-slate-700",
};

export default function DocumentsPage() {
  const [activeLine, setActiveLine] = useState("all");
  const [activeType, setActiveType] = useState("All Types");
  const [lightbox, setLightbox] = useState<null | typeof GALLERY[0]>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filtered = GALLERY.filter((doc) => {
    const lineMatch = activeLine === "all" || doc.line === activeLine;
    const typeMatch = activeType === "All Types" || doc.docType === activeType;
    return lineMatch && typeMatch;
  });

  const openLightbox = (doc: typeof GALLERY[0], idx: number) => {
    setLightbox(doc);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => setLightbox(null);

  const navLightbox = (dir: number) => {
    const newIdx = (lightboxIdx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIdx(newIdx);
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <header className="bg-ink text-parchment py-12 px-6 text-center">
        <Link href="/" className="text-gold text-sm hover:underline mb-4 block" style={{ fontFamily: "var(--font-sans)" }}>
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
          🗂️ Source Documents
        </h1>
        <p className="text-parchment/70 text-lg" style={{ fontFamily: "var(--font-sans)" }}>
          {GALLERY.length} primary source documents — census records, ship manifests, draft cards, marriage certificates, and more
        </p>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          {/* Family line tabs */}
          <div className="flex flex-wrap gap-2 mb-3">
            {LINES.map((line) => {
              const count = line.key === "all" ? GALLERY.length : GALLERY.filter((d) => d.line === line.key).length;
              return (
                <button
                  key={line.key}
                  onClick={() => setActiveLine(line.key)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeLine === line.key
                      ? "bg-ink text-parchment"
                      : "bg-parchment text-ink hover:bg-ink/10"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {line.flag} {line.label} <span className="opacity-60 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
          {/* Doc type filter */}
          <div className="flex flex-wrap gap-1.5">
            {DOC_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all border ${
                  activeType === type
                    ? "border-ink bg-ink text-parchment"
                    : "border-border bg-white text-ink-light hover:border-ink/40"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-2">
          <p className="text-xs text-ink-muted" style={{ fontFamily: "var(--font-sans)" }}>
            Showing {filtered.length} of {GALLERY.length} documents
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="popLayout">
          <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3">
            {filtered.map((doc, idx) => (
              <motion.div
                key={doc.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="break-inside-avoid mb-3 cursor-pointer group"
                onClick={() => openLightbox(doc, idx)}
              >
                <div className="bg-white border border-border rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.src}
                    alt={doc.caption}
                    className="w-full object-cover group-hover:opacity-95 transition-opacity"
                    loading="lazy"
                  />
                  <div className="p-2">
                    <span className={`inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded mb-1 ${TYPE_COLORS[doc.docType] || "bg-slate-100 text-slate-700"}`} style={{ fontFamily: "var(--font-sans)" }}>
                      {doc.docType}
                    </span>
                    <p className="text-[11px] text-ink-light leading-snug" style={{ fontFamily: "var(--font-sans)" }}>
                      {doc.caption}
                    </p>
                    <p className="text-[10px] text-ink-muted mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                      {doc.flag} {doc.lineLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink-muted" style={{ fontFamily: "var(--font-sans)" }}>
            No documents found for this filter combination.
          </div>
        )}
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl leading-none z-10"
              >
                ×
              </button>

              {/* Nav arrows */}
              <button
                onClick={() => navLightbox(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ‹
              </button>
              <button
                onClick={() => navLightbox(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-10 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ›
              </button>

              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="max-h-[75vh] max-w-full object-contain rounded-sm"
              />

              {/* Caption */}
              <div className="mt-3 text-center px-10">
                <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                  {lightbox.caption}
                </p>
                <p className="text-white/60 text-xs mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                  {lightbox.flag} {lightbox.lineLabel} · {lightbox.docType}
                  {lightbox.origin && ` · ${lightbox.origin}`}
                </p>
                <p className="text-white/40 text-xs mt-1" style={{ fontFamily: "var(--font-sans)" }}>
                  {lightboxIdx + 1} of {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
