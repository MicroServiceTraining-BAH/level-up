"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.3)" }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#39FF14" strokeWidth={2.5}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading font-black text-2xl text-brand-text mb-3">Message Sent!</h3>
        <p className="text-brand-muted text-sm leading-[1.7] max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  const inputClass = "w-full bg-brand-elevated border border-brand-border rounded-xl px-4 py-3.5 text-brand-text text-sm placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-brand-text text-xs font-semibold uppercase tracking-wider mb-2">
            Name <span className="text-brand-blue">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-brand-text text-xs font-semibold uppercase tracking-wider mb-2">
            Email <span className="text-brand-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@yourbusiness.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-brand-text text-xs font-semibold uppercase tracking-wider mb-2">
          Phone <span className="text-brand-muted font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-brand-text text-xs font-semibold uppercase tracking-wider mb-2">
          Message <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business and what you're looking for..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-base hover:bg-brand-blue/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
        style={{ boxShadow: "0 0 24px rgba(0,194,255,0.25)" }}
      >
        {state === "loading" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
