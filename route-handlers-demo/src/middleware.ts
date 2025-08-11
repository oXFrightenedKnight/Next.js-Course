import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"; // Extends standard Response API
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePref = request.cookies.get("theme");
  if (!themePref) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  // METHOD 1 (part 1)
  //return NextResponse.redirect(new URL("/", request.url));

  // METHOD 2 (simpler):
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }

  // Redirect without changing the link:
  if (request.nextUrl.pathname === "/nom") {
    return NextResponse.rewrite(new URL("/hello", request.url));
    // The link is still /nom but the content is from /hello
  }
}

// METHOD 1 (part 2)
//export const config = {
//matcher: "/profile",
//};
