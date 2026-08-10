import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-50 px-4 dark:bg-zinc-950">
      {/* Decorative background accents — purely visual, no effect on functionality. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-800/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-zinc-300/50 blur-3xl dark:bg-zinc-700/30"
      />

      <div className="relative w-full max-w-sm">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
            <span className="text-sm font-bold">
              {(process.env.NEXT_PUBLIC_APP_NAME ?? 'A')[0]}
            </span>
          </div>
          <span className="text-sm font-medium text-zinc-500">
            {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900">
          {children}
        </div>
      </div>
    </div>
  )
}
