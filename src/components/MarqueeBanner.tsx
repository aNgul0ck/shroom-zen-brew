import { motion } from "framer-motion";

const keywords = [
  "Adaptogeny",
  "Soplówka jeżowata",
  "Lion's Mane",
  "Nootropiki",
  "Żeń-szeń",
  "L-theanina",
  "Bez cukru",
  "Wegańskie",
  "Naturalne",
  "Made in Poland",
];

const MarqueeBanner = () => {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...keywords, ...keywords].map((keyword, index) => (
          <span
            key={index}
            className="font-display text-sm font-semibold text-primary-foreground/80 uppercase tracking-[0.15em]"
          >
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
