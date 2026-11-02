# vtandon.dev

**A minimalist dark/light CV and portfolio site built with Next.js, Tailwind and Framer Motion, with a live local-time and weather pill.**

## What it does

- One-page CV: hero, experience timeline, skills, certifications and courses, recommendations, about.
- Dark/light theme toggle (`next-themes`), animated reveals, star field / aurora backgrounds, side navigation with scroll progress.
- Live status pill showing local time and current weather for the configured city, via the free, keyless [Open-Meteo](https://open-meteo.com) API (called from the browser; no env vars).
- All content comes from a single file, [`lib/data.ts`](./lib/data.ts).

## Stack

Next.js 14 (App Router), React 18, Tailwind CSS 3, Framer Motion, lucide-react, TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Make it yours

Edit [`lib/data.ts`](./lib/data.ts):

- `profile`: name, role, tagline, avatar, location (drives clock and weather: `timezone`, `latitude`, `longitude`), social links (set any to `""` to hide the button).
- `experience`, `projects` (the Selected Work section only renders if non-empty), `skills`, `certifications`, `courses`, `featured`, `recommendations`, `about`.

Avatar: put a square image at `public/avatar.jpg` and set `profile.avatar = "/avatar.jpg"`; leave `""` for an initials circle. Project screenshots or demo clips go in `public/` and are referenced via `image` / `video`. Theme colours are CSS variables in [`app/globals.css`](./app/globals.css).

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvtandon%2Fvtandon.dev)

Or import the repo at <https://vercel.com/new>. Vercel auto-detects Next.js, so the defaults work: build command `next build`, output `.next`, root directory `/`. No environment variables are required. To use the custom domain, add `vtandon.dev` under Project Settings, Domains.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Configuration

None. There are no secrets or env vars (see `.env.example`).

## Screenshots

Add screenshots to `docs/screenshots/`.

## License

MIT, see `LICENSE`. The CV content in `lib/data.ts` is personal and not covered by the licence for reuse as your own.
