import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productPower from "@/assets/product-power.png";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector("section");
      const produktyEl = document.getElementById("produkty");
      const subscriptionsEl = document.getElementById("subskrypcje");

      if (!heroEl) return;

      const scrollY = window.scrollY;
      const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
      const pastHero = scrollY > heroBottom;

      // Hide when in produkty or subscriptions sections
      let inHiddenZone = false;
      if (produktyEl) {
        const rect = produktyEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          inHiddenZone = true;
        }
      }
      if (subscriptionsEl) {
        const rect = subscriptionsEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          inHiddenZone = true;
        }
      }

      setVisible(pastHero && !inHiddenZone);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex items-center gap-3">
        <img
          src={productPower}
          alt="Shroom Power"
          className="h-10 w-auto object-contain shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-display text-sm font-bold text-foreground truncate">
            Starter Pack
          </p>
          <p className="font-body text-xs text-muted-foreground">79 zł</p>
        </div>
        <Link
          to="/produkt/shroom-power"
          className="inline-flex items-center gap-1.5 bg-shroom-green text-white px-5 py-2.5 rounded-full font-display font-semibold text-sm shrink-0 hover:opacity-90 transition-opacity"
        >
          Zamów
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default StickyCTA;
