# River Retreat

Guest guide for River Retreat — a family-friendly cabin near Packwood, WA.

**Live site:** _coming soon_ (will deploy to `larsolm.github.io/river-retreat/` once GitHub Pages is configured)

Sister site: [The River House](https://larsolm.github.io/river-house/) — uses the same stack and aesthetic.

## Stack

- Vite + React 18 + TypeScript
- Mantine v7 (components + theming)
- Tabler Icons
- CSS Modules

## Development

```bash
npm install
npm run dev        # dev server at localhost:5173
npm run build      # production build → dist/
npm run preview    # preview build locally
```

## Updating content

All guest-facing text lives in [`src/content/`](src/content/):

| File             | What it controls                                              |
| ---------------- | ------------------------------------------------------------- |
| `property.ts`    | Property name, tagline, wifi credentials, address, Airbnb URL |
| `welcome.ts`     | Welcome section prose                                         |
| `amenities.ts`   | Amenity cards (title, icon, instructions)                     |
| `checklist.ts`   | Checkout checklist items                                      |
| `activities.ts`  | Local activities list                                         |
| `restaurants.ts` | Restaurant listings (name, phone, description)                |
| `navigation.ts`  | Nav item labels and tooltips                                  |

## Deploy

Deployment is automatic: push to `main` and GitHub Actions builds and deploys.

**One-time setup required** — in your GitHub repo settings:

1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Save. The next push to `main` will deploy automatically.

The site will be served at `https://larsolm.github.io/river-retreat/`.
