import { useState, useEffect } from "react";
import { Zap, Coffee, Brain, TrendingUp, Clock, Heart } from "lucide-react";
import productPower from "@/assets/product-power.png";

type MetricData = {
  label: string;
  icon: typeof Brain;
  shroom: number;
  competitor: number;
  unit?: string;
};

const energyMetrics: MetricData[] = [
  { label: "Poziom energii", icon: Zap, shroom: 95, competitor: 80, unit: "%" },
  { label: "Czas działania", icon: Clock, shroom: 6, competitor: 2, unit: "h" },
  { label: "Fokus & koncentracja", icon: Brain, shroom: 90, competitor: 40, unit: "%" },
  { label: "Zdrowie", icon: Heart, shroom: 100, competitor: 20, unit: "%" },
  { label: "Stabilność energii", icon: TrendingUp, shroom: 95, competitor: 30, unit: "%" },
];

const coffeeMetrics: MetricData[] = [
  { label: "Poziom energii", icon: Zap, shroom: 95, competitor: 70, unit: "%" },
  { label: "Czas działania", icon: Clock, shroom: 6, competitor: 3, unit: "h" },
  { label: "Fokus & koncentracja", icon: Brain, shroom: 90, competitor: 60, unit: "%" },
  { label: "Zdrowie", icon: Heart, shroom: 100, competitor: 50, unit: "%" },
  { label: "Stabilność energii", icon: TrendingUp, shroom: 95, competitor: 45, unit: "%" },
];

const AnimatedBar = ({ 
  value, 
  maxValue = 100, 
  color, 
  delay = 0,
  animate 
}: { 
  value: number; 
  maxValue?: number; 
  color: string; 
  delay?: number;
  animate: boolean;
}) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidth((value / maxValue) * 100);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setWidth(0);
    }
  }, [value, maxValue, delay, animate]);

  return (
    <div className="h-3 bg-secondary rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<"energy" | "coffee">("energy");
  const [animate, setAnimate] = useState(true);

  const metrics = activeTab === "energy" ? energyMetrics : coffeeMetrics;

  const handleTabChange = (tab: "energy" | "coffee") => {
    setAnimate(false);
    setActiveTab(tab);
    setTimeout(() => setAnimate(true), 50);
  };

  const tabs = [
    { id: "energy" as const, label: "vs Energetyki", icon: Zap },
    { id: "coffee" as const, label: "vs Kawa", icon: Coffee },
  ];

  // Calculate average scores
  const shroomAvg = Math.round(metrics.reduce((acc, m) => acc + m.shroom, 0) / metrics.length);
  const competitorAvg = Math.round(metrics.reduce((acc, m) => acc + m.competitor, 0) / metrics.length);

  return (
    <section className="section-padding bg-shroom-blush/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-shroom-coral/20 px-4 py-2 rounded-full mb-4">
            <Brain className="w-4 h-4 text-shroom-coral" />
            <span className="font-body text-sm font-medium text-shroom-coral">
              Porównanie
            </span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shroom Power vs <span className="text-gradient">Tradycyjne napoje</span>
          </h2>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card rounded-full p-1.5 shadow-soft">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-display font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-soft p-8 md:p-12">
            {/* Product Headers */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <img
                  src={productPower}
                  alt="Shroom Power"
                  className="h-20 w-auto object-contain"
                />
                <div>
                  <p className="font-display text-xl font-bold text-foreground">Shroom Power</p>
                  <p className="font-body text-sm text-shroom-green">Adaptogeny + Grzyby</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 rounded-full bg-shroom-coral/20 flex items-center justify-center mb-2 ml-auto">
                  {activeTab === "energy" ? (
                    <Zap className="w-8 h-8 text-shroom-coral" />
                  ) : (
                    <Coffee className="w-8 h-8 text-shroom-coral" />
                  )}
                </div>
                <p className="font-display text-xl font-bold text-foreground">
                  {activeTab === "energy" ? "Energetyki" : "Kawa"}
                </p>
              </div>
            </div>

            {/* Metrics with Bars */}
            <div className="space-y-8">
              {metrics.map((metric, index) => (
                <div key={metric.label} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <metric.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-display font-semibold text-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 font-display font-bold text-lg">
                      <span className="text-shroom-green">
                        {metric.shroom}{metric.unit}
                      </span>
                      <span className="text-shroom-coral">
                        {metric.competitor}{metric.unit}
                      </span>
                    </div>
                  </div>
                  
                  {/* Double Bar */}
                  <div className="space-y-2">
                    <AnimatedBar 
                      value={metric.shroom} 
                      color="bg-gradient-to-r from-shroom-green to-shroom-sage" 
                      delay={index * 150}
                      animate={animate}
                    />
                    <AnimatedBar 
                      value={metric.competitor} 
                      color="bg-gradient-to-r from-shroom-coral to-shroom-coral/60" 
                      delay={index * 150 + 75}
                      animate={animate}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Score Summary */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Circular Score Comparison */}
                <div className="flex items-center gap-8">
                  {/* Shroom Score */}
                  <div className="relative">
                    <svg className="w-28 h-28 -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-secondary"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${shroomAvg * 3.02} 302`}
                        className="text-shroom-green transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-2xl font-bold text-shroom-green">{shroomAvg}%</span>
                      <span className="font-body text-xs text-muted-foreground">Shroom</span>
                    </div>
                  </div>

                  <span className="font-display text-2xl font-bold text-muted-foreground">vs</span>

                  {/* Competitor Score */}
                  <div className="relative">
                    <svg className="w-28 h-28 -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-secondary"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${competitorAvg * 3.02} 302`}
                        className="text-shroom-coral transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-2xl font-bold text-shroom-coral">{competitorAvg}%</span>
                      <span className="font-body text-xs text-muted-foreground">
                        {activeTab === "energy" ? "Energy" : "Kawa"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center md:text-right">
                  <p className="font-display text-xl font-bold text-foreground mb-3">
                    Shroom wygrywa <span className="text-shroom-green">+{shroomAvg - competitorAvg}%</span>
                  </p>
                  <a
                    href="#produkty"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold hover:scale-105 transition-transform shadow-lg"
                  >
                    Wypróbuj Power
                    <Zap className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
