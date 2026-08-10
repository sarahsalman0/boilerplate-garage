import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070B12] px-4 py-12">
      {/* Signature: a faint circuit/qubit lattice covering the void — the
          one bold element in this design, kept quiet everywhere else. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      >
        <defs>
          <pattern id="lattice" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.6" fill="#4FD1C5" />
            <path d="M4 4 L56 4 M4 4 L4 56 M4 4 L60 60" stroke="#4FD1C5" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice)" />
      </svg>

      {/* Ambient glow — quiet, off to one side, not a centered generic blob. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#4FD1C5]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#E8A33D]/[0.06] blur-[100px]"
      />

      <div className="relative w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          {/* Hexagonal node badge — a monitored qubit, not a generic logo mark. */}
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
            <path
              d="M20 2 L35.3 11 V29 L20 38 L4.7 29 V11 Z"
              fill="none"
              stroke="#4FD1C5"
              strokeOpacity="0.5"
              strokeWidth="1.2"
            />
            <circle cx="20" cy="20" r="3" fill="#4FD1C5" className="motion-safe:animate-pulse" />
          </svg>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-[#6B7A8D] uppercase">
              {process.env.NEXT_PUBLIC_APP_NAME || 'Quantum Risk Readiness Platform'}
            </p>
            <div className="mx-auto mt-2 h-px w-16 bg-gradient-to-r from-transparent via-[#4FD1C5]/70 to-transparent" />
          </div>
        </div>

        <div className="rounded-lg border border-[#1C2836] bg-[#0D131C] p-8 shadow-[0_0_60px_-15px_rgba(79,209,197,0.15)]">
          {children}
        </div>
      </div>
    </div>
  )
}
