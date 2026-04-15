import { useState, useEffect } from "react";
import { Zap, Coffee, Leaf, Droplets, TrendingUp, Heart, Brain } from "lucide-react";
import productPower from "@/assets/product-power.png";

type CompetitorId = "energy" | "coffee" | "sports";
type MetricKey = "energia" | "fokus" | "zdrowie";

type CompetitorData = {
  id: CompetitorId;
  name: string;
  shortName: string;
  icon: typeof Zap;
  color: string;
  description: string;
  metrics: Record<MetricKey, number>;
  keyFact: { title: string; desc: string };
};

const competitors: CompetitorData[] = [
  { 
    id: "energy", name: "Napoje energetyczne", shortName: "Energetyki",
    icon: Zap, color: "from-red-500 to-orange-400",
    description: "Dużo kofeiny i cukru",
    metrics: { energia: 75, fokus: 30, zdrowie: 15 },
    keyFact: { title: "300mg+ kofeiny", desc: "często z dużą ilością cukru" }
  },
  { 
    id: "coffee", name: "Kawa i napoje z kofeiną", shortName: "Kawa",
    icon: Coffee, color: "from-amber-700 to-amber-500",
    description: "Klasyka z kofeiną",
    metrics: { energia: 65, fokus: 55, zdrowie: 45 },
    keyFact: { title: "Tylko kofeina", desc: "bez dodatkowych składników" }
  },
  { 
    id: "sports", name: "Napoje izotoniczne", shortName: "Izotoniki",
    icon: Droplets, color: "from-blue-500 to-cyan-400",
    description: "Głównie nawodnienie",
    metrics: { energia: 40, fokus: 20, zdrowie: 55 },
    keyFact: { title: "Głównie elektrolity", desc: "inne przeznaczenie" }
  },
];

const shroomMetrics: Record<MetricKey, number> = { energia: 92, fokus: 95, zdrowie: 100 };

const metricConfig: Record<MetricKey, { label: string; icon: typeof Zap; shroomBenefit: string }> = {
  energia: { label: "Skład", icon: TrendingUp, shroomBenefit: "Naturalne składniki roślinne" },
  fokus: { label: "Składniki", icon: Brain, shroomBenefit: "Cynk i witamina C" },
  zdrowie: { label: "Czystość", icon: Heart, shroomBenefit: "100% naturalne składniki" },
};

