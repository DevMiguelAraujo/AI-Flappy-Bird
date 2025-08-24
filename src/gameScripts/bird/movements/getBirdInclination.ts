export default function getBirdInclination(
  speed: number,
  upwardSpeedLimit: number,
  downwardSpeedLimit: number
): number {
  if (!speed) return 0;

  if (speed < 0) {
    return (speed / (downwardSpeedLimit * -1)) * 0.5;
  } else {
    return (speed / upwardSpeedLimit) * 0.5;
  }
}
