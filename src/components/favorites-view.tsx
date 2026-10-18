import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

import { categories, type FavoriteItem } from "@/data/favorites"
import { animePosters, filmPosters } from "@/data/poster-paths"
import baldursGate3Cover from "@/imports/games/bg3.jpg"
import breathOfTheWildCover from "@/imports/games/botw.jpeg"
import clairObscurImg from "@/imports/games/clair-obscur.png"
import cupheadCover from "@/imports/games/cuphead.jpeg"
import discoElysiumCover from "@/imports/games/disco_elysium.jpeg"
import ghostOfTsushimaCover from "@/imports/games/ghost_of_tsushima.jpg"
import hadesCover from "@/imports/games/hades.jpeg"
import infinityBladeCover from "@/imports/games/infinity_blade.jpg"
import omoriCover from "@/imports/games/omori.jpeg"
import outerWildsCover from "@/imports/games/outer_wilds.jpeg"
import explorersOfSkyCover from "@/imports/games/pmd_explorers_of_sky.jpeg"
import pokemonEmeraldCover from "@/imports/games/pokemon_emerald.jpg"
import spiritfarerCover from "@/imports/games/spiritfarer.jpeg"
import theWorldEndsWithYouCover from "@/imports/games/the_world_ends_with_you.jpeg"
import undertaleCover from "@/imports/games/undertale.jpg"
import badBehaviorCover from "@/imports/novels/bad_behavior.jpg"
import chemistryCover from "@/imports/novels/chemistry.jpg"
import eyeLevelCover from "@/imports/novels/eye_level.png"
import foundationCover from "@/imports/novels/foundation.webp"
import giovannisRoomCover from "@/imports/novels/giovannis_room.jpeg"
import hyperionCover from "@/imports/novels/hyperion.jpeg"
import interpreterOfMaladiesCover from "@/imports/novels/interpreter_of_maladies.jpeg"
import funnyStoryCover from "@/imports/novels/its_kind_of_a_funny_story.jpg"
import nightSkyCover from "@/imports/novels/night_sky_with_exit_wounds.jpeg"
import storiesOfYourLifeCover from "@/imports/novels/stories_of_your_life.jpeg"
import alchemistCover from "@/imports/novels/the_alchemist.jpeg"
import argonautsCover from "@/imports/novels/the_argonauts.jpeg"
import joyLuckClubCover from "@/imports/novels/the_joy_luck_club.jpeg"
import paperMenagerieCover from "@/imports/novels/the_paper_menagerie.jpg"
import { PageTitle } from "./site-shell"

type ImageSource = StaticImageData | string

