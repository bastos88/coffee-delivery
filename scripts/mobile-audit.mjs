import { chromium, devices } from 'playwright';
import fs from 'fs';

const url = process.argv[2] || 'https://coffee-delivery-two-sigma.vercel.app/';
const filename = process.argv[3] || 'mobile_deploy_screenshot.png';

(async () => {
  const browser = await chromium.launch();
  const iPhone = devices['iPhone 12'];
  const context = await browser.newContext({
    ...iPhone,
  });
  const page = await context.newPage();
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  const footerExists = await page.$('footer');
  let footerInfo = null;
  if (footerExists) {
    footerInfo = await page.evaluate(() => {
      const el = document.querySelector('footer');
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        exists: true,
        rect: {
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          width: rect.width,
          height: rect.height
        },
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        background: style.backgroundColor,
        color: style.color,
        isInViewport: (rect.top < window.innerHeight && rect.bottom > 0),
        html: el.innerHTML ? el.innerHTML.slice(0, 300) : null
      };
    });
  } else {
    footerInfo = { exists: false };
  }

  await page.screenshot({ path: filename, fullPage: true });
  console.log('SCREENSHOT_SAVED', filename);
  console.log('FOOTER_INFO_START');
  console.log(JSON.stringify(footerInfo, null, 2));
  console.log('FOOTER_INFO_END');

  await browser.close();
})();
