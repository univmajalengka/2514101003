# DIPI CAFE — Updated Website

## Files
- `index.html` — page structure
- `style.css` — layout and styling
- `script.js` — menu data, cart, and discount calculation
- `assets/Meals.jpg` and `assets/Drinks.jpg` — menu poster images supplied for this update

## Important: keep the original assets
When replacing the three original files in your repository, keep the other existing files in `assets/`:
- `logo.jpg`
- `hero.jpg`
- `mirror.jpg`
- `convex-mirror.jpg`
- `indoor.jpg`
- `outdoor.jpg`
- `clean.jpg`
- `mushola.jpg`

The updated website references those files using the same paths as the original website. Do not delete them.

## Run locally
Open `index.html` in a browser. No backend, database, package installation, or build step is required.

## Notes
- Menu data is stored in `script.js`.
- `hitungDiskon(totalBelanja)` returns the discount amount:
  - subtotal >= Rp100,000: 10%
  - subtotal >= Rp50,000: 5%
  - otherwise: 0%
- Cart and order confirmation are browser-only simulations. No payment or WhatsApp checkout is performed.
- WhatsApp is a contact link only.
- The map embed uses the coordinates currently associated with the location link; the separate Google Maps button opens the original short link.