const steam = (id: number) =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`

const novelCovers: Record<string, StaticImageData> = {
  "Bad Behavior": badBehaviorCover,
  Chemistry: chemistryCover,
  "Eye Level": eyeLevelCover,
  Foundation: foundationCover,
  "Giovanni's Room": giovannisRoomCover,
  Hyperion: hyperionCover,
  "Interpreter of Maladies": interpreterOfMaladiesCover,
  "It's Kind of a Funny Story": funnyStoryCover,
  "Night Sky with Exit Wounds": nightSkyCover,
  "Stories of Your Life and Others": storiesOfYourLifeCover,
  "The Alchemist": alchemistCover,
  "The Argonauts": argonautsCover,
  "The Joy Luck Club": joyLuckClubCover,
  "The Paper Menagerie and Other Stories": paperMenagerieCover,
}

const gameCovers: Record<string, ImageSource> = {
  "Baldur's Gate 3": baldursGate3Cover,
  Cuphead: cupheadCover,
  "Disco Elysium": discoElysiumCover,
  "Ghost of Tsushima": ghostOfTsushimaCover,
  Hades: hadesCover,
  "Infinity Blade": infinityBladeCover,
  Journey: steam(638230),
  Omori: omoriCover,
  "Outer Wilds": outerWildsCover,
  "Pokémon Emerald": pokemonEmeraldCover,
  "Pokémon Mystery Dungeon: Explorers of Sky": explorersOfSkyCover,
  "Sea of Stars": steam(1244090),
  Spiritfarer: spiritfarerCover,
  "The Legend of Zelda: Breath of the Wild": breathOfTheWildCover,
  "The World Ends with You": theWorldEndsWithYouCover,
  Undertale: undertaleCover,
}

gameCovers["Clair Obscur: Expedition 33"] = clairObscurImg

const imagePositions: Record<string, string> = {
  "Pokémon Emerald": "center top",
  "The World Ends with You": "center top",
}

const displayCategories = categories.map((category) => ({
  ...category,
  label:
    category.id === "fiction"
      ? "Novels"
      : category.id === "movies"
        ? "Films"
        : category.id === "anime"
          ? "Anime"
          : category.label,
  items: [...category.items].sort((a, b) => a.t.localeCompare(b.t)),
}))

export const favoriteCategoryIds = displayCategories.map(
  (category) => category.id,
)

function imageFor(item: FavoriteItem, categoryId: string) {
  if (item.img) return item.img
  if (categoryId === "movies") return filmPosters[item.t]
  if (categoryId === "anime") return animePosters[item.t]
  if (categoryId === "games") return gameCovers[item.t]
  return novelCovers[item.t]
}

function FavoriteCard({
  item,
  categoryId,
}: {
  item: FavoriteItem
  categoryId: string
}) {
  const image = imageFor(item, categoryId)
  const isPoster =
    categoryId === "fiction" ||
    categoryId === "movies" ||
    categoryId === "anime"

  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--ds-radius-lg)] bg-[var(--ds-surface)] shadow-[var(--ds-shadow-sm)]">
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-[var(--ds-neutral-900)] ${
          isPoster ? "aspect-[2/3]" : "aspect-[16/10]"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={`${item.t} cover`}
            fill
            sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: imagePositions[item.t] ?? "center" }}
          />
        ) : (
          <span className="text-[0.6875rem] tracking-[0.1em] text-[var(--ds-neutral-700)] uppercase">
            Poster unavailable
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h2 className="font-heading text-[1.09375rem] leading-[1.3] font-medium text-[var(--ds-text)]">
          {item.t}
        </h2>
        <p className="text-xs text-[var(--ds-neutral-500)]">{item.m}</p>
        <p className="text-[0.84375rem] leading-[1.55] text-[var(--ds-neutral-400)]">
          {item.b}
        </p>
      </div>
    </article>
  )
}

export function FavoritesView({ activeId }: { activeId: string }) {
  const active =
    displayCategories.find((category) => category.id === activeId) ??
    displayCategories[0]

  return (
    <main className="mx-auto w-full max-w-[73.75rem] flex-1 px-6 py-16 sm:px-12 sm:pb-24">
      <PageTitle>Favorites</PageTitle>
      <p className="mt-5 text-sm leading-relaxed text-[var(--ds-neutral-300)]">
        Like the handwritten staff notes at a good bookstore, everything here is
        something Josey loves. And no AI was used to write any of this!!!
      </p>

      <nav className="mt-10 flex flex-wrap gap-2">
        {displayCategories.map((category) => {
          const isActive = category.id === active.id
          return (
            <Link
              key={category.id}
              href={`/favorites/${category.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? "border-[var(--ds-accent-700)] bg-[var(--ds-accent-900)] text-[var(--ds-accent-300)]"
                  : "border-[var(--ds-neutral-800)] text-[var(--ds-neutral-400)] hover:border-[var(--ds-accent-700)] hover:text-[var(--ds-accent-300)]"
              }`}
            >
              {category.label}
              <span className="ml-2 opacity-55">{category.items.length}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-7 grid grid-cols-[repeat(auto-fill,minmax(min(18.5rem,100%),1fr))] gap-4">
        {active.items.map((item) => (
          <FavoriteCard key={item.t} item={item} categoryId={active.id} />
        ))}
      </div>
    </main>
  )
}
