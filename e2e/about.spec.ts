import { test, expect } from "./fixtures";
import { certs } from "../lib/data";

test.describe("About section — certifications", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#certifications").scrollIntoViewIfNeeded();
  });

  test("prev cert chevron is disabled on first card", async ({ page }) => {
    const prev = page.getByRole("button", { name: /previous certification/i });
    await expect(prev).toBeDisabled();
  });

  test("next cert chevron is enabled on first card", async ({ page }) => {
    const next = page.getByRole("button", { name: /next certification/i });
    await expect(next).toBeEnabled();
  });

  test("cert dots count matches number of certs", async ({ page }) => {
    const dots = page.getByRole("button", { name: /go to certification/i });
    await expect(dots).toHaveCount(certs.length);
  });

  test("clicking a cert card opens the modal", async ({ page }) => {
    const firstCard = page.locator("#certifications [style]").first();
    await firstCard.click();
    // Modal should appear with the cert's full name
    await expect(
      page.getByText(certs[0].full.replace("\n", " "), { exact: false }),
    ).toBeVisible({ timeout: 2000 });
  });

  test("clicking backdrop closes the modal", async ({ page }) => {
    const firstCard = page.locator("#certifications [style]").first();
    await firstCard.click();
    await page.waitForTimeout(300);
    // Click the backdrop (outside the modal card)
    await page.mouse.click(10, 10);
    await expect(
      page.getByText(certs[0].full.replace("\n", " "), { exact: false }),
    ).not.toBeVisible({ timeout: 2000 });
  });

  test("modal close button dismisses the modal", async ({ page }) => {
    const firstCard = page.locator("#certifications [style]").first();
    await firstCard.click();
    await page.waitForTimeout(300);
    await page.getByRole("button", { name: /close/i }).click();
    await expect(
      page.getByText(certs[0].full.replace("\n", " "), { exact: false }),
    ).not.toBeVisible({ timeout: 2000 });
  });
});
