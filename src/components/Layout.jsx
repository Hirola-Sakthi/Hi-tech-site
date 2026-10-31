import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { gsap, ScrollTrigger, TLink, setCurtain, reduced } from "./motion.jsx";
import { site, services } from "../config/site.js";

function Curtain() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    gsap.set(ref.current, { yPercent: 100 });
    setCurtain((go) => {
      gsap
        .timeline()
        .set(ref.current, { yPercent: 100, display: "flex" })
        .to(ref.current, { yPercent: 0, duration: 0.6, ease: "power4.inOut" })
        .add(() => {
          go();
          window.scrollTo(0, 0);
        })
        .to(ref.current, {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
          delay: 0.25,
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        });
    });
    return () => setCurtain(null);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] hidden items-center justify-center bg-gold"
    >
      <img src="/images/brand/logo.png" alt="" className="w-56" />
    </div>
  );
}

function Loader() {
  const ref = useRef(null);
  const [done, setDone] = useState(
    reduced() || sessionStorage.getItem("ht-loaded") === "1",
  );
  useLayoutEffect(() => {
    if (done) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => {
            sessionStorage.setItem("ht-loaded", "1");
            setDone(true);
          },
        })
        .from(".ld-logo", {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .fromTo(
          ".ld-bar",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
          "<.2",
        )
        .to(".ld-logo, .ld-bar", { opacity: 0, duration: 0.3 })
        .to(ref.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.9,
          ease: "power4.inOut",
        });
    }, ref);
    return () => ctx.revert();
  }, []);
  if (done) return null;
  return (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      style={{ clipPath: "inset(0)" }}
    >
      <img
        src="/images/brand/logo.png"
        alt="HI-TECH Protection Security"
        className="ld-logo w-72 max-w-[70vw]"
      />
      <div className="ld-bar mt-6 h-1 w-56 origin-left bg-gold" />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const menu = useRef(null);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);
  useLayoutEffect(() => {
    if (!menu.current) return;
    const ctx = gsap.context(() => {
      if (open)
        gsap
          .timeline()
          .fromTo(
            menu.current,
            { clipPath: "circle(0% at 92% 4%)" },
            {
              clipPath: "circle(150% at 92% 4%)",
              duration: 0.8,
              ease: "power3.inOut",
            },
          )
          .from(
            ".m-link",
            { yPercent: 110, stagger: 0.06, duration: 0.6, ease: "power3.out" },
            "-=.35",
          );
    }, menu);
    document.body.style.overflow = open ? "hidden" : "";
    return () => ctx.revert();
  }, [open]);
  const link = ({ isActive }) =>
    `relative py-2 text-[13px] font-medium tracking-wide transition-colors hover:text-gold ${isActive ? "text-gold" : solid ? "text-charcoal" : "text-white"}`;
  return (
    <>
      <header
        className={`fixed inset-x-0 mx-auto transition-all duration-500 ${open ? "z-[70]" : "z-50"} ${solid ? "top-4 w-[80%] rounded-2xl border border-white/15 bg-ivory/95 py-2 shadow-xl backdrop-blur-md" : "top-0 w-full rounded-none bg-gradient-to-b from-black/80 to-transparent py-4"}`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between gap-3 ${solid ? "px-3 sm:px-5 xl:px-8" : "px-5 lg:px-10"}`}
        >
          <TLink
            to="/"
            className="min-w-0"
            aria-label="HI-TECH Protection Security home"
          >
            <img
              src="/images/brand/logo.png"
              alt="HI-TECH Protection Security"
              className={`max-w-full object-contain transition-all ${solid ? "h-12" : "h-16"}`}
            />
          </TLink>
          <nav
            className={`hidden shrink-0 items-center ${solid ? "gap-6 xl:flex" : "gap-9 lg:flex"}`}
            aria-label="Main"
          >
            <NavLink to="/" end className={link}>
              Home
            </NavLink>
            <NavLink to="/about" className={link}>
              About
            </NavLink>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setServicesOpen(false);
                }
              }}
            >
              <NavLink
                to="/services"
                className={(s) => link(s) + " flex items-center gap-1.5"}
              >
                Services{" "}
                <FaChevronDown
                  className={`text-[10px] transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </NavLink>
              <div
                className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 transition-opacity duration-200 ${servicesOpen ? "visible opacity-100" : "invisible opacity-0"}`}
              >
                <ul className="border-t-4 border-gold bg-charcoal py-2 shadow-2xl">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <TLink
                        to={`/services/${s.slug}`}
                        className="block px-6 py-3 text-base font-medium hover:bg-black hover:text-gold"
                      >
                        {s.long}
                      </TLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <NavLink to="/gallery" className={link}>
              Gallery
            </NavLink>
            <NavLink to="/blog" className={link}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={link}>
              Contact
            </NavLink>
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className={`group inline-flex items-center gap-2 whitespace-nowrap font-display text-lg font-bold tracking-wide transition-colors hover:text-gold ${solid || open ? "text-charcoal" : "text-white"}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-base text-black transition-colors group-hover:bg-white">
                <FaPhoneAlt aria-hidden="true" />
              </span>
              <span className="hidden text-[18px] sm:inline">{site.phone}</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`relative z-[70] p-2 text-3xl ${solid ? "xl:hidden" : "lg:hidden"} ${solid || open ? "text-charcoal" : "text-white"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div
          ref={menu}
          className={`fixed inset-0 z-[60] flex flex-col justify-center overflow-y-auto bg-beige px-8 pb-10 pt-28 text-charcoal ${solid ? "xl:hidden" : "lg:hidden"}`}
        >
          <ul className="space-y-1">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, t]) => (
              <li key={to} className="overflow-hidden">
                <TLink
                  to={to}
                  className="m-link display block text-5xl text-charcoal hover:text-gold"
                >
                  {t}
                </TLink>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 border-l-4 border-gold pl-4 text-sm text-charcoal">
            {services.map((s) => (
              <li key={s.slug}>
                <TLink to={`/services/${s.slug}`}>{s.long}</TLink>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-gold px-6 py-4 font-display text-2xl font-bold text-black transition-colors hover:bg-white"
          >
            <FaPhoneAlt aria-hidden="true" className="text-lg" />
            {site.phone}
          </a>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="relative bg-beige pt-20 text-charcoal">
      <div className="absolute inset-x-0 top-0 h-2 bg-gold" />
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 pb-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <img
            src="/images/brand/logo.png"
            alt="HI-TECH Protection Security"
            className="w-72"
          />
          <p className="mt-6 max-w-sm text-lg leading-relaxed">
            {site.tagline} Professional, disciplined and dependable security
            services from a Bengaluru-based team managed by Ex-Army personnel.
          </p>
          <div className="mt-6 flex gap-3 text-xl">
            {[
              [FaFacebookF, "Facebook"],
              [FaInstagram, "Instagram"],
              [FaLinkedinIn, "LinkedIn"],
              [FaYoutube, "YouTube"],
            ].map(([I, name]) => (
              <a
                key={name}
                href="#"
                aria-label={`${name} profile (add link)`}
                className="grid h-11 w-11 place-items-center border border-charcoal/25 transition hover:border-gold hover:bg-gold hover:text-black"
              >
                <I />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="display mb-5 text-2xl text-gold">Navigate</h3>
          <ul className="space-y-3">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/blog", "Blog"],
              ["/contact", "Contact Us"],
            ].map(([to, t]) => (
              <li key={to}>
                <TLink to={to} className="hover:text-gold">
                  {t}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="display mb-5 text-2xl text-gold">Services</h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <TLink to={`/services/${s.slug}`} className="hover:text-gold">
                  {s.long}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="display mb-5 text-2xl text-gold">Contact</h3>
          <address className="space-y-3 not-italic">
            <p>{site.address.join(" ")}</p>
            <p>
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="break-all hover:text-gold"
              >
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-charcoal/15 py-6 text-center text-sm text-charcoal/70">
        © {new Date().getFullYear()} HI-TECH Protection Security. {site.iso}.
      </div>
    </footer>
  );
}

function FloatingActions() {
  const c =
    "grid h-14 w-14 place-items-center rounded-full text-2xl shadow-xl transition hover:scale-110";
  return (
    <div className="fixed bottom-5 right-5 z-[55] flex flex-col gap-3">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${c} bg-[#25D366] text-white`}
      >
        <FaWhatsapp />
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call HI-TECH Protection Security"
        className={`${c} bg-gold text-black`}
      >
        <FaPhoneAlt className="text-xl" />
      </a>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(t);
  }, [pathname]);
  return (
    <>
      <Loader />
      <Curtain />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
