import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  gsap,
  ScrollTrigger,
  SplitHeading,
  Parallax,
  reduced,
} from "../components/motion.jsx";
import { EnquiryBanner } from "../components/ui.jsx";

const T = (n) => `/images/team/p${String(n).padStart(2, "0")}.webp`;
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const items = [
  ...[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({
    src: T(n),
    cat: "Fire drills",
    alt: "Fire safety drill",
  })),
  ...[13, 14, 16, 17, 18, 19, 20, 21, 22, 27, 28, 30, 32].map((n) => ({
    src: T(n),
    cat: "Parades",
    alt: "Security team in formation",
  })),
  ...[3, 15, 23, 24, 29, 31].map((n) => ({
    src: T(n),
    cat: "Teams",
    alt: "HI-TECH security personnel",
  })),
  ...[
    ["uniform-sheet", "Uniform from four angles"],
    ["uniform-full", "Full uniform and portrait"],
    ["uniform-portrait", "Guard in uniform"],
    ["guard-cover", "Guard with radio"],
  ].map(([f, alt]) => ({ src: `/images/team/${f}.webp`, cat: "Uniforms", alt })),
  ...[
    ["cards-lanyard", "Business card, ID card and lanyard"],
    ["mug", "Branded mug"],
    ["emblem", "Brand identity and emblem"],
  ].map(([f, alt]) => ({
    src: `/images/brand/${f}.webp`,
    cat: "Branding",
    alt,
  })),
];
const cats = ["All", "Teams", "Parades", "Fire drills", "Uniforms", "Branding"];

export default function Gallery() {
  const [cat, setCat] = useState("All"),
    [open, setOpen] = useState(-1);
  const grid = useRef(null);
  const list = items.filter((i) => cat === "All" || i.cat === cat);
  useLayoutEffect(() => {
    document.title = "Gallery | HI-TECH Protection Security";
    ScrollTrigger.refresh();
  }, []);
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(
      () =>
        gsap.fromTo(
          ".gi",
          { opacity: 0, scale: 0.9, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.035,
            ease: "power3.out",
          },
        ),
      grid,
    );
    return () => c.revert();
  }, [cat]);
  useEffect(() => {
    if (open < 0) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % list.length);
      if (e.key === "ArrowLeft")
        setOpen((o) => (o - 1 + list.length) % list.length);
    };
    addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open, list.length]);
  return (
    <>
      <Parallax
        src="/images/team/p13.webp"
        overlay="bg-black/70"
        className="flex min-h-[80vh] items-end"
        loading="eager"
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-16 pt-44 lg:px-10">
          <SplitHeading
            as="h1"
            text="Gallery"
            trigger={false}
            delay={0.5}
            className="text-[14vw] lg:text-[9.45rem]"
          />
          <p className="max-w-xl text-xl text-white/85">
            Our teams on parade, in training and in uniform.
          </p>
        </div>
      </Parallax>
      <section className="bg-black px-3 py-16 lg:px-8">
        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mx-auto mb-10 flex max-w-[1500px] flex-wrap gap-3 px-2"
        >
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`px-6 py-3 font-display text-xl font-bold uppercase transition ${cat === c ? "bg-gold text-black" : "border border-white/30 hover:border-gold hover:text-gold"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div
          ref={grid}
          key={cat}
          className="mx-auto max-w-[1500px] columns-1 gap-3 sm:columns-2 lg:columns-3"
        >
          {list.map((it, i) => (
            <button
              key={it.src}
              onClick={() => setOpen(i)}
              className="gi group relative mb-3 block w-full overflow-hidden"
              aria-label={`Open: ${it.alt}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="display text-2xl text-gold">{it.cat}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      {open >= 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[80] grid place-items-center bg-black/95 p-4"
          onClick={() => setOpen(-1)}
        >
          <img
            src={list[open].src}
            alt={list[open].alt}
            loading="eager"
            className="max-h-[88vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/80">
            {list[open].alt} ({open + 1}/{list.length})
          </p>
          <button
            aria-label="Close"
            className="absolute right-5 top-5 text-3xl text-white"
            onClick={() => setOpen(-1)}
          >
            <FaTimes />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-3 top-1/2 p-3 text-3xl text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + list.length) % list.length);
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            aria-label="Next"
            className="absolute right-3 top-1/2 p-3 text-3xl text-gold"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % list.length);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
      <EnquiryBanner img="/images/team/p18.webp" />
    </>
  );
}
