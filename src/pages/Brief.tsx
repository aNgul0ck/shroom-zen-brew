import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Sparkles, Heart, Brain, Zap, Moon, Sun, Coffee, Droplets, RotateCcw } from "lucide-react";
import { DayCycleClock } from "@/components/DayCycleClock";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

// Quiz types and data
type QuizAnswer = {
  text: string;
  points: { power: number; relax: number; diva: number };
};

type QuizQuestion = {
  question: string;
  emoji: string;
  answers: QuizAnswer[];
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "Jak zaczyna się Twój typowy dzień?",
    emoji: "🌅",
    answers: [
      { text: "Kawą i szybkim tempem - mam dużo do zrobienia", points: { power: 3, relax: 0, diva: 1 } },
      { text: "Spokojnie, potrzebuję chwili na rozruch", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Zależy od nastroju - lubię spontaniczność", points: { power: 1, relax: 1, diva: 3 } },
    ]
  },
  {
    question: "Co najbardziej Cię frustruje w ciągu dnia?",
    emoji: "😤",
    answers: [
      { text: "Brak energii gdy mam deadline", points: { power: 3, relax: 1, diva: 0 } },
      { text: "Trudność w wyciszeniu myśli", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Sztywność i brak luzu w sytuacjach społecznych", points: { power: 0, relax: 1, diva: 3 } },
    ]
  },
  {
    question: "Jak najchętniej spędzasz wolny czas?",
    emoji: "🎯",
    answers: [
      { text: "Sport, projekty, nauka nowych rzeczy", points: { power: 3, relax: 0, diva: 1 } },
      { text: "Książka, spacer, medytacja", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Spotkania z ludźmi, imprezy, events", points: { power: 1, relax: 0, diva: 3 } },
    ]
  },
  {
    question: "Czego najbardziej potrzebujesz w tym momencie życia?",
    emoji: "✨",
    answers: [
      { text: "Więcej skupienia i produktywności", points: { power: 3, relax: 0, diva: 0 } },
      { text: "Balansu i spokoju w głowie", points: { power: 0, relax: 3, diva: 0 } },
      { text: "Lepszego kontaktu z sobą i innymi", points: { power: 0, relax: 1, diva: 3 } },
    ]
  },
  {
    question: "Jaki jest Twój stosunek do kofeiny?",
    emoji: "☕",
    answers: [
      { text: "Kocham! Ale szukam czegoś zdrowszego", points: { power: 3, relax: 0, diva: 1 } },
      { text: "Unikam - zbyt mnie nakręca", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Czasem tak, czasem nie - zależy od okazji", points: { power: 1, relax: 1, diva: 2 } },
    ]
  },
];

type QuizResult = {
  product: string;
  emoji: string;
  title: string;
  description: string;
  adaptogens: string[];
  color: string;
  image: string;
};

const quizResults: Record<string, QuizResult> = {
  power: {
    product: "Shroom Power",
    emoji: "⚡",
    title: "Dla aktywnych",
    description: "Twój styl życia wymaga napoju, który pasuje do intensywnego dnia. Shroom Power to kompozycja soplówki jeżowatej, żeń-szenia oraz cynku i witaminy C.",
    adaptogens: ["Soplówka jeżowata", "Żeń-szeń", "Cynk", "Witamina C"],
    color: "shroom-gold",
    image: productPower,
  },
  relax: {
    product: "Shroom Relax",
    emoji: "🧘",
    title: "Dla spokojnych",
    description: "Preferujesz spokojniejsze tempo. Shroom Relax to kompozycja soplówki jeżowatej i L-teaniny — składników znanych z tradycyjnej herbaciarni.",
    adaptogens: ["L-teanina", "Soplówka jeżowata", "Inulina", "Cynk"],
    color: "shroom-lavender",
    image: productRelax,
  },
  diva: {
    product: "Diva Social Elixir",
    emoji: "💃",
    title: "Dla towarzyskich",
    description: "Cenisz autentyczne relacje i dobre wibracje. Diva to unikalna kompozycja ziela damiany i żeń-szenia syberyjskiego — składników znanych w tradycji latynoamerykańskiej.",
    adaptogens: ["Ziele damiana", "Żeń-szeń syberyjski", "Cordyceps"],
    color: "diva-pink",
    image: productDiva,
  },
};

// Quiz Component
const AdaptogenQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ power: 0, relax: 0, diva: 0 });
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answer: QuizAnswer, index: number) => {
    setSelectedAnswer(index);
    
    setTimeout(() => {
      const newScores = {
        power: scores.power + answer.points.power,
        relax: scores.relax + answer.points.relax,
        diva: scores.diva + answer.points.diva,
      };
      setScores(newScores);

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ power: 0, relax: 0, diva: 0 });
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const getResult = (): QuizResult => {
    const maxScore = Math.max(scores.power, scores.relax, scores.diva);
    if (scores.power === maxScore) return quizResults.power;
    if (scores.relax === maxScore) return quizResults.relax;
    return quizResults.diva;
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-foreground/50 mb-2">
                <span>Pytanie {currentQuestion + 1} z {quizQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "hsl(var(--shroom-green))" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-10">
              <span className="text-6xl mb-6 block">{quizQuestions[currentQuestion].emoji}</span>
              <h4 className="text-2xl md:text-3xl font-display font-bold">
                {quizQuestions[currentQuestion].question}
              </h4>
            </div>

            {/* Answers */}
            <div className="space-y-4">
              {quizQuestions[currentQuestion].answers.map((answer, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(answer, index)}
                  disabled={selectedAnswer !== null}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border ${
                    selectedAnswer === index
                      ? "border-shroom-green bg-shroom-green/10"
                      : "border-border/50 bg-card hover:border-shroom-sage/50 hover:bg-card/80"
                  }`}
                  style={selectedAnswer === index ? { borderColor: "hsl(var(--shroom-green))" } : {}}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedAnswer === index ? "border-shroom-green bg-shroom-green" : "border-foreground/20"
                      }`}
                      style={selectedAnswer === index ? { borderColor: "hsl(var(--shroom-green))", backgroundColor: "hsl(var(--shroom-green))" } : {}}
                    >
                      {selectedAnswer === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 bg-white rounded-full"
                        />
                      )}
                    </div>
                    <span className="font-medium text-lg">{answer.text}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {(() => {
              const result = getResult();
              return (
                <>
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="p-8 rounded-3xl border border-border/50 mb-8 relative overflow-hidden"
                    style={{ backgroundColor: "hsl(var(--card))" }}
                  >
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{ 
                        background: `radial-gradient(circle at 50% 0%, hsl(var(--${result.color})) 0%, transparent 60%)` 
                      }}
                    />
                    <div className="relative z-10">
                      <span className="text-7xl mb-4 block">{result.emoji}</span>
                      <p className="text-sm uppercase tracking-[0.2em] text-foreground/50 mb-2">Twój adaptogen to</p>
                      <h4 className="text-3xl md:text-4xl font-display font-bold mb-2" style={{ color: `hsl(var(--${result.color}))` }}>
                        {result.product}
                      </h4>
                      <p className="text-lg text-foreground/60 mb-6">{result.title}</p>
                      
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="h-48 mb-6"
                      >
                        <img src={result.image} alt={result.product} className="h-full w-auto mx-auto object-contain" />
                      </motion.div>

                      <p className="text-foreground/70 mb-6 leading-relaxed">{result.description}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {result.adaptogens.map((adaptogen) => (
                          <span 
                            key={adaptogen}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ 
                              backgroundColor: `hsl(var(--${result.color}) / 0.2)`,
                              color: `hsl(var(--${result.color}))`
                            }}
                          >
                            {adaptogen}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={resetQuiz}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Rozwiąż quiz ponownie
                  </motion.button>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Animated section that reveals on scroll
const RevealSection = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
const ParallaxImage = ({ 
  src, 
  alt, 
  className = "",
  speed = 0.5 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  speed?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </motion.div>
  );
};

// Sticky text section
const StickyText = ({ 
  label,
  title, 
  highlight, 
  description,
  color = "shroom-coral"
}: { 
  label: string;
  title: string;
  highlight: string;
  description: string;
  color?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6 font-display"
        >
          {label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8"
        >
          <span className={`text-${color}`}>{highlight}</span>
          <br />
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

// Feature card with icon
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0,
  color = "shroom-sage"
}: { 
  icon: any; 
  title: string; 
  description: string;
  delay?: number;
  color?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className={`w-16 h-16 rounded-2xl bg-${color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 text-${color}`} style={{ color: `hsl(var(--${color}))` }} />
      </div>
      <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
      <p className="text-foreground/60 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// Ingredient pill
const IngredientPill = ({ 
  name, 
  benefit,
  delay = 0
}: { 
  name: string; 
  benefit: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-3 h-3 rounded-full bg-shroom-green" style={{ backgroundColor: "hsl(var(--shroom-green))" }} />
      <div>
        <p className="font-display font-semibold">{name}</p>
        <p className="text-sm text-foreground/60">{benefit}</p>
      </div>
    </motion.div>
  );
};

// Apple-style Sticky Scroll Section
const StickyScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const values = [
    {
      number: "01",
      emoji: "☀️",
      title: "Część codzienności",
      text: "Pokazujemy Shrooma jako naturalną część codziennego życia, a nie coś na specjalną okazję.",
      detail: "Rano przy kawie, w przerwie między spotkaniami, po treningu. Shroom towarzyszy zwykłym momentom.",
      color: "shroom-gold",
    },
    {
      number: "02",
      emoji: "🚫",
      title: "Zdrowa alternatywa",
      text: "Mówimy wprost, że to alternatywa dla słodzonych napojów gazowanych.",
      detail: "Bez cukru, bez sztucznych dodatków. Wybór dla tych, którzy chcą czegoś lepszego.",
      color: "shroom-coral",
    },
    {
      number: "03",
      emoji: "🌿",
      title: "Składniki z tradycją",
      text: "Budujemy markę opartą na składnikach znanych od tysięcy lat.",
      detail: "Adaptogeny i grzyby funkcjonalne — składniki stosowane w tradycyjnej medycynie chińskiej i ajurwedzie.",
      color: "shroom-green",
    },
    {
      number: "04",
      emoji: "✨",
      title: "Autentyczność ponad wszystko",
      text: "Stawiamy na autentyczność. Nie tworzymy historii pod reklamę.",
      detail: "Prawdziwe momenty, prawdziwi ludzie. Bez inscenizacji, bez przesady.",
      color: "shroom-lavender",
    },
  ];

  // Calculate which item should be visible based on scroll progress
  const itemCount = values.length;
  
  return (
    <section ref={containerRef} className="relative" style={{ height: `${(itemCount + 1) * 100}vh` }}>
      {/* Background decoration */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          background: "radial-gradient(circle at 20% 30%, hsl(var(--shroom-green)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--shroom-coral)) 0%, transparent 40%)" 
        }}
      />

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 w-full">
          {/* Header - visible at the start */}
          <StickyScrollHeader scrollProgress={scrollYProgress} />
          
          {/* Values */}
          {values.map((value, index) => (
            <StickyScrollItem
              key={index}
              value={value}
              index={index}
              totalItems={itemCount}
              scrollProgress={scrollYProgress}
            />
          ))}

          {/* Summary - visible at the end */}
          <StickyScrollSummary scrollProgress={scrollYProgress} totalItems={itemCount} />
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 w-1 h-40 rounded-full overflow-hidden hidden lg:block"
        style={{ backgroundColor: "hsl(var(--border) / 0.3)" }}
      >
        <motion.div
          className="w-full rounded-full"
          style={{ 
            backgroundColor: "hsl(var(--shroom-green))",
            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
          }}
        />
      </motion.div>
    </section>
  );
};

// Header component for sticky scroll
const StickyScrollHeader = ({ scrollProgress }: { scrollProgress: any }) => {
  const opacity = useTransform(scrollProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollProgress, [0, 0.1], [0, -50]);
  const scale = useTransform(scrollProgress, [0, 0.1], [1, 0.95]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
      style={{ opacity, y, scale }}
    >
      <motion.div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8"
        style={{ 
          background: "linear-gradient(135deg, hsl(var(--shroom-sage) / 0.3), hsl(var(--shroom-gold) / 0.2))",
        }}
      >
        <span className="text-4xl">🎯</span>
      </motion.div>
      <p className="text-sm uppercase tracking-[0.4em] text-foreground/50 mb-6">Główne założenia</p>
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
        Jak <span style={{ color: "hsl(var(--shroom-green))" }}>komunikujemy</span> markę
      </h2>
      <p className="text-lg text-foreground/60 max-w-xl">
        Scrolluj, aby odkryć cztery filary komunikacji Shrooma.
      </p>
      
      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-12"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-foreground/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Individual item component for sticky scroll
const StickyScrollItem = ({ 
  value, 
  index, 
  totalItems, 
  scrollProgress 
}: { 
  value: any; 
  index: number; 
  totalItems: number; 
  scrollProgress: any;
}) => {
  // Each item takes up an equal portion of the scroll, with padding for header/footer
  const itemStart = (index + 1) / (totalItems + 2);
  const itemPeak = (index + 1.5) / (totalItems + 2);
  const itemEnd = (index + 2) / (totalItems + 2);

  const opacity = useTransform(
    scrollProgress,
    [itemStart - 0.05, itemStart + 0.02, itemPeak, itemEnd - 0.02, itemEnd + 0.02],
    [0, 1, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollProgress,
    [itemStart - 0.05, itemStart + 0.02, itemPeak, itemEnd - 0.02, itemEnd + 0.02],
    [100, 0, 0, 0, -100]
  );

  const scale = useTransform(
    scrollProgress,
    [itemStart - 0.05, itemStart + 0.02, itemPeak, itemEnd - 0.02, itemEnd + 0.02],
    [0.9, 1, 1, 1, 0.9]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, y, scale }}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Large background number */}
        <motion.span 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-display font-bold opacity-[0.03] pointer-events-none select-none"
          style={{ color: `hsl(var(--${value.color}))` }}
        >
          {value.number}
        </motion.span>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div 
            className="w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-8"
            style={{ 
              backgroundColor: `hsl(var(--${value.color}) / 0.15)`,
              boxShadow: `0 0 80px hsl(var(--${value.color}) / 0.3)`
            }}
          >
            <span className="text-6xl">{value.emoji}</span>
          </motion.div>

          {/* Number badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ 
              backgroundColor: `hsl(var(--${value.color}) / 0.15)`, 
              color: `hsl(var(--${value.color}))` 
            }}
          >
            <span className="font-bold">{value.number}</span>
            <span>/</span>
            <span>04</span>
          </div>

          {/* Title */}
          <h3 
            className="text-2xl md:text-3xl font-display font-bold mb-6"
            style={{ color: `hsl(var(--${value.color}))` }}
          >
            {value.title}
          </h3>

          {/* Main text */}
          <p className="text-2xl md:text-4xl font-display font-medium leading-tight text-foreground/90 mb-8 max-w-3xl mx-auto">
            {value.text}
          </p>

          {/* Detail text */}
          <p className="text-lg text-foreground/50 leading-relaxed max-w-xl mx-auto">
            {value.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Summary component for sticky scroll
const StickyScrollSummary = ({ scrollProgress, totalItems }: { scrollProgress: any; totalItems: number }) => {
  const startPoint = (totalItems + 1) / (totalItems + 2);
  const opacity = useTransform(scrollProgress, [startPoint - 0.05, startPoint + 0.02], [0, 1]);
  const y = useTransform(scrollProgress, [startPoint - 0.05, startPoint + 0.02], [50, 0]);
  const scale = useTransform(scrollProgress, [startPoint - 0.05, startPoint + 0.02], [0.95, 1]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, y, scale }}
    >
      <div className="text-center">
        <motion.div
          className="inline-flex items-center gap-4 px-10 py-6 rounded-3xl border border-border/50"
          style={{ backgroundColor: "hsl(var(--card))" }}
        >
          <span className="text-4xl">💡</span>
          <div className="text-left">
            <p className="text-sm uppercase tracking-wider text-foreground/50 mb-1">DNA marki</p>
            <p className="font-display font-semibold text-xl text-foreground/80">
              Prostota, autentyczność i funkcjonalność
            </p>
          </div>
        </motion.div>
        
        {/* Continue scrolling hint */}
        <motion.p 
          className="mt-8 text-foreground/40 text-sm"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Kontynuuj scrollowanie ↓
        </motion.p>
      </div>
    </motion.div>
  );
};

const Brief = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="bg-background min-h-screen">
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-20" />
          <span className="font-display font-bold text-lg">Shroom Brief</span>
          <div className="w-20" />
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm uppercase tracking-[0.4em] text-foreground/50 mb-8"
          >
            Poznaj Shrooma
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.05] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              The choice of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block text-transparent bg-clip-text"
              style={{ 
                backgroundImage: "linear-gradient(135deg, hsl(129, 50%, 45%), hsl(17, 80%, 55%))" 
              }}
            >
              feeling good.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto"
          >
            To nie jest po prostu napój. To codzienny wybór tego, żeby poczuć się dobrze.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-foreground/40" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <StickyText
        label="Filozofia"
        highlight="Małe decyzje."
        title="Wielkie zmiany."
        description="The choice of feeling good oznacza małe decyzje, które robimy każdego dnia. Co pijesz rano. Po co sięgasz w pracy. Jak dbasz o siebie między jednym zadaniem a drugim."
        color="shroom-coral"
      />

      {/* Products Showcase */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-24">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-4">Produkty</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Trzy formuły.<br />
              <span style={{ color: "hsl(var(--shroom-green))" }}>Jeden cel.</span>
            </h2>
          </RevealSection>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Power */}
            <RevealSection className="text-center group">
              <div className="relative mb-8 h-80 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, hsl(var(--shroom-gold)) 0%, transparent 100%)" }}
                />
                <ParallaxImage 
                  src={productPower} 
                  alt="Shroom Power" 
                  className="h-64 w-auto relative z-10"
                  speed={0.3}
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Shroom Power</h3>
              <p className="text-foreground/60 mb-6">Z soplówką jeżowatą, żeń-szeniem, cynkiem i witaminą C</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Soplówka jeżowata", "Żeń-szeń", "Inulina", "Cynk", "Witamina C"].map((ing) => (
                  <span 
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "hsl(var(--shroom-gold) / 0.2)", color: "hsl(var(--shroom-coral))" }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </RevealSection>

            {/* Relax */}
            <RevealSection className="text-center group">
              <div className="relative mb-8 h-80 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, hsl(var(--shroom-lavender)) 0%, transparent 100%)" }}
                />
                <ParallaxImage 
                  src={productRelax} 
                  alt="Shroom Relax" 
                  className="h-64 w-auto relative z-10"
                  speed={0.3}
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Shroom Relax</h3>
              <p className="text-foreground/60 mb-6">Z soplówką jeżowatą, L-teaniną, cynkiem i witaminą C</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["L-teanina", "Soplówka jeżowata", "Inulina", "Cynk", "Witamina C"].map((ing) => (
                  <span 
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "hsl(var(--shroom-lavender) / 0.2)", color: "hsl(var(--shroom-purple))" }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </RevealSection>

            {/* Diva */}
            <RevealSection className="text-center group">
              <div className="relative mb-8 h-80 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, hsl(var(--diva-pink)) 0%, transparent 100%)" }}
                />
                <ParallaxImage 
                  src={productDiva} 
                  alt="Diva Social Elixir" 
                  className="h-64 w-auto relative z-10"
                  speed={0.3}
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Diva Social Elixir</h3>
              <p className="text-foreground/60 mb-6">Z zielem damiany, żeń-szeniem syberyjskim i cordycepsem</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Ziele damiana", "Żeń-szeń syberyjski", "Cordyceps"].map((ing) => (
                  <span 
                    key={ing}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "hsl(var(--diva-pink) / 0.2)", color: "hsl(var(--shroom-wine))" }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Functional Food Section */}
      <StickyText
        label="Żywność funkcjonalna"
        highlight="Więcej niż smak."
        title="Wsparcie od środka."
        description="Shroom należy do kategorii żywności funkcjonalnej. To znaczy, że oprócz smaku daje coś więcej. Wspiera organizm od środka i może być częścią zdrowego stylu życia."
        color="shroom-green"
      />

      {/* ===== ADAPTOGENS DEEP DIVE - MUSEUM SECTION ===== */}
      <section className="relative">
        {/* Intro Gateway */}
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              background: "radial-gradient(ellipse at 50% 100%, hsl(var(--shroom-sage) / 0.3) 0%, transparent 60%)" 
            }}
          />
          <RevealSection className="text-center px-6 relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <div 
                className="w-32 h-32 mx-auto rounded-full flex items-center justify-center"
                style={{ 
                  background: "linear-gradient(135deg, hsl(var(--shroom-green) / 0.2), hsl(var(--shroom-gold) / 0.2))",
                  boxShadow: "0 0 80px hsl(var(--shroom-green) / 0.3)"
                }}
              >
                <Leaf className="w-16 h-16" style={{ color: "hsl(var(--shroom-green))" }} />
              </div>
            </motion.div>
            <p className="text-sm uppercase tracking-[0.4em] text-foreground/50 mb-6">Zanurz się głębiej</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8">
              <span style={{ color: "hsl(var(--shroom-green))" }}>Adaptogeny</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              Substancje, które od tysięcy lat pomagają organizmom adaptować się do stresu. 
              Od starożytnych praktyk po współczesne badania kosmiczne.
            </p>
          </RevealSection>
        </div>

        {/* Timeline Section */}
        <div className="py-32 px-6 relative">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-shroom-sage/30 to-transparent hidden lg:block" />
            
            {/* Era 1: Ancient Origins */}
            <RevealSection className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "hsl(var(--shroom-gold) / 0.2)", color: "hsl(var(--shroom-coral))" }}>
                    3000 lat p.n.e.
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Starożytne początki
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                    W tradycyjnej medycynie chińskiej i ajurwedzie adaptogeny były używane przez tysiące lat. 
                    Żeń-szeń nazywano "korzeniem życia", a grzyby jak Reishi były zarezerwowane dla cesarzy.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Chiny", "Indie", "Syberia", "Tybet"].map((place) => (
                      <span key={place} className="px-4 py-2 rounded-full text-sm bg-card border border-border/50">
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <motion.div
                    whileInView={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full aspect-square max-w-md mx-auto rounded-3xl relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(135deg, hsl(var(--shroom-cream)) 0%, hsl(var(--shroom-gold) / 0.3) 100%)",
                      boxShadow: "0 40px 80px -20px hsl(var(--shroom-black) / 0.15)"
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">🍄</div>
                        <p className="font-display font-semibold text-lg" style={{ color: "hsl(var(--shroom-coral))" }}>
                          Grzyb Nieśmiertelności
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">Reishi / Lingzhi</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </RevealSection>

            {/* Era 2: Soviet Research */}
            <RevealSection className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full aspect-square max-w-md mx-auto rounded-3xl relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(180deg, hsl(220, 30%, 15%) 0%, hsl(220, 20%, 25%) 100%)",
                      boxShadow: "0 40px 80px -20px hsl(var(--shroom-black) / 0.4)"
                    }}
                  >
                    {/* Animated stars */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ 
                          left: `${Math.random() * 100}%`, 
                          top: `${Math.random() * 100}%`,
                          opacity: 0.3 + Math.random() * 0.7
                        }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center relative z-10">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="text-8xl mb-4"
                        >
                          🚀
                        </motion.div>
                        <p className="font-display font-semibold text-lg text-white">
                          Program Kosmiczny
                        </p>
                        <p className="text-sm text-white/60 mt-2">ZSRR 1960-1980</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div>
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "hsl(0, 60%, 50% / 0.2)", color: "hsl(0, 60%, 50%)" }}>
                    1947 - 1980
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Radzieckie badania kosmiczne
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                    Dr Nikolai Lazarev ukuł termin "adaptogen" w 1947 roku. Radzieccy naukowcy badali te substancje 
                    dla kosmonautów i sportowców olimpijskich. Szukali naturalnych sposobów na zwiększenie 
                    wytrzymałości bez skutków ubocznych.
                  </p>
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <p className="text-sm text-foreground/50 uppercase tracking-wider mb-2">Kluczowe odkrycie</p>
                    <p className="font-display font-semibold text-lg">
                      "Adaptogeny zwiększają niespecyficzną odporność organizmu na stres"
                    </p>
                    <p className="text-sm text-foreground/60 mt-2">— Dr Nikolai Lazarev, 1947</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Era 3: Cosmonauts */}
            <RevealSection className="mb-32">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "hsl(var(--shroom-lavender) / 0.3)", color: "hsl(var(--shroom-purple))" }}>
                  Tajna broń kosmonautów
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Z orbity na Ziemię
                </h3>
                <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
                  Kosmonauci na stacji Mir używali adaptogenów, by radzić sobie ze stresem 
                  kosmicznym, brakiem grawitacji i ekstremalnym wysiłkiem.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "🧠", title: "Badania naukowe", desc: "Radzieccy naukowcy prowadzili intensywne badania nad adaptogenami" },
                  { icon: "💪", title: "Ekstremalne warunki", desc: "Kosmonauci potrzebowali naturalnych rozwiązań na wielomiesięczne misje" },
                  { icon: "🛡️", title: "Tradycja i nauka", desc: "Połączenie wiedzy tradycyjnej z nowoczesnymi metodami badawczymi" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-8 rounded-3xl border border-border/50 relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--secondary) / 0.5) 100%)" 
                    }}
                  >
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4 className="font-display font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </RevealSection>

            {/* Era 4: Athletes */}
            <RevealSection className="mb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "hsl(var(--shroom-coral) / 0.2)", color: "hsl(var(--shroom-coral))" }}>
                    Współczesny sport
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Elita sportowa wybiera naturę
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    Od ultramaratończyków po zawodowych e-sportowców — adaptogeny stały się 
                    tajną bronią tych, którzy szukają przewagi bez naruszania zasad fair play.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { sport: "Ultramaratony", athlete: "Żeń-szeń — korzeń stosowany od wieków w tradycyjnej medycynie", icon: "🏃" },
                      { sport: "Biohacking", athlete: "Soplówka jeżowata — grzyb znany w azjatyckiej kuchni", icon: "🧬" },
                      { sport: "Joga & Medytacja", athlete: "Ashwagandha — składnik ajurwedyjskiej tradycji", icon: "🧘" },
                      { sport: "E-sport", athlete: "Grzyby funkcjonalne — naturalne składniki", icon: "🎮" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.sport}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/30 hover:border-shroom-sage/50 transition-colors"
                      >
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <p className="font-display font-semibold">{item.sport}</p>
                          <p className="text-sm text-foreground/60">{item.athlete}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    whileInView={{ scale: [0.95, 1] }}
                    transition={{ duration: 0.8 }}
                    className="w-full aspect-square max-w-md mx-auto rounded-3xl relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(135deg, hsl(var(--shroom-coral) / 0.2) 0%, hsl(var(--shroom-gold) / 0.2) 100%)",
                      boxShadow: "0 40px 80px -20px hsl(var(--shroom-coral) / 0.2)"
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="text-8xl mb-4"
                        >
                          🏆
                        </motion.div>
                        <p className="font-display font-semibold text-lg" style={{ color: "hsl(var(--shroom-coral))" }}>
                          Naturalne składniki
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">Tradycja. Natura. Jakość.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </RevealSection>

            {/* Interactive Adaptogens Showcase */}
            <RevealSection>
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Poznaj <span style={{ color: "hsl(var(--shroom-green))" }}>adaptogeny</span> w Shroomie
                </h3>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                  Każdy składnik został wybrany na podstawie tradycji i współczesnych badań.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    name: "Soplówka jeżowata", 
                    latin: "Hericium erinaceus",
                    benefit: "Tradycja azjatycka",
                    desc: "Grzyb znany jako \"lwia grzywa\" — ceniony w chińskiej kuchni i medycynie tradycyjnej od tysięcy lat.",
                    color: "shroom-cream",
                    emoji: "🦔"
                  },
                  { 
                    name: "Żeń-szeń", 
                    latin: "Panax ginseng",
                    benefit: "Tradycja azjatycka",
                    desc: "Korzeń stosowany od tysięcy lat w tradycyjnej medycynie chińskiej i koreańskiej.",
                    color: "shroom-gold",
                    emoji: "⚡"
                  },
                  { 
                    name: "Żeń-szeń syberyjski", 
                    latin: "Eleutherococcus senticosus",
                    benefit: "Tradycja syberyjska",
                    desc: "Korzeń stosowany od wieków przez ludy Syberii. Badany przez radzieckich naukowców w XX wieku.",
                    color: "shroom-sage",
                    emoji: "🌿"
                  },
                  { 
                    name: "L-teanina", 
                    latin: "Z zielonej herbaty",
                    benefit: "Aminokwas z herbaty",
                    desc: "Naturalny aminokwas występujący w liściach herbaty. Składnik rytuału parzenia herbaty od tysięcy lat.",
                    color: "shroom-lavender",
                    emoji: "🍵"
                  },
                  { 
                    name: "Ziele damiana", 
                    latin: "Turnera diffusa",
                    benefit: "Tradycja Majów",
                    desc: "Roślina z Ameryki Środkowej, tradycyjnie używana przez Majów i Azteków w ceremoniach i napojach.",
                    color: "diva-pink",
                    emoji: "🌸"
                  },
                  { 
                    name: "Inulina", 
                    latin: "Prebiotyk",
                    benefit: "Błonnik naturalny",
                    desc: "Naturalny błonnik występujący w cykorii i innych roślinach. Stosowany jako naturalny słodzik.",
                    color: "shroom-green",
                    emoji: "🦠"
                  },
                ].map((adaptogen, index) => (
                  <motion.div
                    key={adaptogen.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    whileHover={{ y: -8 }}
                    className="group p-6 rounded-3xl border border-border/30 hover:border-shroom-sage/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{ backgroundColor: "hsl(var(--card))" }}
                  >
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ 
                        background: `radial-gradient(circle, hsl(var(--${adaptogen.color})) 0%, transparent 70%)`,
                        transform: "translate(30%, -30%)"
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{adaptogen.emoji}</span>
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: `hsl(var(--${adaptogen.color}) / 0.2)`,
                            color: `hsl(var(--${adaptogen.color === 'shroom-cream' ? 'shroom-coral' : adaptogen.color}))`
                          }}
                        >
                          {adaptogen.benefit}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-xl mb-1">{adaptogen.name}</h4>
                      <p className="text-sm text-foreground/50 italic mb-4">{adaptogen.latin}</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{adaptogen.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Interactive Quiz Section */}
        <div className="py-32 px-6 relative">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              background: "radial-gradient(ellipse at 50% 50%, hsl(var(--shroom-green)) 0%, transparent 70%)" 
            }}
          />
          <RevealSection className="relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6"
                style={{ 
                  background: "linear-gradient(135deg, hsl(var(--shroom-green) / 0.2), hsl(var(--shroom-lavender) / 0.2))",
                  boxShadow: "0 0 60px hsl(var(--shroom-green) / 0.2)"
                }}
              >
                <span className="text-4xl">🧪</span>
              </motion.div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Który <span style={{ color: "hsl(var(--shroom-green))" }}>adaptogen</span> jest dla Ciebie?
              </h3>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Odpowiedz na 5 pytań i odkryj, który Shroom najlepiej odpowiada Twojemu stylowi życia.
              </p>
            </div>
            
            <AdaptogenQuiz />
          </RevealSection>
        </div>

        {/* Closing Statement */}
        <div className="py-32 px-6">
          <RevealSection className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-8">Podsumowanie</p>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Od kosmonautów, przez sportowców olimpijskich, do{" "}
                <span style={{ color: "hsl(var(--shroom-green))" }}>Twojego codziennego dnia</span>.
              </h3>
              <p className="text-xl text-foreground/60 leading-relaxed">
                Adaptogeny to nie trend. To wiedza przekazywana przez pokolenia, 
                potwierdzona przez naukę i teraz dostępna w formie napoju, 
                który po prostu smakuje.
              </p>
            </motion.div>
          </RevealSection>
        </div>
      </section>
      {/* ===== END ADAPTOGENS SECTION ===== */}

      {/* Benefits Grid */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Dlaczego <span style={{ color: "hsl(var(--shroom-coral))" }}>Shroom</span>?
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Leaf}
              title="Naturalnie"
              description="Bez sztucznych dodatków, konserwantów ani barwników"
              delay={0}
              color="shroom-green"
            />
            <FeatureCard
              icon={Sparkles}
              title="Bez cukru"
              description="Naturalnie słodzony sokiem jabłkowym i inuliną"
              delay={0.1}
              color="shroom-gold"
            />
            <FeatureCard
              icon={Heart}
              title="Z prebiotykiem"
              description="Zawiera inulinę — naturalny błonnik z cykorii"
              delay={0.2}
              color="shroom-coral"
            />
            <FeatureCard
              icon={Brain}
              title="Funkcjonalnie"
              description="Adaptogeny i grzyby wspierające organizm"
              delay={0.3}
              color="shroom-lavender"
            />
          </div>
        </div>
      </section>

      {/* Daily Moments Section */}
      <StickyText
        label="Jakiego kontentu szukamy"
        highlight="Prawdziwe momenty."
        title="Bez stylizacji."
        description="Shroom jako część dnia. Tak po prostu. Poranna rutyna, przerwa w pracy, chwila dla siebie, spacer, moment oddechu w ciągu dnia. Lekko, naturalnie, bez presji."
        color="shroom-lavender"
      />

      {/* Day Cycle Clock Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: "hsl(var(--shroom-sage) / 0.3)", color: "hsl(var(--shroom-green))" }}
              >
                Use Case
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Cykl <span style={{ color: "hsl(var(--shroom-gold))" }}>dnia</span> ze Shroomem
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Każda pora ma swój napój. Zobacz, jak Shroom wpasowuje się w różne momenty.
              </p>
            </div>
          </RevealSection>
          
          <RevealSection>
            <DayCycleClock />
          </RevealSection>
        </div>
      </section>

      {/* Values Section - Apple-Style Sticky Scroll */}
      <StickyScrollSection />

      {/* CTA Section */}
      <section className="py-32 px-6">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Gotowy na <span style={{ color: "hsl(var(--shroom-green))" }}>współpracę</span>?
            </h2>
            <p className="text-xl text-foreground/60 mb-12">
              Dołącz do grona twórców, którzy pokazują prawdziwe momenty z Shroomem.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="mailto:kontakt@shroom.pl"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-display font-semibold text-lg transition-all duration-300"
                style={{ 
                  backgroundColor: "hsl(var(--shroom-black))",
                  color: "hsl(var(--shroom-cream))",
                  boxShadow: "0 20px 60px -15px hsl(var(--shroom-black) / 0.3)"
                }}
              >
                Skontaktuj się z nami
                <Sparkles className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/40 text-sm">
            © 2024 Shroom. The choice of feeling good.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Brief;
