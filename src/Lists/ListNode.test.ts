import { describe, expect, it } from "vitest";
import { ListNode } from "./ListNode";

describe("ListNode", () => {
  it("Should be created by the constructor", () => {
    const secondListNode = new ListNode(5, null);
    expect(secondListNode.getVal()).toBe(5);
    expect(secondListNode.getNext()).toBe(null);

    const firstListNode = new ListNode(22, secondListNode);
    expect(firstListNode.getVal()).toBe(22);
    expect(firstListNode.getNext()).toBe(secondListNode);
  });

  it("Should be created from an array", () => {
    const n = 10;
    let listNode = ListNode.createFromArray(Array.from({ length: n }, (_, ii) => ii));
    for (let ii = 0; ii < n; ii++) {
      expect(listNode.getVal()).toBe(ii);
      listNode = listNode.getNext();
    }
  });
});
