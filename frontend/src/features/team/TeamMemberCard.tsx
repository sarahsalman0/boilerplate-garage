'use client'

import { useState } from 'react'
import type { TeamMember } from './types'

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

const BLURB_PREVIEW_LENGTH = 160

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const showPhoto = Boolean(member.photoUrl) && !imgError
  const isLongBlurb = member.blurb.length > BLURB_PREVIEW_LENGTH
  const displayedBlurb =
    isLongBlurb && !expanded
      ? `${member.blurb.slice(0, BLURB_PREVIEW_LENGTH).trimEnd()}…`
      : member.blurb

  return (
    <div className="rounded-lg border border-[#211E2C] bg-[#0F0D16] p-6">
      <div className="flex items-start gap-4">
        {/* EC1 / EC4: fixed-size ringed frame handles missing photos and
            inconsistent source dimensions/aspect ratios consistently. */}
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photoUrl}
            alt={member.name}
            onError={() => setImgError(true)}
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-1 ring-[#8B7CF6]/30"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#211E2C] bg-[#14121C] text-sm font-semibold text-[#A78BFA]">
            {getInitials(member.name)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          {/* EC3: long name/role wraps normally within the flexible column
              instead of forcing the card wider or overflowing. */}
         <p className="leading-snug font-semibold break-words text-[#F1EDFB]">{member.name}</p>
         <p className="mt-0.5 font-mono text-[11px] tracking-widest break-words text-[#6F6B87] uppercase">
            {member.role}
          </p>
        </div>
      </div>

      {/* EC2: long blurbs are clamped with a toggle instead of stretching
          the card or getting cut off. */}
      <p className="mt-4 text-sm break-words text-[#948FAF]">{displayedBlurb}</p>
      {isLongBlurb && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm font-medium text-[#8B7CF6] hover:underline"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}
