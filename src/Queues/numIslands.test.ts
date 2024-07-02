import { describe, expect, test } from "vitest";
import { numIslands } from "./numIslands";

describe("numIslands", () => {
  test("Empty array should return 0", () => {
    expect(numIslands([])).toEqual(0);
  });

  test("One islands", () => {
    expect(
      numIslands([
        ["1", "1", "1"],
        ["0", "1", "0"],
        ["1", "1", "1"],
      ])
    ).toBe(1);
  });

  test("Three islands", () => {
    expect(
      numIslands([
        ["1", "1", "0", "0"],
        ["1", "0", "1", "1"],
        ["0", "0", "1", "1"],
        ["1", "0", "1", "1"],
      ])
    ).toBe(3);
  });

  test("Four islands", () => {
    expect(
      numIslands([
        ["1", "1", "0", "0"],
        ["1", "0", "1", "1"],
        ["0", "0", "1", "1"],
        ["1", "0", "1", "1"],
        ["0", "1", "0", "1"],
      ])
    ).toBe(4);
  });
});
