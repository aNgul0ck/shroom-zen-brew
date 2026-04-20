import type { QuickFact } from "@/data/products";

interface Props {
  facts: QuickFact[];
  isDiva?: boolean;
}

const QuickFacts = ({ facts, isDiva }: Props) => {
  const borderColor = isDiva ? "border-white/15" : "border-foreground/15";
  const dividerColor = isDiva ? "border-white/10" : "border-foreground/10";

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 border-t border-b ${borderColor} mb-6`}>
      {facts.map((fact, i) => {
        // Mobile (2 cols): right border on first column (i % 2 === 0), bottom border on top row (i < 2)
        // Desktop (4 cols, sm+): right border except last
        const isLastCol = i === facts.length - 1;
        const mobileRight = i % 2 === 0 ? `border-r ${dividerColor}` : "";
        const mobileBottom = i < 2 ? `border-b ${dividerColor} sm:border-b-0` : "";
        const desktopRight = !isLastCol ? `sm:border-r sm:${dividerColor}` : "";

        return (
          <div
            key={fact.label}
            className={`flex items-start gap-2.5 py-3 px-3 ${mobileRight} ${mobileBottom} ${desktopRight}`}
          >
            <fact.icon
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                isDiva ? "text-diva-pink" : "text-foreground"
              }`}
            />
            <div className="min-w-0">
              <p
                className={`font-body text-[10px] uppercase tracking-wider leading-tight ${
                  isDiva ? "text-white/40" : "text-foreground/50"
                }`}
              >
                {fact.label}
              </p>
              <p
                className={`font-display text-xs font-bold leading-tight mt-0.5 break-words ${
                  isDiva ? "text-white" : "text-foreground"
                }`}
              >
                {fact.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickFacts;
