import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="o-nas" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm font-semibold text-shroom-sage uppercase tracking-[0.2em] mb-6">
              O marce
            </p>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Napój, który<br />
              ma Cię w głowie
            </h2>
            <p className="font-body text-xl text-primary-foreground/80 mb-6 leading-relaxed">
              Shroom to pierwszy w Polsce i Europie gotowy do spożycia napój funkcjonalny 
              z soplówką jeżowatą.
            </p>
            <p className="font-body text-primary-foreground/60 mb-10 leading-relaxed">
              Stworzyliśmy go dla profesjonalistów, którzy cenią zdrowie i dobre samopoczucie, 
              ale nie chcą rezygnować z przyjemności. Dla tych, którzy wiedzą, że można inaczej 
              — bez kofeiny, bez cukru, bez kompromisów.
            </p>

            <Link
              to="/blog"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full font-display font-semibold text-base hover:scale-105 transition-transform duration-300"
            >
              Poznaj naszą historię
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { 
                title: "Świadomość", 
                description: "Wiemy, co pijesz — i Ty też powinieneś.",
              },
              { 
                title: "Równowaga", 
                description: "Praca i życie w harmonii, każdego dnia.",
              },
              { 
                title: "Natura", 
                description: "Tylko składniki, które rozpoznasz.",
              },
              { 
                title: "Innowacja", 
                description: "Globalny megatrend, Made in Poland.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="font-display font-bold text-shroom-sage text-lg mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
