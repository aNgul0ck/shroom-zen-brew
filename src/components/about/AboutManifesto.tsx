import { manifestoPillars } from "@/data/about";
import { useTranslation } from "react-i18next";

const AboutManifesto = () => {
  const { t } = useTranslation();
  // Using pillars from translation file if they exist, otherwise fallback to data file
  const pillarsFromTranslation = t("about.manifesto.pillars", { returnObjects: true });
  const pillars = Array.isArray(pillarsFromTranslation) ? pillarsFromTranslation : manifestoPillars;

  return (
    <section className="bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        {/* Asymmetric header — text left, big number right */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-8">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
              {t("about.manifesto.kicker")}
            </p>
            <h2 className="ed-heading text-foreground">
              {t("about.manifesto.headlineLine1")}{" "}
              <span className="text-foreground/40">{t("about.manifesto.headlineLine2")}</span>
            </h2>
          </div>
          <div className="hidden md:flex col-span-4 items-end justify-end">
            <p className="font-headline text-[120px] leading-none font-bold text-foreground/10">
              03
            </p>
          </div>
        </div>

        {/* Staggered pillars — each at different offset */}
        <div className="space-y-12 md:space-y-0">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`grid grid-cols-12 gap-4 md:gap-8 items-start ${
                i === 1 ? "md:pl-[12%]" : i === 2 ? "md:pl-[24%]" : ""
              } ${i > 0 ? "md:-mt-6" : ""}`}
            >
              <div className="col-span-2 md:col-span-1">
                <p className="font-headline text-3xl md:text-5xl font-bold text-foreground/30">
                  0{i + 1}
                </p>
              </div>
              <div className="col-span-10 md:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutManifesto;