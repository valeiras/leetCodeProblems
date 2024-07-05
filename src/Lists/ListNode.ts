export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static createFromArray(arr: number[]): ListNode {
    let nextNode = null;
    for (let ii = arr.length - 1; ii >= 0; ii--) {
      nextNode = new ListNode(arr[ii], nextNode);
    }
    return nextNode;
  }

  getVal(): number {
    return this.val;
  }
  setVal(val: number) {
    this.val = val;
  }

  getNext(): ListNode {
    return this.next;
  }
  setNext(next: ListNode) {
    this.next = next;
  }
}
