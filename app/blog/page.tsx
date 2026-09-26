import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Brighton Taxi Tips & Travel Guides | Western Cars",
  description:
    "Travel guides, airport transfer advice, and local tips for Brighton & Hove. Written by Western Cars Brighton. Call 01273 220220 to book.",
  alternates: { canonical: `${SITE.url}/blog/` },
  openGraph: {
    title: "Blog | Brighton Taxi Tips & Travel Guides",
    description:
      "Travel guides, airport transfer advice, and local tips for Brighton & Hove.",
    url: `${SITE.url}/blog/`,
    type: "website",
  },
};

const COVER_IMAGES: Record<string, string> = {
  "brighton-to-gatwick-taxi-cost":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  "amex-stadium-taxi-guide":
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
  "brighton-taxi-ranks-guide":
    "https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&w=1200&q=80",
};

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
        <div
          className="absolute inset-0 bg-grain opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sand-300/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container-x py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand-200 rounded-full px-4 py-1.5 text-sm font-medium text-ink-700 mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-sand-600" />
              Brighton taxi tips &amp; travel guides
            </span>

            <h1 className="animate-fade-up animate-delay-100 font-display text-4xl md:text-5xl font-semibold leading-tight text-ink-900 text-balance">
              Guides from the road
            </h1>
            <p className="animate-fade-up animate-delay-200 mt-5 text-lg text-ink-600 leading-relaxed max-w-2xl text-pretty">
              Practical advice on Brighton &amp; Hove taxis, airport transfers,
              match-day travel, and getting around Sussex — written by drivers
              who do it every day.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container-x">
            <Link
              href={`/blog/${featured.slug}/`}
              className="group block card-hover overflow-hidden animate-fade-up"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                  <Image
                    src={
                      COVER_IMAGES[featured.slug] ??
                      COVER_IMAGES["brighton-taxi-ranks-guide"]
                    }
                    alt={featured.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <span className="absolute top-5 left-5 badge-sand bg-white/95 backdrop-blur-sm">
                    Featured
                  </span>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(featured.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h2 className="font-display mt-4 text-2xl md:text-3xl font-semibold text-ink-900 group-hover:text-sand-700 transition-colors text-balance">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-ink-600 leading-relaxed text-pretty">
                    {featured.excerpt}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sand-700">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* POSTS GRID */}
      {rest.length > 0 && (
        <section className="py-16 md:py-24 bg-sand-50/60">
          <div className="container-x">
            <SectionHeading
              title="More from the blog"
              subtitle="Every post is written to help you plan a better Brighton journey."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {rest.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group card-hover overflow-hidden animate-fade-up flex flex-col"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={
                        COVER_IMAGES[post.slug] ??
                        COVER_IMAGES["brighton-taxi-ranks-guide"]
                      }
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-ink-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="font-display mt-3 text-lg font-semibold text-ink-900 group-hover:text-sand-700 transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sand-700">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
