import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { CALENDLY_URL, CONTACT_EMAIL, SOCIALS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">Kinsey Lawrence</div>
            <p>
              Intuitive guidance — a translator between your higher self and
              your conscious mind. Clarity, in the present moment.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#welcome">About</Link>
              </li>
              <li>
                <Link href="/#offerings">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Sessions</h4>
            <ul>
              <li>
                <Link href="/#offerings">1-Hour Session</Link>
              </li>
              <li>
                <Link href="/#offerings">1.5-Hour Session</Link>
              </li>
              <li>
                <Link href="/#biomagnetic">Biomagnetic Therapy</Link>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Kinsey Lawrence. All rights reserved.</span>
          <div className="socials">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram strokeWidth={1.6} />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
              <Mail strokeWidth={1.6} />
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            <b>Legal Disclaimer (Canadian Law Compliant):</b> The insights and
            guidance offered through Higher Self Resonance and Biomagnetic Pair
            Therapy are intended for personal reflection and energetic support.
            They are not a substitute for professional medical, psychological, or
            legal advice. Under Canadian law, all sessions are considered for
            entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
