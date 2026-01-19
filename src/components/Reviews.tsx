import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    author: "Olek Rajewski",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    id: 2,
    author: "Ewa Kucharska",
    rating: 5,
    avatar: "👩",
  },
  {
    id: 3,
    author: "Priyanka Banerjee",
    rating: 5,
    avatar: "👩‍💻",
  },
  {
    id: 4,
    author: "Michał and Karolina",
    rating: 5,
    avatar: "👫",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="text-4xl">{review.avatar}</div>
              <p className="font-display text-sm font-semibold text-foreground text-center">
                {review.author}
              </p>
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
