import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag");

    if (tag) {
        console.info(tag, request.nextUrl);
        revalidateTag(tag);
        return NextResponse.json({ revalidated: true });
    }

    return NextResponse.json({ revalidated: false });
}
