import { motion } from "framer-motion";

const keywords = [
  "Adaptogens",
  "Nootropics",
  "Botanicals",
  "Medicinal Mushrooms",
  "Natural",
  "Mood enhancing",
];

const MarqueeBanner = () => {
  return (
    <div className="bg-foreground py-4 overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...keywords, ...keywords, ...keywords].map((keyword, index) => (
          <span
            key={index}
            className="font-body text-sm font-medium text-background/70 tracking-wide uppercase"
          >
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
