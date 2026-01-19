import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            The choice of feeling good.
          </h2>
          
          <p className="font-body text-lg text-foreground leading-relaxed mb-6">
            shroom products are 'designed' for your holistic wellbeing and modern lifestyle. 
            Packed with <strong>adaptogens, prebiotics, vitamins, and minerals</strong>, 
            they provide what your body truly needs.
          </p>

          <div className="border-t border-border pt-6">
            <p className="font-body text-sm text-muted-foreground italic">
              *When we say 'designed', we mean it. We applied design methodologies to create 
              a holistic, functional drinking experience that supports your nutrition, mood, 
              and overall health.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
