// Favorites — all categories in one file.
export type FavoriteItem = {
  t: string
  m: string
  b: string
  n?: string
  img?: string
  tag?: string
  loc?: string
  url?: string
}
export type FavoriteCategory = {
  id: string
  label: string
  icon: string
  items: FavoriteItem[]
}

// ─── NOVELS ──────────────────────────────────────────────────────────────────

const fiction: FavoriteCategory = {
  id: "fiction",
  label: "Fiction",
  icon: "book",
  items: [
    {
      t: "Bad Behavior",
      m: "Mary Gaitskill",
      b: "What a provocative collection! Gaitskill explores sexual subcultures, cruelty and connection with sentences hit both brutal and tender notes all at once.",
    },
    {
      t: "Chemistry",
      m: "Weike Wang",
      b: "A PhD student's life dissolves in deadpan increments. Wang's debut novel has a voice so dry and detached it crackles with understated humor.",
    },
    {
      t: "Eye Level",
      m: "Jenny Xie",
      b: "Poems of travel and solitude. Xie writes displacement with a stillness that makes each line feel developed like film.",
    },
    {
      t: "Foundation",
      m: "Isaac Asimov",
      b: "One psychohistorian bets he can shorten a 30,000-year dark age. What happens when calculations go awry? (And for the love of sci-fi, do NOT watch the Apple TV+ show of the same name.)",
    },
    {
      t: "Giovanni's Room",
      m: "James Baldwin",
      b: "An American in Paris with a dark night of a soul. Baldwin writes with absolute control of prose - every paragraph is a sublime gem.",
    },
    {
      t: "Hyperion",
      m: "Dan Simmons",
      b: "Canterbury Tales but make it an epic space odyssey. Six pilgrims travel toward a creature that moves backward through time in hopes that it grants one wish. Each chapter is more shocking than the one before. May Simmons rest in peace, and his indomitable love for Keats persist through the ages.",
    },
    {
      t: "Interpreter of Maladies",
      m: "Jhumpa Lahiri",
      b: "Lahiri writes with explosive force. Her debut won the freaking Pulitzer Prize for Fiction. What more do I need to say?!",
    },
    {
      t: "It's Kind of a Funny Story",
      m: "Ned Vizzini",
      b: "A burned-out teenager checks himself into a psychiatric ward for five days. I read this at a relatable moment in my own life. Sending love to Vizzini's family and loved ones.",
    },
    {
      t: "Night Sky with Exit Wounds",
      m: "Ocean Vuong",
      b: "War, violence, fathers, and desire - Vuong conjures luminous memories in English (his second language, need I remind people!).",
    },
    {
      t: "Stories of Your Life and Others",
      m: "Ted Chiang",
      b: "Mind-blowing stories about language, mathematics, faith, and the shape of a life. The title story is infinitely better than the Hollywood-ified movie 'Arrival', which I will never forgive for butchering Mandarin so badly I couldn't understand a word.",
    },
    {
      t: "The Alchemist",
      m: "Paulo Coelho",
      b: "A simple story of a shepherd boy crossing the desert. 'When you want something, all the universe conspires.' Learning about Coelho's personal struggles to get published after an initial print run of just 900 copies and no reprint adds another layer of appreciation to this magnum opus.",
    },
    {
      t: "The Argonauts",
      m: "Maggie Nelson",
      b: "A love story, a pregnancy, a gender transition. This is THE critical theory memoir. Nelson is a philosopher who thinks in vivid detail on the page. One of the best opening paragraphs I have ever read: 'The Santa Ana winds are shredding the bark off the eucalyptus trees in long white stripes...'",
    },
    {
      t: "The Joy Luck Club",
      m: "Amy Tan",
      b: "Following four Chinese mothers and daughters, this novel is a watershed novel in Asian American fiction...and what inspired me to write. :)",
    },
    {
      t: "The Paper Menagerie and Other Stories",
      m: "Ken Liu",
      b: "Liu writes the immigrant heart in fantastic and fantastical registers. Grab a box of tissues, or maybe two to be safe!",
    },
  ],
}

// ─── FILMS ────────────────────────────────────────────────────────────────────

