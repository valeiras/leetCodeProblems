export class Queue<T> {
  head: number;
  data: T[];

  constructor() {
    this.head = 0;
    this.data = [];
  }

  enQueue(x: T): boolean {
    this.data.push(x);
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head++;
    return true;
  }

  front(): T | null {
    if (this.isEmpty()) return null;
    return this.data[this.head];
  }

  getFrontAndDequeue(): T {
    const front = this.front();
    this.deQueue();
    return front;
  }

  isEmpty(): boolean {
    return this.head >= this.data.length;
  }

  size(): number {
    return this.data.length - this.head;
  }
}
