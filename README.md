# Capital Oral Surgery

Astro website for Capital Oral Surgery & Dental Implants in Topeka, Kansas.

## Design source of truth

Bryan approved the CIDWP-inspired homepage and its extension to the remaining pages on October 20, 2026. On October 22, Bryan requested the September 2026 branding guide while preserving that layout. Keep the existing copy, photographs, sections, and responsive structure. The current brand palette is Capital Forest, Espresso, Linen White, Wheat, and Terracotta; the header and footer use the updated logo extracted from the supplied guide.

Work Sans stays in place at Bryan's request until an Adobe Fonts web-project link or licensed webfont files are supplied for **Trajan Pro 3 Light** and **Futura PT Light**. Do not substitute other fonts in the meantime. The guide's exact terracotta is decorative; a darker derived shade is used for readable small text on linen.

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

## Production deployment

Production is the existing Cloudflare Pages project `capital-oral-surgery` at
https://capital-oral-surgery.pages.dev. The repository is now
`alphadogagency/Capital-Oral-Surgery`; Cloudflare's older native Git connection
still references the former `bryguy-404` owner.

`.github/workflows/deploy-pages.yml` checks, builds, and deploys pushes to `main`
directly to the existing Pages project. It also supports manual runs on `main`.
The job is restricted to this repository and branch, and production uploads run
one at a time.

GitHub Actions uses the encrypted repository secret
`CLOUDFLARE_API_TOKEN` and the repository variable `CLOUDFLARE_ACCOUNT_ID`.
The token requires only **Account → Cloudflare Pages → Edit** on the hosting
account. This permission applies to Pages projects throughout that account.
Never commit a token. Credentials are available only to the deployment step.
The account token is named `Capital Oral Surgery GitHub Deploy` and expires
October 20, 2027. Renew it and update the GitHub secret before that date.

`npm run build:pages` builds the static website for Cloudflare, while the existing
`npm run build` also packages the separate ChatGPT Sites worker. Keep the Sites
worker out of Pages uploads. Wrangler includes the existing `functions/` folder
when deploying from the repository root.

Disable the old native Cloudflare automatic branch builds once the GitHub
workflow is operational to avoid duplicate deployments. Check the workflow result
and verify the affected pages on the existing live URL after publishing.