const VerticalBar = ({ 
  value, isShroom = false, delay = 0, competitorColor = "", animationKey = "",
}: { value: number; isShroom?: boolean; delay?: number; competitorColor?: string; animationKey?: string; }) => {
  const [animatedHeight, setAnimatedHeight] = useState(0);
  
  useEffect(() => {
    setAnimatedHeight(0);
    const timer = setTimeout(() => setAnimatedHeight(value), delay + 50);
    return () => clearTimeout(timer);
  }, [value, delay, animationKey]);

  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className={`font-display text-lg font-bold transition-all duration-700 ${
        isShroom ? "text-[hsl(129,35%,50%)]" : "text-foreground/40"
      }`}>
        {value}%
      </span>
      <div className="w-full h-[180px] md:h-[240px] bg-foreground/5 overflow-hidden flex flex-col justify-end relative">
        <div
          className={`w-full transition-all duration-1000 ease-out ${
            isShroom ? "bg-gradient-to-t from-[hsl(129,35%,50%)] via-[hsl(84,33%,75%)] to-[hsl(129,35%,60%)]" 
            : `bg-gradient-to-t ${competitorColor}`
          }`}
          style={{ height: `${animatedHeight}%` }}
        />
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  const [activeCompetitor, setActiveCompetitor] = useState<CompetitorId>("energy");
  const [animationKey, setAnimationKey] = useState(0);
  const [highlightedMetric, setHighlightedMetric] = useState<MetricKey>("energia");

  const competitor = competitors.find(c => c.id === activeCompetitor)!;
  
  const handleCompetitorChange = (id: CompetitorId) => {
    setActiveCompetitor(id);
    setAnimationKey(prev => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedMetric(prev => {
        const metrics: MetricKey[] = ["energia", "fokus", "zdrowie"];
        return metrics[(metrics.indexOf(prev) + 1) % 3];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const totalAdvantage = Math.round(
    ((shroomMetrics.energia - competitor.metrics.energia) +
    (shroomMetrics.fokus - competitor.metrics.fokus) +
    (shroomMetrics.zdrowie - competitor.metrics.zdrowie)) / 3
  );

  const allMetrics: MetricKey[] = ["energia", "fokus", "zdrowie"];

  return (
    <section className="ed-section bg-[hsl(43,38%,97%)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="font-body text-sm font-medium text-foreground/60 uppercase tracking-[0.2em] mb-4">
            Porównanie
          </p>
          <h2 className="ed-heading text-foreground mb-2">
            Shroom vs. reszta
          </h2>
          <p className="font-body text-foreground/60">
            Średnio <span className="font-bold text-[hsl(129,35%,50%)]">+{totalAdvantage}%</span> lepiej niż {competitor.shortName.toLowerCase()}.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,340px] gap-[3px] bg-foreground">
          {/* Chart Area */}
          <div className="bg-background p-6 md:p-10">
            <div className="mb-8">
              <p className="text-sm font-body text-foreground/50 mb-3">Porównaj z:</p>
              <div className="grid grid-cols-3 gap-[3px] bg-foreground">
                {competitors.map((comp) => {
                  const Icon = comp.icon;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => handleCompetitorChange(comp.id)}
                      className={`flex flex-col items-center gap-2 p-3 text-sm font-display font-semibold transition-all duration-300 ${
                        activeCompetitor === comp.id
                          ? "bg-foreground text-background"
                          : "bg-[hsl(43,38%,94%)] text-foreground/60 hover:bg-[hsl(43,38%,90%)]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{comp.shortName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {allMetrics.map((metric, idx) => {
                const config = metricConfig[metric];
                const Icon = config.icon;
                const diff = shroomMetrics[metric] - competitor.metrics[metric];
                const isHighlighted = highlightedMetric === metric;
                
                return (
                  <div key={metric} className={`space-y-3 p-3 transition-all duration-500 ${
                    isHighlighted ? "bg-[hsl(129,35%,50%,0.08)]" : ""
                  }`}>
                    <div className="text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-semibold transition-all duration-300 ${
                        isHighlighted ? "bg-[hsl(129,35%,50%)] text-background" : "bg-foreground/5 text-foreground"
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                        {config.label}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <VerticalBar value={shroomMetrics[metric]} isShroom={true} delay={idx * 100} animationKey={`${animationKey}`} />
                      <VerticalBar value={competitor.metrics[metric]} isShroom={false} delay={idx * 100 + 50} competitorColor={competitor.color} animationKey={`${animationKey}`} />
                    </div>
                    <div className="text-center">
                      <span className={`inline-block px-3 py-1 font-display font-bold text-sm transition-all duration-500 ${
                        isHighlighted ? "bg-[hsl(129,35%,50%)] text-background" : "bg-[hsl(129,35%,50%,0.1)] text-[hsl(129,35%,50%)]"
                      }`}>
                        +{diff}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-6 mt-8 pt-6 border-t border-foreground/10">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-t from-[hsl(129,35%,50%)] to-[hsl(84,33%,75%)]" />
                <span className="font-body text-sm text-foreground/50">Shroom Power</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 bg-gradient-to-t ${competitor.color}`} />
                <span className="font-body text-sm text-foreground/50">{competitor.shortName}</span>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="bg-[hsl(150,50%,82%)] p-6 md:p-8 flex flex-col gap-6">
            <div className="flex justify-center py-4">
              <img src={productPower} alt="Shroom Power" className="h-40 w-auto object-contain" />
            </div>

            <div className="bg-background/80 p-5">
              <p className="ed-stat text-3xl">0g</p>
              <p className="text-foreground/50 font-body text-sm">dodanego cukru</p>
            </div>
            
            <div className="bg-background/80 p-5">
              <p className="font-display text-2xl font-bold text-foreground">Źródło cynku</p>
              <p className="text-foreground/50 font-body text-sm">przyczynia się do funkcji poznawczych*</p>
            </div>
            
            <div className="bg-background/80 p-5">
              <p className="font-display text-2xl font-bold text-foreground">Lion's Mane</p>
              <p className="text-foreground/50 font-body text-sm">soplówka jeżowata w składzie</p>
            </div>

            <a href="#produkty" className="flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 font-display font-bold hover:opacity-90 transition-opacity w-full mt-auto">
              Zamów Shroom Power
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
