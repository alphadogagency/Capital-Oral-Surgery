# Capital Oral Surgery — Future Build Prompt

Work in this existing Astro project. Bryan approved the CIDWP-inspired design across the whole site on October 20, 2026, then requested the September 2026 branding on October 22 without layout changes. Preserve the current copy, photographs, page structure, forest/linen/wheat palette, and updated logo. Keep Work Sans until the requested Trajan Pro 3 Light and Futura PT Light webfonts are supplied.

Read `BLUEPRINT.md`, `src/lib/theme.config.ts`, `src/styles/site.css`, and `src/styles/interior.css` before changing layouts. `src/styles/global.css` mirrors the canonical palette into Tailwind v4.

Reuse the shared Layout, Header, and Footer. The design uses local Work Sans, spacious full-width bands, pale split interior heroes, square photographs and panels, and pill actions. Extend the existing semantic classes instead of creating another visual system. Source wording is authoritative; do not rewrite patient information as part of a styling change.

The homepage uses `<Layout homepage>` and `<Header homepage>`. Interior pages use the default layout/header and an `interior-main` main region with `id="main-content"`. Preserve keyboard navigation, heading hierarchy, image descriptions, form labels, selected states, and mobile scrolling within tooth charts.

Keep the homepage anchors and all existing page URLs. Procedure category links must resolve to existing pages or `/#procedures`. Contact details come from `src/lib/site.ts` where available.

Preserve the Cherry financing integration and current form behavior. Homepage/contact forms are static; referral submission uses the existing stub endpoint. Do not imply styling changes establish production delivery.

Run `npx astro check` and `npm run build`, then verify desktop and mobile layouts and relevant controls. For a design-only update, compare the rendered copy, metadata, and form fields with the previous version. Use a local preview unless the user asks to publish.
