import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, Check } from "lucide-react";
import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";

// ── Data ──────────────────────────────────────────────

type QuizAnswer = {
  text: string;
  points: { power: number; relax: number; diva: number };
};

type QuizQuestion = {
  question: string;
  emoji: string;
  answers: QuizAnswer[];
};

const questions: QuizQuestion[] = [
  {
    question: "Jak zaczyna się Twój typowy dzień?",
    emoji: "🌅",
    answers: [
      { text: "Kawą i setką tasków — grind mode ON", points: { power: 3, relax: 0, diva: 1 } },
      { text: "Spokojnie, potrzebuję chwili na rozruch", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Zależy od vibe'u — lubię spontan", points: { power: 1, relax: 1, diva: 3 } },
    ],
  },
  {
    question: "Co najbardziej Cię frustruje w ciągu dnia?",
    emoji: "😤",
    answers: [
      { text: "Brak energii gdy mam deadline", points: { power: 3, relax: 1, diva: 0 } },
      { text: "Nie mogę wyłączyć głowy", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Sztywność w sytuacjach społecznych", points: { power: 0, relax: 1, diva: 3 } },
    ],
  },
  {
    question: "Jak najchętniej spędzasz wolny czas?",
    emoji: "🎯",
    answers: [
      { text: "Sport, side-projecty, grind", points: { power: 3, relax: 0, diva: 1 } },
      { text: "Książka, spacer, oddech", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Ludzie, imprezy, events", points: { power: 1, relax: 0, diva: 3 } },
    ],
  },
  {
    question: "Czego najbardziej potrzebujesz teraz?",
    emoji: "✨",
    answers: [
      { text: "Skupienia i produktywności", points: { power: 3, relax: 0, diva: 0 } },
      { text: "Balansu i spokoju w głowie", points: { power: 0, relax: 3, diva: 0 } },
      { text: "Lepszego kontaktu z sobą i innymi", points: { power: 0, relax: 1, diva: 3 } },
    ],
  },
  {
    question: "Jaki jest Twój stosunek do kofeiny?",
    emoji: "☕",
    answers: [
      { text: "Kocham! Ale szukam czegoś zdrowszego", points: { power: 3, relax: 0, diva: 1 } },
      { text: "Unikam — zbyt mnie nakręca", points: { power: 0, relax: 3, diva: 1 } },
      { text: "Czasem tak, czasem nie", points: { power: 1, relax: 1, diva: 2 } },
    ],
  },
];

type Result = {
  key: string;
  product: string;
  emoji: string;
  slug: string;
  title: string;
  description: string;
  adaptogens: string[];
  image: string;
};

const results: Record<string, Result> = {
  power: {
    key: "power",
    product: "Shroom Power",
    emoji: "⚡",
    slug: "shroom-power",
    title: "Dla aktywnych",
    description: "Twój styl życia wymaga napoju na tempo dnia. Soplówka jeżowata + żeń-szeń + witamina C.",
    adaptogens: ["Lion's Mane", "Żeń-szeń", "Cynk", "Wit. C"],
    image: productPower,
  },
  relax: {
    key: "relax",
    product: "Shroom Relax",
    emoji: "🧘",
    slug: "shroom-relax",
    title: "Dla spokojnych",
    description: "Potrzebujesz wyciszenia. L-teanina + soplówka jeżowata — spokój bez senności.",
    adaptogens: ["L-teanina", "Lion's Mane", "Chmiel", "Cynk"],
    image: productRelax,
  },
  diva: {
    key: "diva",
    product: "Diva Social Elixir",
    emoji: "💃",
    slug: "diva",
    title: "Dla towarzyskich",
    description: "Cenisz autentyczne relacje i dobre vibes. Damiana + żeń-szeń syberyjski + brokat.",
    adaptogens: ["Damiana", "Żeń-szeń", "Cordyceps", "Brokat"],
    image: productDiva,
  },
};

// ── Progress Ring ─────────────────────────────────────

const ProgressRing = ({ step, total }: { step: number; total: number }) => {
  const size = 64;
  const stroke = 4;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const progress = ((step + 1) / total) * circ;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--border))" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          animate={{ strokeDashoffset: circ - progress }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
      <span className="absolute text-sm font-bold text-foreground">
        {step + 1}/{total}
      </span>
    </div>
  );
};

// ── Floating Particles (result) ───────────────────────

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 24 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-accent/40"
        initial={{
          x: "50%",
          y: "50%",
          opacity: 0,
          scale: 0,
        }}
        animate={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          delay: Math.random() * 0.8,
          ease: "easeOut",
        }}
      />
    ))}
  </div>
);

// ── Screens ───────────────────────────────────────────

const transition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

