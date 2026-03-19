const items = [
  "🏆 World Alcohol-Free Awards 2025",
  "🥇 Best Functional Drink",
  "✓ Bez cukru",
  "✓ Bez kofeiny",
  "✓ Made in Poland",
];

const TrustBar = () => {
  return (
    <div className="bg-foreground py-5 overflow-x-auto scrollbar-hide">
      <div className="flex items-center justify-center gap-0 min-w-max mx-auto px-6">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-body text-sm text-background/60 whitespace-nowrap">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="mx-4 text-background/30">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
