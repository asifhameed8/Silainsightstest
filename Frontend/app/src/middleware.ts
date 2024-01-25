import { isTokenExpired } from '@utils/functions';
import { NextRequest, NextResponse } from 'next/server';
// import { verifyJwtToken } from "@/libs/auth";
const AUTH_PAGES = ['/login', '/register', '/', '/profile'];

const isAuthPages = (url: string) => AUTH_PAGES.some((page) => page.startsWith(url));
type ILocalStorageResult = {
    value: string | null;
};
export async function middleware(request: NextRequest) {
    const { url, nextUrl } = request;
    const { value }: ILocalStorageResult = localStorage.getItem('user') ?? { value: null };
    const data = value ? JSON.parse(value) : null;

    // const hasVerifiedToken = token && (await verifyJwtToken(token));
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);
    const isExpired = isTokenExpired(data?.access_token);
    if (isAuthPageRequested) {
        if (isExpired) {
            const response = NextResponse.next();
            localStorage.removeItem('token'); // Remove the token from localStorage
            return response;
        }

        const response = NextResponse.redirect(new URL(`/`, url));
        return response;
    }

    if (isExpired) {
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set('next', nextUrl.pathname);

        const response = NextResponse.redirect(new URL(`/login?${searchParams}`, url));
        localStorage.removeItem('token'); // Remove the token from localStorage

        return response;
    }

    return NextResponse.next();
}

export const config = { matcher: [/* '/feeds', */ '/panel/:path*', '/profile/:path*'] };
