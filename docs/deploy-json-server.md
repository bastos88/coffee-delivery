# Deploying json-server for Coffee Delivery

This guide explains how to host the `json-server` API (the `db.json` used locally) on a small Node host (Railway, Render, Fly.io, etc.) and wire it to the Vercel frontend.

Why: Vercel does not support long-running processes like `json-server`. To keep the current dev workflow but have a working production API, deploy the json-server on a service that supports Node processes.

## What I added

- `server.cjs` — small CommonJS entry that starts `json-server` using the repo `db.json` (listens on `process.env.PORT`).
- `package.json` script: `npm run start:api` → `node server.cjs`.

## Recommended minimal deploy (Railway / Render)

1. Create an account on Railway (https://railway.app/) or Render (https://render.com/).
2. Create a new Web Service and connect your GitHub repository (this repo).
3. Set the Build & Start commands:

   - Build command: (none required) or `npm ci && npm run build` if needed
   - Start command: `npm run start:api`

   Railway/Render will provide a public URL like `https://coffee-api.up.railway.app`.

4. (Optional) To allow writes to persist long-term, consider replacing `db.json` with a real database (Postgres, Supabase). File-based persistence may be ephemeral depending on provider.

## Point Vercel frontend to the hosted API

1. In Vercel dashboard, open your project settings → Environment Variables.
2. Add `VITE_API_URL` with the value of your deployed json-server URL (e.g. `https://coffee-api.up.railway.app`).
3. Redeploy the frontend. The app uses `import.meta.env.VITE_API_URL` (fallback `http://localhost:3001` locally).

## Limitations & Notes

- `json-server` writes to `db.json`. On many cloud hosts the filesystem is ephemeral — data written at runtime may be lost on redeploy or instance restart. For production data, use a proper database.
- For small demos and prototypes, hosting `json-server` as described is convenient and fast.
- Alternatively, convert the API to a small Express/Next API with a proper DB (recommended long-term).

## Example: Deploy on Railway (quick)

1. Sign in to Railway and create a new project → Deploy from GitHub.
2. Select this repository and the branch you want to deploy (`fix/checkout-mobile-a11y` or `main`).
3. In the service settings, set `Start Command` to `npm run start:api`.
4. Deploy — Railway will assign a URL that you can use in `VITE_API_URL`.
