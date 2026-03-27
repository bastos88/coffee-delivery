# Deploy json-server on Railway

This guide shows how to deploy the repo `json-server` API (uses `db.json`) to Railway and wire the public URL to the Vercel frontend via `VITE_API_URL`.

Prerequisites
- GitHub repo connected to Railway
- Railway account
- `server.cjs` and `db.json` present in repo (this repo includes them)

Steps

1. Create a project on Railway
   - Log in to https://railway.app and click **New Project** → **Deploy from GitHub**.
   - Select this repository and the branch you want to deploy (e.g. `main`).

2. Configure the service
   - Railway will create a service for you. In the service settings set the **Start Command** to:

```
npm run start:api
```

   - No special build command is required for this simple API. Railway will set a `PORT` env automatically; `server.cjs` already honors `process.env.PORT`.

3. Deploy
   - Click **Deploy**. Railway will build and start the service and provide a public URL such as `https://<project-name>.up.railway.app`.

4. Configure Vercel frontend
   - In the Vercel dashboard for your frontend project, go to **Settings → Environment Variables**.
   - Add `VITE_API_URL` with value `https://<project-name>.up.railway.app` for the appropriate environments (Production/Preview/Development) you want.
   - Redeploy the Vercel frontend to pick up the new environment variable.

5. Test the API
   - From your machine or the Railway dashboard, hit a known endpoint (replace with a collection key from `db.json`):

```
curl https://<project-name>.up.railway.app/<resource>
```

   - Example: if `db.json` has `products`, `orders`, etc. then `GET /products` should return JSON.

Notes & recommendations
- `json-server` writes to `db.json`. Many hosts have ephemeral filesystems; data written at runtime can be lost on redeploy or instance restart.
- For reliable persistence migrate to a real DB (see `docs/migrate-db-to-postgres.md`).
- If you prefer using Docker, `Dockerfile.api` is included and can be used with Railway's Docker deploy.

Local testing

```
npm ci
npm run start:api    # runs server.cjs
# or for live-dev with JSON Server watcher:
npm run dev:server
```
