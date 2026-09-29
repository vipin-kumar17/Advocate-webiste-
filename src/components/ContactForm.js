"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Free access key yahan se lijiye: https://web3forms.com (apna email
// daaliye, wo key email kar denge -- niche paste kar dijiye). Koi
// backend/server setup nahi chahiye.
const WEB3FORMS_ACCESS_KEY = "df8f0cd6-8294-4978-9898-27145cf5dfaa";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "subject", label: "Nature of Matter", type: "text" },
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `New enquiry from ${formData.get("name")} \u2014 ${formData.get("subject")}`
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
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

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong sending this. Please try again, or call
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center bg-brass-bright text-ink px-8 py-3.5 text-sm tracking-[0.06em] hover:bg-parchment transition-colors duration-300 disabled:opacity-60"
            >
              {status === "sending" ? "Sending\u2026" : "Send to Chambers"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}