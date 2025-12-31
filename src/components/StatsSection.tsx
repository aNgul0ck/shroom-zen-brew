import { motion } from "framer-motion";

const stats = [
  {
    value: "94%",
    label: "klientów poleca Shroom bliskim i znajomym",
  },
  {
    value: "78%",
    label: "osób odczuwa różnicę w energii już po tygodniu",
  },
  {
    value: "0g",
    label: "dodanego cukru w każdej butelce",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-secondary/30 rounded-3xl"
            >
              <p className="font-headline text-6xl md:text-7xl font-bold text-primary mb-4">
                {stat.value}
              </p>
              <p className="font-body text-muted-foreground">
                {stat.label.split(" ").map((word, i) => {
                  const highlighted = ["poleca", "różnicę", "cukru"].includes(word);
                  return (
                    <span key={i} className={highlighted ? "font-semibold text-foreground" : ""}>
                      {word}{" "}
                    </span>
                  );
                })}
              </p>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center font-body text-xs text-muted-foreground mt-8">
          *Na podstawie ankiety wśród klientów Shroom, grudzień 2024
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
