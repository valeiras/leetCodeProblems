export function createAndFill2DArray<T>({
  nbRows,
  nbColumns,
  defaultValue,
}: {
  nbRows: number;
  nbColumns: number;
  defaultValue: T;
}): T[][] | null {
  if (nbRows === 0 || nbColumns === 0) return null;
  return Array.from({ length: nbRows }, () => Array.from({ length: nbColumns }, () => defaultValue));
}
