# Familiar is the only supported design

The approved website design is Familiar (historical CSS identifiers: house / n-house).

- Homepage data and photo helpers: app/page.tsx.
- Familiar layout and virtual pages: app/familiar-site.tsx.
- Familiar and shared component styles: app/familiar-site.css.
- Global and standalone-route styles: app/globals.css.
- Standalone blog, practitioner, treatments and practice routes remain supported; they are content pages, not alternate concepts.

Alternate concept renderers and selection controls have been removed. The concept query parameter is ignored, so old concept links display Familiar. The existing share=familiar link remains compatible. Do not restore alternate designs or a design selector without an explicit request.

Approved health claims and the stored condition guidance were preserved in this cleanup. The separately prepared safety-guidance removal was not included. Pending navigation and analytics patches must be ported selectively to these file names; do not overwrite this cleanup using an older review checkout.

Production: Cloudflare Pages project santa-rosa-medical-massage-review, connected to Devedander/santa-rosa-medical-massage-review main. Preserve existing deployment, DNS and audience settings.
