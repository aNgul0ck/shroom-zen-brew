import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Czym są napoje Shroom?",
    answer: "Shroom to napoje funkcjonalne zawierające adaptogeny i grzyby funkcjonalne, takie jak soplówka jeżowata (Lion's Mane). Są źródłem cynku i witaminy C, bez dodanego cukru i sztucznych dodatków."
  },
  {
    question: "Co to jest soplówka jeżowata (Lion's Mane)?",
    answer: "Soplówka jeżowata (Hericium erinaceus) to grzyb znany od tysięcy lat w tradycyjnej medycynie azjatyckiej. Nazywany jest 'lwią grzywą' ze względu na swój charakterystyczny wygląd. Jest składnikiem naszych napojów Shroom Power i Shroom Relax."
  },
  {
    question: "Ile cukru zawierają napoje Shroom?",
    answer: "Napoje Shroom nie zawierają dodanego cukru. Są naturalnie słodzone sokiem jabłkowym i inuliną — prebiotykiem pochodzącym z cykorii."
  },
  {
    question: "Czy napoje Shroom są wegańskie?",
    answer: "Tak, wszystkie napoje Shroom są w 100% wegańskie. Nie zawierają żadnych składników pochodzenia zwierzęcego."
  },
  {
    question: "Jak przechowywać napoje Shroom?",
    answer: "Napoje Shroom najlepiej przechowywać w chłodnym miejscu. Po otwarciu należy przechowywać w lodówce i spożyć w ciągu 24 godzin."
  },
  {
    question: "Czym różnią się Shroom Power, Shroom Relax i Diva?",
    answer: "Shroom Power zawiera maczużnik bojowy i cordyceps. Shroom Relax zawiera soplówkę jeżowatą i L-teaninę. Diva Social Elixir to osobna marka z zielem damiany i żeń-szeniem syberyjskim — skierowana do osób ceniących towarzyskie chwile."
  },
  {
    question: "Gdzie mogę kupić napoje Shroom?",
    answer: "Napoje Shroom dostępne są w wybranych sklepach stacjonarnych oraz online. Sprawdź naszą stronę główną, aby znaleźć najbliższy punkt sprzedaży lub zamówić przez internet."
  },
  {
    question: "Czy napoje Shroom zawierają kofeinę?",
    answer: "Shroom Power i Shroom Relax nie zawierają kofeiny. Diva Social Elixir również jest bez kofeiny — idealny wybór dla osób unikających stymulantów."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "hsl(var(--shroom-sage) / 0.2)", color: "hsl(var(--shroom-green))" }}>
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Często zadawane <span style={{ color: "hsl(var(--shroom-green))" }}>pytania</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania o napoje Shroom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm data-[state=open]:border-shroom-sage/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg py-6 hover:no-underline hover:text-shroom-green transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Schema.org FAQ structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }} />
      </div>
    </section>
  );
};

export default FAQ;
