import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Chambers \u2014 Kulkarni & Associates",
};

export default function Gallery() {
  return (
    <>
      <section className="pt-40 pb-16 mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollReveal className="max-w-2xl">
          <span className="text-brass-bright text-xs tracking-[0.28em]">CHAMBERS</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[0.98]">
            In the courtroom.
          </h1>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-28 grid md:grid-cols-2 gap-14 items-center">
      <ScrollReveal>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            <Image
              src="/images/courtroom-matter.jpg"
              alt="Advocate presenting oral arguments before a full courtroom"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="space-y-5">
          <span className="text-brass-bright text-xs tracking-[0.28em]">ON YOUR FEET</span>
          <h2 className="font-display text-3xl md:text-4xl mt-5 leading-[1.1]">
            The argument is short. The preparation isn&rsquo;t.
          </h2>
          <p className="text-parchment-dim leading-relaxed text-base md:text-lg">
            A Bench rarely gives more time than it needs to. Submissions are
            kept to the points that can genuinely move the outcome, argued
            plainly and backed by a record that was built weeks, not days,
            before the hearing.
          </p>
          <p className="text-parchment-dim leading-relaxed text-base md:text-lg">
            That discipline is what clients are paying for when a matter is
            called &mdash; not eloquence for its own sake, but an advocate
            who knows exactly where the case stands and says so without
            hesitation.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-panel border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] max-w-xl mx-auto text-balance">
              Ready to have your matter heard?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center bg-brass-bright text-ink px-8 py-4 text-sm tracking-[0.06em] hover:bg-parchment transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}