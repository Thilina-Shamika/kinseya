import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Compass,
  Eye,
  Key,
  Lock,
  MessageCircle,
  Search,
  Sparkle,
  Zap,
  FlipHorizontal2,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveals from "@/components/Reveals";
import Testimonials from "@/components/Testimonials";
import { CALENDLY_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav heroDark active="Home" />
      <Reveals />

      <main>
        {/* ============ HERO ============ */}
        <section className="hero-variant is-active">
          <div className="heroB">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero.jpg" alt="Kinsey Lawrence" />
            <div className="wrap hb-inner">
              <p className="eyebrow">Soul Insight &amp; Energetic Clarity</p>
              <h1>
                Hear what your soul
                <br />
                is <span className="serif-italic">already</span> telling you.
              </h1>
              <p
                className="lead"
                style={{ marginTop: "1.4rem", maxWidth: "46ch" }}
              >
                Intuitive guidance sessions with Kinsey Lawrence — gentle,
                grounded, and tuned to the present moment.
              </p>
              <div className="hero-actions">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light"
                >
                  Book a Session
                </a>
                <Link href="/#offerings" className="btn btn-ghost">
                  Explore Sessions
                </Link>
              </div>
              <div className="hero-meta">
                <div>
                  <b>1:1</b>
                  <span>Private Sessions</span>
                </div>
                <div>
                  <b>Intuitive</b>
                  <span>Real-time Insight</span>
                </div>
                <div>
                  <b>Online</b>
                  <span>Anywhere You Are</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INTRO / WELCOME ============ */}
        <section className="section bg-paper" id="welcome">
          <div className="wrap split">
            <div className="split-media reveal">
              <div className="framed arch ratio-tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/portrait.jpg"
                  alt="Kinsey Lawrence, smiling portrait"
                />
              </div>
              <div
                className="media-badge"
                style={{ right: "-14px", bottom: "28px" }}
              >
                <span className="ic">
                  <Sparkle strokeWidth={1.6} />
                </span>
                <div>
                  <b>Present-moment</b>
                  <small>guidance, not prediction</small>
                </div>
              </div>
            </div>
            <div className="reveal d1">
              <p className="eyebrow">Welcome</p>
              <h2>
                You&apos;re not just looking for advice — you&apos;re looking for
                a mirror for the soul.
              </h2>
              <p className="lead" style={{ marginTop: "1.3rem" }}>
                Whether you&apos;re facing a life decision, emotional confusion,
                or simply feel &quot;stuck,&quot; I help you access the messages
                your higher self is trying to communicate.
              </p>
              <p>
                I don&apos;t predict the future. Instead, I offer clarity and
                guidance based on what your soul is communicating right now —
                meant to empower you to make aligned choices.
              </p>
              <Link href="/#what" className="link-arrow">
                More about my work
                <ArrowRight strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ WHAT I DO ============ */}
        <section className="section" id="what">
          <div className="wrap">
            <div
              style={{
                maxWidth: 640,
                marginBottom: "clamp(40px,5vw,68px)",
              }}
            >
              <p className="eyebrow reveal">What I Do</p>
              <h2 className="reveal d1">Five ways I tune in and translate.</h2>
              <p className="lead reveal d2" style={{ marginTop: "1rem" }}>
                Every session moves intuitively. These are the modalities that
                tend to come through.
              </p>
            </div>
            <div className="grid-cards cols-3">
              <article className="card reveal">
                <span className="num">01</span>
                <span className="ic">
                  <MessageCircle strokeWidth={1.5} />
                </span>
                <h3>Soul Communication</h3>
                <p>
                  I receive and relay messages from your soul that you may not
                  yet be able to hear.
                </p>
              </article>
              <article className="card reveal d1">
                <span className="num">02</span>
                <span className="ic">
                  <Eye strokeWidth={1.5} />
                </span>
                <h3>Intuitive Diagnostics</h3>
                <p>
                  I perceive underlying issues — emotional, spiritual, practical
                  — before they fully surface.
                </p>
              </article>
              <article className="card reveal d2">
                <span className="num">03</span>
                <span className="ic">
                  <FlipHorizontal2 strokeWidth={1.5} />
                </span>
                <h3>Energetic Mirroring</h3>
                <p>
                  My presence reflects back what you need to see or hear — often
                  triggering clarity or release.
                </p>
              </article>
              <article className="card reveal">
                <span className="num">04</span>
                <span className="ic">
                  <Zap strokeWidth={1.5} />
                </span>
                <h3>Spontaneous Insight</h3>
                <p>
                  I receive real-time downloads relevant to your journey — even
                  if unrelated to our conversation.
                </p>
              </article>
              <article className="card reveal d1">
                <span className="num">05</span>
                <span className="ic">
                  <Key strokeWidth={1.5} />
                </span>
                <h3>Mediumistic Channel</h3>
                <p>
                  At times I receive messages from those who have passed on —
                  offering closure or insight.
                </p>
              </article>
              <Link
                href="/#offerings"
                className="card reveal d2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  background: "var(--sage-deep)",
                  color: "var(--paper)",
                  borderColor: "var(--sage-deep)",
                }}
              >
                <h3 style={{ color: "var(--paper)", marginBottom: ".6rem" }}>
                  See how a session unfolds
                </h3>
                <p style={{ color: "rgba(251,248,241,.82)" }}>
                  From first breath to the insight you carry out the door.
                </p>
                <span
                  className="link-arrow"
                  style={{ color: "var(--sage-tint)", marginTop: "18px" }}
                >
                  View services
                  <ArrowRight strokeWidth={1.8} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ QUOTE STRIP ============ */}
        <section className="strip">
          <div className="wrap">
            <p className="q reveal">
              &quot;Sometimes I tune into your energy and receive messages your
              soul wants to communicate —{" "}
              <span className="accent">
                whether or not I know you personally.
              </span>
              &quot;
            </p>
          </div>
        </section>

        {/* ============ WHO THIS IS FOR ============ */}
        <section className="section bg-cream2">
          <div className="wrap split">
            <div className="reveal">
              <p className="eyebrow">Who This Is For</p>
              <h2>This work tends to find people at a threshold.</h2>
              <p className="lead" style={{ marginTop: "1rem" }}>
                If any of these feel like you, a session may be exactly what your
                soul is asking for.
              </p>
              <Link href="/contact" className="btn" style={{ marginTop: "26px" }}>
                Start a Conversation
              </Link>
            </div>
            <div className="audience reveal d1">
              <div className="aud-row" style={{ borderTop: "none" }}>
                <span className="ic">
                  <Compass strokeWidth={1.5} />
                </span>
                <div>
                  <h3>Seeking clarity in life decisions</h3>
                  <p>
                    When the path forward is foggy and you want to feel which way
                    is truly yours.
                  </p>
                </div>
              </div>
              <div className="aud-row">
                <span className="ic">
                  <Lock strokeWidth={1.5} />
                </span>
                <div>
                  <h3>Feeling emotionally or spiritually blocked</h3>
                  <p>
                    When something is stuck and you sense there&apos;s a message
                    underneath it.
                  </p>
                </div>
              </div>
              <div className="aud-row">
                <span className="ic">
                  <Search strokeWidth={1.5} />
                </span>
                <div>
                  <h3>Curious what your soul is communicating</h3>
                  <p>
                    For the simply curious — open to hearing from a deeper part
                    of themselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OFFERINGS PREVIEW ============ */}
        <section className="section" id="offerings">
          <div className="wrap">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "clamp(36px,5vw,60px)",
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <p className="eyebrow reveal">Ways to Work Together</p>
                <h2 className="reveal d1">Simple offerings, deeply held.</h2>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow reveal d2"
              >
                See availability
                <ArrowRight strokeWidth={1.8} />
              </a>
            </div>
            <div className="grid-cards cols-3">
              <article className="offer reveal">
                <span className="tier">
                  <Clock width={14} height={14} strokeWidth={1.7} /> Clarity
                </span>
                <h3>1-Hour Session</h3>
                <p className="dur">1 hour · live online</p>
                <p>
                  A focused tune-in for the question, decision, or feeling that
                  needs translating.
                </p>
                <p className="price" style={{ marginTop: "auto" }}>
                  <small>Inquire for pricing</small>
                </p>
              </article>
              <article className="offer feature reveal d1">
                <span className="tier">
                  <Sparkle width={14} height={14} strokeWidth={1.7} /> Most Chosen
                </span>
                <h3>1.5-Hour Session</h3>
                <p className="dur">1.5 hours · live online</p>
                <p>
                  Space to go deeper — soul communication, energetic mirroring,
                  and the insights that arise.
                </p>
                <p className="price" style={{ marginTop: "auto" }}>
                  <small>Inquire for pricing</small>
                </p>
              </article>
              <article className="offer reveal d2">
                <span className="tier">
                  <Sparkle width={14} height={14} strokeWidth={1.7} /> Deep Work
                </span>
                <h3>2-Hour Session</h3>
                <p className="dur">2 hours · live online</p>
                <p>
                  The fullest container — room to move through layers and let
                  everything settle.
                </p>
                <p className="price" style={{ marginTop: "auto" }}>
                  <small>Inquire for pricing</small>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============ BIOMAGNETIC PAIR THERAPY ============ */}
        <section className="section bg-cream2" id="biomagnetic">
          <div className="wrap wrap-narrow">
            <p className="eyebrow reveal">Also Offered</p>
            <h2 className="reveal d1">
              Biomagnetic Pair Therapy —{" "}
              <span className="serif-italic">restore your body&apos;s balance.</span>
            </h2>
            <p className="lead reveal d2" style={{ marginTop: "1.4rem" }}>
              Biomagnetic Pair Therapy uses magnets to help your body heal. It
              works by finding areas where your energy is out of balance. We use{" "}
              <b>Applied Kinesiology</b>, a gentle form of muscle testing, to
              receive information from your body&apos;s higher self and the
              quantum field. Then, we place magnets on those spots to bring your
              natural field back into harmony. This also helps to balance your
              body&apos;s pH levels, which is important for good health.
            </p>
            <p className="reveal">
              Beyond the physical, this gentle therapy can also help release
              trapped emotions and past trauma, supporting deep emotional healing
              and inner peace.
            </p>
            <p className="reveal">
              This therapy can help with many issues, like pain, tiredness, and
              feeling unwell. It supports your body&apos;s own healing power,
              helping you feel more balanced and vibrant.
            </p>
            <div className="bm-note reveal d1">
              <p>
                <i>
                  Please note: Healing is a journey, not a single event. While
                  many clients feel subtle shifts after their first session,
                  significant physical and emotional changes often unfold over
                  time. We invite you to approach this therapy with patience and
                  curiosity, trusting your body&apos;s innate wisdom to guide the
                  process.
                </i>
              </p>
              <p style={{ marginBottom: 0 }}>
                <i>
                  We invite you to step into this journey with an open heart and
                  a curious mind. Your body holds the wisdom, and we are here to
                  mirror and support its remembrance.
                </i>
              </p>
            </div>
            <p
              className="dur reveal d2"
              style={{
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Clock
                width={17}
                height={17}
                strokeWidth={1.7}
                style={{ color: "var(--sage-deep)" }}
              />{" "}
              1.5 hours · per session
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn reveal d2"
              style={{ marginTop: "18px" }}
            >
              Book Biomagnetic Therapy
            </a>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <Testimonials />

        {/* ============ CTA BAND ============ */}
        <section className="section bg-ink cta-band">
          <span
            className="ring"
            style={{ width: 560, height: 560, top: "-200px", right: "-120px" }}
          />
          <span
            className="ring"
            style={{ width: 360, height: 360, bottom: "-160px", left: "-80px" }}
          />
          <div className="wrap inner">
            <p
              className="eyebrow center reveal"
              style={{ color: "var(--sage-tint)" }}
            >
              Ready When You Are
            </p>
            <h2 className="reveal d1">
              Let&apos;s hear what your soul is trying to say.
            </h2>
            <p
              className="lead reveal d2"
              style={{ color: "rgba(251,248,241,.82)" }}
            >
              Tell me a little about where you are right now, and we&apos;ll find
              the session that fits.
            </p>
            <div
              className="reveal d3"
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Book a Session
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
