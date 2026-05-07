import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

describe("Navigation", () => {
  it("renders the brand name", () => {
    render(<Navigation />);
    expect(screen.getByText("Sourav.")).toBeInTheDocument();
  });

  it("renders core nav links", () => {
    render(<Navigation />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Experience").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("home link points to #home", () => {
    render(<Navigation />);
    const homeLinks = screen
      .getAllByRole("link", { name: /home/i })
      .filter((el) => el.getAttribute("href") === "#home");
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it("renders the theme toggle button", () => {
    render(<Navigation />);
    expect(
      screen.getByRole("button", { name: /toggle theme/i }),
    ).toBeInTheDocument();
  });
});
