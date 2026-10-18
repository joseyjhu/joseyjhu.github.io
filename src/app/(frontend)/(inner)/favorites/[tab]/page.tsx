import { notFound } from "next/navigation"

import { favoriteCategoryIds, FavoritesView } from "@/components/favorites-view"

export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return favoriteCategoryIds.map((tab) => ({ tab }))
}

export default async function FavoritesTabPage({
  params,
}: {
  params: Promise<{ tab: string }>
}) {
  const { tab } = await params
  if (!favoriteCategoryIds.includes(tab)) notFound()

  return <FavoritesView activeId={tab} />
}
