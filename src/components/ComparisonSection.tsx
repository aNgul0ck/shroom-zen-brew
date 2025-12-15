import { useState } from "react";
import { Check, X, Minus, Zap, Coffee, Brain } from "lucide-react";
import productPower from "@/assets/product-power.png";

type ComparisonItem = {
  feature: string;
  power: "yes" | "no" | "partial";
  energy: "yes" | "no" | "partial";
  coffee: "yes" | "no" | "partial";
};

const comparisons: ComparisonItem[] = [
  { feature: "Pobudza", power: "yes", energy: "yes", coffee: "yes" },
  { feature: "Wspiera mózg (NGF)", power: "yes", energy: "no", coffee: "no" },
  { feature: "Bez cukru", power: "yes", energy: "no", coffee: "partial" },
  { feature: "Brak drżenia/nerwowości", power: "yes", energy: "no", coffee: "no" },
  { feature: "Energia bez spadków", power: "yes", energy: "no", coffee: "no" },
  { feature: "Adaptogeny", power: "yes", energy: "no", coffee: "no" },
  { feature: "Naturalny skład", power: "yes", energy: "no", coffee: "yes" },
];

const StatusIcon = ({ status }: { status: "yes" | "no" | "partial" }) => {
  if (status === "yes") {
    return (
      <div className="w-8 h-8 rounded-full bg-shroom-green/20 flex items-center justify-center">
        <Check className="w-4 h-4 text-shroom-green" />
      </div>
    );
  }
  if (status === "no") {
    return (
      <div className="w-8 h-8 rounded-full bg-shroom-coral/20 flex items-center justify-center">
        <X className="w-4 h-4 text-shroom-coral" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-shroom-gold/20 flex items-center justify-center">
      <Minus className="w-4 h-4 text-shroom-gold" />
    </div>
  );
};

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<"energy" | "coffee">("energy");

  const tabs = [
    { id: "energy" as const, label: "vs Energetyki", icon: Zap },
    { id: "coffee" as const, label: "vs Kawa", icon: Coffee },
  ];

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
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Zobacz, czym różni się Shroom od energetyków i kawy.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-card rounded-full p-1 shadow-soft">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-soft overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 border-b border-border">
              <div className="flex items-center gap-3">
                <img
                  src={productPower}
                  alt="Shroom Power"
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <p className="font-display font-bold text-foreground">Shroom Power</p>
                  <p className="font-body text-xs text-muted-foreground">Adaptogeny</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-shroom-coral/20 flex items-center justify-center mb-1">
                    {activeTab === "energy" ? (
                      <Zap className="w-6 h-6 text-shroom-coral" />
                    ) : (
                      <Coffee className="w-6 h-6 text-shroom-coral" />
                    )}
                  </div>
                  <p className="font-display font-bold text-foreground">
                    {activeTab === "energy" ? "Energetyki" : "Kawa"}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="font-display font-bold text-shroom-green text-lg">
                  Wygrywa Shroom!
                </span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border">
              {comparisons.map((item, index) => (
                <div
                  key={item.feature}
                  className="grid grid-cols-3 gap-4 p-4 items-center hover:bg-secondary/30 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="font-body text-sm text-foreground font-medium">
                    {item.feature}
                  </div>
                  <div className="flex justify-center">
                    <StatusIcon
                      status={activeTab === "energy" ? item.energy : item.coffee}
                    />
                  </div>
                  <div className="flex justify-end">
                    <StatusIcon status={item.power} />
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-6 bg-shroom-sage/20 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold text-foreground">
                    Shroom Power: <span className="text-shroom-green">7/7</span>
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {activeTab === "energy" ? "Energetyki: 2/7" : "Kawa: 3/7"}
                  </p>
                </div>
                <a
                  href="#produkty"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Zamów Power
                  <Zap className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
          <div className="bg-card rounded-2xl p-4 text-center shadow-soft">
            <p className="font-display text-2xl font-bold text-shroom-green">0g</p>
            <p className="font-body text-xs text-muted-foreground">cukru</p>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center shadow-soft">
            <p className="font-display text-2xl font-bold text-shroom-coral">0</p>
            <p className="font-body text-xs text-muted-foreground">crash</p>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center shadow-soft">
            <p className="font-display text-2xl font-bold text-primary">100%</p>
            <p className="font-body text-xs text-muted-foreground">natura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
