const favoritesData = [
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
