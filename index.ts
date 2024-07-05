function flippingMatrix(matrix: number[][]): number {
  let hasChanged = true;
  const l = matrix.length;
  while (hasChanged) {
    hasChanged = false;
    for (let ii = 0; ii < l; ii++) {
      const s1 = sumFirstHalfRow(matrix, ii);
      const s2 = sumSecondHalfRow(matrix, ii);
      if (sumFirstHalfRow(matrix, ii) < sumSecondHalfRow(matrix, ii)) {
        reverseRow(matrix, ii);
        hasChanged = true;
        console.log(matrix);
      }
    }
    for (let ii = 0; ii < l; ii++) {
      const c1 = sumFirstHalfCol(matrix, ii);
      const c2 = sumSecondHalfCol(matrix, ii);
      if (sumFirstHalfCol(matrix, ii) < sumSecondHalfCol(matrix, ii)) {
        reverseCol(matrix, ii);
        hasChanged = true;
        console.log(matrix);
      }
    }
    console.log(matrix);
  }

  return sumUpperLeft(matrix);
}

function sumFirstHalfRow(matrix: number[][], rowNum: number) {
  let sum = 0;
  for (let ii = 0; ii < matrix.length / 2; ii++) {
    sum += matrix[rowNum][ii];
  }
  return sum;
}

function sumSecondHalfRow(matrix: number[][], rowNum: number) {
  let sum = 0;
  for (let ii = matrix.length / 2; ii < matrix.length; ii++) {
    sum += matrix[rowNum][ii];
  }
  return sum;
}

function sumSecondHalfCol(matrix: number[][], colNum: number) {
  let sum = 0;
  for (let ii = matrix.length / 2; ii < matrix.length; ii++) {
    sum += matrix[ii][colNum];
  }
  return sum;
}

function sumFirstHalfCol(matrix: number[][], colNum: number) {
  let sum = 0;
  for (let ii = 0; ii < matrix.length / 2; ii++) {
    sum += matrix[ii][colNum];
  }
  return sum;
}

function reverseRow(matrix: number[][], rowNum: number) {
  const l = matrix.length;
  for (let ii = 0; ii < l / 2; ii++) {
    const tmp = matrix[rowNum][ii];
    matrix[rowNum][ii] = matrix[rowNum][l - 1 - ii];
    matrix[rowNum][l - 1 - ii] = tmp;
  }
}

function reverseCol(matrix: number[][], colNum: number) {
  const l = matrix.length;
  for (let ii = 0; ii < l / 2; ii++) {
    const tmp = matrix[ii][colNum];
    matrix[ii][colNum] = matrix[l - 1 - ii][colNum];
    matrix[l - 1 - ii][colNum] = tmp;
  }
}

function sumUpperLeft(matrix: number[][]) {
  const l = matrix.length;
  let sum = 0;
  for (let ii = 0; ii < l / 2; ii++) {
    for (let jj = 0; jj < l / 2; jj++) {
      sum += matrix[ii][jj];
    }
  }
  return sum;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
