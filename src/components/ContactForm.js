"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "subject", label: "Nature of Matter", type: "text" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border hairline p-10 bg-panel"
          >
            <span className="text-brass-bright text-xs tracking-[0.28em]">THANK YOU</span>
            <h2 className="font-display text-3xl mt-4">
              Your note has reached chambers.
            </h2>
            <p className="mt-4 text-parchment-dim leading-relaxed">
              Someone from the team will respond within three working days.
              For urgent matters, please call directly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            <div className="grid sm:grid-cols-2 gap-7">
              {FIELDS.map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs tracking-[0.12em] text-brass-dim">{f.label}</span>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    className="mt-2 w-full bg-transparent border-b hairline focus:border-brass-bright outline-none py-2.5 text-parchment placeholder:text-parchment-dim/60 transition-colors"
                  />
                </label>
              ))}
            </div>
            <label className="block">
              <span className="text-xs tracking-[0.12em] text-brass-dim">Brief Outline</span>
              <textarea
                required
                rows={5}
                name="message"
                className="mt-2 w-full bg-transparent border-b hairline focus:border-brass-bright outline-none py-2.5 text-parchment resize-none transition-colors"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center bg-brass-bright text-ink px-8 py-3.5 text-sm tracking-[0.06em] hover:bg-parchment transition-colors duration-300"
            >
              Send to Chambers
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