const movies: FavoriteCategory = {
  id: "movies",
  label: "Movies",
  icon: "film",
  items: [
    {
      t: "Call Me by Your Name",
      m: "Luca Guadagnino, 2017",
      b: "One Italian summer of awakening desire. I'm still sitting with Elio by the fire, alongside the rolling credits.",
    },
    {
      t: "Exam",
      m: "Stuart Hazeldine, 2009",
      b: "Calling all death game lovers! Eight candidates, one room, one exam paper, eighty minutes. A locked-room thriller built entirely on dialogue and paranoia (super impressive given the film had no special effects and a tiny budget).",
    },
    {
      t: "Everything Everywhere All at Once",
      m: "Daniels, 2022",
      b: "Maximalist absurdism all bundled into a single moment between a mother and daughter in a parking lot. First movie I've ever seen use googly eyes. The only multiverse story that didn't make me fatigued (otherwise, no more multiverse movies, PLEASE).'",
    },
    {
      t: "Gattaca",
      m: "Andrew Niccol, 1997",
      b: "In a future where genetic engineering predetermines success (ah, eugenics), a normal man 'borrows' someone else's identity to reach the stars. Ethan Hawke's final scene on the launchpad is one of cinema's greatest endings.",
    },
    {
      t: "Interstellar",
      m: "Christopher Nolan, 2014",
      b: "A bookshelf across spacetime. A black hole. Docking to a spaceship spinning out of control. Hans Zimmer with an organ. Enough said.",
    },
    {
      t: "Kingdom of Heaven (Director's Cut)",
      m: "Ridley Scott, 2005",
      b: "Please don't believe the Rotten Tomatoes score, and watch the director's cut ONLY (the theatrical cut is a mess). This epic about the First and Second Crusades explores a knight's honor, religion in all its beauty and ugliness, and all that is sacred.",
    },
    {
      t: "Kung Fu Hustle",
      m: "Stephen Chow, 2004",
      b: "Chow is a comedic genius. This film mixes cartoon absurdity, wuxia martial arts, and heart. I still can't get over the landlady as a character, that terrifying guqin, and the final Buddha's Palm.",
    },
    {
      t: "Million Dollar Baby",
      m: "Clint Eastwood, 2004",
      b: "After ninety minutes you start wondering if this movie is actually about boxing.",
    },
    {
      t: "Pan's Labyrinth",
      m: "Guillermo del Toro, 2006",
      b: "Set in fascist Spain, Del Toro crafts a gorgeous fairy tale with an unforgettable ending. The only movie that has ever made my dad cry (and that man is STOIC).",
    },
    {
      t: "Sicario",
      m: "Denis Villeneuve, 2015",
      b: "The U.S. border war seen through a character learning the hard truth of the world at the same pace we do. The Juárez convoy sequence is a masterclass in tension. Watch as the moral floor slowly decays in real time.",
    },
    {
      t: "Spirited Away",
      m: "Hayao Miyazaki, 2001",
      b: "Do I even need to write a review for this??? Every Miyazaki film is gold but this is his pièce de résistance.",
    },
    {
      t: "Sucker Punch",
      m: "Zack Snyder, 2011",
      b: "I will die on this hill: this is a GREAT film. The unique setting mixes a medical institution with the burlesque and features samurai, mechs, zombies, and dragons! A wonderful psychological puzzle about trauma and mental escape.",
    },
    {
      t: "The Fifth Element",
      m: "Luc Besson, 1997",
      b: "Opera divas, flying taxis, Gaultier costumes, and Chris Tucker.",
    },
    {
      t: "The Man from Earth",
      m: "Richard Schenkman, 2007",
      b: "Imagine your colleague telling you he is 14,000 years old. How would you react? Shot in a single room over one evening, the entire film is just about the conversation that follows a wild statement.",
    },
    {
      t: "The Matrix",
      m: "The Wachowskis, 1999",
      b: "The internet ruined the red/blue pill metaphor, but this film (and its concept of 'bullet time') changed action cinema and gaming forever.",
    },
    {
      t: "The Silence of the Lambs",
      m: "Jonathan Demme, 1991",
      b: "I cannot believe that the greatest deuteragonist in cinema is a cannibal.",
    },
    {
      t: "Tropic Thunder",
      m: "Ben Stiller, 2008",
      b: "There was a time my friends and I could recite every line from this film. This movie could never be made now. Full of absurdist humor and iconic quotes. Every character performance was perfect, and then there's Les Grossman, who rises one step above.",
    },
    {
      t: "Whiplash",
      m: "Damien Chazelle, 2014",
      b: "Question 1: What does greatness cost? Question 2: Were the final minutes a triumph...or a tragedy?!",
    },
  ],
}

