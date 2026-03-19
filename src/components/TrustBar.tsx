const items = [
  "🏆 World Alcohol-Free Awards 2025",
  "🥇 Best Functional Drink",
  "✓ 0g cukru",
  "✓ Bez kofeiny",
  "✓ Wyprodukowano w Polsce",
  "✓ 100% naturalne składniki",
];

const TrustBar = () => {
  const repeated = [...items, ...items];

  return (
    <div className="bg-foreground/5 border-y border-border/40 py-4 overflow-hidden">
      <div className="flex animate-scroll-x whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-block px-6 font-body text-xs sm:text-sm text-muted-foreground tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
