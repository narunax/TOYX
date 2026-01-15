import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// 送信元定数
const FROM_ADDRESS = 'TOYX <main@toyx.jp>';
const ADMIN_ADDRESS = 'narux@toyx.jp';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Admin向けとUser向けの2通を並列送信
        const [adminResponse, userResponse] = await Promise.all([
            // 1. 管理者 (narux) への通知
            resend.emails.send({
                from: FROM_ADDRESS,
                to: [ADMIN_ADDRESS],
                subject: `[Contact] ${name} 様よりお問い合わせ`,
                replyTo: email,
                html: `
                    <div style="font-family: sans-serif; color: #333;">
                        <h2>Webサイトよりお問い合わせがありました</h2>
                        <hr style="border: 0; border-bottom: 1px solid #eee; margin: 20px 0;" />
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <pre style="background: #f4f4f5; padding: 15px; border-radius: 4px; font-family: sans-serif;">${message}</pre>
                    </div>
                `,
            }),

            // 2. ユーザー (投稿者) への自動返信
            resend.emails.send({
                from: FROM_ADDRESS,
                to: [email],
                subject: `【TOYX】お問い合わせを受け付けました`,
                html: `
                    <div style="font-family: 'Hiragino Mincho ProN', 'MS PMincho', serif; line-height: 1.8; color: #1a202c; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #e2e8f0;">
                        <h2 style="font-size: 18px; font-weight: 300; border-bottom: 1px solid #f43f5e; padding-bottom: 10px; margin-bottom: 30px; letter-spacing: 0.1em;">
                            お問い合わせありがとうございます
                        </h2>
                        
                        <p style="font-size: 14px; margin-bottom: 24px;">
                            ${name} 様
                        </p>

                        <p style="font-size: 14px; margin-bottom: 24px;">
                            TOYX (稲葉) です。<br />
                            この度は、問いを共有いただきありがとうございます。
                        </p>

                        <p style="font-size: 14px; margin-bottom: 24px;">
                            内容を拝読し、思索の準備を整えた上で、<br />
                            通常24時間以内に改めてご連絡差し上げます。
                        </p>

                        <p style="font-size: 14px; margin-bottom: 40px;">
                            対話の始まりを、静かにお待ちいただければ幸いです。
                        </p>

                        <div style="background-color: #f8fafc; padding: 20px; margin-bottom: 40px;">
                            <p style="font-size: 12px; color: #64748b; margin-bottom: 8px;">送信内容の控え：</p>
                            <p style="font-size: 13px; color: #334155; white-space: pre-wrap;">${message}</p>
                        </div>

                        <div style="border-top: 1px solid #edf2f7; pt: 20px; text-align: center;">
                            <a href="https://toyx.jp" style="font-size: 12px; color: #94a3b8; text-decoration: none; letter-spacing: 0.2em;">TOYX.JP</a>
                        </div>
                    </div>
                `,
            })
        ]);

        // エラーハンドリング
        if (adminResponse.error || userResponse.error) {
            console.error('Email Send Error:', adminResponse.error, userResponse.error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
