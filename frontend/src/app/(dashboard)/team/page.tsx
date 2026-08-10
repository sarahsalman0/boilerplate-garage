import type { Metadata } from 'next'
import { PageHeader } from '@/components/layout/PageHeader'
import { TeamMemberCard } from '@/features/team/TeamMemberCard'
import { team } from '@/features/team/data'

export const metadata: Metadata = {
  title: 'Team',
}

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <PageHeader title={team.teamName} description={team.projectName} />

      {/* EC5: 1 column on small screens, up to 3 on large — matches the
          existing dashboard grid pattern. */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
