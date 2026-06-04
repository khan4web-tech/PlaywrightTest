import { test } from '@playwright/test';

test('open website and close browser', async ({ page }) => {
  await page.goto('http://www.google.com');
  await page.waitForTimeout(3000);
});
