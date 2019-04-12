

const cycleLoop = [0, 1, 2, 3];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 20){
    window.requestAnimationFrame(step);
    return;
  }
  frameCount=0;
  ctx.clearRect(
    (startingX + xMapOffset), 
    startingY, 
    spriteWidth, 
    spriteHeight
    );
    placeMap();
  drawFrame(naruto, cycleLoop[currentLoopIndex], 0, 1, 1);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  // window.requestAnimationFrame(step);
}