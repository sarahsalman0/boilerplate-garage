import { redirect } from 'next/navigation'
import { getServerSession } from '@/actions/auth.actions'
import { DashboardShell } from '@/components/layout/DashboardShell'

// AC2 / EC7: every route under (dashboard) — including /team — is gated
// here. No verified session cookie means no dashboard markup is ever sent;
// the visitor is bounced to sign-in before render.
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const viewer = await getServerSession()

  if (!viewer) {
    redirect('/auth/signin')
  }

  return <DashboardShell>{children}</DashboardShell>
}
