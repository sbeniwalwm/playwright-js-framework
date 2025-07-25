import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list', { printSteps: true }]
    ['json', { outputFile: 'test-results.json' }]
  ],
  use: {
    headless: true,
    baseURL: 'https://google.com',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
