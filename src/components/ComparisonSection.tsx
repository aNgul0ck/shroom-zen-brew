import { useState, useEffect } from "react";
import { Zap, Coffee, Leaf } from "lucide-react";
import productPower from "@/assets/product-power.png";

type CompetitorId = "energy" | "coffee";

type MetricKey = "energia" | "fokus" | "zdrowie";

type CompetitorData = {
  id: CompetitorId;
  name: string;
  shortName: string;
  icon: typeof Zap;
  metrics: Record<MetricKey, number>;
};

const competitors: CompetitorData[] = [
  { 
    id: "energy", 
    name: "Napoje energetyczne", 
    shortName: "Energetyki",
    icon: Zap, 
    metrics: { energia: 75, fokus: 30, zdrowie: 15 }
  },
  { 
    id: "coffee", 
    name: "Kawa i napoje z kofeiną", 
    shortName: "Kawa",
    icon: Coffee, 
    metrics: { energia: 65, fokus: 55, zdrowie: 45 }
  },
];

const shroomMetrics: Record<MetricKey, number> = { energia: 92, fokus: 95, zdrowie: 100 };

const metricLabels: Record<MetricKey, string> = {
  energia: "Energia",
  fokus: "Fokus",
  zdrowie: "Zdrowie",
};

const VerticalBar = ({ 
  value, 
  label,
  isShroom = false,
  delay = 0,
  isActive = true,
}: { 
  value: number; 
  label: string;
  isShroom?: boolean;
  delay?: number;
  isActive?: boolean;
}) => {
  const [animatedHeight, setAnimatedHeight] = useState(0);
  
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setAnimatedHeight(value);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setAnimatedHeight(0);
      setTimeout(() => setAnimatedHeight(value), 50);
    }
  }, [value, delay, isActive]);

  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      {/* Value on top */}
      <span className={`font-display text-xl font-bold transition-all duration-500 ${
        isShroom ? "text-shroom-green" : "text-shroom-coral"
      }`}>
        {value}%
      </span>
      
      {/* Bar container */}
      <div className="w-full h-[200px] md:h-[280px] bg-secondary/50 rounded-xl overflow-hidden flex flex-col justify-end">
        <div
          className={`w-full rounded-t-lg transition-all duration-1000 ease-out ${
            isShroom 
              ? "bg-gradient-to-t from-shroom-green via-shroom-sage to-shroom-green/60" 
              : "bg-gradient-to-t from-shroom-coral via-shroom-coral/70 to-shroom-coral/40"
          }`}
          style={{ height: `${animatedHeight}%` }}
        />
      </div>
      
      {/* Label */}
      <span className="font-body text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

const ComparisonSection = () => {
  const [activeCompetitor, setActiveCompetitor] = useState<CompetitorId>("energy");
  const [isAnimating, setIsAnimating] = useState(true);

  const competitor = competitors.find(c => c.id === activeCompetitor)!;
  
  const handleCompetitorChange = (id: CompetitorId) => {
    setIsAnimating(false);
    setActiveCompetitor(id);
    setTimeout(() => setIsAnimating(true), 50);
  };

  // Calculate total advantage
  const totalAdvantage = Math.round(
    ((shroomMetrics.energia - competitor.metrics.energia) +
    (shroomMetrics.fokus - competitor.metrics.fokus) +
    (shroomMetrics.zdrowie - competitor.metrics.zdrowie)) / 3
  );

  const allMetrics: MetricKey[] = ["energia", "fokus", "zdrowie"];

  return (
    <section className="section-padding bg-shroom-blush/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8 lg:gap-16 items-start">
          
          {/* Left - Chart Area */}
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-soft">
            {/* Header with toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="font-display text-xl font-bold text-foreground">
                Shroom Power vs {competitor.shortName}
              </h3>
              
              <div className="flex gap-2">
                {competitors.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => handleCompetitorChange(comp.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-display font-semibold transition-all ${
                      activeCompetitor === comp.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <comp.icon className="w-4 h-4" />
                    {comp.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Triple Metric Comparison */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {allMetrics.map((metric, idx) => (
                <div key={metric} className="space-y-4">
                  {/* Metric Title */}
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-display font-semibold text-foreground">
                      {metric === "energia" && <Zap className="w-4 h-4" />}
                      {metric === "fokus" && <span className="text-lg">🎯</span>}
                      {metric === "zdrowie" && <Leaf className="w-4 h-4" />}
                      {metricLabels[metric]}
                    </span>
                  </div>
                  
                  {/* Bars Side by Side */}
                  <div className="flex gap-2">
                    <VerticalBar
                      value={shroomMetrics[metric]}
                      label="Shroom"
                      isShroom={true}
                      delay={idx * 150}
                      isActive={isAnimating}
                    />
                    <VerticalBar
                      value={competitor.metrics[metric]}
                      label={competitor.shortName}
                      isShroom={false}
                      delay={idx * 150 + 100}
                      isActive={isAnimating}
                    />
                  </div>
                  
                  {/* Difference badge */}
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-shroom-green/10 text-shroom-green font-display font-bold text-sm">
                      +{shroomMetrics[metric] - competitor.metrics[metric]}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-t from-shroom-green to-shroom-sage" />
                <span className="font-body text-sm text-muted-foreground">Shroom Power</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-t from-shroom-coral to-shroom-coral/60" />
                <span className="font-body text-sm text-muted-foreground">{competitor.name}</span>
              </div>
            </div>
          </div>

          {/* Right - Stats Panel */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div>
              <p className="text-muted-foreground font-body text-sm mb-2">
                Dlaczego Shroom Power?
              </p>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Średnio <span className="text-shroom-green">+{totalAdvantage}%</span> lepiej niż {competitor.shortName.toLowerCase()}.
              </h2>
            </div>

            {/* Product image */}
            <div className="flex justify-center py-4">
              <img 
                src={productPower} 
                alt="Shroom Power" 
                className="h-40 w-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Key Stats */}
            <div className="space-y-4">
              <div className="bg-card rounded-2xl p-5 shadow-soft border-l-4 border-shroom-green">
                <p className="font-display text-3xl font-bold text-foreground">6h+</p>
                <p className="text-muted-foreground font-body text-sm">stabilnej energii bez crashu</p>
              </div>
              
              <div className="bg-card rounded-2xl p-5 shadow-soft border-l-4 border-shroom-sage">
                <p className="font-display text-3xl font-bold text-foreground">0g cukru</p>
                <p className="text-muted-foreground font-body text-sm">w 100% naturalne składniki</p>
              </div>
              
              <div className="bg-card rounded-2xl p-5 shadow-soft border-l-4 border-shroom-gold">
                <p className="font-display text-3xl font-bold text-foreground">Lion's Mane</p>
                <p className="text-muted-foreground font-body text-sm">wspiera funkcje poznawcze (NGF)</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#produkty"
              className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold hover:scale-105 transition-transform w-full"
            >
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
