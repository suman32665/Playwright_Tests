import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  workers: 1,
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { open: 'always' }]], // Change 'never' to 'on-failure' or 'always' as needed
  use: {
    headless: true,
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});