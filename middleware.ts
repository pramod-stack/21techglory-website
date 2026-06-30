import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/elements')) {
    return new NextResponse('Gone', { status: 410 });
  }
}

export const config = {
  matcher: ['/elements', '/elements/:path*'],
};
