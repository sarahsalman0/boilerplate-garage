'use client'

import { useState } from 'react'
import type { TeamMember } from './types'

// EC1: fallback shown when a member has no photo (or the photo fails to
// load) — first letter of the first and last name, e.g. "Jerome Altamia" -> "JA".
function deriveInitials(fullName: string): string {
  const [first, ...rest] = fullName.trim().split(/\s+/)
  const last = rest.at(-1)
  return `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase()
}

const BLURB_TRUNCATE_AT = 160

// AC4: every card surfaces photo (or initials fallback), name, role, and
// blurb for one member. EC2/EC3: long blurbs are clipped with a
// Read more / Show less toggle instead of stretching or overflowing the
// card, and EC4's fixed circular frame keeps mismatched photo dimensions
// from distorting.
export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)

  const hasUsablePhoto = Boolean(member.photoUrl) && !photoFailed
  const blurbNeedsTruncation = member.blurb.length > BLURB_TRUNCATE_AT

  let visibleBlurb = member.blurb
  if (blurbNeedsTruncation && !isExpanded) {
    visibleBlurb = `${member.blurb.slice(0, BLURB_TRUNCATE_AT).trimEnd()}…`
  }

  return (
    <div className="rounded-lg border border-[#211E2C] bg-[#0F0D16] p-6">
      <div className="flex items-start gap-4">
        {hasUsablePhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photoUrl}
            alt={member.name}
            onError={() => setPhotoFailed(true)}
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-1 ring-[#8B7CF6]/30"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#211E2C] bg-[#14121C] text-sm font-semibold text-[#A78BFA]">
            {deriveInitials(member.name)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="leading-snug font-semibold break-words text-[#F1EDFB]">{member.name}</p>
          <p className="mt-0.5 font-mono text-[11px] tracking-widest break-words text-[#6F6B87] uppercase">
            {member.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm break-words text-[#948FAF]">{visibleBlurb}</p>
      {blurbNeedsTruncation && (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="mt-2 text-sm font-medium text-[#8B7CF6] hover:underline"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}