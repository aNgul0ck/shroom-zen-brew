import type { QuickFact } from "@/data/products";

interface Props {
  facts: QuickFact[];
  isDiva?: boolean;
}

const QuickFacts = ({ facts, isDiva }: Props) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 border-t border-b ${
        isDiva ? "border-white/15" : "border-foreground/15"
      } mb-6`}
    >
      {facts.map((fact, i) => (
        <div
          key={fact.label}
          className={`flex items-start gap-2.5 py-3 px-2 ${
            i < facts.length - 1
              ? `${isDiva ? "sm:border-r border-white/10" : "sm:border-r border-foreground/10"}`
              : ""
          } ${i % 2 === 0 ? `${isDiva ? "border-r border-white/10" : "border-r border-foreground/10"} sm:border-r` : ""}`}
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
              className={`font-display text-xs font-bold leading-tight mt-0.5 ${
                isDiva ? "text-white" : "text-foreground"
              }`}
            >
              {fact.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickFacts;
