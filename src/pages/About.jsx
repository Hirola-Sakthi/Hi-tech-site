import { useLayoutEffect, useRef } from "react";
import {
  gsap,
  ScrollTrigger,
  SplitHeading,
  RevealImage,
  Parallax,
  Counter,
  reduced,
} from "../components/motion.jsx";
import { Btn, EnquiryBanner, DrawLine } from "../components/ui.jsx";
import { site, values, approach } from "../config/site.js";

function Philosophy() {
  const ref = useRef(null);
  const text =
    "We believe effective security requires more than a uniformed guard. It requires training, vigilance, discipline, communication and quick response.";
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(
      () =>
        gsap.fromTo(
          ".pw",
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              pin: true,
              scrub: true,
              start: "top top",
              end: "+=1600",
            },
          },
        ),
      ref,
    );
    return () => c.revert();
  }, []);
  return (
    <section
      ref={ref}
      className="relative grid min-h-[78vh] place-items-center overflow-hidden bg-black px-6 py-24 lg:px-16"
    >
      <div className="absolute left-1/2 top-20 h-px w-24 -translate-x-1/2 bg-gold" />
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-8 font-display text-sm font-bold uppercase tracking-[.24em] text-gold">
          Our philosophy
        </p>
        <p className="display text-[5.5vw] leading-[1.05] lg:text-8xl">
          {text.split(" ").map((w, i) => (
            <span key={i} className="pw inline-block pr-[.25em]">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function AboutMarquee() {
  const ref = useRef(null);
  const topics = [
    "Hotels",
    "Banks",
    "Corporate offices",
    "Industrial sites",
    "Residential communities",
    "Commercial buildings",
  ];

  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.to(".about-marquee-track", {
        xPercent: -50,
        duration: 36,
        ease: "none",
        repeat: -1,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-ivory pb-10 pt-5 text-charcoal sm:pb-12 sm:pt-6"
      aria-label="Security for every environment"
    >
      <div className="relative overflow-hidden">
        <div className="about-marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="flex items-center gap-8 px-5 sm:gap-10 sm:px-7"
                >
                  <span className="display whitespace-nowrap text-3xl text-charcoal sm:text-4xl lg:text-5xl">
                    {topic}
                  </span>
                  <span className="h-2 w-2 shrink-0 rotate-45 bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    document.title = "About Us | HI-TECH Protection Security";
    if (reduced()) return;
    const c = gsap.context(() => {
      gsap.from(".ab-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.2,
        ease: "power4.inOut",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".ab-guard", {
        yPercent: 12,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.8,
      });
    }, ref);
    return () => c.revert();
  }, []);
  const shots = [
    [
      "p14",
      "col-span-2 row-span-2 lg:col-span-6 lg:row-span-2",
      "Ready for every shift",
    ],
    ["p23", "lg:col-span-3 lg:row-span-2", "Professional on every post"],
    ["p29", "lg:col-span-3 lg:row-span-1", "A welcoming presence"],
    ["p24", "col-span-2 lg:col-span-3 lg:row-span-1", "Women in security"],
    ["p17", "lg:col-span-3 lg:row-span-2", "Discipline in formation"],
    ["p31", "col-span-2 lg:col-span-6 lg:row-span-2", "Every detail matters"],
  ];
  return (
    <div ref={ref}>
      {/* 1 magazine hero */}
      <section className="relative grid min-h-screen overflow-hidden bg-white text-black lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-end px-6 pb-16 pt-40 lg:px-16">
          <SplitHeading
            as="h1"
            text="About"
            trigger={false}
            delay={0.5}
            className="text-[14vw] lg:text-[8.9rem]"
          />
          <p className="max-w-md text-2xl font-medium text-charcoal">
            Professional, disciplined and dependable security services since
            2008.
          </p>
        </div>
        <div className="relative min-h-[60vh] bg-gold">
          <div className="absolute inset-y-0 left-10 flex gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="ab-bar w-3 bg-black" />
            ))}
          </div>
          <img
            src="/images/team/guard-cover.jpg"
            alt="HI-TECH guard in uniform"
            className="ab-guard absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
          />
        </div>
      </section>

      {/* 2 introduction */}
      <section className="bg-ivory px-5 py-20 text-black lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              Rooted in discipline
            </p>
            <SplitHeading
              text="A Bengaluru security company with a military backbone"
              className="text-5xl lg:text-7xl"
            />
          </div>
          <div className="space-y-6 border-l border-gold/50 pl-6 text-xl leading-relaxed text-charcoal/80 lg:col-span-6 lg:col-start-7 lg:pl-10">
            <p>
              HI-TECH PROTECTION SECURITY is a Bengaluru-based security
              management company dedicated to reliable and comprehensive
              protection for businesses, institutions, residential communities
              and individuals.
            </p>
            <p>
              It is an associated entity of HI-TECH SECURITY FORCE, which has
              operations in Karnataka, Tamil Nadu and Kerala.
            </p>
            <p>
              Our security personnel are selected and trained to understand the
              importance of a safe and secure environment, and to conduct
              themselves with professionalism and courtesy.
            </p>
          </div>
        </div>
      </section>

      <AboutMarquee />

      {/* 3 history */}
      <Parallax
        src="/images/team/p14.jpg"
        overlay="bg-black/80"
        className="py-24 lg:py-36"
      >
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            A legacy of protection
          </p>
          <p className="display text-[18vw] leading-[.8] text-gold lg:text-[13rem]">
            <Counter to={2008} />
          </p>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
            HI-TECH SECURITY FORCE was established, committed to delivering
            professional, disciplined and dependable security services across
            Karnataka, Tamil Nadu and Kerala.
          </p>
        </div>
      </Parallax>

      {/* 4 leadership */}
      <section className="bg-beige px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="py-6">
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              Experienced leadership
            </p>
            <SplitHeading
              text="Led by Ex-Army professionals"
              className="text-6xl lg:text-8xl"
            />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80">
              Our organisation is managed by well-experienced and trained
              Ex-Army personnel, bringing military discipline, alertness,
              responsibility and leadership to every aspect of our security
              operations.
            </p>
          </div>
          <div className="border border-gold/30 bg-white p-2 shadow-[0_24px_70px_rgba(37,37,42,.1)]">
            <div className="border border-charcoal/10 p-8 sm:p-10 lg:p-12">
              <p className="mb-8 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
                Leadership
              </p>
              <img
                src="/images/brand/emblem.jpg"
                alt="HI-TECH Protection Security emblem"
                className="mb-8 w-24"
              />
              <p className="display text-4xl text-charcoal sm:text-5xl">
                {site.md.name}
              </p>
              <p className="mt-2 text-lg font-medium text-gold">
                {site.md.role}
              </p>
              <DrawLine className="my-6 w-20" />
              <a
                href={site.phoneHref}
                className="block text-charcoal transition hover:text-gold"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all text-charcoal transition hover:text-gold"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 philosophy */}
      <Philosophy />

      {/* 6 approach */}
      <section className="bg-ivory px-5 py-20 text-black lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            Consistent at every post
          </p>
          <SplitHeading
            text="Our professional approach"
            className="mb-12 text-6xl lg:text-8xl"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(([w, d]) => (
              <div
                key={w}
                className="group min-h-56 border border-charcoal/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:shadow-lg sm:p-8"
              >
                <p className="display text-5xl text-charcoal transition-colors duration-300 group-hover:text-white">
                  {w}
                </p>
                <p className="mt-4 text-base leading-relaxed text-charcoal/75 transition-colors duration-300 group-hover:text-white">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 values */}
      <section className="grid bg-ivory lg:grid-cols-2">
        <div className="relative min-h-[28rem] overflow-hidden p-5 sm:p-8 lg:min-h-[42rem] lg:p-10">
          <RevealImage
            src="/images/industry/core-values.jpg"
            alt="Core values"
            className="h-full min-h-[26rem] border border-charcoal/10 shadow-xl"
            from="top"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            The principles behind our promise
          </p>
          <SplitHeading
            text="Our core values"
            className="mb-8 text-6xl lg:text-8xl"
          />
          {values.map(([k, v]) => (
            <div key={k} className="border-t border-charcoal/15 py-5">
              <div>
                <span className="display text-3xl text-charcoal">{k}</span>
                <p className="mt-2 text-base leading-relaxed text-charcoal/75">
                  {v}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 image showcase */}
      <section className="bg-beige px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
                People make the difference
              </p>
              <SplitHeading
                text="The people behind the uniform"
                className="max-w-3xl text-6xl lg:text-8xl"
              />
            </div>
            <p className="max-w-sm text-base leading-relaxed text-charcoal/70">
              A closer look at the teams whose professionalism protects people
              and places every day.
            </p>
          </div>
          <div className="grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] lg:auto-rows-[9rem] lg:grid-cols-12 lg:gap-4">
            {shots.map(([p, c, caption], i) => (
              <figure
                key={p}
                className={`group relative isolate overflow-hidden border border-white/80 bg-white p-1 shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-1.5 lg:p-2 ${c}`}
              >
                <RevealImage
                  src={`/images/team/${p}.jpg`}
                  alt={caption}
                  from={["left", "bottom", "right", "top"][i % 4]}
                  className="absolute inset-1 overflow-hidden sm:inset-1.5 lg:inset-2"
                  imgClass="transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-1 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100 sm:inset-1.5 lg:inset-2" />
                <figcaption className="absolute bottom-4 left-4 font-display text-lg font-bold uppercase tracking-wide text-white sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9 ISO + CTA */}
      <section className="bg-gold px-5 py-16 text-center text-black lg:py-24">
        <p className="mb-5 font-display text-sm font-bold uppercase tracking-[.22em] text-charcoal/70">
          Quality you can rely on
        </p>
        <SplitHeading
          text="An ISO 9001:2015 Certified Company"
          className="mx-auto max-w-5xl text-6xl lg:text-8xl"
        />
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
          A commitment to consistent, accountable and dependable security
          operations.
        </p>
        <div className="mt-8">
          <Btn to="/contact" dark>
            Work with us
          </Btn>
        </div>
      </section>
      <EnquiryBanner img="/images/team/p22.jpg" />
    </div>
  );
}
