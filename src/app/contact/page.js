import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact \u2014 Kulkarni & Associates",
};

const OFFICE = [
  { label: "Chambers", value: "402, Solicitor House, Veer Nariman Road, Fort, Mumbai 400001" },
  { label: "Telephone", value: "+91 98200 00000" },
  { label: "Email", value: "chambers@kulkarniassociates.in" },
  { label: "Hours", value: "Monday \u2013 Saturday, 10:00 \u2013 18:30 IST" },
];

export default function Contact() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-[1400px] px-6 md:px-10">
        <ScrollReveal className="max-w-2xl">
          <span className="text-brass-bright text-xs tracking-[0.28em]">CONTACT</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 leading-[0.98]">
            Write in first.
          </h1>
          <p className="mt-6 text-parchment-dim text-lg leading-relaxed">
            A short outline of the matter is enough to begin. We reply to
            every enquiry within three working days.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-28 grid lg:grid-cols-[1fr_0.8fr] gap-16">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="space-y-10">
          <div>
            <span className="text-brass-bright text-xs tracking-[0.28em]">CHAMBERS DETAILS</span>
            <ul className="mt-6 space-y-5">
              {OFFICE.map((o) => (
                <li key={o.label} className="border-b hairline pb-5">
                  <p className="text-xs tracking-[0.12em] text-brass-dim">{o.label}</p>
                  <p className="mt-1.5 text-parchment leading-relaxed">{o.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-64 border hairline overflow-hidden bg-panel">
            <svg
              viewBox="0 0 400 260"
              className="absolute inset-0 h-full w-full text-brass-dim"
              fill="none"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="260" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 52} x2="400" y2={i * 52} stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
              ))}
              <circle cx="200" cy="130" r="6" fill="#e0c07f" />
              <circle cx="200" cy="130" r="16" stroke="#e0c07f" strokeWidth="1" opacity="0.6" />
              <circle cx="200" cy="130" r="30" stroke="#e0c07f" strokeWidth="0.7" opacity="0.35" />
            </svg>
            <p className="absolute bottom-4 left-4 text-xs tracking-[0.1em] text-parchment-dim">
              FORT, MUMBAI
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
