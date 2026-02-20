import { motion } from "framer-motion";
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
  return (
    <section className="py-28 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header — left-aligned, Apple-style */}
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

        {/* Cards Grid — Measured-style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`${step.color} rounded-3xl p-8 md:p-10 flex flex-col min-h-[320px]`}
            >
              {/* Top badges */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full font-display text-xs font-semibold text-foreground">
                  {step.badge}
                </span>
                <span className="bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs text-muted-foreground">
                  ⏱ {step.time}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Headline */}
              <p className="font-body text-base text-foreground/80 mb-4">
                {step.headline}
              </p>

              {/* Description */}
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
