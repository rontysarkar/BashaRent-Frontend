import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { getAccessToken } from "./services/access-token.service"
import jwt, { JwtPayload } from "jsonwebtoken"

const publicRoutes = ["/", "/properties", "/register", "/login"]

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  let isLogin = false
  let role = null

  const accessToken = await getAccessToken()
  if (accessToken) {
    const decoded = jwt.decode(accessToken) as JwtPayload
    isLogin = true
    role = decoded?.role
  }

  if (isLogin && (pathname === "/login" || pathname === "/register")) {
    if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    } else if (role === "LANDLORD") {
      return NextResponse.redirect(new URL("/landlord-dashboard", request.url))
    } else if (role === "TENANT") {
      return NextResponse.redirect(new URL("/tenant-dashboard", request.url))
    } else {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
  if (isPublicRoute) {
    return NextResponse.next()
  }

  if (pathname.startsWith("/admin-dashboard") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url))
  } else if (
    pathname.startsWith("/landlord-dashboard") &&
    role !== "LANDLORD"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url))
  } else if (pathname.startsWith("/tenant-dashboard") && role !== "TENANT") {
    return NextResponse.redirect(new URL("/not-found", request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
}
