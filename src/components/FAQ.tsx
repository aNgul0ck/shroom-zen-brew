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
    answer: "Soplówka jeżowata (Hericium erinaceus) to grzyb znany od tysięcy lat w tradycyjnej medycynie azjatyckiej. Jest składnikiem naszych napojów Shroom Power i Shroom Relax."
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
    question: "Czym różnią się Shroom Power, Shroom Relax i Diva?",
    answer: "Shroom Power zawiera soplówkę jeżowatą i żeń-szeń. Shroom Relax zawiera soplówkę jeżowatą i L-teaninę. Diva Social Elixir to osobna marka z zielem damiany i żeń-szeniem syberyjskim."
  },
  {
    question: "Czy napoje Shroom zawierają kofeinę?",
    answer: "Nie. Shroom Power, Shroom Relax i Diva Social Elixir nie zawierają kofeiny — idealny wybór dla osób unikających stymulantów."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
              FAQ
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              Masz pytania?
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Znajdź odpowiedzi na najczęściej zadawane pytania o napoje Shroom.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl px-6 bg-card/50 data-[state=open]:border-accent/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-lg py-6 hover:no-underline hover:text-accent transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

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
