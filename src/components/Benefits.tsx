import { Brain, Zap, Heart, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Funkcje kognitywne",
    description: "NGF dla zdrowia neuronów",
    color: "text-shroom-green",
    bg: "bg-shroom-sage/30",
  },
  {
    icon: Zap,
    title: "Naturalna energia",
    description: "Bez drżenia i spadków",
    color: "text-shroom-gold",
    bg: "bg-shroom-gold/20",
  },
  {
    icon: Heart,
    title: "Redukcja stresu",
    description: "Adaptogeny w działaniu",
    color: "text-shroom-coral",
    bg: "bg-shroom-coral/20",
  },
  {
    icon: Leaf,
    title: "Bez cukru",
    description: "Stewia i soki owocowe",
    color: "text-shroom-green",
    bg: "bg-shroom-sage/20",
  },
];

const Benefits = () => {
  return (
    <section id="adaptogeny" className="section-padding">
      <div className="container mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dlaczego <span className="text-gradient">Shroom</span>?
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Adaptogeny + nootropiki = naturalne wsparcie dla mózgu i ciała.
          </p>
        </div>

        {/* Benefits - 4 compact cards in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group p-5 rounded-2xl ${benefit.bg} hover:shadow-card transition-all duration-300 text-center`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-card mb-3 ${benefit.color}`}>
                <benefit.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lion's Mane - Visual Focus */}
        <div className="bg-card rounded-3xl p-8 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Stats - Visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-shroom-sage/30 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-primary">500mg</p>
                <p className="font-body text-sm text-muted-foreground">ekstraktu</p>
              </div>
              <div className="bg-shroom-gold/20 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-primary">30:1</p>
                <p className="font-body text-sm text-muted-foreground">koncentracja</p>
              </div>
              <div className="bg-shroom-pink/20 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-primary">50%</p>
                <p className="font-body text-sm text-muted-foreground">polisacharydów</p>
              </div>
              <div className="bg-shroom-peach/30 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-primary">🍄</p>
                <p className="font-body text-sm text-muted-foreground">owocnik</p>
              </div>
            </div>

            {/* Short Text */}
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Soplówka jeżowata
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                <strong className="text-foreground">Lion's Mane</strong> — grzyb medyczny wspierający NGF (Nerve Growth Factor) dla regeneracji neuronów.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary px-3 py-1 rounded-full font-body text-xs">Nootropik</span>
                <span className="bg-secondary px-3 py-1 rounded-full font-body text-xs">Adaptogen</span>
                <span className="bg-secondary px-3 py-1 rounded-full font-body text-xs">Naturalny</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
