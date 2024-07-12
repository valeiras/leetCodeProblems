export function lengthOfLongestSubstring(s: string, method: "map" | "substring" = "map"): number {
  if (method === "map") {
    let map = new Map<string, number>();
    let maxLen = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
      if (map.has(s[right])) {
        left = Math.max(map.get(s[right]), left);
      }
      maxLen = Math.max(maxLen, right - left + 1);
      map.set(s[right], right + 1);
    }
    return maxLen;
  } else {
    let startIdx = 0;
    let endIdx = 1;
    let maxLen = s.length === 0 ? 0 : 1;
    while (endIdx < s.length) {
      const currChar = s.charAt(endIdx);
      const currSubstr = s.slice(startIdx, endIdx);
      if (!currSubstr.includes(currChar)) {
        endIdx++;
        maxLen = Math.max(maxLen, endIdx - startIdx);
      } else {
        const diff = currSubstr.indexOf(currChar);
        startIdx += diff + 1;
      }
    }
    return maxLen;
  }
}
