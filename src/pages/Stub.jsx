import { TLink, SplitHeading } from "../components/motion.jsx";
// Temporary page so every route in the navbar works. Replaced page by page after the homepage is approved.
export default function Stub({ title, img = "/images/team/p15.jpg" }) {
  return (
    <section className="relative grid min-h-screen place-items-center bg-charcoal px-6 text-center">
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative">
        <SplitHeading
          as="h1"
          text={title}
          trigger={false}
          className="text-6xl sm:text-8xl"
        />
        <p className="mx-auto mt-6 max-w-md text-lg text-white/80">
          This page is designed in the next build step.
        </p>
        <TLink
          to="/"
          className="mt-8 inline-block bg-gold px-8 py-4 font-display text-xl font-bold uppercase text-black"
        >
          Back to home
        </TLink>
      </div>
    </section>
  );
}
