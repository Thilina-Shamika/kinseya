"use client";

import { useState } from "react";
import { Check, Sparkle } from "lucide-react";

const INTERESTS = [
  "1-Hour Session",
  "1.5-Hour Session",
  "2-Hour Session",
  "Biomagnetic Therapy",
  "Not sure yet",
];

type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("there");
  const [serverError, setServerError] = useState<string | null>(null);

  const toggleChip = (label: string) =>
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please share your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      next.email = "Please enter a valid email.";
    if (message.length < 8)
      next.message = "A little more detail helps me prepare.";

    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          interests: selected,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          body?.error || "Something went wrong sending your message."
        );
      }
      setSentName(name.split(" ")[0] || "there");
      setSent(true);
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success show" role="status">
        <div className="ic">
          <Check strokeWidth={2} />
        </div>
        <h3 style={{ marginBottom: ".4rem" }}>
          Thank you, <span>{sentName}</span>.
        </h3>
        <p style={{ margin: 0, color: "var(--ink-2)" }}>
          Your message is on its way. I&apos;ll be in touch soon — usually within
          a day or two.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field row">
        <div className="field">
          <label htmlFor="f-name">
            Your name <span className="req">*</span>
          </label>
          <input
            id="f-name"
            name="name"
            type="text"
            placeholder="First and last"
            className={errors.name ? "invalid" : undefined}
            onInput={() => setErrors((p) => ({ ...p, name: undefined }))}
          />
          <span className="err">{errors.name}</span>
        </div>
        <div className="field">
          <label htmlFor="f-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            placeholder="you@email.com"
            className={errors.email ? "invalid" : undefined}
            onInput={() => setErrors((p) => ({ ...p, email: undefined }))}
          />
          <span className="err">{errors.email}</span>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-phone">Phone (optional)</label>
        <input
          id="f-phone"
          name="phone"
          type="tel"
          placeholder="So I can reach you, if you prefer"
        />
      </div>

      <div className="field">
        <label>What you&apos;re drawn to</label>
        <div className="chips">
          {INTERESTS.map((label) => (
            <button
              key={label}
              type="button"
              className={`chip${selected.includes(label) ? " sel" : ""}`}
              aria-pressed={selected.includes(label)}
              onClick={() => toggleChip(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-message">
          What&apos;s present for you? <span className="req">*</span>
        </label>
        <textarea
          id="f-message"
          name="message"
          placeholder="Share a little about where you are right now and what you're hoping for."
          className={errors.message ? "invalid" : undefined}
          onInput={() => setErrors((p) => ({ ...p, message: undefined }))}
        />
        <span className="err">{errors.message}</span>
      </div>

      {serverError && (
        <p className="err" style={{ fontSize: ".9rem" }}>
          {serverError}
        </p>
      )}

      <button className="btn" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"}
        <Sparkle strokeWidth={1.7} />
      </button>

      <p className="form-note">
        Your note comes straight to me — never shared, never added to a list.
      </p>
    </form>
  );
}