// ─── ANIME ────────────────────────────────────────────────────────────────────

const anime: FavoriteCategory = {
  id: "anime",
  label: "Anime & Manga",
  icon: "star",
  items: [
    {
      t: "Arcane",
      m: "Fortiche Production",
      b: "Two sisters, two cities. Every shot in this series could be a wallpaper. Silco shows that terrorists could be good fathers (is that really the takeaway?).",
    },
    {
      t: "Attack on Titan",
      m: "Wit Studio / MAPPA",
      b: "Humanity lives in a walled city — or does it? The middle seasons were really mid, but the beginning and end will blow your mind and make you question if Isayama is omniscient.",
    },
    {
      t: "Berserk",
      m: "Studio 4°C — Golden Age film trilogy",
      b: "Guts, Griffith, and the most infamous betrayal. Approach with caution - you may face psychological damage.",
    },
    {
      t: "Castlevania",
      m: "Powerhouse Animation",
      b: "The rare game adaptation that worked!",
    },
    {
      t: "Cyberpunk: Edgerunners",
      m: "Studio Trigger",
      b: "You know from episode one how stories in Night City end, and it STILL destroys you. I am pavlov'ed to cry when I hear 'I Really Want to Stay at Your House'.",
    },
    {
      t: "Death Note",
      m: "Madhouse — Ep. 1–25",
      b: "A notebook kills whoever's name is written on it. Light vs. L as chess, or a game of cat-and-mouse. Near and Mello could never replace my OG crush on my emo shrimp.",
    },
    {
      t: "Demon Slayer",
      m: "ufotable",
      b: "A kind boy, a demon sister, and animation money set on fire. Not even mad they switched to movies since it means my eyes will be blessed 3x.",
    },
    {
      t: "Frieren: Beyond Journey's End",
      m: "Madhouse",
      b: "The main adventure is over, but the elf who outlives everyone realizes too late what friendship and connection meant. A gentle masterpiece!",
    },
    {
      t: "Naruto",
      m: "Pierrot",
      b: "I literally have a tattoo of the Hidden Leaf Village on my arm. My first email handle was naruto_luver. Chunin Exams were the peak of my childhood. The only watchable scenes in Boruto are ones with Naruto and Sasuke in them FOR A REASON.",
    },
    {
      t: "One Piece",
      m: "Toei Animation",
      b: "Watch One Pace if you need to catch up. Oda plants seeds that payoff decades later. Marineford and Wano are peaks of the highest peaks. I've been telling friends it's 'ending soon' for 10 years now. Let's hope I'm still alive when it does.",
    },
    {
      t: "Pantheon",
      m: "CGCG Studio",
      b: "The most underrated sci-fi show ever. Starts small and later turns into a boundless exploration of digital consciousness. Prepare for your mind to instantly develop synapses.",
    },
    {
      t: "Re:Zero",
      m: "White Fox — Season 1",
      b: "The only isekai that subverts expectations. Death may be a save point, but what if every reload costs you a piece of your sanity? You will be asking 'WTF is going on' every episode and constantly be wondering if you're high. Episode 18 'From Zero' might just be the best anime episode of all time.",
    },
    {
      t: "Steins;Gate",
      m: "White Fox",
      b: "A self-proclaimed mad scientist microwaves bananas and breaks causality. Slow-burn for twelve episodes, then absolute MADNESS.",
    },
    {
      t: "Takopi's Original Sin",
      m: "Enishiya",
      b: "A happy alien octopus meets a bullied girl. The shortest and most painful complete series. Will take you a week to recover from.",
    },
    {
      t: "The Promised Neverland",
      m: "CloverWorks — Season 1",
      b: "What could go wrong at a lovely orphanage of cute children? DO NOT watch past the first season if you want to preserve a sliver of anime greatness!",
    },
  ],
}

