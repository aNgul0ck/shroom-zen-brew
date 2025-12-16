import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Sparkles, Heart, Brain, Zap, Moon, Sun, Coffee, Droplets } from "lucide-react";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

// Animated section that reveals on scroll
const RevealSection = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
const ParallaxImage = ({ 
  src, 
  alt, 
  className = "",
  speed = 0.5 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  speed?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </motion.div>
  );
};

// Sticky text section
const StickyText = ({ 
  label,
  title, 
  highlight, 
  description,
  color = "shroom-coral"
}: { 
  label: string;
  title: string;
  highlight: string;
  description: string;
  color?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6 font-display"
        >
          {label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8"
        >
          <span className={`text-${color}`}>{highlight}</span>
          <br />
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

// Feature card with icon
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0,
  color = "shroom-sage"
}: { 
  icon: any; 
  title: string; 
  description: string;
  delay?: number;
  color?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className={`w-16 h-16 rounded-2xl bg-${color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 text-${color}`} style={{ color: `hsl(var(--${color}))` }} />
      </div>
      <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
      <p className="text-foreground/60 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Ingredient pill
const IngredientPill = ({ 
  name, 
  benefit,
  delay = 0
}: { 
  name: string; 
  benefit: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-3 h-3 rounded-full bg-shroom-green" style={{ backgroundColor: "hsl(var(--shroom-green))" }} />
      <div>
        <p className="font-display font-semibold">{name}</p>
        <p className="text-sm text-foreground/60">{benefit}</p>
      </div>
    </motion.div>
  );
};

const Brief = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="bg-background min-h-screen">
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Powrót</span>
          </Link>
          <span className="font-display font-bold text-lg">Shroom Brief</span>
          <div className="w-20" />
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm uppercase tracking-[0.4em] text-foreground/50 mb-8"
          >
            Poznaj Shrooma
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.05] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              The choice of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block text-transparent bg-clip-text"
              style={{ 
                backgroundImage: "linear-gradient(135deg, hsl(129, 50%, 45%), hsl(17, 80%, 55%))" 
              }}
            >
              feeling good.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto"
          >
            To nie jest po prostu napój. To codzienny wybór tego, żeby poczuć się dobrze.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-foreground/40" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <StickyText
        label="Filozofia"
        highlight="Małe decyzje."
        title="Wielkie zmiany."
        description="The choice of feeling good oznacza małe decyzje, które robimy każdego dnia. Co pijesz rano. Po co sięgasz w pracy. Jak dbasz o siebie między jednym zadaniem a drugim."
        color="shroom-coral"
      />

      {/* Products Showcase */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-24">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-4">Produkty</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Trzy formuły.<br />
              <span style={{ color: "hsl(var(--shroom-green))" }}>Jeden cel.</span>
            </h2>
          </RevealSection>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Power */}
            <RevealSection className="text-center group">
              <div className="relative mb-8 h-80 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, hsl(var(--shroom-gold)) 0%, transparent 100%)" }}
                />
                <ParallaxImage 
                  src={productPower} 
                  alt="Shroom Power" 
                  className="h-64 w-auto relative z-10"
                  speed={0.3}
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Shroom Power</h3>
              <p className="text-foreground/60 mb-6">Dla energii, koncentracji i odporności</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Maczużnik bojowy", "Cordyceps", "Inulina", "Cynk", "Witamina C"].map((ing) => (
                  <span 
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "hsl(var(--shroom-gold) / 0.2)", color: "hsl(var(--shroom-coral))" }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </RevealSection>

            {/* Relax */}
            <RevealSection className="text-center group">
              <div className="relative mb-8 h-80 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, hsl(var(--shroom-lavender)) 0%, transparent 100%)" }}
                />
                <ParallaxImage 
                  src={productRelax} 
                  alt="Shroom Relax" 
                  className="h-64 w-auto relative z-10"
                  speed={0.3}
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Shroom Relax</h3>
              <p className="text-foreground/60 mb-6">Na wyciszenie i balans, bez spowolnienia</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["L-teanina", "Soplówka jeżowata", "Inulina", "Cynk", "Witamina C"].map((ing) => (
                  <span 
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "hsl(var(--shroom-lavender) / 0.2)", color: "hsl(var(--shroom-purple))" }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </RevealSection>

            {/* Diva */}
            <RevealSection className="text-center group">
              <div className="relative mb-8 h-80 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, hsl(var(--diva-pink)) 0%, transparent 100%)" }}
                />
                <ParallaxImage 
                  src={productDiva} 
                  alt="Diva Social Elixir" 
                  className="h-64 w-auto relative z-10"
                  speed={0.3}
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Diva Social Elixir</h3>
              <p className="text-foreground/60 mb-6">Na luz, dobre wibracje i lepszy kontakt z sobą</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Ziele damiana", "Żeń-szeń syberyjski", "Cordyceps"].map((ing) => (
                  <span 
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "hsl(var(--diva-pink) / 0.2)", color: "hsl(var(--shroom-wine))" }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Functional Food Section */}
      <StickyText
        label="Żywność funkcjonalna"
        highlight="Więcej niż smak."
        title="Wsparcie od środka."
        description="Shroom należy do kategorii żywności funkcjonalnej. To znaczy, że oprócz smaku daje coś więcej. Wspiera organizm od środka i może być częścią zdrowego stylu życia."
        color="shroom-green"
      />

      {/* Benefits Grid */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Dlaczego <span style={{ color: "hsl(var(--shroom-coral))" }}>Shroom</span>?
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Leaf}
              title="Naturalnie"
              description="Bez sztucznych dodatków, konserwantów ani barwników"
              delay={0}
              color="shroom-green"
            />
            <FeatureCard
              icon={Sparkles}
              title="Bez cukru"
              description="Naturalnie słodzony sokiem jabłkowym i inuliną"
              delay={0.1}
              color="shroom-gold"
            />
            <FeatureCard
              icon={Heart}
              title="Prebiotyk"
              description="Inulina wspiera mikrobiotę jelitową"
              delay={0.2}
              color="shroom-coral"
            />
            <FeatureCard
              icon={Brain}
              title="Funkcjonalnie"
              description="Adaptogeny i grzyby wspierające organizm"
              delay={0.3}
              color="shroom-lavender"
            />
          </div>
        </div>
      </section>

      {/* Daily Moments Section */}
      <StickyText
        label="Jakiego kontentu szukamy"
        highlight="Prawdziwe momenty."
        title="Bez stylizacji."
        description="Shroom jako część dnia. Tak po prostu. Poranna rutyna, przerwa w pracy, chwila dla siebie, spacer, moment oddechu w ciągu dnia. Lekko, naturalnie, bez presji."
        color="shroom-lavender"
      />

      {/* Content Ideas */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Sun, title: "Poranna rutyna", desc: "Pierwszy łyk dnia, który nadaje ton" },
              { icon: Coffee, title: "Przerwa w pracy", desc: "Moment regeneracji między zadaniami" },
              { icon: Heart, title: "Chwila dla siebie", desc: "Self-care bez kompromisów" },
              { icon: Droplets, title: "Aktywność", desc: "Wsparcie przed lub po treningu" },
              { icon: Moon, title: "Wieczorny reset", desc: "Wyciszenie na koniec dnia" },
              { icon: Zap, title: "Moment oddechu", desc: "Krótka przerwa, duża różnica" },
            ].map((item, index) => (
              <RevealSection key={item.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-8 rounded-3xl bg-card border border-border/50 hover:border-shroom-sage/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "hsl(var(--shroom-sage) / 0.3)" }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: "hsl(var(--shroom-green))" }} />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-foreground/60">{item.desc}</p>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            background: "radial-gradient(circle at 30% 50%, hsl(var(--shroom-green)) 0%, transparent 50%), radial-gradient(circle at 70% 50%, hsl(var(--shroom-coral)) 0%, transparent 50%)" 
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <RevealSection className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-8">Główne założenia</p>
            <div className="space-y-12">
              {[
                "Pokazujemy Shrooma jako naturalną część codziennego życia, a nie coś na specjalną okazję.",
                "Mówimy wprost, że to alternatywa dla słodzonych napojów gazowanych.",
                "Budujemy markę, która jest funkcjonalna, naturalna i realnie wspiera samopoczucie.",
                "Stawiamy na autentyczność. Nie tworzymy historii pod reklamę.",
              ].map((text, index) => (
                <RevealSection key={index}>
                  <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed text-foreground/80">
                    {text}
                  </p>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Gotowy na <span style={{ color: "hsl(var(--shroom-green))" }}>współpracę</span>?
            </h2>
            <p className="text-xl text-foreground/60 mb-12">
              Dołącz do grona twórców, którzy pokazują prawdziwe momenty z Shroomem.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-display font-semibold text-lg transition-all duration-300"
                style={{ 
                  backgroundColor: "hsl(var(--shroom-black))",
                  color: "hsl(var(--shroom-cream))",
                  boxShadow: "0 20px 60px -15px hsl(var(--shroom-black) / 0.3)"
                }}
              >
                Wróć na stronę główną
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/40 text-sm">
            © 2024 Shroom. The choice of feeling good.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Brief;
