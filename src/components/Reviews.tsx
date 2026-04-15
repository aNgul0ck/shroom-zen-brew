import { Star, Quote } from "lucide-react";

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

const productAccent: Record<string, string> = {
  Power: "bg-shroom-gold",
  Relax: "bg-shroom-green",
  Diva: "bg-shroom-sky",
};

const Reviews = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
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
                <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
              ))}
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.9</span>
            <span className="font-body text-xs text-foreground/50">(200+ opinii)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-background border border-foreground/8 p-6 lg:p-8 hover:border-foreground/20 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent top line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${productAccent[review.product] || "bg-shroom-gold"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <Quote className="w-5 h-5 text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300 mb-4" />

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-shroom-gold text-shroom-gold" />
                ))}
              </div>

              <p className="font-body text-foreground text-sm lg:text-base leading-relaxed mb-5">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {review.author}
                  </p>
                  <p className="font-body text-xs text-foreground/40">
                    {review.role}
                  </p>
                </div>
                <span className={`${productAccent[review.product] || "bg-foreground/5"} px-2 py-0.5 font-display text-[10px] font-semibold text-foreground`}>
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
