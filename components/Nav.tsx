"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CALENDLY_URL, NAV_LINKS } from "@/lib/site";

export default function Nav({
  heroDark = false,
  active,
}: {
  heroDark?: boolean;
  active?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the dark-hero treatment on <body> so the shared CSS can theme the
  // nav (white links over the photo until the user scrolls).
  useEffect(() => {
    document.body.classList.toggle("hero-dark", heroDark);
    return () => document.body.classList.remove("hero-dark");
  }, [heroDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          Kinsey Lawrence<small>Higher Self Resonance</small>
        </Link>
        <nav>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={active === l.label ? "active" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn nav-cta"
        >
          Book a Session
        </a>
        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
        </button>
      </header>

      <div className="mobile-menu">
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Book a Session
            </a>
          </li>
        </ul>
        <div className="mm-foot">
          Coherence reflection &amp; energetic clarity, in the present moment.
        </div>
      </div>
    </>
  );
}