const QuizIntro = ({ onStart }: { onStart: () => void }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") onStart();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onStart]);

  return (
    <motion.div
      {...transition}
      className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 relative"
    >
      {/* Floating bottles background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <motion.img src={productPower} alt="" className="absolute w-32 -left-4 top-1/4" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.img src={productRelax} alt="" className="absolute w-32 -right-4 top-1/3" animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
        <motion.img src={productDiva} alt="" className="absolute w-28 left-1/4 bottom-1/4" animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="relative z-10 max-w-lg">
        <motion.span
          className="text-7xl md:text-8xl block mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          🍄
        </motion.span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.1] mb-4">
          Znajdź swojego Shrooma
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10">
          5 pytań. 30 sekund. Zero bullshitu.
        </p>
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-foreground text-background font-bold text-lg transition-colors hover:bg-foreground/90"
        >
          Zaczynamy
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        <p className="mt-6 text-sm text-muted-foreground/60">
          Naciśnij <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono">Enter</kbd> aby zacząć
        </p>
      </div>
    </motion.div>
  );
};

const QuizQuestion = ({
  question,
  step,
  total,
  onAnswer,
}: {
  question: QuizQuestion;
  step: number;
  total: number;
  onAnswer: (answer: QuizAnswer) => void;
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const select = useCallback(
    (index: number) => {
      if (selected !== null) return;
      setSelected(index);
      setTimeout(() => onAnswer(question.answers[index]), 600);
    },
    [selected, onAnswer, question.answers]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= question.answers.length) {
        select(num - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [select, question.answers.length]);

  return (
    <motion.div
      {...transition}
      className="min-h-[100dvh] flex flex-col items-center px-6 pt-safe-top pb-safe-bottom"
    >
      {/* Progress */}
      <div className="pt-8 mb-auto">
        <ProgressRing step={step} total={total} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl -mt-8">
        <motion.span
          className="text-6xl md:text-7xl mb-6 block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {question.emoji}
        </motion.span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center leading-snug mb-10">
          {question.question}
        </h2>

        {/* Answer cards */}
        <div className="w-full space-y-3 mb-8">
          {question.answers.map((answer, i) => (
            <motion.button
              key={i}
              onClick={() => select(i)}
              disabled={selected !== null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              whileHover={selected === null ? { scale: 1.02 } : {}}
              whileTap={selected === null ? { scale: 0.98 } : {}}
              className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 min-h-[56px] ${
                selected === i
                  ? "border-accent bg-accent/15 scale-[1.02]"
                  : selected !== null
                  ? "border-border/30 opacity-40"
                  : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    selected === i
                      ? "border-accent bg-accent"
                      : "border-muted-foreground/30"
                  }`}
                >
                  {selected === i ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </motion.div>
                  ) : (
                    <span className="text-xs text-muted-foreground font-mono">{i + 1}</span>
                  )}
                </div>
                <span className="font-body text-base md:text-lg text-foreground">{answer.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-8" />
    </motion.div>
  );
};

const QuizResult = ({
  result,
  scores,
  onRestart,
}: {
  result: Result;
  scores: { power: number; relax: number; diva: number };
  onRestart: () => void;
}) => {
  const maxScore = Math.max(scores.power, scores.relax, scores.diva, 1);

  const bars = [
    { label: "Power", value: scores.power, color: "bg-shroom-gold" },
    { label: "Relax", value: scores.relax, color: "bg-shroom-lavender" },
    { label: "Diva", value: scores.diva, color: "bg-shroom-peach" },
  ];

  return (
    <motion.div
      {...transition}
      className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-12 relative"
    >
      <Particles />

      <div className="relative z-10 w-full max-w-lg text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-2 font-body"
        >
          Twój adaptogen to
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2"
        >
          {result.emoji} {result.product}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg mb-8"
        >
          {result.title}
        </motion.p>

        {/* Product image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.3 }}
          className="h-56 md:h-64 mb-8"
        >
          <img src={result.image} alt={result.product} className="h-full w-auto mx-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-body text-muted-foreground leading-relaxed mb-6"
        >
          {result.description}
        </motion.p>

        {/* Adaptogens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {result.adaptogens.map((a, i) => (
            <motion.span
              key={a}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-accent/15 text-accent border border-accent/20"
            >
              {a}
            </motion.span>
          ))}
        </motion.div>

        {/* Score bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-2 mb-10 max-w-xs mx-auto"
        >
          {bars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-3 text-sm">
              <span className="w-12 text-right text-muted-foreground font-body">{bar.label}</span>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${bar.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(bar.value / maxScore) * 100}%` }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            to={`/produkt/${result.slug}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-base hover:bg-foreground/90 transition-colors"
          >
            Zobacz produkt
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-muted-foreground font-medium hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Zagraj ponownie
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ── Main Page ─────────────────────────────────────────

type Phase = "intro" | "quiz" | "result";

const QuizPage = () => {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ power: 0, relax: 0, diva: 0 });

  const startQuiz = useCallback(() => setPhase("quiz"), []);

  const handleAnswer = useCallback(
    (answer: QuizAnswer) => {
      const newScores = {
        power: scores.power + answer.points.power,
        relax: scores.relax + answer.points.relax,
        diva: scores.diva + answer.points.diva,
      };
      setScores(newScores);

      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setPhase("result");
      }
    },
    [scores, step]
  );

  const restart = useCallback(() => {
    setPhase("intro");
    setStep(0);
    setScores({ power: 0, relax: 0, diva: 0 });
  }, []);

  const getResult = (): Result => {
    const max = Math.max(scores.power, scores.relax, scores.diva);
    if (scores.power === max) return results.power;
    if (scores.relax === max) return results.relax;
    return results.diva;
  };

  return (
    <div className="bg-background text-foreground overflow-hidden relative">
      {/* Minimal nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display font-bold">:shroom</span>
        </Link>
        {phase === "quiz" && (
          <span className="text-xs text-muted-foreground/50 font-mono">
            {step + 1} / {questions.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "intro" && <QuizIntro key="intro" onStart={startQuiz} />}
        {phase === "quiz" && (
          <QuizQuestion
            key={`q-${step}`}
            question={questions[step]}
            step={step}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {phase === "result" && (
          <QuizResult
            key="result"
            result={getResult()}
            scores={scores}
            onRestart={restart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizPage;
