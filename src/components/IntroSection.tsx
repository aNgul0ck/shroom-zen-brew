import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Battery, Moon, Heart } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Focus",
    description: "Wyostrz umysł bez kawy na pusty żołądek.",
    color: "bg-shroom-sage/40",
    ringColor: "hsl(84 33% 80%)",
  },
  {
    icon: Battery,
    title: "Energy",
    description: "Naturalna moc bez crashu o 15:00.",
    color: "bg-shroom-peach/40",
    ringColor: "hsl(18 95% 86%)",
  },
  {
    icon: Moon,
    title: "Relax",
    description: "Wycisz się bez scrollowania do 3 w nocy.",
    color: "bg-shroom-lavender/30",
    ringColor: "hsl(247 28% 64%)",
  },
  {
    icon: Heart,
    title: "Balance",
    description: "Adaptogeny, nie kolejna tabletka.",
    color: "bg-shroom-gold/30",
    ringColor: "hsl(40 100% 71%)",
  },
];

const IntroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate on mobile
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8s of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const activePillar = pillars[activeIndex];
  const radius = 110; // circle radius for icon placement

  return (
    <section className="py-28 md:py-36 bg-background" id="o-nas">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 md:mb-32"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Czym jest Shroom?
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8">
            Stop feeling{" "}
            <span className="text-muted-foreground/40">like shit.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Napoje funkcjonalne z soplówką jeżowatą. Bez cukru, bez ściemy, bez efektów ubocznych. Tylko to, czego Twój organizm naprawdę potrzebuje.
          </p>
        </motion.div>

        {/* Mobile: Orbital selector */}
        <div className="sm:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Circle with icons */}
            <div className="relative w-[280px] h-[280px] mb-8">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-border" />

              {/* Active arc indicator */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 280 280">
                <motion.circle
                  cx="140"
                  cy="140"
                  r="138"
                  fill="none"
                  stroke={activePillar.ringColor}
                  strokeWidth="3"
                  strokeDasharray={`${(2 * Math.PI * 138) / 4} ${(2 * Math.PI * 138) * 3 / 4}`}
                  strokeDashoffset={-(2 * Math.PI * 138) * activeIndex / 4}
                  strokeLinecap="round"
                  initial={false}
                  animate={{
                    strokeDashoffset: -(2 * Math.PI * 138) * activeIndex / 4,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-center px-8"
                  >
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {activePillar.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {activePillar.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Orbital icons */}
              {pillars.map((pillar, index) => {
                const angle = (index * 90 - 90) * (Math.PI / 180); // Start from top
                const x = 140 + radius * Math.cos(angle);
                const y = 140 + radius * Math.sin(angle);
                const isActive = index === activeIndex;
                const Icon = pillar.icon;

                return (
                  <motion.button
                    key={pillar.title}
                    onClick={() => handleSelect(index)}
                    className="absolute"
                    style={{
                      left: x - 24,
                      top: y - 24,
                    }}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `${pillar.color} shadow-md`
                          : "bg-card border border-border"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Progress dots */}
            <div className="flex gap-2">
              {pillars.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: Grid cards (unchanged) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${pillar.color} rounded-3xl p-8 md:p-10 group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-background/70 flex items-center justify-center mb-8">
                <pillar.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {[
              { value: "500mg", label: "Lion's Mane" },
              { value: "0g", label: "Dodanego cukru" },
              { value: "100%", label: "Naturalne składniki" },
              { value: "🇵🇱", label: "Made in Poland" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
