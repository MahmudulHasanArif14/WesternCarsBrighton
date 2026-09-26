import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
  Phone,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";
import { SITE } from "@/lib/constants";

/* ---------------------------------------------
   Static params — one entry per blog post
   --------------------------------------------- */
export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ post: p.slug }));
}

type PageProps = {
  params: Promise<{ post: string }>;
};

/* ---------------------------------------------
   Per-post metadata
   --------------------------------------------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { post: slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = `${SITE.url}/blog/${post.slug}/`;
  const cover = COVER_IMAGES[post.slug] ?? DEFAULT_COVER;

  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: cover, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [cover],
    },
  };
}

/* ---------------------------------------------
   Cover images & content map
   --------------------------------------------- */
const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&w=2000&q=80";

const COVER_IMAGES: Record<string, string> = {
  "brighton-to-gatwick-taxi-cost":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
  "amex-stadium-taxi-guide":
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=2000&q=80",
  "brighton-taxi-ranks-guide":
    "https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&w=2000&q=80",
};

/* ---------------------------------------------
   Body content — one component per post
   --------------------------------------------- */
const CONTENT: Record<string, React.FC> = {
  "brighton-to-gatwick-taxi-cost": BrightonGatwickCost,
  "amex-stadium-taxi-guide": AmexStadiumGuide,
  "brighton-taxi-ranks-guide": BrightonTaxiRanksGuide,
};

/* ---------------------------------------------
   Page
   --------------------------------------------- */
