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
    isLongBlurb && !expanded ? `${member.blurb.slice(0, BLURB_PREVIEW_LENGTH).trimEnd()}…` : member.blurb

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start gap-4">
        {/* EC1 / EC4: fixed-size circular frame handles missing photos and
            inconsistent source dimensions/aspect ratios consistently. */}
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photoUrl}
            alt={member.name}
            onError={() => setImgError(true)}
            className="h-16 w-16 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {getInitials(member.name)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          {/* EC3: long name/role wraps normally within the flexible column
              instead of forcing the card wider or overflowing. */}
          <p className="font-semibold leading-snug break-words">{member.name}</p>
          <p className="text-sm text-zinc-500 break-words">{member.role}</p>
        </div>
      </div>

      {/* EC2: long blurbs are clamped with a toggle instead of stretching
          the card or getting cut off. */}
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 break-words">{displayedBlurb}</p>
      {isLongBlurb && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-sm font-medium text-zinc-900 hover:underline dark:text-white"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}
