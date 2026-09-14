# Kinsey Lawrence — Soul Insight & Energetic Clarity

A front-end marketing site for Kinsey Lawrence, built from the Claude Design
`index.html`. Next.js (App Router) + TypeScript + Tailwind + lucide-react.
The contact form sends email via [Resend](https://resend.com). All booking
buttons link to the external booking page.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **pnpm** for package management
- **Tailwind CSS** (utilities available) + the original hand-authored design
  system in `app/globals.css`
- **lucide-react** for icons
- **Resend** for transactional email (contact form)
- Fonts: Cormorant Garamond + Mulish via `next/font`

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Pages

- `/` — homepage (hero, intro, modalities, offerings, biomagnetic therapy,
  testimonials, CTA)
- `/contact` — contact form + booking links
- `POST /api/contact` — sends the form submission via Resend

## Email setup (Resend)

The contact form posts to `/api/contact`, which sends an email with Resend.

1. Create an account at https://resend.com and grab an API key.
2. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_TO_EMAIL` — the inbox that should receive submissions
3. Restart `pnpm dev`.

Until you verify your own domain, the app sends **from** Resend's shared
testing sender (`onboarding@resend.dev`). In Resend's test mode you can only
deliver to the email address on your Resend account.

Once your domain is verified in Resend, set:

```
RESEND_FROM=Kinsey Lawrence <hello@yourdomain.com>
```

and submissions can be delivered to any address.

> If `RESEND_API_KEY` / `CONTACT_TO_EMAIL` aren't set, the form returns a clear
> "email isn't configured" message instead of crashing.

## Deploy to Vercel

This app is Vercel-ready (App Router, pnpm lockfile, Node pinned via `.nvmrc`
and `engines`, `vercel.json` framework hint, plus `robots` + `sitemap`).

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project → Import** the repo. Vercel auto-detects Next.js and
   pnpm — no build config needed (Build: `next build`, Install: `pnpm install`).
3. Add **Environment Variables** (Project → Settings → Environment Variables):
   | Variable | Value | Notes |
   |---|---|---|
   | `RESEND_API_KEY` | your Resend key | required for the contact form |
   | `CONTACT_TO_EMAIL` | inbox for submissions | required |
   | `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | your live domain (metadata/sitemap) |
   | `RESEND_FROM` | `Kinsey Lawrence <hello@yourdomain.com>` | optional, once domain is verified |
4. **Deploy.** Then add your custom domain under Project → Domains.

Notes:
- The `/api/contact` route runs on the Node.js runtime (required by Resend).
- `NEXT_PUBLIC_SITE_URL` is optional on preview builds — it falls back to the
  Vercel preview URL automatically.
- `.env.local` is gitignored and is **not** used by Vercel; set the values in the
  Vercel dashboard instead.

## Configuration

Edit `lib/site.ts` to change the booking URL, the public contact email, social
links, and nav items.

- Booking: `BOOKING_URL` (currently `https://calendyo.com/shops/kinsey-lawrence`)
- Public email shown on the contact page: `CONTACT_EMAIL`

## Notes

Only `index.html` was provided from the design, so `About` / `Services` nav
items deep-link to sections on the homepage. The contact page was built to
match the design system's existing form styles.
# kinseya
