import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Olek R.",
    role: "Przedsiębiorca",
    rating: 5,
    text: "Power to mój codzienny rytuał. Skupienie i energia bez nerwowości kawy.",
    product: "Power",
  },
  {
    id: 2,
    author: "Ewa K.",
    role: "Projektantka UX",
    rating: 5,
    text: "Relax pomaga mi wyłączyć się po intensywnym dniu. Śpię jak dziecko.",
    product: "Relax",
  },
  {
    id: 3,
    author: "Priyanka B.",
    role: "Software Developer",
    rating: 5,
    text: "Diva is my go-to for social events. All the fun, none of the hangover.",
    product: "Diva",
  },
  {
    id: 4,
    author: "Michał T.",
    role: "Fotograf",
    rating: 5,
    text: "Outstanding drinks! They really improve concentration, zero side effects.",
    product: "Power",
  },
];

const Reviews = () => {
  return (
    <section className="ed-section bg-[hsl(204,55%,82%)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 md:mb-16">
          <p className="font-body text-sm font-medium text-foreground/60 uppercase tracking-[0.2em] mb-4">
            Opinie
          </p>
          <h2 className="ed-heading text-foreground mb-4">
            Co mówią nasi<br />klienci
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.9</span>
            <span className="font-body text-sm text-foreground/60">(200+ reviews)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[3px] bg-foreground">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-background/90 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed text-sm mb-6">
                "{review.text}"
              </p>
              <div className="ed-divider mb-4" />
              <p className="font-body text-xs text-foreground/50">
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
