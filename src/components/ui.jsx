import { useState, useRef, useLayoutEffect } from "react";
import { FaArrowRight, FaPhoneAlt, FaPlus } from "react-icons/fa";
import { gsap, TLink, SplitHeading, Parallax, reduced } from "./motion.jsx";
import { site } from "../config/site.js";

export const Btn = ({ to, children, dark, light }) => (
  <TLink
    to={to}
    className={`group inline-flex items-center gap-3 px-8 py-4 font-display text-xl font-bold uppercase tracking-wide transition ${dark ? "bg-black text-gold hover:bg-white hover:text-black" : light ? "bg-black text-white hover:bg-gold hover:text-black" : "bg-gold text-black hover:bg-white"}`}
  >
    {children}{" "}
    <FaArrowRight className="text-base transition group-hover:translate-x-1.5" />
  </TLink>
);

export function EnquiryBanner({
  img = "/images/team/p13.webp",
  title = "Tell us what you need to protect",
}) {
  return (
    <Parallax src={img} alt="" overlay="bg-black/75" className="py-28 lg:py-44">
      <div className="mx-auto max-w-[1500px] px-5 text-center lg:px-10">
        <SplitHeading
          text={title}
          className="mx-auto max-w-5xl text-5xl text-white lg:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-xl text-white/85">
          Every client has different security requirements. We will suggest
          personnel and practices suited to your location.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Btn to="/contact">Request a quote</Btn>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 border-2 border-gold px-8 py-4 font-display text-xl font-bold uppercase text-gold transition hover:bg-gold hover:!text-black focus-visible:bg-gold focus-visible:!text-black"
          >
            <FaPhoneAlt className="text-base" />
            {site.phone}
          </a>
        </div>
      </div>
    </Parallax>
  );
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-y border-charcoal/15">
      {items.map(([q, a], i) => {
        const expanded = open === i;
        const answerId = `faq-answer-${i}`;
        return (
          <div
            key={q}
            className={`group border-b border-charcoal/15 last:border-b-0 ${expanded ? "bg-white" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(expanded ? -1 : i)}
              aria-expanded={expanded}
              aria-controls={answerId}
              id={`faq-question-${i}`}
              className="flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
            >
              <span
                className={`h-10 w-1 shrink-0 transition-colors duration-300 ${expanded ? "bg-gold" : "bg-charcoal/10 group-hover:bg-gold/60"}`}
              />
              <span className="min-w-0 flex-1">
                <span className="display block text-2xl leading-tight text-charcoal sm:text-3xl">
                  {q}
                </span>
              </span>
              <FaPlus
                className={`mr-1 shrink-0 text-sm text-gold transition-transform duration-300 sm:mr-2 ${expanded ? "rotate-[135deg]" : ""}`}
              />
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className={`max-w-2xl pl-9 text-base leading-relaxed text-charcoal/75 transition-[padding] duration-300 sm:pl-10 ${expanded ? "pb-6 sm:pb-7" : "pb-0"}`}
                >
                  {a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Animated section divider: a gold line that draws itself.
export function DrawLine({ className = "" }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const t = gsap.from(ref.current, {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.4,
      ease: "power4.inOut",
      scrollTrigger: { trigger: ref.current, start: "top 90%" },
    });
    return () => {
      t.scrollTrigger?.kill();
      t.kill();
    };
  }, []);
  return <div ref={ref} className={`h-1 bg-gold ${className}`} />;
}
