import Image from "next/image"

import { ContactForm } from "@/components/contact-form"
import { PageTitle } from "@/components/site-shell"
import mountainImage from "@/imports/backgrounds/unknown-pleasures.png"

export default function ContactPage() {
  return (
    <main className="relative flex-1">
      <Image
        src={mountainImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-[rgba(6,5,3,0.76)]" />
      <div className="relative z-10 mx-auto w-full max-w-[73.75rem] px-6 py-16 sm:px-12 sm:pb-24">
        <PageTitle>Leave a note</PageTitle>
        <p className="mt-5 text-sm leading-relaxed text-[var(--ds-neutral-300)]">
          Startup questions, book club discussions, story editing swaps, strong
          opinions against my favorites — all notes are welcome!
        </p>
        <ContactForm />
      </div>
    </main>
  )
}
