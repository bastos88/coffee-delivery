/*
  Lightweight JSON Server entrypoint for hosting on platforms like Railway / Render.
  - Uses db.json at repo root
  - Honors PORT environment variable
  - Start with: `node server.cjs` or `npm run start:api`
*/

const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// simple request logging
server.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server is running at http://0.0.0.0:${port}`);
});
