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
 "Iron Champions": "Iron_Champions_Marine.jpg"
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
