import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeSlot {
  time: string;
  angle: number;
  product: 'power' | 'relax' | 'diva' | 'mix';
  moment: string;
  hook: string;
  emoji: string;
}

const timeSlots: TimeSlot[] = [
  { time: '8:00', angle: 240, product: 'power', moment: 'Przed pracą, zamiast kawy', hook: '"My 8am secret"', emoji: '☀️' },
  { time: '15:00', angle: 90, product: 'power', moment: 'Focus, deadline', hook: '"3pm slump? Not today"', emoji: '💼' },
  { time: '16:00', angle: 120, product: 'relax', moment: 'After shitty call', hook: '"Deep breath moment"', emoji: '😤' },
  { time: '18:00', angle: 180, product: 'relax', moment: 'Decompression', hook: '"First thing after work"', emoji: '🏠' },
  { time: '21:00', angle: 270, product: 'relax', moment: 'Netflix, winding down', hook: '"Evening ritual"', emoji: '🌙' },
  { time: '23:00', angle: 330, product: 'diva', moment: 'Social, zamiast alkoholu', hook: '"What I\'m drinking tonight"', emoji: '🎉' },
  { time: '10:00', angle: 300, product: 'mix', moment: 'Brunch, friends', hook: '"Saturday mood"', emoji: '🥂' },
];

const productColors = {
  power: { bg: 'from-amber-500/20 to-orange-500/20', text: 'text-amber-400', border: 'border-amber-500/50', glow: 'shadow-amber-500/30' },
  relax: { bg: 'from-emerald-500/20 to-teal-500/20', text: 'text-emerald-400', border: 'border-emerald-500/50', glow: 'shadow-emerald-500/30' },
  diva: { bg: 'from-pink-500/20 to-rose-500/20', text: 'text-pink-400', border: 'border-pink-500/50', glow: 'shadow-pink-500/30' },
  mix: { bg: 'from-purple-500/20 to-indigo-500/20', text: 'text-purple-400', border: 'border-purple-500/50', glow: 'shadow-purple-500/30' },
};

const productNames = {
  power: 'Shroom Power',
  relax: 'Shroom Relax',
  diva: 'Diva Social Elixir',
  mix: 'Power + Relax',
};

export const DayCycleClock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timeSlots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentSlot = timeSlots[currentIndex];
  const colors = productColors[currentSlot.product];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Clock */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br ${colors.bg} border-2 ${colors.border} shadow-2xl ${colors.glow}`}
            animate={{ 
              boxShadow: `0 0 60px 10px ${currentSlot.product === 'power' ? 'rgba(245, 158, 11, 0.2)' : currentSlot.product === 'relax' ? 'rgba(16, 185, 129, 0.2)' : currentSlot.product === 'diva' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(139, 92, 246, 0.2)'}` 
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Clock face markers */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-4 bg-foreground/20 rounded-full"
                style={{
                  left: '50%',
                  top: '8px',
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  transformOrigin: '50% 132px',
                }}
              />
            ))}

            {/* Time slot indicators */}
            {timeSlots.map((slot, i) => {
              const isActive = i === currentIndex;
              const slotColors = productColors[slot.product];
              return (
                <motion.button
                  key={i}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer transition-all duration-300 ${
                    isActive ? `${slotColors.bg} ${slotColors.border} border-2 scale-125` : 'bg-foreground/10 hover:bg-foreground/20'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${slot.angle}deg) translateY(-100px) rotate(${-slot.angle}deg)`,
                  }}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ scale: isActive ? 1.25 : 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slot.emoji}
                </motion.button>
              );
            })}

            {/* Clock hand */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-1.5 h-24 rounded-full origin-bottom"
              style={{
                background: `linear-gradient(to top, ${currentSlot.product === 'power' ? '#f59e0b' : currentSlot.product === 'relax' ? '#10b981' : currentSlot.product === 'diva' ? '#ec4899' : '#8b5cf6'}, transparent)`,
                translateX: '-50%',
                translateY: '-100%',
              }}
              animate={{ rotate: currentSlot.angle }}
              transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            />

            {/* Center dot */}
            <motion.div 
              className={`absolute left-1/2 top-1/2 w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 ${colors.border}`}
              animate={{ 
                backgroundColor: currentSlot.product === 'power' ? '#f59e0b' : currentSlot.product === 'relax' ? '#10b981' : currentSlot.product === 'diva' ? '#ec4899' : '#8b5cf6' 
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Current time label in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                className="text-4xl mt-24"
                key={currentSlot.emoji}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                {currentSlot.emoji}
              </motion.span>
            </div>
          </motion.div>

          {/* Pause indicator */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
              >
                Kliknij emoji aby wybrać
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info panel */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Time badge */}
              <motion.div 
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border}`}
              >
                <span className="text-2xl">{currentSlot.emoji}</span>
                <span className={`font-medium ${colors.text}`}>{currentSlot.time}</span>
              </motion.div>

              {/* Product name */}
              <h3 className={`text-3xl md:text-4xl font-bold ${colors.text}`}>
                {productNames[currentSlot.product]}
              </h3>

              {/* Moment */}
              <p className="text-lg text-foreground/80">
                {currentSlot.moment}
              </p>

              {/* Content hook */}
              <motion.div 
                className={`inline-block px-6 py-3 rounded-xl bg-gradient-to-r ${colors.bg} border ${colors.border}`}
                whileHover={{ scale: 1.02 }}
              >
                <p className={`text-xl md:text-2xl font-semibold italic ${colors.text}`}>
                  {currentSlot.hook}
                </p>
              </motion.div>

              {/* Progress dots */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
                {timeSlots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex 
                        ? `w-8 ${slot.product === 'power' ? 'bg-amber-500' : slot.product === 'relax' ? 'bg-emerald-500' : slot.product === 'diva' ? 'bg-pink-500' : 'bg-purple-500'}` 
                        : 'bg-foreground/20 hover:bg-foreground/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
