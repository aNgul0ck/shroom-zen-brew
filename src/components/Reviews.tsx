import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import esteraRelax from "@/assets/blog/estera-relax.jpg";
import esteraPower from "@/assets/blog/estera-power.jpg";

const reviews = [
  {
    id: 1,
    author: "Agata C.",
    text: "Stosuję codziennie od kilku tygodni. Czuję się odżywiona, mam dużo energii i w końcu poradziłam sobie z przeziębieniami!",
    rating: 5,
    image: esteraPower,
    verified: true,
  },
  {
    id: 2,
    author: "Michał K.",
    text: "Smakuje świetnie i nie ma w nim cukru. Idealna alternatywa dla energetyków, które zawsze zostawiały mnie z nieznośnym uczuciem.",
    rating: 5,
    image: null,
    verified: true,
  },
  {
    id: 3,
    author: "Karolina",
    text: "Świetna alternatywa dla suplementacji w tabletkach i bardzo skuteczna. Po miesięcznym stosowaniu zrobiłam badania krwi i wyniki są bardzo dobre.",
    rating: 5,
    image: esteraRelax,
    verified: true,
  },
  {
    id: 4,
    author: "Robert S.",
    text: "Bardzo dobrze ułożona mieszanka suplementacyjna, którą piję co rano po lekkim treningu. Smacznie i zdrowo, a przy tym dobry user experience.",
    rating: 5,
    image: null,
    verified: true,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2));
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header with stats */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Left - Title */}
          <div className="lg:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Opinie mówią za siebie.
            </h2>
            <p className="font-body text-muted-foreground mb-4">
              Setki klientów zaufało Shroom
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-primary">4.9</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">5.00</span>
            </div>
            <p className="font-body text-sm text-muted-foreground">Zweryfikowane opinie</p>
            <a 
              href="#" 
              className="inline-block mt-4 font-display font-semibold text-sm text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              Wszystkie opinie
            </a>
          </div>

          {/* Right - Carousel */}
          <div className="lg:col-span-9 relative">
            <div className="flex gap-6 overflow-hidden">
              {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex-shrink-0 ${review.image ? 'w-48' : 'w-72'}`}
                >
                  {review.image ? (
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      <img
                        src={review.image}
                        alt={review.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-card rounded-2xl p-6 h-80 flex flex-col shadow-soft">
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-shroom-gold text-shroom-gold" />
                        ))}
                      </div>
                      <p className="font-body text-foreground/80 flex-1 line-clamp-6">
                        {review.text}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <p className="font-display font-semibold text-sm text-foreground">
                          {review.author}
                        </p>
                        {review.verified && (
                          <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
                            Zweryfikowany <span className="text-shroom-green">✓</span>
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2 mt-6">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Poprzednia opinia"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Następna opinia"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
