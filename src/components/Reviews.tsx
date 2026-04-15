import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Olek R.",
    role: "Przedsiębiorca",
    rating: 5,
    text: "Power to mój codzienny rytuał. Skupienie i energia bez nerwowości kawy.",
  },
  {
    id: 2,
    author: "Ewa K.",
    role: "Projektantka UX",
    rating: 5,
    text: "Relax pomaga mi wyłączyć się po intensywnym dniu. Śpię jak dziecko.",
  },
  {
    id: 3,
    author: "Priyanka B.",
    role: "Software Developer",
    rating: 5,
    text: "Diva is my go-to for social events. All the fun, none of the hangover.",
  },
  {
    id: 4,
    author: "Michał T.",
    role: "Fotograf",
    rating: 5,
    text: "Outstanding drinks! They really improve concentration, zero side effects.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-[hsl(204,55%,82%)]">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Opinie
            </p>
            <h2 className="ed-heading text-foreground leading-tight">
              Co mówią nasi klienci
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="font-display text-base font-semibold text-foreground">4.9</span>
            <span className="font-body text-xs text-foreground/50">(200+)</span>
          </div>
        </div>

        {/* Review cards — tight grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background/90 backdrop-blur-sm p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="font-body text-foreground text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <p className="font-body text-xs text-foreground/40">
                — {review.author}, {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
