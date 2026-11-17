import { DottedBackdrop } from "@/components/layout/DottedBackdrop";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

export function Atmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(900px 520px at 78% -6%, rgba(16,185,129,0.11), transparent 62%), radial-gradient(760px 520px at 6% 6%, rgba(6,182,212,0.07), transparent 64%), radial-gradient(1100px 700px at 50% 112%, rgba(16,185,129,0.05), transparent 62%)",
        }}
      />
      <DottedBackdrop />
      <div
        className="absolute inset-0 opacity-[0.028] mix-blend-screen"
        style={{ backgroundImage: grain }}
      />
    </div>
  );
}
