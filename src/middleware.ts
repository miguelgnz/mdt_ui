import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = ["/artist-profile"];
const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Get cookie from request
  const cookie = req.cookies.get("access-token")?.value;

  // Save token in local storage
  // if (cookie) {
  //   localStorage.setItem("access-token", cookie);
  // }

  if (!cookie && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // if (cookie && isPublicRoute) {
  //   console.log("Condition 2 met");

  //   return NextResponse.redirect(new URL("/artist-profile", req.url));
  // }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
