import {
  Truck,
  Store,
  PartyPopper,
  Wine,
  GraduationCap,
  Tag,
  type LucideIcon,
} from "lucide-react";

export const SALES_EMAIL = "sales@shroom4you.com";
export const INSTAGRAM_URL = "https://instagram.com/shroom.drink";
export const MEDIA_PACK_URL = "#"; // TODO: zastąpić finalnym linkiem (Drive / CDN) gdy Aga dostarczy

export type DistributorGroup = {
  id: string;
  title: string;
  subtitle: string;
  bg: string; // tailwind class
  items: { name: string; region?: string }[];
};

export const distributorGroups: DistributorGroup[] = [
  {
    id: "horeca",
    title: "HoReCa",
    subtitle: "Polska — kawiarnie, restauracje, lokale",
    bg: "bg-shroom-cream",
    items: [
      { name: "Red Fast", region: "Warszawa" },
      { name: "Merynos", region: "Praga Południe, Truskawa, Vintage Collective" },
      { name: "Farutex", region: "Cała Polska" },
    ],
  },
  {
    id: "retail",
    title: "Sklepy i hurtownia",
    subtitle: "Polska — retail i e-commerce",
    bg: "bg-shroom-peach",
    items: [
      { name: "EcoVital", region: "Hurtownia ogólnopolska" },
      { name: "Żabka", region: "Sieć ogólnopolska" },
      { name: "Frisco", region: "E-commerce" },
      { name: "Organik", region: "Sklepy stacjonarne" },
    ],
  },
  {
    id: "office",
    title: "Dostawy do biur",
    subtitle: "Polska — B2B office",
    bg: "bg-shroom-sage",
    items: [{ name: "Coffee Desk", region: "Własna oferta B2B" }],
  },
  {
    id: "international",
    title: "Zagranica",
    subtitle: "Europa — partnerzy międzynarodowi",
    bg: "bg-shroom-cream",
    items: [
      { name: "Czechy" },
      { name: "Niemcy" },
      { name: "Francja" },
      { name: "Islandia" },
      { name: "Dania", region: "Real Drinks" },
      { name: "Węgry", region: "Kawiarnia specialty (via Coffee Desk)" },
    ],
  },
];

export const presenceCountries = ["Polska", "Czechy", "Niemcy", "Francja", "Islandia", "Dania", "Węgry"];

export type B2bOffer = {
  icon: LucideIcon;
  title: string;
  desc: string;
  subject: string;
};

export const b2bOffers: B2bOffer[] = [
  {
    icon: Truck,
    title: "Dystrybucja",
    desc: "Zostań dystrybutorem Shrooma w swoim regionie.",
    subject: "Zapytanie: Dystrybucja",
  },
  {
    icon: Store,
    title: "Zamówienie do lokalu",
    desc: "Zamów bezpośrednio ze zniżką 25% dla partnerów.",
    subject: "Zapytanie: Zamówienie do lokalu",
  },
  {
    icon: PartyPopper,
    title: "Event / pop-up",
    desc: "Shroom na Twoim evencie — specjalne ceny eventowe.",
    subject: "Zapytanie: Event",
  },
  {
    icon: Wine,
    title: "Bar bezalkoholowy",
    desc: "Adaptogenowy bar na Twoim wydarzeniu.",
    subject: "Zapytanie: Bar bezalkoholowy",
  },
  {
    icon: GraduationCap,
    title: "Warsztaty",
    desc: "Warsztaty o adaptogenach dla Twoich gości.",
    subject: "Zapytanie: Warsztaty",
  },
  {
    icon: Tag,
    title: "Personalizowane etykiety",
    desc: "Twoje logo na naszej butelce.",
    subject: "Zapytanie: Personalizowane etykiety",
  },
];

export const trustedLogos = ["Żabka", "Organik", "Frisco", "Coffee Desk"];
