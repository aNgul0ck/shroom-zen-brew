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
    question: "Jaki moment dnia opisujesz najlepiej?",
    emoji: "✨",
    answers: [
      { text: "Pracuję, mam dużo do zrobienia", points: { power: 3, relax: 0, diva: 0 } },
      { text: "Chcę zwolnić, mam wieczór dla siebie", points: { power: 0, relax: 3, diva: 0 } },
      { text: "Wychodzę, spotkanie, kolacja", points: { power: 0, relax: 1, diva: 3 } },
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
  accent: string;
};

const results: Record<string, Result> = {
  power: {
    key: "power",
    product: "Shroom Power",
    emoji: "⚡",
    slug: "shroom-power",
    title: "Dla aktywnych",
    description: "Twój poranny rytuał. Soplówka jeżowata, żeń-szeń koreański, witamina C, cynk.",
    adaptogens: ["Lion's Mane", "Żeń-szeń", "Cynk", "Wit. C"],
    image: productPower,
    accent: "bg-shroom-gold",
  },
  relax: {
    key: "relax",
    product: "Shroom Relax",
    emoji: "🧘",
    slug: "shroom-relax",
    title: "Dla spokojnych",
    description: "Twój wieczorny rytuał. L-teanina, chmiel, soplówka jeżowata. Bez alkoholu.",
    adaptogens: ["L-teanina", "Lion's Mane", "Chmiel", "Cynk"],
    image: productRelax,
    accent: "bg-shroom-green",
  },
  diva: {
    key: "diva",
    product: "Diva Social Elixir",
    emoji: "💃",
    slug: "diva",
    title: "Dla towarzyskich",
    description: "Bezalkoholowe aperitivo. 13 składników botanicznych i żeń-szeń koreański.",
    adaptogens: ["Damiana", "Żeń-szeń", "13 botaników"],
    image: productDiva,
    accent: "bg-shroom-peach",
  },
};

// ── Progress Bar ─────────────────────────────────────

const ProgressBar = ({ step, total }: { step: number; total: number }) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-xs font-semibold text-foreground/40 uppercase tracking-wider">
          Pytanie {step + 1} z {total}
        </span>
      </div>
      <div className="w-full h-[3px] bg-foreground/10">
        <motion.div
          className="h-full bg-foreground"
          animate={{ width: `${((step + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

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
      {/* Subtle floating bottles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <motion.img src={productPower} alt="" className="absolute w-32 -left-4 top-1/4" animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.img src={productRelax} alt="" className="absolute w-32 -right-4 top-1/3" animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
        <motion.img src={productDiva} alt="" className="absolute w-28 left-1/4 bottom-1/4" animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="relative z-10 max-w-lg">
        <motion.span
          className="text-6xl md:text-7xl block mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          🍄
        </motion.span>

        <p className="font-body text-xs font-medium text-foreground/40 uppercase tracking-[0.2em] mb-4">
          Quiz · 30 sekund
        </p>

        <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground leading-[1.1] mb-4">
          Znajdź swojego Shrooma
        </h1>
        <p className="font-body text-base md:text-lg text-foreground/50 mb-10 max-w-sm mx-auto">
          5 pytań. Zero bullshitu. Dopasujemy produkt do Twojego stylu życia.
        </p>

        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-display font-bold text-base hover:gap-5 transition-all duration-300"
        >
          Zaczynamy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        <p className="mt-6 text-xs text-foreground/30 font-body">
          Naciśnij <kbd className="px-2 py-0.5 bg-foreground/5 text-foreground/50 text-[11px] font-mono">Enter</kbd> aby zacząć
        </p>
      </div>
    </motion.div>
  );
};

const QuizQuestionScreen = ({
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
      className="min-h-[100dvh] flex flex-col items-center px-6 pt-24 pb-12"
    >
      {/* Progress */}
      <div className="w-full mb-12">
        <ProgressBar step={step} total={total} />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl">
        <motion.span
          className="text-5xl md:text-6xl mb-6 block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {question.emoji}
        </motion.span>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center leading-snug mb-10">
          {question.question}
        </h2>

        {/* Answer cards — sharp editorial */}
        <div className="w-full space-y-[3px]">
          {question.answers.map((answer, i) => (
            <motion.button
              key={i}
              onClick={() => select(i)}
              disabled={selected !== null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className={`group w-full p-5 md:p-6 text-left border transition-all duration-300 ${
                selected === i
                  ? "border-foreground bg-foreground/5"
                  : selected !== null
                  ? "border-foreground/5 opacity-30"
                  : "border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    selected === i
                      ? "border-foreground bg-foreground"
                      : "border-foreground/20 group-hover:border-foreground/40"
                  }`}
                >
                  {selected === i ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <Check className="w-4 h-4 text-background" />
                    </motion.div>
                  ) : (
                    <span className="text-xs text-foreground/30 font-display font-bold">{i + 1}</span>
                  )}
                </div>
                <span className="font-body text-sm md:text-base text-foreground">{answer.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
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
    { label: "Relax", value: scores.relax, color: "bg-shroom-green" },
    { label: "Diva", value: scores.diva, color: "bg-shroom-peach" },
  ];

  return (
    <motion.div
      {...transition}
      className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 relative"
    >
      <div className="relative z-10 w-full max-w-lg text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xs uppercase tracking-[0.2em] text-foreground/40 mb-3"
        >
          Twój adaptogen to
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2"
        >
          {result.product}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body text-foreground/50 text-base mb-8"
        >
          {result.title}
        </motion.p>

        {/* Product image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.3 }}
          className="h-48 md:h-64 mb-8 relative"
        >
          {/* Accent bg behind image */}
          <div className={`absolute inset-x-12 inset-y-4 ${result.accent} opacity-20`} />
          <img src={result.image} alt={result.product} className="h-full w-auto mx-auto object-contain relative z-10" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-body text-sm md:text-base text-foreground/60 leading-relaxed mb-6 max-w-md mx-auto"
        >
          {result.description}
        </motion.p>

        {/* Adaptogens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-1.5 justify-center mb-8"
        >
          {result.adaptogens.map((a, i) => (
            <motion.span
              key={a}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              className="px-3 py-1.5 text-xs font-display font-semibold bg-foreground/5 text-foreground border border-foreground/10"
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
              <span className="w-12 text-right text-foreground/40 font-display text-xs font-semibold">{bar.label}</span>
              <div className="flex-1 h-[3px] bg-foreground/5 overflow-hidden">
                <motion.div
                  className={`h-full ${bar.color}`}
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
          className="flex flex-col sm:flex-row gap-[3px] justify-center"
        >
          <Link
            to={`/produkt/${result.slug}`}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-display font-bold text-sm hover:gap-4 transition-all duration-300"
          >
            Zobacz produkt
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/10 text-foreground/50 font-display font-semibold text-sm hover:text-foreground hover:border-foreground/30 transition-all duration-300"
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
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-foreground/5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display font-bold">:shroom</span>
        </Link>
        {phase === "quiz" && (
          <span className="font-display text-xs font-semibold text-foreground/30">
            {step + 1} / {questions.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "intro" && <QuizIntro key="intro" onStart={startQuiz} />}
        {phase === "quiz" && (
          <QuizQuestionScreen
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
