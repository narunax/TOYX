import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

// Initialize with a fallback to prevent build errors if env var is missing
const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

export async function POST(req: NextRequest) {
    try {
        const { name, email, company, message } = await req.json();

        // Basic Validation (Enhance with Zod if needed)
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // In a real scenario, this would send an email. 
        // For now, we simulate success or log if keys are missing to avoid runtime crashes during dev.
        if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY is not set. Mocking successful email sending.");
            return NextResponse.json({ success: true, mocked: true });
        }

        const data = await resend.emails.send({
            from: "TOYX Website <onboarding@resend.dev>", // Update with verified domain
            to: ["naruhito.inaba@gmail.com"], // Update with actual owner email or env var
            subject: `[TOYX Contact] Message from ${name}`,
            html: `
        <h1>New Contact from TOYX Website</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Email sending invalid:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
