import type { Bird } from "../../types/types";

export default function setDefaultBird(
  canvas: HTMLCanvasElement
): (config?: Partial<Bird>) => Bird {
  return (config = {}) => {
    const {
      x = canvas.width / 10,
      y = canvas.height / 3.5,
      width = 30,
      height = 20,
      color = "yellow",
      speed = 0,
      upwardSpeedLimit = -450,
      downwardSpeedLimit = 700,
      isActive = true,
    } = config;
    return {
      x,
      y,
      width,
      height,
      color,
      speed,
      upwardSpeedLimit,
      downwardSpeedLimit,
      isActive,
    };
  };
}
