import Link from "next/link";
import { asset } from "@/lib/asset";
import { componentLabel, type ComponentEntry } from "@/lib/registry";

export function ComponentCard({ entry }: { entry: ComponentEntry }) {
  return (
    <Link
      href={`/components/${entry.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#cbbfe3] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:translate-y-0"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#f6f2fd]">
        <Thumbnail slug={entry.slug} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold tracking-wide text-brand/70 uppercase">{componentLabel(entry)}</p>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-brand">{entry.name}</h3>
          <span className="shrink-0 rounded-full bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand">{entry.category}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{entry.summary}</p>
        <span className="mt-auto pt-2 text-sm font-medium text-brand">
          View component <span aria-hidden className="inline-block transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

/** Small static artwork for each component card. */
function Thumbnail({ slug }: { slug: string }) {
  if (slug === "vinyl-player-card") {
    return (
      <svg aria-hidden viewBox="0 0 320 180" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="thumb-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#351367" />
            <stop offset="1" stopColor="#c86b98" />
          </linearGradient>
          <clipPath id="thumb-sleeve">
            <rect x="72" y="30" width="120" height="120" rx="4" />
          </clipPath>
        </defs>
        <g className="origin-[132px_90px] transition-transform duration-500 group-hover:translate-x-[34px]">
          <circle cx="166" cy="90" r="56" fill="#0d0a13" />
          {[22, 30, 38, 46].map((r) => (
            <circle key={r} cx="166" cy="90" r={r} fill="none" stroke="#fff" strokeOpacity="0.08" />
          ))}
          <circle cx="166" cy="90" r="18" fill="#ffc37a" />
          <circle cx="166" cy="90" r="2.5" fill="#f6f2fd" />
        </g>
        <g clipPath="url(#thumb-sleeve)">
          <rect x="72" y="30" width="120" height="120" fill="url(#thumb-sky)" />
          <circle cx="132" cy="104" r="28" fill="#ffc37a" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="72" y={104 + i * 6} width="120" height={1.5 + i * 0.6} fill="#9a5287" />
          ))}
          <path d="M72 126 C92 118 108 124 124 125 C142 127 156 116 192 118 L192 150 L72 150 Z" fill="#1f0a3d" />
          <text x="82" y="48" fill="#fff" fontSize="11" letterSpacing="0.8" style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}>
            MIDNIGHT COMMIT
          </text>
        </g>
        <rect x="72" y="30" width="120" height="120" rx="4" fill="none" stroke="#000" strokeOpacity="0.08" />
      </svg>
    );
  }
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-[2%] px-[8%] pb-[17%]">
      <span aria-hidden className="font-display text-[clamp(2.4rem,7.5vw,4.25rem)] leading-[0.72] tracking-[0.06em] text-brand">
        LOFISTACK
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/thumbs/cat-reveal-hero-sitter.webp")}
        alt=""
        width={380}
        height={432}
        className="h-[calc(clamp(2.4rem,7.5vw,4.25rem)*0.8)] w-auto origin-bottom transition-transform duration-500 group-hover:-rotate-3"
      />
    </div>
  );
}
