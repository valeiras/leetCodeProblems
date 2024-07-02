function intersect(nums1: number[], nums2: number[]): number[] {
  const isVisited = Array<boolean>(nums2.length).fill(false);
  const intersection = [];
  for (let ii = 0; ii < nums1.length; ii++) {
    let jj = 0;
    let keepLooping = true;
    while (jj < nums2.length && keepLooping) {
      if (nums1[ii] === nums2[jj] && !isVisited[jj]) {
        intersection.push(nums1[ii]);
        isVisited[jj] = true;
        keepLooping = false;
      }
      jj++;
    }
  }
  return intersection;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersect(nums1, nums2));
