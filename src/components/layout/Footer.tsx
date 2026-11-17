import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { YangonClock } from "@/components/layout/YangonClock";
import { navigationItems, profile } from "@/data/portfolio";

async function getCopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto w-full max-w-content px-5 pt-14 pb-32 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold tracking-tight">
              Myat Bhone Kyaw
            </p>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              Junior Full-Stack Developer building web and cross-platform
              applications from Yangon.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" />
                github.com/Daehy-peels
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn profile
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Sections</span>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    className="text-sm text-secondary transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Local time</span>
            <p className="flex items-center gap-2 font-mono text-sm text-secondary">
              YGN <YangonClock timeZone={profile.timeZone} />
              <span className="text-muted">/ Yangon, Myanmar</span>
            </p>
            <Link
              href="#top"
              className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
            >
              Back to top
              <ArrowUpRight className="size-3.5 -rotate-45" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.12em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Myat Bhone Kyaw · All rights reserved
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; Motion</p>
        </div>
      </div>
    </footer>
  );
}
