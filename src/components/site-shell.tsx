import Link from "next/link"
import type { ReactNode } from "react"

const navLinks = [
  { label: "PUBLICATIONS", href: "/publications" },
  { label: "FAVORITES", href: "/favorites" },
  { label: "CONTACT", href: "/contact" },
]

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-20 flex items-center justify-end px-6 py-6 sm:px-12 lg:px-16"
          : "flex w-full items-baseline justify-between px-6 py-6 sm:px-12 lg:px-16"
      }
    >
      {!overlay && (
        <Link
          href="/"
          className="font-body text-sm font-medium tracking-[0.12em] text-[var(--ds-neutral-500)] uppercase transition-colors hover:text-[var(--ds-accent-300)]"
        >
          Home
        </Link>
      )}
      <nav className="flex gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              overlay
                ? "text-sm text-white/60 transition-colors hover:text-white"
                : "text-sm text-[var(--ds-neutral-400)] transition-colors hover:text-[var(--ds-accent-300)]"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[73.75rem] px-6 pt-6 pb-10 text-center text-xs text-[var(--ds-neutral-600)] sm:px-12">
      Strategy &amp; Operations · Brooklyn, NY · English / 中文 · Currently
      writing something.
    </footer>
  )
}

export function InnerShell({ children }: { children: ReactNode }) {
  return (
    <div className="font-body flex min-h-screen flex-col bg-[var(--ds-bg)] text-[var(--ds-text)]">
      <SiteNav />
      <div className="full-divider h-px" />
      {children}
      <Footer />
    </div>
  )
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-heading m-0 text-[2.75rem] leading-[1.1] font-medium tracking-[-0.01em] text-[var(--ds-text)]">
      {children}
    </h1>
  )
}

export function Divider() {
  return <div className="content-divider h-px" />
}
