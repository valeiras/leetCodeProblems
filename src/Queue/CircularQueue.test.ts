import { expect, test } from "vitest";
import { CircularQueue } from "./CircularQueue";

test("CircularQueue", () => {
  const circularQueue = new CircularQueue(3);
  expect(circularQueue.enQueue(1)).toBe(true); // return True
  expect(circularQueue.enQueue(2)).toBe(true); // return True
  expect(circularQueue.enQueue(3)).toBe(true); // return True
  expect(circularQueue.enQueue(4)).toBe(false); // return False
  expect(circularQueue.rear()).toBe(3); // return 3
  expect(circularQueue.isFull()).toBe(true); // return True
  expect(circularQueue.deQueue()).toBe(true); // return True
  expect(circularQueue.enQueue(4)).toBe(true); // return True
  expect(circularQueue.rear()).toBe(4); // return 4
});
