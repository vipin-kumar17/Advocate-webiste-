import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Transitions from "@/components/Transitions";

const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces.ttf", style: "normal" },
    { path: "../fonts/Fraunces-Italic.ttf", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: [{ path: "../fonts/Inter.ttf", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kulkarni & Associates \u2014 Advocates & Legal Counsel",
  description:
    "Kulkarni & Associates is a chambers of advocates practising constitutional, criminal, civil and commercial law before the High Courts and the Supreme Court of India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink text-parchment antialiased">
        <Navbar />
        <Transitions>{children}</Transitions>
        <Footer />
      </body>
    </html>
  );
}
