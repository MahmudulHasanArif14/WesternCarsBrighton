import { Hero } from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { GENERAL_FAQS } from "@/lib/faqs";
import { homePageSchema, jsonLdString } from "@/lib/schema";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(homePageSchema(GENERAL_FAQS)),
        }}
      />
      <Hero />
      <Reveal>
        <TrustSignals />
      </Reveal>
      <Reveal delay={60}>
        <ServicesGrid />
      </Reveal>
      <Reveal delay={40}>
        <WhyChooseUs />
      </Reveal>
      <Reveal delay={40}>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQ faqs={GENERAL_FAQS} title="Frequently Asked Questions" />
      </Reveal>
      <Reveal delay={50}>
        <CTABanner />
      </Reveal>
    </>
  );
}
