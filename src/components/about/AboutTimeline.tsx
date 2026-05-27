import { timelineMilestones } from "@/data/about";
import { useTranslation } from "react-i18next";

const AboutTimeline = () => {
  return (
    <section className="bg-shroom-peach">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="font-body text-xs font-medium text-foreground/60 uppercase tracking-[0.25em] mb-4 text-center">
              {t("about.timeline.kicker")}
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.05] text-center">
              {t("about.timeline.headlineLine1")}{" "}
              <span className="italic text-foreground/40">{t("about.timeline.headlineLine2")}</span>
            </h2>
          </div>
        </div>

        {/* Zigzag layout — each milestone on alternating side */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center vertical line on desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-foreground/30 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {timelineMilestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <article
                  key={m.year}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center`}
                >
                  {/* Left side */}
                  <div className={`${isLeft ? "" : "md:order-2"} md:text-right`}>
                    <div
                      className={`flex items-center gap-4 ${
                        isLeft ? "md:justify-end" : "md:justify-end md:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 ${m.color} flex items-center justify-center`}
                      >
                        <span className="font-headline text-xl md:text-2xl font-bold text-foreground">
                          {m.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Right side */}
                  <div className={`${isLeft ? "" : "md:order-1 md:text-right"}`}>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {m.title}
                    </h3>
                    <p className="font-body text-base text-foreground/70 leading-relaxed max-w-md">
                      {m.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
