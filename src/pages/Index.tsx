import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ComparisonSection from "@/components/ComparisonSection";
import DivaSection from "@/components/DivaSection";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shroom - Napoje z adaptogenami | Soplówka jeżowata</title>
        <meta
          name="description"
          content="Shroom to pierwszy w Polsce napój funkcjonalny z soplówką jeżowatą. Naturalne adaptogeny wspierające mózg i ciało. Bez cukru, bez sztucznych dodatków."
        />
        <meta name="keywords" content="shroom, adaptogeny, soplówka jeżowata, lion's mane, napój funkcjonalny, nootropik, wellness, zdrowy napój, diva, social elixir" />
        <link rel="canonical" href="https://shroom4you.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Products />
          <ComparisonSection />
          <DivaSection />
          <Benefits />
          <About />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
