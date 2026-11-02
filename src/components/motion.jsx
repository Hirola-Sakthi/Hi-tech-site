import { useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
export const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Full-screen gold curtain between pages. <Curtain/> is mounted once in App.
let cover = null;
export const setCurtain = (fn) => {
  cover = fn;
};
export function TLink({ to, onClick, children, ...p }) {
  const nav = useNavigate();
  return (
    <Link
      to={to}
      {...p}
      onClick={(e) => {
        onClick?.(e);
        if (e.metaKey || e.ctrlKey || !cover || reduced()) return;
        e.preventDefault();
        cover(() => nav(to));
      }}
    >
      {children}
    </Link>
  );
}

// Splits text into words > chars and animates them up from a mask.
export function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  trigger = true,
  delay = 0,
}) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const chars = ref.current.querySelectorAll(".char");
      gsap.from(chars, {
        yPercent: 110,
        rotate: 4,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.018,
        delay,
        scrollTrigger: trigger
          ? { trigger: ref.current, start: "top 85%" }
          : undefined,
      });
    }, ref);
    return () => ctx.revert();
  }, [text]);
  return (
    <Tag
      ref={ref}
      className={`display ${Tag === "h1" ? "font-hero" : ""} ${className}`}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span key={i} className="word" aria-hidden="true">
          {[...w].map((c, j) => (
            <span key={j} className="char">
              {c}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </Tag>
  );
}

// Image revealed with a clip-path wipe and a slow zoom.
export function RevealImage({
  src,
  alt,
  className = "",
  imgClass = "",
  from = "left",
  loading = "lazy",
}) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const start = {
        left: "inset(0 100% 0 0)",
        right: "inset(0 0 0 100%)",
        bottom: "inset(100% 0 0 0)",
        top: "inset(0 0 100% 0)",
      }[from];
      gsap.fromTo(
        ref.current,
        { clipPath: start },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.3,
          ease: "power4.inOut",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        },
      );
      gsap.from(ref.current.querySelector("img"), {
        scale: 1.35,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover ${imgClass}`}
      />
    </div>
  );
}

// Full-bleed photo that moves slower than the page.
export function Parallax({
  src,
  alt = "",
  className = "",
  children,
  overlay = "bg-black/55",
  loading = "lazy",
}) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelector("img"),
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className="absolute inset-0 h-[125%] w-full -top-[12%] object-cover"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="photo-copy relative">{children}</div>
    </section>
  );
}

export function Counter({ to, suffix = "", plain = false }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (reduced()) {
      el.textContent = to + suffix;
      return;
    }
    const o = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(o, {
          v: to,
          duration: 2.2,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.round(o.v) + suffix;
          },
        }),
    });
    el.textContent = "0";
    return () => st.kill();
  }, [to]);
  return (
    <span ref={ref}>
      {to}
      {suffix}
    </span>
  );
}
