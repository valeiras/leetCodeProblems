type StackNode<T> = { val: T; min: T };
export class MinStack<T> {
  data: StackNode<T>[];

  constructor() {
    this.data = [];
  }

  push(val: T): void {
    if (this.isEmpty()) this.data.push({ val, min: val });
    else this.data.push({ val, min: val < this.getMin() ? val : this.getMin() });
  }

  pop(): void {
    this.data.pop();
  }

  top(): T | null {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1].val;
  }

  getMin(): T | null {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1].min;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}