import { expect, test } from "vitest";
import { createAndFill2DArray } from "./createAndFill2DArray";
test("createAndFill2DArray", () => {
  expect(createAndFill2DArray({ nbRows: 2, nbColumns: 3, defaultValue: 0 })).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
  expect(createAndFill2DArray({ nbRows: 0, nbColumns: 0, defaultValue: 0 })).toBe(null);
  expect(createAndFill2DArray({ nbRows: 1, nbColumns: 1, defaultValue: true })).toEqual([[true]]);
  expect(createAndFill2DArray({ nbRows: 1, nbColumns: 3, defaultValue: "pipo" })).toEqual([["pipo", "pipo", "pipo"]]);
});
