import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "brighton-to-gatwick-taxi-cost",
    title: "How Much Does a Taxi from Brighton to Gatwick Airport Cost?",
    excerpt:
      "A clear breakdown of taxi fares from Brighton & Hove to Gatwick — what affects the price and how to get a fixed quote.",
    metaTitle: "Taxi from Brighton to Gatwick Cost | 2026 Guide | Western Cars",
    metaDescription:
      "How much is a taxi from Brighton to Gatwick Airport? Fixed fares, vehicle options, and what affects the price. Call 01273 220220 for a quote.",
    date: "2024-08-15",
    author: "Western Cars Brighton",
    readingTime: "6 min read",
  },
  {
    slug: "amex-stadium-taxi-guide",
    title: "Best Ways to Get to the Amex Stadium on Match Day",
    excerpt:
      "Match-day transport options for Brighton & Hove Albion fans — including why pre-booked taxis beat trains and park & ride.",
    metaTitle: "Amex Stadium Match Day Taxi Guide | Brighton Travel",
    metaDescription:
      "Getting to the Amex Stadium on match day: taxi vs train vs park & ride. Pre-book a Brighton taxi with Western Cars. Call 01273 220220.",
    date: "2024-08-10",
    author: "Western Cars Brighton",
    readingTime: "5 min read",
  },
  {
    slug: "brighton-taxi-ranks-guide",
    title: "A Guide to Brighton & Hove's Taxi Ranks and Rules",
    excerpt:
      "Where to find taxi ranks in Brighton & Hove, how licensing works, and how to spot a licensed private hire vehicle.",
    metaTitle: "Brighton & Hove Taxi Ranks Guide | Rules & Locations",
    metaDescription:
      "Where to find taxi ranks in Brighton & Hove, how licensing works, and how to book a licensed private hire cab. Call 01273 220220.",
    date: "2024-08-05",
    author: "Western Cars Brighton",
    readingTime: "7 min read",
  },
];

export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);
