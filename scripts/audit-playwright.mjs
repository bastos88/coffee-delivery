import { chromium } from 'playwright';

(async () => {
  const url = process.env.URL || 'http://localhost:5173/checkout';
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    console.log(`Visiting ${url}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

    // Accessibility snapshot (if available)
    if (page.accessibility && typeof page.accessibility.snapshot === 'function') {
      try {
        const acc = await page.accessibility.snapshot();
        console.log('ACCESSIBILITY_SNAPSHOT_START');
        console.log(JSON.stringify(acc, null, 2));
        console.log('ACCESSIBILITY_SNAPSHOT_END');
      } catch (e) {
        console.warn('ACCESSIBILITY_SNAPSHOT_SKIPPED', e && e.message ? e.message : String(e));
      }
    } else {
      console.warn('ACCESSIBILITY_API_NOT_AVAILABLE');
    }

    // Inputs and labels
    const inputs = await page.$$eval('input', els => els.map(e => ({
      id: e.id || null,
      name: e.name || null,
      type: e.type || null,
      placeholder: e.getAttribute('placeholder') || null,
      ariaLabel: e.getAttribute('aria-label') || null,
      ariaDescribedBy: e.getAttribute('aria-describedby') || null,
      hasLabel: !!(e.id && document.querySelector(`label[for="${e.id}"]`)) || !!e.closest('label')
    })));
    console.log('INPUTS_INFO_START');
    console.log(JSON.stringify(inputs, null, 2));
    console.log('INPUTS_INFO_END');

    // Focusable elements
    const focusable = await page.$$eval('a, button, input, select, textarea, [tabindex]', els => els.map(el => ({
      tag: el.tagName,
      role: el.getAttribute('role') || null,
      id: el.id || null,
      name: el.getAttribute('name') || null,
      tabindex: el.getAttribute('tabindex') || null,
      text: el.innerText ? el.innerText.trim().slice(0, 80) : null
    })));
    console.log('FOCUSABLE_INFO_START');
    console.log(JSON.stringify(focusable, null, 2));
    console.log('FOCUSABLE_INFO_END');

    // Theme colors (basic check)
    const themeChecks = await page.evaluate(() => {
      const getColor = (el) => window.getComputedStyle(el).color;
      const getBg = (el) => window.getComputedStyle(el).backgroundColor;
      const bodyColor = getColor(document.body);
      const bodyBg = getBg(document.body);
      const firstInput = document.querySelector('input');
      const inputColor = firstInput ? getColor(firstInput) : null;
      const inputBg = firstInput ? getBg(firstInput) : null;
      return { bodyColor, bodyBg, inputColor, inputBg };
    });
    console.log('THEME_CHECKS_START');
    console.log(JSON.stringify(themeChecks, null, 2));
    console.log('THEME_CHECKS_END');

    console.log('AUDIT_COMPLETE');
  } catch (err) {
    console.error('AUDIT_ERROR', err && err.message ? err.message : String(err));
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();
