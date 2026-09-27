import { Hero } from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { GENERAL_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(GENERAL_FAQS)),
        }}
      />
      <Hero />
      <TrustSignals />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <FAQ faqs={GENERAL_FAQS} title="Frequently Asked Questions" />
      <CTABanner />
    </>
  );
}
