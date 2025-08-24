export default function setResetScreen(ctx: CanvasRenderingContext2D): () => void {
  return () => {
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };
}
