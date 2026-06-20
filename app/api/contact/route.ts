import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  interests?: string[];
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();
  const interests = Array.isArray(body.interests)
    ? body.interests.filter((x) => typeof x === "string").slice(0, 10)
    : [];

  // Server-side validation (mirrors the client).
  if (!name || !EMAIL_RE.test(email) || message.length < 8) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a short message." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  // Use a verified domain sender once set up; falls back to Resend's shared
  // testing sender so the form works out of the box during development.
  const from = process.env.RESEND_FROM || "Kinsey Lawrence <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable."
    );
    return NextResponse.json(
      {
        error:
          "Email isn't configured on the server yet. Please email directly or try again later.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const interestLine = interests.length
    ? interests.map(escapeHtml).join(", ")
    : "—";

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#2b2620;line-height:1.6">
      <h2 style="margin:0 0 16px">New inquiry from the website</h2>
      <p style="margin:0 0 6px"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 6px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 6px"><strong>Phone:</strong> ${
        phone ? escapeHtml(phone) : "—"
      }</p>
      <p style="margin:0 0 16px"><strong>Interested in:</strong> ${interestLine}</p>
      <p style="margin:0 0 6px"><strong>Message:</strong></p>
      <p style="margin:0;white-space:pre-wrap;background:#f3ecdf;padding:14px 16px;border-radius:10px">${escapeHtml(
        message
      )}</p>
    </div>
  `;

  const text = [
    "New inquiry from the website",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Interested in: ${interests.length ? interests.join(", ") : "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New session inquiry — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again." },
      { status: 500 }
    );
  }
}
