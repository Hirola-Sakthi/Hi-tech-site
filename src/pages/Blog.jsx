import { useLayoutEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  gsap,
  ScrollTrigger,
  TLink,
  SplitHeading,
  RevealImage,
  Parallax,
  reduced,
} from "../components/motion.jsx";
import { EnquiryBanner } from "../components/ui.jsx";
import { posts } from "../config/posts.js";

export default function Blog() {
  const ref = useRef(null);
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(posts.map((p) => p.cat))];
  const [feat, ...rest] = posts;
  const list = rest.filter((p) => cat === "All" || p.cat === cat);
  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  useLayoutEffect(() => {
    document.title = "Blog | HI-TECH Protection Security";
    ScrollTrigger.refresh();
  }, []);
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(
      () =>
        gsap.fromTo(
          ".bl-card",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: ".bl-list", start: "top 85%" },
          },
        ),
      ref,
    );
    return () => c.revert();
  }, [cat]);
  return (
    <div ref={ref}>
      <Parallax
        src="/images/team/p17.webp"
        alt="HI-TECH security team on parade"
        overlay="bg-gradient-to-r from-black/85 via-black/55 to-black/20"
        className="flex min-h-[70vh] flex-col justify-end pt-36"
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-12 lg:px-10">
          <p className="mb-4 font-display text-lg font-bold uppercase tracking-[.2em] text-gold">
            Insights &amp; guidance
          </p>
          <SplitHeading
            as="h1"
            text="Field notes"
            trigger={false}
            delay={0.5}
            className="text-[14.8vw] lg:text-[10.2rem]"
          />
          <p className="mt-4 max-w-xl text-xl text-white/85">
            Practical thinking on protecting hotels, banks, offices, factories
            and homes.
          </p>
        </div>
      </Parallax>

      <section className="bg-black px-5 pb-8 pt-14 lg:px-10 lg:pb-10 lg:pt-20">
        <div className="mx-auto max-w-[1500px]">
          <div
            role="tablist"
            aria-label="Blog categories"
            className="flex flex-wrap justify-center gap-3"
          >
            {cats.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 font-display text-lg font-bold uppercase transition ${cat === c ? "bg-gold text-black" : "border border-charcoal/25 hover:border-gold hover:text-gold"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal">
        <TLink to={`/blog/${feat.slug}`} className="group grid lg:grid-cols-2">
          <RevealImage
            src={feat.img}
            alt={feat.title}
            from="left"
            className="min-h-[26rem]"
            imgClass="transition duration-1000 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center px-6 py-16 lg:px-16">
            <p className="font-display text-xl font-bold uppercase text-gold">
              Featured &middot; {feat.cat} &middot; {formatDate(feat.date)}{" "}
              &middot; {feat.mins} min read
            </p>
            <SplitHeading
              text={feat.title}
              className="mt-4 text-5xl lg:text-7xl"
            />
            <p className="mt-6 max-w-lg text-xl text-white/75">
              {feat.excerpt}
            </p>
            <span className="mt-8 inline-flex items-center gap-3 font-display text-2xl font-bold uppercase text-gold">
              Read the article{" "}
              <FaArrowRight className="transition group-hover:translate-x-2" />
            </span>
          </div>
        </TLink>
      </section>

      <section className="bg-black px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <ul
            key={cat}
            className="bl-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((p) => (
              <li key={p.slug} className="bl-card">
                <TLink
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm text-charcoal/70">
                      <span className="font-display font-bold uppercase tracking-wide text-gold">
                        {p.cat}
                      </span>
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                    </div>
                    <h2 className="display text-3xl text-charcoal transition-colors group-hover:text-gold">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/80">
                      {p.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-display font-bold uppercase text-gold">
                      Read article{" "}
                      <FaArrowRight className="transition group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </TLink>
              </li>
            ))}
          </ul>
          {!list.length && (
            <p className="py-10 text-xl text-charcoal/70">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>
      <EnquiryBanner img="/images/team/p21.webp" />
    </div>
  );
}
