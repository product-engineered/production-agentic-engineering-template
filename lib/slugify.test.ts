import { describe, expect, it } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  it("lowercases and hyphenates spaces", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips diacritics", () => {
    expect(slugify("Crème Brûlée")).toBe("creme-brulee");
  });

  it("collapses runs of non-alphanumerics into a single hyphen", () => {
    expect(slugify("foo --- bar___baz")).toBe("foo-bar-baz");
  });

  it("trims leading and trailing separators", () => {
    expect(slugify("  ?!hello?!  ")).toBe("hello");
  });

  it("returns an empty string when there are no alphanumerics", () => {
    expect(slugify("---???")).toBe("");
  });
});
