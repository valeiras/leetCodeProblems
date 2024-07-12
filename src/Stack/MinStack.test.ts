import { describe, expect, it, test } from "vitest";
import { MinStack } from "./MinStack";

describe("MinStack", () => {
  it("Should accept an empty constructor", () => {
    const stack = new MinStack<number>();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should accept elements", () => {
    const stack = new MinStack<number>();
    stack.push(1);
    expect(stack.top()).toBe(1);
  });

  it("Should remove elements", () => {
    const stack = new MinStack<number>();
    stack.push(1);
    stack.pop();
    expect(stack.top()).toBe(null);
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should compute the min", () => {
    const stack = new MinStack<number>();
    stack.push(5);
    stack.push(2);
    stack.push(3);
    stack.push(1);
    expect(stack.top()).toBe(1);
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(2);
  });
});
