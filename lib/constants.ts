import type { NavLink } from "@/types";

export const SITE = {
  name: "Western Cars Brighton",
  legalName: "Western Cars Private Hire Limited",
  url: "https://www.westerncarsbrighton.co.uk",
  phone: "01273 220220",
  phoneLink: "tel:01273220220",
  email: "info@westerncarsbrighton.co.uk",
  address: {
    street: "Mocatta House, Trafalgar Place",
    city: "Brighton",
    postcode: "BN1 4DU",
    country: "GB",
  },
  geo: { lat: 50.829443861529796, lng: -0.1398401980336637 },
  founded: 2007,
  companyNumber: "09243357",
  bookingUrl: "https://westerncars.webbooker.icabbi.com",
  social: {
    facebook: "https://www.facebook.com/westerncarsbrighton/?locale=en_GB",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Airport Transfers", href: "/airport-transfers-brighton/" },
  { name: "Corporate", href: "/corporate-taxi-accounts-brighton/" },
  { name: "Event Hire", href: "/event-taxi-hire-brighton/" },
  { name: "Accessible", href: "/wheelchair-accessible-taxi-brighton/" },
  { name: "Local", href: "/local-taxi-brighton-hove/" },
  { name: "About", href: "/about-us/" },
  { name: "Reviews", href: "/reviews/" },
];

export const STATS = [
  { value: "2007", label: "Founded" },
  { value: "24/7", label: "Availability" },
  { value: "★★★★★", label: "Rated Service" },
  { value: "BN1", label: "Local Base" },
] as const;
