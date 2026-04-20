import { useState, useEffect } from "react";
import type { GalleryImage } from "@/data/products";

interface Props {
  images: GalleryImage[];
  productName: string;
  isDiva?: boolean;
}

const ProductGallery = ({ images, productName, isDiva }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  // Reset to first image when the product changes (PDP route swap)
  useEffect(() => {
    setActiveIdx(0);
  }, [productName]);

  const active = images[activeIdx] ?? images[0];
  const borderColor = isDiva ? "border-white/15" : "border-foreground/15";
  const activeBorder = isDiva ? "border-diva-pink" : "border-foreground";
  const idleBorder = isDiva ? "border-white/10" : "border-foreground/10";

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main image */}
      <div
        className={`relative w-full aspect-square overflow-hidden border ${borderColor} ${
          isDiva ? "bg-diva-dark" : "bg-shroom-cream"
        }`}
      >
        {isDiva && !active.isLifestyle && (
          <div className="absolute inset-0 bg-diva-pink/15 blur-3xl scale-75" />
        )}
        <img
          key={active.src}
          src={active.src}
          alt={active.alt}
          className={`relative w-full h-full transition-opacity duration-200 ${
            active.isLifestyle
              ? "object-cover"
              : "object-contain p-6 md:p-10"
          }`}
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, i) => {
          const selected = i === activeIdx;
          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIdx(i)}
              aria-label={`Pokaż zdjęcie ${i + 1}: ${img.alt}`}
              aria-current={selected}
              className={`relative aspect-square overflow-hidden border-2 transition-colors ${
                selected ? activeBorder : `${idleBorder} hover:${activeBorder}`
              } ${isDiva ? "bg-diva-dark" : "bg-shroom-cream"}`}
            >
              <img
                src={img.src}
                alt=""
                className={`w-full h-full ${
                  img.isLifestyle ? "object-cover" : "object-contain p-1.5"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
