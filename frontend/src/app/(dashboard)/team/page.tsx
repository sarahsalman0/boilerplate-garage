import type { Metadata } from 'next'
import { TeamMemberCard } from '@/features/team/TeamMemberCard'
import { team } from '@/features/team/data'

export const metadata: Metadata = {
  title: 'Team',
}

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#1C2836] bg-[#070B12] p-6 sm:p-8">
      {/* Signature: same faint circuit/qubit lattice as the login pages,
          contained to this panel rather than the full viewport. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      >
        <defs>
          <pattern id="teamLattice" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.6" fill="#4FD1C5" />
            <path d="M4 4 L56 4 M4 4 L4 56 M4 4 L60 60" stroke="#4FD1C5" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#teamLattice)" />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#4FD1C5]/10 blur-[100px]"
      />

      <div className="relative space-y-8">
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
              <path
                d="M20 2 L35.3 11 V29 L20 38 L4.7 29 V11 Z"
                fill="none"
                stroke="#4FD1C5"
                strokeOpacity="0.5"
                strokeWidth="1.2"
              />
              <circle cx="20" cy="20" r="3" fill="#4FD1C5" />
            </svg>
            <p className="font-mono text-[11px] tracking-[0.25em] text-[#6B7A8D] uppercase">
              Team Roster
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#E7EEF5]">
              {team.teamName}
            </h1>
            <p className="mt-1 text-sm text-[#8697A8]">{team.projectName}</p>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-[#4FD1C5]/70 to-transparent sm:mx-0" />
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
