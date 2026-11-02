import { useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  gsap,
  ScrollTrigger,
  TLink,
  SplitHeading,
  Parallax,
  reduced,
} from "../components/motion.jsx";
import { EnquiryBanner, Btn, DrawLine } from "../components/ui.jsx";
import { posts } from "../config/posts.js";
import { services } from "../config/site.js";
import Stub from "./Stub.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!post) return;
    document.title = `${post.title} | HI-TECH Protection Security`;
    if (reduced()) return;

    const c = gsap.context(() => {
      gsap.to(".rp", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".article",
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });
      gsap.utils.toArray(".art > *").forEach((el) =>
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }),
      );
      gsap.from(".bp-img", { scale: 1.3, duration: 2, ease: "power3.out" });
    }, ref);

    return () => c.revert();
  }, [slug]);

  if (!post) return <Stub title="Article not found" />;

  const svc = services.find((s) => s.slug === post.service);
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div ref={ref}>
      <div className="rp fixed left-0 top-0 z-[65] h-1.5 w-full origin-left scale-x-0 bg-gold" />
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-black">
        <img
          src={post.img}
          alt=""
          loading="eager"
          fetchPriority="high"
          className="bp-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="photo-copy relative mx-auto w-full max-w-5xl px-5 pb-16 pt-40 lg:px-10">
          <TLink
            to="/blog"
            className="font-display text-base font-bold uppercase text-gold"
          >
            Back to field notes
          </TLink>
          <SplitHeading
            as="h1"
            text={post.title}
            trigger={false}
            delay={0.4}
            className="mt-4 text-5xl sm:text-6xl lg:text-8xl"
          />
          <p className="mt-6 text-base text-white/80">
            {post.cat} &middot; {post.mins} min read
          </p>
        </div>
      </section>
      <article className="article bg-white px-5 py-20 text-black lg:py-28">
        <div className="art mx-auto max-w-2xl space-y-6">
          <p className="text-xl font-medium leading-relaxed text-charcoal">
            {post.excerpt}
          </p>
          <DrawLine className="w-24" />
          {post.body.map(([t, x], i) =>
            t === "h" ? (
              <h2 key={i} className="display pt-6 text-3xl lg:text-4xl">
                {x}
              </h2>
            ) : (
              <p key={i} className="text-lg leading-[1.75] text-charcoal">
                {x}
              </p>
            ),
          )}
        </div>
        {svc && (
          <div className="mx-auto mt-16 max-w-2xl bg-black p-8 text-white">
            <p className="display text-3xl text-gold">
              Need {svc.title.toLowerCase()} security?
            </p>
            <p className="mt-3 text-base text-white/80">{svc.text}</p>
            <div className="mt-6">
              <Btn to={`/services/${svc.slug}`}>See {svc.long}</Btn>
            </div>
          </div>
        )}
      </article>
      <section className="bg-charcoal px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display mb-8 text-4xl text-white">Keep reading</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {more.map((p) => (
              <TLink
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="photo-copy group relative block aspect-[4/3] overflow-hidden"
              >
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <p className="display absolute bottom-5 left-5 right-5 text-2xl text-white">
                  {p.title}
                </p>
              </TLink>
            ))}
          </div>
        </div>
      </section>
      <EnquiryBanner img="/images/team/p22.webp" />
    </div>
  );
}
