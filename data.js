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
      { label: "Battle companies (modern)", pattern: "solid", colours: [L("Dark green", "#1d4a2b"), T("Dark green", "#1d4a2b"), D("Bone robes", BONE), D("Red", RED), D("Gold", GOLD)] },
      { label: "Deathwing", pattern: "solid", colours: [L("Bone", BONE), T("Bone", BONE), D("Red", RED), D("Dark green", "#1d4a2b")] },
      { label: "Ravenwing", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Bone", BONE), D("Silver", SILVER)] },
      { label: "Horus Heresy Legion", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Red", RED), D("Bone", BONE)] },
    ],
  },

  {
    num: "III", name: "Emperor's Children", primarch: "Fulgrim", allegiance: "Traitor",
    status: "Daemon Prince of Slaanesh", homeworld: "Chemos",
    primarchBio: "Fulgrim the Phoenician pursued perfection in every art. A cursed daemon blade led him toward excess and he slew his closest brother, Ferrus Manus, at Isstvan V before ascending as a daemon of Slaanesh.",
    legionBio: "Once the proud bearers of the Emperor's own aquila, the III Legion fell into hedonism and sensory obsession. Their regal purple and gold became garish pinks, purples and blacks.",
    schemes: [
      { label: "Pre-Heresy / Heresy", pattern: "solid", colours: [L("Royal purple", "#5b2a6e"), T("Gold", GOLD), D("White", WHITE), D("Black", BLACK)] },
      { label: "Chaos (modern)", pattern: "solid", colours: [L("Pink", "#d1579c"), T("Gold", GOLD), D("Purple", "#5b2a6e"), D("Black", BLACK)] },
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
      { label: "Chapter colours (modern)", pattern: "solid", colours: [L("Wolf grey-blue", "#5f7d94"), T("Wolf grey-blue", "#5f7d94"), D("Yellow", "#e0b23a"), D("Red", "#a8312a"), D("Fur brown", "#6b5136")] },
      { label: "Horus Heresy Legion", pattern: "solid", colours: [L("Storm grey", "#6e7378"), T("Dark grey", "#45494d"), D("Bone", BONE), D("Red", "#a8312a")] },
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
      { label: "Chapter colours", pattern: "solid", colours: [L("Crimson", "#a3151c"), T("Crimson", "#a3151c"), D("Gold", GOLD), D("Black", BLACK), D("Bone", BONE)] },
      { label: "Death Company", pattern: "solid", colours: [L("Black", BLACK), T("Black", BLACK), D("Red saltire", "#a3151c"), D("Bone", BONE)] },
      { label: "Sanguinary Guard", pattern: "solid", colours: [L("Gold", GOLD), T("Gold", GOLD), D("Red", "#a3151c"), D("Black", BLACK)] },
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
      { label: "Heresy era", pattern: "solid", colours: [L("White", "#e6e2d6"), T("Blue", "#2f5597"), D("Brass", BRASS), D("Black", BLACK)] },
      { label: "Khorne (modern)", pattern: "solid", colours: [L("Blood red", "#8e1b17"), T("Brass", BRASS), D("Black", BLACK), D("Bone", BONE)] },
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
      { label: "Heresy era", pattern: "solid", colours: [L("Bone white", "#d9d2bb"), T("Dark green", "#48603f"), D("Brass", BRASS), D("Black", BLACK)] },
      { label: "Nurgle (modern)", pattern: "solid", colours: [L("Plague green", "#76804f"), T("Brass", "#8f7434"), D("Rust", "#7a3f22"), D("Bone", BONE)] },
    ],
  },
  {
    num: "XV", name: "Thousand Sons", primarch: "Magnus the Red", allegiance: "Traitor",
    status: "Daemon Prince of Tzeentch", homeworld: "Prospero (destroyed)",
    primarchBio: "A one-eyed giant of sorcerous genius, Magnus believed psychic knowledge could be mastered safely. His desperate warning to the Emperor shattered the Palace's wards. Russ was sent to burn Prospero, which drove Magnus into Tzeentch's arms.",
    legionBio: "Scholar-sorcerers whose mutations were 'cured' by the Rubric of Ahriman, which turned most of the Legion into dust-filled automata. Their old crimson changed to Tzeentchian blue and gold.",
    schemes: [
      { label: "Heresy era", pattern: "solid", colours: [L("Crimson", "#a51e22"), T("Ivory", "#e6dcc0"), D("Gold", GOLD), D("Black", BLACK)] },
      { label: "Tzeentch (modern)", pattern: "solid", colours: [L("Sorcerous blue", "#1f4fa0"), T("Gold", GOLD), D("Black", BLACK), D("Bone", BONE)] },
    ],
  },
  {
    num: "XVI", name: "Sons of Horus / Black Legion", primarch: "Horus Lupercal", allegiance: "Traitor",
    status: "Slain by the Emperor at the Siege of Terra", homeworld: "Cthonia",
    primarchBio: "The Emperor's favoured son and first Warmaster, Horus led the Great Crusade. He was corrupted by Chaos after a near-fatal wound on Davin, and his rebellion split the Imperium in the Horus Heresy.",
    legionBio: "Begun as the Luna Wolves, renamed the Sons of Horus, and after their master's death rebuilt by Abaddon as the Black Legion. They are the spearhead of the Black Crusades. Three famous schemes in one lineage.",
    schemes: [
      { label: "Luna Wolves", pattern: "solid", colours: [L("White", WHITE), T("White", WHITE), D("Black", BLACK), D("Gold", GOLD)] },
      { label: "Sons of Horus", pattern: "solid", colours: [L("Sea green", "#3f8a7a"), T("Black", BLACK), D("Bronze", "#9a6e34"), D("Red eye", RED)] },
      { label: "Black Legion", pattern: "solid", colours: [L("Black", BLACK), T("Gold", GOLD), D("Red", RED), D("Brass", BRASS)] },
    ],
  },
  {
    num: "XVII", name: "Word Bearers", primarch: "Lorgar Aurelian", allegiance: "Traitor",
    status: "Daemon Prince", homeworld: "Colchis",
    primarchBio: "A preacher who worshipped the Emperor as a god, Lorgar was publicly shamed at Monarchia for it. He searched for new gods and found Chaos, then quietly built the conspiracy that became the Horus Heresy.",
    legionBio: "Fanatical zealots, the first Legion to turn wholly to the Dark Gods, led by Dark Apostles. Their armour is covered in scripture and sigils. They wore grey before Monarchia, then crimson in mourning and rage.",
    schemes: [
      { label: "Pre-Monarchia", pattern: "solid", colours: [L("Grey", "#8d9095"), T("Gold", GOLD), D("Black", BLACK), D("Parchment", BONE)] },
      { label: "Heresy & Chaos", pattern: "solid", colours: [L("Crimson", "#7c1a20"), T("Black", BLACK), D("Gold", GOLD), D("Parchment", BONE)] },
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
  "bio": "One of the original Unforgiven Chapters. They believe their ancestors already atoned for the Fall of Caliban, which gives them a grim sense of humour the other Unforgiven lack.",
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
  "bio": "A Primaris son of the Lion, built around one belief: whoever endures, wins.",
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
  "bio": "Unforgiven with a savage, tribal edge to their monastic traditions.",
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
  "bio": "Fallen-hunters so obsessed they will abandon a battle to chase one. Most of the Imperium is wary of fighting beside them.",
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
  "bio": "They still wear the black of the original First Legion. They are stubborn, avoid glory and are utterly devoted.",
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
  "bio": "Silent sentinels who have watched the Eye of Terror for almost ten thousand years.",
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
  "bio": "The first Primaris Chapter created from Lion El'Jonson's gene-seed.",
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
  "bio": "Primaris Unforgiven in white with gold helms, pauldrons and gauntlets.",
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
  "bio": "They appeared out of nowhere at full strength, carrying an unusual hoard of relic armour and weapons. Their origins are a mystery.",
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
  "bio": "Unforgiven in black and gold, with purple helms and pauldron insets.",
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
  "bio": "Raised at a Dark Angels Supreme Grand Master's personal request, which is almost unheard of. Rumour says they exist to hunt Cypher.",
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
  "bio": "Deeply devout Unforgiven who cover their armour in scripture and swear strict oaths.",
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
  "bio": "Black-armoured Unforgiven picked out with teal trim.",
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
  "bio": "Unforgiven in an unusual quartered yellow and blue livery.",
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
  "bio": "An all-Primaris successor. Its Chapter Master learned of the Fallen from Azrael himself, but treats every enemy of the Emperor as his prey.",
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
  "bio": "Brutal loyalists of the Badab War. Their gene-seed is officially unknown, but often linked to the Dark Angels.",
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
  "bio": "An all-Primaris Unforgiven Chapter that goes without a name.",
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
  "bio": "Codex-compliant descendants of the Khan, in navy blue.",
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
  "bio": "A rare Second Founding son of the White Scars. Black armour with yellow helms and shoulders.",
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
  "bio": "Their lineage is disputed between the White Scars and the Ultramarines. Tan armour with cerulean blue shoulders.",
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
  "bio": "White Scars successors in black armour with bare silver arms.",
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
  "bio": "Founded to help guard the Maelstrom. They backed the wrong side in the Badab War and are still seen as traitors by many, despite their pardon.",
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
  "bio": "A Second Founding son of the Khan and the parent Chapter of the Mantis Warriors.",
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
  "bio": "Like their forefathers, they use ritual facial scars to record rank and deeds.",
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
  "bio": "A rare White Scars successor. They often paint their left arm white to honour their parent Chapter.",
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
  "bio": "Codex-compliant heirs of the Khan in deep purple with bone markings.",
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
  "bio": "A rare Second Founding successor, split down the middle in red and white.",
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
  "bio": "The first Primaris Chapter made from the Khan's gene-seed, and some of the most battle-hungry warriors in the Imperium.",
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
  "bio": "An all-Primaris Chapter of Russ's line, given to the Space Wolves by Guilliman. Many on Fenris still don't trust them.",
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
  "bio": "Imperial Fists successors who gave their lives to stop an Ork Waaagh! from reaching a vital Imperial world.",
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
  "bio": "Zealous crusaders founded by Sigismund, Dorn's champion. A vast fleet-based crusading force that hates psykers and never stops moving.",
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
  "bio": "Imperial Fists descendants in dark copper armour with white trim.",
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
  "bio": "Proud warriors in gold and azure, almost wiped out on Armageddon after an Inquisitorial betrayal.",
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
  "bio": "Nearly destroyed when Orks overran Rynn's World and a misfire levelled their fortress. Pedro Kantor rebuilt them from the ashes. Each brother's left hand is painted crimson.",
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
  "bio": "Codex-compliant Imperial Fists successors in dark blue.",
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
  "bio": "Unlike most Chapters, they happily use camouflage.",
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
  "bio": "Sons of Dorn who leave every scar and dent on their armour as a lesson in pain and failure.",
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
  "bio": "Headhunters who sided with the rebels in the Badab War and were later pardoned. Their original livery was blue and grey camouflage.",
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
  "bio": "A very unusual Chapter. Every recruit is deliberately possessed by a daemon, which is then cast out, to harden him against the warp.",
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
  "bio": "Red armour with yellow helms, greaves and vambraces. They joined the Iron Crusade beside the Iron Hands.",
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
  "bio": "Strict followers of the Codex, which has made them fierce rivals of the Ultramarines' line.",
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
  "bio": "Little is known of them beyond their forest green armour and white shoulders.",
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
  "bio": "A young, fleet-based Imperial Fists successor in white and yellow.",
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
  "bio": "Codex-compliant sons of Dorn in green armour.",
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
  "bio": "Imperial Fists successors in gleaming blue-grey armour.",
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
  "bio": "A lost Chapter possibly of Dorn's line, in silver armour with dark purple shoulders.",
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
  "bio": "Black armour with white faceplates, trim and gauntlets.",
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
  "bio": "An all-Primaris Chapter of Dorn's line in off-white armour, a symbol of their purity.",
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
  "bio": "A proud Chapter that broke with the Imperium and was declared Excommunicate Traitoris.",
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
  "bio": "A young Imperial Fists successor in mid-green armour.",
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
  "bio": "Once thought to come from Dorn's line. White armour with black details.",
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
  "bio": "Blood Angels successors who follow the Codex almost dogmatically.",
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
  "bio": "The most aloof of the Sanguinary Brotherhood, and openly dismissive of the other Chapters.",
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
  "bio": "Formerly the Angels Resplendent, artisans in orange armour. They took a new name and black livery after the mysterious 'Undying Martyr' arrived.",
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
  "bio": "Masked warriors with a glorious record against the horrors of the Eye of Terror.",
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
  "bio": "The only Blood Angels successor that shuns its brother Chapters and bears the curse alone.",
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
  "bio": "Blood Angels successors who keep themselves apart from the Sanguinary Brotherhood.",
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
  "bio": "A name many Imperial worlds fear more than they celebrate.",
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
  "bio": "Named for a mutated gene-seed organ that gives them a craving for blood. They follow the Codex closely.",
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
  "bio": "A Primaris Chapter that first fought in the Red Scar after the Devastation of Baal.",
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
  "bio": "Codex-compliant Chapter of Sanguinius's line in crimson.",
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
  "bio": "Long mistaken for Ultramarines descendants, until a meeting with Chaplain Astorath revealed their true bloodline.",
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
  "bio": "Wracked with guilt for failing to reach Baal before the Tyranids besieged it.",
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
  "bio": "A Blood Angels successor whose name fits the gene-line's curse.",
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
  "bio": "The most savage of Sanguinius's heirs, always on the edge of the Black Rage. Once reduced to just four companies, they are led by Gabriel Seth.",
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
  "bio": "Declared renegades after their bloodlust became too much even for the Inquisition.",
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
  "bio": "Maybe the unluckiest Chapter in the galaxy. They were dragged onto the wrong side of the Badab War, then nearly wiped out by Tyranids during their penance.",
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
  "bio": "Black legs and torso as a reminder that the Black Rage lives in all of them.",
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
  "bio": "One of the original Second Founding Chapters of the Blood Angels.",
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
  "bio": "Stoic, relentless sons of Ferrus Manus. They fought against the 13th Black Crusade.",
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
  "bio": "They cross their homeworld in huge mobile fortresses, as their parent Chapter does.",
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
  "bio": "Stern xenos-haters who have fought Tyranids, T'au and the Barghesi.",
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
  "bio": "An all-Primaris Chapter of the Iron Hands line in purple and bronze.",
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
  "bio": "A Second Founding successor of the Iron Hands.",
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
  "bio": "Formed from Iron Hands who lost the Moirae Schism, a dispute over machine worship. They were exiled, and later proved their loyalty in the Badab War.",
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
  "bio": "Codex-compliant Chapter from Draconith, linked to the Iron Hands.",
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
  "bio": "An Iron Hands successor described as crippled after heavy losses.",
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
  "bio": "Codex-compliant Chapter of the 8th Founding in cobalt blue.",
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
  "bio": "Nearly destroyed in the 13th Black Crusade, they are rebuilding. They field ancient relic vehicles built on their forge homeworld.",
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
  "bio": "One of the nine Shield Chapters that guard Ultramar.",
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
  "bio": "A Primogenitor Chapter of the Ultramarines in black and gold.",
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
  "bio": "Ultramarines successors in brown armour with black helms.",
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
  "bio": "Charged by Guilliman to hold the Nachmund Gauntlet, the only stable route through the Great Rift.",
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
  "bio": "Ultramarines successors from Darkhold in quartered green and white.",
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
  "bio": "Fatalists who consider themselves already dead. Silver armour with red details.",
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
  "bio": "Ultramarines descendants in metallic grey with dark green.",
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
  "bio": "A fleet-based Primogenitor Chapter with no homeworld, and the forebears of the Marines Errant.",
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
  "bio": "A wild, saga-telling Chapter of Guilliman's line that guards the Elara's Veil nebula.",
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
  "bio": "Ultramarines successors of the 25th Founding, originally in white and red.",
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
  "bio": "A Cursed Founding Chapter that once vanished in the warp. It was originally yellow with red flames.",
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
  "bio": "An all-Primaris Chapter that wears blue in honour of the Ultramarines.",
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
  "bio": "The first of the Ultramarines' Primogenitor Chapters, and close to them in custom and markings.",
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
  "bio": "Fought in the Badab War and the 13th Black Crusade. Bold quartered heraldry.",
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
  "bio": "Guardians of the hive world Praedis Zeta, at the far edge of Ultramar.",
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
  "bio": "Ultramarines successors in dark steel with stark white faceplates.",
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
  "bio": "Relentless hunters, believed lost fighting Nurgle's forces in the Scourge Stars.",
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
  "bio": "Spear-wielding seafarers from Ithaka who fight in small squads outside the Codex.",
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
  "bio": "They offer their enemies' blood to the Primarch and the Emperor. Among the most brutal of Guilliman's sons.",
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
  "bio": "A fleet-based Chapter descended from the Eagle Warriors.",
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
  "bio": "They test new wargear and tactics, working closely with the Adeptus Mechanicus.",
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
  "bio": "A morbid Primogenitor Chapter whose death rites border on heresy.",
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
  "bio": "Codex-compliant Primogenitor Chapter in dark green.",
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
  "bio": "Proud, hard-line followers of the Codex. Their quartered livery comes from their first Master's personal heraldry.",
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
  "bio": "Their homeworld of Ceibhal was recently overrun by Orks.",
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
  "bio": "Famed blades and marksmen, whose veterans are often loaned out as honour guards.",
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
  "bio": "A Primogenitor Chapter known for its understanding of Imperial science.",
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
  "bio": "Ultramarines successors from the world of Prism, with a rainbow stripe down their helms.",
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
  "bio": "A Shield Chapter of Ultramar that lost its homeworld to Hive Fleet Behemoth and has hated Tyranids ever since.",
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
  "bio": "Superstitious warriors who won't go to war until their Prognosticators read the omens.",
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
  "bio": "An all-Primaris Chapter of famed duellists who often fight beside the Adepta Sororitas.",
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
  "bio": "Named for the Primarch himself. Some of their former brothers became the renegade Adharon's Reavers.",
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
  "bio": "Codex-compliant Ultramarines successors from the world of Armato.",
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
  "bio": "A scholarly Chapter from the desert world of Istrouma.",
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
  "bio": "An all-Primaris Chapter guarding the enlarged Realm of Ultramar, in ocean blue and copper.",
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
  "bio": "The Ultramarines in reverse: white armour with blue heraldry. Unusually, they have two Chapter Masters at once.",
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
  "bio": "A Cursed Founding Chapter whose warriors grow bony blades and horns. Long rumoured to carry Salamanders gene-seed.",
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
  "bio": "A Primaris successor of the Salamanders in black and red.",
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
  "bio": "A Primaris successor of Vulkan's line in flame orange and black.",
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
  "bio": "A Primaris successor of the Salamanders in black and purple.",
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
  "bio": "A Primaris successor of the Salamanders in bright light green.",
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
  "bio": "One of the few Chapters thought to carry Vulkan's gene-seed. Veterans of the Third War for Armageddon.",
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
  "bio": "A rare Second Founding son of Corax who believes in overwhelming firepower at exactly the right moment.",
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
  "bio": "The 'Space Sharks'. Silent void-raiders from the galaxy's edge, marked with tribal exile tattoos. Most likely of Raven Guard stock.",
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
  "bio": "Suspected sons of Corax in black, with bone helms and white shoulder insets.",
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
  "bio": "Pale, silent guardians of the Mortis Gate.",
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
  "bio": "An all-Primaris Chapter of Corax's line in silver, blue and red.",
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
  "bio": "A secretive son of Corax in burnished silver.",
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
  "bio": "Primaris city-fighting specialists, stoic and efficient at close quarters.",
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
  "bio": "Practical, camouflage-loving marines who care little for pomp. One of the most popular 'minor' Chapters with fans.",
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
  "bio": "A rare Raven Guard successor in black with sky-blue and orange accents.",
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
  "bio": "A rare Second Founding son of Corax, drawn heavily from the Legion's veterans.",
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
  "bio": "An all-Primaris Chapter of Corax's line, in white: the opposite of the Raven Guard's black.",
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
  "bio": "A rare Raven Guard successor from the world of Eyrie.",
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
 "Storm Wings": "Storm_Wings_Chapter_Colours.jpg"
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
