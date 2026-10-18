import Image from "next/image"

import publicationsImage from "@/imports/backgrounds/once-upon-a-time-in-the-west.png"
import { Divider, PageTitle } from "@/components/site-shell"

export default function PublicationsPage() {
  return (
    <main className="relative flex-1">
      <Image
        src={publicationsImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-[rgba(6,5,3,0.76)]" />
      <div className="relative z-10 mx-auto w-full max-w-[73.75rem] px-6 py-16 sm:px-12 sm:pb-24">
        <PageTitle>Publications</PageTitle>
        <p className="mt-5 text-sm leading-relaxed text-[var(--ds-neutral-300)]">
          Josey studied economics, engineering, and creative writing at Stanford
          University. She is grateful for Stanford&apos;s Creative Writing
          Program, Sackett Street Writers&apos; Workshop and Tin House
          Speculative Workshop. Hailing from Nanjing and San Francisco,
          she&apos;s currently writing fiction and working on AI data and
          research.
        </p>

        <h2 className="mt-16 mb-4 text-xs font-normal tracking-[0.14em] text-[var(--ds-accent-400)] uppercase">
          Fiction
        </h2>
        <Divider />
        <div className="grid grid-cols-[6rem_1fr] gap-6 px-2 py-7 sm:grid-cols-[8.75rem_1fr]">
          <p className="pt-0.5 text-sm text-[var(--ds-neutral-500)]">
            Jan 2026
          </p>
          <div>
            <a
              href="https://hawaiipacificreview.org/2026/01/12/all-the-grandfathers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--ds-text)] transition-colors hover:text-[var(--ds-accent-300)]"
            >
              &ldquo;All the Grandfathers&rdquo;
            </a>
            <p className="mt-1.5 text-sm text-[var(--ds-accent-300)]">
              Hawaii Pacific Review
            </p>
          </div>
        </div>

        <h2 className="mt-16 mb-4 text-xs font-normal tracking-[0.14em] text-[var(--ds-accent-400)] uppercase">
          Research
        </h2>
        <Divider />
        <div className="grid grid-cols-[6rem_1fr] gap-6 px-2 py-7 sm:grid-cols-[8.75rem_1fr]">
          <p className="pt-0.5 text-sm text-[var(--ds-neutral-500)]">
            Jan 2025
          </p>
          <div>
            <a
              href="https://arxiv.org/abs/2501.14249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--ds-text)] transition-colors hover:text-[var(--ds-accent-300)]"
            >
              Humanity&apos;s Last Exam
            </a>
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              <a
                href="https://www.nature.com/articles/s41586-025-09962-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ds-accent-300)]"
              >
                Nature
              </a>
              <a
                href="https://arxiv.org/abs/2501.14249"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ds-accent-300)]"
              >
                arXiv
              </a>
              <a
                href="https://labs.scale.com/leaderboard/humanitys_last_exam_text_only"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ds-accent-300)]"
              >
                Scale Labs
              </a>
            </div>
            <div className="mt-5 text-sm leading-relaxed text-[var(--ds-neutral-400)]">
              <p className="mb-1.5 text-[var(--ds-neutral-300)]">
                News coverage
              </p>
              <ul className="flex list-disc flex-col gap-1.5 pl-5">
                <li>
                  <span className="text-[var(--ds-neutral-300)]">
                    The New York Times:{" "}
                  </span>
                  <a
                    href="https://www.nytimes.com/2025/01/23/technology/ai-test-humanitys-last-exam.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ds-accent-300)]"
                  >
                    When A.I. Passes This Test, Look Out
                  </a>
                </li>
                <li>
                  <span className="text-[var(--ds-neutral-300)]">
                    Reuters:{" "}
                  </span>
                  <a
                    href="https://www.reuters.com/technology/artificial-intelligence/ai-experts-ready-humanitys-last-exam-stump-powerful-tech-2024-09-16/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ds-accent-300)]"
                  >
                    AI Experts Ready &apos;Humanity&apos;s Last Exam&apos; to
                    Stump Powerful Tech
                  </a>
                </li>
                <li>
                  <span className="text-[var(--ds-neutral-300)]">
                    The Times:{" "}
                  </span>
                  <a
                    href="https://www.thetimes.com/uk/technology-uk/article/ai-humanitys-last-exam-t3hz8vd79"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ds-accent-300)]"
                  >
                    AI Just a Year From Beating All Experts in Humanity&apos;s
                    Last Exam
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
