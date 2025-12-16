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
    id: "energy", 
    name: "Napoje energetyczne", 
    shortName: "Energetyki",
    icon: Zap, 
    color: "from-red-500 to-orange-400",
    description: "Szybki boost, ale kosztem zdrowia",
    metrics: { energia: 75, fokus: 30, zdrowie: 15 },
    keyFact: { title: "300mg+ kofeiny", desc: "często z dużą ilością cukru" }
  },
  { 
    id: "coffee", 
    name: "Kawa i napoje z kofeiną", 
    shortName: "Kawa",
    icon: Coffee, 
    color: "from-amber-700 to-amber-500",
    description: "Klasyka, ale brak wsparcia dla mózgu",
    metrics: { energia: 65, fokus: 55, zdrowie: 45 },
    keyFact: { title: "Tylko kofeina", desc: "bez adaptogenów i nootropików" }
  },
  { 
    id: "sports", 
    name: "Napoje izotoniczne", 
    shortName: "Izotoniki",
    icon: Droplets, 
    color: "from-blue-500 to-cyan-400",
    description: "Nawodnienie bez efektu kognitywnego",
    metrics: { energia: 40, fokus: 20, zdrowie: 55 },
    keyFact: { title: "Głównie elektrolity", desc: "brak wsparcia energetycznego" }
  },
];

const shroomMetrics: Record<MetricKey, number> = { energia: 92, fokus: 95, zdrowie: 100 };

const metricConfig: Record<MetricKey, { label: string; icon: typeof Zap; shroomBenefit: string }> = {
  energia: { label: "Energia", icon: TrendingUp, shroomBenefit: "6h stabilnej energii" },
  fokus: { label: "Fokus", icon: Brain, shroomBenefit: "Wspiera funkcje poznawcze" },
  zdrowie: { label: "Zdrowie", icon: Heart, shroomBenefit: "100% naturalne składniki" },
};

const VerticalBar = ({ 
  value, 
  isShroom = false,
  delay = 0,
  competitorColor = "",
  animationKey = "",
}: { 
  value: number; 
  isShroom?: boolean;
  delay?: number;
  competitorColor?: string;
  animationKey?: string;
}) => {
  const [animatedHeight, setAnimatedHeight] = useState(0);
  
  useEffect(() => {
    setAnimatedHeight(0);
    const timer = setTimeout(() => {
      setAnimatedHeight(value);
    }, delay + 50);
    return () => clearTimeout(timer);
  }, [value, delay, animationKey]);

  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <span className={`font-display text-lg font-bold transition-all duration-700 ${
        isShroom ? "text-shroom-green" : "text-muted-foreground"
      }`}>
        {value}%
      </span>
      
      <div className="w-full h-[180px] md:h-[240px] bg-secondary/50 rounded-xl overflow-hidden flex flex-col justify-end relative">
        <div
          className={`w-full rounded-t-lg transition-all duration-1000 ease-out ${
            isShroom 
              ? "bg-gradient-to-t from-shroom-green via-shroom-sage to-shroom-green/60" 
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

  // Rotate highlighted metric
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedMetric(prev => {
        const metrics: MetricKey[] = ["energia", "fokus", "zdrowie"];
        const idx = metrics.indexOf(prev);
        return metrics[(idx + 1) % 3];
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
    <section className="section-padding bg-shroom-blush/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8 lg:gap-16 items-start">
          
          {/* Left - Chart Area */}
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-soft">
            {/* Competitor Selector - More prominent */}
            <div className="mb-8">
              <p className="text-sm font-body text-muted-foreground mb-3">Porównaj z:</p>
              <div className="grid grid-cols-3 gap-3">
                {competitors.map((comp) => {
                  const Icon = comp.icon;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => handleCompetitorChange(comp.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl text-sm font-display font-semibold transition-all duration-300 ${
                        activeCompetitor === comp.id
                          ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:scale-102"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{comp.shortName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Competitor Info Card - Changes with selection */}
            <div className={`bg-gradient-to-r ${competitor.color} p-4 rounded-2xl mb-6 transition-all duration-500`}>
              <div className="flex items-center gap-3 text-shroom-cream">
                <competitor.icon className="w-6 h-6" />
                <div>
                  <p className="font-display font-bold">{competitor.name}</p>
                  <p className="text-sm text-shroom-cream/90">{competitor.description}</p>
                </div>
              </div>
            </div>

            {/* Triple Metric Comparison */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {allMetrics.map((metric, idx) => {
                const config = metricConfig[metric];
                const Icon = config.icon;
                const diff = shroomMetrics[metric] - competitor.metrics[metric];
                const isHighlighted = highlightedMetric === metric;
                
                return (
                  <div 
                    key={metric} 
                    className={`space-y-3 p-3 rounded-2xl transition-all duration-500 ${
                      isHighlighted ? "bg-shroom-green/10 scale-105" : ""
                    }`}
                  >
                    {/* Metric Title */}
                    <div className="text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-all duration-300 ${
                        isHighlighted 
                          ? "bg-shroom-green text-shroom-cream" 
                          : "bg-secondary text-foreground"
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                        {config.label}
                      </span>
                    </div>
                    
                    {/* Bars */}
                    <div className="flex gap-1.5">
                      <VerticalBar
                        value={shroomMetrics[metric]}
                        isShroom={true}
                        delay={idx * 100}
                        animationKey={`${animationKey}`}
                      />
                      <VerticalBar
                        value={competitor.metrics[metric]}
                        isShroom={false}
                        delay={idx * 100 + 50}
                        competitorColor={competitor.color}
                        animationKey={`${animationKey}`}
                      />
                    </div>
                    
                    {/* Animated Difference */}
                    <div className="text-center">
                      <span className={`inline-block px-3 py-1 rounded-full font-display font-bold text-sm transition-all duration-500 ${
                        isHighlighted 
                          ? "bg-shroom-green text-shroom-cream scale-110" 
                          : "bg-shroom-green/10 text-shroom-green"
                      }`}>
                        +{diff}%
                      </span>
                    </div>
                    
                    {/* Shroom Benefit - shows on highlight */}
                    <p className={`text-center text-xs font-body text-shroom-green transition-all duration-300 ${
                      isHighlighted ? "opacity-100" : "opacity-0"
                    }`}>
                      {config.shroomBenefit}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Legend & Competitor Fact */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 pt-6 border-t border-border">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-t from-shroom-green to-shroom-sage" />
                  <span className="font-body text-sm text-muted-foreground">Shroom Power</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded bg-gradient-to-t ${competitor.color}`} />
                  <span className="font-body text-sm text-muted-foreground">{competitor.shortName}</span>
                </div>
              </div>
              
              {/* Dynamic Competitor Fact */}
              <div className="bg-secondary/50 rounded-lg px-3 py-2 transition-all duration-500">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">{competitor.keyFact.title}</span> — {competitor.keyFact.desc}
                </p>
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
                Średnio <span className="text-shroom-green transition-all duration-500">+{totalAdvantage}%</span> lepiej niż {competitor.shortName.toLowerCase()}.
              </h2>
            </div>

            {/* Product image */}
            <div className="flex justify-center py-4">
              <img 
                src={productPower} 
                alt="Shroom Power" 
                className="h-40 w-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Key Stats - Dynamic based on competitor */}
            <div className="space-y-4">
              <div className={`bg-card rounded-2xl p-5 shadow-soft border-l-4 border-shroom-green transition-all duration-300`}>
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
