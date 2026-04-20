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
    <>
      <div className={`h-[3px] w-full ${isDiva ? "bg-white" : "bg-foreground"}`} />
      <section className={`py-16 md:py-24 ${isDiva ? "bg-diva-dark" : "bg-background"}`}>
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-10 md:mb-14">
            <p className={`font-body text-xs font-medium uppercase tracking-[0.25em] mb-3 ${isDiva ? "text-diva-pink" : "text-foreground/60"}`}>
              FAQ
            </p>
            <h2 className={`font-headline text-3xl md:text-5xl uppercase ${isDiva ? "text-white" : "text-foreground"}`}>
              Najczęstsze pytania
            </h2>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {product.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className={`border-b ${isDiva ? "border-white/15" : "border-foreground/15"} ${index === 0 ? `border-t ${isDiva ? "border-white/15" : "border-foreground/15"}` : ""}`}
                >
                  <AccordionTrigger className={`font-display text-left text-base md:text-lg font-bold uppercase tracking-wide hover:no-underline py-5 ${
                    isDiva ? "text-white hover:text-diva-pink [&>svg]:text-diva-pink" : "text-foreground"
                  }`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={`font-body text-sm md:text-base leading-relaxed pb-5 ${isDiva ? "text-white/65" : "text-foreground/70"}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFAQ;
