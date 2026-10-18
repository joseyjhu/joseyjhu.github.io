import Image from "next/image"

import forestImage from "@/imports/backgrounds/the-kingdom.png"
import { SiteNav } from "@/components/site-shell"

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Image
        src={forestImage}
        alt="Forest painting by Matthew Wong"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(6,6,4,0.60)]" />
      <SiteNav overlay />

      <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center select-none">
        <h1 className="font-display m-0 whitespace-nowrap text-[clamp(2.75rem,6.5vw,5.5rem)] leading-none font-light tracking-[0.1em] text-white uppercase">
          Josephina Hu
        </h1>
        <p className="font-chinese mt-5 text-[clamp(2.5rem,5vw,4rem)] tracking-[0.25em] text-white/80">
          胡佳越
        </p>
      </div>

      <p className="absolute right-0 bottom-7 left-0 px-6 text-center text-xs tracking-[0.1em] text-white/40">
        Strategy &amp; Operations · Brooklyn, NY · English / 中文 · Currently
        writing something.
      </p>
    </main>
  )
}
