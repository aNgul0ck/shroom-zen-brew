import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { aboutIngredients } from "@/data/about";

const AboutIngredients = () => {
  return (
    <section className="bg-shroom-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-6">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
              Aktywne składniki
            </p>
            <h2 className="ed-heading text-foreground">
              Co siedzi{" "}
              <span className="italic text-foreground/40">w butelce.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right md:self-end">
            <Link
              to="/badania"
              className="inline-flex items-center gap-2 font-body text-sm font-bold text-foreground border-b-2 border-foreground hover:gap-3 transition-all"
            >
              Zobacz badania <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Asymmetric layout — first item large, others smaller varied */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {aboutIngredients.map((ing, i) => {
            // varied spans: 7, 5, 4, 4, 4 -> creates rhythm
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4"];
            const heights = ["md:min-h-[360px]", "md:min-h-[360px]", "md:min-h-[280px]", "md:min-h-[280px]", "md:min-h-[280px]"];
            return (
              <article
                key={ing.name}
                className={`col-span-12 sm:col-span-6 ${spans[i]} ${heights[i]} ${ing.color} p-7 md:p-9 flex flex-col justify-between`}
              >
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-foreground/50 mb-2">
                    {ing.short}
                  </p>
                  <h3 className={`font-headline ${i === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} font-bold text-foreground`}>
                    {ing.name}
                  </h3>
                </div>
                <p className={`font-body ${i === 0 ? "text-base md:text-lg" : "text-sm md:text-base"} text-foreground/70 leading-relaxed mt-6`}>
                  {ing.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutIngredients;
