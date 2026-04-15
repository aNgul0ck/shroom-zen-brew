import { useState, useEffect } from "react";
import { Zap, Coffee, Droplets, TrendingUp, Heart, Brain } from "lucide-react";
import productPower from "@/assets/product-power.png";

type CompetitorId = "energy" | "coffee" | "sports";
type MetricKey = "energia" | "fokus" | "zdrowie";

const competitors = [
  { 
    id: "energy" as CompetitorId, shortName: "Energetyki",
    icon: Zap, color: "from-red-500 to-orange-400",
    metrics: { energia: 75, fokus: 30, zdrowie: 15 },
  },
  { 
    id: "coffee" as CompetitorId, shortName: "Kawa",
    icon: Coffee, color: "from-amber-700 to-amber-500",
    metrics: { energia: 65, fokus: 55, zdrowie: 45 },
  },
  { 
    id: "sports" as CompetitorId, shortName: "Izotoniki",
    icon: Droplets, color: "from-blue-500 to-cyan-400",
    metrics: { energia: 40, fokus: 20, zdrowie: 55 },
  },
];

const shroomMetrics: Record<MetricKey, number> = { energia: 92, fokus: 95, zdrowie: 100 };

const metricLabels: Record<MetricKey, { label: string; icon: typeof Zap }> = {
  energia: { label: "Skład", icon: TrendingUp },
  fokus: { label: "Składniki", icon: Brain },
  zdrowie: { label: "Czystość", icon: Heart },
};

const VerticalBar = ({ value, isShroom, competitorColor, animationKey }: { 
  value: number; isShroom: boolean; competitorColor?: string; animationKey: string;
}) => {
  const [h, setH] = useState(0);
  useEffect(() => { setH(0); const t = setTimeout(() => setH(value), 80); return () => clearTimeout(t); }, [value, animationKey]);

  return (
    <div className="flex flex-col items-center gap-1.5 flex-1">
      <span className={`font-display text-sm font-bold ${isShroom ? "text-[hsl(129,35%,45%)]" : "text-foreground/30"}`}>{value}%</span>
      <div className="w-full h-[140px] md:h-[180px] bg-foreground/5 flex flex-col justify-end">
        <div
          className={`w-full transition-all duration-700 ease-out ${isShroom 
            ? "bg-gradient-to-t from-[hsl(129,35%,45%)] to-[hsl(84,33%,70%)]" 
            : `bg-gradient-to-t ${competitorColor}`}`}
          style={{ height: `${h}%` }}
        />
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  const [active, setActive] = useState<CompetitorId>("energy");
  const [aKey, setAKey] = useState(0);

  const comp = competitors.find(c => c.id === active)!;
  const adv = Math.round(
    ((shroomMetrics.energia - comp.metrics.energia) +
    (shroomMetrics.fokus - comp.metrics.fokus) +
    (shroomMetrics.zdrowie - comp.metrics.zdrowie)) / 3
  );

  const allMetrics: MetricKey[] = ["energia", "fokus", "zdrowie"];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="mb-8">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">Porównanie</p>
          <h2 className="ed-heading text-foreground">Shroom vs. reszta</h2>
          <p className="font-body text-sm text-foreground/50 mt-2">
            Średnio <span className="font-bold text-[hsl(129,35%,45%)]">+{adv}%</span> lepiej niż {comp.shortName.toLowerCase()}.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,300px] gap-[3px]">
          {/* Chart */}
          <div className="bg-background p-5 md:p-8">
            {/* Selector */}
            <div className="grid grid-cols-3 gap-[2px] mb-6">
              {competitors.map((c) => {
                const Icon = c.icon;
                return (
                  <button
                    key={c.id}
                    onClick={() => { setActive(c.id); setAKey(p => p + 1); }}
                    className={`flex items-center justify-center gap-2 py-2.5 text-xs font-display font-semibold transition-all ${
                      active === c.id ? "bg-foreground text-background" : "bg-foreground/5 text-foreground/50 hover:bg-foreground/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {c.shortName}
                  </button>
                );
              })}
            </div>

            {/* Bars */}
            <div className="grid grid-cols-3 gap-4">
              {allMetrics.map((m) => {
                const cfg = metricLabels[m];
                const Icon = cfg.icon;
                const diff = shroomMetrics[m] - comp.metrics[m];
                return (
                  <div key={m} className="space-y-2">
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-display font-semibold bg-foreground/5 text-foreground">
                        <Icon className="w-3 h-3" />{cfg.label}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <VerticalBar value={shroomMetrics[m]} isShroom={true} animationKey={`${aKey}`} />
                      <VerticalBar value={comp.metrics[m]} isShroom={false} competitorColor={comp.color} animationKey={`${aKey}`} />
                    </div>
                    <p className="text-center">
                      <span className="inline-block px-2 py-0.5 font-display font-bold text-xs bg-[hsl(129,35%,45%,0.1)] text-[hsl(129,35%,45%)]">+{diff}%</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-5 mt-6 pt-4 border-t border-foreground/8">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-[hsl(129,35%,45%)]" />
                <span className="font-body text-xs text-foreground/40">Shroom</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 bg-gradient-to-t ${comp.color}`} />
                <span className="font-body text-xs text-foreground/40">{comp.shortName}</span>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="bg-shroom-green p-5 md:p-6 flex flex-col gap-4">
            <div className="flex justify-center py-2">
              <img src={productPower} alt="Shroom Power" className="h-32 w-auto object-contain" />
            </div>
            <div className="bg-background/70 p-4">
              <p className="font-display text-2xl font-bold text-foreground">0g</p>
              <p className="text-foreground/50 font-body text-xs">dodanego cukru</p>
            </div>
            <div className="bg-background/70 p-4">
              <p className="font-display text-lg font-bold text-foreground">Źródło cynku</p>
              <p className="text-foreground/50 font-body text-xs">funkcje poznawcze*</p>
            </div>
            <div className="bg-background/70 p-4">
              <p className="font-display text-lg font-bold text-foreground">Lion's Mane</p>
              <p className="text-foreground/50 font-body text-xs">soplówka jeżowata</p>
            </div>
            <a href="#produkty" className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 font-display font-bold text-sm hover:opacity-90 transition-opacity mt-auto">
              Zamów teraz
              <Zap className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
