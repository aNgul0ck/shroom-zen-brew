import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import relaxAward from "@/assets/relax-award.png";
import relaxPour from "@/assets/relax-pour.png";
import relaxLifestyle from "@/assets/relax-lifestyle.png";
import relaxNutrition from "@/assets/relax-nutrition.png";
import { Brain, Zap, Shield, Moon, Leaf, Heart, Wine, Sparkles, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Free shipping threshold — set to 200 zł based on Stripe data analysis (AOV 172 zł).
// 2 packi (158 zł) = "almost there" upsell; 3 packi (237 zł) auto-unlocks free shipping.
export const FREE_SHIPPING_THRESHOLD = 200;

// Subscription discount — applied as % off one-time price
export const SUBSCRIPTION_DISCOUNT = 0.15;
export const SUBSCRIPTION_CADENCE_WEEKS = 4;

export interface Ingredient {
  name: string;
  dosage: string;
  benefit: string;
  icon: LucideIcon;
}

export interface Review {
  author: string;
  role: string;
  rating: number;
  text: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RoutineStep {
  time: string;
  label: string;
  description: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface PricingTier {
  quantity: number;
  label: string;
  pricePerUnit: number;
  totalPrice: number;
  savings?: string;
}

export interface QuickFact {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  /** When true, the image fills its frame edge-to-edge (no centered "product on
   *  background" treatment). Use for lifestyle photos and full-bleed shots. */
  isLifestyle?: boolean;
}

export interface OccasionMeta {
  eyebrow: string;      // e.g. "DAYTIME ENERGY"
  headline: string;     // e.g. "Energia na cały dzień"
  subtitle: string;     // e.g. "Clean energy without caffeine crash"
  replaces: string[];   // e.g. ["Kawa", "Energetyki", "Matcha", "Kombucha"]
}

export interface RitualMeta {
  bestFor: string;      // "Praca głęboka, deep focus, kreatywne sesje"
  instead: string;      // "Zamiast trzeciej kawy"
  pairsWith: string;    // "Śniadanie białkowe / lunch"
  avoid: string;        // "Późnym wieczorem"
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  /** Optional gallery — if present, ProductHero renders thumbnails. First image
   *  is shown by default; falls back to `image` if gallery is omitted. */
  gallery?: GalleryImage[];
  price: number;
  volume: string;
  isDiva: boolean;
  pricing: PricingTier[];
  benefits: BenefitItem[];
  ingredients: Ingredient[];
  routine: RoutineStep[];
  ritualMeta?: RitualMeta;
  occasion?: OccasionMeta;
  reviews: Review[];
  faqs: FAQ[];
  trustBadges: string[];
  quickFacts: QuickFact[];
  bundleWith?: string; // slug of a paired product for "Frequently bought together"
}

export const products: Product[] = [
  {
    slug: "shroom-power",
    name: "Shroom Power",
    tagline: "Twój poranny rytuał",
    description: "Funkcjonalny napój z soplówką jeżowatą i żeń-szeniem koreańskim. Bez kofeiny, bez dodanego cukru.",
    image: productPower,
    price: 79,
    volume: "330ml",
    isDiva: false,
    pricing: [
      { quantity: 6, label: "1 pack (6 szt.)", pricePerUnit: 13, totalPrice: 79 },
      { quantity: 12, label: "2 packi (12 szt.)", pricePerUnit: 13, totalPrice: 158 },
      { quantity: 18, label: "3 packi (18 szt.)", pricePerUnit: 13, totalPrice: 237, savings: "GRATIS" },
      { quantity: 24, label: "4 packi (24 szt.)", pricePerUnit: 13, totalPrice: 316, savings: "GRATIS" },
    ],
    quickFacts: [
      { icon: Sparkles, label: "Smak", value: "Cytrusowo-ziołowy" },
      { icon: Sun, label: "Pora dnia", value: "Rano i w dzień" },
      { icon: Wine, label: "Format", value: "330 ml, gazowany" },
      { icon: Zap, label: "Wysyłka", value: "24h kurierem" },
    ],
    bundleWith: "shroom-relax",
    benefits: [
      { icon: Zap, label: "Bez kofeiny", description: "Naturalne składniki botaniczne" },
      { icon: Brain, label: "Lion's Mane 500 mg", description: "Soplówka jeżowata" },
      { icon: Shield, label: "Witamina C", description: "Przyczynia się do zmniejszenia uczucia zmęczenia (EFSA)" },
      { icon: Leaf, label: "0 g dodanego cukru", description: "Naturalna słodycz z soku jabłkowego" },
    ],
    ingredients: [
      { name: "Soplówka jeżowata (Lion's Mane)", dosage: "500 mg", benefit: "Grzyb funkcjonalny z wielowiekowej tradycji azjatyckiej.", icon: Brain },
      { name: "Żeń-szeń koreański", dosage: "200 mg", benefit: "Roślina o ponad 2000-letniej tradycji w kulturze koreańskiej.", icon: Zap },
      { name: "Witamina C", dosage: "80 mg (100% RWS)", benefit: "Przyczynia się do prawidłowego funkcjonowania układu nerwowego (EFSA).", icon: Shield },
      { name: "Cynk", dosage: "10 mg (100% RWS)", benefit: "Przyczynia się do prawidłowej funkcji poznawczej (EFSA).", icon: Brain },
    ],
    routine: [
      { time: "7:00", label: "Poranek", description: "Poranny rytuał zamiast porannej kawy." },
      { time: "10:00", label: "Praca", description: "Codzienny rytuał w trakcie pracy." },
      { time: "13:00", label: "Lunch", description: "Druga butelka w środku dnia." },
      { time: "16:00", label: "Popołudnie", description: "Domknięcie dnia pracy bez kolejnej kawy." },
    ],
    ritualMeta: {
      bestFor: "Poranek, praca, popołudniowa przerwa",
      instead: "Zamiast porannej kawy lub energetyka",
      pairsWith: "Śniadanie, lunch, przerwa popołudniowa",
      avoid: "Późny wieczór (kwestia rytuału, nie składu)",
    },
    occasion: {
      eyebrow: "Poranek i dzień",
      headline: "Twój poranny rytuał",
      subtitle: "Funkcjonalny napój bez kofeiny i bez dodanego cukru.",
      replaces: ["Kawa", "Energetyki", "Matcha", "Yerba mate"],
    },
    reviews: [
      { author: "Olek R.", role: "Przedsiębiorca", rating: 5, text: "Power to mój codzienny rytuał. Pijam zamiast porannej kawy.", verified: true },
      { author: "Maja W.", role: "Studentka medycyny", rating: 5, text: "Smak orzeźwiający, zero cukru. Mój rytuał przed nauką.", verified: true },
      { author: "Tomek S.", role: "Programista", rating: 4, text: "Lubię, że nie ma kofeiny. Pijam po południu bez obaw o sen.", verified: true },
    ],
    faqs: [
      { question: "Jak smakuje Shroom Power?", answer: "Lekko ziołowy, orzeźwiający smak z nutą cytrusową. Delikatna gazacja sprawia, że pije się jak lemoniadę." },
      { question: "Czy mogę pić codziennie?", answer: "Tak, Shroom Power jest zaprojektowany do codziennego spożycia. Zalecana porcja to 1 butelka dziennie." },
      { question: "Czy zawiera kofeinę?", answer: "Nie, Shroom Power nie zawiera kofeiny. Energia pochodzi z naturalnych adaptogenów i witamin." },
      { question: "Jak przechowywać?", answer: "Przed otwarciem: w temperaturze pokojowej. Po otwarciu: w lodówce, spożyć w ciągu 24h." },
      { question: "Jaki jest czas dostawy?", answer: "Wysyłka w 24h od zamówienia. Dostawa kurierem 1-2 dni robocze. Darmowa od 200 zł." },
    ],
    trustBadges: ["Darmowa dostawa od 200 zł", "100% naturalne składniki", "Made in Poland"],
  },
  {
    slug: "shroom-relax",
    name: "Shroom Relax",
    tagline: "Twój popołudniowy i wieczorny rytuał",
    description: "Funkcjonalny napój z L-teaniną i chmielem. Rytuał wyciszenia po intensywnym dniu, bez alkoholu.",
    image: productRelax,
    gallery: [
      { src: productRelax, alt: "Shroom Relax — butelka 330ml" },
      { src: relaxAward, alt: "Shroom Relax — Best Functional Drink, World Alcohol-Free Awards 2025" },
      { src: relaxPour, alt: "Shroom Relax podany w szklance ze skórką cytryny", isLifestyle: true },
      { src: relaxLifestyle, alt: "Shroom Relax na stole w letnim ogrodzie", isLifestyle: true },
      { src: relaxNutrition, alt: "Shroom Relax — wartości odżywcze i składniki" },
    ],
    price: 79,
    volume: "330ml",
    isDiva: false,
    pricing: [
      { quantity: 6, label: "1 pack (6 szt.)", pricePerUnit: 13, totalPrice: 79 },
      { quantity: 12, label: "2 packi (12 szt.)", pricePerUnit: 13, totalPrice: 158 },
      { quantity: 18, label: "3 packi (18 szt.)", pricePerUnit: 13, totalPrice: 237, savings: "GRATIS" },
      { quantity: 24, label: "4 packi (24 szt.)", pricePerUnit: 13, totalPrice: 316, savings: "GRATIS" },
    ],
    quickFacts: [
      { icon: Sparkles, label: "Smak", value: "Miód i lawenda" },
      { icon: Moon, label: "Pora dnia", value: "Popołudnie i wieczór" },
      { icon: Wine, label: "Format", value: "330 ml · gazowany" },
      { icon: Zap, label: "Wysyłka", value: "24h kurierem" },
    ],
    bundleWith: "shroom-power",
    benefits: [
      { icon: Moon, label: "Bez alkoholu", description: "0% alkoholu, bez kaca" },
      { icon: Brain, label: "Lion's Mane 500 mg", description: "Soplówka jeżowata" },
      { icon: Leaf, label: "L-Teanina 200 mg", description: "Aminokwas z liści zielonej herbaty" },
      { icon: Heart, label: "Chmiel", description: "Tradycyjny składnik wieczornych naparów" },
    ],
    ingredients: [
      { name: "Soplówka jeżowata (Lion's Mane)", dosage: "500 mg", benefit: "Grzyb funkcjonalny z wielowiekowej tradycji azjatyckiej.", icon: Brain },
      { name: "L-Teanina", dosage: "200 mg", benefit: "Aminokwas naturalnie obecny w liściach zielonej herbaty.", icon: Moon },
      { name: "Chmiel", dosage: "150 mg", benefit: "Tradycyjny składnik wieczornych naparów w kulturze europejskiej.", icon: Leaf },
      { name: "Cynk", dosage: "10 mg (100% RWS)", benefit: "Przyczynia się do prawidłowej funkcji poznawczej (EFSA).", icon: Brain },
    ],
    routine: [
      { time: "15:00", label: "Popołudniowa pauza", description: "Moment dla siebie w środku dnia. Zamiast kolejnej kawy." },
      { time: "18:00", label: "Koniec pracy", description: "Rytuał przejścia z trybu pracy w tryb wieczoru." },
      { time: "20:00", label: "Wieczorny rytuał", description: "Kolacja, książka, serial. Twój moment well-being." },
      { time: "23:00", label: "Dobranoc", description: "Codzienny rytuał na koniec dnia. Bez alkoholu, bez kaca." },
    ],
    ritualMeta: {
      bestFor: "Popołudniowa pauza, wieczorny rytuał, czas dla siebie",
      instead: "Zamiast kolejnej kawy, lampki wina lub piwa",
      pairsWith: "Joga, kolacja, czytanie, serial",
      avoid: "Tuż przed treningiem siłowym",
    },
    occasion: {
      eyebrow: "Popołudnie · wieczór",
      headline: "Twój codzienny rytuał",
      subtitle: "Popołudniowa pauza zamiast kolejnej kawy. Wieczorny rytuał zamiast lampki wina. Bez alkoholu, bez kaca.",
      replaces: ["Piwo", "Herbata ziołowa", "CBD drinks", "Kombucha", "Wino"],
    },
    reviews: [
      { author: "Ewa K.", role: "Projektantka UX", rating: 5, text: "Relax pomaga mi wyłączyć się po intensywnym dniu. Śpię jak dziecko.", verified: true },
      { author: "Kasia M.", role: "Fizjoterapeutka", rating: 5, text: "Piję wieczorem zamiast wina. Zero alkoholu, pełen relaks.", verified: true },
      { author: "Paweł D.", role: "Manager", rating: 4, text: "Dobry smak, pomaga się wyciszyć. Kupuję w zestawie z Power.", verified: true },
    ],
    faqs: [
      { question: "Jak smakuje Shroom Relax?", answer: "Delikatny, ziołowy smak z nutą miodu i lawendy. Lekko gazowany, idealny na wieczór." },
      { question: "Czy powoduje senność?", answer: "Nie zawiera substancji nasennych. To napój funkcjonalny, nie lek." },
      { question: "Kiedy najlepiej pić?", answer: "Najlepsze efekty 1-2 godziny przed planowanym snem." },
      { question: "Czy mogę łączyć z Power?", answer: "Tak. Power w ciągu dnia, Relax popołudniami i wieczorem. Pełny rytuał od rana do nocy." },
      { question: "Jaki jest czas dostawy?", answer: "Wysyłka w 24h od zamówienia. Dostawa kurierem 1-2 dni robocze. Darmowa od 200 zł." },
    ],
    trustBadges: ["Darmowa dostawa od 200 zł", "100% naturalne składniki", "Made in Poland"],
  },
  {
    slug: "diva",
    name: "Diva",
    tagline: "Social Elixir",
    description: "Bezalkoholowe aperitivo z 13 składnikami botanicznymi i jadalnym brokatem. Celebruj bez kompromisów.",
    image: productDiva,
    price: 99,
    volume: "500ml",
    isDiva: true,
    pricing: [
      { quantity: 1, label: "1 szt.", pricePerUnit: 99, totalPrice: 99 },
      { quantity: 3, label: "3 szt.", pricePerUnit: 89, totalPrice: 267, savings: "-10%" },
      { quantity: 6, label: "6 szt.", pricePerUnit: 79, totalPrice: 474, savings: "-20%" },
    ],
    quickFacts: [
      { icon: Sparkles, label: "Smak", value: "Botaniczny, gorzki" },
      { icon: Wine, label: "Pora dnia", value: "Aperitivo" },
      { icon: Heart, label: "Format", value: "500 ml · 0% alc." },
      { icon: Zap, label: "Wysyłka", value: "24h kurierem" },
    ],
    benefits: [
      { icon: Wine, label: "Bezalkoholowe", description: "0% alkoholu" },
      { icon: Sparkles, label: "Jadalny brokat", description: "Spektakularny wygląd" },
      { icon: Leaf, label: "13 botaników", description: "Starannie dobrane" },
      { icon: Heart, label: "Żeń-szeń", description: "Naturalny adaptogen" },
    ],
    ingredients: [
      { name: "Żeń-szeń", dosage: "200 mg", benefit: "Roślina o wielowiekowej tradycji w kulturze koreańskiej.", icon: Zap },
      { name: "Składniki botaniczne (13x)", dosage: "Kompleks", benefit: "Unikalna mieszanka kwiatów, ziół i korzeni", icon: Leaf },
      { name: "Jadalny brokat", dosage: "·", benefit: "Certyfikowany do kontaktu z żywnością. Efekt wizualny.", icon: Sparkles },
      { name: "Cynk", dosage: "10mg (100% RWS)", benefit: "Przyczynia się do prawidłowej funkcji poznawczej*", icon: Brain },
    ],
    routine: [
      { time: "18:00", label: "Przygotowania", description: "Wybierz ulubiony kieliszek" },
      { time: "19:00", label: "Aperitivo", description: "Podaj Divę z lodem i plasterkiem pomarańczy" },
      { time: "21:00", label: "Impreza", description: "Baw się bez ograniczeń" },
      { time: "8:00", label: "Poranek", description: "Obudź się bez kaca. Gotowa na nowy dzień." },
    ],
    ritualMeta: {
      bestFor: "Kolacje, imprezy, randki, eventy social",
      instead: "Zamiast wina, prosecco, koktajli alkoholowych",
      pairsWith: "Lód, pomarańcza, rozmaryn, tonik",
      avoid: "Picie bez okazji — to elixir, nie codzienność",
    },
    occasion: {
      eyebrow: "Social & dinner table",
      headline: "Celebracja bez kaca",
      subtitle: "Aperitivo, które wygląda i smakuje jak drink. Bez alkoholu.",
      replaces: ["Wino", "Non-alc wine", "Cocktails", "Three Spirit", "Kin Euphorics"],
    },
    reviews: [
      { author: "Priyanka B.", role: "Software Developer", rating: 5, text: "Diva is my go-to for social events. All the fun, none of the hangover.", verified: true },
      { author: "Zuzia T.", role: "PR Manager", rating: 5, text: "Brokat robi wrażenie na każdym. Idealna do koktajli na imprezę.", verified: true },
      { author: "Ania L.", role: "Influencerka", rating: 5, text: "W końcu bezalkoholowy drink, który wygląda i smakuje luksusowo.", verified: true },
    ],
    faqs: [
      { question: "Jak smakuje Diva?", answer: "Kompleksowy, botaniczny smak z nutami cytrusów i kwiatów. Lekko gorzki, idealny jako baza do mocktaili." },
      { question: "Czy brokat jest bezpieczny?", answer: "Tak, jadalny brokat posiada certyfikat bezpieczeństwa żywności UE. Jest całkowicie bezpieczny do spożycia." },
      { question: "Jak podawać Divę?", answer: "Schłodzona, z lodem, w kieliszku do wina lub koktajlowym. Dodaj plasterek pomarańczy lub gałązkę rozmarynu." },
      { question: "Czy jest bezalkoholowa?", answer: "Tak, Diva zawiera 0% alkoholu. To pełnowartościowe aperitivo bez efektów alkoholu." },
      { question: "Jaki jest czas dostawy?", answer: "Wysyłka w 24h od zamówienia. Dostawa kurierem 1-2 dni robocze. Darmowa od 200 zł." },
    ],
    trustBadges: ["Darmowa dostawa od 200 zł", "100% naturalne składniki", "Made in Poland"],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getOtherProducts = (currentSlug: string): Product[] => {
  return products.filter((p) => p.slug !== currentSlug);
};
