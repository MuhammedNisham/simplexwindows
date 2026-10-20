# Simplex Kerala SEO update — 20 October 2026

## What changed
- Homepage SEO title: No.1 Steel Window Manufacturers in Kerala : Simplex Windows and Doors
- Descriptive homepage heading and introduction, visible buying guidance and six practical FAQs.
- Dedicated steel-windows-kerala.html and steel-doors-kerala.html pages with distinct product, price-enquiry and buying content.
- Local dealer page copy based on the eight existing listings; added Thiruvananthapuram as a search synonym for Trivandrum.
- Unique titles, descriptions and social metadata on all five pages; canonical homepage stays at /.
- LocalBusiness, WebSite, WebPage/CollectionPage, breadcrumb and catalogue/dealer ItemList structured data derived from the visible content. No invented reviews, ratings, prices, hours or dealer locations.
- Crawlable internal links, product/dealer anchor IDs, descriptive product image alt text, updated five-page sitemap. Existing OAI-SearchBot rule retained.
- Added assets/search-content.css for the new responsive content. Existing company image, catalogue PDF, main CSS and enquiry JavaScript retained.

## Search intent covered
Homepage: steel window manufacturer Kerala; GI windows Kerala; Simplex Windows and Doors; Palakkad/Kanjikode manufacturer.
Window guide: steel window designs Kerala; French windows; kitchen windows; arch, corner and round windows; custom-size enquiries; steel window price Kerala; choosing the best steel window for a home.
Door guide: steel doors Kerala; steel door designs and prices; door frames; choosing hardware and finishes.
Dealer directory: steel windows near me; steel door dealer nearby; verified listed towns in Palakkad, Thrissur and Thiruvananthapuram.
These are content targets, not measured keyword volumes or ranking promises. No hidden keyword lists or duplicate district doorway pages were added.

## Publish
Copy the contents of the simplexwindows-main folder into your actual cloned repository, preserving existing files outside this update. Do not upload the ZIP itself as the website. Review with git diff, then commit the changed pages, sitemap and new CSS and guides. Push to the existing GitHub Pages publishing branch. This package has not been pushed or deployed by this task.

## Actions that still require the business account
1. Publish the update and verify the five sitemap URLs load on the live domain.
2. In Google Search Console, use the existing verified property or verify ownership. Submit https://www.simplexwindow.com/sitemap.xml. Inspect the homepage and both new guide URLs and request indexing. No verification token was invented or added.
3. Maintain the Google Business Profile for the real company location: accurate name, category, address, phone, hours and website. Resolve any naming mismatch between the actual Simplex Windows & Doors business and the embedded map's Simplex Roofing Solutions listing through the owner account after confirming the correct real-world identity.
4. Keep each genuine dealer's Business Profile accurate, with its real address and contact information. Do not create listings for unstaffed or fictional locations. Ask customers for honest reviews without incentives.
5. Add real project photographs, confirmed specifications and clear warranty/installation information over time. Check model-specific details before publishing claims.
6. Monitor Search Console impressions, clicks, queries and indexing over the following weeks. Track enquiry quality as well as traffic. Check mobile rendering and Core Web Vitals on the deployed site.

## Limits and editorial notes
The requested No.1 wording is a marketing claim, not a verified ranking. Keep evidence for any objective market-leadership claim, or replace it with a factual manufacturer title. The requested title is long: Google can truncate or rewrite the displayed title. Google rankings and indexing are not guaranteed. Local results depend on relevance, distance and prominence/popularity; site code alone cannot establish 'near me' visibility everywhere. FAQs are visible customer information; no FAQ rich-result promise is made. No paid ads, Search Console submissions or Business Profile account edits were performed.

## References
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/title-link
- https://support.google.com/business/answer/7091?hl=en

## Validation performed
All five HTML pages passed checks for a single H1, unique IDs, one canonical URL and description, local resource paths, internal fragment targets, JSON-LD parsing and canonical sitemap coverage. The 134 existing image/PDF/JavaScript/style/domain files checked against the uploaded archive are byte-identical. Browser preview was unavailable in this session; review desktop/mobile layout and enquiry interactions before publishing. Google Rich Results Test and Search Console live inspection have not been run.

## Commit commands after copying the update into your cloned repository
Run git status and review the diff first. Then:

```bash
git add index.html products.html franchises.html steel-windows-kerala.html steel-doors-kerala.html assets/search-content.css sitemap.xml SEO-UPDATE.md
git commit -m "Improve Kerala product and local search content"
git pull --rebase origin main
git push origin main
```

If the pull reports a conflict, resolve it before pushing. If Git says this is not a repository, open your cloned repository rather than the extracted ZIP folder.
