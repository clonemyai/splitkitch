# SplitKitch landing site

A complete static site for parking on splitkitch.com. Plain files, no build
step, no framework. It can be hosted anywhere that serves static files.

## Files

- `index.html`: the whole page: header, hero with the two trails (Hungry and
  Cooking) and the Eat food / Make food pills, How it works, For cooks, Trust,
  the Folsom and Sacramento launch section, and the footer.
- `styles.css`: all styling. Light only, warm cream background, deep
  pistachio primary, cocoa brown accents, WCAG AA contrast, 44px tap targets,
  shimmer and glow on the hero pills, and a `prefers-reduced-motion` block
  that stills all animation.
- `script.js`: optional progressive enhancement (a pressed-state class for
  older browsers). The page works fully with JavaScript disabled.
- `badge-app-store.svg`: the official "Download on the App Store" badge
  artwork (from Apple's App Store marketing resources). Display only for
  now, not a link.
- `badge-google-play.svg`: the official "GET IT ON Google Play" badge
  artwork. Display only for now, not a link.
- `README.md`: this file.

## Deliberate placeholders

Nothing on this page is marked as live, and there are no invented links:

- The "Get the app" button and the hero pills are in-page anchors. There are
  no App Store or Google Play links yet because the apps are not published.
- The interest form has no backend. It is a `mailto:` form that opens the
  visitor's mail app addressed to hello@splitkitch.com, and the page says so.
- hello@splitkitch.com is a contact placeholder until the mailbox is set up.
- The page makes no traction, user, or revenue claims.

## Parking it on splitkitch.com

Pick one host. GitHub Pages is the pattern already used for clonemy.ai.

### Option A: GitHub Pages with a custom domain

1. Create a GitHub repository (for example `splitkitch-site`) and push the
   contents of this folder to its default branch, so `index.html` sits at the
   repository root.
2. In the repository: Settings, Pages. Set the source to the default branch
   and the root folder. Save.
3. Still in Settings, Pages, set the custom domain to `splitkitch.com`. This
   creates a `CNAME` file in the repo. Commit it.
4. At Spaceship (the registrar for splitkitch.com), open the domain's DNS
   records and add:
   - Four `A` records for the apex (`@`) pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`.
   - One `CNAME` record for `www` pointing to `<github-username>.github.io`.
   - Remove any default parking or forwarding records that conflict.
5. Back in GitHub Pages settings, tick "Enforce HTTPS" once the certificate
   shows as issued (can take up to a day after DNS propagates).
6. Verify: `https://splitkitch.com` and `https://www.splitkitch.com` both
   load this page.

### Option B: Spaceship forwarding (quick park, no hosting)

Use this only as a temporary park. It redirects the domain instead of serving
the site at splitkitch.com itself.

1. In Spaceship, open splitkitch.com, then the Unbox or DNS panel, and choose
   URL forwarding / redirect.
2. Point the apex and `www` at the destination URL (for example the GitHub
   Pages URL from Option A without the custom domain, or another hosted copy
   of this folder).
3. Save and wait for propagation. Note that a redirect changes the address
   visitors see, so prefer Option A for the real launch.

### Option C: any other static host

Upload `index.html`, `styles.css`, and `script.js` to any static host
(Netlify, Cloudflare Pages, an S3 bucket, a plain web server) and follow that
host's custom-domain instructions to point splitkitch.com at it. The site has
no server-side requirements at all.

## Before launch checklist

- Replace the mailto interest form with a real capture once a backend or a
  form service exists.
- Add real store links to "Get the app" and the hero pills once the iOS and
  Android apps are published.
- Confirm the hello@splitkitch.com mailbox exists before promoting the
  address anywhere else.
