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
    <section className="ed-section ed-bg-sky">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header - left-aligned editorial style */}
        <div className="mb-12 md:mb-16">
          <h2 className="ed-heading text-foreground mb-4">
            Our customers'<br />Google reviews:
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.9</span>
            <span className="font-body text-sm text-muted-foreground">(200+ reviews)</span>
          </div>
        </div>

        {/* Review Cards - 4 column grid like reference */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="ed-overlay-card"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-foreground leading-relaxed text-sm">
                "{review.text}"
              </p>

              {/* Author - minimal */}
              <p className="font-body text-xs text-muted-foreground mt-4">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
