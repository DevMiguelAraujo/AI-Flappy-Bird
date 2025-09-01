import type { Bird } from "../../types/types";

export default function setBirdLoop(
  birds: Bird[],
  drawBird: (bird: Bird)=>void,
): (deltaTime: number) => void {
  return (deltaTime: number) => {
    const gravity = 2000;
    birds
      .filter((bird) => bird.isActive)
      .forEach((bird) => {
        if (bird.speed < bird.downwardSpeedLimit) {
          // Checar desestruturação
          bird.speed += gravity * deltaTime;
        } else {
          bird.speed = bird.downwardSpeedLimit;
        }
        bird.y += bird.speed * deltaTime;
        drawBird(bird)
      });
  };
}
