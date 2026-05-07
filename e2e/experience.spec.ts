import { test, expect } from "./fixtures";
import { experiences } from "../lib/data";

test.describe("Experience carousel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#experience").scrollIntoViewIfNeeded();
  });

  test("shows the first card by default", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: experiences[0].company }),
    ).toBeVisible();
  });

  test("prev chevron is disabled on first card", async ({ page }) => {
    const prev = page.getByRole("button", { name: /previous experience/i });
    await expect(prev).toBeDisabled();
  });

  test("next chevron is enabled on first card", async ({ page }) => {
    const next = page.getByRole("button", { name: /next experience/i });
    await expect(next).toBeEnabled();
  });

  test("clicking next advances to second card", async ({ page }) => {
    await page.getByRole("button", { name: /next experience/i }).click();
    await expect(
      page.getByRole("heading", { name: experiences[1].company }).first(),
    ).toBeVisible({ timeout: 2000 });
  });

  test("next then prev returns to first card", async ({ page }) => {
    await page.getByRole("button", { name: /next experience/i }).click();
    await page.waitForTimeout(400);
    await page.getByRole("button", { name: /previous experience/i }).click();
    await expect(
      page.getByRole("heading", { name: experiences[0].company }).first(),
    ).toBeVisible({ timeout: 2000 });
  });

  test(`next chevron is disabled on last card`, async ({ page }) => {
    const next = page.getByRole("button", { name: /next experience/i });
    for (let i = 0; i < experiences.length - 1; i++) {
      await next.click();
      await page.waitForTimeout(350);
    }
    await expect(next).toBeDisabled();
  });

  test("scroll dots count matches number of experiences", async ({ page }) => {
    const dots = page.getByRole("button", { name: /go to experience/i });
    await expect(dots).toHaveCount(experiences.length);
  });

  test("clicking the last dot jumps to last card", async ({ page }) => {
    const dots = page.getByRole("button", { name: /go to experience/i });
    await dots.last().click();
    await page.waitForTimeout(500);
    await expect(
      page.getByRole("heading", { name: experiences[experiences.length - 1].company }),
    ).toBeVisible({ timeout: 2000 });
  });
});
