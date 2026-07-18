import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  timeout: 30_000,
  use: {
    baseURL: "http://localhost:3210",
  },
  webServer: {
    command: "npm run start -- -p 3210",
    url: "http://localhost:3210",
    reuseExistingServer: false,
    timeout: 90_000,
  },
});
