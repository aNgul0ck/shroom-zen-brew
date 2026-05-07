import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { aboutIngredients } from "@/data/about";

const AboutIngredients = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
              Aktywne składniki
            </p>
            <h2 className="ed-heading text-foreground">Co siedzi w butelce.</h2>
          </div>
          <Link
            to="/badania"
            className="inline-flex items-center gap-2 font-body text-sm font-bold text-foreground border-b-2 border-foreground hover:gap-3 transition-all"
          >
            Zobacz badania <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t-[3px] border-l-[3px] border-foreground">
          {aboutIngredients.map((ing) => (
            <article
              key={ing.name}
              className={`${ing.color} border-r-[3px] border-b-[3px] border-foreground p-6 md:p-7`}
            >
              <div className="aspect-square bg-foreground/[0.04] border-[2px] border-foreground/15 mb-5 flex items-center justify-center text-foreground/30 font-display text-xs">
                {ing.short}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {ing.name}
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {ing.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutIngredients;
