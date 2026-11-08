# Familiar is the only supported design

The approved website design is Familiar (historical CSS identifiers: house / n-house).

- Homepage entry point: app/page.tsx. Shared Familiar page data and photo helpers: app/familiar-page.tsx.
- Retained article records: app/legacy-posts.ts. Public route map: app/familiar-routes.ts. Static wrappers and metadata for service/article/retained views: app/[...slug]/page.tsx.
- Matching business/contact and merchant-link values: app/business-info.ts. Layout schema, practitioner footer/schema, Familiar contact details and Square URL definitions use this shared record. Prices and opening hours remain excluded until the documented conflicts are resolved.
- Familiar layout and virtual pages: app/familiar-site.tsx.
- Familiar and shared component styles: app/familiar-site.css.
- Global and standalone-route styles: app/globals.css.
- Standalone blog, practitioner, treatments and practice routes remain supported; they are content pages, not alternate concepts.

Alternate concept renderers and selection controls have been removed. The concept query parameter is ignored, so old concept links display Familiar. Legacy concept and share query strings no longer change the page; old links still render Familiar. Do not restore alternate designs or a design selector without an explicit request.

Approved health claims and the stored condition guidance were preserved in this cleanup. The separately prepared safety-guidance removal was not included. The prepared native-anchor navigation correction has been incorporated after QA. The pending analytics patch must be ported selectively to these file names; do not overwrite this cleanup using an older review checkout.

Production: Cloudflare Pages project santa-rosa-medical-massage-review, connected to Devedander/santa-rosa-medical-massage-review main. Preserve existing deployment, DNS and audience settings.

The retired design styles, variant props, comparison selectors, prototype photo-selection tools, and unreachable simulated booking/contact forms have been removed from active source. Booking and gift links use Square. Keep shared contact details and the actual gallery. Stylesheets contain Familiar/shared component rules, global defaults and standalone content-page rules; do not append new theme families.
Static content-route links use native anchors: the reviewed compiled Vinext Link component failed at runtime. Preserve these destinations and test actual clicks before changing routing. Phone navigation scrolling defaults are scoped to Familiar, and article headings can wrap on narrow phones. Do not reintroduce the retired prototype shell to fix shared styles.

November 7 AI-2 preparation adds 29 directly accessible Familiar routes without changing the retained article/service wording. Both sitemap definitions cover 41 content pages; do not add automatic current-date lastModified values. Root-relative assets and practitioner links support nested service URLs. The root audit/AI-2-Prepared-2026-11-07.md records checks and fourteen held legacy URL decisions. This working-tree preparation remains unpublished; the earlier analytics patch and safety-guidance decision remain separate.
