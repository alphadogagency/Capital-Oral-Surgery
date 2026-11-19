const OFFICE_PHONE_DIGITS = "7855884244";

export const OFFICE_PHONE = {
  display: `(${OFFICE_PHONE_DIGITS.slice(0, 3)}) ${OFFICE_PHONE_DIGITS.slice(3, 6)}-${OFFICE_PHONE_DIGITS.slice(6)}`,
  href: `tel:+1${OFFICE_PHONE_DIGITS}`,
  e164: `+1-${OFFICE_PHONE_DIGITS.slice(0, 3)}-${OFFICE_PHONE_DIGITS.slice(3, 6)}-${OFFICE_PHONE_DIGITS.slice(6)}`,
} as const;

// Production origin. The live site and its Search Console property use the
// HTTPS non-www host; keep every canonical and schema URL on it.
export const SITE_URL = "https://capitaloralsurgerytopeka.com";

export const PRACTICE = {
  name: "Capital Oral Surgery & Dental Implants",
  shortName: "Capital Oral Surgery",
  street: "2445 SW Wanamaker Rd, Suite 101",
  city: "Topeka",
  region: "KS",
  postalCode: "66614",
  hoursDays: "Monday to Friday",
  hoursTime: "8 AM to 5 PM",
  // Coordinates from the practice's existing Google Maps embed.
  latitude: 39.02167,
  longitude: -95.76552,
  mapsUrl:
    "https://maps.google.com/?q=Capital+Oral+Surgery+2445+SW+Wanamaker+Rd+Topeka+KS+66614",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.721180211223!2d-95.76551622335283!3d39.02167337169778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87befd2776a2cc61%3A0xb03ac6f0e82600dc!2sCapital%20Oral%20Surgery%20and%20Dental%20Implants!5e0!3m2!1sen!2sus!4v1782234458445!5m2!1sen!2sus",
  // Service area as already published on the Contact Us page.
  serviceArea: ["Topeka", "Lawrence", "Manhattan", "Emporia", "Salina", "Kansas City"],
} as const;

export const SERVICE_AREA_LINE = `Serving ${PRACTICE.serviceArea.join(", ")}, and nearby communities.`;

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;
