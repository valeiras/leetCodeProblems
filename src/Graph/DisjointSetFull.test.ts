import { describe, expect, it } from "vitest";
import { DisjointSetFull } from "./DisjointSetFull";

describe("DisjointSetFull", () => {
  it("Find should reject vertices out of bounds", () => {
    const newSet = new DisjointSetFull({ n: 2 });
    expect(() => newSet.find(2)).toThrow();
  });

  it("Union should reject vertices out of bounds", () => {
    const newSet = new DisjointSetFull({ n: 2 });
    expect(() => newSet.union([2, 4])).toThrow();
  });

  it("Should correctly find root indices with quick find", () => {
    const newSetWithEdges = new DisjointSetFull({
      n: 5,
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      algorithm: "quick find",
    });
    expect(newSetWithEdges.find(0)).toBe(0);
    expect(newSetWithEdges.find(1)).toBe(0);
    expect(newSetWithEdges.find(2)).toBe(0);
    expect(newSetWithEdges.find(3)).toBe(0);
    expect(newSetWithEdges.find(4)).toBe(0);
  });

  it("Should correctly find root indices with quick union", () => {
    const newSetWithEdges = new DisjointSetFull({
      n: 5,
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      algorithm: "quick union",
    });
    expect(newSetWithEdges.find(0)).toBe(0);
    expect(newSetWithEdges.find(1)).toBe(0);
    expect(newSetWithEdges.find(2)).toBe(0);
    expect(newSetWithEdges.find(3)).toBe(0);
    expect(newSetWithEdges.find(4)).toBe(0);
  });
});
