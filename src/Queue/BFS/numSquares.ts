import { Queue } from "../Queue";

export function numSquares(n: number): number {
  if (n <= 0) return 0;

  const perfectSquares: number[] = [];
  let int = 1;

  let seen: Set<number> = new Set();

  while (int * int <= n) {
    perfectSquares.push(int * int);
    int++;
  }

  const queue = new Queue<number>();
  queue.enQueue(0);

  let count = 0;

  while (!queue.isEmpty()) {
    const elementsInThisLevel = queue.size();
    for (let ii = 0; ii < elementsInThisLevel; ii++) {
      const front = queue.getFrontAndDequeue();
      if (front === n) return count;
      for (let jj = 0; jj < perfectSquares.length; jj++) {
        const candidate = front + perfectSquares[jj];
        if (!seen.has(candidate) && candidate <= n) {
          queue.enQueue(candidate);
          seen.add(candidate);
        }
      }
    }
    count++;
  }
  return 0;
}
