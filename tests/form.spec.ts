import { test, expect } from '@playwright/test';

test('errors if invalid email is entered', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByTestId('name').fill('Fred Flintstone');

  await page.getByTestId('submit').click();

  await expect(page.getByText('Please enter your email address')).toBeVisible();
});
