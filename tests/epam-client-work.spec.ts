import { test, expect } from '@playwright/test';

test('EPAM - Client Work link leads to Client Work heading', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Click "Services" in the header menu
  // The Services menu is a top-level nav item; use role=link and name=Services or text locator
  const services = page.getByRole('link', { name: /Services/i });
  await services.click();

  // Click the "Explore Our Client Work" link.
  // The link text may vary; use a partial text locator
  const explore = page.getByRole('link', { name: /Explore Our Client Work/i });
  await explore.click();

  // Verify that the "Client Work" text is visible on the page.
  await expect(page.getByText(/Client Work/i)).toBeVisible({ timeout: 10000 });
});
