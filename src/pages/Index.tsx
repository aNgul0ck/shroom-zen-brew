import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import IntroSection from "@/components/IntroSection";
import Products from "@/components/Products";
import BenefitsSection from "@/components/BenefitsSection";
import Reviews from "@/components/Reviews";
import DivaSection from "@/components/DivaSection";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shroom - Napoje funkcjonalne z soplówką jeżowatą</title>
        <meta
          name="description"
          content="Shroom to pierwszy w Polsce napój funkcjonalny z soplówką jeżowatą. Źródło cynku i witaminy C. Bez dodanego cukru, bez sztucznych dodatków."
        />
        <meta name="keywords" content="shroom, soplówka jeżowata, lion's mane, napój funkcjonalny, wellness, zdrowy napój, diva, social elixir, brainbliss, cynk, witamina c" />
        <link rel="canonical" href="https://shroom4you.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MarqueeBanner />
          <IntroSection />
          <Products />
          <BenefitsSection />
          <Reviews />
          <DivaSection />
          <About />
          <FAQ />
          <Disclaimer />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
