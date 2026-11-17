import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Atmosphere } from "@/components/layout/Atmosphere";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div id="top" className="relative flex min-h-dvh flex-col">
      <Atmosphere />
      <main
        id="main"
        className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-5 py-24 sm:px-8"
      >
        <p className="mono-label text-accent">Error / 404</p>
        <h1 className="text-hero mt-5 font-display font-semibold text-balance">
          This page does not exist.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
          The address may be mistyped, or the page may have moved. The case
          studies, stack, and contact details are all on the main page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-btn border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.06]"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Return home
        </Link>
      </main>
    </div>
  );
}
