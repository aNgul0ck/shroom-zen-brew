import { Brain, Heart, Zap, Leaf, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Wspiera funkcje kognitywne",
    description: "Soplówka jeżowata stymuluje produkcję NGF — kluczowego czynnika dla zdrowia neuronów.",
    color: "text-shroom-moss",
    bg: "bg-shroom-sage/30",
  },
  {
    icon: Zap,
    title: "Naturalna energia",
    description: "Pobudzenie bez drżenia i spadków energii. Żeń-szeń i L-theanina dają trwałe wsparcie.",
    color: "text-shroom-gold",
    bg: "bg-shroom-gold/20",
  },
  {
    icon: Heart,
    title: "Redukcja stresu",
    description: "Adaptogeny pomagają organizmowi radzić sobie z codziennym stresem i napięciem.",
    color: "text-shroom-coral",
    bg: "bg-shroom-coral/20",
  },
  {
    icon: Leaf,
    title: "100% Naturalny skład",
    description: "Żadnych sztucznych słodzików, konserwantów czy dodatków. Tylko to, co najlepsze z natury.",
    color: "text-shroom-forest",
    bg: "bg-shroom-sage/20",
  },
  {
    icon: Shield,
    title: "Bez cukru",
    description: "Słodzone naturalnym sokiem owocowym i stewią. Zdrowa alternatywa bez kompromisów.",
    color: "text-shroom-moss",
    bg: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Potwierdzone działanie",
    description: "Składniki o udowodnionej naukowo skuteczności. Żadnych pustych obietnic.",
    color: "text-accent",
    bg: "bg-shroom-peach/20",
  },
];

const Benefits = () => {
  return (
    <section id="adaptogeny" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Dlaczego Shroom?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Twoje ciało i umysł
            <br />
            <span className="text-gradient">zasługują na więcej</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Adaptogeny to naturalne substancje, które pomagają organizmowi adaptować się do stresu. 
            Shroom łączy mądrość natury z nowoczesną nauką.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group p-6 rounded-2xl ${benefit.bg} hover:shadow-card transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-card mb-4 ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Adaptogens Info Box */}
        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Czym jest soplówka jeżowata?
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                <strong className="text-foreground">Hericium erinaceus</strong>, znana jako Lion's Mane, 
                to grzyb medyczny o wyjątkowych właściwościach nootropowych. Od wieków stosowana 
                w tradycyjnej medycynie azjatyckiej.
              </p>
              <p className="font-body text-muted-foreground">
                Badania naukowe potwierdzają jej zdolność do wspierania produkcji NGF 
                (Nerve Growth Factor) — białka kluczowego dla regeneracji neuronów i mielinizacji 
                włókien nerwowych.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-shroom-sage/40 to-shroom-peach/40 rounded-2xl blur-xl" />
              <div className="relative bg-secondary/80 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4">
                    <p className="font-display text-3xl font-bold text-primary">500mg</p>
                    <p className="font-body text-sm text-muted-foreground">ekstraktu w porcji</p>
                  </div>
                  <div className="p-4">
                    <p className="font-display text-3xl font-bold text-primary">30:1</p>
                    <p className="font-body text-sm text-muted-foreground">koncentracja</p>
                  </div>
                  <div className="p-4">
                    <p className="font-display text-3xl font-bold text-primary">50%</p>
                    <p className="font-body text-sm text-muted-foreground">polisacharydów</p>
                  </div>
                  <div className="p-4">
                    <p className="font-display text-3xl font-bold text-primary">🍄</p>
                    <p className="font-body text-sm text-muted-foreground">owocnik grzyba</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
