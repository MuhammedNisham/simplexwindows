# Corrected clean URL release

## Why the live site showed 404
The repository had the old .html forwarding files but did not contain the four route folders. Both are required. Do not upload only the top-level files.

## Required folders at the repository root
- products/index.html
- franchises/index.html
- steel-windows-kerala/index.html
- steel-doors-kerala/index.html
- assets/ (including search-content.css)

Keep index.html, CNAME, sitemap.xml, robots.txt, company.css, .nojekyll and the four legacy .html forwarding files at the repository root as supplied.

## Upload the complete website
1. Extract simplexwindows-complete-corrected.zip to a normal folder. Do not upload the ZIP itself.
2. Recommended: use GitHub Desktop to open/clone MuhammedNisham/simplexwindows, copy ALL extracted files AND folders into that clone, replacing existing files, then review, commit and push to the existing publishing branch.
3. If using GitHub in your browser, use Add file > Upload files at the repository root. Drag the folders themselves as well as the root files, preserving their hierarchy. Upload in batches if the interface limits the number of files. Never flatten the folders or put the whole website inside an extra parent folder.
4. Check GitHub Pages deployment completes successfully. Keep its existing source branch/folder and custom domain configuration.
5. Confirm that products/index.html and franchises/index.html are visible as files inside their respective folders in GitHub. Then open https://www.simplexwindow.com/products/ and https://www.simplexwindow.com/franchises/.

## Changes
Real directory routes for all four pages; clean navigation, canonical/social/structured-data URLs and sitemap; root-relative assets; legacy browser redirects preserve query strings and fragments; missing guide stylesheet restored; invalid phone patterns corrected; enquiry drafts retained when reopened.

## Preview
Run a normal local web server from this folder and open its root URL. Do not preview by double-clicking an HTML file because root-relative links require a web server.

## Limits
Old .html URLs use browser forwarding, not HTTP 301 server redirects. Email delivery still needs a business-inbox test. No external forms were submitted during verification. No GitHub changes were pushed by this task.
