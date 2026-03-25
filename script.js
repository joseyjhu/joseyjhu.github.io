const favoritesData = [
  {
    id: "books",
    title: "Books",
    countLabel: "25 titles",
    description: "Stories about memory, identity, ambition, longing, and the way humanity endures.",
    groups: [
      {
        title: "Fiction",
        description: "Literary, speculative, classic, and modern fiction in one long-running shelf.",
        items: [
          { title: "Hyperion Cantos" },
          { title: "Foundation Series" },
          { title: "A Little Life" },
          { title: "1984" },
          { title: "Animal Farm" },
          { title: "The Hitchhiker's Guide to the Galaxy" },
          { title: "Ender's Game Series" },
          { title: "Dune Series" },
          { title: "Project Hail Mary" },
          { title: "The Alchemist" },
          { title: "Tomorrow, and Tomorrow, and Tomorrow" },
          { title: "The Joy Luck Club" },
          { title: "The Princess Bride" },
          { title: "Crying in H Mart" },
          { title: "Things Fall Apart" },
          { title: "Chemistry" },
          { title: "The Tale of Despereaux" },
          { title: "The Argonauts" },
          { title: "The Sympathizer" },
          { title: "It's Kind of a Funny Story" },
          { title: "Never Let Me Go" },
          { title: "To Kill a Mockingbird" },
          { title: "The Catcher in the Rye" },
          { title: "Interpreter of Maladies" }
        ]
      }
    ]
  },
  {
    id: "short-stories",
    title: "Short Stories",
    countLabel: "20 entries",
    description: "A mix of speculative fiction, literary fiction, classics, and contemporary pieces that linger in the mind long after reading.",
    groups: [
      {
        title: "Short Stories",
        description: "Standalone pieces and story collections worth revisiting.",
        items: [
          { title: "Story of Your Life" },
          { title: "The Paper Menagerie" },
          { title: "The Great Silence" },
          { title: "The Merchant and the Alchemist's Gate" , note: "From Exhalation." },
          { title: "Flowers for Algernon" },
          { title: "The Bicentennial Man" },
          { title: "Love and Honour and Pity and Pride and Compassion and Sacrifice" },
          { title: "The Necklace" },
          { title: "Today I'm Yours" },
          { title: "How Much Land Does a Man Need" },
          { title: "A Temporary Matter" },
          { title: "I, Robot" },
          { title: "Flowers for Algernon" , note: "Appears twice in the original list; kept here as given." },
          { title: "Seeing Ershadi" },
          { title: "Letter of Apology" },
          { title: "On This Side" },
          { title: "Ergonomic" , note: "Narrative." },     
          { title: "The Apology" , note: "New Yorker." },
          { title: "Reverting to a Wild State" , note: "New Yorker." },
          { title: "Omakase" }                  
        ]
      }
    ]
  },
  {
    id: "tv-shows",
    title: "TV Shows",
    countLabel: "16 entries",
    description: "Prestige television, sci-fi concept shows, crime sagas, and a few emotionally ruinous favorites.",
    groups: [
      {
        title: "Television",
        description: "Series and standout seasons.",
        items: [
          { title: "Westworld" , note: "Season 1." },
          { title: "True Detective" , note: "Season 1." },
          { title: "Normal People" },
          { title: "Narcos" },
          { title: "Narcos: Mexico" },
          { title: "Breaking Bad" },
          { title: "Better Call Saul" },
          { title: "Black Mirror" },
          { title: "Bandersnatch" },
          { title: "Sherlock" , note: "Seasons 1–2." },
          { title: "House of Cards" , note: "Seasons 1–3." },
          { title: "Love, Death & Robots" , note: "Favorite episodes: Beyond the Aquila Rift, The Witness, Good Hunting, Lucky 13, The Tall Grass, Bad Traveling, The Very Pulse of the Machine, Jibaro." },
          { title: "Game of Thrones" , note: "Seasons 1–3." },
          { title: "Alice in Borderland" },
          { title: "Altered Carbon" , note: "Season 1." },
          { title: "Pride and Prejudice" , note: "1995." },
          { title: "Euphoria" , note: "Season 1." },
          { title: "The Boys" },
          { title: "Stranger Things" }
        ]
      }
    ]
  },   
{
          { title: "Disco Elysium" },
          { title: "Deltarune" },
          { title: "Spiritfarer" },
          { title: "Outer Wilds" },
          { title: "Pokémon Mystery Dungeon: Explorers of Sky" },
          { title: "The World Ends With You" },
          { title: "Clair Obscur: Expedition 33" },
          { title: "Silksong" },
          { title: "Black Myth: Wukong" },
          { title: "Portal 1–2" },
          { title: "Final Fantasy IV" },
          { title: "Infinity Blade 1–3" , note: "iPad." },
          { title: "It Takes Two" },
          { title: "Cuphead" },
          { title: "Pokémon Legends: Arceus" },
          { title: "Balatro" , note: "Mobile." },
          { title: "Mario Kart DS" },
          { title: "Mario Kart 8" },
          { title: "Hades" },
          { title: "Super Smash Bros. Ultimate" },
          { title: "Journey" , note: "Mobile." },
          { title: "Kirby: Nightmare in Dreamland" },
          { title: "Detroit: Become Human" },
          { title: "Civilization IV" },
          { title: "Civilization V" },
          { title: "Life is Strange" },
          { title: "Animal Crossing: New Horizons" },
          { title: "Gaia Online" }
        ]
      }
    ]
  }
];

function createCategoryIndex(categories) {
  const container = document.getElementById("categoryIndex");
  if (!container) return;

  container.innerHTML = categories
    .map(
      (category) => `
        <a class="category-chip" href="#${category.id}">
          <strong>${category.title}</strong>
          <small>${category.countLabel}</small>
        </a>
      `
    )
    .join("");
}
function createFavoritesContent(categories) {
  const container = document.getElementById("favoritesContent");
  if (!container) return;

  container.innerHTML = categories
    .map(
      (category) => `
        <section class="favorite-section" id="${category.id}">
          <div class="favorite-section-header">
            <p class="eyebrow">${category.countLabel}</p>
            <h2>${category.title}</h2>
            <p class="favorite-section-description">${category.description}</p>
          </div>

          <div class="favorite-subgroups-grid">
            ${category.groups
              .map(
                (group) => `
                  <article class="favorite-subgroup">
                    <h3>${group.title}</h3>
                    <p class="favorite-subgroup-copy">${group.description}</p>
                    <div class="favorite-items-grid">
                      ${group.items
                        .map(
                          (item) => `
                            <div class="favorite-list-card">
                              <h4>${item.title}</h4>
                              ${item.note ? `<p class="favorite-note">${item.note}</p>` : ""}
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

createCategoryIndex(favoritesData);
createFavoritesContent(favoritesData);
