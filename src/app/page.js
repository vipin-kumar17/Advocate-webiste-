import Link from "next/link";
import Image from "next/image";
import Hero3D from "@/components/hero/Hero3D";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import FadeIn from "@/components/FadeIn";
import { STATS, PRACTICE_AREAS, APPROACH, MATTERS } from "@/lib/content";

export default function Home() {
  return (
    <>
           {/* HERO */}
           <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
        <Hero3D />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-ink/50" />
        <div className="relative z-10 min-h-[100svh] mx-auto max-w-[1400px] px-6 md:px-10 pt-28 pb-16 grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
          <div>
            <FadeIn>
              <p className="text-brass-bright text-xs tracking-[0.28em] mb-5">
                ADVOCATES &amp; LEGAL COUNSEL &mdash; MUMBAI HIGH COURT
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-balance text-[11vw] leading-[0.95] sm:text-[4.2rem] md:text-[5.4rem] md:leading-[0.94] max-w-4xl">
                Counsel for the
                <br />
                <span className="italic text-brass-bright">difficult argument.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-7 max-w-lg text-parchment-dim text-base md:text-lg leading-relaxed">
                Kulkarni &amp; Associates represents individuals, families and
                businesses before the High Court and the Supreme Court of India
                &mdash; in matters where preparation decides the outcome.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-brass-bright text-ink px-7 py-3.5 text-sm tracking-[0.05em] hover:bg-parchment transition-colors duration-300"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center border-b border-brass-dim pb-1 text-sm tracking-[0.05em] text-parchment hover:text-brass-bright hover:border-brass-bright transition-colors duration-300"
                >
                  View Practice Areas
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.35} className="flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full">
              <div
                className="relative w-full overflow-hidden"
                style={{ height: "420px", borderRadius: "24px" }}
              >
                <Image
                  src="/images/desk-portrait.jpg"
                  alt="Advocate R. Kulkarni at his chambers desk, with the scales of justice"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              </div>
              <p className="mt-4 text-[0.65rem] tracking-[0.16em] text-parchment-dim text-center lg:text-left">
                ADV. R. KULKARNI &mdash; FOUNDING PARTNER
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-2 text-parchment-dim text-xs tracking-[0.15em]">
          <span className="h-8 w-px bg-brass-dim inline-block" />
          SCROLL
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y hairline bg-panel">
        <ScrollReveal
          as="div"
          group
          stagger={0.12}
          className="mx-auto max-w-[1400px] px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </ScrollReveal>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <ScrollReveal>
          <span className="text-brass-bright text-xs tracking-[0.28em]">THE CHAMBERS</span>
          <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
            Advice that is honest before it is comforting.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-parchment-dim leading-relaxed text-base md:text-lg">
            We take on fewer matters than we could, so that each one gets the
            time it needs. Clients are told what a case is worth, what it
            will cost in time and money, and where a settlement makes more
            sense than a trial &mdash; even when that is not what they came
            to hear.
          </p>
          <p className="mt-5 text-parchment-dim leading-relaxed text-base md:text-lg">
            Founded in 2019 by Advocate R. Kulkarni after fourteen years of
            independent practice, the chambers now briefs a small team of
            juniors across constitutional, criminal and commercial work.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center border-b border-brass-dim pb-1 text-sm text-brass-bright hover:border-brass-bright transition-colors"
          >
            Read about the advocate
          </Link>
        </ScrollReveal>
      </section>

      {/* PRACTICE PREVIEW */}
      <section className="bg-panel border-y hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
          <ScrollReveal className="max-w-xl mb-16">
            <span className="text-brass-bright text-xs tracking-[0.28em]">PRACTICE AREAS</span>
            <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
              Six areas, one standard of preparation.
            </h2>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            group
            stagger={0.08}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border hairline"
          >
            {PRACTICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href="/practice-areas"
                className="group bg-panel p-8 flex flex-col justify-between min-h-[220px] hover:bg-panel-2 transition-colors duration-300"
              >
                <div>
                  <h3 className="font-display text-xl leading-snug text-parchment group-hover:text-brass-bright transition-colors">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm text-parchment-dim leading-relaxed line-clamp-3">
                    {area.summary}
                  </p>
                </div>
                <span className="mt-6 text-xs tracking-[0.1em] text-brass-dim group-hover:text-brass-bright transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* IMAGE BREAK */}
             
      <section className="bg-panel border-y hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal
            className="relative w-full aspect-square overflow-hidden order-2 md:order-1"
            style={{ borderRadius: "24px" }}
          >
            <Image
              src="/images/courtroom-speech.jpg"
              alt="Advocate addressing the court during a hearing"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="order-1 md:order-2">
            <p className="font-display italic text-2xl md:text-4xl leading-snug text-parchment text-balance">
              &ldquo;A case is rarely lost in the courtroom. It is lost in
              the weeks before it, in the questions nobody thought to ask.&rdquo;
            </p>
            <p className="mt-6 text-xs tracking-[0.2em] text-brass-bright">
              ADV. R. KULKARNI, FOUNDING PARTNER
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
        <ScrollReveal className="max-w-xl mb-16">
          <span className="text-brass-bright text-xs tracking-[0.28em]">HOW WE WORK</span>
          <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
            A brief in four stages.
          </h2>
        </ScrollReveal>

        <ScrollReveal as="div" group stagger={0.1} className="grid md:grid-cols-4 gap-10">
          {APPROACH.map((item) => (
            <div key={item.step} className="border-t hairline pt-6">
              <span className="font-display italic text-brass-dim text-3xl">{item.step}</span>
              <h3 className="font-display text-lg mt-4 mb-3">{item.title}</h3>
              <p className="text-sm text-parchment-dim leading-relaxed">{item.body}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* MATTERS PREVIEW */}
      <section className="bg-panel border-y hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <ScrollReveal>
              <span className="text-brass-bright text-xs tracking-[0.28em]">NOTABLE MATTERS</span>
              <h2 className="font-display text-4xl md:text-5xl mt-5 leading-[1.08]">
                Recent outcomes.
              </h2>
            </ScrollReveal>
            <Link
              href="/results"
              className="text-sm text-brass-bright border-b border-brass-dim pb-1 hover:border-brass-bright transition-colors"
            >
              View all matters
            </Link>
          </div>

          <ScrollReveal as="div" group stagger={0.1} className="grid md:grid-cols-3 gap-8">
            {MATTERS.slice(0, 3).map((m) => (
              <div key={m.title} className="border hairline p-8 bg-panel-2">
                <span className="text-xs tracking-[0.14em] text-brass-dim">{m.tag}</span>
                <h3 className="font-display text-xl mt-4 mb-3 leading-snug">{m.title}</h3>
                <p className="text-sm text-parchment-dim leading-relaxed">{m.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance">
            If it needs arguing, <span className="italic text-brass-bright">it needs preparing.</span>
          </h2>
          <p className="mt-6 text-parchment-dim max-w-lg mx-auto">
            Write in with a brief outline of the matter and we will arrange
            an initial conference within three working days.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center bg-brass-bright text-ink px-8 py-4 text-sm tracking-[0.06em] hover:bg-parchment transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
