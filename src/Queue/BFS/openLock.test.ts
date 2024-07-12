import { expect, test } from "vitest";
import { openLock } from "./openLock";

test('dead: ["0201","0101","0102","1212","2002"], target: "0202" should output 6', () => {
  expect(openLock(["0201", "0101", "0102", "1212", "2002"], "0202")).toBe(6);
});

test('dead: ["8888"], target: "0009" should output 1', () => {
  expect(openLock(["8888"], "0009")).toBe(1);
});

test('dead: ["0000"], target: "0009" should output -1', () => {
  expect(openLock(["0000"], "0009")).toBe(-1);
});

test('dead: ["8887","8889","8878","8898","8788","8988","7888","9888"], target: "8888" should output -1', () => {
  expect(openLock(["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888")).toBe(-1);
});
