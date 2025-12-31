import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const benefits = [
  "Bez dodanego cukru",
  "100% naturalny skład",
  "Bez sztucznych słodzików",
  "Źródło cynku i witaminy C",
  "Made in Poland",
  "Adaptogeny",
  "Bez konserwantów",
  "Wegańskie",
];

const MarqueeBanner = () => {
  return (
    <div className="bg-secondary overflow-hidden py-4">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...benefits, ...benefits].map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <Leaf className="w-4 h-4 text-primary/60 flex-shrink-0" />
            <span className="font-display font-semibold text-sm tracking-wide text-primary uppercase">
              {benefit}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
