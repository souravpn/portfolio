import { test, expect } from "./fixtures";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/sourav/i);
  });

  test("shows the main name heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /sourav nayak/i })).toBeVisible();
  });

  test("navigation bar is visible", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("navigation contains expected links", async ({ page }) => {
    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Experience" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("profile image is present", async ({ page }) => {
    const img = page.getByAltText("Sourav Prakash Nayak");
    await expect(img).toBeVisible();
  });

  test("theme toggle button is present", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /toggle theme/i }),
    ).toBeVisible();
  });

  test("back-to-top button is present", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /back to top/i }),
    ).toBeVisible();
  });
});
