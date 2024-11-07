
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const protectedRoutes = ["/dashboard", "/admin", "/user"];

    // Check if the requested path is protected and if the user is not authenticated
    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !token) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    // Allow request to proceed if authenticated or accessing other routes
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/user/:path*"], // Protect specific routes
};
