export class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }

  static createFromArray<T>(arr: T[]): ListNode<T> {
    let nextNode = null;
    for (let ii = arr.length - 1; ii >= 0; ii--) {
      nextNode = new ListNode<T>(arr[ii], nextNode);
    }
    return nextNode;
  }

  getVal(): T {
    return this.val;
  }

  setVal(val: T) {
    this.val = val;
  }

  getNext(): ListNode<T> | null {
    return this.next;
  }

  setNext(next: ListNode<T> | null) {
    this.next = next;
  }
}
