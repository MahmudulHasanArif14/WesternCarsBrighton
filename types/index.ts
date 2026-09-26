import { ReactNode } from "react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  icon: string;
  cta: string;
  features: string[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}
export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  date?: string;
}
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
}
export interface NavLink {
  name: string;
  href: string;
  children?: NavLink[];
}
export interface Stat {
  value: string;
  label: string;
  icon?: ReactNode;
}
