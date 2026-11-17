"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { isValidEmail } from "@/lib/utils";

type CopyEmailProps = {
  email: string;
  className?: string;
};

export function CopyEmail({ email, className }: CopyEmailProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  if (!isValidEmail(email)) return null;

  const scheduleReset = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2400);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const field = document.createElement("textarea");
        field.value = email;
        field.setAttribute("readonly", "true");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    scheduleReset();
  };

  return (
    <MagneticButton
      variant="secondary"
      onClick={handleCopy}
      className={className}
      aria-label={`Copy email address ${email}`}
    >
      {status === "copied" ? (
        <Check className="size-4 text-accent" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      {status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy email"}
      <span aria-live="polite" className="sr-only">
        {status === "copied"
          ? "Email address copied to clipboard"
          : status === "error"
            ? "Could not copy the email address"
            : ""}
      </span>
    </MagneticButton>
  );
}
