import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { PRACTICE_AREAS } from "@/lib/content";

export const metadata = {
  title: "Practice Areas \u2014 Kulkarni & Associates",
};

export default function PracticeAreas() {
  return (
    <>
           <section className="pt-40 pb-24 mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <ScrollReveal className="max-w-2xl">
          <span className="text-brass-bright text-xs tracking-[0.28em]">PRACTICE AREAS</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[0.98]">
            Six practices, one chambers.
          </h1>
          <p className="mt-6 text-parchment-dim text-lg leading-relaxed">
            Matters are accepted selectively across the following areas, so
            that every brief is handled by someone who has argued the point
            before &mdash; not learning it for the first time on your file.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="justify-self-center md:justify-self-end">
          <div
            style={{
              position: "relative",
              width: "500px",
              maxWidth: "100%",
              height: "480px",
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            <Image
              src="/images/portrait-columns.jpg"
              alt="Advocate outside the High Court"
              width={420}
              height={480}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="border-t hairline">
        {PRACTICE_AREAS.map((area, i) => (
          <ScrollReveal
            key={area.slug}
            as="div"
            className={`border-b hairline ${i % 2 === 0 ? "bg-ink" : "bg-panel"}`}
          >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid md:grid-cols-[0.3fr_0.7fr_1fr] gap-10">
              <span className="font-display italic text-brass-dim text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.08]">
                {area.title}
              </h2>
              <div>
                <p className="text-parchment-dim leading-relaxed">{area.summary}</p>
                <ul className="mt-6 space-y-3">
                  {area.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-parchment">
                      <span className="text-brass-bright">&mdash;</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] max-w-2xl mx-auto text-balance">
            Not sure which of these fits your matter?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-brass-bright text-ink px-8 py-4 text-sm tracking-[0.06em] hover:bg-parchment transition-colors duration-300"
          >
            Describe your case
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
