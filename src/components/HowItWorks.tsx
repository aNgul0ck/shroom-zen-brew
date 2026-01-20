import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Zap, Brain, Sparkles, ArrowRight, Clock } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Droplets,
    title: "Wypij",
    time: "0 min",
    headline: "Jeden łyk dobrego samopoczucia",
    description: "Naturalne składniki zaczynają działać od pierwszego łyku. Bez sztucznych dodatków, bez cukru — tylko czysta formuła.",
    color: "shroom-peach",
    bgColor: "bg-shroom-peach/20",
  },
  {
    id: 2,
    icon: Zap,
    title: "Wchłoń",
    time: "15-30 min",
    headline: "Składniki wchodzą do krwioobiegu",
    description: "L-teanina, adaptogeny i witaminy są wchłaniane przez organizm. Zaczyna się naturalna aktywacja lub wyciszenie — zależnie od napoju.",
    color: "shroom-gold",
    bgColor: "bg-shroom-gold/20",
  },
  {
    id: 3,
    icon: Brain,
    title: "Poczuj",
    time: "30-60 min",
    headline: "Efekty stają się odczuwalne",
    description: "Power: wyostrzone skupienie i energia bez nerwowości. Relax: spokój umysłu i przygotowanie do regeneracji.",
    color: "shroom-green",
    bgColor: "bg-shroom-green/20",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Korzystaj",
    time: "2-4h+",
    headline: "Długotrwałe wsparcie",
    description: "Regularne picie buduje efekt kumulacyjny. Lion's Mane wspiera neuroplastyczność — korzyści rosną z czasem.",
    color: "shroom-lavender",
    bgColor: "bg-shroom-lavender/20",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="font-body text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3 md:mb-4">
            Jak to działa?
          </p>
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Od łyku do efektu
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Naturalna droga do lepszego samopoczucia w 4 prostych krokach.
          </p>
        </motion.div>

        {/* Mobile: Detail Panel First, then Steps */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-20 items-start lg:items-center">
          
          {/* Detail Panel - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className={`${currentStep.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12`}
              >
                {/* Large Icon - Smaller on mobile */}
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-background/60 backdrop-blur-sm flex items-center justify-center mb-5 md:mb-8">
                  <currentStep.icon className="w-7 h-7 md:w-10 md:h-10 text-foreground" />
                </div>

                {/* Step Number & Time */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <span className="font-display text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Krok {currentStep.id}
                  </span>
                  <span className="bg-background/60 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full font-body text-xs text-foreground">
                    {currentStep.time}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  {currentStep.title}
                </h3>

                {/* Headline */}
                <p className="font-body text-base md:text-xl text-foreground/80 mb-4 md:mb-6">
                  {currentStep.headline}
                </p>

                {/* Description */}
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Progress Dots - Hidden on mobile, shown on desktop */}
                <div className="hidden md:flex gap-2 mt-10">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeStep === step.id
                          ? "w-8 bg-foreground"
                          : "bg-foreground/30 hover:bg-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Step Selector - Horizontal scroll on mobile, vertical on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full"
          >
            {/* Mobile: Horizontal scrollable pills */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 ${
                    activeStep === step.id
                      ? `${step.bgColor} border-transparent`
                      : "bg-card border-border"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      activeStep === step.id
                        ? `bg-${step.color} text-foreground`
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="font-display text-sm font-semibold text-foreground whitespace-nowrap">
                    {step.title}
                  </span>
                  <span className="font-body text-xs text-muted-foreground whitespace-nowrap">
                    {step.time}
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden lg:block space-y-4">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${
                    activeStep === step.id
                      ? `${step.bgColor} border-${step.color}/30`
                      : "bg-card border-border hover:bg-secondary/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Step Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        activeStep === step.id
                          ? `bg-${step.color} text-foreground`
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-lg font-semibold text-foreground">
                          {step.title}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span className="font-body text-xs">{step.time}</span>
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">
                        {step.headline}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeStep === step.id
                          ? "text-foreground translate-x-0 opacity-100"
                          : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
