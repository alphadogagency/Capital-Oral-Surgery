# Capital Oral Surgery

Astro website for Capital Oral Surgery & Dental Implants in Topeka, Kansas.

## Design source of truth

Bryan approved the CIDWP-inspired homepage and its extension to the remaining pages on October 20, 2026. Keep Capital's existing copy, logo, photographs, and brand palette. The reference provides the layout and typography, not the content or branding.

- `BLUEPRINT.md`: approved layout and responsive patterns.
- `BUILD_PROMPT.md`: guidance for future edits.
- `src/lib/theme.config.ts` and `src/styles/global.css`: canonical brand tokens.
- `src/styles/site.css`: shared typography, navigation, footer, and homepage sections.
- `src/styles/interior.css`: interior heroes, content, service navigation, and forms.

## Local development

Use Node 22.12 or newer.

```sh
npm install
npm run dev
```

## Verification

```sh
npx astro check
npm run build
```

Inspect desktop and mobile layouts after visual changes. Keep the existing text, metadata, routes, form fields, and image descriptions intact unless the requested change includes them.

The homepage and contact forms retain their existing static `action="#"`. The referral form retains `/api/referral`, currently a stub. Styling work does not connect these forms to a production delivery service.
