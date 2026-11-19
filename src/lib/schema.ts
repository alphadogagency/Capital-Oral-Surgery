import { OFFICE_PHONE, PRACTICE, SITE_URL, absoluteUrl } from "./site";

// Structured data mirrors facts that are visible on the site. No ratings,
// reviews or clinician-review claims are marked up.
export const PRACTICE_ID = `${SITE_URL}/#practice`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const practiceSchema = {
  "@type": ["Dentist", "MedicalClinic"],
  "@id": PRACTICE_ID,
  name: PRACTICE.name,
  url: `${SITE_URL}/`,
  telephone: OFFICE_PHONE.e164,
  image: absoluteUrl("/og.png"),
  logo: absoluteUrl("/images/logo-dark.png"),
  medicalSpecialty: "Oral and Maxillofacial Surgery",
  address: {
    "@type": "PostalAddress",
    streetAddress: PRACTICE.street,
    addressLocality: PRACTICE.city,
    addressRegion: PRACTICE.region,
    postalCode: PRACTICE.postalCode,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: PRACTICE.latitude, longitude: PRACTICE.longitude },
  hasMap: PRACTICE.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: PRACTICE.serviceArea.map((name) => ({ "@type": "City", name })),
  employee: [
    { "@id": `${SITE_URL}/doctors/patrick-lucaci/#person` },
    { "@id": `${SITE_URL}/doctors/owen-lonergan/#person` },
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: PRACTICE.name,
  publisher: { "@id": PRACTICE_ID },
};

export type Crumb = { name: string; href?: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    ...(crumb.href && index < crumbs.length - 1 ? { item: absoluteUrl(crumb.href) } : {}),
  })),
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const medicalPageSchema = (page: { path: string; name: string; description: string; procedure?: string }) => ({
  "@type": "MedicalWebPage",
  "@id": `${absoluteUrl(page.path)}#webpage`,
  url: absoluteUrl(page.path),
  name: page.name,
  description: page.description,
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": PRACTICE_ID },
  ...(page.procedure ? { about: { "@type": "MedicalProcedure", name: page.procedure } } : {}),
});
