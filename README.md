# Simplex Windows & Doors

A catalogue-led redesign of the existing static website. Compatible with the current GitHub Pages hosting and custom domain; no build step or package installation is required.

## Preview and edit

Open this folder in VS Code. Use Live Server to preview `index.html`, or run `python -m http.server 4173` from this folder and open `http://localhost:4173`.

- `index.html`: homepage, brand story, collections and catalogue download.
- `products.html`: 53 searchable product designs, category filters and enquiries.
- `franchises.html`: 8 existing dealer entries with search and separate clickable phone numbers.
- `assets/site.css`: shared colours, layout and responsive styles.
- `assets/site.js`: navigation, filters and enquiry handling.
- `assets/collection/`: optimised WebP assets taken from supplied brand materials and the existing website.
- `assets/simplex-catalogue.pdf`: website-friendly, image-based copy of all 21 supplied catalogue spreads, approximately 10 MB. The original high-resolution PDF remains unchanged.
- `assets/products.json`: reference inventory of the displayed products. Page HTML is static; changing this JSON alone does not update the displayed cards.

## Content and enquiries

Existing product descriptions and dealer contact details were retained. Decorative steel door images were added from the supplied catalogue; their descriptive names and CAT-D reference labels are website labels, not manufacturer SKU claims. Confirm sizes, finishes and specifications with Simplex. No prices, warranty terms or certification numbers were invented.

Enquiries use FormSubmit and are addressed to simplexwindows14@gmail.com. The browser checks the HTTP status and explicit success flag, and preserves entered details on failure. An activation email was requested for https://www.simplexwindow.com/. The owner chose to activate later: callback email delivery is NOT verified and requires clicking Activate Form in that inbox, then sending a test from the live website. The existing WhatsApp link remains available.

## Publish through the existing repository

The existing `CNAME` remains `www.simplexwindow.com`. Review the changes, commit them, and push to the branch configured in GitHub Pages. No GoDaddy DNS change is needed for this redesign when the existing domain is already connected.

The redesigned files do not themselves change GitHub Pages settings, GoDaddy DNS, repository permissions or the live site. Keep the original asset files until any external uses have been checked.

## Checks

Reviewed homepage and product/enquiry layouts in the browser at desktop and mobile widths. Verified category filtering, search reset/empty state, mobile navigation, product-specific enquiry selection, and dealer search. Check the project handoff for the final publishing status.

## October refinements

Added the supplied Kalabhavan Shajohn portrait and brand ambassador section, the actual footer logo, a factory map using the supplied Google embed, rounded surfaces, smaller product imagery with hover zoom, and an accessible animated image viewer. Reduced-motion preferences disable animation. The Google listing in the supplied map is named SIMPLEX ROOFING SOLUTIONS.

## 19 October 2026: company section and search metadata

Added the supplied drone photograph and company introduction between the catalogue and map on the homepage. The layout stacks on mobile and the image loads lazily. Added page-specific Kerala product/dealer metadata, social previews, homepage Organization/WebSite structured data, robots.txt with OAI-SearchBot access, and a sitemap for the three canonical pages. Existing product data, enquiry flows, catalogue PDF and domain configuration are unchanged.

Publish by copying this folder's contents to the existing GitHub Pages repository and pushing to its configured publishing branch. After deployment, check /robots.txt and /sitemap.xml on the live domain, then submit the sitemap in Google Search Console. If a firewall or CDN is used, ensure it permits OpenAI's published search crawler IP ranges. Crawling permission does not guarantee indexing, rankings or ChatGPT recommendations. GPTBot training access is a separate setting; no specific training policy was added.
Reference: https://developers.openai.com/api/docs/bots
