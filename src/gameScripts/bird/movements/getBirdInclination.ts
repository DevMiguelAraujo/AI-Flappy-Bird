export default function getBirdInclination(speed: number): number{
  const maxSpeedFalling = 700
  const maxSpeedFlying = -350
  const maxFlyingInclination = -0.5
  const inclination = (speed - maxSpeedFalling) / (maxSpeedFalling - maxSpeedFlying) + maxFlyingInclination

  return inclination
}