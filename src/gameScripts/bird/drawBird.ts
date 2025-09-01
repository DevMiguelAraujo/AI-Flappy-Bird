import type { Bird } from "../../types/types";
import getBirdInclination from "./movements/getBirdInclination";

export default function setDrawBird(ctx: CanvasRenderingContext2D) {
  return (Bird: Bird) => {
    ctx.beginPath();
    ctx.ellipse(Bird.x, Bird.y, Bird.width, Bird.height, getBirdInclination(Bird.speed, Bird.downwardSpeedLimit, Bird.upwardSpeedLimit), 0, 2 * Math.PI);
    ctx.fillStyle = Bird.color;
    ctx.fill();
  };
}
