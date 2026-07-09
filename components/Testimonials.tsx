"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Quote = {
  initial: string;
  name: string;
  role: string;
  body: string[];
  clamped?: boolean;
};

const QUOTES: Quote[] = [
  {
    initial: "C",
    name: "Chanelle",
    role: "Mediumship Reading",
    body: [
      "“A truly beautiful experience. Kinsey delivered messages from a loved one who had recently passed that were unmistakably meant for me. Her gift brought comfort, clarity, and peace during a difficult time.”",
    ],
  },
  {
    initial: "N",
    name: "Natalie",
    role: "Grief & Healing",
    body: [
      "“Kinsey is an incredible woman. During my father's time in palliative care, she visited him often, offering healing and support as he transitioned. After his passing, I struggled immensely to move forward. Kinsey has been an invaluable guide, helping me find deep closure and begin my own healing journey. Her gift is undeniable, and I am profoundly grateful for her presence.”",
    ],
  },
  {
    initial: "B",
    name: "Bryan",
    role: "Ongoing Sessions",
    body: [
      "“Kinsey has helped me immensely. With her gifts she's helped guide me to a place of awakening. After a year of appointments I feel better and better — and more akin to my truest self.”",
    ],
  },
  {
    initial: "D",
    name: "Diana",
    role: "Intuitive Guidance",
    clamped: true,
    body: [
      "“Over the years I've had interactions with her where, back then, we had no name for her gifts — but we always felt their clear benefit. From 'oh no, the car broke, I don't know whether to fix it,' with her diagnosing it with laser accuracy, to 'I have a feeling I have to do something but I'm not sure which way to go,' with her reflecting back to me what truly resonated with my heart and left me at peace. In either situation, she saved me a lot of money, headache, and the chasing after the wrong thing.”",
    ],
  },
  {
    initial: "T",
    name: "Tina Macik",
    role: "Intuitive Guidance",
    clamped: true,
    body: [
      "“I've had readings with several intuitive practitioners over the years, but Kinsey is truly in a league of her own.",
      "From the moment our session began, I felt seen, understood, and deeply supported. The guidance she brought through was incredibly accurate, specific, and meaningful — tapping into aspects of my life, personal growth, and current circumstances with a clarity that honestly left me speechless.",
      "What I appreciate most is that her readings are not vague generalizations. The information she shares is precise, insightful, and delivered with genuine compassion. Time and again, what she has seen and communicated has proven to be spot on.",
      "If you're looking for someone who can help you gain clarity, confirmation, and a deeper understanding of your path, I cannot recommend Kinsey highly enough. She is gifted, authentic, and the real deal.”",
    ],
  },
  {
    initial: "D",
    name: "Duncan G.",
    role: "Clarity Session",
    body: [
      "“From the moment the session began, Kinsey made me feel completely at ease, heard, and seen. Amazing how she could see into my soul!”",
    ],
  },
];

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} fill="currentColor" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const dotsWrap = dotsRef.current;
    const prevBtn = prevRef.current;
    const nextBtn = nextRef.current;
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>(".quote");

    // read-more toggles
    const readmoreCleanups: Array<() => void> = [];
    track.querySelectorAll<HTMLButtonElement>(".readmore").forEach((btn) => {
      const onClick = (e: Event) => {
        e.stopPropagation();
        const fig = btn.closest(".quote");
        if (!fig) return;
        const clamped = fig.classList.toggle("is-clamped");
        btn.textContent = clamped ? "Read more" : "Read less";
      };
      btn.addEventListener("click", onClick);
      readmoreCleanups.push(() => btn.removeEventListener("click", onClick));
    });

    function step() {
      if (cards.length < 2) return track!.clientWidth;
      const cs = getComputedStyle(track!);
      const gap = parseFloat(cs.columnGap || cs.gap) || 16;
      return cards[0].offsetWidth + gap;
    }
    function perView() {
      return Math.max(1, Math.round(track!.clientWidth / step()));
    }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      const pages = Math.max(1, cards.length - perView() + 1);
      for (let i = 0; i < pages; i++) {
        const b = document.createElement("button");
        b.setAttribute("aria-label", "Go to reflection " + (i + 1));
        const idx = i;
        b.addEventListener("click", () => {
          track!.scrollTo({ left: idx * step(), behavior: "smooth" });
        });
        dotsWrap.appendChild(b);
      }
    }

    function update() {
      const max = track!.scrollWidth - track!.clientWidth - 2;
      if (prevBtn) prevBtn.disabled = track!.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = track!.scrollLeft >= max;
      if (dotsWrap) {
        const idx = Math.round(track!.scrollLeft / step());
        dotsWrap
          .querySelectorAll("button")
          .forEach((d, i) => d.classList.toggle("on", i === idx));
      }
    }

    const onPrev = () => track.scrollBy({ left: -step(), behavior: "smooth" });
    const onNext = () => track.scrollBy({ left: step(), behavior: "smooth" });
    prevBtn?.addEventListener("click", onPrev);
    nextBtn?.addEventListener("click", onNext);

    let raf = 0;
    const onTrackScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    track.addEventListener("scroll", onTrackScroll, { passive: true });

    // drag / swipe
    let down = false,
      startX = 0,
      startScroll = 0,
      moved = false;
    const onDown = (e: PointerEvent) => {
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startScroll - dx;
    };
    const endDrag = () => {
      if (!down) return;
      down = false;
      track.classList.remove("dragging");
      const s = step();
      track.scrollTo({
        left: Math.round(track.scrollLeft / s) * s,
        behavior: "smooth",
      });
    };
    track.addEventListener("pointerdown", onDown);
    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("pointerleave", endDrag);
    const linkGuard = (e: Event) => {
      if (moved) e.preventDefault();
    };
    track.querySelectorAll("a").forEach((a) => a.addEventListener("click", linkGuard));

    const onResize = () => {
      buildDots();
      update();
    };

    buildDots();
    update();
    window.addEventListener("resize", onResize);

    return () => {
      readmoreCleanups.forEach((fn) => fn());
      prevBtn?.removeEventListener("click", onPrev);
      nextBtn?.removeEventListener("click", onNext);
      track.removeEventListener("scroll", onTrackScroll);
      track.removeEventListener("pointerdown", onDown);
      track.removeEventListener("pointermove", onMove);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      track.removeEventListener("pointerleave", endDrag);
      track
        .querySelectorAll("a")
        .forEach((a) => a.removeEventListener("click", linkGuard));
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section bg-paper">
      <div className="wrap">
        <div className="tslider-head">
          <div style={{ maxWidth: 600 }}>
            <p className="eyebrow reveal">Reflections</p>
            <h2 className="reveal d1">What people carry with them.</h2>
          </div>
          <div className="tslider-ctrl reveal d2">
            <button
              ref={prevRef}
              className="tnav"
              data-dir="-1"
              aria-label="Previous reflection"
            >
              <ChevronLeft strokeWidth={1.8} />
            </button>
            <button
              ref={nextRef}
              className="tnav"
              data-dir="1"
              aria-label="Next reflection"
            >
              <ChevronRight strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="tslider reveal d1">
          <div className="tslider-track" ref={trackRef}>
            {QUOTES.map((q, i) => (
              <figure
                key={i}
                className={`quote${q.clamped ? " is-clamped" : ""}`}
              >
                <Stars />
                <div className="qbody">
                  <blockquote>
                    {q.body.length === 1 ? (
                      q.body[0]
                    ) : (
                      q.body.map((p, j) => <span key={j}>{p}</span>)
                    )}
                  </blockquote>
                </div>
                {q.clamped && (
                  <button className="readmore" type="button">
                    Read more
                  </button>
                )}
                <figcaption className="who">
                  <span className="av">{q.initial}</span>
                  <div>
                    <b>{q.name}</b>
                    <small>{q.role}</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="tslider-dots" ref={dotsRef} />
      </div>
    </section>
  );
}
