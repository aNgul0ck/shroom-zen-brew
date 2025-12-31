import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Brain, Shield, Battery, Moon, Heart } from "lucide-react";

const benefits = [
  {
    id: "focus",
    icon: Brain,
    title: "Funkcje poznawcze",
    description: "Cynk zawarty w Shroom przyczynia się do utrzymania prawidłowych funkcji poznawczych. Soplówka jeżowata jest naturalnym adaptogenem stosowanym od wieków.",
  },
  {
    id: "immunity",
    icon: Shield,
    title: "Odporność",
    description: "Naturalna witamina C wspiera układ odpornościowy i pomaga w walce z wolnymi rodnikami. Każda butelka dostarcza porcję witamin bez syntetycznych dodatków.",
  },
  {
    id: "energy",
    icon: Battery,
    title: "Energia bez kofeiny",
    description: "Zapomnij o drżących rękach i problemach ze snem. Shroom daje naturalne wsparcie bez kofeiny i bez spadku energii po kilku godzinach.",
  },
  {
    id: "calm",
    icon: Moon,
    title: "Spokój i równowaga",
    description: "L-theanina i chmiel w Shroom Relax wspierają relaksację bez senności. Idealne na wieczór lub stresujący dzień w pracy.",
  },
  {
    id: "natural",
    icon: Leaf,
    title: "Naturalny skład",
    description: "Żadnych sztucznych barwników, konserwantów ani słodzików. Tylko składniki, które rozpoznasz i którym możesz zaufać.",
  },
  {
    id: "wellness",
    icon: Heart,
    title: "Holistyczne podejście",
    description: "Shroom wspiera całe ciało – od mózgu po układ trawienny. Adaptogeny działają tam, gdzie Twoje ciało tego potrzebuje.",
  },
];

const BenefitsAccordion = () => {
  const [openId, setOpenId] = useState<string | null>("focus");

  return (
    <section className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text & Accordion */}
          <div>
            <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Dlaczego Shroom?
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wiele korzyści.
              <br />
              <span className="text-muted-foreground">Jedna butelka.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-md">
              Shroom to napój funkcjonalny, który <strong>wspiera organizm naturalnie</strong> — bez sztucznych dodatków i bez kompromisów.
            </p>

            {/* Accordion */}
            <div className="space-y-0">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                const isOpen = openId === benefit.id;
                
                return (
                  <div key={benefit.id} className="border-b border-border/50">
                    <button
                      onClick={() => setOpenId(isOpen ? null : benefit.id)}
                      className="w-full flex items-center justify-between py-5 group"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="w-5 h-5 text-accent" />
                        <span className="font-display font-bold text-left text-foreground group-hover:text-accent transition-colors">
                          {benefit.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="font-body text-muted-foreground pb-5 pl-9">
                            {benefit.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative flex items-center justify-center lg:sticky lg:top-32">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Circular badge arrangement */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/10" />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-primary/10" />
              
              {/* Center icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-elevated">
                <Leaf className="w-10 h-10 text-primary-foreground" />
              </div>
              
              {/* Orbiting labels */}
              {[
                { label: "Skupienie", angle: 0 },
                { label: "Odporność", angle: 60 },
                { label: "Energia", angle: 120 },
                { label: "Spokój", angle: 180 },
                { label: "Natura", angle: 240 },
                { label: "Wellness", angle: 300 },
              ].map((item, index) => {
                const radius = 140;
                const radian = (item.angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                
                return (
                  <motion.div
                    key={item.label}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="block px-3 py-1.5 bg-card rounded-full text-xs font-display font-semibold text-foreground shadow-soft whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAccordion;
