# Coffee Delivery

React + TypeScript frontend with an Express/Prisma API backed by Postgres.

## Run locally

Start Postgres with Docker:

```bash
npm run db:up
```

Apply database migrations:

```bash
npm run db:migrate
```

Start the API:

```bash
npm run dev:api
```

Start the frontend:

```bash
npm run dev
```

Default local URLs:

- Frontend: `http://localhost:5173`
- API: `http://localhost:3333`
- Postgres: `localhost:5433`

The frontend API base URL can be overridden with `VITE_API_URL`.
