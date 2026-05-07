import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import B2bHero from "@/components/b2b/B2bHero";
import B2bDistributors from "@/components/b2b/B2bDistributors";
import B2bMap from "@/components/b2b/B2bMap";
import B2bProcess from "@/components/b2b/B2bProcess";
import B2bSocialProof from "@/components/b2b/B2bSocialProof";
import B2bOffers from "@/components/b2b/B2bOffers";
import B2bCollab from "@/components/b2b/B2bCollab";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shroom",
  url: "https://shroom4you.com",
  email: "sales@shroom4you.com",
  description:
    "Shroom — funkcjonalne napoje z soplówką jeżowatą i adaptogenami. Partnerstwa B2B: dystrybucja, HoReCa, eventy, biura.",
  areaServed: ["PL", "CZ", "DE", "FR", "IS", "DK", "HU"],
};

const B2bPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>B2B — Zostań partnerem Shrooma | Dystrybucja, HoReCa, Eventy</title>
        <meta
          name="description"
          content="Współpraca B2B z marką Shroom: dystrybucja, sprzedaż do lokali, eventy, bary bezalkoholowe i media pack. Aktywni w 7 krajach Europy."
        />
        <meta name="keywords" content="shroom b2b, dystrybucja napojów funkcjonalnych, horeca, partner shroom, adaptogeny hurt, napoje do biur, event drinks" />
        <link rel="canonical" href="https://shroom4you.com/b2b" />
        <meta property="og:title" content="B2B — Zostań partnerem Shrooma" />
        <meta property="og:description" content="Dystrybucja, HoReCa, eventy i media pack — wszystko czego potrzebujesz, żeby pracować z Shroomem." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shroom4you.com/b2b" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <article>
            <B2bHero />
            <B2bDistributors />
            <B2bMap />
            <B2bProcess />
            <B2bSocialProof />
            <B2bOffers />
            <B2bCollab />
          </article>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default B2bPage;
