import { useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import {
  gsap,
  ScrollTrigger,
  TLink,
  SplitHeading,
  RevealImage,
  reduced,
} from "../components/motion.jsx";
import { Btn, EnquiryBanner, FAQ, DrawLine } from "../components/ui.jsx";
import { services, sectorPages, approach, site } from "../config/site.js";
import Stub from "./Stub.jsx";

/* ---------- Heroes ---------- */
function Hero({ s, d }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      gsap.from(".sh-img", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.2,
        duration: 1.6,
        ease: "power4.inOut",
        delay: 0.2,
      });
      gsap.from(".sh-lead", { y: 30, opacity: 0, duration: 1, delay: 1.3 });
      gsap.to(".sh-img img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => c.revert();
  }, []);
  const title = (
    <SplitHeading
      as="h1"
      text={s.long}
      trigger={false}
      delay={0.7}
      className={`${d.kind === "split" ? "break-words text-5xl lg:text-7xl" : "break-words text-[7vw] lg:text-[4.75rem]"} ${s.slug === "bank-financial-security" ? "text-white" : ""}`}
    />
  );
  const lead = (
    <p className="sh-lead mt-6 max-w-lg text-xl text-white/85">{d.lead}</p>
  );
  if (d.kind === "split")
    return (
      <section
        ref={ref}
        className="grid min-h-screen bg-charcoal lg:grid-cols-[1fr_1.1fr]"
      >
        <div className="relative flex flex-col justify-center px-6 pb-16 pt-36 lg:px-16">
          <div className="absolute inset-y-0 left-0 w-3 bg-gold" />
          {title}
          {lead}
          <div className="mt-8">
            <Btn to="/contact">Get a Quote</Btn>
          </div>
        </div>
        <div className="sh-img relative min-h-[60vh] overflow-hidden">
          <img
            src={d.hero}
            alt={s.long}
            className="absolute inset-0 h-[115%] w-full object-cover"
          />
        </div>
      </section>
    );
  if (d.kind === "inset")
    return (
      <section
        ref={ref}
        className={`relative flex min-h-screen items-end overflow-hidden ${d.theme === "light" ? "bg-white" : "bg-black"}`}
      >
        <div className="sh-img absolute inset-0 overflow-hidden">
          <img src={d.hero} alt="" className="h-[115%] w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="photo-copy relative mx-auto grid w-full max-w-[1500px] items-end gap-10 px-5 pb-16 pt-40 lg:grid-cols-[1.4fr_1fr] lg:px-10 lg:pb-24">
          <div>
            {title}
            {lead}
          </div>
          <RevealImage
            src={s.img}
            alt={s.long}
            from="right"
            className="hidden aspect-[4/3] border-4 border-gold lg:block"
          />
        </div>
      </section>
    );
  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-end overflow-hidden bg-black"
    >
      <div className="sh-img absolute inset-0 overflow-hidden">
        <img
          src={d.hero}
          alt={s.long}
          className="h-[115%] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="photo-copy relative mx-auto w-full max-w-[1500px] px-5 pb-16 pt-40 lg:px-10 lg:pb-24">
        {title}
        {lead}
      </div>
    </section>
  );
}

