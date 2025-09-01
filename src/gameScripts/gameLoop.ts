let lastUpdate = 0;
export default function setGameLoop(
  resetScreen: () => void,
  birdLoop: (deltaTime: number) => void
) {
  return function loop(timestamp: number){
    resetScreen();
    if (lastUpdate === 0) {
      lastUpdate = timestamp;
    }
    // Calcula o tempo decorrido desde a última atualização em segundos
    const deltaTime = (timestamp - lastUpdate) / 1000;
    birdLoop(deltaTime);
    // Atualiza o tempo da última atualização para o tempo atual
    lastUpdate = timestamp;
    
    requestAnimationFrame(loop)
  };
}
