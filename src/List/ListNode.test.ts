import { describe, expect, it } from "vitest";
import { ListNode } from "./ListNode";

describe("ListNode", () => {
  it("Should be created by the constructor using numbers", () => {
    const secondListNode = new ListNode(5, null);
    expect(secondListNode.getVal()).toBe(5);
    expect(secondListNode.getNext()).toBe(null);

    const firstListNode = new ListNode(22, secondListNode);
    expect(firstListNode.getVal()).toBe(22);
    expect(firstListNode.getNext()).toBe(secondListNode);
  });

  it("Should be created from an array of integers", () => {
    const n = 10;
    let listNode = ListNode.createFromArray(Array.from({ length: n }, (_, ii) => ii));
    for (let ii = 0; ii < n; ii++) {
      expect(listNode.getVal()).toBe(ii);
      listNode = listNode.getNext();
    }
  });

  it("Should be created by the constructor using booleans", () => {
    const secondListNode = new ListNode(false, null);
    expect(secondListNode.getVal()).toBe(false);
    expect(secondListNode.getNext()).toBe(null);

    const firstListNode = new ListNode(true, secondListNode);
    expect(firstListNode.getVal()).toBe(true);
    expect(firstListNode.getNext()).toBe(secondListNode);
  });

  it("Should be created from an array of booleans", () => {
    const arr = [false, true, true, false];
    let listNode = ListNode.createFromArray(arr);
    for (let ii = 0; ii < arr.length; ii++) {
      expect(listNode.getVal()).toBe(arr[ii]);
      listNode = listNode.getNext();
    }
  });

  it("Should be created from an array of objects", () => {
    type objType = { name: string; age: number };
    const arr: objType[] = [
      { name: "Luis", age: 35 },
      { name: "Maricarmen", age: 22 },
      { name: "Jorge", age: 21 },
      { name: "Carmen", age: 42 },
    ];
    let listNode = ListNode.createFromArray(arr);
    for (let ii = 0; ii < arr.length; ii++) {
      expect(listNode.getVal()).toEqual(arr[ii]);
      listNode = listNode.getNext();
    }
  });
});
