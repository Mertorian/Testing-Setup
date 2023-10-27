import { describe, it, expect } from "vitest";
import { calculateSum } from "./calculateSum";

describe("calculateSum", () => {
  it("should return the sum of two numbers", () => {
    expect(calculateSum(1, 2)).toBe(3);
    expect(calculateSum(-1, 2)).toBe(1);
  });

  it("should return 4 (not  '22') when adding '2' and '2'", () => {
    expect(calculateSum("2", "2")).toBe(4);
  });
});
