import { FAQ, Service } from "@/types";
import { SITE } from "./constants";

const organizationId = `${SITE.url}/#organization`;
const businessId = `${SITE.url}/#business`;
const websiteId = `${SITE.url}/#website`;

/** Business identity shared by every route through the root layout. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE.name,
      legalName: SITE.legalName,
      url: `${SITE.url}/`,
      logo: `${SITE.url}/images/logo.png`,
      sameAs: [SITE.social.googleBusiness, SITE.social.facebook],
    },
    {
      "@type": "TaxiService",
      "@id": businessId,
      name: SITE.name,
      url: `${SITE.url}/`,
      description:
        "Taxi and private hire services in Brighton and Hove, including local journeys and airport transfers.",
      telephone: "+441273220220",
      email: SITE.email,
      image: `${SITE.url}/images/hero.webp`,
      parentOrganization: { "@id": organizationId },
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        postalCode: SITE.address.postcode,
        addressCountry: SITE.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lng,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: [
        { "@type": "City", name: "Brighton" },
        { "@type": "City", name: "Hove" },
        { "@type": "AdministrativeArea", name: "East Sussex" },
        { "@type": "AdministrativeArea", name: "West Sussex" },
      ],
      serviceType: [
        "Taxi service",
        "Private hire",
        "Airport transfers",
        "Local journeys",
        "Corporate travel",
        "Wheelchair-accessible transport",
      ],
      sameAs: [SITE.social.googleBusiness, SITE.social.facebook],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${SITE.url}/`,
      name: SITE.name,
      publisher: { "@id": organizationId },
      inLanguage: "en-GB",
    },
  ],
};

export const jsonLdString = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const homePageSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#webpage`,
      url: `${SITE.url}/`,
      name: "Taxi and Private Hire in Brighton and Hove | Western Cars Brighton",
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      inLanguage: "en-GB",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      isPartOf: { "@id": `${SITE.url}/#webpage` },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
});

export const servicePageSchema = (service: Service) => {
  const pageUrl = `${SITE.url}/${service.slug}/`;
  const pageId = `${pageUrl}#webpage`;
  const breadcrumbItems = [
    { name: "Home", url: `${SITE.url}/` },
    ...(service.slug === "gatwick-airport-taxi-brighton"
      ? [
          {
            name: "Airport Transfers",
            url: `${SITE.url}/airport-transfers-brighton/`,
          },
        ]
      : []),
    { name: service.shortTitle, url: pageUrl },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.shortTitle,
        areaServed: { "@type": "City", name: "Brighton and Hove" },
        provider: { "@id": businessId },
        url: pageUrl,
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: service.title,
        isPartOf: { "@id": websiteId },
        about: { "@id": `${pageUrl}#service` },
        inLanguage: "en-GB",
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": pageId },
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    ],
  };
};
