import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
try {
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
    await page.locator('h1').waitFor();
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Horizontal overflow at ${width}px`);
    await page.screenshot({ path: `artifacts/aurelia-${width}.png` });
    console.log(`Layout ${width}px: passed`);
  }
  await page.getByRole('tab', { name: /Middle School/ }).click();
  await page.getByRole('heading', { name: 'Room to explore. Courage to grow.' }).waitFor();
  await page.getByRole('button', { name: 'Humanities', exact: true }).click();
  assert.equal(await page.locator('#faculty h3').count(), 1);
  await page.getByRole('button', { name: 'Robotics & Labs', exact: true }).click();
  await page.getByRole('button', { name: 'View Tomorrow, built today' }).click();
  await page.getByRole('dialog').waitFor();
  await page.keyboard.press('Escape');
  await page.getByRole('tab', { name: /International Curriculum/ }).click();
  await page.getByText('₹3,00,000', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'Merit & talent scholarships' }).click();
  await page.getByText(/Illustrative scholarships cover up to 25%/).waitFor();
  await page.getByRole('button', { name: 'Apply Now', exact: true }).first().click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel(/Parent \/ guardian name/).fill('Test Parent');
  await dialog.getByLabel(/Email address/).fill('parent@example.com');
  await dialog.getByLabel(/Phone number/).fill('+91 9876543210');
  await dialog.getByRole('button', { name: 'Continue', exact: true }).click();
  await dialog.getByLabel(/Applying for/).selectOption('Grade 5');
  await dialog.getByLabel(/Preferred curriculum/).selectOption('National — CBSE');
  await dialog.getByRole('checkbox').check();
  await dialog.getByRole('button', { name: 'Save Inquiry & Visit Request' }).click();
  await dialog.getByRole('heading', { name: 'Your next chapter starts here.' }).waitFor();
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('aurelia-inquiries')).length), 1);
  const download = page.waitForEvent('download');
  await dialog.getByRole('button', { name: 'Download inquiry' }).click();
  assert.match((await download).suggestedFilename(), /^AGA-/);
  await page.keyboard.press('Escape');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Fee Structure' }).click();
  assert.equal(await page.getByRole('dialog').count(), 0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('canvas').count(), 0);
  assert.deepEqual(errors, []);
  console.log('Academic tabs, faculty and gallery filters, lightbox, fees, scholarships, multi-step inquiry, persistence, download, mobile menu, reduced motion: passed');
} finally {
  await browser.close();
}
