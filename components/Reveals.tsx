"use client";

import { useEffect } from "react";

/**
 * Mirrors the original site's reveal-on-scroll behaviour: any element with the
 * `.reveal` class fades/slides in once it enters the viewport.
 */
export default function Reveals() {
  useEffect(() => {
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((r) => r.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return null;
}
