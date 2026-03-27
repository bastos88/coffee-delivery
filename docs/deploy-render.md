# Deploy json-server on Render

This guide shows how to deploy the repo `json-server` API (uses `db.json`) to Render and wire the public URL to the Vercel frontend via `VITE_API_URL`.

Prerequisites
- GitHub repo connected to Render
- Render account
- `server.cjs` and `db.json` present in repo

Steps

1. Create a new Web Service on Render
   - Log in to https://dashboard.render.com and click **New** → **Web Service**.
   - Connect the repository and pick the branch to deploy.

2. Build & Start commands
   - Set the **Build Command** to (optional):

```
npm ci && npm run build
```

   - Set the **Start Command** to:

```
npm run start:api
```

3. Environment & Port
   - Render provides a `PORT` environment variable that `server.cjs` honors. No extra env var is required for the server to start.

4. Deploy and obtain the URL
   - Deploy the service. Render will assign a public URL like `https://<service>.onrender.com`.

5. Configure Vercel frontend
   - In Vercel project settings, set `VITE_API_URL` to `https://<service>.onrender.com` (for the environments you want). Redeploy frontend.

6. Test the API

```
curl https://<service>.onrender.com/<resource>
```

Notes
- File-based persistence is not reliable for production. Consider migrating to Postgres/Supabase if you need persistent writes.
- You can also use the included `Dockerfile.api` for custom container deployments on Render.

Local testing

```
npm ci
npm run start:api
```
