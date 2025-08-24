import setResetScreen from "./canvas/resetScreen";
import setDrawBird from "./gameScripts/bird/drawBird";
import setDefaultBird from "./gameScripts/bird/setDefaultBird";

const canvas = document.getElementById("gameArea") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const resetScreen = setResetScreen(ctx)
const bird = setDefaultBird(canvas)()
// const bird = getDefaultBird()
const drawBird = setDrawBird(ctx, bird)

resetScreen()
drawBird()