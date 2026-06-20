import type { Metadata } from "next";
import Link from "next/link";
import { CalendarHeart, Clock, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveals from "@/components/Reveals";
import ContactForm from "@/components/ContactForm";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Kinsey Lawrence",
  description:
    "Reach out to Kinsey Lawrence to begin a soul insight & energetic clarity session, or book directly online.",
};

export default function ContactPage() {
  return (
    <>
      <Nav active="Contact" />
      <Reveals />

      <main>
        <section className="section page-head">
          <div className="wrap">
            <div className="crumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
            <p className="eyebrow">Get in Touch</p>
            <h1>Let&apos;s begin a conversation.</h1>
            <p className="lead">
              Tell me a little about where you are and what you&apos;re hoping
              for. I read every message personally and will reply soon. Prefer to
              pick a time straight away? You can book online.
            </p>
          </div>
        </section>

        <section className="section bg-paper" style={{ paddingTop: 0 }}>
          <div className="wrap split">
            <div className="reveal">
              <ContactForm />
            </div>

            <div className="contact-aside reveal d1">
              <h3 style={{ marginBottom: ".4rem" }}>Other ways to reach me</h3>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="ic">
                  <CalendarHeart strokeWidth={1.6} />
                </span>
                <div>
                  <b>Book online</b>
                  <span>Pick a time that suits you on Calendly.</span>
                </div>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-method">
                <span className="ic">
                  <Mail strokeWidth={1.6} />
                </span>
                <div>
                  <b>Email</b>
                  <span>{CONTACT_EMAIL}</span>
                </div>
              </a>
              <div className="contact-method">
                <span className="ic">
                  <Clock strokeWidth={1.6} />
                </span>
                <div>
                  <b>Response time</b>
                  <span>Usually within a day or two.</span>
                </div>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ marginTop: "28px", alignSelf: "flex-start" }}
              >
                Book a Session
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
