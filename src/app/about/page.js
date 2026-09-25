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
              R. Kulkarni
            </h1>
            <p className="mt-4 text-parchment-dim text-lg">
              Founding Partner &mdash; enrolled 2005
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-parchment-dim leading-relaxed text-base md:text-lg">
              Nineteen years of practice across trial courts, the High Court
              and briefs before the Supreme Court of India, with a particular
              interest in constitutional remedies and complex commercial
              disputes. Known among juniors for reading the whole file before
              forming a view, and among clients for saying so when a matter
              is not worth fighting.
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
              Most arguments are won or lost long before a matter is called
              for hearing &mdash; in how carefully the pleadings are drafted,
              how completely the documents are indexed, and how honestly a
              client&rsquo;s chances have been assessed at the outset.
            </p>
            <p>
              That is the discipline this chambers is built around: fewer
              matters, more preparation, and a plain account of where things
              stand at every stage, whether the news is good or not.
            </p>
            <p>
              Outside chambers, R. Kulkarni lectures occasionally on
              constitutional law at a Mumbai law college and serves on the
              panel of counsel for the State Legal Services Authority.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
        <ScrollReveal className="max-w-xl mb-16">
          <span className="text-brass-bright text-xs tracking-[0.28em]">CAREER</span>
          <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
            Nineteen years, in brief.
          </h2>
        </ScrollReveal>

        <ScrollReveal as="div" group stagger={0.1} className="max-w-3xl">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`flex items-baseline gap-8 py-6 ${
                i !== TIMELINE.length - 1 ? "border-b hairline" : ""
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
                "B.A., LL.B. (Hons.), Government Law College, Mumbai",
                "Enrolled with the Bar Council of Maharashtra & Goa, 2005",
                "Designated Senior Panel Counsel, State Legal Services Authority",
                "Member, Bombay Bar Association",
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