# Clean website URLs

The website now uses /products/, /franchises/, /steel-windows-kerala/ and /steel-doors-kerala/.
Each route is a real folder containing index.html, compatible with GitHub Pages and direct refreshes.
Navigation, category links, canonical URLs, social URLs, structured data and the sitemap use the clean routes.
Shared resource links are root-relative so they work from nested pages.

Old .html files remain as forwarding pages. JavaScript preserves query parameters and fragments; a no-JavaScript refresh and visible link provide fallbacks. These are browser redirects, not HTTP 301 redirects: GitHub Pages does not offer custom server redirect rules for these files. Use a configurable hosting/CDN layer if HTTP 301 redirects are required.

Publish: copy ALL files and route folders in this package to the existing GitHub Pages publishing branch, preserving unrelated repository files. Commit and push to publish. No DNS change is needed. After publishing, verify each clean URL and old .html URL, including /products.html?category=Steel%20doors#design-door-1. Resubmit the updated sitemap through Google Search Console.

Existing unrelated issue: assets/search-content.css is referenced but absent in the original repository. This URL-only update does not invent a replacement stylesheet.
