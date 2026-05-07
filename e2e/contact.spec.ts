import { test, expect } from "./fixtures";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();
  });

  test("renders the Get in Touch heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /get in touch/i }),
    ).toBeVisible();
  });

  test("renders all form fields", async ({ page }) => {
    await expect(page.getByPlaceholder("Your Name")).toBeVisible();
    await expect(page.getByPlaceholder("Your Email")).toBeVisible();
    await expect(page.getByPlaceholder("Subject")).toBeVisible();
    await expect(page.getByPlaceholder("Your Message")).toBeVisible();
  });

  test("Send Message button is present and enabled", async ({ page }) => {
    const btn = page.getByRole("button", { name: /send message/i });
    await expect(btn).toBeVisible();
    await expect(btn).toBeEnabled();
  });

  test("file drop zone is present", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /attach files/i }),
    ).toBeVisible();
  });

  test("submitting with empty fields shows browser validation", async ({
    page,
  }) => {
    // Click submit without filling in required fields — form should not submit
    await page.getByRole("button", { name: /send message/i }).click();
    // Button should still read "Send Message" (not "Sending…")
    await expect(
      page.getByRole("button", { name: /send message/i }),
    ).toBeVisible();
  });

  test("fills in all fields and Send Message button activates", async ({
    page,
  }) => {
    await page.getByPlaceholder("Your Name").fill("Test User");
    await page.getByPlaceholder("Your Email").fill("test@example.com");
    await page.getByPlaceholder("Subject").fill("Test subject");
    await page.getByPlaceholder("Your Message").fill("Hello from Playwright.");
    const btn = page.getByRole("button", { name: /send message/i });
    await expect(btn).toBeEnabled();
  });

  test("contact info shows email address", async ({ page }) => {
    await expect(page.getByText("souravpn1985@gmail.com")).toBeVisible();
  });
});
