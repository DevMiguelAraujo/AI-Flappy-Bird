import type { Bird } from "../../types/types";
import getBirdInclination from "./movements/getBirdInclination";

export default function setDrawBird(ctx: CanvasRenderingContext2D, { x, y, speed, width, height, downwardSpeedLimit, upwardSpeedLimit, color }: Bird) {
  return () => {
    ctx.beginPath();
    ctx.ellipse(x, y, width, height, getBirdInclination(speed, downwardSpeedLimit, upwardSpeedLimit), 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };
}
