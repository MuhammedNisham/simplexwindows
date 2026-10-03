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

Enquiries use the existing Web3Forms integration. The browser checks both the response status and the service's success flag, and offers telephone contact if delivery cannot be confirmed. The existing WhatsApp link is retained. Real delivery to the intended recipient must be verified by the site owner; no test customer enquiry was sent.

## Publish through the existing repository

The existing `CNAME` remains `www.simplexwindow.com`. Review the changes, commit them, and push to the branch configured in GitHub Pages. No GoDaddy DNS change is needed for this redesign when the existing domain is already connected.

The redesigned files do not themselves change GitHub Pages settings, GoDaddy DNS, repository permissions or the live site. Keep the original asset files until any external uses have been checked.

## Checks

Reviewed homepage and product/enquiry layouts in the browser at desktop and mobile widths. Verified category filtering, search reset/empty state, mobile navigation, product-specific enquiry selection, and dealer search. Check the project handoff for the final publishing status.
