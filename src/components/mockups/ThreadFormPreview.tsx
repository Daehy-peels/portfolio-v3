import { ShoppingBag } from "lucide-react";

type GarmentKind = "blazer" | "tote" | "knit";

const products: Array<{
  name: string;
  kind: GarmentKind;
  category: string;
  price: string;
  stock: string;
  tile: string;
  stroke: string;
  fill: string;
}> = [
  {
    name: "Structured blazer",
    kind: "blazer",
    category: "Outerwear",
    price: "$184",
    stock: "Low stock",
    tile: "bg-[#23201c]",
    stroke: "#d9cdbc",
    fill: "rgba(217,205,188,0.06)",
  },
  {
    name: "Canvas carry tote",
    kind: "tote",
    category: "Accessories",
    price: "$68",
    stock: "In stock",
    tile: "bg-[#c8bba9]",
    stroke: "#37302a",
    fill: "rgba(55,48,42,0.05)",
  },
  {
    name: "Merino knit",
    kind: "knit",
    category: "Knitwear",
    price: "$126",
    stock: "In stock",
    tile: "bg-[#4a5242]",
    stroke: "#ded8c8",
    fill: "rgba(222,216,200,0.06)",
  },
];

function GarmentArt({
  kind,
  stroke,
  fill,
}: {
  kind: GarmentKind;
  stroke: string;
  fill: string;
}) {
  return (
    <svg
      viewBox="0 0 120 140"
      className="h-full w-full"
      role="img"
      aria-label={`${kind} line illustration`}
    >
      {kind === "blazer" ? (
        <g fill={fill} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M30 46 L43 27 L60 35 L77 27 L90 46 L85 67 L96 131 H24 L35 67 Z" />
          <path d="M60 35 L51 55 L60 72 L69 55 Z" />
          <path d="M51 55 L44 131 M69 55 L76 131" opacity="0.5" />
          <path d="M36 86 H48 M72 86 H84" opacity="0.5" />
          <circle cx="60" cy="88" r="1.4" fill={stroke} />
          <circle cx="60" cy="100" r="1.4" fill={stroke} />
        </g>
      ) : null}

      {kind === "tote" ? (
        <g fill={fill} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M27 61 H93 L87 129 H33 Z" />
          <path d="M45 61 C45 34 75 34 75 61" fill="none" />
          <path d="M38 76 H82" opacity="0.45" />
          <path d="M50 96 H70" opacity="0.45" />
        </g>
      ) : null}

      {kind === "knit" ? (
        <g fill={fill} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M33 41 L49 34 L60 41 L71 34 L87 41 L94 61 L84 67 L82 124 H38 L36 67 L26 61 Z" />
          <path d="M49 34 C52 43 68 43 71 34" fill="none" />
          <path d="M42 108 V124 M52 108 V124 M62 108 V124 M72 108 V124" opacity="0.4" />
        </g>
      ) : null}
    </svg>
  );
}

export function ThreadFormPreview() {
  return (
    <div className="relative flex h-full max-h-[520px] w-full flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#f4f1ea] text-[#1b1917] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-[#e3ddd2] bg-[#f8f5ef]/95 px-3 py-2">
        <span className="font-mono text-[7px] tracking-[0.12em] text-[#8a8175] uppercase">
          thread-and-form
        </span>
        <span className="font-display text-[10px] font-semibold tracking-[0.34em] text-[#1b1917]">
          THREAD &amp; FORM
        </span>
        <span className="flex items-center gap-1 font-mono text-[7px] text-[#5a5249]">
          <ShoppingBag className="size-2.5" aria-hidden="true" />
          Cart (2)
        </span>
      </div>

      <div className="flex items-end justify-between gap-3 px-3 pt-3 pb-2">
        <div>
          <p className="font-mono text-[6.5px] tracking-[0.16em] text-[#9a8f80] uppercase">
            Autumn edit / 01
          </p>
          <p className="mt-1 font-serif text-[21px] leading-[1.05] tracking-[-0.02em] text-[#1b1917] italic">
            Considered essentials.
          </p>
        </div>
        <span className="rounded-full border border-[#d9d1c4] px-2 py-0.5 font-mono text-[6px] tracking-[0.1em] text-[#5a5249] uppercase">
          Shop the edit →
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3 gap-2 px-3 pb-3">
        {products.map((product) => (
          <div key={product.name} className="flex min-w-0 flex-col">
            <div className={`relative flex-1 overflow-hidden rounded-[3px] ${product.tile}`}>
              <div className="absolute inset-1.5">
                <GarmentArt
                  kind={product.kind}
                  stroke={product.stroke}
                  fill={product.fill}
                />
              </div>
              <span className="absolute top-1.5 left-1.5 rounded-full bg-black/25 px-1.5 py-[1px] font-mono text-[5.5px] tracking-[0.08em] text-white/80 uppercase backdrop-blur-sm">
                {product.stock}
              </span>
            </div>
            <p className="mt-1.5 truncate font-mono text-[5.5px] tracking-[0.1em] text-[#9a8f80] uppercase">
              {product.category}
            </p>
            <p className="truncate text-[7.5px] leading-tight font-medium text-[#1b1917]">
              {product.name}
            </p>
            <p className="mt-0.5 font-mono text-[7px] text-[#5a5249]">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 right-0 w-[48%] max-w-[240px] border-l border-[#e3ddd2] bg-[#fbf9f5]/97 shadow-[-16px_0_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div className="flex h-full flex-col p-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[7px] tracking-[0.14em] text-[#8a8175] uppercase">
              Your cart
            </p>
            <span className="font-mono text-[6.5px] text-[#9a8f80]">02</span>
          </div>

          <div className="mt-2.5 space-y-2">
            {[
              { swatch: "bg-[#23201c]", name: "Structured blazer", price: "$184" },
              { swatch: "bg-[#c8bba9]", name: "Canvas carry tote", price: "$68" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className={`size-7 shrink-0 rounded-[2px] ${item.swatch}`} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[7px] font-medium text-[#1b1917]">
                    {item.name}
                  </span>
                  <span className="block font-mono text-[6px] text-[#9a8f80]">
                    Qty 1
                  </span>
                </span>
                <span className="font-mono text-[6.5px] text-[#1b1917]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-[#e3ddd2] pt-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[6.5px] text-[#8a8175]">Subtotal</span>
              <span className="font-mono text-[7.5px] text-[#1b1917]">$252</span>
            </div>
            <p className="mt-1 font-mono text-[5.5px] leading-relaxed text-[#9a8f80]">
              Free shipping over $50 · tax calculated at checkout
            </p>
          </div>

          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="mt-2.5 w-full rounded-[3px] bg-[#1b1917] py-1.5 text-[7px] font-medium tracking-[0.08em] text-[#f4f1ea] uppercase"
          >
            Checkout
          </button>
          <p className="mt-1.5 text-center font-mono text-[5.5px] text-[#9a8f80]">
            View full cart
          </p>

          <div className="mt-auto border-t border-[#e3ddd2] pt-2">
            <p className="font-mono text-[5.5px] leading-relaxed text-[#b0a596]">
              Demo interface · no payment is processed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
