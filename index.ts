function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  const n = nums.length;

  for (let ii = 0; ii < n; ii++) {
    const complementIdx = map.get(target - nums[ii]);
    if (complementIdx !== undefined) return [ii, complementIdx];
    map.set(nums[ii], ii);
  }
  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
