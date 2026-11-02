import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPhoneAlt,
  FaCheck,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  gsap,
  ScrollTrigger,
  TLink,
  SplitHeading,
  RevealImage,
  Parallax,
  Counter,
  reduced,
} from "../components/motion.jsx";
import { site, services, values, clients, approach } from "../config/site.js";

const Btn = ({ to, children, dark }) => (
  <TLink
    to={to}
    className={`group inline-flex items-center gap-3 px-8 py-4 font-display text-xl font-bold uppercase tracking-wide transition ${dark ? "bg-black text-gold hover:bg-white hover:text-black" : "bg-gold text-black hover:bg-white"}`}
  >
    {children}{" "}
    <FaArrowRight className="text-base transition group-hover:translate-x-1.5" />
  </TLink>
);

/* 1. HERO */
function Hero() {
  const ref = useRef(null);
  const heroImages = [
    "/images/team/p15.webp",
    "/images/team/p14.webp",
    "/images/team/p06.webp",
  ];
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".hero-slide");
      gsap.set(slides.slice(1), { clipPath: "inset(100% 0 0 0)" });
      gsap.from(slides, {
        scale: 1.12,
        duration: 2.2,
        ease: "power3.out",
        delay: 0.4,
      });
      const slideTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${(slides.length - 1) * 1400}`,
        },
      });
      slides.slice(1).forEach((slide) => {
        slideTimeline.to(slide, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "none",
        });
      });
      gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, delay: 1.5 });
      gsap.from(".hero-rule", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 2.4,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-end overflow-hidden bg-black"
    >
      {heroImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
          className="hero-slide absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: index ? "inset(100% 0 0 0)" : "inset(0 0 0 0)" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gold" />
      <div className="photo-copy relative mx-auto w-full max-w-[1500px] px-5 pb-16 pt-40 lg:px-10 lg:pb-20">
        <p className="mb-5 font-display text-sm font-bold uppercase tracking-[.24em] text-gold">
          Trusted since 2008 <span className="mx-2 text-white/60">/</span> ISO
          9001:2015 certified
        </p>
        <SplitHeading
          as="h1"
          text="Security you can trust."
          trigger={false}
          delay={0.8}
          className="text-[10.3vw] sm:text-8xl lg:text-[5.6rem]"
        />
        <SplitHeading
          as="p"
          text="Protection you can rely on."
          trigger={false}
          delay={1.1}
          className="text-[7vw] text-gold sm:text-6xl lg:text-[3.5rem]"
        />
        <div className="hero-rule mt-8 h-px w-40 bg-gold" />
        <div className="hero-sub mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-xl leading-relaxed text-white/85">
            Disciplined security guard services for hotels, banks, offices,
            factories, commercial buildings and apartments, managed by Ex-Army
            personnel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Btn to="/contact">Get a Quote</Btn>
            <Btn to="/services" dark>
              Our Services
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 2. BRAND INTRODUCTION */
function Intro() {
  return (
    <section className="grid items-center gap-6 bg-black px-5 py-16 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-20">
      <div className="relative min-h-[28rem] overflow-hidden bg-[#FAF9F6]  lg:min-h-[34rem]">
        <RevealImage
          src="/images/team/guard-cover.webp"
          alt="HI-TECH security guard in uniform holding a radio"
          from="bottom"
          className="absolute inset-0"
          imgClass="mix-blend-multiply !object-contain object-center"
        />
        <div className="absolute bottom-5 left-5 border-l-2 border-gold bg-white/95 px-5 py-4 shadow-lg sm:bottom-8 sm:left-8">
          <p className="display text-2xl text-charcoal">
            Professional protection
          </p>
          <p className="mt-1 text-sm text-charcoal/70">
            Managed by Ex-Army personnel
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center py-8 lg:py-12">
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
          A higher standard of care
        </p>
        <SplitHeading text="Who we are" className="text-7xl lg:text-9xl" />
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-charcoal/80">
          HI-TECH PROTECTION SECURITY is a Bengaluru-based security management
          company providing reliable, comprehensive protection for businesses,
          institutions, residential communities and individuals. We are an
          associated entity of HI-TECH SECURITY FORCE, with operations across
          Karnataka, Tamil Nadu and Kerala.
        </p>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-charcoal/80">
          Effective security takes more than a uniformed presence. Our
          personnel are selected and trained to support a safe environment
          through vigilance, discipline, clear communication and professional,
          courteous conduct.
        </p>
        <div className="mt-10">
          <Btn to="/about">About the company</Btn>
        </div>
      </div>
    </section>
  );
}

/* 3. HISTORY / TIMELINE */
function History() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".tl-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".tl",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });
      gsap.utils.toArray(".tl-item").forEach((el) =>
        gsap.from(el, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }),
      );
    }, ref);
    return () => ctx.revert();
  }, []);
  const items = [
    [
      "2008",
      "HI-TECH SECURITY FORCE is established",
      "Operations across Karnataka, Tamil Nadu and Kerala, committed to professional, disciplined and dependable security services.",
    ],
    [
      "Today",
      "HI-TECH PROTECTION SECURITY",
      "An associated entity of HI-TECH SECURITY FORCE, based in Bengaluru and dedicated to comprehensive protection solutions.",
    ],
    [
      "Certified",
      "ISO 9001:2015",
      "An ISO 9001:2015 Certified Company, led by well-experienced, trained Ex-Army personnel.",
    ],
  ];
  return (
    <section ref={ref} className="bg-charcoal px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            A legacy of trust
          </p>
          <SplitHeading
            text="Our story, from 2008"
            className="text-6xl lg:text-8xl"
          />
          <RevealImage
            src="/images/team/p14.webp"
            alt="HI-TECH security team in morning formation"
            from="right"
            className="mt-8 aspect-[4/3] shadow-xl"
          />
        </div>
        <div className="tl relative lg:col-span-7 lg:pl-12">
          <div className="tl-line absolute bottom-8 left-3 top-8 w-px bg-gold/60 lg:left-0" />
          <ol className="space-y-6 pl-10 lg:pl-12">
            {items.map(([k, t, d]) => (
              <li
                key={k}
                className="tl-item relative border border-charcoal/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <span className="absolute -left-[3.15rem] top-3 h-5 w-5 rounded-full border-4 border-gold bg-charcoal lg:-left-[3.4rem]" />
                <p className="display text-6xl text-gold">{k}</p>
                <h3 className="mt-2 text-xl font-bold text-charcoal lg:text-2xl">
                  {t}
                </h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-charcoal/75">
                  {d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* 4. STRENGTH (facts from the brochure only) */
function Strength() {
  const stats = [
    [2008, "", "Year established"],
    [3, "", "States of operation: Karnataka, Tamil Nadu, Kerala"],
    [6, "", "Sectors protected"],
    [10, "", "Named client brands"],
  ];
  return (
    <Parallax
      src="/images/team/p30.webp"
      alt="Security personnel on parade"
      overlay="bg-black/80"
      className="py-16 lg:py-20"
    >
      <div className="photo-copy mx-auto max-w-[1500px] px-5 lg:px-10">
        <SplitHeading
          text="Built on discipline"
          className="mb-16 text-6xl lg:text-9xl"
        />
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([n, s, l]) => (
            <div
              key={l}
              className="border-t border-gold/70 bg-black/20 p-6 pt-5 backdrop-blur-sm"
            >
              <dt className="display text-7xl text-gold lg:text-8xl">
                <Counter to={n} suffix={s} />
              </dt>
              <dd className="mt-2 text-lg text-white/85">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Parallax>
  );
}

/* 5. SERVICES: expanding panels */
function Services() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="mx-auto mb-14 flex max-w-[1500px] flex-col justify-between gap-6 px-5 lg:flex-row lg:items-end lg:px-10">
        <div>
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            Specialist teams for every environment
          </p>
          <SplitHeading
            text="Professional security guard services"
            className="max-w-4xl text-6xl lg:text-8xl"
          />
        </div>
        <p className="max-w-sm text-lg leading-relaxed text-charcoal/75">
          Trained security personnel for a wide range of establishments and
          environments.
        </p>
      </div>
      <div className="flex flex-col gap-3 px-5 lg:h-[68vh] lg:flex-row lg:gap-4 lg:px-10">
        {services.map((s) => (
          <TLink
            key={s.slug}
            to={`/services/${s.slug}`}
            className="panel group relative min-h-[22rem] flex-1 overflow-hidden border border-charcoal/10 shadow-md transition duration-500 hover:shadow-xl lg:min-h-0"
          >
            <img
              src={s.img}
              alt={s.long}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition duration-500 group-hover:from-black/95" />
            <div className="photo-copy absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <h3 className="display text-4xl text-white lg:text-5xl">
                {s.title}
              </h3>
              <div className="panel-body lg:w-[26rem]">
                <p className="mt-3 text-base leading-relaxed text-white/85">
                  {s.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-display text-xl font-bold uppercase text-gold">
                  Explore <FaArrowRight className="text-sm" />
                </span>
              </div>
            </div>
          </TLink>
        ))}
      </div>
    </section>
  );
}

/* 6. FULL-WIDTH BANNER */
function TrainingBanner() {
  return (
    <Parallax
      src="/images/team/p06.webp"
      alt="Fire safety drill conducted for security personnel"
      overlay="bg-gradient-to-r from-black/90 via-black/50 to-transparent"
      className="flex min-h-[85vh] items-center"
    >
      <div className="photo-copy mx-auto w-full max-w-[1500px] px-5 lg:px-10">
        <p className="mb-5 font-display text-sm font-bold uppercase tracking-[.22em] text-gold">
          Prepared for the moments that matter
        </p>
        <SplitHeading
          text="Alert. Trained. Ready to respond."
          className="max-w-3xl text-6xl lg:text-9xl"
        />
        <p className="mt-6 max-w-lg text-xl text-white/85">
          Our personnel are selected and trained to maintain a safe environment
          while acting with professionalism and courtesy.
        </p>
      </div>
    </Parallax>
  );
}

/* 7. WHY CHOOSE */
function Why() {
  const pts = [
    "Managed by well-experienced, trained Ex-Army personnel",
    "Military discipline, alertness, responsibility and leadership in every operation",
    "Personnel and practices suited to the specific nature of each location",
    "An ISO 9001:2015 Certified Company",
    "Operations across Karnataka, Tamil Nadu and Kerala since 2008",
  ];
  return (
    <section className="relative isolate overflow-hidden bg-beige text-charcoal">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 hidden h-[34rem] w-[34rem] rounded-full border-[2.5rem] border-charcoal/[.025] lg:block" />
      <div className="mx-auto grid max-w-[1600px] items-stretch lg:min-h-[550px] lg:grid-cols-[1.04fr_.96fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-10 sm:px-10 lg:px-16 lg:py-10">
          <p className="font-display text-sm font-bold uppercase tracking-[.24em] text-gold">
            The HI-TECH difference
          </p>
          <SplitHeading
            text="Why choose HI-TECH"
            className="mt-4 text-5xl text-black sm:text-6xl lg:text-[clamp(3.5rem,5.2vw,5.3rem)]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
            Disciplined people. Thoughtful protection. Trusted since 2008.
          </p>
          <ul className="mt-7 grid max-w-2xl grid-cols-1 gap-x-8 rounded-2xl border border-charcoal/10 bg-white/45 p-5 shadow-sm sm:grid-cols-2 sm:p-6">
            {pts.map((p) => (
              <li key={p} className="flex items-start gap-3 border-b border-charcoal/[.08] py-3 text-sm leading-relaxed text-charcoal/90 last:border-0 sm:text-[15px]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-[10px] text-white"><FaCheck /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[28rem] overflow-hidden rounded-r-xl bg-beige lg:min-h-full">
          <div aria-hidden="true" className="pointer-events-none absolute right-8 top-8 z-10 hidden font-display text-[20rem] leading-none text-charcoal/[.045] lg:block">★</div>
          <RevealImage
            src="/images/team/guard-cover.webp"
            alt="HI-TECH guard in grey uniform with radio"
            from="right"
            zoom={false}
            className="absolute inset-0"
            imgClass="!object-contain !object-bottom scale-[1.05] translate-y-[6%] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
}

/* 8. APPROACH: large type rows */
function Approach() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".ap-row").forEach((r) => {
        gsap.from(r.querySelector(".ap-word"), {
          xPercent: -30,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: r, start: "top 85%" },
        });
        gsap.from(r.querySelector(".ap-line"), {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: { trigger: r, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="bg-black px-5 py-20 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
          How we protect what matters
        </p>
        <SplitHeading
          text="Our approach"
          className="mb-10 text-3xl text-gold lg:text-5xl"
        />
        {approach.map(([w, d]) => (
          <div key={w} className="ap-row group relative py-6">
            <div className="ap-line absolute inset-x-0 top-0 h-px bg-charcoal/20" />
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-end">
              <h3 className="ap-word display text-[13.2vw] leading-[.85] text-charcoal transition-colors duration-500 group-hover:text-gold lg:text-[7rem]">
                {w}
              </h3>
              <p className="max-w-lg pb-4 text-lg leading-relaxed text-charcoal/75">
                {d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 9. CORE VALUES */
function Values() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <RevealImage
          src="/images/industry/core-values.webp"
          alt="HI-TECH core values illustration"
          from="left"
          className="aspect-square border border-charcoal/10 bg-white p-3 shadow-xl lg:mx-auto lg:max-w-[40rem]"
        />
        <div>
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            What guides every action
          </p>
          <SplitHeading
            text="Discipline. Vigilance. Responsibility."
            className="text-6xl lg:text-8xl"
          />
          <dl className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {values.map(([k, v]) => (
              <div
                key={k}
                className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
              >
                <dt className="display text-3xl text-gold">{k}</dt>
                <dd className="text-lg text-charcoal/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 10. HORIZONTAL SCROLL: our people */
function OnDuty() {
  const wrap = useRef(null),
    track = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const dist = () => track.current.scrollWidth - window.innerWidth;
    const tween = gsap.to(track.current, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: wrap.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + dist(),
        invalidateOnRefresh: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
  const shots = [
    ["p23", "On post"],
    ["p24", "Women guards on parade"],
    ["p29", "Gate team"],
    ["p17", "Morning formation"],
    ["p31", "Site briefing"],
    ["p12", "Fire drill"],
    ["p03", "Hotel lobby team"],
  ];
  return (
    <section
      ref={wrap}
      className="flex min-h-screen items-center overflow-hidden bg-black py-12 lg:h-screen lg:py-0"
    >
      <div
        ref={track}
        className="flex w-max items-center gap-6 overflow-visible px-5 lg:gap-10 lg:px-[8vw]"
      >
        <div className="w-[80vw] shrink-0 lg:w-[34vw]">
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
            People you can count on
          </p>
          <h2 className="display text-6xl lg:text-9xl">
            Our people <span className="text-gold">on duty</span>
          </h2>
          <p className="mt-5 text-lg text-charcoal/70">
            Real teams, real posts. Scroll to see them.
          </p>
        </div>
        {shots.map(([f, c], i) => (
          <figure
            key={f}
            className={`relative h-72 w-[78vw] shrink-0 overflow-hidden border border-charcoal/10 shadow-xl lg:h-[48vh] lg:max-h-[32rem] lg:w-[32vw] ${i % 2 ? "lg:translate-y-8" : "lg:-translate-y-8"}`}
          >
            <img
              src={`/images/team/${f}.webp`}
              alt={c}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 font-display text-lg font-bold uppercase text-charcoal shadow-lg">
              {c}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* 11. PERSONNEL SHOWCASE */
function Personnel() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 lg:px-10 lg:pt-28">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              A uniform that stands for trust
            </p>
            <SplitHeading
              text="The uniform of trust"
              className="text-6xl lg:text-9xl"
            />
          </div>
          <p className="max-w-lg text-xl leading-relaxed text-charcoal">
            Grey shirt, black trousers, the eagle emblem on the sleeve and the
            HI-TECH badge on the chest. Every guard is identifiable, disciplined
            and equipped for the post.
          </p>
        </div>
      </div>
      <RevealImage
        src="/images/team/uniform-sheet.webp"
        alt="HI-TECH uniform shown from front, side and back"
        from="bottom"
        className="mx-auto mt-10 h-[clamp(18rem,27vw,30rem)] max-w-[1500px] border-y border-charcoal/10 bg-ivory px-5 py-6 lg:mt-14 lg:px-10"
        imgClass="object-contain object-top"
      />
    </section>
  );
}

/* 12. CLIENTS: marquee */
function Clients() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.to(".mq-a", {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
      gsap.fromTo(
        ".mq-b",
        { xPercent: -50 },
        { xPercent: 0, duration: 46, ease: "none", repeat: -1 },
      );
    }, ref);
    return () => ctx.revert();
  }, []);
  const row = (cls, list) => (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
      }}
    >
      <div className={`${cls} flex w-max gap-4 px-4 sm:gap-6 lg:gap-8`}>
        {[...list, ...list].map(([n, f], i) => (
          <div
            key={`${f}-${i}`}
            aria-hidden={i >= list.length}
            className="grid h-28 w-48 shrink-0 place-items-center p-5 transition duration-300 hover:-translate-y-1 sm:h-32 sm:w-56 sm:p-6"
          >
            <img
              src={`/images/clients/${f}.webp`}
              alt={i < list.length ? n : ""}
              loading="lazy"
              className="h-[4.5rem] w-full min-w-0 object-contain sm:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="overflow-hidden border-y border-charcoal/10 bg-charcoal py-20 sm:py-20 lg:py-20"
    >
      <div className="mx-auto mb-12 flex max-w-[1500px] flex-col gap-3 px-5 sm:mb-14 lg:px-10">
        <p className="font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
          Trusted partnerships
        </p>
        <SplitHeading
          text="Brands that trust us"
          className="text-5xl lg:text-7xl"
        />
        <p className="max-w-xl text-base leading-relaxed text-charcoal/70">
          Proud to support businesses and organisations across India.
        </p>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {row("mq-a", clients.slice(0, 5))}
        {row("mq-b", clients.slice(5))}
      </div>
    </section>
  );
}

/* 13. CLIENT TESTIMONIAL */
function Testimonial() {
  const ref = useRef(null);
  const quoteRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const testimonials = [
    {
      quote:
        "The security team has brought a reassuring, professional presence to our workplace. Their courteous approach and dependable day-to-day support have helped our staff and visitors feel welcome.",
      name: "Ananya Rao",
      role: "Facilities Manager",
      organisation: "Northstar Business Park",
    },
    {
      quote:
        "From visitor management to keeping a watchful eye on the premises, the team is consistent and professional. Communication has been clear, and support has been responsive whenever we have needed it.",
      name: "Karan Mehta",
      role: "Operations Director",
      organisation: "Meridian Retail Group",
    },
    {
      quote:
        "The guards are attentive, approachable and respectful with residents and guests. Their steady presence at the entrances has helped make our community feel more organised and secure.",
      name: "Priya Nair",
      role: "Community Association Lead",
      organisation: "Lakeview Residences",
    },
  ];

  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-content", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (reduced() || !quoteRef.current) return;
    gsap.fromTo(
      quoteRef.current,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
    );
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || paused || reduced()) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [isVisible, paused, testimonials.length]);

  const changeSlide = (direction) => {
    setActiveIndex(
      (index) =>
        (index + direction + testimonials.length) % testimonials.length,
    );
  };
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-ivory px-5 py-16 text-charcoal sm:py-20 lg:px-10 lg:py-20"
      aria-label="Client testimonials"
    >
      <div
        className="testimonial-content mx-auto max-w-[1200px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPaused(false);
          }
        }}
      >
        <div className="mb-8 flex flex-col justify-between gap-6 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Client testimonials
            </p>
            <h2 className="display text-4xl text-charcoal sm:text-5xl lg:text-6xl">
              Trust, in their words.
            </h2>
            <p className="mt-3 text-base text-charcoal/60 sm:text-lg">
              Illustrative placeholders — replace with approved client feedback.
            </p>
          </div>
        </div>
        <div
          ref={quoteRef}
          key={activeIndex}
          className="relative isolate"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2 translate-y-2 rotate-[0.8deg] rounded-3xl bg-gold/80 sm:translate-x-3 sm:translate-y-3"
          />
          <div
            className="relative grid -rotate-[0.35deg] overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-[0_24px_70px_rgba(37,37,42,.1)] lg:grid-cols-[minmax(15rem,0.34fr)_1fr]"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}
            aria-live="polite"
          >
          <div className="relative min-h-64 overflow-hidden bg-beige sm:min-h-72 lg:min-h-[25rem]">
            <img
              src="/images/team/guard-cover.webp"
              alt="HI-TECH security team member in uniform"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 border-l-2 border-gold bg-white/95 px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
              HI-TECH Protection Security
            </span>
          </div>
          <div className="relative flex min-w-0 flex-col justify-between gap-8 p-6 sm:p-9 lg:p-12">
            <FaQuoteLeft
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-5 text-7xl text-gold/10 sm:right-10 sm:top-7 sm:text-9xl"
            />
            <div className="relative z-10">
              <span className="mb-5 grid h-12 w-12 place-items-center bg-gold text-white shadow-sm">
                <FaQuoteLeft aria-hidden="true" className="text-xl" />
              </span>
              <blockquote className="max-w-4xl font-body text-[clamp(1.1rem,2vw,1.65rem)] leading-relaxed text-charcoal/90">
                “{activeTestimonial.quote}”
              </blockquote>
            </div>
            <footer className="relative z-10 flex flex-col justify-between gap-6 border-t border-charcoal/10 pt-6 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-beige font-display text-lg font-bold uppercase text-charcoal">
                  {activeTestimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xl font-bold text-charcoal sm:text-2xl">
                    {activeTestimonial.name}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-charcoal/60 sm:text-base">
                    {activeTestimonial.role}{" "}
                    <span className="px-1 text-gold">|</span>{" "}
                    {activeTestimonial.organisation}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="mr-2 font-display text-sm font-bold uppercase tracking-wider text-charcoal/55">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => changeSlide(-1)}
                  aria-label="Previous testimonial"
                  className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/15 bg-white text-charcoal shadow-sm transition hover:border-gold hover:bg-gold hover:text-white"
                >
                  <FaArrowLeft aria-hidden="true" className="text-sm" />
                </button>
                <button
                  type="button"
                  onClick={() => changeSlide(1)}
                  aria-label="Next testimonial"
                  className="grid h-12 w-12 place-items-center rounded-full bg-gold text-white shadow-[0_8px_20px_rgba(37,37,42,.15)] transition hover:bg-charcoal"
                >
                  <FaArrowRight aria-hidden="true" className="text-sm" />
                </button>
              </div>
            </footer>
          </div>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-center gap-3" aria-label="Testimonial pagination">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-9 bg-gold" : "w-2.5 bg-gold/35 hover:bg-gold/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 14. ENQUIRY BANNER */
function Enquiry() {
  return (
    <Parallax
      src="/images/team/p13.webp"
      alt="Security team formation"
      overlay="bg-black/75"
      className="py-28 lg:py-44"
    >
      <div className="mx-auto max-w-[1500px] px-5 text-center lg:px-10">
        <SplitHeading
          text="Tell us what you need to protect"
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
            className="inline-flex items-center gap-3 border-2 border-gold px-8 py-4 font-display text-xl font-bold uppercase text-[#C6A15B] transition hover:bg-gold hover:!text-black focus-visible:bg-gold focus-visible:!text-black"
          >
            <FaPhoneAlt className="text-base" />
            {site.phone}
          </a>
        </div>
      </div>
    </Parallax>
  );
}

export default function Home() {
  useLayoutEffect(() => {
    document.title =
      "HI-TECH Protection Security | Security Guard Services, Bengaluru";
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <Hero />
      <Intro />
      <History />
      <Strength />
      <Services />
      <TrainingBanner />
      <Why />
      <Approach />
      <Values />
      <OnDuty />
      <Personnel />
      <Clients />
      <Testimonial />
      <Enquiry />
    </>
  );
}
