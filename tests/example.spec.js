// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Online Tamil Converter | English Tamil Translation | Tamil Conversion/);
});
