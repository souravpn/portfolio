import { test, expect } from "./fixtures";
import { experiences } from "../lib/data";

test.describe("Experience carousel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#experience").scrollIntoViewIfNeeded();
  });

  // Each card's role is unique — use it to identify which card is active.
  // toBeInViewport() is required (not toBeVisible()) because the carousel
  // keeps all cards in the DOM; only the active one is in the viewport.

  test("shows the first card by default", async ({ page }) => {
    await expect(
      page.getByText(experiences[0].role, { exact: true }),
    ).toBeInViewport();
  });

  test("prev chevron is disabled on first card", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /previous experience/i }),
    ).toBeDisabled();
  });

  test("next chevron is enabled on first card", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /next experience/i }),
    ).toBeEnabled();
  });

  test("clicking next advances to second card", async ({ page }) => {
    await page.getByRole("button", { name: /next experience/i }).click();
    await expect(
      page.getByText(experiences[1].role, { exact: true }),
    ).toBeInViewport({ timeout: 2000 });
  });

  test("next then prev returns to first card", async ({ page }) => {
    await page.getByRole("button", { name: /next experience/i }).click();
    await page.waitForTimeout(400);
    await page.getByRole("button", { name: /previous experience/i }).click();
    await expect(
      page.getByText(experiences[0].role, { exact: true }),
    ).toBeInViewport({ timeout: 2000 });
  });

  test("next chevron is disabled on last card", async ({ page }) => {
    const next = page.getByRole("button", { name: /next experience/i });
    for (let i = 0; i < experiences.length - 1; i++) {
      await next.click();
      await page.waitForTimeout(350);
    }
    await expect(next).toBeDisabled();
  });

  test("scroll dots count matches number of experiences", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /go to experience/i }),
    ).toHaveCount(experiences.length);
  });

  test("clicking the last dot jumps to last card", async ({ page }) => {
    await page.getByRole("button", { name: /go to experience/i }).last().click();
    // Re-anchor the section after the dot click — Playwright auto-scrolled
    // down to reach the dots, which can push the carousel above the viewport.
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(
      page.getByText(experiences[experiences.length - 1].role, { exact: true }),
    ).toBeInViewport({ timeout: 2000 });
  });
});
