import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Chambers",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "The Advocate" },
      { href: "/practice-areas", label: "Practice Areas" },
      { href: "/results", label: "Notable Matters" },
      { href: "/gallery", label: "Chambers" },
    ],
  },
  {
    title: "Reach Us",
    links: [
      { href: "/contact", label: "Book a Consultation" },
      { href: "tel:+919820000000", label: "+91 9140135398" },
      { href: "manishkabvp@gmail.com", label: "manishkabvp@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-panel border-t hairline grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-parchment-dim">
            Counsel before the High Courts and the Supreme Court of India in
            constitutional, criminal, civil and commercial matters, with a
            practice built on preparation, precedent and plain speaking.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display italic text-brass-bright text-sm mb-5">
              {col.title}
            </h3>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-parchment-dim hover:text-parchment transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-parchment-dim">
          <p>&copy; {new Date().getFullYear()} Manish Kumar All rights reserved.</p>
          <p>Bar Council of India Enrolment No. UP/000000/2005</p>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-6 text-center text-[0.7rem] text-parchment-dim/80">
          Website designed &amp; developed by{" "}
          <span className="text-brass-bright">VIPIN KUMAR</span>
          {" "}&mdash;{" "}
          
            <a href="mailto:ppvipin9@email.com"
            className="hover:text-parchment transition-colors underline underline-offset-2">
            ppvipin9@email.com
          </a>
          {" "}/{" "}
          
            <a href="tel:+918318801572"
            className="hover:text-parchment transition-colors underline underline-offset-2">
            +91 8318801572
          </a>
        </div>
      </div>
    </footer>
  );
}