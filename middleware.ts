import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'


export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const protectedPaths = ['/dashboard']
  const pathname = request.nextUrl.pathname

  const isProtected = protectedPaths.some((p) =>
    pathname === p || pathname.startsWith(`${p}/`),
  )

  if (!user && isProtected) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return res
}
