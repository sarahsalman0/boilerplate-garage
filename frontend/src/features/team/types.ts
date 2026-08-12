export interface TeamMember {
  id: string
  name: string
  role: string
  blurb: string
  /** Omit when no photo is available — TeamMemberCard falls back to initials. */
  photoUrl?: string
}

export interface TeamInfo {
  teamName: string
  projectName: string
  members: TeamMember[]
}
