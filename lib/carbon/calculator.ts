export function calculateCarbon(
  transport: number,
  electricity: number
) {
  const transportEmission = transport * 0.21;
  const electricityEmission = electricity * 0.43;

  return transportEmission + electricityEmission;
}