export default async function BlogPostPage({ params }: PageProps) {
  const { post: slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Body = CONTENT[post.slug];
  const cover = COVER_IMAGES[post.slug] ?? DEFAULT_COVER;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const canonical = `${SITE.url}/blog/${post.slug}/`;

  /* BlogPosting schema */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: cover,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE.url,
    },
    publisher: {
      "@id": `${SITE.url}/#business`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    url: canonical,
    inLanguage: "en-GB",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE.url}/blog/`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ReadingProgress />

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
        <div
          className="absolute inset-0 bg-grain opacity-60"
          aria-hidden="true"
        />

        <div className="relative container-x pt-10 md:pt-14 pb-10 md:pb-14">
          <Link
            href="/blog/"
            className="animate-fade-up inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ocean-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="max-w-3xl">
            <div className="animate-fade-up animate-delay-100 flex flex-wrap items-center gap-3 mb-5">
              <span className="badge-sand">
                <Tag className="w-3 h-3" />
                Brighton travel
              </span>
            </div>

            <h1 className="animate-fade-up animate-delay-200 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-ink-900 text-balance">
              {post.title}
            </h1>

            <p className="animate-fade-up animate-delay-300 mt-5 text-lg md:text-xl text-ink-600 leading-relaxed text-pretty">
              {post.excerpt}
            </p>

            <div className="animate-fade-up animate-delay-500 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section className="bg-background">
        <div className="container-x pt-10 md:pt-14">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-card ring-1 ring-sand-100">
            <Image
              src={cover}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="py-12 md:py-20 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* Article content */}
            <div className="prose-western min-w-0">
              {Body ? <Body /> : <p>{post.excerpt}</p>}

              {/* Footer meta */}
              <div className="mt-14 pt-8 border-t border-ink-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-sand-400 flex items-center justify-center text-ink-900 font-semibold">
                    W
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      {post.author}
                    </div>
                    <div className="text-xs text-ink-500">
                      Licensed private hire since {SITE.founded}
                    </div>
                  </div>
                </div>
                <ShareButtons url={canonical} title={post.title} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {/* Quick book card */}
                <div className="card p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    Ready to book?
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    Fixed prices, 24/7 service, professional drivers across
                    Brighton &amp; Hove.
                  </p>
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full mt-4 text-sm"
                  >
                    Book Online
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE.phoneLink}
                    className="btn-ghost w-full mt-2 text-sm"
                    aria-label={`Call ${SITE.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                    {SITE.phone}
                  </a>
                </div>

                {/* Share card */}
                <div className="card p-6">
                  <h3 className="text-sm font-semibold text-ink-900 mb-3">
                    Share this article
                  </h3>
                  <ShareButtons url={canonical} title={post.title} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-sand-50/60">
          <div className="container-x">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink-900 mb-8">
                Keep reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r, i) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}/`}
                    className="group card-hover overflow-hidden animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={COVER_IMAGES[r.slug] ?? DEFAULT_COVER}
                        alt={r.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-ink-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(r.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {r.readingTime}
                        </span>
                      </div>
                      <h3 className="font-display mt-3 text-lg font-semibold text-ink-900 group-hover:text-sand-700 transition-colors text-balance">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}

/* ---------------------------------------------
   Helpers
   --------------------------------------------- */
function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

function BrightonGatwickCost() {
  return (
    <>
      <p>
        If you&apos;re flying out of Gatwick and you live in Brighton &amp;
        Hove, one of the first questions you&apos;ll ask is:{" "}
        <strong>how much is a taxi from Brighton to Gatwick?</strong> The honest
        answer is &ldquo;it depends&rdquo; — but not in a vague, hand-wavy way.
        Here&apos;s exactly what affects the price, what a fair rate looks like
        in 2026, and how to lock in a fixed quote before you travel.
      </p>

      <h2>Typical price range for Brighton → Gatwick</h2>
      <p>
        A standard saloon taxi from central Brighton to Gatwick Airport
        typically costs between <strong>£55 and £75</strong> for a pre-booked,
        fixed-price journey. Prices vary based on:
      </p>
      <ul>
        <li>
          Your exact pickup location (Hove seafront vs. Preston Park vs.
          Kemptown)
        </li>
        <li>Vehicle type (saloon, estate, or MPV for larger groups)</li>
        <li>Time of day (early-morning pickups may carry a small premium)</li>
        <li>Whether you book in advance or need a last-minute ride</li>
      </ul>

      <h2>Why pre-booked beats metered</h2>
      <p>
        Metered fares are unpredictable — traffic on the A23 can add £20+ to a
        journey. Pre-booked fixed fares with Western Cars mean you know the
        price before you get in the car. No surprises, no arguing, no meter
        anxiety.
      </p>

      <blockquote>
        A fixed fare is not just about cost — it&apos;s about arriving at the
        airport relaxed, knowing exactly what you&apos;re paying.
      </blockquote>

      <h2>What&apos;s included in a fixed Gatwick fare</h2>
      <ul>
        <li>Door-to-door pickup from your Brighton &amp; Hove address</li>
        <li>Flight tracking (for returns)</li>
        <li>60 minutes free waiting time at Gatwick arrivals</li>
        <li>All tolls and standard luggage</li>
        <li>No charge for delayed flights</li>
      </ul>

      <h2>How to get a fixed quote</h2>
      <p>
        The fastest way is to call us on{" "}
        <a href="tel:01273220220">01273 220220</a> — a real person answers 24/7.
        You can also{" "}
        <a
          href="https://westerncars.webbooker.icabbi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          book online
        </a>{" "}
        and see the price before you confirm.
      </p>
    </>
  );
}

function AmexStadiumGuide() {
  return (
    <>
      <p>
        The Amex Stadium (officially the American Express Stadium) hosts
        Brighton &amp; Hove Albion home games for around 31,800 fans — and on
        match days, the A27, A23, and Brighton station all get very busy. Here
        are your realistic transport options, ranked by convenience.
      </p>

      <h2>1. Pre-booked taxi (best for groups & families)</h2>
      <p>
        For groups of 3+, a pre-booked taxi is often the fastest and most
        comfortable option. We drop you at the stadium approach roads, avoid the
        worst of the post-match crush, and can pick you up from a pre-agreed
        spot after the final whistle.
      </p>

      <h2>2. Train to Falmer (best for solo fans)</h2>
      <p>
        Brighton station runs direct trains to Falmer on match days — usually
        every 10–15 minutes. It&apos;s cheap and avoids parking, but expect
        queues both ways, especially after a late kick-off.
      </p>

      <h2>3. Park &amp; Ride (best if you drive)</h2>
      <p>
        The club runs park &amp; ride from Mill Road and Brighton Racecourse. It
        works well but requires arriving early — and you&apos;ll still queue to
        leave.
      </p>

      <h2>4. Driving &amp; parking</h2>
      <p>
        On-site parking is limited and must be pre-booked. Residential parking
        schemes around Falmer are strictly enforced on match days.
      </p>

      <h2>Our advice for match day</h2>
      <p>
        Book your taxi at least 48 hours in advance. For post-match pickups, we
        recommend a meeting point 5–10 minutes&apos; walk from the stadium —
        it&apos;s faster than trying to get a car right to the gates.
      </p>
      <p>
        Call <a href="tel:01273220220">01273 220220</a> to arrange match-day
        transport.
      </p>
    </>
  );
}

function BrightonTaxiRanksGuide() {
  return (
    <>
      <p>
        Brighton &amp; Hove has two types of licensed vehicles:{" "}
        <strong>Hackney Carriages</strong> (black cabs, which can be hailed on
        the street or taken from a rank) and{" "}
        <strong>Private Hire Vehicles</strong> (which must be pre-booked — they
        cannot legally pick you up if you flag them down). Knowing the
        difference will save you time and money.
      </p>

      <h2>Where to find taxi ranks in Brighton</h2>
      <ul>
        <li>
          <strong>Brighton Station</strong> — the main rank, always busy at peak
          times
        </li>
        <li>
          <strong>East Street</strong> — near the Lanes and the pier
        </li>
        <li>
          <strong>Churchill Square</strong> — outside the shopping centre
        </li>
        <li>
          <strong>St Peter&apos;s Church</strong> — for Kemptown and the Level
        </li>
        <li>
          <strong>Hove Station</strong> — smaller but usually quicker than
          Brighton
        </li>
      </ul>

      <h2>Why private hire is often better</h2>
      <p>
        Brighton &amp; Hove City Council licenses thousands of private hire
        vehicles. They&apos;re typically newer, cleaner, and cheaper than a
        metered black cab — but you must book in advance. Western Cars Brighton
        operates 24/7, and our average pickup time in the city is 5–15 minutes.
      </p>

      <h2>How to spot a licensed vehicle</h2>
      <ul>
        <li>Council-issued licence plate displayed on the rear</li>
        <li>Driver badge with photo and licence number visible</li>
        <li>Vehicle registration matching the licence plate number</li>
      </ul>

      <h2>What to do if something goes wrong</h2>
      <p>
        If you believe you&apos;ve been overcharged or travelled in an
        unlicensed vehicle, report it to Brighton &amp; Hove City Council&apos;s
        licensing team. For issues with a Western Cars journey, call us directly
        on <a href="tel:01273220220">01273 220220</a> — we take complaints
        personally and always follow up.
      </p>
    </>
  );
}
