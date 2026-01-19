import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    author: "Agata C.",
    text: "Stosuję codziennie od kilku tygodni. Czuję się odżywiona, mam dużo energii i w końcu poradziłam sobie z przeziębieniami!",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    author: "Michał K.",
    text: "Smakuje świetnie i nie ma w nim cukru. Idealna alternatywa dla energetyków, które zawsze zostawiały mnie z nieznośnym uczuciem.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    author: "Karolina S.",
    text: "Świetna alternatywa dla suplementacji w tabletkach. Po miesięcznym stosowaniu zrobiłam badania krwi i wyniki są bardzo dobre.",
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    author: "Robert W.",
    text: "Bardzo dobrze ułożona mieszanka. Piję co rano po treningu. Smacznie i zdrowo, polecam każdemu.",
    rating: 5,
    verified: true,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-12 items-start mb-16"
        >
          <div className="lg:col-span-1">
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
              Opinie
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              Co mówią nasi klienci
            </h2>
            
            {/* Rating summary */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-display text-5xl font-bold text-primary">4.9</span>
              <span className="font-body text-muted-foreground">/ 5.0</span>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-shroom-gold text-shroom-gold" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Na podstawie zweryfikowanych opinii
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
              Dołącz do setek klientów, którzy odkryli moc adaptogenów. 
              Każda opinia pochodzi od zweryfikowanego kupującego.
            </p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-soft flex flex-col"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
                ))}
              </div>
              
              <p className="font-body text-foreground/80 leading-relaxed flex-1 mb-6">
                "{review.text}"
              </p>
              
              <div className="pt-4 border-t border-border/50">
                <p className="font-display font-semibold text-sm text-foreground">
                  {review.author}
                </p>
                {review.verified && (
                  <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
                    Zweryfikowany <span className="text-shroom-green">✓</span>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
