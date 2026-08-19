# D-arte Dental

Marketing site and online appointment booking for **D-arte Dental**, a modern
dental clinic. Built with [Next.js](https://nextjs.org) (App Router),
TypeScript and Tailwind CSS.

## Features

- Responsive clinic landing page (hero, services, opening hours).
- Online appointment booking with client- and server-side validation.
- `POST /api/appointments` persists requests; `GET /api/appointments` lists them.
- Requests are stored in a lightweight JSON file (`.data/appointments.json`) so
  the starter runs with zero external services. Swap the store in
  `src/lib/appointments.ts` for a real database when you need one.

## Requirements

- Node.js 22 (see `.nvmrc` / your version manager)
- npm 10+

## Getting started

```bash
npm ci          # install exact, locked dependencies
npm run dev     # start the dev server on http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000) and try the booking
form in the **Book your visit** section — submitted requests appear under
**Upcoming requests**.

## Useful scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the development server         |
| `npm run build`     | Production build                     |
| `npm run start`     | Serve the production build           |
| `npm run lint`      | Run ESLint                           |
| `npm run typecheck` | Type-check with `tsc --noEmit`       |

## Project structure

```
src/
  app/
    api/appointments/route.ts   # REST endpoint (GET list / POST create)
    layout.tsx                  # Root layout + metadata
    page.tsx                    # Landing page + schedule
  components/
    BookingForm.tsx             # Client-side booking form
  lib/
    appointments.ts             # Types, validation and JSON-file store
```

## Cloud Agent environment

This repo is configured for Cursor Cloud Agents via
[`.cursor/environment.json`](.cursor/environment.json): `npm ci` installs
dependencies and the dev server runs in a persistent terminal on port 3000.
