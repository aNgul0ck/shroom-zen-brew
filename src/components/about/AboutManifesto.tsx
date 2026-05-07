import { manifestoPillars } from "@/data/about";

const AboutManifesto = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.25em] mb-4">
            Manifest
          </p>
          <h2 className="ed-heading text-foreground">
            Wierzymy, że napoje powinny dodawać Ci{" "}
            <span className="text-foreground/40">lekkości i energii</span> — a
            nie spowalniać czy otępiać.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-t-[3px] border-foreground">
          {manifestoPillars.map((p, i) => (
            <article
              key={p.title}
              className={`p-8 md:p-10 ${
                i < 2 ? "md:border-r-[3px] border-foreground" : ""
              } ${i < manifestoPillars.length - 1 ? "border-b-[3px] md:border-b-0 border-foreground" : ""}`}
            >
              <p className="font-body text-xs text-foreground/40 mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {p.title}
              </h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutManifesto;
