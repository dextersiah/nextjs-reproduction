import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Make a new next response to set cookies
        const nextResponse = new NextResponse(JSON.stringify({
            success: true,
        }), {
            status: 200,
        });

        nextResponse.cookies.set('access-token', 'my-token', {
            secure: false,
            httpOnly: true,
            path: '/',
        })

        return nextResponse

    } catch (error: any) {
        return NextResponse.json(JSON.parse('Error'))
    }

}