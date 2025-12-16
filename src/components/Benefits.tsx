import { Brain, Zap, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Brain,
    title: "Cynk w składzie",
    description: "Przyczynia się do funkcji poznawczych*",
    color: "text-shroom-green",
    bg: "bg-shroom-sage/30",
  },
  {
    icon: Zap,
    title: "Bez kofeiny",
    description: "Naturalne składniki roślinne",
    color: "text-shroom-gold",
    bg: "bg-shroom-gold/20",
  },
  {
    icon: Heart,
    title: "Witamina C",
    description: "Dla układu nerwowego*",
    color: "text-shroom-coral",
    bg: "bg-shroom-coral/20",
  },
  {
    icon: Leaf,
    title: "Bez cukru",
    description: "Sok jabłkowy i inulina",
    color: "text-shroom-green",
    bg: "bg-shroom-sage/20",
  },
];

const stats = [
  { value: "500mg", label: "ekstraktu", bg: "bg-shroom-sage/30" },
  { value: "30:1", label: "koncentracja", bg: "bg-shroom-gold/20" },
  { value: "50%", label: "polisacharydów", bg: "bg-shroom-pink/20" },
  { value: "🍄", label: "owocnik", bg: "bg-shroom-peach/30" },
];

const Benefits = () => {
  return (
    <section id="adaptogeny" className="section-padding">
      <div className="container mx-auto">
        {/* Compact Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dlaczego <span className="text-gradient">Shroom</span>?
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Naturalne składniki roślinne + cynk i witamina C w każdej butelce.
          </p>
        </motion.div>

        {/* Benefits - 4 compact cards in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group p-5 rounded-2xl ${benefit.bg} hover:shadow-card transition-all duration-300 text-center cursor-default`}
            >
              <motion.div 
                className={`inline-flex p-3 rounded-xl bg-card mb-3 ${benefit.color}`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <benefit.icon className="w-5 h-5" />
              </motion.div>
              <h3 className="font-display text-base font-bold text-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Lion's Mane - Visual Focus */}
        <motion.div 
          className="bg-card rounded-3xl p-8 shadow-soft"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Stats - Visual */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`${stat.bg} rounded-2xl p-6 text-center cursor-default transition-all duration-300`}
                >
                  <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Short Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Soplówka jeżowata
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                <strong className="text-foreground">Lion's Mane</strong> — soplówka jeżowata to grzyb stosowany w tradycyjnej medycynie azjatyckiej od setek lat.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Grzyb funkcjonalny", "Tradycja azjatycka", "Naturalny"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-secondary px-3 py-1 rounded-full font-body text-xs cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Disclaimer note */}
          <p className="text-center text-xs text-muted-foreground/60 font-body mt-6">
            * Zatwierdzone oświadczenia zdrowotne EFSA dla cynku i witaminy C. 
            <a href="#disclaimer" className="underline hover:text-muted-foreground ml-1">
              Zobacz szczegóły
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
