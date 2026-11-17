const nodes = [
  { name: "users_profile", fields: "height · goals" },
  { name: "meal_logs", fields: "macros · calories" },
  { name: "water_logs", fields: "amount_ml" },
];

export function RelationshipDiagram() {
  return (
    <div className="relative mt-7 h-[206px] overflow-hidden rounded-[12px] border border-line bg-black/25">
      <div
        aria-hidden="true"
        className="dot-grid-fine absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_82%)]"
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 206"
        preserveAspectRatio="none"
      >
        <path
          d="M200 58 V 92 M56 92 H 344 M56 92 V 128 M200 92 V 128 M344 92 V 128"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
          strokeDasharray="2 5"
        />
        <circle cx="200" cy="92" r="2.4" fill="#10b981" className="motion-safe:animate-pulse" />
        <circle
          cx="56"
          cy="92"
          r="2"
          fill="rgba(255,255,255,0.45)"
          className="motion-safe:animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
        <circle
          cx="344"
          cy="92"
          r="2"
          fill="rgba(255,255,255,0.45)"
          className="motion-safe:animate-pulse"
          style={{ animationDelay: "0.9s" }}
        />
      </svg>

      <div className="absolute top-3 left-1/2 w-[150px] -translate-x-1/2 rounded-[9px] border border-accent/25 bg-[#0b0f0e]/95 px-3 py-2">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[10px] text-foreground">auth.users</span>
        </div>
        <p className="mt-1 font-mono text-[8.5px] tracking-wide text-muted">
          id · email
        </p>
      </div>

      <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2">
        {nodes.map((node) => (
          <div
            key={node.name}
            className="rounded-[9px] border border-white/8 bg-[#0b0b0f]/90 px-2.5 py-2"
          >
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-1 rounded-full bg-white/35" />
              <span className="truncate font-mono text-[9.5px] text-foreground">
                {node.name}
              </span>
            </div>
            <p className="mt-1 truncate font-mono text-[8px] text-muted">
              {node.fields}
            </p>
          </div>
        ))}
      </div>

      <span className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.16em] text-muted/70 uppercase">
        FK → uid
      </span>
      <span className="absolute top-3 right-3 font-mono text-[8px] tracking-[0.16em] text-accent/70 uppercase">
        RLS on
      </span>
    </div>
  );
}
