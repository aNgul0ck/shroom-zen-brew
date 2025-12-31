import { motion } from "framer-motion";

import esteraRelax from "@/assets/blog/estera-relax.jpg";
import esteraPower from "@/assets/blog/estera-power.jpg";
import esteraBeach from "@/assets/blog/estera-beach.jpg";

const images = [
  {
    src: esteraPower,
    alt: "Shroom Power w słoneczny dzień",
    span: "col-span-1 row-span-2",
  },
  {
    src: esteraRelax,
    alt: "Relaks z Shroom",
    span: "col-span-1 row-span-1",
  },
  {
    src: esteraBeach,
    alt: "Shroom na plaży",
    span: "col-span-1 row-span-1",
  },
];

const LifestyleGallery = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            #shroomlife
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Dołącz do społeczności
          </h2>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${image.span} overflow-hidden rounded-2xl group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/shroom4you"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-semibold text-primary hover:text-accent transition-colors"
          >
            Obserwuj nas na Instagramie
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;
