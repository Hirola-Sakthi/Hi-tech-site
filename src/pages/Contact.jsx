import { useLayoutEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  ScrollTrigger,
  SplitHeading,
  Parallax,
  RevealImage,
} from "../components/motion.jsx";
import { site, services } from "../config/site.js";

export default function Contact() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    msg: "",
  });
  useLayoutEffect(() => {
    document.title = "Contact Us | HI-TECH Protection Security";
    ScrollTrigger.refresh();
  }, []);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const text = `Enquiry for HI-TECH Protection Security%0AName: ${encodeURIComponent(f.name)}%0APhone: ${encodeURIComponent(f.phone)}%0AEmail: ${encodeURIComponent(f.email)}%0AService: ${encodeURIComponent(f.service)}%0AMessage: ${encodeURIComponent(f.msg)}`;
  const ok = f.name && f.phone;
  const inp =
    "mt-2 w-full border border-charcoal/15 bg-ivory px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/45 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";
  const info = [
    [FaPhoneAlt, "Call", site.phone, site.phoneHref],
    [FaWhatsapp, "WhatsApp", "Message us", site.whatsapp],
    [FaEnvelope, "Email", site.email, `mailto:${site.email}`],
  ];
  return (
    <>
      <Parallax
        src="/images/team/p28.jpg"
        overlay="bg-gradient-to-r from-black/75 via-black/45 to-black/20"
        className="flex min-h-[65vh] items-end"
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-16 pt-40 lg:px-10 lg:pb-20">
          <p className="mb-5 font-display text-base font-bold uppercase tracking-[.22em] text-gold">
            We are here to help
          </p>
          <SplitHeading
            as="h1"
            text="Let's talk security"
            trigger={false}
            delay={0.5}
            className="max-w-4xl text-[10vw] lg:text-[6rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 lg:text-xl">
            Tell us about your premises and we will suggest the right personnel
            and practices.
          </p>
        </div>
      </Parallax>
      <section className="bg-ivory px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">
          <div className="border border-charcoal/10 bg-white p-6 shadow-[0_20px_60px_rgba(37,37,42,.06)] sm:p-10 lg:p-12">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              Start a conversation
            </p>
            <h2 className="display text-4xl text-charcoal sm:text-5xl">
              Send an enquiry
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-charcoal/70">
              Share a few details and our team will get back to you to discuss
              the right protection for your premises.
            </p>
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block text-sm font-semibold text-charcoal">
                Your name
                <input
                  autoComplete="name"
                  className={inp}
                  placeholder="Enter your name"
                  value={f.name}
                  onChange={set("name")}
                  required
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-charcoal">
                  Phone number
                  <input
                    type="tel"
                    autoComplete="tel"
                    className={inp}
                    placeholder="Enter your phone number"
                    value={f.phone}
                    onChange={set("phone")}
                    required
                  />
                </label>
                <label className="block text-sm font-semibold text-charcoal">
                  Email address
                  <input
                    type="email"
                    autoComplete="email"
                    className={inp}
                    placeholder="you@example.com"
                    value={f.email}
                    onChange={set("email")}
                  />
                </label>
              </div>
              <label className="block text-sm font-semibold text-charcoal">
                Type of premises
                <select
                  className={inp}
                  value={f.service}
                  onChange={set("service")}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.long}>
                      {s.long}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-charcoal">
                How can we help?
                <textarea
                  rows="4"
                  className={inp}
                  placeholder="Tell us about your premises and requirements"
                  value={f.msg}
                  onChange={set("msg")}
                />
              </label>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={ok ? `${site.whatsapp}?text=${text}` : undefined}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!ok}
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 font-display font-bold uppercase tracking-wide transition ${ok ? "bg-gold text-black hover:bg-charcoal hover:text-white" : "cursor-not-allowed bg-beige text-charcoal/45"}`}
                >
                  <FaWhatsapp /> Send on WhatsApp
                </a>
                <a
                  href={
                    ok
                      ? `mailto:${site.email}?subject=Security%20enquiry&body=${text}`
                      : undefined
                  }
                  aria-disabled={!ok}
                  className={`inline-flex items-center justify-center gap-3 border px-6 py-3.5 font-display font-bold uppercase tracking-wide transition ${ok ? "border-gold text-charcoal hover:bg-gold" : "cursor-not-allowed border-charcoal/15 text-charcoal/40"}`}
                >
                  <FaEnvelope /> Send by email
                </a>
              </div>
              {!ok && (
                <p className="text-sm text-charcoal/60">
                  Enter your name and phone number to enable sending.
                </p>
              )}
            </form>
          </div>
          <aside className="flex flex-col gap-5">
            <div className="relative min-h-[18rem] overflow-hidden">
              <RevealImage
                src="/images/team/p29.jpg"
                alt="HI-TECH gate security team"
                from="right"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="photo-copy absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="display mb-3 flex items-center gap-3 text-3xl text-gold">
                  <FaMapMarkerAlt />
                  Visit our office
                </p>
                {site.address.map((l) => (
                  <p
                    key={l}
                    className="text-base leading-relaxed text-white/90"
                  >
                    {l}
                  </p>
                ))}
                <p className="mt-3 text-sm text-white/70">{site.iso}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {info.map(([I, t, v, h]) => (
                <a
                  key={t}
                  href={h}
                  target={t === "WhatsApp" ? "_blank" : undefined}
                  rel={t === "WhatsApp" ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-center gap-4 border border-charcoal/10 bg-white p-4 transition hover:border-gold/60 hover:shadow-md"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-beige text-lg text-gold transition group-hover:bg-gold group-hover:text-white">
                    <I />
                  </span>
                  <span className="min-w-0">
                    <span className="display block text-xl text-charcoal">
                      {t}
                    </span>
                    <span className="block break-all text-sm text-charcoal/70">
                      {v}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-beige px-5 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[.2em] text-gold">
              Find us
            </p>
            <h2 className="display text-4xl text-charcoal sm:text-5xl">
              Visit HI-TECH in Bengaluru
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/70">
              We welcome conversations about your security requirements. Contact
              our team or find our office on the map.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-3 border-b border-gold pb-2 font-display font-bold uppercase text-charcoal transition hover:text-gold"
            >
              <FaPhoneAlt className="text-gold" /> Call {site.phone}
            </a>
          </div>
          <iframe
            title="HI-TECH Protection Security location, JP Nagar 5th Phase, Bengaluru"
            loading="lazy"
            className="h-[22rem] w-full border-0 shadow-lg sm:h-[26rem]"
            src={`https://www.google.com/maps?q=${encodeURIComponent("No. 28, 3rd Cross, Vinayaka Nagar, JP Nagar 5th Phase, Bengaluru 560078")}&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
