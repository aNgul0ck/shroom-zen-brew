import { useEffect, useRef, useState } from "react";
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

const AUTOPLAY_MS = 4200;

const CreatorReels = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [muted] = useState(true);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % reels.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  // Center the active tile in the scroller
  useEffect(() => {
    const el = scrollerRef.current;
    const tile = tileRefs.current[active];
    if (!el || !tile) return;
    const target = tile.offsetLeft - (el.clientWidth - tile.offsetWidth) / 2;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  const step = (dir: 1 | -1) => {
    setPaused(true);
    setActive((i) => (i + dir + reels.length) % reels.length);
  };

  return (
    <section
      className="bg-foreground text-background py-12 md:py-24 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
          <h2 className="font-headline text-4xl md:text-6xl uppercase leading-[0.95] text-background">
            Tak go pijają
          </h2>

          <div className="hidden md:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Poprzedni"
              className="w-11 h-11 border border-background/30 hover:bg-background hover:text-foreground transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Następny"
              className="w-11 h-11 border border-background/30 hover:bg-background hover:text-foreground transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="flex items-center gap-3 md:gap-5 overflow-x-auto overflow-y-visible pt-8 pb-8 -mx-5 md:-mx-12 px-5 md:px-12 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {reels.map((reel, i) => (
            <div
              key={reel.id}
              ref={(el) => (tileRefs.current[i] = el)}
              className="shrink-0"
              style={{
                transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                transform: i === active ? "scale(1.08)" : "scale(0.9)",
                opacity: i === active ? 1 : 0.42,
                zIndex: i === active ? 5 : 1,
              }}
              onClick={() => {
                setPaused(true);
                setActive(i);
              }}
            >
              <ReelTile reel={reel} muted={muted} isActive={i === active} />
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {reels.map((r, i) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                setPaused(true);
                setActive(i);
              }}
              aria-label={`Pokaż rolkę ${i + 1}`}
              className="h-[3px] transition-all"
              style={{
                width: i === active ? 28 : 14,
                background: i === active ? "hsl(var(--background))" : "hsl(var(--background) / 0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReelTile = ({
  reel,
  muted,
  isActive,
}: {
  reel: CreatorReel;
  muted: boolean;
  isActive: boolean;
}) => {
  const PlatformIcon = reel.platform === "instagram" ? Instagram : TikTokGlyph;

  return (
    <div
      data-reel-tile
      className="w-[200px] sm:w-[240px] md:w-[280px] flex flex-col cursor-pointer select-none"
    >
      {/* Vertical 9:16 video frame */}
      <div
        className="relative aspect-[9/16] bg-background/5 border border-background/15 overflow-hidden"
        style={{
          boxShadow: isActive
            ? "0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px hsl(var(--background) / 0.4)"
            : "none",
        }}
      >
        {reel.videoSrc ? (
          <video
            src={reel.videoSrc}
            poster={typeof reel.poster === "string" ? reel.poster : undefined}
            muted={muted}
            loop
            playsInline
            autoPlay={isActive}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/5 to-transparent" />
            <img
              src={reel.poster}
              alt={`${reel.creator} z ${reel.product.name}`}
              className="absolute inset-0 w-full h-full object-contain p-8 opacity-90"
              style={{
                transition: "transform 5000ms ease-out",
                transform: isActive ? "scale(1.08)" : "scale(1)",
              }}
            />
            {!isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-background/15 border border-background/40 flex items-center justify-center">
                  <Play className="w-4 h-4 text-background fill-background ml-0.5" />
                </div>
              </div>
            )}
          </>
        )}

        {/* "Live" progress bar on the active tile */}
        {isActive && (
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-background/15">
            <div
              key={reel.id}
              className="h-full bg-background"
              style={{
                animation: `reel-progress ${AUTOPLAY_MS}ms linear forwards`,
              }}
            />
          </div>
        )}

        {/* Top-left: platform + handle */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-foreground/70 px-2 py-1">
          <PlatformIcon className="w-3 h-3 text-background" />
          <span className="font-body text-[10px] text-background uppercase tracking-wider">
            {reel.handle}
          </span>
        </div>

        {/* Top-right: mute indicator (only on active) */}
        {isActive && (
          <div className="absolute top-3 right-3 w-7 h-7 bg-foreground/70 flex items-center justify-center">
            {muted ? (
              <VolumeX className="w-3.5 h-3.5 text-background" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-background" />
            )}
          </div>
        )}

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
        onClick={(e) => e.stopPropagation()}
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

      <style>{`
        @keyframes reel-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

const TikTokGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.4 20.1a6.34 6.34 0 0 0 10.86-4.43V8.31a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.44-.27z" />
  </svg>
);

export default CreatorReels;
