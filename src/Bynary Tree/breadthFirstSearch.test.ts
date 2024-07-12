import { expect, test } from "vitest";
import { breadthFirstSearch } from "./breadthFirstSearch";
import { createNodesFromArray } from "./createNodesFromArray";

test("[3,9,20,null,null,15,7] should output [[3],[9,20],[15,7]]", () => {
  const nodeArray = [3, 9, 20, null, null, 15, 7];
  const root = createNodesFromArray(nodeArray);
  const expected = [[3], [9, 20], [15, 7]];
  expect(breadthFirstSearch(root)).toEqual(expected);
});

test("[] should output []", () => {
  const nodeArray = [];
  const root = createNodesFromArray(nodeArray);
  const expected = [];
  expect(breadthFirstSearch(root)).toEqual(expected);
});

test("[0] should output [[0]]", () => {
  const nodeArray = [0];
  const root = createNodesFromArray(nodeArray);
  const expected = [[0]];
  expect(breadthFirstSearch(root)).toEqual(expected);
});

test("[0, 1, null, 3, 4, null, 4] should output [[0], [1], [3, 4], [4]]", () => {
  const nodeArray = [0, 1, null, 3, 4, null, 4];
  const root = createNodesFromArray(nodeArray);
  const expected = [[0], [1], [3, 4], [4]];
  expect(breadthFirstSearch(root)).toEqual(expected);
});

test("[0, 1, 2, 3, 4, null, 4] should output [[0], [1, 2], [3, 4, 4]]", () => {
  const nodeArray = [0, 1, 2, 3, 4, null, 4];
  const root = createNodesFromArray(nodeArray);
  const expected = [[0], [1, 2], [3, 4, 4]];
  expect(breadthFirstSearch(root)).toEqual(expected);
});
