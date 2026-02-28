import { NextResponse } from "next/server";

export async function POST(req) {
    const { username, password } = await req.json();

    try {
        const res = await fetch("https://app.athena-erp.cloud/api/method/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usr: username, pwd: password }),
            redirect: "manual",
        });

        // Ambil cookie dari ERPNext
        const setCookie = res.headers.get("set-cookie");

        if (!setCookie) {
            return NextResponse.json({ success: false, message: "Wrong username or password" });
        }

        // Kirim cookie ke browser
        const response = NextResponse.json({ success: true });
        response.headers.append(
            "Set-Cookie",
            `${setCookie}; Path=/; HttpOnly; Secure; SameSite=Lax`
        );

        return response;
    } catch (err) {
        console.error(err);
        return NextResponse.json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
}