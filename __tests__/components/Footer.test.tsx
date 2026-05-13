import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/sections/Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("Sourav.")).toBeInTheDocument();
  });

  it("renders the Quick Navigation heading", () => {
    render(<Footer />);
    expect(screen.getByText(/quick navigation/i)).toBeInTheDocument();
  });

  it("renders all quick-nav links", () => {
    render(<Footer />);
    const hrefs = Array.from(document.querySelectorAll("footer a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toContain("#home");
    expect(hrefs).toContain("#about");
    expect(hrefs).toContain("#featured");
    expect(hrefs).toContain("#experience");
    expect(hrefs).toContain("#contact");
    expect(hrefs).toContain("#summary");
    expect(hrefs).toContain("#skills");
    expect(hrefs).toContain("#certifications");
  });

  it("renders the tech badge pills", () => {
    render(<Footer />);
    expect(screen.getByText("Next.js 15")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.getByText("Framer Motion")).toBeInTheDocument();
    expect(screen.getByText("Lenis")).toBeInTheDocument();
  });

  it("shows the current year in the copyright notice", () => {
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });
});
