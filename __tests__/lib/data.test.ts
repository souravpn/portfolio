import { describe, it, expect } from "vitest";
import { experiences, certs, greetings, splashWords } from "@/lib/data";
import type { Experience, Cert } from "@/lib/data";

describe("experiences", () => {
  it("has at least one entry", () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("every entry has required string fields", () => {
    experiences.forEach((exp: Experience) => {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.period).toBeTruthy();
    });
  });

  it("every entry has at least one bullet and one tech pill", () => {
    experiences.forEach((exp: Experience) => {
      expect(exp.bullets.length).toBeGreaterThan(0);
      expect(exp.tech.length).toBeGreaterThan(0);
    });
  });

  it("no bullet is an empty string", () => {
    experiences.forEach((exp: Experience) => {
      exp.bullets.forEach((b) => expect(b.trim()).not.toBe(""));
      exp.subSection?.bullets.forEach((b) => expect(b.trim()).not.toBe(""));
    });
  });

  it("optional subSection has a title and bullets when present", () => {
    experiences.forEach((exp: Experience) => {
      if (exp.subSection) {
        expect(exp.subSection.title).toBeTruthy();
        expect(exp.subSection.bullets.length).toBeGreaterThan(0);
      }
    });
  });

  it("optional techHighlighted has no overlap with tech when present", () => {
    experiences.forEach((exp: Experience) => {
      if (exp.techHighlighted) {
        const techSet = new Set(exp.tech);
        exp.techHighlighted.forEach((t) =>
          expect(techSet.has(t)).toBe(false),
        );
      }
    });
  });
});

describe("certs", () => {
  it("has at least one entry", () => {
    expect(certs.length).toBeGreaterThan(0);
  });

  it("every cert has abbr, full, and src", () => {
    certs.forEach((cert: Cert) => {
      expect(cert.abbr).toBeTruthy();
      expect(cert.full).toBeTruthy();
      expect(cert.src).toBeTruthy();
    });
  });

  it("every cert src starts with /", () => {
    certs.forEach((cert: Cert) => {
      expect(cert.src.startsWith("/")).toBe(true);
    });
  });

  it("abbr values are unique", () => {
    const abbrs = certs.map((c) => c.abbr);
    expect(new Set(abbrs).size).toBe(abbrs.length);
  });
});

describe("greetings", () => {
  it("has multiple entries", () => {
    expect(greetings.length).toBeGreaterThan(5);
  });

  it("every greeting has text and lang", () => {
    greetings.forEach((g) => {
      expect(g.text).toBeTruthy();
      expect(g.lang).toBeTruthy();
    });
  });
});

describe("splashWords", () => {
  it("has exactly 3 words", () => {
    expect(splashWords).toHaveLength(3);
  });

  it("delays are in ascending order", () => {
    for (let i = 1; i < splashWords.length; i++) {
      expect(splashWords[i].delay).toBeGreaterThan(splashWords[i - 1].delay);
    }
  });

  it("every word has a non-empty color class", () => {
    splashWords.forEach((w) => expect(w.color).toBeTruthy());
  });
});
