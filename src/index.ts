import setResetScreen from "./canvas/resetScreen";

const canvas = document.getElementById("gameArea") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const resetScreen = setResetScreen(ctx)
resetScreen()