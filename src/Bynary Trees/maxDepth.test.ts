import { expect, test } from "vitest";
import { maxDepth } from "./maxDepth";
import { createNodesFromArray } from "./createNodesFromArray";

test("[3,9,20,null,null,15,7] should output three levels [[3],[9,20],[15,7]]", () => {
  const nodeArray = [3, 9, 20, null, null, 15, 7];
  const root = createNodesFromArray(nodeArray);
  expect(maxDepth(root)).toBe(3);
});

test("[0, 1, null, null, 4, null, 5, 6, null] should output five levels [[0], [1], [4], [5], [6]]", () => {
  const nodeArray = [0, 1, null, null, 4, null, 5, 6, null];
  const root = createNodesFromArray(nodeArray);
  expect(maxDepth(root)).toBe(5);
});
