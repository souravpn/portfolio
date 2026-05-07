import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock nodemailer before importing the route handler
vi.mock("nodemailer", () => ({
  default: {
    createTransport: () => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: "test-id" }),
    }),
  },
}));

// Helper to build a NextRequest-like object with FormData
function makeRequest(fields: Record<string, string>) {
  const fd = new FormData();
  Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
  return {
    formData: async () => fd,
  };
}

describe("POST /api/contact — validation", () => {
  // Dynamically import after mocks are wired
  let POST: (req: unknown) => Promise<Response>;

  beforeEach(async () => {
    vi.resetModules();
    const mod = await import("@/app/api/contact/route");
    POST = mod.POST as typeof POST;
  });

  it("returns 400 when name is missing", async () => {
    const req = makeRequest({ email: "a@b.com", message: "hi" });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when email is missing", async () => {
    const req = makeRequest({ name: "Alice", message: "hi" });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when message is missing", async () => {
    const req = makeRequest({ name: "Alice", email: "a@b.com" });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 200 with all required fields", async () => {
    const req = makeRequest({
      name: "Alice",
      email: "a@b.com",
      message: "Hello there",
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
  });
});
