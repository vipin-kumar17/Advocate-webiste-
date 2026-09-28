import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { TIMELINE } from "@/lib/content";

export const metadata = {
  title: "The Advocate \u2014 Kulkarni & Associates",
};

export default function About() {
  return (
    <>
      {/* HERO + PORTRAIT, kept tight together */}
      <section className="pt-40 pb-24 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-[1.05fr_0.75fr] gap-14 items-center">
        <div>
          <ScrollReveal>
            <span className="text-brass-bright text-xs tracking-[0.28em]">THE ADVOCATE</span>
            <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[0.98]">
              MANISH KUMAR
            </h1>
            {/* <p className="mt-4 text-parchment-dim text-lg">
              Founding Partner &mdash; enrolled 2005
            </p> */}
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-parchment-dim leading-relaxed text-base md:text-lg">
              Dedicated to providing clear legal advice and committed representation across criminal, civil and revenue matters. Based in Lucknow, I focus on understanding each case thoroughly, explaining the available legal options clearly, and preparing every matter with care and attention to detail.
              My approach is straightforward: understand the facts, study the law, and help clients make informed decisions about their legal matters.

            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25} className="w-full flex justify-center md:justify-end">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "440px",
              aspectRatio: "3 / 2",
              overflow: "hidden",
              borderRadius: "24px",
              minWidth: 0,
            }}
          >
            <Image
              src="/images/library.jpg"
              alt="Chambers law library, shelves of bound reports"
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-panel border-y hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
          <ScrollReveal>
            <span className="text-brass-bright text-xs tracking-[0.28em]">PHILOSOPHY</span>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
              The file speaks before the lawyer does.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="space-y-5 text-parchment-dim leading-relaxed text-base md:text-lg">
            <p>
              Most arguments are shaped long before a matter is 
              called for hearing — through careful preparation, 
              thorough understanding of the facts, well-organised 
              documents, and a clear assessment of the legal position from the outset.
            </p>
            <p>
              That is the approach I follow in my practice: focused matters, 
              detailed preparation, and clear communication with clients at every stage. 
              Whether the matter concerns criminal, civil, or revenue law, 
              I believe clients should always have a clear understanding of 
              where their case stands and what options are available to them.
            </p>
            <p>
              Based in Lucknow, I remain committed to providing practical legal advice
               and dedicated representation, with careful attention to every matter entrusted to me.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
        <ScrollReveal className="max-w-xl mb-16">
          <span className="text-brass-bright text-xs tracking-[0.28em]">CAREER</span>
          <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
            Thirteen years, in brief.
          </h2>
        </ScrollReveal>

        <ScrollReveal as="div" group stagger={0.1} className="max-w-3xl">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`flex items-baseline gap-8 py-6 ${i !== TIMELINE.length - 1 ? "border-b hairline" : ""
                }`}
            >
              <span className="font-display italic text-brass-bright text-2xl w-24 shrink-0">
                {item.year}
              </span>
              <span className="text-parchment-dim leading-relaxed">{item.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* CREDENTIALS + IMAGE */}
      <section className="bg-panel border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 grid md:grid-cols-[1fr_0.9fr] gap-14 items-center">
          <ScrollReveal>
            <span className="text-brass-bright text-xs tracking-[0.28em]">CREDENTIALS</span>
            <ul className="mt-8 space-y-5">
              {[
                "B.A., LL.B., Government College, Gorakhpur",
                "Enrolled with the Bar Council of Uttar Pradesh, 2013",
                "Member, Uttar Pradesh Bar Association",
              ].map((c) => (
                <li key={c} className="flex gap-4 border-b hairline pb-5 text-parchment-dim">
                  <span className="text-brass-dim">&mdash;</span>
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center bg-brass-bright text-ink px-7 py-3.5 text-sm tracking-[0.05em] hover:bg-parchment transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </ScrollReveal>
          <ScrollReveal
            delay={0.15}
            className="w-full"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 2",
              overflow: "hidden",
              borderRadius: "24px",
              minWidth: 0,
            }}
          >
            <Image
              src="/images/portrait-lawbook.jpg"
              alt="The advocate holding a bound volume of law reports"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}