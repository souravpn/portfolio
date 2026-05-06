import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const subject = (formData.get("subject") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();
  const files = formData.getAll("attachments") as File[];

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    }))
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Bot" <${process.env.GMAIL_USER}>`,
    to: "souravpn1985@gmail.com",
    replyTo: `"${name}" <${email}>`,
    subject: `[Portfolio_bot] ${subject || "(No subject)"}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#3b82f6">New message from your portfolio</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:#6b7280;width:80px">From</td><td><strong>${name}</strong> &lt;${email}&gt;</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280">Subject</td><td>${subject || "(none)"}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
        <div style="white-space:pre-wrap;line-height:1.6">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
        ${attachments.length > 0 ? `<p style="color:#6b7280;margin-top:16px">${attachments.length} attachment(s) included.</p>` : ""}
      </div>
    `,
    attachments,
  });

  return NextResponse.json({ ok: true });
}
