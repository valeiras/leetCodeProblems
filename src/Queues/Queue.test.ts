import { expect, test } from "vitest";
import { Queue } from "./Queue";

test("CircularQueue", () => {
  const queue = new Queue();
  expect(queue.enQueue(1)).toBe(true);
  expect(queue.enQueue(2)).toBe(true);
  expect(queue.enQueue(3)).toBe(true);
  expect(queue.enQueue(4)).toBe(true);
  expect(queue.front()).toBe(1);
  expect(queue.deQueue()).toBe(true);
  expect(queue.enQueue(4)).toBe(true);
  expect(queue.front()).toBe(2);
  expect(queue.deQueue()).toBe(true);
  expect(queue.front()).toBe(3);
});
