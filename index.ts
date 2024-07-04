function pangrams(s: string): string {
  const nbChars = 25;
  const charA = 97;
  const isPresent = Array<boolean>(nbChars).fill(false);
  const l = s.length;
  s = s.toLowerCase();

  for (let ii = 0; ii < l; ii++) {
    if (s.toLowerCase().charAt(ii) !== " ") {
      const idx = s.charCodeAt(ii) - charA;
      isPresent[idx] = true;
    }
  }

  for (let ii = 0; ii < nbChars; ii++) {
    if (!isPresent[ii]) return "not pangram";
  }
  return "pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
