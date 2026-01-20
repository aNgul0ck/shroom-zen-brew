import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
];

const Reviews = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Opinie
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Co mówią nasi klienci
          </h2>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-shroom-gold text-shroom-gold" />
              ))}
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.9</span>
            <span className="font-body text-sm text-muted-foreground">(200+ reviews)</span>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />

              {/* Review Text */}
              <p className="font-body text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {review.author}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {review.role}
                  </p>
                </div>
                <span className="bg-secondary px-3 py-1 rounded-full font-body text-xs text-muted-foreground">
                  {review.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
