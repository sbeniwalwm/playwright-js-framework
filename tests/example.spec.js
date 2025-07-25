import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

test('valid user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser', 'password123');

  await expect(page).toHaveURL('/dashboard');
});
