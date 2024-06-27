import { expect, test } from "vitest";
import { createNodesFromArray } from "./createNodesFromArray";

test("[3,9,20,null,null,15,7] should output three levels [[3],[9,20],[15,7]]", () => {
  const nodeArray = [3, 9, 20, null, null, 15, 7];
  const root = createNodesFromArray(nodeArray);
  expect(root.val).toBe(3);
  expect(root.left.val).toBe(9);
  expect(root.right.val).toBe(20);
  expect(root.left.left).toBe(null);
  expect(root.left.right).toBe(null);
  expect(root.right.left.val).toBe(15);
  expect(root.right.right.val).toBe(7);
});

test("[0, 1, 2, 3, 4, null, 4] should output three levels [[0], [1, 2], [3, 4, 4]]", () => {
  const nodeArray = [0, 1, 2, 3, 4, null, 4];
  const root = createNodesFromArray(nodeArray);
  expect(root.val).toBe(0);
  expect(root.left.val).toBe(1);
  expect(root.right.val).toBe(2);
  expect(root.left.left.val).toBe(3);
  expect(root.left.right.val).toBe(4);
  expect(root.right.left).toBe(null);
  expect(root.right.right.val).toBe(4);
});

test("[0, 1, null, null, 4, null, 5, 6, null] should output five levels [[0], [1], [4], [5], [6]]", () => {
  const nodeArray = [0, 1, null, null, 4, null, 5, 6, null];
  const root = createNodesFromArray(nodeArray);
  expect(root.val).toBe(0);
  expect(root.left.val).toBe(1);
  expect(root.right).toBe(null);
  expect(root.left.left).toBe(null);
  expect(root.left.right.val).toBe(4);
  expect(root.left.right.left).toBe(null);
  expect(root.left.right.right.val).toBe(5);
  expect(root.left.right.right.left.val).toBe(6);
  expect(root.left.right.right.right).toBe(null);
});
