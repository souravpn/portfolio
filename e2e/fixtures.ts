import { test as base } from "@playwright/test";

// Extends Playwright's page fixture to suppress the splash screen by
// pre-setting the sessionStorage flag before the page initializes.
export const test = base.extend<{ page: typeof base.prototype.page }>({
  page: async ({ page }, use) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("splashShown", "1");
    });
    await use(page);
  },
});

export { expect } from "@playwright/test";
