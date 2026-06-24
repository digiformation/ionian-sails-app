# Ionian Sails — Yacht Charter PWA Demo

**Live:** https://ionian-sails.digiform.gr
**Repo:** digiformation/ionian-sails-app → Vercel project: `ionian-sails-app`
**Case study:** https://digiform.gr/case-studies/ionian-sails

## Stack
Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui (subset) · TypeScript
Package manager: npm

## Local dev
```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # verify production build locally
```

## Environment variables
None required — all data is hardcoded mock data in `lib/data.ts`.

## Key paths
```
app/                        pages (Next.js App Router)
app/fleet/                  yacht listing page
app/book/                   booking flow
app/dashboard/              charter operator dashboard
app/my-bookings/            customer bookings view
lib/data.ts                 ALL demo data (yachts, customers, bookings)
lib/types.ts                TypeScript types
components/                 UI components
```

## Common tasks

**Update demo data:**
Edit `lib/data.ts` directly — yachts, customers, and bookings are all hardcoded arrays.

**Add a page:**
Create `app/[page-name]/page.tsx`

## Deploy process
Push to a feature branch → open PR on GitHub → review diff → merge → Vercel auto-deploys.
Never push directly to `main`.
