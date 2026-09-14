// Central site configuration. Update these in one place.

export const BOOKING_URL = "https://calendyo.com/shops/kinsey-lawrence";

// Direct booking links for each specific service.
export const BOOKING = {
  base: BOOKING_URL,
  hour1:
    "https://calendyo.com/shops/kinsey-lawrence/book?service=cmu14g5p90003elkzh5atzvyi",
  hour15:
    "https://calendyo.com/shops/kinsey-lawrence/book?service=cmu14j0ef0004elkzo01renfq",
  hour2:
    "https://calendyo.com/shops/kinsey-lawrence/book?service=cmu14kdek0005elkznsc6ovsj",
  biomagnetic:
    "https://calendyo.com/shops/kinsey-lawrence/book?service=cmu14lz5f0006elkzyfgqvwef",
} as const;

/**
 * Absolute base URL of the deployed site, used for metadata, sitemap, and
 * robots. On Vercel, set NEXT_PUBLIC_SITE_URL to your production domain; the
 * VERCEL_URL fallback covers preview deployments, and localhost covers dev.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  return raw.replace(/\/+$/, "");
}

// Public-facing email shown on the contact page (display only).
// Swap to the real address once the domain is set up.
export const CONTACT_EMAIL = "hello@kinseyalawrence.com";

export const SOCIALS = {
  instagram: "https://instagram.com/",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#welcome" },
  { label: "Services", href: "/#offerings" },
  { label: "Contact", href: "/contact" },
];
