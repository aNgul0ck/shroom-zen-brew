import { Mail, ClipboardList, Truck, Sparkles, ArrowRight } from "lucide-react";
import { SALES_EMAIL } from "@/data/b2b";

const steps = [
  {
    icon: Mail,
    label: "Dzień 1",
    title: "Zapytanie",
    desc:
      "Napisz na sales@ z krótką informacją o lokalu — typ miejsca, lokalizacja, szacunkowy wolumen miesięczny. Bez zobowiązań.",
    cta: { label: "Wyślij zapytanie", href: `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("Zapytanie HoReCa — nowy lokal")}` },
  },
  {
    icon: ClipboardList,
    label: "Dzień 2–3",
    title: "Oferta i degustacja",
    desc:
      "Wracamy z cennikiem hurtowym dla HoReCa, warunkami płatności i terminem darmowej degustacji u Ciebie w lokalu.",
    cta: { label: "Umów degustację", href: `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("Umów degustację — HoReCa")}` },
  },
  {
    icon: Truck,
    label: "Dzień 5–7",
    title: "Pierwsza dostawa",
    desc:
      "Składasz zamówienie, my pakujemy i wysyłamy w 48h. Minimalne zamówienie startowe: 1 karton (24 butelki). Płatność z odroczeniem.",
    cta: { label: "Złóż zamówienie", href: `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("Zamówienie startowe — HoReCa")}` },
  },
  {
    icon: Sparkles,
    label: "Dalej",
    title: "Wsparcie sprzedaży",
    desc:
      "Materiały POS, szkolenie baristów, wspólny content na social media i stała relacja z opiekunem konta. Rośniemy razem.",
    cta: { label: "Poznaj wsparcie", href: `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("Wsparcie sprzedaży HoReCa")}` },
  },
];

const B2bProcess = () => {
  return (
    <section className="bg-shroom-sage">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="md:col-span-3">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-foreground/30" />
              02b — Proces
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
              Dla restauracji i kawiarni
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.02] mb-6">
              Od zapytania do pierwszej dostawy{" "}
              <span className="text-foreground/40 italic">w 7 dni.</span>
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl">
              Cztery kroki. Bez formularzy, bez handlowca w garniturze, bez
              długich umów. Mailujesz — odpowiadamy.
            </p>
          </div>
        </div>

        {/* Steps — vertical timeline on mobile, horizontal grid with connector on desktop */}
        <div className="relative">
          {/* Desktop horizontal connector line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-foreground/25" aria-hidden />

          <ol className="grid md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-6 lg:gap-x-10 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative flex md:flex-col gap-5 md:gap-0">
                  {/* Mobile vertical line */}
                  {i < steps.length - 1 && (
                    <div
                      className="md:hidden absolute left-[31px] top-16 bottom-0 w-px bg-foreground/25"
                      aria-hidden
                    />
                  )}

                  {/* Step number circle */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-background border-2 border-foreground flex items-center justify-center relative z-10">
                      <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-background flex items-center justify-center font-display font-bold text-sm tabular-nums z-20">
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex-1 md:mt-6">
                    <p className="font-body text-[11px] font-medium text-foreground/55 uppercase tracking-[0.2em] mb-2">
                      {step.label}
                    </p>
                    <h3 className="font-headline text-2xl font-bold text-foreground leading-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">
                      {step.desc}
                    </p>
                    <a
                      href={step.cta.href}
                      className="group inline-flex items-center gap-2 font-display font-bold text-sm text-foreground"
                    >
                      <span className="border-b-2 border-foreground pb-0.5">
                        {step.cta.label}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Bottom reassurance band */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-foreground/20">
          <p className="font-body text-base md:text-lg text-foreground/75 max-w-xl">
            <span className="font-display font-bold text-foreground">Nie prowadzisz HoReCa?</span>{" "}
            Ten sam proces stosujemy dla biur, sklepów i eventów — tylko warunki dopasowujemy do skali.
          </p>
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 font-display font-bold text-base hover:gap-5 transition-all duration-300 flex-shrink-0"
          >
            Zaczynamy
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default B2bProcess;
