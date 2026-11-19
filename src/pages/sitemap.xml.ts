import type { APIRoute } from "astro";
import procedures from "../data/procedures.json";
import { doctors } from "../data/doctors";
import { absoluteUrl } from "../lib/site";

// Every indexable page, on the canonical host. Built with the site so it
// cannot drift from the real routes.
const paths = [
  "/",
  ...doctors.map((doctor) => `/doctors/${doctor.slug}/`),
  ...Object.keys(procedures).map((slug) => `/services/${slug}/`),
  "/first-visit/",
  "/surgical-instructions/",
  "/payment-plans/",
  "/dental-anxiety-and-phobia/",
  "/why-choose-our-practice/",
  "/refer-a-patient/",
  "/refer-a-patient/form/",
  "/contact-us/",
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
