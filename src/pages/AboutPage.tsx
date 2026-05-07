import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutManifesto from "@/components/about/AboutManifesto";
import AboutOrigin from "@/components/about/AboutOrigin";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutFlavorProfiles from "@/components/about/AboutFlavorProfiles";
import AboutIngredients from "@/components/about/AboutIngredients";
import AboutPlanet from "@/components/about/AboutPlanet";
import AboutTeam from "@/components/about/AboutTeam";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shroom",
  url: "https://shroom4you.com",
  logo: "https://shroom4you.com/logo.png",
  foundingDate: "2020",
  founders: [
    { "@type": "Person", name: "Aga" },
    { "@type": "Person", name: "Kamila" },
  ],
  sameAs: [
    "https://instagram.com/shroom.drink",
    "https://facebook.com/shroom4you",
  ],
  description:
    "Shroom to polska marka funkcjonalnych napojów z soplówką jeżowatą, żeń-szeniem i adaptogenami. Bez alkoholu, bez dodanego cukru, bez sztucznych dodatków.",
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "O Shroomie — nasza historia, zespół i misja",
  url: "https://shroom4you.com/o-shroomie",
};

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>O Shroomie — nasza historia, zespół i misja | Shroom</title>
        <meta
          name="description"
          content="Poznaj Shroom: polską markę napojów funkcjonalnych z soplówką jeżowatą i adaptogenami. Nasza historia, zespół, składniki i zobowiązania wobec planety."
        />
        <meta name="keywords" content="shroom, o nas, nasza historia, soplówka jeżowata, lion's mane, napoje funkcjonalne polska, adaptogeny, wellness drinks, zespół shroom" />
        <link rel="canonical" href="https://shroom4you.com/o-shroomie" />
        <meta property="og:title" content="O Shroomie — nasza historia, zespół i misja" />
        <meta property="og:description" content="Polska marka napojów funkcjonalnych z soplówką jeżowatą. Poznaj nasz zespół i misję." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shroom4you.com/o-shroomie" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(aboutJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <article>
            <AboutHero />
            <div className="ed-divider-thick" />
            <AboutManifesto />
            <div className="ed-divider-thick" />
            <AboutOrigin />
            <div className="ed-divider-thick" />
            <AboutTimeline />
            <div className="ed-divider-thick" />
            <AboutFlavorProfiles />
            <div className="ed-divider-thick" />
            <AboutIngredients />
            <div className="ed-divider-thick" />
            <AboutPlanet />
            <div className="ed-divider-thick" />
            <AboutTeam />
          </article>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default AboutPage;
