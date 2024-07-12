import { expect, test } from "vitest";
import { numSquares } from "./numSquares";

test("NumSquares(12) to be 3", () => {
  expect(numSquares(12)).toBe(3);
});

test("NumSquares(7168) to be 4", () => {
  expect(numSquares(7168)).toBe(4);
});
