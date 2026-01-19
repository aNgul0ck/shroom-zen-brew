import { motion } from "framer-motion";

const recipes = [
  {
    id: 1,
    name: "La dolce diva",
    color: "bg-amber-100",
    image: "🍊",
  },
  {
    id: 2,
    name: "Diva Mercy",
    color: "bg-orange-200",
    image: "🍹",
  },
  {
    id: 3,
    name: "Diva Spritz",
    color: "bg-red-100",
    image: "🍷",
  },
];

const MocktailRecipes = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Mocktails recipes
          </h2>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs">🍄</span>
          </div>
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <p className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                {recipe.name}
              </p>
              <div className={`${recipe.color} rounded-2xl aspect-[4/5] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
                <span className="text-8xl">{recipe.image}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Recipes Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 rounded-full font-display font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            All recipes
          </a>
        </div>
      </div>
    </section>
  );
};

export default MocktailRecipes;
