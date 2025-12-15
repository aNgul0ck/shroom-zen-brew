import { useState, useEffect } from "react";
import { Zap, Coffee } from "lucide-react";
import productPower from "@/assets/product-power.png";

type CompetitorId = "redbull" | "monster" | "coffee";

type CompetitorData = {
  id: CompetitorId;
  name: string;
  icon: typeof Zap;
  energia: number;
  fokus: number;
  zdrowie: number;
};

const competitors: CompetitorData[] = [
  { id: "redbull", name: "Red Bull", icon: Zap, energia: 70, fokus: 35, zdrowie: 15 },
  { id: "monster", name: "Monster", icon: Zap, energia: 80, fokus: 30, zdrowie: 10 },
  { id: "coffee", name: "Kawa", icon: Coffee, energia: 65, fokus: 55, zdrowie: 45 },
];

const shroomData = { energia: 92, fokus: 95, zdrowie: 100 };

const AnimatedBar = ({ 
  height, 
  delay = 0,
  isShroom = false,
}: { 
  height: number; 
  delay?: number;
  isShroom?: boolean;
}) => {
  const [animatedHeight, setAnimatedHeight] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedHeight(height);
    }, delay);
    return () => clearTimeout(timer);
  }, [height, delay]);

  return (
    <div className="relative h-full flex flex-col justify-end">
      <div
        className={`w-full rounded-t-lg transition-all duration-1000 ease-out ${
          isShroom 
            ? "bg-gradient-to-t from-shroom-gold to-shroom-sage" 
            : "border border-white/20 bg-white/5"
        }`}
        style={{ height: `${animatedHeight}%` }}
      />
      <span className={`absolute -top-8 left-1/2 -translate-x-1/2 font-display text-lg font-bold ${
        isShroom ? "text-shroom-gold" : "text-white/60"
      }`}>
        {height}%
      </span>
    </div>
  );
};

const ComparisonSection = () => {
  const [activeCompetitor, setActiveCompetitor] = useState<CompetitorId>("redbull");
  const [activeMetric, setActiveMetric] = useState<"energia" | "fokus" | "zdrowie">("energia");

  const competitor = competitors.find(c => c.id === activeCompetitor)!;
  
  const metrics = [
    { id: "energia" as const, label: "Energia", shroomVal: shroomData.energia, compVal: competitor.energia },
    { id: "fokus" as const, label: "Fokus", shroomVal: shroomData.fokus, compVal: competitor.fokus },
    { id: "zdrowie" as const, label: "Zdrowie", shroomVal: shroomData.zdrowie, compVal: competitor.zdrowie },
  ];

  const currentMetric = metrics.find(m => m.id === activeMetric)!;
  const advantage = currentMetric.shroomVal - currentMetric.compVal;

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
          
          {/* Left - Chart Area */}
          <div>
            {/* Metric Tabs */}
            <div className="flex gap-2 mb-12">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric.id)}
                  className={`px-6 py-3 rounded-full font-display font-semibold text-sm transition-all ${
                    activeMetric === metric.id
                      ? "bg-shroom-gold text-[#1a1a1a]"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-[300px] flex flex-col justify-between text-white/40 font-mono text-sm">
                <span>100%</span>
                <span>50%</span>
                <span>0%</span>
              </div>

              {/* Chart Grid & Bars */}
              <div className="ml-16 relative">
                {/* Grid lines */}
                <div className="absolute inset-0 h-[300px] flex flex-col justify-between pointer-events-none">
                  <div className="border-t border-white/10 w-full" />
                  <div className="border-t border-white/10 w-full" />
                  <div className="border-t border-white/10 w-full" />
                </div>

                {/* Bars container */}
                <div className="h-[300px] flex items-end gap-8 pt-8">
                  {/* Shroom Bar */}
                  <div className="flex-1 h-full flex flex-col">
                    <div className="flex-1 relative">
                      <AnimatedBar 
                        height={currentMetric.shroomVal} 
                        delay={100}
                        isShroom={true}
                      />
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                      <img 
                        src={productPower} 
                        alt="Shroom Power" 
                        className="h-16 w-auto object-contain"
                      />
                      <span className="font-display text-white font-semibold mt-2">Shroom</span>
                    </div>
                  </div>

                  {/* Competitor Bar */}
                  <div className="flex-1 h-full flex flex-col">
                    <div className="flex-1 relative">
                      <AnimatedBar 
                        height={currentMetric.compVal} 
                        delay={300}
                        isShroom={false}
                      />
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                        <competitor.icon className="w-8 h-8 text-white/60" />
                      </div>
                      <span className="font-display text-white/60 font-semibold mt-2">{competitor.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitor Toggle */}
            <div className="mt-12">
              <p className="text-white/40 font-mono text-sm mb-4 text-center">Porównaj z:</p>
              <div className="flex justify-center gap-3">
                {competitors.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setActiveCompetitor(comp.id)}
                    className={`px-6 py-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                      activeCompetitor === comp.id
                        ? "border-shroom-gold bg-shroom-gold/10"
                        : "border-white/20 bg-white/5 hover:border-white/40"
                    }`}
                  >
                    <comp.icon className={`w-5 h-5 ${
                      activeCompetitor === comp.id ? "text-shroom-gold" : "text-white/60"
                    }`} />
                    <span className={`font-display font-semibold ${
                      activeCompetitor === comp.id ? "text-white" : "text-white/60"
                    }`}>
                      {comp.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats Panel */}
          <div className="lg:sticky lg:top-24">
            <p className="text-white/40 font-mono text-sm tracking-wider mb-4">
              Porównanie napojów energetyzujących
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              <span className="text-shroom-gold">+{advantage}%</span> więcej {activeMetric === "energia" ? "energii" : activeMetric === "fokus" ? "fokusa" : "dla zdrowia"} niż {competitor.name}.
            </h2>

            {/* Stats */}
            <div className="space-y-6">
              <div className="border-t border-white/20 pt-6">
                <p className="font-display text-4xl font-bold text-white">{shroomData.energia}%</p>
                <p className="text-white/60">efektywności energetycznej bez crashu.</p>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="font-display text-4xl font-bold text-white">6h+</p>
                <p className="text-white/60">stabilnej energii bez spadków.</p>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="font-display text-4xl font-bold text-white">0g</p>
                <p className="text-white/60">cukru. 100% naturalne składniki.</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#produkty"
              className="inline-flex items-center gap-3 bg-shroom-gold text-[#1a1a1a] px-8 py-4 rounded-full font-display font-bold mt-10 hover:scale-105 transition-transform"
            >
              Wypróbuj Shroom Power
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