/* ---------- Showcases ---------- */
function Showcase({ slug, shots, s }) {
  const ref = useRef(null);
  const d = sectorPages[slug];
  useLayoutEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      if (d.show === "crossfade") {
        const imgs = gsap.utils.toArray(".cf");
        gsap.set(imgs.slice(1), { opacity: 0 });
        const tl = gsap.timeline({ repeat: -1 });
        imgs.forEach((im, i) => {
          const n = imgs[(i + 1) % imgs.length];
          tl.fromTo(
            im,
            { scale: 1 },
            { scale: 1.12, duration: 5, ease: "none" },
          )
            .to(n, { opacity: 1, duration: 1.4 }, "-=1.4")
            .to(im, { opacity: 0, duration: 0.1 });
        });
      }
      if (d.show === "swap") {
        const imgs = gsap.utils.toArray(".sw");
        gsap.set(imgs.slice(1), { clipPath: "inset(100% 0 0 0)" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2200",
          },
        });
        imgs.slice(1).forEach((im, i) => {
          tl.to(im, { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "none" });
          tl.to(`.sw-t${i}`, { opacity: 0.3 }, "<");
          tl.to(`.sw-t${i + 1}`, { opacity: 1 }, "<");
        });
      }
      if (d.show === "horizontal") {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          const dist = () =>
            ref.current.querySelector(".hz").scrollWidth - innerWidth;
          gsap.to(".hz", {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              pin: true,
              scrub: 1,
              end: () => "+=" + dist(),
              invalidateOnRefresh: true,
            },
          });
        });
      }
      if (d.show === "collage") {
        const frames = gsap.utils.toArray(".cl");
        gsap.fromTo(
          frames,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 78%" },
          },
        );
        frames.forEach((frame) =>
          gsap.fromTo(
            frame.querySelector("img"),
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          ),
        );
      }
      if (d.show === "arches")
        gsap.from(".ar", {
          y: 120,
          opacity: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        });
      if (d.show === "stack") {
        const items = gsap.utils.toArray(".stack-item");
        gsap.fromTo(
          items,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.16,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 78%" },
          },
        );
        items.forEach((item) =>
          gsap.fromTo(
            item.querySelector(".stack-img"),
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          ),
        );
      }
    }, ref);
    return () => c.revert();
  }, [slug]);
  const cap = ["On parade", "In position", "Ready for the shift"];
  if (d.show === "crossfade")
    return (
      <section ref={ref} className="relative h-[85vh] overflow-hidden bg-black">
        {shots.map((p, i) => (
          <img
            key={p}
            src={p}
            alt=""
            className="cf absolute inset-0 h-full w-full object-cover"
          />
        ))}
        <div className="photo-copy absolute inset-0 grid place-items-center bg-black/45 px-6 text-center">
          <SplitHeading
            text="Hospitality, quietly protected"
            className="max-w-4xl text-6xl lg:text-9xl"
          />
        </div>
      </section>
    );
  if (d.show === "swap")
    return (
      <section ref={ref} className="relative h-screen overflow-hidden bg-black">
        {shots.map((p, i) => (
          <img
            key={p}
            src={p}
            alt={cap[i]}
            className="sw absolute inset-0 h-full w-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="photo-copy absolute bottom-12 left-5 space-y-2 lg:left-16">
          {cap.map((c, i) => (
            <p
              key={c}
              className={`sw-t${i} display text-5xl lg:text-8xl ${i ? "opacity-30" : ""}`}
            >
              {c}
            </p>
          ))}
        </div>
      </section>
    );
  if (d.show === "horizontal")
    return (
      <section
        ref={ref}
        className="overflow-hidden bg-charcoal py-16 lg:flex lg:h-screen lg:items-center lg:py-0"
      >
        <div className="hz flex gap-6 overflow-x-auto px-5 lg:w-max lg:gap-10 lg:overflow-visible lg:px-[8vw]">
          <h2 className="display w-[70vw] shrink-0 text-7xl lg:w-[30vw] lg:text-9xl">
            Built <span className="text-gold">to hold</span> the line
          </h2>
          {shots.map((p, i) => (
            <img
              key={p}
              src={p}
              alt={cap[i]}
              className="h-72 w-[80vw] shrink-0 object-cover lg:h-[65vh] lg:w-[45vw]"
            />
          ))}
        </div>
      </section>
    );
  if (d.show === "collage")
    return (
      <section
        ref={ref}
        className="overflow-hidden bg-ivory px-5 py-20 sm:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-5 border-b border-charcoal/15 pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between lg:pb-10">
            <div>
              <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.22em] text-gold">
                Commercial building security
              </p>
              <SplitHeading
                text="Organised. Secure. Professional."
                className="max-w-3xl text-5xl text-charcoal sm:text-6xl lg:text-7xl"
              />
            </div>
            <p className="max-w-sm text-base leading-relaxed text-charcoal/70">
              A considered presence helps workplaces stay welcoming, orderly and
              protected.
            </p>
          </div>
          <div className="grid auto-rows-[15rem] grid-cols-1 gap-4 sm:auto-rows-[19rem] sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-12 lg:gap-5">
            {shots.map((src, i) => {
              const captions = [
                "A disciplined team, ready for duty",
                "Training for real-world response",
                "A professional presence at every entrance",
              ];
              const placement = [
                "sm:col-span-2 lg:col-span-7 lg:row-span-2",
                "lg:col-span-5",
                "lg:col-span-5",
              ];
              return (
                <figure
                  key={src}
                  className={`cl group relative isolate overflow-hidden border border-white bg-white p-1.5 shadow-md sm:p-2 ${placement[i]}`}
                >
                  <img
                    src={src}
                    alt={captions[i]}
                    loading="lazy"
                    className="absolute inset-1.5 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] object-cover transition duration-700 group-hover:scale-105 sm:inset-2 sm:h-[calc(100%-1rem)] sm:w-[calc(100%-1rem)]"
                  />
                  <div className="absolute inset-1.5 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:inset-2" />
                  <figcaption className="photo-copy absolute bottom-5 left-5 right-5 border-l-2 border-gold pl-4 sm:bottom-6 sm:left-6">
                    <span className="font-display text-xs font-bold uppercase tracking-[.18em] text-gold">
                      HI-TECH Protection Security
                    </span>
                    <span className="display mt-1 block text-2xl text-white sm:text-3xl">
                      {captions[i]}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    );
  if (d.show === "arches")
    return (
      <section
        ref={ref}
        className="bg-white px-5 py-24 text-black lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <SplitHeading
            text="A familiar, friendly presence"
            className="mb-14 text-6xl lg:text-8xl"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {shots.map((p, i) => (
              <img
                key={p}
                src={p}
                alt={cap[i]}
                className={`ar aspect-[3/4] w-full rounded-t-[999px] object-cover ${i === 1 ? "md:mt-16" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  return (
    <section ref={ref} className="bg-beige px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              The people behind the protection
            </p>
            <h2 className="display max-w-3xl text-5xl text-charcoal lg:text-7xl">
              Present. Prepared. Professional.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-charcoal/70">
            A closer look at the discipline and care our teams bring to every
            assignment.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[repeat(2,minmax(14rem,21rem))] lg:gap-5">
          {shots.map((p, i) => (
            <figure
              key={p}
              className={`stack-item group relative isolate h-[19rem] overflow-hidden border border-white/80 bg-white p-1.5 shadow-md sm:h-[24rem] lg:h-auto lg:p-2 ${i === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`}
            >
              <img
                src={p}
                alt={`Bank and financial security personnel: ${cap[i]}`}
                loading="lazy"
                className="stack-img absolute inset-1.5 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] object-cover transition duration-700 group-hover:scale-105 lg:inset-2 lg:h-[calc(100%-1rem)] lg:w-[calc(100%-1rem)]"
              />
              <div className="absolute inset-1.5 bg-gradient-to-t from-black/75 via-black/10 to-transparent lg:inset-2" />
              <figcaption className="photo-copy absolute bottom-5 left-5 right-5 border-l-2 border-gold pl-4 sm:bottom-7 sm:left-7">
                <p className="font-display text-xs font-bold uppercase tracking-[.2em] text-gold">
                  Banking &amp; corporate security
                </p>
                <p className="display mt-2 text-3xl text-white sm:text-4xl">
                  {cap[i]}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug),
    d = sectorPages[slug];
  useLayoutEffect(() => {
    if (s) document.title = `${s.long} | HI-TECH Protection Security`;
    ScrollTrigger.refresh();
  }, [slug]);
  if (!s) return <Stub title="Page not found" />;
  const light = d.theme === "light";
  const faq = [
    [`What does HI-TECH provide for ${s.title.toLowerCase()}?`, s.text],
    [
      "Who manages the guards?",
      "HI-TECH is managed by well-experienced and trained Ex-Army personnel, bringing military discipline, alertness, responsibility and leadership to every aspect of security operations.",
    ],
    [
      "Where do you operate?",
      "HI-TECH SECURITY FORCE, established in 2008, operates in Karnataka, Tamil Nadu and Kerala. HI-TECH PROTECTION SECURITY is based in Bengaluru.",
    ],
    [
      "How do I get a quote?",
      `Call ${site.phone}, message us on WhatsApp or use the enquiry form. We will discuss the specific nature of your location and suggest suitable personnel and practices.`,
    ],
  ];
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <Hero s={s} d={d} />
      <section
        className={`px-5 py-24 lg:px-10 lg:py-36 ${light ? "bg-white text-black" : "bg-black"}`}
      >
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-12">
          <SplitHeading
            text={`Security for ${s.title.toLowerCase()}`}
            className="text-6xl lg:col-span-6 lg:text-8xl"
          />
          <div className="lg:col-span-5 lg:col-start-8">
            <p
              className={`text-2xl leading-relaxed ${light ? "text-charcoal" : "text-white/85"}`}
            >
              {d.intro}
            </p>
            <DrawLine className="mt-10 w-32" />
          </div>
        </div>
      </section>
      <section
        className={`px-5 pb-24 lg:px-10 lg:pb-36 ${light ? "bg-white text-black" : "bg-black"}`}
      >
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display mb-10 text-4xl text-gold lg:text-6xl">
            What we watch over
          </h2>
          <div className="grid gap-px bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {d.focus.map(([t, x]) => (
              <div
                key={t}
                className={`group p-8 transition duration-500 hover:bg-gold hover:text-black ${light ? "bg-[#f3f1ec]" : "bg-charcoal"}`}
              >
                <h3 className="display text-4xl">{t}</h3>
                <p className="mt-4 text-lg opacity-80">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="grid bg-gold text-black lg:grid-cols-2">
        <RevealImage
          src={s.img}
          alt={`${s.long} environment`}
          from="left"
          className="min-h-[26rem]"
        />
        <div className="px-6 py-20 lg:px-20">
          <SplitHeading
            text="Key responsibilities"
            className="text-6xl lg:text-7xl"
          />
          <ul className="mt-8 space-y-4">
            {d.duties.map((x) => (
              <li key={x} className="flex gap-4 text-xl font-medium">
                <span className="mt-1.5 grid h-7 w-7 shrink-0 place-items-center bg-black text-sm text-gold">
                  <FaCheck />
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Showcase slug={slug} shots={d.shots} s={s} />
      <section className="bg-charcoal px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display mb-12 text-5xl lg:text-7xl">How we work</h2>
          <div className="grid gap-10 lg:grid-cols-4">
            {approach.map(([w, x], i) => (
              <div key={w}>
                <DrawLine />
                <p className="display mt-6 text-6xl text-gold">{w}</p>
                <p className="mt-3 text-lg text-white/75">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`px-5 py-24 lg:px-10 lg:py-36 ${light ? "bg-[#f3f1ec] text-black" : "bg-black"}`}
      >
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2">
          <div>
            <SplitHeading
              text="Why choose HI-TECH"
              className="text-6xl lg:text-8xl"
            />
            <ul className="mt-8 space-y-4 text-xl">
              {[
                "Managed by trained Ex-Army personnel",
                "Practices suited to the nature of each location",
                "An ISO 9001:2015 Certified Company",
                "Operating in Karnataka, Tamil Nadu and Kerala",
              ].map((x) => (
                <li key={x} className="flex gap-4">
                  <span className="mt-1.5 grid h-7 w-7 shrink-0 place-items-center bg-gold text-sm text-black">
                    <FaCheck />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              Here to help
            </p>
            <h2 className="display mb-8 text-5xl text-charcoal lg:text-6xl">
              Frequently asked questions
            </h2>
            <FAQ items={faq} light={light} />
          </div>
        </div>
      </section>
      <section className="bg-charcoal px-5 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-4 md:grid-cols-3">
          {others.map((o) => (
            <TLink
              key={o.slug}
              to={`/services/${o.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden"
            >
              <img
                src={o.img}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/30" />
              <p className="photo-copy display absolute bottom-5 left-5 text-4xl text-white">
                {o.long}
              </p>
            </TLink>
          ))}
        </div>
      </section>
      <EnquiryBanner
        img={d.shots[1]}
        title={`Secure your ${s.title.toLowerCase()}`}
      />
    </>
  );
}
