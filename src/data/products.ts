import productPower from "@/assets/product-power.png";
import productRelax from "@/assets/product-relax.png";
import productDiva from "@/assets/product-diva.png";
import { Brain, Zap, Shield, Moon, Leaf, Heart, Wine, Sparkles, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  volume: string;
  isDiva: boolean;
  pricing: PricingTier[];
  benefits: BenefitItem[];
  ingredients: Ingredient[];
  routine: RoutineStep[];
  reviews: Review[];
  faqs: FAQ[];
  trustBadges: string[];
}

export const products: Product[] = [
  {
    slug: "shroom-power",
    name: "Shroom Power",
    tagline: "Energia na cały dzień",
    description: "Funkcjonalny napój z soplówką jeżowatą i żeń-szeniem. Naturalna energia bez crashu kofeinowego.",
    image: productPower,
    price: 89,
    volume: "330ml",
    isDiva: false,
    pricing: [
      { quantity: 1, label: "1 szt.", pricePerUnit: 89, totalPrice: 89 },
      { quantity: 3, label: "3 szt.", pricePerUnit: 79, totalPrice: 237, savings: "-11%" },
      { quantity: 6, label: "6 szt.", pricePerUnit: 69, totalPrice: 414, savings: "-22%" },
    ],
    benefits: [
      { icon: Zap, label: "Energia bez crashu", description: "Naturalna witalność" },
      { icon: Brain, label: "Lion's Mane 500mg", description: "Soplówka jeżowata" },
      { icon: Shield, label: "Witamina C", description: "Układ nerwowy*" },
      { icon: Leaf, label: "0g cukru", description: "Bez kompromisów" },
    ],
    ingredients: [
      { name: "Soplówka jeżowata (Lion's Mane)", dosage: "500mg", benefit: "Tradycyjnie stosowana w celu wsparcia funkcji poznawczych", icon: Brain },
      { name: "Żeń-szeń syberyjski", dosage: "200mg", benefit: "Tradycyjnie stosowany jako adaptogen", icon: Zap },
      { name: "Witamina C", dosage: "80mg (100% RWS)", benefit: "Przyczynia się do prawidłowego funkcjonowania układu nerwowego*", icon: Shield },
      { name: "Cynk", dosage: "10mg (100% RWS)", benefit: "Przyczynia się do prawidłowej funkcji poznawczej*", icon: Brain },
    ],
    routine: [
      { time: "7:00", label: "Poranek", description: "Sięgnij po Shroom Power zamiast kawy" },
      { time: "9:00", label: "Flow state", description: "Poczuj naturalną energię i skupienie" },
      { time: "14:00", label: "Bez crashu", description: "Stabilna energia przez cały dzień" },
      { time: "18:00", label: "Wieczór", description: "Spokojne wyjście z energii — brak problemów z zasypianiem" },
    ],
    reviews: [
      { author: "Olek R.", role: "Przedsiębiorca", rating: 5, text: "Power to mój codzienny rytuał. Skupienie i energia bez nerwowości kawy.", verified: true },
      { author: "Maja W.", role: "Studentka medycyny", rating: 5, text: "Piję przed nauką — czuję różnicę w koncentracji. Zero cukru to bonus!", verified: true },
      { author: "Tomek S.", role: "Programista", rating: 4, text: "Zamiennik kawy, którego szukałem. Smak mógłby być intensywniejszy.", verified: true },
    ],
    faqs: [
      { question: "Jak smakuje Shroom Power?", answer: "Lekko ziołowy, orzeźwiający smak z nutą cytrusową. Delikatna gazacja sprawia, że pije się jak lemoniadę." },
      { question: "Czy mogę pić codziennie?", answer: "Tak, Shroom Power jest zaprojektowany do codziennego spożycia. Zalecana porcja to 1 butelka dziennie." },
      { question: "Czy zawiera kofeinę?", answer: "Nie, Shroom Power nie zawiera kofeiny. Energia pochodzi z naturalnych adaptogenów i witamin." },
      { question: "Jak przechowywać?", answer: "Przed otwarciem: w temperaturze pokojowej. Po otwarciu: w lodówce, spożyć w ciągu 24h." },
      { question: "Jaki jest czas dostawy?", answer: "Wysyłka w 24h od zamówienia. Dostawa kurierem 1-2 dni robocze. Darmowa od 99 zł." },
    ],
    trustBadges: ["Darmowa dostawa od 99 zł", "100% naturalne składniki", "Made in Poland"],
  },
  {
    slug: "shroom-relax",
    name: "Shroom Relax",
    tagline: "Spokój i regeneracja",
    description: "Funkcjonalny napój z L-teaniną i chmielem. Wyciszenie po intensywnym dniu bez senności.",
    image: productRelax,
    price: 89,
    volume: "330ml",
    isDiva: false,
    pricing: [
      { quantity: 1, label: "1 szt.", pricePerUnit: 89, totalPrice: 89 },
      { quantity: 3, label: "3 szt.", pricePerUnit: 79, totalPrice: 237, savings: "-11%" },
      { quantity: 6, label: "6 szt.", pricePerUnit: 69, totalPrice: 414, savings: "-22%" },
    ],
    benefits: [
      { icon: Moon, label: "Spokój bez senności", description: "Naturalne wyciszenie" },
      { icon: Brain, label: "Lion's Mane 500mg", description: "Soplówka jeżowata" },
      { icon: Leaf, label: "L-Teanina", description: "Aminokwas z zielonej herbaty" },
      { icon: Heart, label: "Chmiel", description: "Tradycyjne wsparcie snu" },
    ],
    ingredients: [
      { name: "Soplówka jeżowata (Lion's Mane)", dosage: "500mg", benefit: "Tradycyjnie stosowana w celu wsparcia regeneracji", icon: Brain },
      { name: "L-Teanina", dosage: "200mg", benefit: "Aminokwas naturalnie obecny w zielonej herbacie", icon: Moon },
      { name: "Chmiel", dosage: "150mg", benefit: "Tradycyjnie stosowany do wsparcia relaksacji", icon: Leaf },
      { name: "Cynk", dosage: "10mg (100% RWS)", benefit: "Przyczynia się do prawidłowej funkcji poznawczej*", icon: Brain },
    ],
    routine: [
      { time: "18:00", label: "Po pracy", description: "Zakończ dzień i przejdź w tryb relaksu" },
      { time: "19:00", label: "Shroom Relax", description: "Sięgnij po Relax — poczuj spokój" },
      { time: "21:00", label: "Wyciszenie", description: "Naturalne przygotowanie do snu" },
      { time: "23:00", label: "Sen", description: "Głęboka, regeneracyjna noc" },
    ],
    reviews: [
      { author: "Ewa K.", role: "Projektantka UX", rating: 5, text: "Relax pomaga mi wyłączyć się po intensywnym dniu. Śpię jak dziecko.", verified: true },
      { author: "Kasia M.", role: "Fizjoterapeutka", rating: 5, text: "Piję wieczorem zamiast wina. Zero alkoholu, pełen relaks.", verified: true },
      { author: "Paweł D.", role: "Manager", rating: 4, text: "Dobry smak, pomaga się wyciszyć. Kupuję w zestawie z Power.", verified: true },
    ],
    faqs: [
      { question: "Jak smakuje Shroom Relax?", answer: "Delikatny, ziołowy smak z nutą miodu i lawendy. Lekko gazowany, idealny na wieczór." },
      { question: "Czy powoduje senność?", answer: "Nie bezpośrednio. Relax wspiera naturalne wyciszenie organizmu, ale nie wywołuje nagłej senności." },
      { question: "Kiedy najlepiej pić?", answer: "Najlepsze efekty 1-2 godziny przed planowanym snem." },
      { question: "Czy mogę łączyć z Power?", answer: "Tak! Power rano, Relax wieczorem — to pełny cykl dnia i nocy." },
      { question: "Jaki jest czas dostawy?", answer: "Wysyłka w 24h od zamówienia. Dostawa kurierem 1-2 dni robocze. Darmowa od 99 zł." },
    ],
    trustBadges: ["Darmowa dostawa od 99 zł", "100% naturalne składniki", "Made in Poland"],
  },
  {
    slug: "diva",
    name: "Diva",
    tagline: "Social Elixir",
    description: "Bezalkoholowe aperitivo z 13 składnikami botanicznymi i jadalnym brokatem. Celebruj bez kompromisów.",
    image: productDiva,
    price: 112,
    volume: "500ml",
    isDiva: true,
    pricing: [
      { quantity: 1, label: "1 szt.", pricePerUnit: 112, totalPrice: 112 },
      { quantity: 3, label: "3 szt.", pricePerUnit: 99, totalPrice: 297, savings: "-12%" },
      { quantity: 6, label: "6 szt.", pricePerUnit: 89, totalPrice: 534, savings: "-21%" },
    ],
    benefits: [
      { icon: Wine, label: "Bezalkoholowe", description: "0% alkoholu" },
      { icon: Sparkles, label: "Jadalny brokat", description: "Spektakularny wygląd" },
      { icon: Leaf, label: "13 botaników", description: "Starannie dobrane" },
      { icon: Heart, label: "Żeń-szeń", description: "Naturalny adaptogen" },
    ],
    ingredients: [
      { name: "Żeń-szeń", dosage: "200mg", benefit: "Tradycyjnie stosowany jako adaptogen wspierający witalność", icon: Zap },
      { name: "Składniki botaniczne (13x)", dosage: "Kompleks", benefit: "Unikalna mieszanka kwiatów, ziół i korzeni", icon: Leaf },
      { name: "Jadalny brokat", dosage: "—", benefit: "Certyfikowany do kontaktu z żywnością — efekt wizualny", icon: Sparkles },
      { name: "Cynk", dosage: "10mg (100% RWS)", benefit: "Przyczynia się do prawidłowej funkcji poznawczej*", icon: Brain },
    ],
    routine: [
      { time: "18:00", label: "Przygotowania", description: "Wybierz ulubiony kieliszek" },
      { time: "19:00", label: "Aperitivo", description: "Podaj Divę z lodem i plasterkiem pomarańczy" },
      { time: "21:00", label: "Impreza", description: "Baw się bez ograniczeń" },
      { time: "8:00", label: "Poranek", description: "Obudź się bez kaca — gotowa na nowy dzień" },
    ],
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
      { question: "Jaki jest czas dostawy?", answer: "Wysyłka w 24h od zamówienia. Dostawa kurierem 1-2 dni robocze. Darmowa od 99 zł." },
    ],
    trustBadges: ["Darmowa dostawa od 99 zł", "100% naturalne składniki", "Made in Poland"],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getOtherProducts = (currentSlug: string): Product[] => {
  return products.filter((p) => p.slug !== currentSlug);
};
