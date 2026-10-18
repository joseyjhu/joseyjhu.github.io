"use client"

import { useState } from "react"
import { BookOpen, GraduationCap, Instagram, Linkedin } from "lucide-react"

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josephinahu/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lovejosaay/",
    Icon: Instagram,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=cF5Wc9EAAAAJ&hl=en",
    Icon: GraduationCap,
  },
  {
    label: "Goodreads",
    href: "https://www.goodreads.com/user/show/123379650-josey",
    Icon: BookOpen,
  },
]

function SteamIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.375rem]">
      <path
        fill="currentColor"
        d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z"
      />
    </svg>
  )
}

export function ContactForm() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  async function send() {
    if (!message.trim()) {
      setStatus("An empty note is very avant-garde, but write something first.")
      return
    }

    setStatus("Sending…")

    try {
      const response = await fetch("https://formspree.io/f/xzzblkgv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.trim(),
          name: subject.trim() || "Anonymous",
        }),
      })

      if (!response.ok) throw new Error("Submission failed")

      setSubject("")
      setMessage("")
      setStatus("Note sent! Talk soon.")
    } catch {
      setStatus("Something went wrong — email me directly at")
    }
  }

  return (
    <>
      <section className="mt-12 rounded-[var(--ds-radius-lg)] border border-white/7 bg-[rgba(18,16,12,0.82)] p-7 backdrop-blur-lg">
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-xs text-[var(--ds-neutral-400)]">
            Subject?
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Hello!"
              className="w-full rounded-[var(--ds-radius-md)] border border-[var(--ds-neutral-800)] bg-[var(--ds-bg)] px-3 py-3 text-sm text-[var(--ds-text)] outline-none focus:border-[var(--ds-accent-600)]"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs text-[var(--ds-neutral-400)]">
            The note
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Dear Josey, there is no chance I'm watching 1,000 episodes of One Piece…"
              rows={6}
              className="w-full resize-y rounded-[var(--ds-radius-md)] border border-[var(--ds-neutral-800)] bg-[var(--ds-bg)] px-3 py-3 text-sm leading-relaxed text-[var(--ds-text)] outline-none focus:border-[var(--ds-accent-600)]"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={send}
              className="font-heading cursor-pointer rounded-[var(--ds-radius-md)] border border-[var(--ds-accent)] bg-transparent px-6 py-2.5 text-sm font-medium text-[var(--ds-accent-300)] transition-colors hover:bg-[var(--ds-accent-900)]"
            >
              Up, up, and away →
            </button>
            {status && (
              <span className="text-xs text-[var(--ds-neutral-500)]">
                {status}
                {status.startsWith("Something went wrong") && (
                  <>
                    {" "}
                    <a
                      href="mailto:joseyjhu@gmail.com"
                      className="text-[var(--ds-accent-300)]"
                    >
                      joseyjhu@gmail.com
                    </a>
                    .
                  </>
                )}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="mb-5 text-xs tracking-[0.1em] text-[var(--ds-neutral-600)] uppercase">
          Find me elsewhere
        </p>
        <div className="flex items-center gap-6">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              className="text-[var(--ds-neutral-400)] transition-colors hover:text-[var(--ds-accent-300)]"
            >
              <Icon className="size-[1.375rem]" />
            </a>
          ))}
          <a
            href="https://steamcommunity.com/id/lovejosaay"
            target="_blank"
            rel="noopener noreferrer"
            title="Steam"
            aria-label="Steam"
            className="text-[var(--ds-neutral-400)] transition-colors hover:text-[var(--ds-accent-300)]"
          >
            <SteamIcon />
          </a>
        </div>
      </section>
    </>
  )
}
