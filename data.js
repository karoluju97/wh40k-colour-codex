/*
 * Colour Codex data.
 * Lore summarised in my own words from Lexicanum (wh40k.lexicanum.com) and the
 * Warhammer 40k Fandom wiki (warhammer40k.fandom.com). Hex values are painter's
 * approximations of the described liveries, not official paint matches.
 *
 * Scheme format:
 *   pattern: "solid" | "halved" | "quartered"
 *   colours: [{ n: name, h: hex, r: role }]
 *     roles: "armour" (main), "armour2" (second half/quarter), "trim", "detail"
 */

const L = (n, h) => ({ n, h, r: "armour" });
const L2 = (n, h) => ({ n, h, r: "armour2" });
const T = (n, h) => ({ n, h, r: "trim" });
const D = (n, h) => ({ n, h, r: "detail" });

// Shared tones
const BLACK = "#1b1b1e", BONE = "#d9cca6", WHITE = "#ecebe6", GOLD = "#c49a3c",
      SILVER = "#a9adb1", BRASS = "#a8823a", RED = "#9e1b1e", GUNMETAL = "#55595e";

const LEGIONS = [
  {
    num: "I", name: "Dark Angels", primarch: "Lion El'Jonson", allegiance: "Loyalist",
    status: "Returned to the Imperium in the Era Indomitus",
    homeworld: "Caliban (destroyed)",
    primarchBio: "Found as a feral boy in Caliban's monster-haunted forests and raised by its knightly orders, the Lion was a cold, brilliant strategist. His relationship with his sons was shattered by Luther's rebellion on Caliban, and he slept for ten thousand years before returning.",
    legionBio: "The First Legion, keepers of secrets. Their modern Chapter hides the shame of the Fallen and hunts them relentlessly. They field the bone-armoured Deathwing and the black-armoured Ravenwing alongside the green battle companies.",
    schemes: [
      { label: "Battle companies (modern)", img: "DA_Primaris_Intercessor.png", pattern: "solid", colours: [L("Dark green", "#1d4a2b"), T("Dark green", "#1d4a2b"), D("Bone robes", BONE), D("Red", RED), D("Gold", GOLD)] },
      { label: "Deathwing", img: "Deathwing_Termi.jpg", pattern: "solid", colours: [L("Bone", BONE), T("Bone", BONE), D("Red", RED), D("Dark green", "#1d4a2b")] },
      { label: "Ravenwing", img: "BlackKnight.jpg", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Bone", BONE), D("Silver", SILVER)] },
      { label: "Horus Heresy Legion", img: "DA_Legionary_MK_III_Artificer.png", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Red", RED), D("Bone", BONE)] },
    ],
  },

  {
    num: "III", name: "Emperor's Children", primarch: "Fulgrim", allegiance: "Traitor",
    status: "Daemon Prince of Slaanesh", homeworld: "Chemos",
    primarchBio: "Fulgrim the Phoenician pursued perfection in every art. A cursed daemon blade led him toward excess and he slew his closest brother, Ferrus Manus, at Isstvan V before ascending as a daemon of Slaanesh.",
    legionBio: "Once the proud bearers of the Emperor's own aquila, the III Legion fell into hedonism and sensory obsession. Their regal purple and gold became garish pinks, purples and blacks.",
    schemes: [
      { label: "Pre-Heresy / Heresy", img: "EC_Legionary_Mk_IV.jpg", pattern: "solid", colours: [L("Royal purple", "#5b2a6e"), T("Gold", GOLD), D("White", WHITE), D("Black", BLACK)] },
      { label: "Chaos (modern)", img: "MandrakhBlissEmperorsChildren.jpg", pattern: "solid", colours: [L("Pink", "#d1579c"), T("Gold", GOLD), D("Purple", "#5b2a6e"), D("Black", BLACK)] },
    ],
  },
  {
    num: "IV", name: "Iron Warriors", primarch: "Perturabo", allegiance: "Traitor",
    status: "Daemon Prince", homeworld: "Olympia",
    primarchBio: "Perturabo was a genius of mathematics and siegecraft, embittered by years of thankless grinding wars. He resented his brother Rogal Dorn and turned traitor, eventually ascending to daemonhood within the Eye of Terror.",
    legionBio: "Masters of siege warfare who reduce fortresses with grim, methodical patience. Their gunmetal armour carries yellow and black hazard stripes.",
    schemes: [
      { label: "Legion colours", pattern: "solid", colours: [L("Gunmetal", GUNMETAL), T("Hazard yellow", "#e6b510"), D("Black stripes", BLACK), D("Silver", SILVER)] },
    ],
  },
  {
    num: "V", name: "White Scars", primarch: "Jaghatai Khan", allegiance: "Loyalist",
    status: "Missing, believed lost in the Webway", homeworld: "Chogoris (Mundus Planus)",
    primarchBio: "The Great Khan grew up among the horse tribes of Chogoris and became their warlord. He was a proud, independent master of fast warfare who valued freedom over politics. He vanished into the Webway pursuing Dark Eldar long after the Heresy.",
    legionBio: "Lightning-fast raiders who favour bikes, speeders and jump packs. Each warrior ritually scars his face. The white armour with its red lightning-bolt stripe is iconic.",
    schemes: [
      { label: "Chapter colours", pattern: "solid", colours: [L("White", WHITE), T("Red stripe", "#a41e22"), D("Black", BLACK), D("Gold", GOLD)] },
    ],
  },
  {
    num: "VI", name: "Space Wolves", primarch: "Leman Russ", allegiance: "Loyalist",
    status: "Missing, departed on his 'Wild Hunt'", homeworld: "Fenris",
    primarchBio: "Raised among the savage tribes of icy Fenris, Leman Russ became the Emperor's executioner. He was a boisterous, saga-loving warrior king who led the burning of Prospero and later left on a final hunt from which he has not returned.",
    legionBio: "A non-Codex Chapter organised into Great Companies under Wolf Lords, with heavy Norse-style culture. Their unstable gene-seed means true successors are extremely rare (the lost Wolf Brothers and the Primaris Wolfspear). Pelts, talismans and runes cover their armour.",
    schemes: [
      { label: "Chapter colours (modern)", img: "Space_Wolves_Scheme2.jpg", pattern: "solid", colours: [L("Wolf grey-blue", "#5f7d94"), T("Wolf grey-blue", "#5f7d94"), D("Yellow", "#e0b23a"), D("Red", "#a8312a"), D("Fur brown", "#6b5136")] },
      { label: "Horus Heresy Legion", img: "SW_Legionary_Mk_II.jpg", pattern: "solid", colours: [L("Storm grey", "#6e7378"), T("Dark grey", "#45494d"), D("Bone", BONE), D("Red", "#a8312a")] },
    ],
  },
  {
    num: "VII", name: "Imperial Fists", primarch: "Rogal Dorn", allegiance: "Loyalist",
    status: "Presumed dead (only his hand was recovered)", homeworld: "Inwit / Terra",
    primarchBio: "The stoic Praetorian of Terra, Rogal Dorn turned the Imperial Palace into a fortress and held it against Horus. Unbending and honest to a fault, he fell during a crusade against the Black Legion.",
    legionBio: "Defenders and siege-breakers, famed for stubborn last stands and fortifications. Their bright yellow armour is one of the most recognisable in the galaxy, and they have produced many proud successors.",
    schemes: [
      { label: "Chapter colours", pattern: "solid", colours: [L("Yellow", "#f2c200"), T("Yellow", "#f2c200"), D("Red fist", "#b5221d"), D("Black", BLACK), D("White", WHITE)] },
    ],
  },
  {
    num: "VIII", name: "Night Lords", primarch: "Konrad Curze", allegiance: "Traitor",
    status: "Dead (executed by the assassin M'Shen, as he foresaw)", homeworld: "Nostramo (destroyed)",
    primarchBio: "Konrad Curze, the Night Haunter, grew up in the lightless crime-ridden city of Nostramo Quintus and ruled it through terror. He was tormented by visions and believed fear was the only true law. He welcomed the assassin he knew would kill him.",
    legionBio: "Terror troops who flay, broadcast screams over the vox and strike from the dark. Midnight-blue armour with lightning bolts, bat-wing helms and grim trophies.",
    schemes: [
      { label: "Legion colours", pattern: "solid", colours: [L("Midnight blue", "#1b2445"), T("Brass", BRASS), D("Bone", BONE), D("Blood red", "#8f1d1d")] },
    ],
  },
  {
    num: "IX", name: "Blood Angels", primarch: "Sanguinius", allegiance: "Loyalist",
    status: "Slain by Horus aboard the Vengeful Spirit", homeworld: "Baal",
    primarchBio: "The Great Angel, a winged primarch of radiant nobility, loved by all his brothers. He died confronting Horus on the Warmaster's flagship. His death echoes through his gene-line as the Red Thirst and the Black Rage.",
    legionBio: "Noble, artistic warriors who fight an inner hunger for blood. Their crimson armour is offset by the gold of the Sanguinary Guard and the black of the doomed Death Company.",
    schemes: [
      { label: "Chapter colours", img: "BA_Intercessor.png", pattern: "solid", colours: [L("Crimson", "#a3151c"), T("Crimson", "#a3151c"), D("Gold", GOLD), D("Black", BLACK), D("Bone", BONE)] },
      { label: "Death Company", img: "Death_Company_Colour_Scheme.jpg", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Red saltire", "#a3151c"), D("Bone", BONE)] },
      { label: "Sanguinary Guard", img: "Brother_Donotriel.png", pattern: "solid", colours: [L("Gold", GOLD), T("Gold", GOLD), D("Red", "#a3151c"), D("Black", BLACK)] },
    ],
  },
  {
    num: "X", name: "Iron Hands", primarch: "Ferrus Manus", allegiance: "Loyalist",
    status: "Slain by Fulgrim at Isstvan V", homeworld: "Medusa",
    primarchBio: "Ferrus Manus fought a silver-skinned wyrm on Medusa and was left with hands of living metal. He was blunt and proud, and led the assault at Isstvan V, where his former friend Fulgrim beheaded him.",
    legionBio: "Grief made the Iron Hands loathe the weakness of flesh, so they replace it with bionics. They are governed by clan councils rather than a single master. Black armour, bare steel and machine parts.",
    schemes: [
      { label: "Chapter colours", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Steel", SILVER), D("White markings", WHITE), D("Red lenses", RED)] },
    ],
  },

  {
    num: "XII", name: "World Eaters", primarch: "Angron", allegiance: "Traitor",
    status: "Daemon Primarch of Khorne", homeworld: "Nuceria",
    primarchBio: "Angron was a gladiator-slave with the Butcher's Nails, a brutal neural implant, hammered into his brain. The Emperor took him from his doomed rebellion and he never forgave it. Rage-driven and in agony, he ascended as a daemon of the Blood God.",
    legionBio: "Formerly the War Hounds, the XII Legion copied their primarch's implants and descended into berserk slaughter for Khorne. Their white and blue livery became blood red and brass.",
    schemes: [
      { label: "Heresy era", img: "OlvarrWorldEaters.jpg", pattern: "solid", colours: [L("White", "#e6e2d6"), T("Blue", "#2f5597"), D("Brass", BRASS), D("Black", BLACK)] },
      { label: "Khorne (modern)", img: "VastyxKhadeWorldEaters.jpg", pattern: "solid", colours: [L("Blood red", "#8e1b17"), T("Brass", BRASS), D("Black", BLACK), D("Bone", BONE)] },
    ],
  },
  {
    num: "XIII", name: "Ultramarines", primarch: "Roboute Guilliman", allegiance: "Loyalist",
    status: "Resurrected; Lord Commander of the Imperium", homeworld: "Macragge (Ultramar)",
    primarchBio: "A statesman and logistician as much as a warrior, Guilliman built Ultramar into a model empire and wrote the Codex Astartes. Mortally wounded by Fulgrim, he lay in stasis for millennia until he was revived to lead the Imperium again.",
    legionBio: "The largest Legion and the template for most Chapters. They are disciplined and adaptable, and more than half of all Space Marine Chapters descend from their gene-seed.",
    schemes: [
      { label: "Chapter colours", pattern: "solid", colours: [L("Ultramarine blue", "#1d3f8f"), T("Gold", GOLD), D("White", WHITE), D("Red", RED)] },
    ],
  },
  {
    num: "XIV", name: "Death Guard", primarch: "Mortarion", allegiance: "Traitor",
    status: "Daemon Prince of Nurgle", homeworld: "Barbarus",
    primarchBio: "Mortarion grew up on poison-fogged Barbarus under a tyrant warlord and led its people in revolt. He prized endurance above all, and in a warp-stranded plague fleet he gave himself and his Legion to Nurgle.",
    legionBio: "Relentless, unstoppable infantry who march through any punishment. As Plague Marines they now carry rot and disease. Their bone-white armour became sickly green, rusted and brass-studded.",
    schemes: [
      { label: "Heresy era", img: "DG_Legionary_Mk_II_Mod.jpg", pattern: "solid", colours: [L("Bone white", "#d9d2bb"), T("Dark green", "#48603f"), D("Brass", BRASS), D("Black", BLACK)] },
      { label: "Nurgle (modern)", img: "DeathGuardColourScheme2.png", pattern: "solid", colours: [L("Plague green", "#76804f"), T("Brass", "#8f7434"), D("Rust", "#7a3f22"), D("Bone", BONE)] },
    ],
  },
  {
    num: "XV", name: "Thousand Sons", primarch: "Magnus the Red", allegiance: "Traitor",
    status: "Daemon Prince of Tzeentch", homeworld: "Prospero (destroyed)",
    primarchBio: "A one-eyed giant of sorcerous genius, Magnus believed psychic knowledge could be mastered safely. His desperate warning to the Emperor shattered the Palace's wards. Russ was sent to burn Prospero, which drove Magnus into Tzeentch's arms.",
    legionBio: "Scholar-sorcerers whose mutations were 'cured' by the Rubric of Ahriman, which turned most of the Legion into dust-filled automata. Their old crimson changed to Tzeentchian blue and gold.",
    schemes: [
      { label: "Heresy era", img: "TS_Legionary_Mark_II.jpg", pattern: "solid", colours: [L("Crimson", "#a51e22"), T("Ivory", "#e6dcc0"), D("Gold", GOLD), D("Black", BLACK)] },
      { label: "Tzeentch (modern)", img: "Tizcan_Host_Heretic_Astartes.png", pattern: "solid", colours: [L("Sorcerous blue", "#1f4fa0"), T("Gold", GOLD), D("Black", BLACK), D("Bone", BONE)] },
    ],
  },
  {
    num: "XVI", name: "Sons of Horus / Black Legion", primarch: "Horus Lupercal", allegiance: "Traitor",
    status: "Slain by the Emperor at the Siege of Terra", homeworld: "Cthonia",
    primarchBio: "The Emperor's favoured son and first Warmaster, Horus led the Great Crusade. He was corrupted by Chaos after a near-fatal wound on Davin, and his rebellion split the Imperium in the Horus Heresy.",
    legionBio: "Begun as the Luna Wolves, renamed the Sons of Horus, and after their master's death rebuilt by Abaddon as the Black Legion. They are the spearhead of the Black Crusades. Three famous schemes in one lineage.",
    schemes: [
      { label: "Luna Wolves", img: "Luna_Wolf_Legionary_Mk_II.jpg", pattern: "solid", colours: [L("White", WHITE), T("White", WHITE), D("Black", BLACK), D("Gold", GOLD)] },
      { label: "Sons of Horus", img: "Pre-Heresy_SoH_2_Mk_V.jpg", pattern: "solid", colours: [L("Sea green", "#3f8a7a"), T("Black", BLACK), D("Bronze", "#9a6e34"), D("Red eye", RED)] },
      { label: "Black Legion", img: "BlackLegionNarghast.jpg", pattern: "solid", colours: [L("Black", BLACK), T("Gold", GOLD), D("Red", RED), D("Brass", BRASS)] },
    ],
  },
  {
    num: "XVII", name: "Word Bearers", primarch: "Lorgar Aurelian", allegiance: "Traitor",
    status: "Daemon Prince", homeworld: "Colchis",
    primarchBio: "A preacher who worshipped the Emperor as a god, Lorgar was publicly shamed at Monarchia for it. He searched for new gods and found Chaos, then quietly built the conspiracy that became the Horus Heresy.",
    legionBio: "Fanatical zealots, the first Legion to turn wholly to the Dark Gods, led by Dark Apostles. Their armour is covered in scripture and sigils. They wore grey before Monarchia, then crimson in mourning and rage.",
    schemes: [
      { label: "Pre-Monarchia", img: "WB_Legionary_Crusade_Armour.jpg", pattern: "solid", colours: [L("Grey", "#8d9095"), T("Gold", GOLD), D("Black", BLACK), D("Parchment", BONE)] },
      { label: "Heresy & Chaos", img: "WB_Legion_Tactical_Legionary.jpg", pattern: "solid", colours: [L("Crimson", "#7c1a20"), T("Black", BLACK), D("Gold", GOLD), D("Parchment", BONE)] },
    ],
  },
  {
    num: "XVIII", name: "Salamanders", primarch: "Vulkan", allegiance: "Loyalist",
    status: "Missing (alive; Vulkan is a 'Perpetual')", homeworld: "Nocturne",
    primarchBio: "A gentle giant and master smith from volcanic Nocturne, Vulkan valued human life above glory. He survived the Dropsite Massacre and many 'deaths', for he cannot truly die.",
    legionBio: "Humane warriors and craftsmen who protect civilians and favour flamers and meltas. Their skin is coal-black and their eyes glow red. Scaled green armour with flame motifs.",
    schemes: [
      { label: "Chapter colours", pattern: "solid", colours: [L("Salamander green", "#2a7a3b"), T("Black", BLACK), D("Flame orange", "#d9541b"), D("Bronze", "#9b7531"), D("Red lenses", RED)] },
    ],
  },
  {
    num: "XIX", name: "Raven Guard", primarch: "Corvus Corax", allegiance: "Loyalist",
    status: "Missing (departed into the Eye of Terror)", homeworld: "Deliverance (Kiavahr)",
    primarchBio: "Corax grew up in a prison moon's mines and led its slaves to freedom. He was a master of stealth and liberation, and was haunted by failing his Legion at Isstvan V and by his flawed attempts to rebuild it.",
    legionBio: "Masters of infiltration, decapitation strikes and hit-and-run war. Black armour with white details, used in contrast like a raven's plumage.",
    schemes: [
      { label: "Chapter colours", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("White", WHITE), D("Dark grey", "#4a4f55"), D("Red lenses", RED)] },
    ],
  },
  {
    num: "XX", name: "Alpha Legion", primarch: "Alpharius Omegon", allegiance: "Traitor",
    status: "Unknown (twin primarchs; at least one reported dead)", homeworld: "Unknown",
    primarchBio: "Twin primarchs sharing one name and identity, the youngest of the Emperor's sons. They were secretive strategists whose true motives for joining Horus remain one of the great mysteries.",
    legionBio: "Spies, saboteurs and cultist-handlers who show the same face to everyone ('I am Alpharius'). Scaled armour in shifting blue-green with silver.",
    schemes: [
      { label: "Legion colours", pattern: "solid", colours: [L("Teal / blue-green", "#1f6f7a"), T("Silver", SILVER), D("Dark blue", "#163a4a"), D("Green lenses", "#4ca85a")] },
    ],
  },
];

/* Successor Chapters across all foundings (progenitor = Legion number). Colours and progenitors per each
   Chapter's Warhammer 40k Fandom wiki page; lore summarised in my own words. */
const CHAPTERS = [
 {
  "name": "Angels of Absolution",
  "legion": "I",
  "founding": "Second Founding",
  "bio": "One of the original Second Founding Unforgiven. Unlike their brothers, they believe the Emperor has already forgiven them, and they don't use the name 'Unforgiven' for themselves.\n\nThat belief causes friction on joint campaigns. Even so, they fight most often beside the Dark Angels themselves.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Red markings",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Defiance",
  "legion": "I",
  "founding": "Ultima Founding",
  "bio": "Built on the Lion's saying 'He who endures, conquers', this Primaris Chapter was raised in the Imperium's darkest hour.\n\nThey became a symbol of hope during the Indomitus Crusade and earned many commendations along the way.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour2"
    },
    {
     "n": "Black aquila",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Doom",
  "legion": "I",
  "founding": "Unknown",
  "bio": "Unforgiven with a savage edge. Their monastic customs take on the barbaric traditions of their homeworld, Meldegod.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Green",
     "h": "#2f6b35",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour2"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Redemption",
  "legion": "I",
  "founding": "Second Founding",
  "bio": "Nothing stops them hunting the Fallen, not even a battle in progress. At Gaitlinghive they pulled out just as the Orks' final assault hit, leaving seven militia brigades to face three million greenskins.\n\nThey were never held to account, because there were no survivors to complain. Since then, many Imperial forces quietly refuse their help.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour2"
    },
    {
     "n": "Red aquila",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Vengeance",
  "legion": "I",
  "founding": "Second Founding",
  "bio": "The least-known of the original Unforgiven, because they shun fame entirely and focus only on their duty. A grim, dour Chapter.\n\nEvery company wears jet black in tribute to the original Dark Angels Legion that left Terra on the Great Crusade. They have a habit of fighting battles nobody else would expect to win.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Bone aquila",
     "h": "#d9cca6",
     "r": "detail"
    },
    {
     "n": "Red",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Vigilance",
  "legion": "I",
  "founding": "Disputed (40th Millennium)",
  "bio": "They have stood silent watch over the Eye of Terror for almost ten thousand years. They are believed to come from the Second Founding, and their monastic devotion suggests Dark Angels blood, though no record confirms it.\n\nTheir fortress-monastery is a huge orbital dock rather than a world.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blades of Vengeance",
  "legion": "I",
  "founding": "Ultima Founding",
  "bio": "The first Primaris Chapter created from Lion El'Jonson's gene-seed. They pair the Lion's stubborn defence with sharp, well-timed counter-attacks.\n\nThey threw their full strength into Guilliman's Indomitus Crusade, freeing dozens of worlds and burning others judged beyond saving. To them the crusade is a way to flush the Fallen out into the open.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Red aquila",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Bringers of Judgement",
  "legion": "I",
  "founding": "Unknown (possibly Ultima)",
  "bio": "Zealots even by Unforgiven standards. If they find rebellion on a world, they judge the whole population guilty: weakness in one citizen is weakness in all, and the punishment is death.\n\nTheir long list of atrocities has drawn the Inquisition's attention, but nothing has changed their course.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Consecrators",
  "legion": "I",
  "founding": "Unknown",
  "bio": "No record of them exists before the 40th Millennium. They arrive without warning, win, and vanish without a word.\n\nThey were founded by Supreme Grand Master Valafar to recover and guard the lost history of the First Legion. That's why they carry so many ancient relics, old armour patterns and holy weapons into battle.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Red helm stripe",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Silver aquila",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Cowled Wardens",
  "legion": "I",
  "founding": "Unknown (possibly Ultima)",
  "bio": "They operate from several hollowed-out asteroids in the Sirikoid Belt rather than a single fortress-monastery. Officially they purge the vicious Jehangir xenos of the region.\n\nTheir real mission is hunting what they believe is a large network of Fallen hidden nearby. Captured Fallen are locked away in icy catacombs carved into a nameless asteroid.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Disciples of Caliban",
  "legion": "I",
  "founding": "Unknown (37th Millennium)",
  "bio": "Created in the late 37th Millennium after Dark Angels Supreme Grand Master Anaziel personally pressed the High Lords for a new Chapter. That is almost unheard of, and some suspect he had leverage over at least one High Lord.\n\nThey were raised from the purest gene-seed the Dark Angels held, screened far beyond normal standards. They are fleet-based and strike fast, and other Unforgiven whisper that they exist to hunt Cypher.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Guardians of the Covenant",
  "legion": "I",
  "founding": "Unknown",
  "bio": "Their homeworld is Mortikah VII near the Imperium's western rim, and their fortress-monastery is a huge mountain-top cathedral.\n\nMost of their wars have been fought in the Segmentum Pacificus. They have led several Imperial crusades into the Halo Stars and the Veiled Region.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark silver",
     "h": "#8d9297",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Red markings",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of Abhorrence",
  "legion": "I",
  "founding": "Unknown",
  "bio": "For their first eight centuries they fought only in the Ghoul Stars, against some of the deadliest xenos the Imperium has met.\n\nNow they patrol the outer reaches, hunting aliens and gathering word of the Fallen. They were the first to warn Azrael of strange events near the Somnium Stars after Luther's escape.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Teal",
     "h": "#1f7a7a",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Penitent Blades",
  "legion": "I",
  "founding": "Unknown (possibly Ultima)",
  "bio": "Their homeworld is thousands of small landmasses floating kilometres above acidic oceans. Nobody knows how.\n\nGrowing up there made them aerial combat experts. Their 2nd Company has four oversized squads of gunship pilots, double the usual number for an Unforgiven Chapter.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour2"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Prime Absolvers",
  "legion": "I",
  "founding": "Ultima Founding",
  "bio": "Chapter Master Dagiel Harn learned of the Fallen from Azrael himself. A headstrong warrior, he saw no reason for his brothers to carry the guilt the other Unforgiven feel.\n\nHe set up an Inner Circle and Deathwing- and Ravenwing-style companies, but to him the Fallen are just more traitors. His Chapter hunts all of the Emperor's enemies equally.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Deep red",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Star Phantoms",
  "legion": "I",
  "founding": "23rd Founding (38th Millennium)",
  "bio": "A 23rd 'Sentinel' Founding Chapter, raised to take and hold xenos-contested regions on the Imperium's borders. They often worked alone, far from any support.\n\nThey arrived late in the Badab War and helped storm the Astral Claws' homeworld, earning a reputation for ruthless efficiency.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Light yellow",
     "h": "#efd46a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "The Unnamed",
  "legion": "I",
  "founding": "Ultima Founding",
  "bio": "When Azrael told them the Dark Angels' secret, the guilt of their ancestors hit this Primaris Chapter hard.\n\nThey refused to take a name, thinking themselves unworthy, and refused a homeworld. They will roam the stars until every one of the Fallen is destroyed.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "trim"
    },
    {
     "n": "Black faceplate",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dark Hunters",
  "legion": "V",
  "founding": "Unknown (37th Millennium)",
  "bio": "From the Night World of Phobian, raised during the Occlusiad War of the 37th Millennium to fight a rogue sect of Tech-priests.\n\nThey're known as especially tough. In the Dellrond Campaign a single company held a cathedral's entrance against an Ork Waaagh! for five years.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Navy blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Navy blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Destroyers",
  "legion": "V",
  "founding": "Second Founding",
  "bio": "A rare Second Founding son of the White Scars. They share the Khan's battle-lust and lightning warfare.\n\nTheir victories are many, but questions hang over the stability of their gene-seed and the savagery they show in battle.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Sunburst yellow",
     "h": "#f0b81c",
     "r": "trim"
    },
    {
     "n": "Sunburst yellow",
     "h": "#f0b81c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Griffon Lords",
  "legion": "V",
  "founding": "Unknown",
  "bio": "A rare case where a Chapter disagrees with its own records. The Administratum lists them as White Scars descendants, but they insist they are sons of Roboute Guilliman.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Tan",
     "h": "#b99a6b",
     "r": "armour"
    },
    {
     "n": "Tan",
     "h": "#b99a6b",
     "r": "trim"
    },
    {
     "n": "Cerulean blue",
     "h": "#2f6fb8",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Talons",
  "legion": "V",
  "founding": "Unknown",
  "bio": "Sons of the Khan who belong to the Astartes Praeses, twenty Chapters created to guard the regions around the Eye of Terror against Chaos.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Silver arms",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Mantis Warriors",
  "legion": "V",
  "founding": "Unknown (mid-34th Millennium)",
  "bio": "Raised, records suggest, in the mid-34th Millennium to help the White Scars watch the Maelstrom. They joined the Astral Claws, Charnel Guard and Lamenters as the Maelstrom Warders, guarding the Endymion Cluster.\n\nWhen the Astral Claws rebelled in the Badab War, the Mantis Warriors sided with them. They were pardoned afterwards, but many still regard them as traitors.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Shining green",
     "h": "#3f8f3a",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Marauders",
  "legion": "V",
  "founding": "Second Founding",
  "bio": "Parent Chapter of the Mantis Warriors. They are isolationists who fight alongside others readily enough but share only what they must.\n\nThey are known as fine marksmen. They lay ambushes, smash the enemy with massed fire, then sweep in to finish the survivors.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Rampagers",
  "legion": "V",
  "founding": "Second Founding",
  "bio": "Like the White Scars, they cut ritual scars into their faces to mark rank and deeds, in a long ceremony called 'the Blooding'. The blood drawn is mixed into the drinks at the feast that follows.\n\nThey like to claim conquered feral worlds as new recruiting grounds, as long as the people pass tests for corruption.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Solar Hawks",
  "legion": "V",
  "founding": "Unknown (c. 35th Millennium)",
  "bio": "A rare White Scars successor dating back at least to the 35th Millennium. They are aggressive and noble, and honour their forebears by painting a shoulder or gauntlet white.\n\nAs the name suggests, they field unusually large numbers of gunships, sending whole wings of Stormtalons and Stormravens into battle.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Sunburst yellow",
     "h": "#f0b81c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "White left arm",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Jaghatai",
  "legion": "V",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter whose name points to the Khan's bloodline, though no official record confirms it. Their heraldry carries a crescent moon.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark purple",
     "h": "#3f1f52",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Lords",
  "legion": "V",
  "founding": "Second Founding",
  "bio": "A rare Second Founding son of the Khan with a fierce rivalry against the White Scars themselves. They often take reckless risks to win more glory than their forebears.\n\nThey share the Khan's battle-lust and fast, aggressive style of war.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Red",
     "h": "#a41e22",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour2"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Reapers",
  "legion": "V",
  "founding": "Ultima Founding",
  "bio": "The first Primaris Chapter made from Jaghatai Khan's gene-seed, and among the most battle-hungry warriors in the Imperium. They are wise and noble, but on the attack they fight with the Khan's own fire.\n\nThey made the savage feral world of Jagun their home, and were commended for spearheading the Absolutis Crusade.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Wolfspear",
  "legion": "VI",
  "founding": "Ultima Founding",
  "bio": "Like the Space Wolves, they ignore the Codex and use Fenrisian ranks and customs.\n\nThey hunt in packs. Stealthy killers take out the enemy vanguard, fast vehicles encircle cities, and their Rune Priests and Iron Priests flood enemy vox-nets with howling terror.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dull grey",
     "h": "#8a8f93",
     "r": "armour"
    },
    {
     "n": "Dull grey",
     "h": "#8a8f93",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Astral Knights",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "In 926.M41 they gave almost the entire Chapter to destroy the World Engine, a planet-sized Necron weapon able to scour worlds clean of life.\n\nThey were struck from the rolls soon after. The Sable Swords were created to replace them and took over their abandoned fortress-monastery.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver-white",
     "h": "#d7dadc",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Templars",
  "legion": "VII",
  "founding": "Second Founding",
  "bio": "Their origin goes back to the Imperial Fists' defence of Terra. Since the Heresy they have waged the longest crusade in Imperial history to prove their loyalty.\n\nThey ignore the Codex, are organised into crusades rather than companies, and, unusually for Space Marines, worship the Emperor as a god.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White tabard",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Red",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Brazen Annihilators",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "Even among Dorn's sons they lean heavily on artillery. By the time their infantry charge in, the enemy positions are usually smoking craters.\n\nTheir bombardments, from orbit or from the ground, have been legendary among the Space Marines for thousands of years.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark copper",
     "h": "#9a5a34",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Celestial Lions",
  "legion": "VII",
  "founding": "Unknown (suspected 23rd)",
  "bio": "Possibly raised in the 23rd Founding, they later became one of the three 'Sentinels of the Veil' guarding Elara's Veil, alongside the Emperor's Spears and the now-extinct Star Scorpions.\n\nAt Armageddon they were almost wiped out after the Inquisition steered them into hopeless fights, a loss that still angers many in the Imperium.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "armour"
    },
    {
     "n": "Azure",
     "h": "#2a5fb0",
     "r": "trim"
    },
    {
     "n": "Azure helm",
     "h": "#2a5fb0",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Fists",
  "legion": "VII",
  "founding": "Second Founding",
  "bio": "Almost wiped out in 989.M41 when Waaagh! Snagrod hit Rynn's World and a misfired missile destroyed their fortress-monastery.\n\nThey fought on regardless and are now legendary for their stoicism. Under Pedro Kantor they have slowly rebuilt, and the survivors are counted among the finest warriors in the Imperium.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Deep blue",
     "h": "#1f3270",
     "r": "armour"
    },
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Crimson hand",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Death Strike",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter of Dorn's line from the world of Nihilas. They are one of several Imperial Fists successors that compete in the Feast of Blades.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Warbringers",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "A Codex-compliant son of Dorn with a reputation for especially brutal fighting. Unusually, they use camouflage on both armour and vehicles.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Drab olive green",
     "h": "#5a6440",
     "r": "armour"
    },
    {
     "n": "Drab olive green",
     "h": "#5a6440",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Excoriators",
  "legion": "VII",
  "founding": "Second Founding",
  "bio": "Raised in the Second Founding to honour a group of Imperial Fists who held part of the Palace during the Siege of Terra. They are also counted among the Astartes Praeses guarding the Eye of Terror.\n\nThey see pain as a teacher. Every dent and scar on their armour is kept as a lesson.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Dark red",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Executioners",
  "legion": "VII",
  "founding": "3rd Founding",
  "bio": "A 3rd Founding son of Dorn that ended up on the rebel side of the Badab War, largely through no fault of its own. They fought honourably throughout.\n\nThe High Lords let them continue after a long penitent crusade. They are infamous for taking the heads of fallen enemies.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Steel blue",
     "h": "#5d7085",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Exorcists",
  "legion": "VII",
  "founding": "13th 'Dark' Founding",
  "bio": "Raised in the secretive 13th 'Dark' Founding as an Inquisition experiment. Their creation is sealed by the Ordo Malleus, though most believe they carry Dorn's gene-seed.\n\nEvery recruit is deliberately possessed by a daemon, which is then cast out. The ordeal leaves them deeply resistant to the warp and expert daemon hunters.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Dark purple",
     "h": "#3f1f52",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Fire Lords",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "They go to war carrying flamers, opening with incendiary missiles and charging in before the fires have died down.\n\nTheir homeworld is the volcanic Mundus Pyra on the Eastern Fringe. Their flame rituals remind many of the Salamanders, and their true lineage has never been confirmed.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Hammers of Dorn",
  "legion": "VII",
  "founding": "Unknown (41st Millennium)",
  "bio": "Strict followers of the Codex, which has made them fierce rivals of the Ultramarines and their successors.\n\nThey are a young Chapter, probably from the early 41st Millennium, but have already fought hundreds of campaigns, including the Achilus Crusade against the Word Bearers.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Brass",
     "h": "#a8823a",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Honoured Sons",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "Almost nothing is recorded of them except their homeworld, Jonol, on the Eastern Fringe.\n\nThey believe they are sons of Rogal Dorn. Nothing disproves it, but the Imperial Fists have never officially recognised them.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Hospitallers",
  "legion": "VII",
  "founding": "24th Founding",
  "bio": "A young, fleet-based son of Dorn that rejects the Codex and, unusually, worships the Emperor as a god, working closely with the Ecclesiarchy.\n\nThey have held a grudge against the Iron Hands ever since a clash over the Knight World of Fabris Callivant.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Silver helm",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Red lenses",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Invaders",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "They embody Dorn's most stubborn streak and refuse to accept defeat. They throw themselves into battle without hesitation and often win against the odds, usually at a heavy cost.\n\nThey are specialists in planetary subjugation campaigns.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Green",
     "h": "#2f7a3b",
     "r": "armour"
    },
    {
     "n": "Green",
     "h": "#2f7a3b",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Knights",
  "legion": "VII",
  "founding": "Unknown (32nd Millennium)",
  "bio": "A crusading Imperial Fists successor from Brycantia, founded in the 32nd Millennium. Part of the Chapter once betrayed them and became the Chaos warband the Iron Brethren.\n\nThey are the only Chapter to win the Feast of Blades, the Imperial Fists successors' centennial tournament, twice in a row.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue gunmetal",
     "h": "#5f6f80",
     "r": "armour"
    },
    {
     "n": "Blue gunmetal",
     "h": "#5f6f80",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of Dorn",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "Codex-compliant knights in halved dark brown and bone.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Dark brown",
     "h": "#4a3424",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Red Templars",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "Red-armoured Imperial Fists successors who often field assault bikes.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Shadow Wolves",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "A zealous Chapter, possibly of Dorn's line, that served for thousands of years until a Tyranid splinter fleet overran their homeworld of Varadon in 987.M41.\n\nThey are officially extinct, yet a Shadow Wolves strike force was seen fighting on Cadia during the 13th Black Crusade.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Dark purple",
     "h": "#3f1f52",
     "r": "trim"
    },
    {
     "n": "Dark purple",
     "h": "#3f1f52",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Skull Bearers",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "They believe they descend from the Executioners, but that has never been proven.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Dorn",
  "legion": "VII",
  "founding": "Unknown (34th Millennium)",
  "bio": "A Codex-compliant Imperial Fists successor from the feudal world of Archea, raised in the 34th Millennium.\n\nIn 999.M41, while most of the Chapter was fighting the 13th Black Crusade, a Tyranid splinter fleet ravaged their homeworld.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of the Phoenix",
  "legion": "VII",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Chapter of Dorn's line, ritualistic and devout, that prides itself on plunging into the flames of battle.\n\nThey are always on crusade, led by their Chaplains. Their crusades are so spectacular that crowds of Ecclesiarchy priests follow in their wake.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Off-white",
     "h": "#e6e2d6",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Soul Drinkers",
  "legion": "VII",
  "founding": "Second Founding",
  "bio": "Declared renegades for mutation and suspected Chaos taint, yet they always saw themselves as loyal to the Emperor, if not to His Imperium.\n\nThey believed they were sons of Dorn, until the Angels Sanguine studied their gene-seed and found its true origin was unknown. Their story is told in a full Black Library novel series.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#4d2a6b",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Subjugators",
  "legion": "VII",
  "founding": "23rd or 24th Founding",
  "bio": "One of the Astartes Praeses guarding the Eye of Terror, from the world of Xenax. Almost as zealous as the Black Templars.\n\nThey are infamous for brutal, unsubtle methods. More than once they have 'liberated' an Imperial world at the cost of most of the people living on it.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Medium green",
     "h": "#3f8a3a",
     "r": "armour"
    },
    {
     "n": "Medium green",
     "h": "#3f8a3a",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "White Templars",
  "legion": "VII",
  "founding": "Unknown",
  "bio": "Stoic, relentless warriors from the world of Sanctum. They were long thought to be sons of Dorn, until Administratum gene-testing cast serious doubt on it.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Absolvers",
  "legion": "IX",
  "founding": "Unknown (34th Millennium)",
  "bio": "Dour, enigmatic Blood Angels successors from the 34th Millennium who follow the Codex almost dogmatically.\n\nThe Great Rift trapped them in the Gilead System of the Imperium Nihilus. They have greatly stepped up recruitment to keep defending its people.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Encarmine",
  "legion": "IX",
  "founding": "Second Founding",
  "bio": "The most aloof of the Sanguinary Brotherhood, with a contempt for weakness that outdoes even the Blood Angels.\n\nBlood Angels archivists call them the most active Chapter in existence. Their restless former Chapter Master, Zargo, could never stop leading them from one campaign to the next.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Yellow aquila",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Penitent",
  "legion": "IX",
  "founding": "9th Founding",
  "bio": "As the Angels Resplendent, they were artisans in red and gold who made nobility their creed. Alone among Sanguinius's heirs, not one of them had ever fallen to the Black Rage.\n\nThat changed with the arrival of the mysterious 'Undying Martyr'. The Chapter took a new name and switched to black armour streaked with thorny vines.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Umber",
     "h": "#6b4a2e",
     "r": "detail"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Sanguine",
  "legion": "IX",
  "founding": "Second Founding",
  "bio": "A Second Founding Chapter with a glorious record against the horrors of the Eye of Terror, held up across the Imperium as the finest example of Sanguinius's bloodline.\n\nThey hide their faces behind masks. Rumour says it's because they look so much like their Primarch.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour2"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Vermillion",
  "legion": "IX",
  "founding": "Second Founding",
  "bio": "The only Blood Angels successor that cuts itself off from the others, bearing its curse alone. Little is recorded of them, but every mention shows an exemplary battle record.\n\nSome on the Blood Angels council want closer ties. Dante has always refused, for reasons he keeps to himself.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark red",
     "h": "#8c1a17",
     "r": "armour"
    },
    {
     "n": "Dark red",
     "h": "#8c1a17",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Atlantian Spears",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "For thousands of years they have pacified the Enclave of Alkina and the Sanctuary of Konstantyah in the Segmentum Tempestus. An unusual number of their Librarians have the gift of foresight.\n\nWhen Dante called for help against the Tyranids at Baal, they heard the call and did nothing, which has left them isolated from the Sanguinary Brotherhood.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Teal blue",
     "h": "#1f6f86",
     "r": "armour"
    },
    {
     "n": "Golden yellow",
     "h": "#e0b52a",
     "r": "trim"
    },
    {
     "n": "Golden yellow",
     "h": "#e0b52a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Dragons",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "Many Imperial worlds fear their arrival rather than celebrate it. The Blood Dragons care little for civilians and want only the total extermination of the Emperor's enemies, trusting Him to sort the innocent from the guilty.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark red",
     "h": "#7a1015",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Drinkers",
  "legion": "IX",
  "founding": "Second Founding",
  "bio": "Their grim name comes from a mutated gene-seed organ that gives them a craving for blood. Despite it, they are counted among the most honourable Chapters in the Imperium.\n\nTheir close allies include other Chapters above reproach, such as the Crimson Fists, Novamarines and Howling Griffons.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Carnelian red",
     "h": "#951a20",
     "r": "armour"
    },
    {
     "n": "Golden yellow",
     "h": "#e0b52a",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Scythes",
  "legion": "IX",
  "founding": "Ultima Founding",
  "bio": "A Primaris Chapter whose first wars were in the Red Scar after the Devastation of Baal.\n\nThey took to the Blood Angels' traditions quickly and uphold Sanguinius's codes with the zeal of new converts.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Swords",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "A Codex-compliant Blood Angels successor. For a time their Chapter Master, Daggan, was a venerable Dreadnought.\n\nThey patrol the space around the Eye of Terror in a joint containment fleet with the Star Dragons, and fought aboard the space hulk Accursed Eternity.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "White left pauldron",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Carmine Blades",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "For a long time they passed, perhaps by accident, as Ultramarines descendants. A chance meeting with Chaplain Astorath the Grim revealed the truth.\n\nAt last they had names for the strange urges they had hidden for so long: the Red Thirst and the Black Rage.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Carnelian red",
     "h": "#951a20",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Bone helm",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Cruor Blades",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "Consumed by guilt for failing to reach Baal before the Tyranids besieged it. They are now on a self-imposed penitent crusade.\n\nThey sweep the Red Scar of Tyranids and push into the Imperium Nihilus, spreading word of Dante's appointment as its regent.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Dark red",
     "h": "#7a1015",
     "r": "trim"
    },
    {
     "n": "Dark red helm & arms",
     "h": "#7a1015",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Flesh Eaters",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "Savage and warlike. There is no evidence they actually eat flesh, though the rumours have lasted for thousands of years and the Chapter simply ignores them.\n\nThey were already active by the end of the 33rd Millennium, when they joined the Pentarchy of Blood.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bright red",
     "h": "#b81d1d",
     "r": "armour"
    },
    {
     "n": "Bright red",
     "h": "#b81d1d",
     "r": "trim"
    },
    {
     "n": "White stripe",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Flesh Tearers",
  "legion": "IX",
  "founding": "Second Founding",
  "bio": "The smallest of the Second Founding Blood Angels successors, once down to just four companies. They suffer the gene-seed flaws worse than most, which makes them savage, bad-tempered fighters.\n\nTheir brutality has brought Inquisition charges of heresy, though they are currently cleared. They are led by the grim Gabriel Seth.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Maroon",
     "h": "#6e1016",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black helm & pack",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of Blood",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "Declared renegades after the destruction they caused to friend and foe alike, though they still saw themselves as loyal to the Emperor.\n\nThey returned for the Battle of Baal and were slaughtered to the last man defending Baal Prime beside the Flesh Tearers.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Dark red",
     "h": "#7a1015",
     "r": "trim"
    },
    {
     "n": "Dark red helm",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Lamenters",
  "legion": "IX",
  "founding": "21st 'Cursed' Founding",
  "bio": "A Cursed Founding Chapter that seems doomed: their victories always turn to ashes. They may have found a cure for the Black Rage and Red Thirst, a secret that could die with them.\n\nThey were dragged onto the rebel side of the Badab War, then nearly wiped out by Tyranids during their penance.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e6b51c",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e6b51c",
     "r": "trim"
    },
    {
     "n": "Red helm stripe",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sable Knights",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "Determined to make the most of their time before the Black Rage takes them. They are fleet-based and race from war to war.\n\nThey favour armoured spearheads and massed transports to hit the enemy as quickly and hard as possible.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Dark red arms & helm",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Sanguinius",
  "legion": "IX",
  "founding": "Second Founding",
  "bio": "A dark, brooding Second Founding Chapter that still grieves for its slain Primarch.\n\nThey are brutal and zealous, and often show a disturbing disregard for the lives of Imperial civilians.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Terracotta red",
     "h": "#a8442c",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "The Remnants",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "A Blood Angels successor in quartered purple and gold.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Brazen Claws",
  "legion": "X",
  "founding": "Second Founding",
  "bio": "Stoic and relentless sons of Ferrus Manus. Daemons tore their homeworld apart long ago, and they have been fleet-based ever since.\n\nThey recently returned from a reckless twenty-year Crusade of Vengeance inside the Eye of Terror.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Pelagic blue",
     "h": "#1f4f9e",
     "r": "armour"
    },
    {
     "n": "Clotted red",
     "h": "#8c1a17",
     "r": "armour2"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Fists",
  "legion": "X",
  "founding": "Unknown",
  "bio": "They cross their homeworld in Land-Behemoths, huge mobile fortresses, just as their Iron Hands forebears do. They revere Ferrus Manus and keep many Iron Hands traditions.\n\nSome older sources listed them as Imperial Fists successors, but their Iron Hands lineage is now confirmed.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Light blue-grey",
     "h": "#8fa3b3",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Gold arms",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Lords",
  "legion": "X",
  "founding": "23rd Founding",
  "bio": "Stern xenos-haters from the 23rd Founding. Since the 38th Millennium they have held the blockade of the Grendl Stars, keeping the alien Barghesi penned in.\n\nThey have also fought Tyranids and the T'au, and lately the swarms of Hive Fleet Kraken have pushed them hard.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Red legs",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of Byzantium",
  "legion": "X",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris son of Ferrus Manus that brings as much firepower as possible to every fight.\n\nLike the Iron Hands, they field many Dreadnoughts and revere them deeply.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Bronze",
     "h": "#9a6e34",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Talons",
  "legion": "X",
  "founding": "Second Founding",
  "bio": "Formed from the Iron Hands' Morragul Clan, made up of outcasts and the most unstable warriors of the Legion, under the bloody-handed Iron Lord Autek Mor.\n\nSince the Great Scouring they have been known for bold warfare and an endless vendetta against the Traitor Legions. The High Lords have sent them to hunt down traitors many times.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Arterial red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Arterial red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Medusa",
  "legion": "X",
  "founding": "Moirae Schism (ratified M37)",
  "bio": "Ratified as a Chapter in 011.M37, made up of Iron Hands who lost the Moirae Schism. They are ruthlessly efficient and look with disgust on anyone lacking their strength of will.\n\nTheir long record of battle honours includes loyal service in the Badab War.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Emerald green",
     "h": "#2f7a46",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "White helm",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Star Dragons",
  "legion": "X",
  "founding": "Unknown",
  "bio": "From the world of Draconith. They inlay their ritual scars with circuitry that makes them glow like trapped stars.\n\nThey may be sons of Ferrus Manus, but they show little of the Iron Hands' cold logic and fight on furious passion instead.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Steel Confessors",
  "legion": "X",
  "founding": "Unknown",
  "bio": "Possibly founded in secret in the 36th Millennium by the Adeptus Mechanicus for its own use, from Iron Hands gene-seed.\n\nWhen the Inquisition found out, the Chapter was forced into ordinary service. It is often called the 'crippled' Steel Confessors after heavy losses.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "trim"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Fury",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "An Ultramarines successor trained from its founding by the Novamarines.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red shoulders",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Revenant",
  "legion": "XIII",
  "founding": "8th Founding",
  "bio": "An 8th Founding Chapter raised in 598.M35, during the dark years of the Nova Terra Interregnum.\n\nIn 991.M41 the Necron Maynarkh Dynasty fell on their homeworld in the Orpheus Sector. Only a few hundred survived.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Cobalt blue",
     "h": "#1f3a8a",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Pale white shoulders",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Aurora Chapter",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "Their forge homeworld, Firestorm, rivals a Forge World, so they never lack vehicles or ammunition. Their name is a byword for armoured assault across the Ultima Segmentum.\n\nNearly destroyed in the 13th Black Crusade, they are rebuilding, still fielding relic vehicles that date back to the Second Founding.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "armour"
    },
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Avenging Sons",
  "legion": "XIII",
  "founding": "19th Founding",
  "bio": "A 19th Founding Chapter from the mid-36th Millennium, and one of the nine Shield Chapters Guilliman picked to defend and expand Ultramar.\n\nThey keep the Ultramarines' martial traditions and have a stoic faith in the Codex.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Azure",
     "h": "#2a6fc0",
     "r": "armour"
    },
    {
     "n": "Azure",
     "h": "#2a6fc0",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Consuls",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "The least compromising of the Ultramarines' Primogenitors, allowing no deviation from the Codex. They are also counted among the Astartes Praeses watching the Eye of Terror.\n\nStern and unbending, with a long, rich record of victories.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Brazen Consuls",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "From the rich world of Aventinium. They recruit only from its nobility, who train their sons for the Chapter from birth.\n\nAspirants arrive as expert fencers and marksmen, as at home with strategy and survival as with banquet-hall etiquette.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Brown",
     "h": "#6b4a2e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Castellans of the Rift",
  "legion": "XIII",
  "founding": "Ultima Founding",
  "bio": "Guilliman himself gave them the job of holding the Nachmund Gauntlet, the one stable route through the Great Rift.\n\nThey raid the Fallen Knight World of Dharrovar and fight at both ends of the Gauntlet against renegades, traitors and xenos, at heavy cost.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Pale green",
     "h": "#9cc49a",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dark Sons",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "Pride and arrogance have soured their dealings with other Imperial forces. But the arrogance is earned: they fight with remarkable skill and have won many battles against the odds.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour2"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Doom Eagles",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "From Gathis II, where their fortress-monastery, the Eyrie, sits on the Ghostmountain. They are one of the nine Shield Chapters of Ultramar.\n\nThey favour stealth and speed, and every one of them accepts that he is, in effect, already dead.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Doom Legion",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "They garrison the Faithful's Deliverance, a pre-Heresy star fortress overlooking the Elusian Maze asteroid fields. Few Chapters can match its firepower.\n\nThe wider Imperium has all but forgotten them, but they keep fighting what crawls out of the Maze.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic grey",
     "h": "#7a7f84",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Eagle Warriors",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "Fleet-based, with no homeworld, founded during the chaos of the Great Scouring. They fight an endless crusade to protect the systems Guilliman freed during the Great Crusade.\n\nThe Great Rift has put many of those worlds in danger, and they keep sending strike forces to defend them.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour2"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Spears",
  "legion": "XIII",
  "founding": "25th Founding",
  "bio": "A 25th 'Bastion' Founding Chapter from the feral ocean world of Nemeton. With the Celestial Lions and Star Scorpions, they formed the Sentinels of the Veil, guarding the twenty worlds of Elara's Veil.\n\nThey are a wild, saga-loving Chapter.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Sky blue",
     "h": "#6aa8d8",
     "r": "armour"
    },
    {
     "n": "Sky blue",
     "h": "#6aa8d8",
     "r": "trim"
    },
    {
     "n": "White helm",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Fire Angels",
  "legion": "XIII",
  "founding": "25th Founding",
  "bio": "A 25th Founding Chapter from Lorin Alpha, best known for its part in the Badab War. They are not the first Chapter to carry the name.\n\nThey have no special ties to the other Ultramarines successors and prefer to forge their own path.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Fire Hawks",
  "legion": "XIII",
  "founding": "21st 'Cursed' Founding",
  "bio": "A Cursed Founding Chapter that claims Ultramarines descent. Defects in its archived gene-seed say otherwise, and Guilliman's sons have never acknowledged them.\n\nThey are one of the few Chapters to have been lost entirely, swallowed by the warp, and rumour links them to the ghostly Legion of the Damned.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Faded orange",
     "h": "#d27a2c",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Yellow flames",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Fulminators",
  "legion": "XIII",
  "founding": "Ultima Founding",
  "bio": "Among the very first Primaris Space Marines. Their aspirants were chosen at the end of the Great Scouring and slept in stasis beneath Mars for nearly 8,000 years.\n\nThey were finally awakened for the Ultima Founding and raised as a Chapter of Guilliman's line.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Genesis Chapter",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "The first of the Ultramarines' Primogenitors to be raised, hence the name. They are fiercely loyal and will always fight at the Ultramarines' side.\n\nTheir homeworld, Newfound, lies just north-west of Ultramar.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Heralds of Ultramar",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "Almost identical in look to the Ultramarines, their likely progenitors.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Howling Griffons",
  "legion": "XIII",
  "founding": "Unknown (33rd Millennium)",
  "bio": "A Chapter raised in the 33rd Millennium that fought in the Badab War and defended Amistel Majoris against Plague Marines in the 13th Black Crusade.\n\nThey take their oaths extremely seriously. Each one binds the warrior until the deed is done or he dies trying, and more oaths are added before every battle.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour2"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperius Reavers",
  "legion": "XIII",
  "founding": "4th Founding",
  "bio": "Guardians of the hive world Praedis Zeta, at the far edge of Ultramar, under constant threat from xenos and daemons.\n\nThey are expert xenos hunters. Their 2nd Company, 'The Stormbringers', are veterans of the First Tyrannic War and specialise in rooting out Genestealer cults.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Iron Hawks",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "Their gene-seed is pure and complete, but they are rebuilding after a long, punishing campaign.\n\nStrict followers of the Codex, they are known for brutal high-speed Thunderhawk assaults. They revere Guilliman above all but the Emperor and despise anyone who turns from him.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic dark grey",
     "h": "#5a5f64",
     "r": "armour"
    },
    {
     "n": "Metallic dark grey",
     "h": "#5a5f64",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "White faceplate",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Hounds",
  "legion": "XIII",
  "founding": "Unknown (4th Founding suspected)",
  "bio": "Relentless hunters from the world of Orinus who chase their enemies until the last one is dead. They trace their history to the 4th Founding.\n\nLoyal allies of Ultramar who fought at Damnos and in the Plague Wars. They are believed lost fighting Nurgle's forces in the Scourge Stars.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "White shoulders",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Snakes",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "From the frozen ocean world of Ithaka, named for the giant sea serpents they hunt with Sea Lances as a rite of passage.\n\nThey don't follow the Codex: they fight in small, close-knit squads and guard the nearby Reef Stars.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Gunmetal",
     "h": "#6a7076",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Libators",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "Named for their practice of spilling their enemies' blood as an offering to Guilliman and the Emperor.\n\nThey have been censured several times for how they treat captured enemy commanders, whom they see as the worthiest offerings of all.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Marines Errant",
  "legion": "XIII",
  "founding": "23rd Founding",
  "bio": "A fleet-based 23rd Founding Chapter descended from the Eagle Warriors, raised to fill gaps left by lost Chapters.\n\nTrue to their name, they have roamed the whole Imperium and well beyond its borders.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#2a4f9a",
     "r": "armour2"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Mentors",
  "legion": "XIII",
  "founding": "26th Founding",
  "bio": "Raised in 738.M41, one of the youngest Chapters in the Imperium. They test new wargear and tactics.\n\nThey have become reclusive and suspicious, trusting neither other Chapters nor the Imperial government, and prefer to fight alone and unobserved.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark green",
     "h": "#2c5a3a",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#2c5a3a",
     "r": "trim"
    },
    {
     "n": "White limbs & shoulders",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Mortifactors",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "They recruit from Posul, a frozen, sunless feral world of warring cannibal tribes, taking only its most vicious warriors.\n\nThe result is a dark, brooding Chapter that venerates its dead. Its morbid rites and bone-decorated armour sit close to the edge of heresy.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black limbs",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Nemesis Chapter",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "Descended from Ultramarines companies that fought beside the then-loyal Night Lords in a brutal purge during the Great Crusade.\n\nLike those forebears, they specialise in Exterminatus: wiping out whole worlds when nothing else will do.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Novamarines",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "A proud Primogenitor Chapter that treats the Codex Astartes as divine law, and has drawn blood against those who stray too far from it.\n\nThey are one of the nine Shield Chapters Guilliman chose to defend and expand Ultramar.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Cobalt blue",
     "h": "#1f3a8a",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Obsidian Jaguars",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "Goff Orks overran their homeworld of Ceibhal during the Era Indomitus.\n\nMost of the Chapter regrouped under Chapter Master Ahluic Xotzin and fought on through the Indomitus Crusade and the Octarius War.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Deep sable",
     "h": "#141416",
     "r": "armour"
    },
    {
     "n": "Granite grey",
     "h": "#6a6e72",
     "r": "trim"
    },
    {
     "n": "Granite grey",
     "h": "#6a6e72",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Patriarchs of Ulixis",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "A Primogenitor Chapter famed for its swordsmanship and marksmanship.\n\nTheir veterans are often lent out as honour guards to other Chapters and Imperial dignitaries, and some now serve in Guilliman's own Victrix Guard.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Bone torso",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Praetors of Orpheus",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "Their grasp of Imperial technology is second only to the Adeptus Mechanicus. Many suspect the two are more closely tied than either admits.\n\nAn unusually large number of their warriors carry bionic augmentations.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Sky blue",
     "h": "#6aa8d8",
     "r": "trim"
    },
    {
     "n": "Sky blue",
     "h": "#6aa8d8",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Rainbow Warriors",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "Ultramarines successors from the world of Prism. Their current status is unknown, and Imperial star charts simply mark their homeworld as 'record deleted'.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    },
    {
     "n": "Rainbow stripe",
     "h": "#d9701f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Scythes of the Emperor",
  "legion": "XIII",
  "founding": "3rd Founding",
  "bio": "Their roots go back to an Ultramarines company that guarded the mysterious xenos Pharos device on Sotha. Hive Fleet Behemoth later destroyed Sotha, leaving the Chapter with a lasting hatred of Tyranids.\n\nThey are now one of the nine Shield Chapters of Ultramar.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black limbs & helm",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Silver Eagles",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "A Primogenitor Chapter in plain metallic silver.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Silver Skulls",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "Superstitious warriors who won't go to war until their Prognosticators have read the omens. One of the nine Shield Chapters of Ultramar.\n\nThey fought beside the other Primogenitors so often they treat them as kin, though for a long time they doubted their own lineage.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Silver Templars",
  "legion": "XIII",
  "founding": "Ultima Founding",
  "bio": "Among the first Primaris Chapters of the Ultima Founding, from the world of Novaris.\n\nThey fought beside the Ultramarines in the Plague Wars and have a reputation as cold, utterly focused warriors and superb duellists.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Deep yellow",
     "h": "#e0a81c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Guilliman",
  "legion": "XIII",
  "founding": "Unknown (33rd Millennium)",
  "bio": "From the death world of Praesidia. They carry a chequered past: some of their former brothers became the renegade warband Adharon's Reavers.\n\nTheir rash, borderline Codex-breaking conduct worries some, but they fight all the harder to live up to their famous name.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour2"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Orar",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "They revere Orar, an Ultramarines captain famed in the years after the Heresy, and strive to live up to his example.\n\nTheir long honour roll is best known for leading a massive Imperial assault on an Aeldari Craftworld.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White shoulders",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Tome Keepers",
  "legion": "XIII",
  "founding": "4th Founding",
  "bio": "A 4th Founding Chapter from the desert world of Istrouma, raised shortly after 546.M32.\n\nThey wage war with knowledge as much as weapons, believing that only understanding the enemy completely brings true victory. Every battle is meticulously planned.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Vellum",
     "h": "#ddcfa9",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Void Tridents",
  "legion": "XIII",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Chapter recruited from the ocean world of Talassar in Ultramar, with a culture built on naval tradition.\n\nThey are masters of ship-to-ship fighting, boarding actions, low-gravity war and drop assaults.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#18295a",
     "r": "armour"
    },
    {
     "n": "Copper",
     "h": "#9a5a34",
     "r": "trim"
    },
    {
     "n": "Copper helm",
     "h": "#9a5a34",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "White Consuls",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "They value wise rule as much as martial skill: battle-brothers must serve as consuls governing Imperial worlds to rise in rank, and the Chapter has two Chapter Masters at once.\n\nIn the 13th Black Crusade their homeworld, Sabatine, was overrun by the Death Guard's Lords of Silence.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Yellow aquila",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Dragons",
  "legion": "XVIII",
  "founding": "21st 'Cursed' Founding",
  "bio": "A Cursed Founding Chapter whose mutation makes some warriors grow blades of bone from their heads and forearms. The Inquisition has censured them for it.\n\nAfflicted warriors sharpen the growths, sheath them in adamantium and fight in jump-pack assault squads. They are long rumoured to carry Salamanders gene-seed.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Vipers",
  "legion": "XVIII",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Salamanders successor made by Cawl. The Salamanders only discovered them by accident, years after their founding.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red pack & knees",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Covenant of Fire",
  "legion": "XVIII",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris successor of the Salamanders made by Belisarius Cawl, largely without the Salamanders' knowledge.\n\nOnce they found out, the Salamanders sent Chaplains to teach them the Promethean Cult. The Covenant hungers for knowledge of the Imperium they fight for.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Black helm & arms",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dark Krakens",
  "legion": "XVIII",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Salamanders successor made by Cawl. Many of its veterans fought as Greyshields in the early years of the Indomitus Crusade.\n\nLike the other Cawl-made sons of Vulkan, they were later visited by Salamanders Chaplains to learn the Promethean Cult.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "trim"
    },
    {
     "n": "Purple arms",
     "h": "#5b2a6e",
     "r": "detail"
    },
    {
     "n": "Nickel",
     "h": "#9a9d99",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dragonspears",
  "legion": "XVIII",
  "founding": "Ultima Founding",
  "bio": "A fleet-based, all-Primaris Salamanders successor made by Cawl.\n\nThey made their name fighting alongside the Space Wolves against Orks at the Gnarion Reef and are now expert greenskin hunters.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Light green",
     "h": "#6fb85a",
     "r": "armour"
    },
    {
     "n": "Light green",
     "h": "#6fb85a",
     "r": "trim"
    },
    {
     "n": "Black helm stripe",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Giants",
  "legion": "XVIII",
  "founding": "Unknown",
  "bio": "Unusually strong even for Space Marines, possibly through a mutated gene-seed organ. They have refused every request to have it studied.\n\nVeterans of the Third War for Armageddon. Their origins are unclear, but their build and manner suggest Vulkan's line.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Tan",
     "h": "#b99a6b",
     "r": "armour"
    },
    {
     "n": "Tan",
     "h": "#b99a6b",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Guard",
  "legion": "XIX",
  "founding": "Second Founding",
  "bio": "Founded from veterans of Corax's honour guard, led by Gherith Arendi, who was thought killed at Isstvan V.\n\nThey believe in overwhelming firepower at the right moment: no half-measures, and craters wherever they win.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black helm & limbs",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Red",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Carcharodons Astra",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "The 'Space Sharks'. Silent, pale void-raiders from the dark beyond the galaxy's edge, marked with tribal exile tattoos. Their founding is classified, and the Raven Guard are the most likely source.\n\nThey came back from the void to punish the rebels in the Badab War, and have since reappeared to fight in the Era Indomitus.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#8a9095",
     "r": "armour"
    },
    {
     "n": "Dark grey",
     "h": "#4a4f55",
     "r": "trim"
    },
    {
     "n": "White markings",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dark Eagles",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "Suspected Raven Guard descendants in olive drab.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Olive drab green",
     "h": "#5a6440",
     "r": "armour"
    },
    {
     "n": "Olive drab green",
     "h": "#5a6440",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Death Eagles",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "Suspected Raven Guard descendants, though some think their true origins lie with loyalist Emperor's Children who survived the Heresy uncorrupted. Nobody really knows.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "White insets",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Bone helm",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Death Spectres",
  "legion": "XIX",
  "founding": "13th 'Dark' Founding",
  "bio": "One of only two known Chapters from the secretive 13th 'Dark' Founding, alongside the Exorcists. They carry the Raven Guard's gene-seed quirks.\n\nThey keep a silent, thankless vigil beyond the Imperium's borders over the Mortis Gate.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "White insets",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Bone helm",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Flame Eagles",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "Suspected Raven Guard successors in golden armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperial Talons",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "Suspected Raven Guard successors in red.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a8221d",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Ravens",
  "legion": "XIX",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris son of Corax specialising in sudden drop-pod assaults.\n\nTheir scouts spend months gathering intelligence on the ground, so that when the main force lands, the war is won in one decisive strike.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of the Raven",
  "legion": "XIX",
  "founding": "Unknown (38th Millennium)",
  "bio": "A secretive 38th Millennium son of Corax. Little about them is known even to the Deathwatch or Inquisition.\n\nThey speak to allies only when they must and use their own cryptic battle-tongue among themselves.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Burnished silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Necropolis Hawks",
  "legion": "XIX",
  "founding": "Ultima Founding",
  "bio": "City-fighting specialists, veterans of a dozen brutal urban wars. They wear tactical markings on their backpacks so allies can spot them in smoke and dust.\n\nThey are a young Chapter already known for pragmatic brutality and relentless, measured aggression.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue-grey",
     "h": "#6f8396",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White helm & pack",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Raptors",
  "legion": "XIX",
  "founding": "Second Founding",
  "bio": "They have fought in the Badab War, the Third War for Armageddon and the Taros Campaign, and have come close to extinction several times. Each time they adapted and recovered.\n\nThey distrust glory and honour for its own sake and fight as practical, camouflaged professionals.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Drab green",
     "h": "#5a6440",
     "r": "armour"
    },
    {
     "n": "Drab green",
     "h": "#5a6440",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Raven's Watch",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "A rare Raven Guard successor that defended the world of Kitab against Hive Fleet Eumenides in 990.M41 and fought covertly in the Third War for Armageddon.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Light orange",
     "h": "#e39a4a",
     "r": "trim"
    },
    {
     "n": "Sky blue",
     "h": "#6aa8d8",
     "r": "detail"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Revilers",
  "legion": "XIX",
  "founding": "Second Founding",
  "bio": "Built largely from the few Raven Guard veterans who survived Isstvan V. They are experts in stealth and ambush.\n\nThey wage an endless shadow war against the Alpha Legion and have thwarted many of its schemes.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Rift Stalkers",
  "legion": "XIX",
  "founding": "Ultima Founding",
  "bio": "A fleet-based, all-Primaris son of Corax that patrols the Great Rift, hunting what crawls out of it.\n\nThey also search for a way to reconnect with the countless worlds cut off from Terra in the Imperium Nihilus.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Hawks",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "A rare Codex-compliant son of Corax from the world of Zephyr.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Wings",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "From the world of Eyrie. They embrace failure as a source of strength.\n\nThey keep a chain of heavy iron links shaped like locked talons, each link recording one of the Chapter's failures.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dim grey",
     "h": "#6e7277",
     "r": "armour"
    },
    {
     "n": "Dim grey",
     "h": "#6e7277",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Ravens",
  "legion": "?",
  "founding": "Unknown (believed early)",
  "bio": "A Chapter of mysterious origin, tied to a dark secret from the Horus Heresy. They are obsessed with knowledge and relics, and an unusually high number of their recruits become Librarians.\n\nThey are the stars of the Dawn of War video games, famously led by Gabriel Angelos.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark red",
     "h": "#7a1418",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Weathered cream shoulders",
     "h": "#d8ccaa",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Minotaurs",
  "legion": "?",
  "founding": "21st 'Cursed' Founding",
  "bio": "Their gene-seed is called 'chimeric' and their history before about a thousand years ago is sealed by edicts even Inquisitors struggle to get past. Many suspect they serve the High Lords of Terra directly.\n\nXenophobic and hard to work with, they were the High Lords' hammer against the rebels in the Badab War. Originally they wore yellow with red.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bronze",
     "h": "#a87a3c",
     "r": "armour"
    },
    {
     "n": "Bronze",
     "h": "#a87a3c",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Scorpions",
  "legion": "?",
  "founding": "Unknown (before the 35th Millennium)",
  "bio": "Fleet-based puritans who follow every line of the Codex Astartes, more strictly than even the Ultramarines, and believe in the Emperor's divinity without question.\n\nThey are obsessed with genetic purity, test their gene-seed constantly, and hold their Apothecaries in unusually high regard. They fought for the loyalists in the Badab War.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Charcoal grey",
     "h": "#3d4044",
     "r": "armour"
    },
    {
     "n": "Mustard yellow",
     "h": "#d9a92a",
     "r": "trim"
    },
    {
     "n": "Mustard yellow helm stripe",
     "h": "#d9a92a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Marines Malevolent",
  "legion": "?",
  "founding": "Unknown (32nd Millennium)",
  "bio": "Loyal to the Emperor but brutally callous toward His people: civilian lives mean nothing if the mission gets done.\n\nThat attitude has put them at odds with the Salamanders, the Inquisition and many others.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Sunburst yellow",
     "h": "#f0b81c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black torso & pack",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Relictors",
  "legion": "?",
  "founding": "36th Millennium",
  "bio": "Once one of the Astartes Praeses guarding the Eye of Terror, possibly made from mixed Ultramarines and Dark Angels gene-seed. They were originally named the Fire Claws.\n\nThey believed Chaos artefacts could be turned against Chaos itself. That made them renegades, and they withdrew into the Eye of Terror.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark grey",
     "h": "#4a4f55",
     "r": "armour"
    },
    {
     "n": "Dark grey",
     "h": "#4a4f55",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Wardens",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Stoic defenders from the Forbidden World of Sacris in the Calixis Sector, guarding frontier worlds in the warp-storm-wracked Halo Stars.\n\nThey are best known from the Deathwatch roleplaying game.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#24489a",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Silver shoulders & fists",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Hunters",
  "legion": "?",
  "founding": "Unknown (possibly Second Founding)",
  "bio": "Closely tied to the Inquisition, and at times the whole Chapter has served under an Inquisitor Lord.\n\nThey may have been founded straight after the Horus Heresy to hunt down the Traitor Legions.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Green lenses",
     "h": "#4ca85a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Astral Claws",
  "legion": "?",
  "founding": "10th Founding (35th Millennium)",
  "bio": "Founded to guard the Maelstrom, they led the Maelstrom Warders for centuries. Under Lufgt Huron they rebelled and started the Badab War.\n\nWhen the rebellion failed, the survivors fled into the Maelstrom and became the Red Corsairs, one of the most infamous renegade warbands.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#24489a",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Brazen Minotaurs",
  "legion": "?",
  "founding": "Unknown",
  "bio": "From the jungle world of Tauron, protectors of the Sargassion Reach. They are blunt and direct.\n\nBeating an enemy is not enough for them: they wipe it out completely so it can never strike again.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bronze",
     "h": "#a87a3c",
     "r": "armour"
    },
    {
     "n": "Bronze",
     "h": "#a87a3c",
     "r": "trim"
    },
    {
     "n": "White insets",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Marines Exemplar",
  "legion": "?",
  "founding": "Unknown",
  "bio": "One of the Astartes Praeses guarding the Eye of Terror. In the 13th Black Crusade, Chapter Master Maxim Absolon's forces were scattered across several worlds following Logan Grimnar's battle plan.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Dark red",
     "h": "#7a1015",
     "r": "trim"
    },
    {
     "n": "Dark red arms & shoulders",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Celebrants",
  "legion": "?",
  "founding": "Unknown (36th Millennium)",
  "bio": "Known for their unique fade from yellow legs to an orange torso and red helm and arms.\n\nThe Alpha Legion fooled them into abandoning Phaethon IV to guard the shrine world Nedicta Secundus, as part of a scheme to trap the Crimson Consuls.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#b0201c",
     "r": "armour"
    },
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "trim"
    },
    {
     "n": "Yellow lower legs",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Night Watch",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Astartes Praeses from the world of Silence, just north of the Eye of Terror. They fielded eleven companies in the 13th Black Crusade, which suggests they don't follow the Codex.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Cobalt blue helm & shoulders",
     "h": "#1f3a8a",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Swords",
  "legion": "?",
  "founding": "Unknown",
  "bio": "An unlucky name. The first Emperor's Swords were destroyed after three centuries of Alpha Legion infiltration of their homeworld.\n\nA second Chapter took the name and settled on Bellicas, only to be wiped out when Necrons woke beneath it in 970.M41.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red shoulders",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Doom Warriors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A flaw in their gene-seed means they can never truly sleep, which makes them a moody, morose Chapter.\n\nThey channel it into Exterminatus campaigns, where their unbalanced natures are put to destructive use.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Silver Guard",
  "legion": "?",
  "founding": "Unknown",
  "bio": "They fought in the Sabbat Worlds Crusade, the great war to free the Sabbat Worlds from Chaos told in the Gaunt's Ghosts novels.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark purple",
     "h": "#3f1f52",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Silver helm & arms",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Fire",
  "legion": "?",
  "founding": "Unknown (36th Millennium)",
  "bio": "A 36th Millennium Chapter of unknown lineage in red armour decorated with stylised orange flames.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Orange flames",
     "h": "#e0701f",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Castellans",
  "legion": "?",
  "founding": "Unknown",
  "bio": "They tore themselves apart in civil war when part of the Chapter turned to Chaos.\n\nIn 993.M41 Hive Fleet Jormungandr fell on both sides fighting on Sephrax and all but destroyed them. Their homeworld was later abandoned to a mysterious plague.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Black pack",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of the Chalice",
  "legion": "IX",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Blood Angels successor famed for aggressive orbital assaults.\n\nThey drop masses of Inceptors to clear beachheads while Reivers sow confusion, conquering planets at speed.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bright red",
     "h": "#b81d1d",
     "r": "armour"
    },
    {
     "n": "Bright red",
     "h": "#b81d1d",
     "r": "trim"
    },
    {
     "n": "Black helm",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Champions",
  "legion": "VII",
  "founding": "Unknown (36th Millennium)",
  "bio": "Created from the Executioners' gene-seed as a reward for the Executioners' part in crushing the Plague of Unbelief.\n\nThey paint a fearsome skull on their helms to strike fear into the enemy.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Slate grey",
     "h": "#6a7076",
     "r": "trim"
    },
    {
     "n": "Slate grey shoulders",
     "h": "#6a7076",
     "r": "detail"
    },
    {
     "n": "Bone skull",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Accipiters",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter named after a genus of hunting hawks. Little else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Blue-grey",
     "h": "#6f8396",
     "r": "trim"
    },
    {
     "n": "Blue-grey helm & arms",
     "h": "#6f8396",
     "r": "detail"
    },
    {
     "n": "Dark red aquila",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Adulators",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter once sworn to support the shrine world of Ras Shakeh.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue-grey",
     "h": "#4a5868",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angel Guard",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter of unknown origin in emerald green.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Emerald green",
     "h": "#2f7a46",
     "r": "armour"
    },
    {
     "n": "Emerald green",
     "h": "#2f7a46",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Eradicant",
  "legion": "?",
  "founding": "Unknown",
  "bio": "One of the Astartes Praeses, the twenty Chapters raised to guard the regions around the Eye of Terror.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black arms & pack",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Excelsis",
  "legion": "IX",
  "founding": "Unknown (36th Millennium)",
  "bio": "A 36th Millennium son of Sanguinius, now lost. Most of the Chapter was destroyed in battle.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Deep crimson",
     "h": "#8c1a1f",
     "r": "armour"
    },
    {
     "n": "Marble white",
     "h": "#e8e4dc",
     "r": "trim"
    },
    {
     "n": "Marble white limbs & pack",
     "h": "#e8e4dc",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Numinous",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "A splinter of the Blood Eagles, and so of Sanguinius's line, in dark bronze armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark bronze",
     "h": "#7a5a34",
     "r": "armour"
    },
    {
     "n": "Dark bronze",
     "h": "#7a5a34",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Angels Porphyr",
  "legion": "?",
  "founding": "Unknown (31st Millennium)",
  "bio": "A 31st Millennium Chapter of unknown lineage, nearly identical in look to the Eagle Warriors.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour2"
    },
    {
     "n": "Yellow aquila",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Redeemed",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter of unknown origin. Nothing more is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark orange-red",
     "h": "#b0401c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black arms & pack",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels Resplendent",
  "legion": "IX",
  "founding": "9th Founding",
  "bio": "The original identity of the Angels Penitent: artisans who made nobility their creed and were, uniquely, free of the Black Rage. This is their scheme before the 'Undying Martyr' changed everything.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Damnation",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in black with dark red limbs. Little else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Dark red arms & legs",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Iron",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage in silver with blue, gold-trimmed shoulders.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Blue shoulders",
     "h": "#1d3f8f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Penance",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter of unknown origin in yellow.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Repentance",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Some believe they descend from the Dark Angels, though nothing proves it.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Angels of Retribution",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A now-extinct Codex-compliant Chapter of unknown origin.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Red torso & helm",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Aquiloan Brotherhood",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "An Ultramarines successor and one of the nine Shield Chapters of Ultramar.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Astral Hawks",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter of unknown origin in black and blue-grey.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Ebon",
     "h": "#141416",
     "r": "armour"
    },
    {
     "n": "Dark greyish-blue",
     "h": "#3f4f60",
     "r": "trim"
    },
    {
     "n": "Dark greyish-blue arms",
     "h": "#3f4f60",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Astral Hounds",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Primaris-era Chapter created by White Dwarf, in purple and cream.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Cream shoulders & faceplate",
     "h": "#d9cca6",
     "r": "detail"
    },
    {
     "n": "Gold aquila",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Auric Patricians",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in gleaming gold armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Golden",
     "h": "#c49a3c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Black shoulders & pack",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Avengers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage created some time after the Horus Heresy.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Red shoulders & pack",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Inculpators",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter about which almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Talons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage in bone white and black.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black torso",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Vultures",
  "legion": "?",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Chapter of unknown lineage from the Ultima Founding.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black helm & shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Black Wings",
  "legion": "?",
  "founding": "Unknown",
  "bio": "In 700.M35 half the Chapter betrayed their vows. The loyal half repainted half their armour black in mourning for their fallen brothers.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Blazoned Legion",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage in white with dark red.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Dark red",
     "h": "#7a1015",
     "r": "trim"
    },
    {
     "n": "Dark red torso",
     "h": "#7a1015",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Knights",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage in red with white helms and shoulders.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White helm & shoulders",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Blood Legion",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "Blood Angels successors from Harkilae IV, famous for diagonal red and lightning-blue tiger stripes.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Lightning blue",
     "h": "#2a6fc0",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Bone Knives",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown origin in magenta armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Magenta",
     "h": "#9c2a6e",
     "r": "armour"
    },
    {
     "n": "Magenta",
     "h": "#9c2a6e",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Brazen Skulls",
  "legion": "?",
  "founding": "Unknown",
  "bio": "They fought in the Sabbat Worlds Crusade, the war told in the Gaunt's Ghosts novels.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "Bronze",
     "h": "#9a6e34",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Brotherhood of a Thousand",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter whose 'M' badge recalls a Great Crusade-era Legion symbol.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Celestial Guard",
  "legion": "?",
  "founding": "Unknown",
  "bio": "From the storm-shrouded ocean world of Erenon.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Azure",
     "h": "#2a6fc0",
     "r": "trim"
    },
    {
     "n": "Azure",
     "h": "#2a6fc0",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Champions of Thanatos",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage in black and bone.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Bone insets",
     "h": "#d9cca6",
     "r": "detail"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Charnel Guard",
  "legion": "IX",
  "founding": "Third Founding (suspected)",
  "bio": "A reclusive, fleet-based Blood Angels successor not recognised by the Sanguinary Brotherhood. They sleep in stasis crypts between campaigns and carry rare ancient weapons.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Maroon",
     "h": "#6e1016",
     "r": "trim"
    },
    {
     "n": "Maroon",
     "h": "#6e1016",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Claws of Ursus",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Specialists in cold and arctic warfare, in white and blue.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Clementine Knights",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Primaris-era Chapter in bright orange, created by a Games Workshop employee.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White left shoulder",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Black helm",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Contenders",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter about which almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark grey",
     "h": "#4a4f55",
     "r": "armour"
    },
    {
     "n": "Dark grey",
     "h": "#4a4f55",
     "r": "trim"
    },
    {
     "n": "Light grey",
     "h": "#a6abaf",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Consuls",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "Ultramarines successors destroyed by an Alpha Legion plot to steal their gene-seed for Abaddon's Black Legion.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Cream",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Cream",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Guard",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in halved red and gold.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Metallic yellow",
     "h": "#c49a3c",
     "r": "armour2"
    },
    {
     "n": "Dark grey",
     "h": "#7d8287",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Knights",
  "legion": "IX",
  "founding": "Unknown (35th Millennium)",
  "bio": "A 35th Millennium Blood Angels successor raised as a standing defence force.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Golden greaves",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Paladins",
  "legion": "?",
  "founding": "Unknown",
  "bio": "From a homeworld simply named Fortress.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#c0241f",
     "r": "trim"
    },
    {
     "n": "Red arms & legs",
     "h": "#c0241f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Sabres",
  "legion": "?",
  "founding": "13th 'Dark' Founding",
  "bio": "Once known for ruthless efficiency and strict Codex adherence, the Chapter slowly slid toward corruption.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White shoulders & pack",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Scions",
  "legion": "?",
  "founding": "Unknown",
  "bio": "An obscure Chapter about which virtually nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Red helm & shoulders",
     "h": "#c0241f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Shades",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Their Librarians follow shamanic traditions, like those of the Space Wolves and White Scars.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White arms & shoulders",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Crimson Talons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "An obscure Chapter in crimson about which virtually nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Crusaders",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in quartered red and white.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Dark Brotherhood",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A late 41st Millennium Chapter in slate grey.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Slate grey",
     "h": "#5a6066",
     "r": "armour"
    },
    {
     "n": "Slate grey",
     "h": "#5a6066",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dark Crusaders",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown origin in olive drab with bone details.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark olive-drab",
     "h": "#5a6440",
     "r": "armour"
    },
    {
     "n": "Dark olive-drab",
     "h": "#5a6440",
     "r": "trim"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dark Hands",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in an unusual dull mint green.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dull mint-green",
     "h": "#7fa58a",
     "r": "armour"
    },
    {
     "n": "Dull mint-green",
     "h": "#7fa58a",
     "r": "trim"
    },
    {
     "n": "Black gauntlets & knees",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Darkspires",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter whose forces served with Battle Group Kallides in the Indomitus Crusade.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Yellow helm",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Death Knights",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in emerald green. Nothing else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Emerald green",
     "h": "#2f7a46",
     "r": "armour"
    },
    {
     "n": "Emerald green",
     "h": "#2f7a46",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Deathwatch",
  "legion": "?",
  "founding": "Varies",
  "bio": "The Long Vigil: veterans from many Chapters who serve the Ordo Xenos as alien hunters. Their armour is painted black, except for the left arm, which keeps their home Chapter's colours.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Silver left arm",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dragon Lords",
  "legion": "?",
  "founding": "Unknown",
  "bio": "All contact with their homeworld, Erwyn, was lost in 998.M41.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "trim"
    },
    {
     "n": "White shoulders",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Orange aquila",
     "h": "#d9701f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Dragons Ardent",
  "legion": "IX",
  "founding": "Unknown (later refounded)",
  "bio": "A Blood Angels successor that was destroyed and later refounded, in striking turquoise.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Turquoise",
     "h": "#1f9a9a",
     "r": "armour"
    },
    {
     "n": "Turquoise",
     "h": "#1f9a9a",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Emperor's Hands",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter from the world of Paragon.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "White gauntlets",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Hawks",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Jump-pack assault specialists in red and yellow.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Scythes",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in purple. Little else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "trim"
    },
    {
     "n": "Yellow aquila",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Shadows",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A scheme loosely based on the Black Templars, with red and turquoise details.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Turquoise",
     "h": "#1f9a9a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Shields",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in halved light green and yellow.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Light green",
     "h": "#6fb85a",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Emperor's Storm",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in gold and white featured in GW's 'How to Paint Space Marines'.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Golden",
     "h": "#c49a3c",
     "r": "armour"
    },
    {
     "n": "Maroon",
     "h": "#6e1016",
     "r": "trim"
    },
    {
     "n": "White helm & shoulders",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Emperor's Wolves",
  "legion": "?",
  "founding": "Unknown",
  "bio": "They lost their 8th Company in the warp. It reappeared decades later, which raised hard questions.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Red shoulders",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Exemplars",
  "legion": "?",
  "founding": "Unknown (after the Second Founding)",
  "bio": "A Chapter raised some time after the Second Founding. Almost nothing else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Red sergeant helm",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Exsanguinators",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "A Blood Angels successor that carries the Red Thirst and Black Rage like its brothers.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Fists Exemplar",
  "legion": "VII",
  "founding": "Second Founding",
  "bio": "A Second Founding son of Dorn, drawn from the Legion's more progressive warriors. By tradition their armour was left unpainted, bare storm-cloud grey ceramite.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Storm cloud grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Storm cloud grey",
     "h": "#7d8287",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Golden Gryphons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in gold armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Golden",
     "h": "#c49a3c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Golden Halos",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Veterans of the campaigns on Kistvaen and Podzul, and of the decades-long Siege of Nectis.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Ebon",
     "h": "#141416",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold helm",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Golden Sons",
  "legion": "IX",
  "founding": "Unknown (38th Millennium)",
  "bio": "A 38th Millennium Blood Angels successor raised as guardians, in black and gold.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Gorgons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in lime green with black helms.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Lime green",
     "h": "#7fb83a",
     "r": "armour"
    },
    {
     "n": "Lime green",
     "h": "#7fb83a",
     "r": "trim"
    },
    {
     "n": "Black helm",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Grey Knights",
  "legion": "*",
  "founding": "Second Founding (secret)",
  "bio": "A secret Chapter of psykers who fight daemons, created in the dark days after the Horus Heresy under the oversight of Malcador. They are the Chamber Militant of the Ordo Malleus.\n\nEvery Grey Knight is a psyker, and their silver Aegis armour is inscribed with wards against the warp. Their existence is hidden from most of the Imperium.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Grief Bringers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Brave, self-sacrificing warriors who suffered heavy losses against the Enslavers on Valhall II. Famous for their pea-green armour with purple chevrons.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Sickly pea-green",
     "h": "#8a9a3a",
     "r": "armour"
    },
    {
     "n": "Headachey purple",
     "h": "#7a3a8a",
     "r": "trim"
    },
    {
     "n": "Purple chevrons",
     "h": "#7a3a8a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Guardians of Celeres",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in dark green with white shoulders.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "armour"
    },
    {
     "n": "Dark green",
     "h": "#1d4a2b",
     "r": "trim"
    },
    {
     "n": "White shoulders",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Halo Dragons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in black armour about which little is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Ebon",
     "h": "#141416",
     "r": "armour"
    },
    {
     "n": "Ebon",
     "h": "#141416",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Harbingers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter from the feral world of Birmingham.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Yellow shoulders & limbs",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Helion Legion",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "A fleet-based Chapter of Ultramarines lineage with no homeworld.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Bronze aquila",
     "h": "#9a6e34",
     "r": "detail"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Heralds of Vengeance",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in red with white helms. Almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "White helm",
     "h": "#ecebe6",
     "r": "detail"
    },
    {
     "n": "Green lenses",
     "h": "#4ca85a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperial Castellans",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in cerulean blue and bone.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Cerulean blue",
     "h": "#2f6fb8",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Bone limbs",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperial Harbingers",
  "legion": "?",
  "founding": "23rd Founding",
  "bio": "A 23rd Founding Chapter of unknown lineage in light grey.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Light grey",
     "h": "#a6abaf",
     "r": "armour"
    },
    {
     "n": "Light grey",
     "h": "#a6abaf",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperial Hawks",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Specialists in high-altitude jump-pack drops and fast air assaults.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White shoulders & pack",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperial Paladins",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Believed, though unconfirmed, to be of Ultramarines stock.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Imperial Stars",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in purple. Nothing else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Inceptors",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "A Second Founding Primogenitor of the Ultramarines in forest green and gold.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    },
    {
     "n": "Red lenses",
     "h": "#9e1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Invictors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A formerly loyal Chapter that entered the Eye of Terror in 321.M37 and fell to Chaos.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Crusaders",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Last seen in 998.M41 heading toward a forbidden region of space.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Light grey",
     "h": "#a6abaf",
     "r": "armour"
    },
    {
     "n": "Maroon",
     "h": "#6e1016",
     "r": "trim"
    },
    {
     "n": "Maroon helm & shoulders",
     "h": "#6e1016",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Scepters",
  "legion": "?",
  "founding": "Unknown",
  "bio": "The product of a rushed Imperial Founding. Every warrior bears an unusual scarring pattern on his forehead.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Green",
     "h": "#2f7a3b",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black shoulders & pack",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Iron Shades",
  "legion": "?",
  "founding": "7th Founding",
  "bio": "A 7th Founding Chapter recruited from the death world of Shoba. Its warriors wear honour tattoos.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Deep black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Midnight blue",
     "h": "#1b2445",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of Eternity",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A lost Chapter of unknown origin in white and red.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red helm & arms",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of Gryphonne",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A fleet-based crusading Chapter in orange.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "armour"
    },
    {
     "n": "Orange",
     "h": "#d9701f",
     "r": "trim"
    },
    {
     "n": "Black pack & aquila",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Knights of the Crimson Order",
  "legion": "I",
  "founding": "Unknown",
  "bio": "Unforgiven in slate grey with crimson robes.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Slate grey",
     "h": "#5a6066",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Crimson robes",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Legion of Night",
  "legion": "?",
  "founding": "Unknown",
  "bio": "They use fast Rhinos and Razorbacks for surgical strikes and to seize key points.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Legion of the Damned",
  "legion": "?",
  "founding": "Unknown (possibly 21st Founding)",
  "bio": "Ghostly warriors who appear from nowhere when all hope is lost, then vanish. They may be the remnants of the lost Fire Hawks. Black armour covered in flames and bones.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Flat black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Bone skulls",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Orange flames",
     "h": "#d9701f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Liberators",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in purple and black. Little else is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "armour"
    },
    {
     "n": "Purple",
     "h": "#5b2a6e",
     "r": "trim"
    },
    {
     "n": "Black torso & pack",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Lion Warriors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in mustard yellow with black shoulders.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Mustard yellow",
     "h": "#d9a92a",
     "r": "armour"
    },
    {
     "n": "Mustard yellow",
     "h": "#d9a92a",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Marines August",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in crimson with gold helms.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Crimson",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold helm",
     "h": "#c49a3c",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Marines Mordant",
  "legion": "XIII",
  "founding": "Unknown (35th Millennium)",
  "bio": "Ultramarines successors who guarded the Maelstrom's rimward edge. They were destroyed, with three sister Chapters, by an Alpha Legion plot.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Ultramarine blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Masters of Protelus",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown origin in white and blue.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Metamarines",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown origin in white with blue.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "trim"
    },
    {
     "n": "Blue torso & pack",
     "h": "#1d3f8f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Night Swords",
  "legion": "VII",
  "founding": "Unknown (32nd Millennium)",
  "bio": "A Codex-compliant Imperial Fists successor raised in the 32nd Millennium, in white armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Nova Wings",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in white with red trim. Almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red pack & aquila",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Obsidian Glaives",
  "legion": "XIII",
  "founding": "Second Founding",
  "bio": "A Primogenitor Chapter of the Ultramarines in glossy black and bone, recorded as annihilated.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Glossy black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Omega Marines",
  "legion": "?",
  "founding": "Unknown (40th Millennium)",
  "bio": "A 40th Millennium Codex-compliant Chapter in halved white and black.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour2"
    },
    {
     "n": "Dark yellow aquila",
     "h": "#c79a1f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Penitents",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in black with white helms. Almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "White helm & gauntlets",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Praetors of Ultramar",
  "legion": "XIII",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Chapter of Guilliman's line in black, gold and white.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Reclaimers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "Close to the Adeptus Mechanicus, like the Iron Hands, with unusually advanced wargear. They feature in the Ciaphas Cain novels.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Off-white",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Off-white",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Yellow faceplate & gauntlets",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Dragons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in red.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Yellow aquila",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Legion",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in red about which almost nothing is known.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Scimitars",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter from the Pandraxx Sub-sector in red and black.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Seraphs",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "A Codex-compliant splinter of the Blood Eagles, of Sanguinius's line, covered in runes and talismans of faith.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blood red",
     "h": "#8e1b17",
     "r": "armour"
    },
    {
     "n": "Blood red",
     "h": "#8e1b17",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Red Wings",
  "legion": "IX",
  "founding": "Unknown",
  "bio": "A Blood Angels successor in armour the colour of arctic snow, with a ruby-red left shoulder and knees.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Arctic blue-white",
     "h": "#d9e4ea",
     "r": "armour"
    },
    {
     "n": "Arctic blue-white",
     "h": "#d9e4ea",
     "r": "trim"
    },
    {
     "n": "Lacquered ruby shoulder & knees",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Red Wolves",
  "legion": "?",
  "founding": "Unknown",
  "bio": "They originally claimed the world of Bloodfall as their home.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Retributors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown lineage that has faced many threats to the Imperium, including xenos hordes.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    },
    {
     "n": "White markings",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Rift Cobras",
  "legion": "?",
  "founding": "Ultima Founding",
  "bio": "An all-Primaris Chapter of unknown lineage in black and light green.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Light green helm & arms",
     "h": "#6fb85a",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sable Swords",
  "legion": "?",
  "founding": "Unknown (late 41st Millennium)",
  "bio": "Created to replace the Astral Knights after their sacrifice against the Necron World Engine. They took over the Knights' abandoned fortress-monastery.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White knees",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Scar Lords",
  "legion": "?",
  "founding": "Second Founding",
  "bio": "They lost over 90% of their strength when a T'au battlesuit pilot set off an Exterminatus warhead aboard their flagship.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Terracotta",
     "h": "#a8442c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Shadow Haunters",
  "legion": "XIX",
  "founding": "Unknown",
  "bio": "A Raven Guard successor in grey.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    }
   ]
  }
 },
 {
  "name": "Shadow Hawks",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter recorded in charcoal grey and red.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Charcoal grey",
     "h": "#3d4044",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sky Sentinels",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in sky blue, killed to the last man.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Sky blue",
     "h": "#6aa8d8",
     "r": "armour"
    },
    {
     "n": "Dark blue",
     "h": "#1d2a52",
     "r": "trim"
    },
    {
     "n": "Dark blue torso",
     "h": "#1d2a52",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Sons of Antaeus",
  "legion": "XIII",
  "founding": "21st 'Cursed' Founding",
  "bio": "Unusually huge and tough even for Space Marines, surviving wounds that would kill others, possibly due to a Cursed Founding mutation.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Space Sharks",
  "legion": "XIX",
  "founding": "23rd Founding",
  "bio": "Current guardians of the Endymion Cluster, the Mantis Warriors' former territory. Possibly of Raven Guard stock, unconfirmed. Not to be confused with the Carcharodons.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "trim"
    },
    {
     "n": "Red helm stripe",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Star Scorpions",
  "legion": "?",
  "founding": "25th Founding",
  "bio": "Once one of the three Sentinels of the Veil, alongside the Celestial Lions and Emperor's Spears. Now extinct.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "armour"
    },
    {
     "n": "Forest green",
     "h": "#21502f",
     "r": "trim"
    },
    {
     "n": "Bone limbs",
     "h": "#d9cca6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Callers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in black and red split across the armour.",
  "scheme": {
   "pattern": "halved",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour2"
    }
   ]
  }
 },
 {
  "name": "Storm Falcons",
  "legion": "?",
  "founding": "Unknown",
  "bio": "An obscure Codex-compliant Chapter in grey and black.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Grey",
     "h": "#7d8287",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black shoulders",
     "h": "#1b1b1e",
     "r": "detail"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Storm Warriors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in stone grey.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Stone grey",
     "h": "#8a8f93",
     "r": "armour"
    },
    {
     "n": "Stone grey",
     "h": "#8a8f93",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Stormwatchers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter from the Caligari Sector with close ties to the Inquisition.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Dark blue limbs",
     "h": "#1d2a52",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Taurans",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in bone white and black.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Black helm & greaves",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Tempest Guard",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter of unknown origin in midnight blue.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Midnight blue",
     "h": "#1b2445",
     "r": "armour"
    },
    {
     "n": "Midnight blue",
     "h": "#1b2445",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Reborn",
  "legion": "XIII",
  "founding": "Unknown",
  "bio": "An Ultramarines successor and one of the nine Shield Chapters of Ultramar.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Tigers Argent",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter that aided the Angevin Crusade.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "armour"
    },
    {
     "n": "Metallic silver",
     "h": "#a9adb1",
     "r": "trim"
    },
    {
     "n": "Black insets",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Valedictors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in light green. Almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Light green",
     "h": "#6fb85a",
     "r": "armour"
    },
    {
     "n": "Light green",
     "h": "#6fb85a",
     "r": "trim"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Venerators of Osiron",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in white about which almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "trim"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Victors",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in orange-red. Almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Orange-red",
     "h": "#c0401c",
     "r": "armour"
    },
    {
     "n": "Orange-red",
     "h": "#c0401c",
     "r": "trim"
    },
    {
     "n": "Black knees & greaves",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Vorpal Swords",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in light green and black.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Light green",
     "h": "#6fb85a",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black shoulders & pack",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "War Bearers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in olive drab with silver details.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Olive-drab",
     "h": "#5a6440",
     "r": "armour"
    },
    {
     "n": "Olive-drab",
     "h": "#5a6440",
     "r": "trim"
    },
    {
     "n": "Silver",
     "h": "#a9adb1",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Warmongers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in midnight blue.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Midnight blue",
     "h": "#1b2445",
     "r": "armour"
    },
    {
     "n": "Midnight blue",
     "h": "#1b2445",
     "r": "trim"
    },
    {
     "n": "Contrast colour helm & pack",
     "h": "#c79a1f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Warrior Adepts",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in quartered red and blue.",
  "scheme": {
   "pattern": "quartered",
   "colours": [
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "armour"
    },
    {
     "n": "Blue",
     "h": "#1d3f8f",
     "r": "armour2"
    },
    {
     "n": "Dark yellow aquila",
     "h": "#c79a1f",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Warriors Tempest",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in bone white. Almost nothing is recorded.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "armour"
    },
    {
     "n": "Bone",
     "h": "#d9cca6",
     "r": "trim"
    },
    {
     "n": "Contrast",
     "h": "#1b2445",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "White Minotaurs",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Codex-compliant Chapter in golden bronze with red shoulders.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Golden bronze",
     "h": "#9a6e34",
     "r": "armour"
    },
    {
     "n": "Red",
     "h": "#a3151c",
     "r": "trim"
    },
    {
     "n": "Red shoulders",
     "h": "#a3151c",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "White Panthers",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in black and white armour.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "White",
     "h": "#ecebe6",
     "r": "armour"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "trim"
    },
    {
     "n": "Black helm & gauntlets",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Yellow Jackets",
  "legion": "?",
  "founding": "Unknown",
  "bio": "A Chapter in black and yellow, like its namesake wasp.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "armour"
    },
    {
     "n": "Yellow",
     "h": "#e8b923",
     "r": "trim"
    },
    {
     "n": "Yellow helm & legs",
     "h": "#e8b923",
     "r": "detail"
    }
   ]
  }
 },
 {
  "name": "Adeptus Custodes",
  "legion": "*",
  "founding": "Created by the Emperor before the Great Crusade",
  "bio": "The Emperor's personal guard: ten thousand golden warriors, each crafted individually and far beyond a Space Marine. For ten millennia they guarded the Golden Throne and Imperial Palace.\n\nSince the Era Indomitus they have marched out again in force. Every Custodian's armour is hand-made and unique, but all share the gleaming auramite gold.",
  "scheme": {
   "pattern": "solid",
   "colours": [
    {
     "n": "Auramite gold",
     "h": "#c49a3c",
     "r": "armour"
    },
    {
     "n": "Gold",
     "h": "#c49a3c",
     "r": "trim"
    },
    {
     "n": "Red plume & cloak",
     "h": "#a3151c",
     "r": "detail"
    },
    {
     "n": "Black",
     "h": "#1b1b1e",
     "r": "detail"
    }
   ]
  },
  "schemes": [
   {
    "label": "Shield Host (standard)",
    "pattern": "solid",
    "colours": [
     {
      "n": "Auramite gold",
      "h": "#c49a3c",
      "r": "armour"
     },
     {
      "n": "Gold",
      "h": "#c49a3c",
      "r": "trim"
     },
     {
      "n": "Red plume & cloak",
      "h": "#a3151c",
      "r": "detail"
     },
     {
      "n": "Black",
      "h": "#1b1b1e",
      "r": "detail"
     }
    ],
    "img": "Modern_Era_Custodian.jpg"
   },
   {
    "label": "Emissaries Imperatus",
    "pattern": "solid",
    "colours": [
     {
      "n": "Auramite gold",
      "h": "#c49a3c",
      "r": "armour"
     },
     {
      "n": "Gold",
      "h": "#c49a3c",
      "r": "trim"
     },
     {
      "n": "Red shoulder",
      "h": "#a3151c",
      "r": "detail"
     },
     {
      "n": "Black",
      "h": "#1b1b1e",
      "r": "detail"
     }
    ],
    "img": "Custodian_Emissaries_Imperatus.png"
   },
   {
    "label": "Shadowkeepers",
    "pattern": "solid",
    "colours": [
     {
      "n": "Sable black",
      "h": "#1b1b1e",
      "r": "armour"
     },
     {
      "n": "Gold",
      "h": "#c49a3c",
      "r": "trim"
     },
     {
      "n": "Gold",
      "h": "#c49a3c",
      "r": "detail"
     }
    ],
    "img": "Custodian_Warden.png"
   }
  ]
 }
];

