import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Volume2, VolumeX, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

interface CreatorReel {
  id: string;
  creator: string;
  handle: string;
  platform: "instagram" | "tiktok";
  /** Local or external mp4. Use poster image as fallback before video URL is wired. */
  videoSrc?: string;
  poster: string;
  caption: string;
  product: {
    slug: string;
    name: string;
    image: string;
    price: number;
  };
}

// Placeholder feed — swap videoSrc with real influencer reels once delivered.
const reels: CreatorReel[] = [
  {
    id: "1",
    creator: "Ewa K.",
    handle: "@ewa.designs",
    platform: "instagram",
    poster: productRelax,
    caption: "Wieczorny rytuał zamiast lampki wina.",
    product: { slug: "shroom-relax", name: "Shroom Relax", image: productRelax, price: 79 },
  },
  {
    id: "2",
    creator: "Tomek S.",
    handle: "@tomek.codes",
    platform: "tiktok",
    poster: productPower,
    caption: "POV: poranna kawa bez kawy.",
    product: { slug: "shroom-power", name: "Shroom Power", image: productPower, price: 79 },
  },
  {
    id: "3",
    creator: "Zuzia T.",
    handle: "@zuzia.pr",
    platform: "instagram",
    poster: productDiva,
    caption: "Aperitivo bez kaca. Brokat to brokat.",
    product: { slug: "diva", name: "Diva", image: productDiva, price: 99 },
  },
  {
    id: "4",
    creator: "Maja W.",
    handle: "@majawellness",
    platform: "tiktok",
    poster: productPower,
    caption: "Mój daily rytuał przed nauką.",
    product: { slug: "shroom-power", name: "Shroom Power", image: productPower, price: 79 },
  },
  {
    id: "5",
    creator: "Kasia M.",
    handle: "@kasia.movement",
    platform: "instagram",
    poster: productRelax,
    caption: "Po treningu — Relax i książka.",
    product: { slug: "shroom-relax", name: "Shroom Relax", image: productRelax, price: 79 },
  },
  {
    id: "6",
    creator: "Ania L.",
    handle: "@ania.afterhours",
    platform: "instagram",
    poster: productDiva,
    caption: "Diva na kolacji u dziewczyn.",
    product: { slug: "diva", name: "Diva", image: productDiva, price: 99 },
  },
];

const CreatorReels = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [muted] = useState(true);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const tile = el.querySelector<HTMLElement>("[data-reel-tile]");
    const distance = tile ? tile.offsetWidth + 16 : 320;
    el.scrollBy({ left: distance * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-foreground text-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-medium uppercase tracking-[0.25em] text-background/55 mb-3">
              Shroom IRL · feed od twórców
            </p>
            <h2 className="font-headline text-4xl md:text-6xl uppercase leading-[0.95] text-background">
              Tak go pijają
            </h2>
            <p className="font-body text-sm md:text-base text-background/60 mt-4 max-w-md">
              Rolki, tiktoki i stories od ludzi, którzy włączyli Shrooma w swój rytuał. Bez ściemy, bez filtra.
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Poprzedni"
              className="w-11 h-11 border border-background/30 hover:bg-background hover:text-foreground transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Następny"
              className="w-11 h-11 border border-background/30 hover:bg-background hover:text-foreground transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 md:-mx-12 px-5 md:px-12 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {reels.map((reel) => (
            <ReelTile key={reel.id} reel={reel} muted={muted} />
          ))}
        </div>

        {/* Mobile hint */}
        <p className="md:hidden font-body text-[11px] uppercase tracking-[0.2em] text-background/40 mt-4">
          ← przesuń, żeby zobaczyć więcej →
        </p>
      </div>
    </section>
  );
};

const ReelTile = ({ reel, muted }: { reel: CreatorReel; muted: boolean }) => {
  const PlatformIcon = reel.platform === "instagram" ? Instagram : TikTokGlyph;

  return (
    <div
      data-reel-tile
      className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px] flex flex-col"
    >
      {/* Vertical 9:16 video frame */}
      <div className="relative aspect-[9/16] bg-background/5 border border-background/15 overflow-hidden group">
        {reel.videoSrc ? (
          <video
            src={reel.videoSrc}
            poster={typeof reel.poster === "string" ? reel.poster : undefined}
            muted={muted}
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Soft gradient backdrop in place of real video */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/5 to-transparent" />
            <img
              src={reel.poster}
              alt={`${reel.creator} z ${reel.product.name}`}
              className="absolute inset-0 w-full h-full object-contain p-8 opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-background/10 backdrop-blur-sm border border-background/30 flex items-center justify-center">
                <Play className="w-5 h-5 text-background fill-background ml-0.5" />
              </div>
            </div>
          </>
        )}

        {/* Top-left: platform + handle */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-foreground/70 backdrop-blur-sm px-2 py-1">
          <PlatformIcon className="w-3 h-3 text-background" />
          <span className="font-body text-[10px] text-background uppercase tracking-wider">
            {reel.handle}
          </span>
        </div>

        {/* Top-right: mute indicator */}
        <div className="absolute top-3 right-3 w-7 h-7 bg-foreground/70 backdrop-blur-sm flex items-center justify-center">
          {muted ? (
            <VolumeX className="w-3.5 h-3.5 text-background" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-background" />
          )}
        </div>

        {/* Bottom caption */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent">
          <p className="font-display text-sm text-background leading-snug line-clamp-2">
            „{reel.caption}"
          </p>
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-background/60 mt-1">
            {reel.creator}
          </p>
        </div>
      </div>

      {/* Product card */}
      <Link
        to={`/produkt/${reel.product.slug}`}
        className="mt-3 flex items-center gap-3 p-3 bg-background/[0.06] border border-background/15 hover:bg-background hover:text-foreground transition-colors group"
      >
        <img
          src={reel.product.image}
          alt={reel.product.name}
          className="w-10 h-10 object-contain shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-display text-sm font-bold leading-tight truncate">
            {reel.product.name}
          </p>
          <p className="font-body text-xs text-background/55 group-hover:text-foreground/55">
            {reel.product.price} zł
          </p>
        </div>
        <ArrowRight className="w-4 h-4 shrink-0" />
      </Link>
    </div>
  );
};

// Inline TikTok glyph (lucide ships one but keeping it explicit to avoid version drift)
const TikTokGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.4 20.1a6.34 6.34 0 0 0 10.86-4.43V8.31a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.44-.27z" />
  </svg>
);

export default CreatorReels;
