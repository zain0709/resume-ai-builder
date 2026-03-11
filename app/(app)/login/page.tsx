import { signInWithGoogle } from './actions'
import GoogleButton from './GoogleButton'

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Left: Login Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-24 xl:px-32">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>auto_awesome</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">ResumAI</span>
          </div>

          {/* Welcome */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
              Welcome back
            </h2>
            <p className="text-sm text-slate-600">
              Continue building your professional future.
            </p>
          </div>

          {/* Google Button */}
          <div className="mt-10">
            <form action={signInWithGoogle}>
              <GoogleButton />
            </form>
          </div>

          <p className="mt-6 text-xs text-center text-slate-400">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      {/* Right: Hero (hidden on mobile) */}
      <div className="relative hidden w-0 flex-1 lg:block bg-gradient-to-b from-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_-20%,#3c83f6,transparent)]"></div>
        <div className="relative flex h-full flex-col items-center justify-center px-12 text-center text-white">
          <div className="max-w-xl">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold leading-6 text-blue-300 ring-1 ring-inset ring-blue-600/30">
              AI-Powered Career Growth
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Unlock your career potential with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our advanced algorithms analyze thousands of successful job applications to help you create a resume that stands out to recruiters and beats Applicant Tracking Systems (ATS).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
