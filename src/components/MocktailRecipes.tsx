import { ArrowRight, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const recipes = [
  {
    id: 1,
    name: "La Dolce Diva",
    difficulty: "Easy",
    time: "3 min",
    color: "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30",
    ingredients: ["Diva", "Prosecco bezalkoholowe", "Pomarańcza"],
    featured: true,
  },
  {
    id: 2,
    name: "Diva Mercy",
    difficulty: "Medium",
    time: "5 min",
    color: "bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30",
    ingredients: ["Diva", "Syrop różany", "Limonka"],
  },
  {
    id: 3,
    name: "Shroom Sunrise",
    difficulty: "Easy",
    time: "2 min",
    color: "bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30",
    ingredients: ["Power", "Sok pomarańczowy", "Imbir"],
  },
];

const MocktailRecipes = () => {
  return (
    <section className="py-24 bg-shroom-peach/30">
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
            Inspiracje
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Przepisy na mocktaile
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Kreatywne koktajle bezalkoholowe z produktami Shroom i Diva. 
            Proste w przygotowaniu, spektakularne w smaku.
          </p>
        </motion.div>

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
              {/* Card */}
              <div className={`${recipe.color} rounded-2xl p-6 h-full flex flex-col`}>
                {/* Featured Badge */}
                {recipe.featured && (
                  <div className="flex items-center gap-1 text-shroom-gold mb-4">
                    <Star className="w-4 h-4 fill-shroom-gold" />
                    <span className="font-body text-xs font-medium uppercase tracking-wide">
                      Popularne
                    </span>
                  </div>
                )}

                {/* Recipe Name */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                  {recipe.name}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="font-body text-sm">{recipe.time}</span>
                  </div>
                  <span className="font-body text-sm text-muted-foreground">
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Ingredients */}
                <div className="flex-1">
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Składniki:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full font-body text-xs text-foreground"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-foreground/10">
                  <span className="inline-flex items-center gap-2 font-display font-semibold text-sm text-foreground group-hover:gap-3 transition-all duration-300">
                    Zobacz przepis
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Recipes Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 rounded-full font-display font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Wszystkie przepisy
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MocktailRecipes;
