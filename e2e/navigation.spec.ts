import { test, expect } from "./fixtures";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("clicking About scrolls to About section", async ({ page }) => {
    await page.getByRole("navigation").getByRole("link", { name: "About" }).click();
    await expect(page.locator("#about")).toBeInViewport({ timeout: 3000 });
  });

  test("clicking Experience scrolls to Experience section", async ({ page }) => {
    await page.getByRole("navigation").getByRole("link", { name: "Experience" }).click();
    await expect(page.locator("#experience")).toBeInViewport({ timeout: 3000 });
  });

  test("clicking Contact scrolls to Contact section", async ({ page }) => {
    await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();
    await expect(page.locator("#contact")).toBeInViewport({ timeout: 3000 });
  });

  test("clicking Home scrolls back to top", async ({ page }) => {
    // Scroll down first, then click Home
    await page.getByRole("navigation").getByRole("link", { name: "Experience" }).click();
    await page.waitForTimeout(600);
    await page.getByRole("navigation").getByRole("link", { name: "Home" }).click();
    await expect(page.locator("#home")).toBeInViewport({ timeout: 3000 });
  });

  test("footer Summary link scrolls to Professional Summary", async ({ page }) => {
    await page.locator("footer a[href='#summary']").click();
    await expect(page.locator("#summary")).toBeInViewport({ timeout: 3000 });
    // Heading should not be hidden behind the fixed nav
    const heading = page.getByRole("heading", { name: /professional summary/i });
    await expect(heading).toBeVisible();
  });

  test("footer Skills link scrolls to Skills heading visible", async ({ page }) => {
    await page.locator("footer a[href='#skills']").click();
    await expect(page.locator("#skills")).toBeInViewport({ timeout: 3000 });
    const heading = page.getByRole("heading", { name: /skills/i }).first();
    await expect(heading).toBeVisible();
  });

  test("footer Certifications link scrolls to Certifications heading visible", async ({ page }) => {
    await page.locator("footer a[href='#certifications']").click();
    await expect(page.locator("#certifications")).toBeInViewport({ timeout: 3000 });
    const heading = page.getByRole("heading", { name: /certifications/i }).first();
    await expect(heading).toBeVisible();
  });
});
