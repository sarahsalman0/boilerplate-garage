import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07060B] px-4 py-12">
      {/* Signature: a faint circuit/qubit lattice covering the void — the
          one bold element in this design, kept quiet everywhere else. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.09]"
      >
        <defs>
        <pattern id="orbitalGrid" width="64" height="64" patternUnits="userSpaceOnUse">
          <circle cx="32" cy="32" r="14" fill="none" stroke="#8B7CF6" strokeWidth="0.75" />
          <circle cx="32" cy="32" r="2" fill="#8B7CF6" />
        </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#orbitalGrid)" />
      </svg>

      {/* Ambient glow — quiet, off to one side, not a centered generic blob. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[100px]"/>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#4C1D95]/[0.08] blur-[100px]"
      />

      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          {/* Atom-orbital badge — concentric rings around a pulsing qubit. */}
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
          <circle
             cx="20"
             cy="20"
             r="14"
             fill="none"
             stroke="#8B7CF6"
             strokeOpacity="0.35"
             strokeWidth="1.2"
            />
            <circle
               cx="20"
               cy="20"
               r="8"
               fill="none"
               stroke="#A78BFA"
               strokeOpacity="0.75"
               strokeWidth="1.2"
            />
+            <circle cx="20" cy="20" r="2.5" fill="#C4B5FD" className="motion-safe:animate-pulse" />
          </svg>
          <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-[#6F6B87] uppercase">
          {process.env.NEXT_PUBLIC_APP_NAME || 'Interactive QKD Learning Platform'}
            </p>
            <div className="mx-auto mt-2 h-px w-16 bg-gradient-to-r from-transparent via-[#8B7CF6]/70 to-transparent" />
          </div>
        </div>

        <div className="rounded-lg border border-[#211E2C] bg-[#0F0D16] p-8 shadow-[0_0_60px_-15px_rgba(139,124,246,0.15)]">
          {children}
        </div>
      </div>
    </div>
  )
}
