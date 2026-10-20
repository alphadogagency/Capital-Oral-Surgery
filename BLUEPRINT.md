# Capital Oral Surgery — Current Design Blueprint

## Approved design

On October 20, 2026, Bryan approved the CIDWP-inspired homepage and asked to carry the design across all remaining pages. Reference: https://cidwp-new.pages.dev/. Capital's current copy, logo, photography, and brand colors remain unchanged.

## Shared system

- Use `Layout`, `Header`, and `Footer` on every content page.
- `site.css` supplies locally hosted Work Sans, spacious sections, pill actions, and the shared header/footer. The typeface files and license live in `public/fonts/`.
- The fixed header overlays the homepage hero, then becomes Midnight Blue when scrolled. Interior pages start with a solid Midnight Blue header to support Capital's unchanged white wordmark.
- Desktop navigation begins at 1280px. Below that, use the existing disclosure menu, with scrollable content, Escape dismissal, and automatic closing after choosing a link.
- Interior content clears the header: 110px desktop, 94px tablet, 84px phone.
- Keep a keyboard skip link, visible focus states, anchor offsets, and reduced-motion support.
- Use Work Sans light headings and regular body copy, sentence-case labels, and restrained letter spacing. Existing wording and capitalization in source content remain authoritative.
- Use square photographs and subtle bordered panels. Buttons are pills; form fields are square. Do not alter the referral tooth shapes or selected control states.

## Brand palette

The values in `src/lib/theme.config.ts` and `src/styles/global.css` are authoritative:

- Slate Ink: `#1b2733`
- Linen White: `#f4f4f4`
- Pale Sky: `#eaf5fa`
- Midnight Blue: `#0e3e73`
- Capital Blue: `#2c5cb1`
- Coastal Teal: `#6dc4d5`
- Warm Taupe: `#6f6357`

Use the existing semantic tokens. Keep readable dark text on pale and cyan surfaces, and light text on deep blue. Preserve `/images/logo-header.png` and the existing footer logo.

## Homepage

Order: Header, Hero, MeetTeam, SpecializedCare, Procedures, Testimonial, CallToAction, Footer.

- Full-width office-photo hero with a restrained dark overlay, large headline, and pill actions.
- Navy band for the existing statistics and review.
- Pale team section with paired portraits and introductory heading.
- Full-width split photograph and care introduction.
- Square, numbered procedure tiles.
- Coastal Teal testimonial band.
- Pale appointment section with the existing form.

Preserve anchors `about`, `team`, `procedures`, `testimonial`, and `appointment`.

## Interior pages

`interior.css` extends the shared design without replacing the page content.

- Pale Sky split hero: readable copy on the left and Capital's clinical photograph on the right. Stack copy before the photograph below 900px.
- Service pages use one reading column and a sticky category sidebar above 1100px. The sidebar clears the fixed header. On narrower screens, the shared navigation remains available.
- Treatment details use roomy sections, simple numbered panels, pale information bands, and cyan consultation calls to action.
- Doctor profiles preserve the supplied portraits, credentials, biographies, affiliations, and recognitions.
- Patient-resource pages preserve all preparation and surgical instructions. Long sections remain readable and reveal when they enter the viewport.
- Contact retains its address, office hours, directions/map, and request form.
- Referrals retain every field, radio group, tooth selector, attachment toggle, and existing endpoint.
- Payment Plans retains the Cherry embed and existing practice configuration, styled with Capital's palette and Work Sans.

Static office photographs use Astro's responsive WebP output. Keep image descriptions and supplied assets intact.

## Verification and scope

Run `npx astro check` and `npm run build`. Inspect representative service, doctor, resource, contact, referral, and financing pages at desktop and phone widths. Check all routes for overflow, internal links, and missing assets. For design-only changes, compare rendered copy and form fields with a saved baseline.

Preview locally unless publishing is requested. The homepage/contact forms are static and the referral endpoint is a stub; preserve this behavior until a production integration is explicitly requested.
