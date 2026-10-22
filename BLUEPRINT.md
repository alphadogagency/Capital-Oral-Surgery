# Capital Oral Surgery — Current Design Blueprint

## Approved design

On October 20, 2026, Bryan approved the CIDWP-inspired homepage and asked to carry the design across all remaining pages. Reference: https://cidwp-new.pages.dev/. On October 22, Bryan requested the September 2026 branding guide while retaining the layout, copy, and photographs. Work Sans is temporarily retained at Bryan's request, pending the guide's licensed webfonts.

## Shared system

- Use `Layout`, `Header`, and `Footer` on every content page.
- `site.css` supplies locally hosted Work Sans, spacious sections, pill actions, and the shared header/footer. The typeface files and license live in `public/fonts/`.
- The fixed header overlays the homepage hero, then becomes Capital Forest when scrolled. Interior pages start with a solid Capital Forest header. Both header and footer use the guide's updated light wordmark.
- Desktop navigation begins at 1280px. Below that, use the existing disclosure menu, with scrollable content, Escape dismissal, and automatic closing after choosing a link.
- Interior content clears the header: 110px desktop, 94px tablet, 84px phone.
- Keep a keyboard skip link, visible focus states, anchor offsets, and reduced-motion support.
- Use Work Sans light headings and regular body copy, sentence-case labels, and restrained letter spacing. Existing wording and capitalization in source content remain authoritative.
- Use square photographs and subtle bordered panels. Buttons are pills; form fields are square. Do not alter the referral tooth shapes or selected control states.

## Brand palette

The values in `src/lib/theme.config.ts` and `src/styles/global.css` are authoritative:

- Espresso: `#1e1b18`
- Capital Forest: `#3e5a40`
- Linen White: `#f8f6f1`
- Wheat: `#c6ae82`
- Terracotta: `#b4622f`

Use the existing semantic tokens. Legacy utility names such as `bg-midnight` and `bg-aqua-soft` now resolve to forest or warm linen. Keep espresso text on wheat, linen text on forest, and forest headings on linen. Use derived neutral shades for borders and muted text, and darkened terracotta for small accent text. The updated `/images/logo-light.png` and `/images/logo-dark.png` are original image assets extracted from the supplied PDF, including transparency and surrounding space.

The guide specifies Trajan Pro 3 Light and Futura PT Light. Keep the existing locally hosted Work Sans until an Adobe Fonts web-project link or licensed webfont files are provided.

## Homepage

Order: Header, Hero, MeetTeam, SpecializedCare, Procedures, Testimonial, CallToAction, Footer.

- Full-width office-photo hero with a restrained dark overlay, large headline, and pill actions.
- Forest band for the existing statistics and review.
- Pale team section with paired portraits and introductory heading.
- Full-width split photograph and care introduction.
- Square, numbered procedure tiles.
- Wheat testimonial band with espresso text.
- Pale appointment section with the existing form.

Preserve anchors `about`, `team`, `procedures`, `testimonial`, and `appointment`.

## Interior pages

`interior.css` extends the shared design without replacing the page content.

- Warm linen split hero: readable copy on the left and Capital's clinical photograph on the right. Stack copy before the photograph below 900px.
- Service pages use one reading column and a sticky category sidebar above 1100px. The sidebar clears the fixed header. On narrower screens, the shared navigation remains available.
- Treatment details use roomy sections, simple numbered panels, pale information bands, and wheat consultation calls to action with forest buttons.
- Doctor profiles preserve the supplied portraits, credentials, biographies, affiliations, and recognitions.
- Patient-resource pages preserve all preparation and surgical instructions. Long sections remain readable and reveal when they enter the viewport.
- Contact retains its address, office hours, directions/map, and request form.
- Referrals retain every field, radio group, tooth selector, attachment toggle, and existing endpoint.
- Payment Plans retains the Cherry embed and existing practice configuration, styled with Capital's palette and Work Sans.

Static office photographs use Astro's responsive WebP output. Keep image descriptions and supplied assets intact.

## Verification and scope

Run `npx astro check` and `npm run build`. Inspect representative service, doctor, resource, contact, referral, and financing pages at desktop and phone widths. Check all routes for overflow, internal links, and missing assets. For design-only changes, compare rendered copy and form fields with a saved baseline.

Preview locally unless publishing is requested. The homepage/contact forms are static and the referral endpoint is a stub; preserve this behavior until a production integration is explicitly requested.
