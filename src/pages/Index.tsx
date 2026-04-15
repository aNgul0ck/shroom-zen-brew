import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MarqueeBanner from "@/components/MarqueeBanner";
import FunctionalDrinks from "@/components/FunctionalDrinks";
import { DayCycleClock } from "@/components/DayCycleClock";
import Reviews from "@/components/Reviews";
import ComparisonSection from "@/components/ComparisonSection";
import IngredientsCarousel from "@/components/IngredientsCarousel";
import Subscriptions from "@/components/Subscriptions";
import QuizCTA from "@/components/QuizCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

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
          <TrustBar />
          <div className="ed-divider-thick" />
          <MarqueeBanner />
          <div className="ed-divider-thick" />
          <FunctionalDrinks />
          <div className="ed-divider-thick" />
          <section className="bg-[hsl(150,50%,80%)]">
            <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
              <div className="text-center mb-8">
                <p className="font-body text-xs font-medium text-foreground/50 uppercase tracking-[0.2em] mb-3">
                  Twój dzień z Shroom
                </p>
                <h2 className="ed-heading text-foreground">Kiedy pić?</h2>
              </div>
              <DayCycleClock />
            </div>
          </section>
          <div className="ed-divider-thick" />
          <Reviews />
          <div className="ed-divider-thick" />
          <ComparisonSection />
          <div className="ed-divider-thick" />
          <IngredientsCarousel />
          <div className="ed-divider-thick" />
          <Subscriptions />
          <div className="ed-divider-thick" />
          <QuizCTA />
          <div className="ed-divider-thick" />
          <Newsletter />
          <div className="ed-divider-thick" />
        </main>
        <StickyCTA />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
