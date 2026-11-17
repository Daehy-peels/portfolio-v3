const slabs = [
  {
    cy: 150,
    label: "INTERFACE",
    detail: "React · Next.js · Flutter",
    accent: true,
  },
  {
    cy: 300,
    label: "APPLICATION",
    detail: "Supabase · Auth · APIs",
    accent: false,
  },
  {
    cy: 450,
    label: "DATA",
    detail: "PostgreSQL · RLS",
    accent: false,
  },
] as const;

type Slab = (typeof slabs)[number];

function SlabShape({ slab }: { slab: Slab }) {
  const { cy, accent } = slab;
  const halfWidth = 160;
  const halfHeight = 55;
  const thickness = 18;

  const topFace = [
    `260,${cy - halfHeight}`,
    `${260 + halfWidth},${cy}`,
    `260,${cy + halfHeight}`,
    `${260 - halfWidth},${cy}`,
  ].join(" ");

  const leftSide = [
    `${260 - halfWidth},${cy}`,
    `260,${cy + halfHeight}`,
    `260,${cy + halfHeight + thickness}`,
    `${260 - halfWidth},${cy + thickness}`,
  ].join(" ");

  const rightSide = [
    `${260 + halfWidth},${cy}`,
    `260,${cy + halfHeight}`,
    `260,${cy + halfHeight + thickness}`,
    `${260 + halfWidth},${cy + thickness}`,
  ].join(" ");

  const stroke = accent
    ? "rgba(16,185,129,0.42)"
    : "rgba(255,255,255,0.14)";
  const fill = accent
    ? "rgba(16,185,129,0.06)"
    : "rgba(255,255,255,0.022)";

  return (
    <g>
      <polygon
        points={leftSide}
        fill="rgba(255,255,255,0.012)"
        stroke={stroke}
        strokeWidth="1"
      />
      <polygon
        points={rightSide}
        fill="rgba(0,0,0,0.28)"
        stroke={stroke}
        strokeWidth="1"
      />
      <polygon
        points={topFace}
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />

      <text
        className="font-mono"
        x="260"
        y={cy - 4}
        textAnchor="middle"
        fill={accent ? "#6ee7b7" : "#e4e4e7"}
        fontSize="10"
        letterSpacing="3.2"
      >
        {slab.label}
      </text>
      <text
        className="font-mono"
        x="260"
        y={cy + 12}
        textAnchor="middle"
        fill="#71717a"
        fontSize="8"
        letterSpacing="1.2"
      >
        {slab.detail}
      </text>

      {[
        [260, cy - halfHeight],
        [260 + halfWidth, cy],
        [260, cy + halfHeight],
        [260 - halfWidth, cy],
      ].map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="2.6"
          fill={accent && x > 260 ? "#10b981" : "#060608"}
          stroke={accent && x > 260 ? "#10b981" : "rgba(255,255,255,0.35)"}
          strokeWidth="1"
        />
      ))}
    </g>
  );
}

export function StackDiagram() {
  return (
    <svg
      viewBox="0 0 520 560"
      className="h-auto w-full"
      role="img"
      aria-label="A three-layer system diagram: interface, application, and data layers stacked as isometric planes."
    >
      <defs>
        <filter id="stack-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="46" />
        </filter>
      </defs>

      <ellipse
        cx="260"
        cy="300"
        rx="190"
        ry="140"
        fill="rgba(16,185,129,0.14)"
        filter="url(#stack-glow)"
      />

      <line
        x1="260"
        y1="70"
        x2="260"
        y2="520"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1"
        strokeDasharray="2 7"
      />

      {slabs.map((slab) => (
        <SlabShape key={slab.label} slab={slab} />
      ))}

      {[205, 355].map((y) => (
        <path
          key={y}
          d={`M 236 ${y + 6} L 260 ${y + 22} L 284 ${y + 6}`}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
      ))}

      <text
        className="font-mono"
        x="32"
        y="96"
        fill="#52525b"
        fontSize="8"
        letterSpacing="1.6"
      >
        16.87°N
      </text>
      <text
        className="font-mono"
        x="32"
        y="110"
        fill="#52525b"
        fontSize="8"
        letterSpacing="1.6"
      >
        96.20°E
      </text>
      <text
        className="font-mono"
        x="488"
        y="520"
        textAnchor="end"
        fill="#3f3f46"
        fontSize="8"
        letterSpacing="1.6"
      >
        SYSTEM / 001
      </text>
    </svg>
  );
}
