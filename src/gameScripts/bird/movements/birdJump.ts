import type { Bird } from "../../../types/types"

export default function birdJump(bird: Bird): void{
  bird.velocity = -450
}