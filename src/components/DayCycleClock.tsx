import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Sunset, Moon, Coffee, Briefcase, PartyPopper, UtensilsCrossed } from 'lucide-react';

interface TimeSlot {
  time: string;
  period: 'morning' | 'day' | 'afternoon' | 'evening' | 'night' | 'party' | 'weekend';
  product: 'power' | 'relax' | 'diva' | 'mix';
  moment: string;
  hook: string;
  icon: typeof Sun;
}

const timeSlots: TimeSlot[] = [
  { time: '08:00', period: 'morning', product: 'power', moment: 'Poranek zamiast kawy', hook: '"My 8am ritual"', icon: Coffee },
  { time: '15:00', period: 'day', product: 'power', moment: 'Praca, popołudnie', hook: '"3pm pause"', icon: Briefcase },
  { time: '16:20', period: 'afternoon', product: 'relax', moment: 'Po trudnej rozmowie', hook: '"Deep breath moment"', icon: Sunset },
  { time: '18:00', period: 'evening', product: 'relax', moment: 'Po pracy', hook: '"First thing after work"', icon: Sunset },
  { time: '21:37', period: 'night', product: 'diva', moment: 'Netflix, wieczór', hook: '"Evening ritual"', icon: Moon },
  { time: '23:00', period: 'party', product: 'diva', moment: 'Social, zamiast alkoholu', hook: '"What I\'m drinking tonight"', icon: PartyPopper },
  { time: '11:00', period: 'weekend', product: 'mix', moment: 'Brunch, znajomi', hook: '"Saturday brunch"', icon: UtensilsCrossed },
];

const productAccent: Record<string, string> = {
  power: 'bg-shroom-gold',
  relax: 'bg-shroom-green',
  diva: 'bg-shroom-peach',
  mix: 'bg-shroom-sage',
};

const productTextAccent: Record<string, string> = {
  power: 'text-shroom-gold',
  relax: 'text-shroom-green',
  diva: 'text-shroom-peach',
  mix: 'text-shroom-sage',
};

const productNames: Record<string, string> = {
  power: 'Shroom Power',
  relax: 'Shroom Relax',
  diva: 'Diva Social Elixir',
  mix: 'Power + Relax',
};

export const DayCycleClock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colonVisible, setColonVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timeSlots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setColonVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const currentSlot = timeSlots[currentIndex];
  const SlotIcon = currentSlot.icon;
  const [hours, minutes] = currentSlot.time.split(':');
  const accent = productAccent[currentSlot.product];
  const textAccent = productTextAccent[currentSlot.product];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Clock display — editorial, cream canvas */}
        <div className="relative w-full max-w-sm md:max-w-lg border border-foreground/10 bg-background p-6 md:p-10">
          {/* Accent top bar */}
          <div className={`absolute top-0 left-0 right-0 h-[3px] ${accent} transition-colors duration-500`} />

          {/* Time */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={hours}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground"
              >
                {hours}
              </motion.span>
            </AnimatePresence>

            <span
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground mx-1 md:mx-2 transition-opacity duration-100"
              style={{ opacity: colonVisible ? 1 : 0.2 }}
            >
              :
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={minutes}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground"
              >
                {minutes}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Product badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 md:mt-6 flex items-center justify-center gap-2"
            >
              <span className={`${accent} w-6 h-6 flex items-center justify-center`}>
                <SlotIcon className="w-3.5 h-3.5 text-foreground" />
              </span>
              <span className="text-sm md:text-lg font-display font-semibold text-foreground">
                {productNames[currentSlot.product]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-1.5"
          >
            <p className="text-sm md:text-base text-foreground/50 font-body">
              {currentSlot.moment}
            </p>
            <p className={`text-lg md:text-2xl font-display font-bold italic ${textAccent}`}>
              {currentSlot.hook}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Timeline dots — sharp squares */}
        <div className="flex items-center gap-1.5 md:gap-2 pt-2">
          {timeSlots.map((slot, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 transition-all duration-300 ${
                i === currentIndex
                  ? `${productAccent[slot.product]} scale-125`
                  : 'bg-foreground/15 hover:bg-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
