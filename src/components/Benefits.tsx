import { Brain, Zap, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const itemMeta = [
  { icon: Brain, color: "text-shroom-green", bg: "bg-shroom-sage/30" },
  { icon: Zap,   color: "text-shroom-gold",  bg: "bg-shroom-gold/20" },
  { icon: Heart, color: "text-shroom-coral", bg: "bg-shroom-coral/20" },
  { icon: Leaf,  color: "text-shroom-green", bg: "bg-shroom-sage/20" },
];

const statBgs = ["bg-shroom-sage/30", "bg-shroom-gold/20", "bg-shroom-pink/20", "bg-shroom-peach/30"];

interface ItemCopy { title: string; description: string }
interface StatCopy { value: string; label: string }

const Benefits = () => {
  const { t } = useTranslation();
  const items = t("benefits.items", { returnObjects: true }) as ItemCopy[];
  const stats = t("benefits.stats", { returnObjects: true }) as StatCopy[];
  const tags = t("benefits.lionsMane.tags", { returnObjects: true }) as string[];

  return (
    <section id="adaptogeny" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("benefits.headlinePart1")} <span className="text-gradient">{t("benefits.headlineAccent")}</span>{t("benefits.headlinePart2")}
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            {t("benefits.subheadline")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {items.map((item, index) => {
            const meta = itemMeta[index];
            const Icon = meta.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group p-5 rounded-2xl ${meta.bg} hover:shadow-card transition-all duration-300 text-center cursor-default`}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-card mb-3 ${meta.color}`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-card rounded-3xl p-8 shadow-soft"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`${statBgs[index]} rounded-2xl p-6 text-center cursor-default transition-all duration-300`}
                >
                  <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {t("benefits.lionsMane.title")}
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                <strong className="text-foreground">{t("benefits.lionsMane.bodyStrong")}</strong> {t("benefits.lionsMane.body")}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
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

          <p className="text-center text-xs text-muted-foreground/60 font-body mt-6">
            {t("benefits.disclaimer")}
            <a href="#disclaimer" className="underline hover:text-muted-foreground ml-1">
              {t("benefits.disclaimerLink")}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
