import type { Bird } from "../../types/types";

export default function setDefaultBird(canvas: HTMLCanvasElement): () => Bird {
  return () => {
    return {
      x: canvas.width / 10,
      y: canvas.height / 3.5,
      width: 30,
      height: 20,
      color: 'yellow',
      speed: 0,
      upwardSpeedLimit: -450,
      downwardSpeedLimit: 700,
    };
  };
}
