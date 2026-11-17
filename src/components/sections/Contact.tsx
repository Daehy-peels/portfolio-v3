import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { ContactForm } from "@/components/sections/ContactForm";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { MagneticLink } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YangonClock } from "@/components/layout/YangonClock";
import { profile } from "@/data/portfolio";
import { isValidEmail } from "@/lib/utils";

export function Contact() {
  const hasEmail = isValidEmail(profile.email);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-(--container-content)">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={<span id="contact-heading">Let&rsquo;s build something reliable together.</span>}
          description="I am looking for a first role where I can contribute, learn from experienced engineers, and take ownership of real product work. Whether it is a job opportunity, a collaboration, or a technical conversation — I would like to hear from you."
          action={
            <MagneticLink href={profile.links.github} variant="secondary">
              <Github className="size-4" aria-hidden="true" />
              GitHub profile
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </MagneticLink>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col gap-6">
            <div className="surface-panel rounded-card flex flex-1 flex-col p-6 sm:p-8">
              <span className="mono-label text-[9px] text-muted">
                Direct channels
              </span>

              <div className="mt-5 divide-y divide-line border-y border-line">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 py-4 transition-colors hover:text-accent"
                >
                  <Github className="size-4 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                  <span className="flex-1">
                    <span className="block text-sm font-medium">GitHub</span>
                    <span className="font-mono text-[9px] tracking-[0.1em] text-muted uppercase">
                      @Daehy-peels · source &amp; experiments
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </a>

                {hasEmail ? (
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3 py-4 transition-colors hover:text-accent"
                  >
                    <Mail className="size-4 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-sm font-medium">Email</span>
                      <span className="font-mono text-[9px] tracking-[0.1em] text-muted uppercase">
                        {profile.email}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                  </a>
                ) : (
                  <div className="flex items-center gap-3 py-4 text-muted">
                    <Mail className="size-4" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-sm font-medium">Email</span>
                      <span className="font-mono text-[9px] tracking-[0.1em] uppercase">
                        Not published yet — use GitHub
                      </span>
                    </span>
                  </div>
                )}

                {profile.links.linkedin ? (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-3 py-4 transition-colors hover:text-accent"
                  >
                    <Linkedin className="size-4 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-sm font-medium">LinkedIn</span>
                      <span className="font-mono text-[9px] tracking-[0.1em] text-muted uppercase">
                        Professional profile
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              {hasEmail ? (
                <div className="mt-5">
                  <CopyEmail email={profile.email} />
                </div>
              ) : null}

              <div className="mt-auto pt-8">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  <p className="text-sm text-foreground">{profile.availability}</p>
                </div>
                <p className="mt-1.5 pl-[18px] font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
                  {profile.workPreference}
                </p>

                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 font-mono text-[9px] tracking-[0.1em] text-muted uppercase">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3" aria-hidden="true" />
                    {profile.location}
                  </span>
                  <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
                  <span className="inline-flex items-center gap-1.5">
                    <span aria-hidden="true" className="size-1 rounded-full bg-accent/70" />
                    <YangonClock timeZone={profile.timeZone} />
                    <span className="sr-only">
                      local time in Yangon, Myanmar (UTC +06:30)
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <p className="px-1 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-muted">
              Replies usually come from GitHub or email — whichever channel you
              use. No contact details are collected or stored on this site.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
