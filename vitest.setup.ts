/// <reference types="vitest/globals" />
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock Next.js Image — it uses DOM features unavailable in jsdom
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element
    const { src, alt, ...rest } = props as { src: string; alt: string };
    return { type: "img", props: { src, alt, ...rest } };
  },
}));

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Suppress console.error noise from intentional error-state tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("Warning:")) return;
    originalError(...args);
  };
});
afterAll(() => {
  console.error = originalError;
});
