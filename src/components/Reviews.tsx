import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "@drjoanwojsiat",
    avatar: "🩺",
    text: "piłam, uwielbiam!",
    rating: 5,
    product: "Shroom Relax",
    verified: true,
  },
  {
    id: 2,
    author: "Michał K.",
    avatar: "💼",
    text: "Po jednej godzinie przewracanie się z boku na bok, po ciężkim i długim poprzednim dniu w pracy, kilku piwkach by zasnąć i budziku o 3.30 czułem się koszmarnie, kac zmieszany z brakiem sensu życia. Pierwszy łyk shrooms zdjął mi z głowy to nieznośne ciśnienie tego kapcia z mózgu, a przed oczami się rozjaśniło. Efekt jakiego nigdy nie doświadczyłem po kawie.",
    rating: 5,
    product: "Shroom Power",
    verified: true,
  },
  {
    id: 3,
    author: "Anna M.",
    avatar: "🧘",
    text: "Shroom Relax to mój must-have przed snem. Żadnych sztucznych dodatków, a działa lepiej niż melatonina.",
    rating: 5,
    product: "Shroom Relax",
    verified: true,
  },
  {
    id: 4,
    author: "Piotr W.",
    avatar: "🚀",
    text: "Jako programista często pracuję po nocach. Shroom Power daje mi klarowność umysłu bez nerwowości jak po energetykach.",
    rating: 5,
    product: "Shroom Power",
    verified: true,
  },
];

const Reviews = () => {
  return (
    <section className="section-padding bg-shroom-blush/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm font-semibold text-shroom-coral uppercase tracking-wider mb-4">
            Opinie
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Co mówią nasi klienci
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Dołącz do społeczności osób, które odkryły moc adaptogenów
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-shroom-coral/30 mb-4" />

              {/* Review Text */}
              <p className="font-body text-sm text-foreground/80 mb-4 line-clamp-6">
                {review.text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {review.author}
                  </p>
                  <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
                    {review.product}
                    {review.verified && (
                      <span className="text-shroom-green">✓</span>
                    )}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card px-6 py-3 rounded-full shadow-soft">
            <div className="flex -space-x-2">
              {["🧑‍💻", "👩‍🔬", "🧘", "💼"].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">
              <strong className="text-foreground">500+</strong> zadowolonych klientów
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
