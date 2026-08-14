import type { Metadata } from 'next'
import { TeamMemberCard } from '@/features/team/TeamMemberCard'
import { team } from '@/features/team/data'

export const metadata: Metadata = {
  title: 'Team',
}

export default function TeamPage() {
  return (
        <div className="relative overflow-hidden rounded-xl border border-[#211E2C] bg-[#07060B] p-6 sm:p-8">
      {/* Signature: same faint grid of atom-orbital rings as the auth pages, contained to this panel rather than the full viewport. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.09]"
      >
        <defs>
        <pattern id="teamOrbitalGrid" width="64" height="64" patternUnits="userSpaceOnUse">
        <circle cx="32" cy="32" r="14" fill="none" stroke="#8B7CF6" strokeWidth="0.75" />
        <circle cx="32" cy="32" r="2" fill="#8B7CF6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#teamOrbitalGrid)" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#7C3AED]/10 blur-[100px]" />

      <div className="relative space-y-8">
        <div className="flex flex-col items-start gap-3 text-left">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
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
              <circle cx="20" cy="20" r="2.5" fill="#C4B5FD" />
            </svg>
            <p className="font-mono text-[11px] tracking-[0.25em] text-[#6F6B87] uppercase">
              Team Roster
            </p>
          </div>
          <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#F1EDFB]">
              {team.teamName}
            </h1>
            <p className="mt-1 text-sm text-[#948FAF]">{team.projectName}</p>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-[#8B7CF6]/70 to-transparent" />
        </div>

        {/* EC5: 1 column on small screens, up to 3 on large. */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
