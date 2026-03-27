import { chromium } from 'playwright';
import net from 'net';

function tryConnect(port, host) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.on('connect', function() {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', function() {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', function() {
      resolve(false);
    });
    socket.connect(port, host);
  });
}

async function checkPort(port) {
  // Try IPv4 and IPv6 loopback addresses
  const hosts = ['127.0.0.1', '::1'];
  for (const h of hosts) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await tryConnect(port, h);
    if (ok) return true;
  }
  return false;
}

(async () => {
  const ports = [5173, 5174, 5175, 5176, 4173];
  let portFound = null;
  for (const p of ports) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await checkPort(p);
    if (ok) { portFound = p; break; }
  }

  if (!portFound) {
    console.error('No running server found on tested ports (5173-5176). Please start the dev/preview server first.');
    process.exit(1);
  }

  const targetPath = process.argv[2] || '/';
  const safeName = targetPath === '/' ? 'screenshot-home' : targetPath.replace(/[^a-z0-9]/gi, '_');
  const filename = `${safeName}.png`;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const url = `http://localhost:${portFound}${targetPath.startsWith('/') ? targetPath : `/${targetPath}`}`;
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: filename, fullPage: true });
  console.log('Saved', filename);
  await browser.close();
})();
