import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Zap, Brain, Sparkles } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Droplets,
    badge: "Krok 1",
    time: "0 min",
    title: "Wypij",
    headline: "Jeden łyk. Zero bullshitu.",
    description:
      "Bez sztucznych dodatków, bez cukru. Czysta formuła, która zaczyna działać od razu.",
    color: "bg-shroom-gold/25",
  },
  {
    id: 2,
    icon: Zap,
    badge: "Krok 2",
    time: "15–30 min",
    title: "Wchłoń",
    headline: "Składniki wchodzą do akcji.",
    description:
      "L-teanina, adaptogeny i witaminy trafiają do krwioobiegu. Naturalna aktywacja lub wyciszenie — zależy od napoju.",
    color: "bg-shroom-sage/30",
  },
  {
    id: 3,
    icon: Brain,
    badge: "Krok 3",
    time: "30–60 min",
    title: "Poczuj",
    headline: "Efekty stają się realne.",
    description:
      "Power: wyostrzone skupienie. Relax: spokój umysłu. Bez nerwowości, bez senności.",
    color: "bg-shroom-lavender/25",
  },
  {
    id: 4,
    icon: Sparkles,
    badge: "Krok 4",
    time: "2–4h+",
    title: "Korzystaj",
    headline: "Efekty rosną z czasem.",
    description:
      "Lion's Mane wspiera neuroplastyczność. Regularne picie = efekt kumulacyjny. To nie energy drink.",
    color: "bg-shroom-peach/30",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance every 4s
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToStep = useCallback((index: number) => {
    setDirection(index > activeStep ? 1 : -1);
    setActiveStep(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
    navigator.vibrate?.(10);
  }, [activeStep]);

  const handleDragEnd = useCallback((_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipe = info.offset.x + info.velocity.x * 50;
    if (swipe < -40 && activeStep < steps.length - 1) {
      setDirection(1);
      setActiveStep((p) => p + 1);
      navigator.vibrate?.(10);
    } else if (swipe > 40 && activeStep > 0) {
      setDirection(-1);
      setActiveStep((p) => p - 1);
      navigator.vibrate?.(10);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [activeStep]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -280 : 280, opacity: 0 }),
  };

  const currentStep = steps[activeStep];

  return (
    <section className="py-28 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-6 md:mb-8"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Jak to działa?
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
            Od łyku{" "}
            <span className="text-muted-foreground/40">do efektu.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-body text-lg text-muted-foreground max-w-xl mb-16 md:mb-20"
        >
          Naturalna droga do lepszego samopoczucia. Cztery kroki, zero magii — same składniki.
        </motion.p>

        {/* Mobile: Swipeable Timeline */}
        <div className="sm:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Timeline dots */}
            <div className="flex items-center justify-center mb-8 px-4">
              {steps.map((step, i) => (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => goToStep(i)}
                    className="relative flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        scale: i === activeStep ? 1 : 0.7,
                        opacity: i === activeStep ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold transition-colors duration-300 ${
                        i === activeStep
                          ? `${step.color} text-foreground shadow-md`
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </motion.div>
                    {i === activeStep && (
                      <motion.div
                        layoutId="timeline-ring"
                        className="absolute inset-[-3px] rounded-full border-2 border-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                  {i < steps.length - 1 && (
                    <div className={`w-10 h-0.5 transition-colors duration-300 ${
                      i < activeStep ? "bg-accent/60" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Swipeable card */}
            <div className="overflow-hidden touch-pan-y">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  className={`${currentStep.color} rounded-3xl p-8 flex flex-col cursor-grab active:cursor-grabbing`}
                >
                  {/* Top badges */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full font-display text-xs font-semibold text-foreground">
                      {currentStep.badge}
                    </span>
                    <span className="bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs text-muted-foreground">
                      ⏱ {currentStep.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {currentStep.title}
                  </h3>

                  {/* Headline */}
                  <p className="font-body text-base text-foreground/80 mb-3">
                    {currentStep.headline}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {currentStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe hint */}
            <p className="text-center text-xs text-muted-foreground/50 mt-4 font-body">
              ← przesuń →
            </p>
          </motion.div>
        </div>

        {/* Desktop: Cards Grid (unchanged) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${step.color} rounded-3xl p-8 md:p-10 flex flex-col min-h-[320px]`}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full font-display text-xs font-semibold text-foreground">
                  {step.badge}
                </span>
                <span className="bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs text-muted-foreground">
                  ⏱ {step.time}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-base text-foreground/80 mb-4">
                {step.headline}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
