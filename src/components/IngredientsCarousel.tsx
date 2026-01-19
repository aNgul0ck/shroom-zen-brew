import { motion } from "framer-motion";

const ingredients = [
  { name: "Hops", icon: "🌿" },
  { name: "L-Theanine", icon: "✨" },
  { name: "Lion's mane", icon: "🍄" },
  { name: "Ginger", icon: "🫚" },
  { name: "Ginseng", icon: "🌱" },
];

const IngredientsCarousel = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {ingredient.icon}
              </div>
              <p className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {ingredient.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-foreground' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsCarousel;
