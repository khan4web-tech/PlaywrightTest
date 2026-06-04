import { test } from '@playwright/test';

test('open website and close browser', async ({ page }) => {
  // Navigate to Google
  await page.goto('http://www.google.com');
  
  // Wait 3 seconds to see the page
  await page.waitForTimeout(3000);
});
