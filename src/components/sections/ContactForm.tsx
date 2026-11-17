"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ChevronDown, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { inquiryTypes, profile, type InquiryType } from "@/data/portfolio";
import { isValidEmail } from "@/lib/utils";

type Field = "name" | "email" | "inquiry" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "opening" | "unavailable";

const fieldClass =
  "mt-2 w-full rounded-[10px] border border-line bg-white/[0.02] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-accent/60 focus:bg-white/[0.035] focus:outline-none";

const labelClass = "font-mono text-[9px] tracking-[0.14em] text-muted uppercase";

export function ContactForm() {
  const [values, setValues] = useState<{
    name: string;
    email: string;
    inquiry: InquiryType;
    message: string;
  }>({
    name: "",
    email: "",
    inquiry: inquiryTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = (): boolean => {
    const next: Errors = {};

    if (values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!isValidEmail(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Please add a little more detail (at least 10 characters).";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    if (!isValidEmail(profile.email)) {
      setStatus("unavailable");
      return;
    }

    const subject = `[${values.inquiry}] Portfolio enquiry from ${values.name.trim()}`;
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Inquiry: ${values.inquiry}`,
      "",
      values.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opening");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="surface-panel rounded-card p-6 sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="mono-label text-[9px] text-muted">
          Contact form / Direct message
        </span>
        <span className="font-mono text-[8px] tracking-[0.12em] text-muted uppercase">
          * required
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Your name"
            className={fieldClass}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-[11px] text-[#fda4af]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@example.com"
            className={fieldClass}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-[11px] text-[#fda4af]">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-inquiry" className={labelClass}>
          Inquiry type
        </label>
        <div className="relative">
          <select
            id="contact-inquiry"
            name="inquiry"
            value={values.inquiry}
            onChange={(event) => update("inquiry", event.target.value)}
            className={`${fieldClass} appearance-none pr-10`}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type} className="bg-surface text-foreground">
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3.5 mt-1 size-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="What would you like to build, discuss, or ask about?"
          className={`${fieldClass} resize-y`}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-[11px] text-[#fda4af]">
            {errors.message}
          </p>
        ) : null}
      </div>

      {!isValidEmail(profile.email) ? (
        <p className="mt-5 rounded-[10px] border border-dashed border-line bg-white/[0.015] px-3.5 py-3 font-mono text-[9px] leading-relaxed text-muted">
          Form delivery is not configured yet — submitting will not send a
          message. The fastest way to reach me is GitHub.
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <MagneticButton type="submit" className="h-11 px-6">
          <Send className="size-3.5" aria-hidden="true" />
          Send message
        </MagneticButton>
        <p className="font-mono text-[8.5px] leading-relaxed text-muted">
          Opens your email app if configured · nothing is stored on this site.
        </p>
      </div>

      <div role="status" aria-live="polite" className="mt-4 empty:mt-0">
        {status === "unavailable" ? (
          <p className="rounded-[10px] border border-[#fda4af]/25 bg-[#fda4af]/[0.06] px-3.5 py-3 text-[11px] leading-relaxed text-[#fecdd3]">
            Nothing was sent — an email address has not been published yet.
            Add one in <span className="font-mono">src/data/portfolio.ts</span>,
            or reach me through GitHub.
          </p>
        ) : null}
        {status === "opening" ? (
          <p className="rounded-[10px] border border-accent/25 bg-accent/[0.06] px-3.5 py-3 text-[11px] leading-relaxed text-[#a7f3d0]">
            Your email app should open with the message prepared. If it did not,
            copy the address from the contact panel instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}
