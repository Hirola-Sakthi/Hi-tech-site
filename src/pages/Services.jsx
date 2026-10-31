import { useLayoutEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import {
  gsap,
  ScrollTrigger,
  TLink,
  SplitHeading,
  RevealImage,
  Parallax,
  reduced,
} from "../components/motion.jsx";
import { Btn, EnquiryBanner } from "../components/ui.jsx";
import { services, sectorPages } from "../config/site.js";

export default function Services() {
  const statementRef = useRef(null);
  const statement =
    "Every client has different security requirements. We match personnel and practice to the nature of each location.";
  useLayoutEffect(() => {
    document.title = "Security Guard Services | HI-TECH Protection Security";
    ScrollTrigger.refresh();
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-statement-word",
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: statementRef.current,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=1600",
          },
        },
      );
    }, statementRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Parallax
        src="/images/team/p19.jpg"
        overlay="bg-gradient-to-t from-black via-black/60 to-black/40"
        className="flex min-h-screen items-end"
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-20 pt-44 lg:px-10">
          <SplitHeading
            as="h1"
            text="Six sectors. One standard."
            trigger={false}
            delay={0.5}
            className="text-[9.5vw] lg:text-[6.7rem]"
          />
          <p className="mt-6 max-w-xl text-xl text-white/85">
            Trained security personnel for a wide range of establishments and
            environments.
          </p>
        </div>
      </Parallax>
      <section
        ref={statementRef}
        className="grid min-h-[65vh] place-items-center bg-gold px-5 py-16 text-black lg:min-h-[70vh] lg:px-10 lg:py-20"
      >
        <p className="display mx-auto max-w-6xl text-5xl lg:text-8xl">
          {statement.split(" ").map((word, i) => (
            <span
              key={i}
              className="service-statement-word inline-block pr-[.25em]"
            >
              {word}
            </span>
          ))}
        </p>
      </section>
      {services.map((s, i) => {
        const d = sectorPages[s.slug],
          flip = i % 2,
          light = i % 3 === 2;
        return (
          <section
            key={s.slug}
            className={`${light ? "bg-white text-black" : i % 2 ? "bg-charcoal" : "bg-black"}`}
          >
            <div
              className={`mx-auto grid max-w-[1500px] items-stretch lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative min-h-[32rem] overflow-hidden">
                <RevealImage
                  src={d.shots[0]}
                  alt={s.long}
                  from={flip ? "right" : "left"}
                  className="absolute inset-0"
                />
                <RevealImage
                  src={s.img}
                  alt={`${s.long} environment`}
                  from="bottom"
                  className="absolute -bottom-0 right-0 hidden aspect-[4/3] w-2/5 border-8 border-gold lg:block"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-16 lg:px-16">
                <SplitHeading text={s.long} className="text-5xl lg:text-7xl" />
                <p
                  className={`mt-6 text-xl leading-relaxed ${light ? "text-charcoal" : "text-white/80"}`}
                >
                  {s.text}
                </p>
                <ul className="mt-6 space-y-2">
                  {d.duties.slice(0, 4).map((x) => (
                    <li key={x} className="flex items-center gap-3 text-lg">
                      <span className="grid h-6 w-6 place-items-center bg-gold text-xs text-black">
                        <FaCheck />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Btn to={`/services/${s.slug}`} light={light}>
                    View {s.title}
                  </Btn>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <EnquiryBanner img="/images/team/p27.jpg" />
    </>
  );
}
