import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail, CalendarHeart } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveals from "@/components/Reveals";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You — Kinsey Lawrence",
  description: "Your session is booked. Thank you.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <Reveals />

      <main>
        <section
          className="section page-head"
          style={{ textAlign: "center", paddingBottom: "clamp(72px,10vw,140px)" }}
        >
          <div className="wrap wrap-narrow">
            <span
              className="reveal"
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "var(--sage-deep)",
                color: "var(--paper)",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 26px",
              }}
            >
              <Check width={32} height={32} strokeWidth={2} />
            </span>
            <p className="eyebrow center reveal">Booking Confirmed</p>
            <h1 className="reveal d1">
              Thank you — your session is{" "}
              <span className="serif-italic">booked</span>.
            </h1>
            <p
              className="lead reveal d2"
              style={{ margin: "1.3rem auto 0", maxWidth: "56ch" }}
            >
              Your payment was successful and your session is confirmed. A
              confirmation email with all the details is on its way to your
              inbox. I look forward to holding this space with you.
            </p>

            <div
              className="reveal d2"
              style={{
                margin: "34px auto 0",
                maxWidth: "540px",
                textAlign: "left",
                display: "grid",
                gap: "8px",
              }}
            >
              <div className="contact-method" style={{ borderTop: "none" }}>
                <span className="ic">
                  <Mail strokeWidth={1.6} />
                </span>
                <div>
                  <b>Check your inbox</b>
                  <span>
                    Your confirmation and session details arrive by email. If
                    you don&apos;t see it, please check your spam folder.
                  </span>
                </div>
              </div>
              <div className="contact-method">
                <span className="ic">
                  <CalendarHeart strokeWidth={1.6} />
                </span>
                <div>
                  <b>In-person sessions</b>
                  <span>
                    If your session is in person in Kanata, Ontario, I&apos;ll
                    share the exact address privately before we meet.
                  </span>
                </div>
              </div>
            </div>

            <div
              className="reveal d3"
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "38px",
              }}
            >
              <Link href="/" className="btn">
                Return Home
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Book Another Session
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
