import { Queue } from "../Queue";

export function numIslands(grid: string[][]): number {
  if (grid.length == 0 || grid[0].length == 0) return 0;

  let nbIslands = 0;
  const n = grid.length;
  const m = grid[0].length;
  const queue = new Queue<[number, number]>();

  const checkNeighbour = (i: number, j: number) => {
    if (grid[i][j] === "1") {
      grid[i][j] = "0";
      queue.enQueue([i, j]);
    }
  };

  for (let ii = 0; ii < n; ii++) {
    for (let jj = 0; jj < m; jj++) {
      if (grid[ii][jj] === "1") {
        queue.enQueue([ii, jj]);
        nbIslands++;
      }
      while (!queue.isEmpty()) {
        const [currI, currJ] = queue.front();

        if (currJ + 1 < m) checkNeighbour(currI, currJ + 1);
        if (currI + 1 < n) checkNeighbour(currI + 1, currJ);
        if (currI - 1 >= 0) checkNeighbour(currI - 1, currJ);
        if (currJ - 1 >= 0) checkNeighbour(currI, currJ - 1);

        queue.deQueue();
      }
    }
  }
  return nbIslands;
}
