export function validateActivityInput(
  transport: number,
  electricity: number
): boolean {
  if (
    isNaN(transport) ||
    isNaN(electricity)
  ) {
    return false;
  }

  if (
    transport < 0 ||
    electricity < 0
  ) {
    return false;
  }

  if (
    transport > 100000 ||
    electricity > 100000
  ) {
    return false;
  }

  return true;
}