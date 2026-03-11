import { createClient } from '@/lib/supabase/server'

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const firstName = user?.email?.split('@')[0] ?? 'there'

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, <span className="text-blue-600">{firstName}</span>
        </h1>
        <p className="text-gray-500 mt-1 text-sm">Here&apos;s where you left off on your resume journey.</p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-700">Build Progress</span>
          <span className="text-xs text-gray-400">Day 1 of 5</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }} />
        </div>
        <div className="flex justify-between mt-2">
          {['Auth', 'Database', 'AI', 'Templates', 'Launch'].map((step, i) => (
            <span
              key={step}
              className={`text-xs font-medium ${i === 0 ? 'text-blue-600' : 'text-gray-400'}`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DashboardCard
          icon="edit_note"
          title="My Bullets"
          description="Add and manage your raw job bullets per role."
          status="coming_soon"
        />
        <DashboardCard
          icon="auto_awesome"
          title="AI Enhance"
          description="Turn weak bullets into ATS-optimized achievements."
          status="coming_soon"
        />
        <DashboardCard
          icon="description"
          title="Templates"
          description="Pick from Modern, Classic, or Executive layouts."
          status="coming_soon"
        />
        <DashboardCard
          icon="download"
          title="Export PDF"
          description="Download your polished resume as a PDF file."
          status="coming_soon"
        />
      </div>

      {/* Account */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide mb-1">Logged in as</p>
        <p className="text-sm text-gray-700 font-medium">{user?.email}</p>
      </div>
    </div>
  )
}

function DashboardCard({
  icon,
  title,
  description,
  status,
}: {
  icon: string
  title: string
  description: string
  status: 'active' | 'coming_soon'
}) {
  const isComingSoon = status === 'coming_soon'

  return (
    <div
      className={`bg-white rounded-xl border shadow-sm p-5 flex flex-col gap-3 ${
        isComingSoon ? 'border-gray-100 opacity-60' : 'border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
          <span className="material-symbols-outlined text-blue-600" style={{ fontSize: '18px' }}>{icon}</span>
        </div>
        {isComingSoon && (
          <span className="text-[10px] font-semibold bg-gray-100 text-gray-400 px-2 py-0.5 rounded">Coming soon</span>
        )}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
    </div>
  )
}
