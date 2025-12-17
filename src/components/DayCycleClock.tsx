import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  { time: '08:00', period: 'morning', product: 'power', moment: 'Przed pracą, zamiast kawy', hook: '"My 8am secret"', icon: Coffee },
  { time: '15:00', period: 'day', product: 'power', moment: 'Focus, deadline', hook: '"3pm slump? Not today"', icon: Briefcase },
  { time: '16:30', period: 'afternoon', product: 'relax', moment: 'After shitty call', hook: '"Deep breath moment"', icon: Sunset },
  { time: '18:00', period: 'evening', product: 'relax', moment: 'Decompression', hook: '"First thing after work"', icon: Sunset },
  { time: '21:00', period: 'night', product: 'relax', moment: 'Netflix, winding down', hook: '"Evening ritual"', icon: Moon },
  { time: '23:00', period: 'party', product: 'diva', moment: 'Social, zamiast alkoholu', hook: '"What I\'m drinking tonight"', icon: PartyPopper },
  { time: '11:00', period: 'weekend', product: 'mix', moment: 'Brunch, friends', hook: '"Saturday mood"', icon: UtensilsCrossed },
];

const productColors = {
  power: { bg: 'from-amber-500/20 to-orange-500/20', text: 'text-amber-400', glow: 'rgba(245, 158, 11, 0.4)' },
  relax: { bg: 'from-emerald-500/20 to-teal-500/20', text: 'text-emerald-400', glow: 'rgba(16, 185, 129, 0.4)' },
  diva: { bg: 'from-pink-500/20 to-rose-500/20', text: 'text-pink-400', glow: 'rgba(236, 72, 153, 0.4)' },
  mix: { bg: 'from-purple-500/20 to-indigo-500/20', text: 'text-purple-400', glow: 'rgba(139, 92, 246, 0.4)' },
};

const productNames = {
  power: 'Shroom Power',
  relax: 'Shroom Relax',
  diva: 'Diva Social Elixir',
  mix: 'Power + Relax',
};

const periodIcons = {
  morning: Sun,
  day: Sun,
  afternoon: Sunset,
  evening: Sunset,
  night: Moon,
  party: Moon,
  weekend: Sun,
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

  // Blinking colon effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setColonVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const currentSlot = timeSlots[currentIndex];
  const colors = productColors[currentSlot.product];
  const PeriodIcon = periodIcons[currentSlot.period];
  const SlotIcon = currentSlot.icon;

  const [hours, minutes] = currentSlot.time.split(':');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-8">
        {/* Digital Clock Display */}
        <motion.div
          className="relative"
          animate={{ 
            boxShadow: `0 0 80px 20px ${colors.glow}` 
          }}
          transition={{ duration: 0.8 }}
        >
          <div 
            className={`relative px-8 py-6 md:px-16 md:py-10 rounded-3xl bg-gradient-to-br ${colors.bg} border border-white/10 backdrop-blur-sm`}
            style={{ 
              background: 'linear-gradient(145deg, rgba(20, 20, 25, 0.95), rgba(10, 10, 15, 0.98))',
              boxShadow: 'inset 0 2px 20px rgba(255,255,255,0.05), 0 10px 40px rgba(0,0,0,0.5)'
            }}
          >
            {/* Period indicator */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <motion.div
                key={currentSlot.period}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className={`p-2 rounded-full bg-gradient-to-br ${colors.bg}`}
              >
                <PeriodIcon className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`} />
              </motion.div>
            </div>

            {/* Time Display */}
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={hours}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className={`text-7xl md:text-9xl font-mono font-bold tracking-tight ${colors.text}`}
                  style={{ 
                    textShadow: `0 0 30px ${colors.glow}`,
                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
                  }}
                >
                  {hours}
                </motion.span>
              </AnimatePresence>
              
              <span 
                className={`text-7xl md:text-9xl font-mono font-bold ${colors.text} transition-opacity duration-100`}
                style={{ 
                  opacity: colonVisible ? 1 : 0.3,
                  textShadow: `0 0 30px ${colors.glow}`,
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
                }}
              >
                :
              </span>
              
              <AnimatePresence mode="wait">
                <motion.span
                  key={minutes}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className={`text-7xl md:text-9xl font-mono font-bold tracking-tight ${colors.text}`}
                  style={{ 
                    textShadow: `0 0 30px ${colors.glow}`,
                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
                  }}
                >
                  {minutes}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Product Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 flex items-center justify-center gap-3"
              >
                <SlotIcon className={`w-5 h-5 ${colors.text}`} />
                <span className={`text-lg md:text-xl font-medium ${colors.text}`}>
                  {productNames[currentSlot.product]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Info Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-4"
          >
            <p className="text-lg md:text-xl text-foreground/70">
              {currentSlot.moment}
            </p>
            <p className={`text-2xl md:text-3xl font-semibold italic ${colors.text}`}>
              {currentSlot.hook}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Timeline dots */}
        <div className="flex items-center gap-3 pt-4">
          {timeSlots.map((slot, i) => {
            const slotColors = productColors[slot.product];
            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'scale-150' 
                    : 'opacity-40 hover:opacity-70'
                }`}
                style={{
                  backgroundColor: i === currentIndex 
                    ? (slot.product === 'power' ? '#f59e0b' : slot.product === 'relax' ? '#10b981' : slot.product === 'diva' ? '#ec4899' : '#8b5cf6')
                    : 'currentColor'
                }}
              >
                {i === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      boxShadow: `0 0 20px 5px ${slotColors.glow}` 
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
