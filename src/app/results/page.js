import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { MATTERS } from "@/lib/content";

export const metadata = {
  title: "Notable Matters \u2014 Kulkarni & Associates",
};

export default function Results() {
  return (
    <>
           <section className="pt-40 pb-24 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <ScrollReveal className="max-w-2xl">
          <span className="text-brass-bright text-xs tracking-[0.28em]">NOTABLE MATTERS</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[0.98]">
            A record, briefly.
          </h1>
          <p className="mt-6 text-parchment-dim text-lg leading-relaxed">
            Client names and case particulars are withheld as a matter of
            confidentiality; the outcomes below are described in general
            terms with permission.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="w-full flex justify-center md:justify-end">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              borderRadius: "24px",
              minWidth: 0,
            }}
          >
            <Image
              src="/images/courtroom-argument.jpg"
              alt="Advocate presenting oral arguments before the Bench"
              fill
              sizes="(min-width: 768px) 35vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
        <ScrollReveal
          as="div"
          group
          stagger={0.08}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {MATTERS.map((m) => (
            <div
              key={m.title}
              className="bg-panel p-9 border hairline"
              style={{ borderRadius: "16px" }}
            >
              <span className="text-xs tracking-[0.14em] text-brass-dim">{m.tag}</span>
              <h2 className="font-display text-2xl mt-4 mb-3 leading-snug">{m.title}</h2>
              <p className="text-sm text-parchment-dim leading-relaxed">{m.body}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>
      <section className="bg-panel border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] max-w-xl mx-auto text-balance">
              Every matter is different. Yours deserves its own reading.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center border border-brass-dim px-7 py-3.5 text-sm tracking-[0.06em] text-brass-bright hover:bg-brass-bright hover:text-ink transition-colors duration-300"
            >
              Discuss Your Matter
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
