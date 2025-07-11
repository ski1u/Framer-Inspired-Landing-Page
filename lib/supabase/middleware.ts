import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const redirectUnauthRoute = "/sign-in"
const redirectAuthRoute = "/dashboard"

const authRoutes = ["/sign-in", "/sign-up"]
const publicRoutes = ["/", "/auth", "/auth/confirm"]

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()
  const pathname = request.nextUrl.pathname

  if (publicRoutes.includes(pathname)) return supabaseResponse
  if (!user && authRoutes.includes(pathname)) return supabaseResponse
  if (
    !user && !authRoutes.includes(pathname)
  ) {
    const url = request.nextUrl.clone()
    url.pathname = redirectUnauthRoute
    return NextResponse.redirect(url)
  } else if (
    user && authRoutes.includes(pathname)
  ) {
    const url = request.nextUrl.clone()
    url.pathname = redirectAuthRoute
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}