// ─── GAMES ────────────────────────────────────────────────────────────────────

const games: FavoriteCategory = {
  id: "games",
  label: "Games",
  icon: "gamepad",
  items: [
    {
      t: "Baldur's Gate 3",
      m: "Larian Studios",
      b: "My first intro to a D&D campaign. Larian has created the best RPG in modern memory, one in which every absurd plan works, mods are welcomed, and you'll spend hours in the character design screen. You can be the hero or slaughter your way through every town (and maybe, just maybe, make it past Act I).",
    },
    {
      t: "Cuphead",
      m: "Studio MDHR",
      b: "Every frame is hand-drawn, and every boss a jazz-age fever dream. BRUTAL difficulty - prepare for suffering.",
    },
    {
      t: "Disco Elysium",
      m: "ZA/UM",
      b: "An amnesiac detective argues with 24 aspects of his own broken brain. I died in the first minute of playing. To a ceiling fan. Lowkey a political novel wearing a murder mystery's coat???",
    },
    {
      t: "Ghost of Tsushima",
      m: "Sucker Punch",
      b: "A samurai sacrifices his soul and fights without honor to save his island. Did I mention you play as a SAMURAI?!",
    },
    {
      t: "Hades",
      m: "Supergiant",
      b: "Roguelite structure blends death seamlessly by sending you back to hell (where you...belong?). Amazing voice actors, sharp dialogue, and BEAUTIFUL art.",
    },
    {
      t: "Infinity Blade",
      m: "Chair",
      b: "I cannot believe this game was removed from the App Store. How could you do that to God King! How could you do that even after recruiting Brandon Sanderdon to write the companion books! It truly was the lost masterpiece of the iPhone/iPad era.",
    },
    {
      t: "Journey",
      m: "thatgamecompany",
      b: "Two hours of anonymous co-op through a beautiful world you sand-surf through at golden hour. And it has cloth physics! This game rests the mind and the soul.",
    },
    {
      t: "Omori",
      m: "Omocat",
      b: "A boy's pastel dreamworld hides a dark truth...don't want to spoil any more than that.",
    },
    {
      t: "Outer Wilds",
      m: "Mobius Digital",
      b: "A solar system, 22 minutes, and progress measured by information/knowledge about the world. If I could forget any game completely to replay, it would be this. When the screen faded to black, I looked back at my reflection and just sat there in silence for ten minutes. Wow.",
    },
    {
      t: "Pokémon Emerald",
      m: "Game Freak",
      b: "The version that had everything!!! My whole childhood distilled into a single cartridge. Secret bases, Feebas fishing, throwing 100 ultra balls at 1HP Raquaza, cloning friend's Pokémon and rare candies at the PC...take me back to simpler times.",
    },
    {
      t: "Pokémon Mystery Dungeon: Explorers of Sky",
      m: "Spike Chunsoft",
      b: "Spin-off dungeon crawler with a story that has no business hitting that hard. I replayed this as an adult and literally cried.",
    },
    {
      t: "Sea of Stars",
      m: "Sabotage Studio",
      b: "A love letter to traditional RPGs, but with its own novel mechanics. Timed hits makes the turn-base dynamic. Probably the prettiest pixel world ever rendered.",
    },
    {
      t: "Spiritfarer",
      m: "Thunder Lotus",
      b: "A cozy management game about ferrying souls. Everyone you upgrade, you get that much closer to 'losing'. Build rooms for friends so you can love them properly before they go. :(",
    },
    {
      t: "The Legend of Zelda: Breath of the Wild",
      m: "Nintendo",
      b: "See that mountain? You can climb it!!! (My jaw dropped when I realized you can go outside the plateau.)",
    },
    {
      t: "The World Ends with You",
      m: "Square Enix",
      b: "Such a stylish game set in Shibuya filled with the coolest street fashion, slang, sassy characters, and a soundtrack that defined an era of the dual-screen DS.",
    },
    {
      t: "Undertale",
      m: "Toby Fox",
      b: "The most shocking RPG I've ever played, created by a one-man team. First time I was genuinely terrified by a game that remembers your choices. GO IN BLIND for the full experience. Already waiting patiently for Deltarune chapters.",
    },
  ],
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const categories = [fiction, movies, anime, games]
