import { execSync } from 'child_process';

const url = process.argv[2] || 'https://coffee-delivery-two-sigma.vercel.app/';
const maxAttempts = parseInt(process.argv[3], 10) || 8;
const delayMs = parseInt(process.argv[4], 10) || 15000;

async function fetchScriptSrc() {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const txt = await res.text();
    const m = txt.match(/<script[^>]+src="([^"]*index-[^\"]+\.js)"/);
    return m ? m[1] : null;
  } catch (e) {
    return null;
  }
}

(async () => {
  console.log('Checking deploy at', url);
  const initial = await fetchScriptSrc();
  console.log('Initial script src ->', initial);
  let attempt = 0;
  while (attempt < maxAttempts) {
    attempt++;
    await new Promise(r => setTimeout(r, delayMs));
    const next = await fetchScriptSrc();
    console.log(`Attempt ${attempt}: script src ->`, next);
    if (next && next !== initial) {
      console.log('Detected script change; running mobile audit...');
      try {
        execSync(`node ./scripts/mobile-audit.mjs ${url} mobile_after_redeploy.png`, { stdio: 'inherit' });
      } catch (e) {
        console.error('Error running mobile audit:', e && e.message ? e.message : e);
      }
      process.exit(0);
    }
  }
  console.log('No change detected after polling. Provide a Vercel token to fetch logs or re-run later.');
  process.exit(2);
})();
