import { createClient } from '@/lib/supabase/server'
import { signOut } from './actions'
import Link from 'next/link'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-lg shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '16px' }}>auto_awesome</span>
              </div>
              <span className="text-lg font-bold tracking-tight">ResumAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{user?.email}</span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md font-medium transition-colors"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 shadow-sm shrink-0">
          <nav className="p-3 flex flex-col gap-1 pt-4">
            <NavLink href="/dashboard" icon="dashboard" label="Dashboard" />
            <NavLink href="/bullets" icon="edit_note" label="Bullets" comingSoon />
            <NavLink href="/generate" icon="auto_awesome" label="Generate" comingSoon />
            <NavLink href="/applications" icon="description" label="Applications" comingSoon />
          </nav>
        </aside>

        <main className="flex-1 p-8 min-w-0">{children}</main>
      </div>
    </div>
  )
}

function NavLink({
  href,
  icon,
  label,
  comingSoon = false,
}: {
  href: string
  icon: string
  label: string
  comingSoon?: boolean
}) {
  if (comingSoon) {
    return (
      <div className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed select-none">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-[10px] font-semibold bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">Soon</span>
      </div>
    )
  }

  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium text-sm"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
      {label}
    </Link>
  )
}
