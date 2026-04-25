const { test, expect } = require('@playwright/test');

test.only('todo demo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await expect(page).toHaveTitle(/Todo/);

  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.keyboard.press('Enter');

  await expect(page.getByText('Learn Playwright')).toBeVisible();
});