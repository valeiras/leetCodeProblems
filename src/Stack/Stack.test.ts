import { describe, expect, it, test } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("Should accept an empty constructor", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should accept an integer array in the constructor", () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.top()).toBe(3);
  });

  it("Should accept a string array in the constructor", () => {
    const stack = new Stack(["5", "pipo", "gru"]);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.top()).toBe("gru");
    stack.pop();
    stack.pop();
    expect(stack.top()).toBe("5");
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
