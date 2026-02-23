"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { owner } from "@/data/owner";

type FormState = {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "New Project",
  budget: "Not sure",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Valid email is required.";
    if (form.message.trim().length < 20) nextErrors.message = "Message should be at least 20 characters.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);
    if (!validate()) {
      return;
    }

    setSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          budget: form.budget,
          message: form.message,
          to_name: owner.name,
        },
        publicKey,
      );

      setResult({ type: "success", message: "Message sent successfully. I will get back to you within 24 hours." });
      setForm(initialState);
    } catch {
      setResult({
        type: "error",
        message: "Message could not be sent right now. Please email me directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-content px-5 py-24 md:px-8">
      <div className="grid gap-10 rounded-3xl border border-border bg-bg-card p-6 md:grid-cols-2 md:p-8">
        <div>
          <h2 className="font-display text-4xl italic text-text-primary">Let&apos;s Build Something.</h2>
          <p className="mt-4 text-text-muted">
            Available for freelance projects, full-time roles, and technical consulting. Usually respond within 24 hours.
          </p>

          <div className="mt-8 space-y-3 text-sm text-text-muted">
            <p>📧 {owner.email}</p>
            <p>🌍 {owner.timezone}</p>
            <p>💼 {owner.socials.linkedin}</p>
            <p>🐙 {owner.socials.github}</p>
          </div>

          <p className="mt-6 inline-flex rounded-full border border-border px-3 py-1 text-xs text-text-primary">
            {owner.availableForWork ? "🟢 Open to work" : "🔴 Fully booked"}
          </p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          <input
            className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none ring-accent-cyan placeholder:text-text-muted focus:ring-2"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name ? <p className="text-xs text-red-400">{errors.name}</p> : null}

          <input
            type="email"
            className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none ring-accent-cyan placeholder:text-text-muted focus:ring-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email ? <p className="text-xs text-red-400">{errors.email}</p> : null}

          <select
            className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none ring-accent-cyan focus:ring-2"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          >
            <option>New Project</option>
            <option>Consulting</option>
            <option>Full-time Role</option>
            <option>Other</option>
          </select>

          <select
            className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none ring-accent-cyan focus:ring-2"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option>&lt; $1k</option>
            <option>$1k-$5k</option>
            <option>$5k-$15k</option>
            <option>$15k+</option>
            <option>Not sure</option>
          </select>

          <textarea
            rows={6}
            className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary outline-none ring-accent-cyan placeholder:text-text-muted focus:ring-2"
            placeholder="Tell me about your project"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : null}

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-bg-primary transition hover:animate-glow disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg-primary/30 border-t-bg-primary" aria-hidden="true" />
                Sending...
              </span>
            ) : (
              "Send Message →"
            )}
          </button>

          {result ? (
            <p className={result.type === "success" ? "text-sm text-emerald-300" : "text-sm text-red-300"}>{result.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
