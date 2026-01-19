import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
            Napój, który ma Cię w głowie
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Shroom to napoje funkcjonalne z <strong className="text-foreground">adaptogenami</strong> i <strong className="text-foreground">witaminami</strong>. 
            Stworzone dla tych, którzy chcą wspierać swoje ciało naturalnie — bez kompromisów, 
            bez sztucznych dodatków, bez cukru.
          </p>

          {/* Key differentiators */}
          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Cynk",
                description: "Przyczynia się do prawidłowych funkcji poznawczych*",
              },
              {
                title: "Witamina C",
                description: "Wspiera prawidłowe funkcjonowanie układu nerwowego*",
              },
              {
                title: "Adaptogeny",
                description: "Naturalne wsparcie dla równowagi organizmu",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
