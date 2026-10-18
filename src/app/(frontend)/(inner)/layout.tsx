import type { ReactNode } from "react"

import { InnerShell } from "@/components/site-shell"

export default function InnerLayout({ children }: { children: ReactNode }) {
  return <InnerShell>{children}</InnerShell>
}
