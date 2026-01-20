import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import IntroSection from "@/components/IntroSection";
import HowItWorks from "@/components/HowItWorks";
import FunctionalDrinks from "@/components/FunctionalDrinks";
import DivaSection from "@/components/DivaSection";
import MocktailRecipes from "@/components/MocktailRecipes";
import Subscriptions from "@/components/Subscriptions";
import Reviews from "@/components/Reviews";
import IngredientsCarousel from "@/components/IngredientsCarousel";
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
          <HowItWorks />
          <FunctionalDrinks />
          <DivaSection />
          <MocktailRecipes />
          <Subscriptions />
          <Reviews />
          <IngredientsCarousel />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