/* Pictures: file names on the Warhammer 40k Fandom wiki, loaded live (not stored here).
   PLATES = each Legion/Chapter's colour-scheme marine. PRIMARCH_PICS = curated model + art shots. */
const PLATES = {
 "Thousand Sons": "Tizcan_Host_Heretic_Astartes.png",
 "Iron Warriors": "GornothIronWarriors.jpg",
 "Death Guard": "DeathGuardColourScheme2.png",
 "Imperial Fists": "ImperialFistsToradon.jpg",
 "Sons of Horus / Black Legion": "BlackLegionNarghast.jpg",
 "Alpha Legion": "LepsysAlphaLegion.jpg",
 "White Scars": "WhiteScarsJaghalai.jpg",
 "Iron Hands": "IronHandsVangaar.jpg",
 "Raven Guard": "RavenGuardGiancarlo.jpg",
 "Emperor's Children": "MandrakhBlissEmperorsChildren.jpg",
 "World Eaters": "VastyxKhadeWorldEaters.jpg",
 "Salamanders": "SalamandersShan'kor.jpg",
 "Ultramarines": "UltramarinesCesarus.jpg",
 "Word Bearers": "Kar'GoraxWordBearers.jpg",
 "Night Lords": "ThraktarHexxNightLords.jpg",
 "Blood Angels": "BA_Intercessor.png",
 "Space Wolves": "Space_Wolves_Scheme2.jpg",
 "Dark Angels": "DA_Primaris_Intercessor.png",
 "Angels of Absolution": "Angels_Absolution_Brother_Gad.png",
 "Angels of Defiance": "Angel_Defiance_Primaris.png",
 "Angels of Doom": "AngelsofDoomMini.jpg",
 "Angels of Redemption": "AoR_Astartes2.jpg",
 "Angels of Vengeance": "Angels_Vengeance_Astartes.png",
 "Angels of Vigilance": "AoV_Battle-Brother2.jpg",
 "Blades of Vengeance": "Blades_Vengeance_Primaris.png",
 "Bringers of Judgement": "Bringers_Judgement_Primaris_Intercessor.png",
 "Consecrators": "Consecrators_Battle-Brother.jpg",
 "Cowled Wardens": "Cowled_Wardens_Primaris_Intercessor.png",
 "Disciples of Caliban": "Disciples_of_Caliban_Scheme.png",
 "Guardians of the Covenant": "GoC_Astartes.png",
 "Knights of Abhorrence": "Knights_Abhorrence_Primaris_Intercessor.png",
 "Penitent Blades": "Penitent_Blades_Primaris_Intercessor.png",
 "Prime Absolvers": "Prime_Absolvers_Primaris_Intercessor.png",
 "Star Phantoms": "Star_Phantoms_Astartes2.jpg",
 "The Unnamed": "The_Unnamed_Primaris_Intercessor.png",
 "Dark Hunters": "DH_Tact_Marine.png",
 "Destroyers": "Destroyers_Colour_Scheme.jpg",
 "Griffon Lords": "Griffon_Lords_Astartes.jpg",
 "Iron Talons": "Iron_Talons_Astartes.jpg",
 "Mantis Warriors": "Brother_Mark_VII.JPG",
 "Marauders": "MaraudersChapterColourScheme.jpg",
 "Rampagers": "RampagersChapterColour_Scheme.jpg",
 "Solar Hawks": "Solar_Hawks_Colour_Scheme.jpg",
 "Sons of Jaghatai": "SoJ_Colour_Scheme.jpg",
 "Storm Lords": "Storm_Lord_2nd_Co_Command.png",
 "Storm Reapers": "StormReapersKhol.jpg",
 "Wolfspear": "Wolfspear_Primaris_Intercessor.png",
 "Astral Knights": "Astral_Knights_Firstborn_Astartes.png",
 "Black Templars": "BlackTemplarsFirstbornColourScheme.jpg",
 "Brazen Annihilators": "BrazenAnnihilatorsPrimaris.webp",
 "Celestial Lions": "CelestialLionsColourScheme.jpg",
 "Crimson Fists": "CF_Tact_Marine2.png",
 "Death Strike": "Death_Strike_Colour_Scheme.jpg",
 "Emperor's Warbringers": "Emperor's_Warbringers_Marine.jpg",
 "Excoriators": "ExcoriatorsFirstborn.jpg",
 "Executioners": "Executioners_Tactical_Marine_Castigar.png",
 "Exorcists": "Mark_VII_Brother_Initiate.jpg",
 "Fire Lords": "Fire_Lord_Tact_Marine.jpg",
 "Hammers of Dorn": "HoD_Marine.png",
 "Honoured Sons": "Honoured_Sons_Astartes.jpg",
 "Hospitallers": "Hospitalers_Astartes.jpg",
 "Invaders": "Invader_Tact_Marine.png",
 "Iron Knights": "Iron_Knights_Scheme2.jpg",
 "Knights of Dorn": "KoD_Colour_Scheme.jpg",
 "Red Templars": "Red_Templars_Astartes.jpg",
 "Shadow Wolves": "ShadowWolvesTacticalMarine2.png",
 "Skull Bearers": "Skull_Bearers_Battle-Brother.jpg",
 "Sons of Dorn": "SonsofDorn4thCompany.jpg",
 "Sons of the Phoenix": "Sons_Phoenix_Intercessor.png",
 "Soul Drinkers": "Adrian_smith_soul_drinker1.jpg",
 "Subjugators": "Subjugators_Colour_Scheme.jpg",
 "White Templars": "White_Templars_Astartes.jpg",
 "Absolvers": "Absolvers_Astartes.jpg",
 "Angels Encarmine": "AE_Colour_Scheme.jpg",
 "Angels Penitent": "AngelsPenitentPrimarisMarine.jpg",
 "Angels Sanguine": "Angels_Sanguine_Scheme2.jpg",
 "Angels Vermillion": "AV_Colour_Scheme.jpg",
 "Atlantian Spears": "Atlantian_Spears_Intercessor.png",
 "Blood Dragons": "Blood_Dragons_Primaris_Intercessor.png",
 "Blood Drinkers": "BD_Battle_Brother.jpg",
 "Blood Scythes": "Blood_Scythes_Primaris_Intercessor.png",
 "Blood Swords": "Blood_Swords_Marine.jpg",
 "Carmine Blades": "CB_Colour_Scheme.png",
 "Cruor Blades": "Cruor_Blades_Primaris_Intercessor.png",
 "Flesh Eaters": "Flesh_Eaters_RT_Era.jpg",
 "Flesh Tearers": "Flesh_Tearers_Scheme.jpg",
 "Knights of Blood": "Knights_of_Blood_Marine.jpg",
 "Lamenters": "Lamenters_Battle-Brother.jpg",
 "Sable Knights": "Sable_Knights_Primaris_Intercessor.png",
 "Sons of Sanguinius": "Sons_Sanguinius_Astartes.jpg",
 "The Remnants": "TheRemnantsColourSchemeMini.png",
 "Brazen Claws": "BC_Tact_Marine.png",
 "Iron Fists": "Iron_Fists_Scheme2.jpg",
 "Iron Lords": "IL_1st_Co.jpg",
 "Knights of Byzantium": "KoB_Sergeant.png",
 "Red Talons": "Red_Talons_colour_scheme.jpg",
 "Sons of Medusa": "Brother_Mark_VII.jpg",
 "Star Dragons": "Star_Dragons_Scheme.jpg",
 "Steel Confessors": "SteelConfessorsTacticalMarine.jpg",
 "Angels of Fury": "Angels_Fury_Firstborn_Astartes.png",
 "Angels Revenant": "Angels_Revenant_colour_scheme.jpg",
 "Aurora Chapter": "Aurora_Marine.png",
 "Avenging Sons": "Avenging_Sons_Firstborn_Astartes.png",
 "Black Consuls": "Black_Consul.jpg",
 "Brazen Consuls": "BrazenConsulsPrimaris.jpg",
 "Castellans of the Rift": "Castellans_Rift_Intercessor.png",
 "Dark Sons": "DS_Colour_Scheme.jpg",
 "Doom Eagles": "Doom_Eagles_Battle-Brother.jpg",
 "Doom Legion": "Doom_Legion_Marine.jpg",
 "Eagle Warriors": "EW_Mairne.png",
 "Emperor's Spears": "Emperor's_Spears_Astartes_1.jpg",
 "Fire Angels": "Fire_Angles_Marine.jpg",
 "Fire Hawks": "Mark_VIII_Preceptor_Sergeant.jpg",
 "Fulminators": "FulminatorsTarrand.jpg",
 "Genesis Chapter": "Genesis_Chapter_Marine2.png",
 "Heralds of Ultramar": "Heralds_Ultramar_Astartes.jpg",
 "Howling Griffons": "HG_Marine.jpg",
 "Imperius Reavers": "Imperius_Reavers_Astartes_final.jpg",
 "Iron Hawks": "Iron_Hawks_Astartes.jpg",
 "Iron Hounds": "IronHounds9thEdition.jpg",
 "Iron Snakes": "Iron_Snakes_Colour_Scheme.jpg",
 "Libators": "Libators_Colour_Scheme.jpg",
 "Marines Errant": "Marines_Errant_Battle-Brother.jpg",
 "Mentors": "MentorsAstartes2.JPG",
 "Mortifactors": "Mort_Marine.png",
 "Nemesis Chapter": "Nemesis_Chapter.png",
 "Novamarines": "Novamarines_Chapter_Colour_Scheme.jpg",
 "Obsidian Jaguars": "Obsidian_Jaguars_Primaris_Intercessor.png",
 "Patriarchs of Ulixis": "PoU_Marine_Scheme.jpg",
 "Praetors of Orpheus": "PoO_Marine.png",
 "Rainbow Warriors": "Rainbow_Warriors_Armor.png",
 "Scythes of the Emperor": "Scythes_Marine_2.png",
 "Silver Eagles": "Silver_Eagles_Astartes.jpg",
 "Silver Skulls": "SK_Marine.png",
 "Silver Templars": "SilverTemplarsNykos.jpg",
 "Sons of Guilliman": "Sons_of_Guilliman_Marine.jpg",
 "Sons of Orar": "SoO_Marine.png",
 "Tome Keepers": "Tome_Keepers_Primaris_Intercessor.png",
 "Void Tridents": "Void_Tridents_Intercessor.png",
 "White Consuls": "WC_Astartes.jpg",
 "Black Dragons": "BlackDragonsFirstborn.jpg",
 "Black Vipers": "Black_Vipers_Primaris_.png",
 "Covenant of Fire": "Covenant_Fire_Primaris_Intercessor.png",
 "Dark Krakens": "Dark_Krakens_Primaris_Intercessor.png",
 "Dragonspears": "Dragonspears_Primaris_Intercessor.png",
 "Storm Giants": "Storm_Giants_Scheme.jpg",
 "Black Guard": "Black_Guard_Colour_Scheme.jpg",
 "Carcharodons Astra": "Carcharodons_Battle-Brother.jpg",
 "Dark Eagles": "Dark_Eagles_updated.jpg",
 "Death Eagles": "Death_Eagle_Marine.jpg",
 "Death Spectres": "Death_Spectres_Marine.jpg",
 "Flame Eagles": "FE_Space_Marine.jpg",
 "Imperial Talons": "Imperial_Talons_Colour_Scheme.jpg",
 "Iron Ravens": "Iron_Ravens_Colour_Scheme.png",
 "Knights of the Raven": "KoR_3rd_Co._6th_Tact._Sqd.png",
 "Necropolis Hawks": "Necropolis_Hawks_Intercessor.png",
 "Raptors": "Raptor_Battle_Brother_Mark_VII.jpg",
 "Raven's Watch": "Scout_Leader_Gylain.png",
 "Revilers": "Revilers_Astartes.jpg",
 "Rift Stalkers": "RiftStalkersDonatello.jpg",
 "Storm Hawks": "Storm_Hawks_Marine.jpg",
 "Storm Wings": "Storm_Wings_Chapter_Colours.jpg",
 "Blood Ravens": "Blood_Ravens_Updated.jpg",
 "Minotaurs": "Mark_VII_Brother.jpg",
 "Red Scorpions": "Brother_Gez_Tact_Marine.jpg",
 "Marines Malevolent": "Marines_Malevolent_Astartes.jpg",
 "Relictors": "RelictorsChapterColourScheme.jpg",
 "Storm Wardens": "Storm_Wardens_Astartes.jpg",
 "Red Hunters": "Red_Hunters_Tact_Marine.jpg",
 "Astral Claws": "Veteran_Brother_Sternguard_Mark_IV.jpg",
 "Brazen Minotaurs": "BM_Colour_Scheme.jpg",
 "Marines Exemplar": "Marines_Exemplar_Updated.jpg",
 "Celebrants": "Celebrants_Astartes.jpg",
 "Night Watch": "Night_Watch_2nd_Co.jpg",
 "Emperor's Swords": "Emperor's_Swords_Astartes.jpg",
 "Doom Warriors": "Doom_Warriors_Colour_Scheme.jpg",
 "Silver Guard": "Silver_Guard_Astartes.jpg",
 "Angels of Fire": "Angels_Fire_Firstborn_Astartes.png",
 "Crimson Castellans": "Crimson_Castellans_Astartes.jpg",
 "Knights of the Chalice": "KnightsoftheChalicePrimaris.png",
 "Iron Champions": "Iron_Champions_Marine.jpg",
 "Accipiters": "Accipiters_Tactical_Marine.png",
 "Adulators": "Adulators_Battle-Brother.png",
 "Angel Guard": "Angel_Guard_Battle-Brother.png",
 "Angels Eradicant": "Angels_Eradican_Battle-Brother.png",
 "Angels Porphyr": "Angels_Porphyr_Firstborn_Astartes.png",
 "Angels Redeemed": "Angels_Redeemed_Firstborn_Astartes.png",
 "Angels Resplendent": "AngelsResplendent2ndCompany.jpg",
 "Angels of Damnation": "Angels_Damnation_Astartes.png",
 "Angels of Iron": "Angels_Iron_Firstborn_Astartes.png",
 "Angels of Penance": "Angels_Penance_Firstborn_Astartes.png",
 "Angels of Repentance": "Angels_Repentance_Firstborn_Astartes.png",
 "Angels of Retribution": "Angels_Retribution_Firstborn_Astartes.png",
 "Astral Hawks": "Astral_Hawks_Firstborn_Astartes.png",
 "Astral Hounds": "AstraHoundsPrimaris.png",
 "Auric Patricians": "Auric_Patricians_Firstborn_Astartes.png",
 "Avengers": "Avengers_Firstborn_Astartes.png",
 "Black Inculpators": "Black_Inc_Astartes.jpg",
 "Black Talons": "Black_Talons_Astartes.jpg",
 "Black Wings": "Black_Wings_Scheme.jpg",
 "Blazoned Legion": "Blazoned_Legion_Astartes.jpg",
 "Blood Knights": "Blood_Knights_Astartes.jpg",
 "Brazen Skulls": "Brazen_Skulls_Astartes.jpg",
 "Brotherhood of a Thousand": "BoT_Battle-Brother.jpg",
 "Celestial Guard": "CG_Battle-Brother.jpg",
 "Champions of Thanatos": "Champion_Thanatos_Astartes.jpg",
 "Clementine Knights": "ClementineKnightsPrimarisMarine.jpg",
 "Contenders": "Contenders_Astartes.jpg",
 "Crimson Guard": "Crimson_Guard_Astartes.jpg",
 "Crimson Paladins": "Crimson_Paladins_scheme.jpg",
 "Crimson Sabres": "Crimson_Sabre_scheme.jpg",
 "Crimson Scions": "Crimson_Scions_Astartes.jpg",
 "Crimson Shades": "Crimson_Shades_Scheme.jpg",
 "Crimson Talons": "Crimson_Talons_Astartes.jpg",
 "Crusaders": "Crusaders_Astartes.jpg",
 "Dark Brotherhood": "Dark_Brotherhood_Astartes.jpg",
 "Dark Crusaders": "Dark_Crusaders_Astartes.jpg",
 "Dark Hands": "DarkHands_Colour_Scheme.jpg",
 "Darkspires": "Darkspires_Primaris_Intercessor.png",
 "Death Knights": "Death_Knights_Scheme.jpg",
 "Deathwatch": "DW_Battle-Brother2.jpg",
 "Dragon Lords": "Dragon_Lords_Astartes.jpg",
 "Emperor's Hands": "Emp's_Hands_Scheme.jpg",
 "Emperor's Hawks": "Emperor's_Hawks_Marine.jpg",
 "Emperor's Scythes": "Emperor's_Scythes_Astartes.jpg",
 "Emperor's Shadows": "Emperor's_Shadows_Marine.jpg",
 "Emperor's Shields": "Emperor's_Shield_Astartes.jpg",
 "Emperor's Storm": "Emperor's_Storm_Astartes.jpg",
 "Emperor's Wolves": "Emperor's_Wolves_Scheme.jpg",
 "Exemplars": "Exemplars_Astartes.jpg",
 "Golden Gryphons": "Golden_Gryphons_Battle-Brother.jpg",
 "Golden Halos": "Golden_Halos_Astartes.jpg",
 "Gorgons": "Gorgons_Astartes.jpg",
 "Grey Knights": "Justicar_Aegis_Power_Armour.jpg",
 "Guardians of Celeres": "Guardians_of_Celeres_Astartes.jpg",
 "Halo Dragons": "Halo_Dragons_Astartes.jpg",
 "Harbingers": "Harbingers_Astartes.jpg",
 "Heralds of Vengeance": "HoV_Astartes.jpg",
 "Imperial Castellans": "Imperial_Castellans_Astartes.jpg",
 "Imperial Harbingers": "Imperial_Harbinger_Colour_Scheme.jpg",
 "Imperial Hawks": "Imperial_Hawks_Astartes.jpg",
 "Imperial Paladins": "Imperial_Paladins_Battle-Brother.jpg",
 "Imperial Stars": "Imperial_Stars_Armor.png",
 "Inceptors": "Inceptors_Battle-Brother.jpg",
 "Invictors": "Invictors_Astartes.jpg",
 "Iron Crusaders": "Iron_Crusaders_Astartes.jpg",
 "Iron Shades": "IronShadesPrimaris_Marine2.png",
 "Knights of Eternity": "Knights_Eternity_Astartes.jpg",
 "Knights of Gryphonne": "Knights_Of_Gryphonne_Colour_Scheme.jpg",
 "Legion of Night": "LoN_Astartes.jpg",
 "Legion of the Damned": "LoD_Scheme.jpg",
 "Liberators": "Liberators_Astartes.jpg",
 "Lion Warriors": "Lion_Warriors_Astartes.jpg",
 "Marines August": "Marines_Augus_Astartes.jpg",
 "Masters of Protelus": "Masters_of_Protelus_Battle-Brother.jpg",
 "Metamarines": "Metamarine_Marine.jpg",
 "Nova Wings": "Nova_Wings_Astartes.jpg",
 "Omega Marines": "Omega_Marines_Scheme2.jpg",
 "Penitents": "Penitents_Astartes.jpg",
 "Red Dragons": "Red_Dragons_Astartes.jpg",
 "Red Legion": "Red_Legion_Scheme2.jpg",
 "Red Wolves": "Red_Wolves_Battle-Brother.jpg",
 "Retributors": "RetributorsColourScheme.JPG",
 "Rift Cobras": "Rift_Cobras_Primaris_Intercessor.png",
 "Sable Swords": "Sable_Swords_Battle-Brother.jpg",
 "Sky Sentinels": "Sky_Sentinels_Astartes.jpg",
 "Space Sharks": "Space_Sharks_Marine.jpg",
 "Star Scorpions": "StarScorpions.jpg",
 "Storm Callers": "Storm_Callers_Astartes.jpg",
 "Storm Falcons": "Storm_Falcons_Astartes1.jpg",
 "Storm Warriors": "Storm_Warriors.jpg",
 "Taurans": "Taurans_Colour_Scheme.jpg",
 "Tempest Guard": "Tempest_Guard_Astartes.jpg",
 "Tigers Argent": "Tigers_Argent_Scheme2.jpg",
 "Valedictors": "Valedictors_Astartes.jpg",
 "Venerators of Osiron": "Venators_of_Osiron_Astartes.jpg",
 "Victors": "Victors_Astartes.jpg",
 "Vorpal Swords": "Vorpal_Swords_Astartes.jpg",
 "War Bearers": "War_Bearers_Updated.jpg",
 "Warmongers": "Warmongers_Astartes.jpg",
 "Warrior Adepts": "Warrior_Adepts_Scheme.jpg",
 "Warriors Tempest": "Warriors_Tempest_Astartes.jpg",
 "White Minotaurs": "White_Minotaurs_Marine.jpg",
 "White Panthers": "White_Panthers.jpg",
 "Yellow Jackets": "Yellow_Jackets_Marine.jpg",
 "Adeptus Custodes": "Modern_Era_Custodian.jpg"
};
const PRIMARCH_PICS = {
 "Lion El'Jonson": [
  {
   "label": "Horus Heresy model",
   "file": "LionElJonsonHirusHeresyMini.jpg"
  },
  {
   "label": "Warhammer 40k model",
   "file": "LionElJonsonIndomitusMini.jpg"
  },
  {
   "label": "Official art",
   "file": "LionElJonson2.jpg"
  }
 ],
 "Fulgrim": [
  {
   "label": "Horus Heresy model",
   "file": "Fulgrimp2.jpg"
  },
  {
   "label": "Warhammer 40k model",
   "file": "FulgrimDaemonPrinceMini.jpg"
  },
  {
   "label": "Official art",
   "file": "Fulgrim-0.jpg"
  }
 ],
 "Perturabo": [
  {
   "label": "Horus Heresy model",
   "file": "Perturabo_04.jpg"
  },
  {
   "label": "Official art",
   "file": "Primarchs_Perturabo_coverart.png"
  }
 ],
 "Jaghatai Khan": [
  {
   "label": "Horus Heresy model",
   "file": "Jaghatai_Khan.png"
  },
  {
   "label": "Official art",
   "file": "WS2_Warlord_Jaghatai_Khan_v2_Israel_Llona.png"
  }
 ],
 "Leman Russ": [
  {
   "label": "Horus Heresy model",
   "file": "Leman_Russ_4.jpg"
  },
  {
   "label": "Official art",
   "file": "Leman_Russ.jpg"
  }
 ],
 "Rogal Dorn": [
  {
   "label": "Horus Heresy model",
   "file": "Rogal_Dorn_Mini.jpg"
  },
  {
   "label": "Official art",
   "file": "Rogal_Dorn.jpg"
  }
 ],
 "Konrad Curze": [
  {
   "label": "Horus Heresy model",
   "file": "Konrad-Curze-6.jpg"
  },
  {
   "label": "Official art",
   "file": "Night_Haunter_8th_Ed.jpg"
  }
 ],
 "Sanguinius": [
  {
   "label": "Horus Heresy model",
   "file": "Primarch_Sanguinius.jpg"
  },
  {
   "label": "Official art",
   "file": "Primarch_Sanguinius_Victorious.jpg"
  }
 ],
 "Ferrus Manus": [
  {
   "label": "Horus Heresy model",
   "file": "Ferrus.jpg"
  },
  {
   "label": "Official art",
   "file": "Mauro-belfiore-ferrus-final-k.jpg"
  }
 ],
 "Angron": [
  {
   "label": "Horus Heresy model",
   "file": "AngronHorusHeresyMini.png"
  },
  {
   "label": "Warhammer 40k model",
   "file": "AngronDaemonPrimarchMini.jpg"
  },
  {
   "label": "Official art",
   "file": "Angron_Pre-Heresy.jpg"
  }
 ],
 "Roboute Guilliman": [
  {
   "label": "Warhammer 40k model",
   "file": "ArmourofFate.jpg"
  },
  {
   "label": "Official art",
   "file": "Roboute_Guilliman_Avenging_Son.png"
  }
 ],
 "Mortarion": [
  {
   "label": "Warhammer 40k model",
   "file": "Mortarion-WD-Sep.jpg"
  },
  {
   "label": "Official art",
   "file": "Mortarion2.jpg"
  }
 ],
 "Magnus the Red": [
  {
   "label": "Warhammer 40k model",
   "file": "Magnus_daemon_primarch_of_tzeentch.jpg"
  },
  {
   "label": "Official art",
   "file": "Magnus_The_Red_Portrait.png"
  }
 ],
 "Horus Lupercal": [
  {
   "label": "Horus Heresy model",
   "file": "Horussmallbase.jpg"
  },
  {
   "label": "Official art",
   "file": "Horus_Lupercal_Luna_Wolf.jpg"
  }
 ],
 "Lorgar Aurelian": [
  {
   "label": "Horus Heresy model",
   "file": "Lorgar1.jpg"
  },
  {
   "label": "Official art",
   "file": "ThePrimarchsLorgar.jpg"
  }
 ],
 "Vulkan": [
  {
   "label": "Horus Heresy model",
   "file": "Vulkan6.jpg"
  },
  {
   "label": "Official art",
   "file": "Primarch_Vulkan.jpg"
  }
 ],
 "Corvus Corax": [
  {
   "label": "Horus Heresy model",
   "file": "CorvusCoraxMini2.jpg"
  },
  {
   "label": "Official art",
   "file": "Corvus_Corax.jpg"
  }
 ],
 "Alpharius Omegon": [
  {
   "label": "Horus Heresy model",
   "file": "AlphariusMini.jpg"
  },
  {
   "label": "Official art",
   "file": "Aleph_Null.jpg"
  }
 ]
};

window.CODEX = { LEGIONS, CHAPTERS, PLATES, PRIMARCH_PICS };
