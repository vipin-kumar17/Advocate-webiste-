import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact \u2014 Kulkarni & Associates",
};

const OFFICE = [
  { label: "Lucknow", value: "High Court, Lucknow" },
  { label: "Gorakhpur", value: "Kachahari, Gorakhpur" },
  { label: "Unnao", value: "Kachahari, Unnao" },
  { label: "Telephone", value: "+91 91401 35398" },
  { label: "Email", value: "manishkabvp@gmail.com" },
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

        
        </ScrollReveal>
      </section>
    </>
  );
}
