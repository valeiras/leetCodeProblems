import { describe, expect, it } from "vitest";
import { DisjointSet } from "./DisjointSet";

describe("DisjointSet", () => {
  it("Find should reject vertices out of bounds", () => {
    const newSet = new DisjointSet({ n: 2 });
    expect(() => newSet.find(2)).toThrow();
  });

  it("Union should reject vertices out of bounds", () => {
    const newSet = new DisjointSet({ n: 2 });
    expect(() => newSet.union(2, 4)).toThrow();
  });

  it("Should correctly find root indices", () => {
    const newSetWithEdges = new DisjointSet({
      n: 5,
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    });
    expect(newSetWithEdges.find(0)).toBe(0);
    expect(newSetWithEdges.find(1)).toBe(0);
    expect(newSetWithEdges.find(2)).toBe(0);
    expect(newSetWithEdges.find(3)).toBe(0);
    expect(newSetWithEdges.find(4)).toBe(0);
  });
});
