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
    <section className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Jak to działa?
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Od łyku do efektu
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Naturalna droga do lepszego samopoczucia w 4 prostych krokach.
          </p>
        </motion.div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Step Selector - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {steps.map((step, index) => (
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
                  {/* Step Number */}
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
          </motion.div>

          {/* Detail Panel - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`${currentStep.bgColor} rounded-3xl p-8 lg:p-12`}
              >
                {/* Large Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-background/60 backdrop-blur-sm flex items-center justify-center mb-8`}>
                  <currentStep.icon className="w-10 h-10 text-foreground" />
                </div>

                {/* Step Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Krok {currentStep.id}
                  </span>
                  <span className="bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs text-foreground">
                    {currentStep.time}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {currentStep.title}
                </h3>

                {/* Headline */}
                <p className="font-body text-xl text-foreground/80 mb-6">
                  {currentStep.headline}
                </p>

                {/* Description */}
                <p className="font-body text-muted-foreground leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Progress Dots */}
                <div className="flex gap-2 mt-10">
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
