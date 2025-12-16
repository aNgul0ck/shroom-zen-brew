import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="o-nas" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block font-body text-sm font-semibold text-shroom-sage uppercase tracking-wider mb-4">
              O marce Shroom
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Napój, który
              <br />
              ma Cię w głowie
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-6">
              Shroom to pierwszy wprowadzany na polski i europejski rynek gotowy do spożycia napój 
              funkcjonalny wzbogacony o ekstrakt z soplówki jeżowatej.
            </p>
            <p className="font-body text-primary-foreground/70 mb-8">
              Stworzyliśmy go dla profesjonalistów, którzy cenią zdrowie i dobre samopoczucie, 
              ale nie chcą rezygnować z przyjemności. Dla tych, którzy wiedzą, że można inaczej 
              — bez kofeiny, bez cukru, bez kompromisów.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Świadomość", desc: "Wiemy, co pijesz" },
                { label: "Równowaga", desc: "Praca i życie w harmonii" },
                { label: "Natura", desc: "Tylko naturalne składniki" },
                { label: "Innowacja", desc: "Globalny megatrend" },
              ].map((value) => (
                <div key={value.label} className="p-4 bg-primary-foreground/10 rounded-xl">
                  <p className="font-display font-bold text-shroom-sage">{value.label}</p>
                  <p className="font-body text-sm text-primary-foreground/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote / Testimonial */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-shroom-forest/50 to-transparent rounded-3xl" />
            <div className="relative bg-card text-card-foreground rounded-3xl p-8 md:p-12 shadow-elevated">
              <Quote className="w-12 h-12 text-accent mb-6" />
              <blockquote className="font-display text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                "Shroom to nie tylko napój — to świadomy wybór dla tych, którzy chcą więcej od życia."
              </blockquote>
              <p className="font-body text-muted-foreground">
                Nasz cel? Być liderem rynku napojów funkcjonalnych w Europie i dać ludziom 
                zdrową alternatywę dla Red Bulla i Monstera.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border/50">
                <div>
                  <p className="font-display text-4xl font-bold text-primary">25-50</p>
                  <p className="font-body text-sm text-muted-foreground">lat — nasza grupa</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-primary">3x</p>
                  <p className="font-body text-sm text-muted-foreground">tygodniowo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
