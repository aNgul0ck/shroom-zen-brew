import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductFAQ = ({ product }: Props) => {
  const isDiva = product.isDiva;

  return (
    <section className={`py-24 ${isDiva ? "bg-[#1a0a12]" : "bg-secondary/20"}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={`font-body text-sm font-medium uppercase tracking-[0.2em] mb-4 ${isDiva ? "text-diva-pink" : "text-muted-foreground"}`}>
            FAQ
          </p>
          <h2 className={`font-headline text-3xl md:text-4xl font-bold ${isDiva ? "text-white" : "text-foreground"}`}>
            Najczęstsze pytania
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {product.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={isDiva ? "border-white/10" : "border-border"}
              >
                <AccordionTrigger className={`font-display text-left text-sm font-semibold hover:no-underline ${
                  isDiva ? "text-white hover:text-diva-pink [&>svg]:text-diva-pink" : "text-foreground"
                }`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`font-body text-sm leading-relaxed ${isDiva ? "text-white/60" : "text-muted-foreground"}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFAQ;
