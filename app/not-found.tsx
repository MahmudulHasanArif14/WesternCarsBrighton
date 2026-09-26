import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-bold text-brand-700">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 text-gray-600">
          Sorry, we couldn&apos;t find that page. Let&apos;s get you back on
          route.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <a
            href="tel:01273220220"
            className="btn bg-gray-100 text-gray-900 hover:bg-gray-200 px-6 py-3"
          >
            Call 01273 220220
          </a>
        </div>
      </div>
    </section>
  );
}
