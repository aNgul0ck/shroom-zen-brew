import foundersPhoto from "@/assets/shroom-founders.jpg";
import { useTranslation } from "react-i18next";

const AboutOrigin = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-shroom-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Image — taller, off-grid */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
              <img
                src={foundersPhoto}
                alt={t("about.origin.imageAlt")}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-body text-xs text-foreground/50 italic font-mono">
              {t("about.origin.foundersCaption")}
            </p>
          </div>

          {/* Text — offset down on desktop */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5 lg:col-start-8 md:pt-16 lg:pt-24">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4 font-mono">
              {t("about.origin.kicker")}
            </p>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-8">
              {t("about.origin.headlineLine1")}{" "}
              <span className="text-foreground/40">{t("about.origin.headlineLine2")}</span>
            </h2>
            <p className="font-body md:text-lg text-foreground/70 leading-relaxed mb-6 text-lg font-mono">
              {t("about.origin.storyParagraph1")}
            </p>
          </div>
        </div>

        {/* Pull quote — full width, oversized */}
        <div className="mt-16 md:mt-24 max-w-5xl">
          <p className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
            <span className="text-foreground/30">„</span>
            {t("about.origin.quote")}
            <span className="text-foreground/30">"</span>
          </p>
        </div>

        {/* Closing paragraph — narrow column, right-aligned on desktop */}
        <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed font-mono">
              {t("about.origin.storyParagraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrigin;
