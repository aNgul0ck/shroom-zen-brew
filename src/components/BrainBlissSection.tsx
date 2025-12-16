import { ArrowRight, Plane, Brain, Clock, Pill } from "lucide-react";
import productBrainbliss from "@/assets/product-brainbliss.png";

const BrainBlissSection = () => {
  const useCases = [
    {
      icon: Plane,
      title: "Na lot",
      description: "Weź przed podróżą dla ostrości umysłu",
    },
    {
      icon: Brain,
      title: "Przed prezentacją",
      description: "Wsparcie kognitywne gdy tego potrzebujesz",
    },
    {
      icon: Clock,
      title: "Codziennie",
      description: "Długoterminowe wsparcie funkcji mózgu",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-shroom-sky/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-lg">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-shroom-sky/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Pill className="w-4 h-4 text-shroom-blue" />
              <span className="font-body text-sm font-medium text-shroom-blue">
                Suplement diety
              </span>
            </div>

            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              BrainBliss
              <br />
              <span className="text-shroom-blue">Lion&apos;s Mane</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-6">
              Skoncentrowana moc soplówki jeżowatej w kapsułkach. Dla tych, którzy preferują 
              suplementy — ten sam adaptogen, szybkie działanie, wygodna forma na podróż.
            </p>

            {/* Story */}
            <div className="bg-card rounded-2xl p-5 mb-6 border-l-4 border-shroom-blue">
              <p className="font-body text-sm text-foreground/80 italic">
                "Stworzyliśmy BrainBliss dla osób w ciągłym ruchu. Kiedy nie masz czasu na napój, 
                ale potrzebujesz wsparcia kognitywnego — przed lotem, ważnym spotkaniem 
                czy egzaminem. 60 kapsułek, 500mg czystego ekstraktu z soplówki."
              </p>
            </div>

            {/* Use Cases */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="text-center p-3 bg-secondary/50 rounded-xl">
                  <useCase.icon className="w-6 h-6 mx-auto mb-2 text-shroom-blue" />
                  <p className="font-display font-semibold text-xs text-foreground">{useCase.title}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{useCase.description}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["500mg ekstraktu", "60 kapsułek", "Bez dodatków", "Wegańskie"].map((feature) => (
                <span
                  key={feature}
                  className="bg-shroom-sky/20 px-3 py-1 rounded-full font-body text-xs font-medium text-shroom-blue"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex items-center gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">89 zł</p>
                <p className="font-body text-sm text-muted-foreground">60 kapsułek</p>
              </div>
              <button className="inline-flex items-center gap-2 bg-shroom-blue text-shroom-cream px-6 py-3 rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform duration-200 shadow-soft">
                Zamów kapsułki
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-shroom-sky/30 rounded-full blur-3xl scale-75" />
              
              <img
                src={productBrainbliss}
                alt="BrainBliss Lion's Mane - suplement diety"
                className="relative h-[400px] w-auto object-contain drop-shadow-xl animate-float"
              />
              
              {/* Floating badge */}
              <div className="absolute -left-4 top-1/3 bg-card px-4 py-2 rounded-xl shadow-card animate-float-delayed">
                <p className="font-display font-bold text-sm text-foreground">500mg</p>
                <p className="font-body text-xs text-muted-foreground">per kapsułka</p>
              </div>
              
              <div className="absolute -right-4 bottom-1/3 bg-shroom-blue text-shroom-cream px-4 py-2 rounded-xl shadow-card animate-float">
                <p className="font-display font-bold text-sm">Travel-ready</p>
                <p className="font-body text-xs text-shroom-cream/80">Na każdą podróż</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainBlissSection;
