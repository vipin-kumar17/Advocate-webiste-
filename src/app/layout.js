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
  title: "Manish Kumar — Advocate | Lucknow, Gorakhpur & Unnao",
  description:
    "Manish Kumar is an advocate practising in Lucknow, Gorakhpur and Unnao, providing legal representation and counsel in criminal, civil and revenue matters.",
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
