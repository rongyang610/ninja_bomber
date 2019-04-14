import placeMap from './js/map';
import keyControls from './js/keyControls';

//add event listenr to player
let canvas = document.getElementById('ninjaBomberCanvas');
let ctx = canvas.getContext('2d');

let naruto = new Image();
naruto.src = "../src/images/sprites/naruto.png";

let sasuke = new Image();
sasuke.src = "../src/images/sprites/sasuke.png";

let controls = new keyControls(ctx, canvas, sasuke, naruto);
controls.eventListner();
controls.step(0);

// const spriteSheetWidth = 28;
// const spriteSheetHeight = 46;
// const startingX = 28.7;
// const startingY = 28.7;
// const spriteWidth = 20;
// const spriteHeight = 28.7;

// const spriteXStartPos = 10;
// const spriteYStartPos = 9;
// const spriteXOffset = 46;
// const spriteYOffset = 65;
// const xMapOffset = 225.3;

// function drawFrame(player, frameX, frameY, canvasX, canvasY){
//   ctx.drawImage(
//     player, 
//     (frameX * spriteXOffset) + spriteXStartPos,
//     (frameY * spriteYOffset) + spriteYStartPos,
//     spriteSheetWidth,
//     spriteSheetHeight,
//     startingX * canvasX + xMapOffset,
//     startingY * canvasY,
//     spriteWidth,
//     spriteHeight
//   );
// }

// const cycleLoop = [0, 1, 2, 3];
// let currentLoopIndex = 0;
// let frameCount = 0;

// function step() {
//   frameCount++;
//   if (frameCount < 20){
//     window.requestAnimationFrame(step);
//     return;
//   }
//   frameCount=0;
//   ctx.clearRect(
//     (startingX + xMapOffset), 
//     startingY, 
//     spriteWidth, 
//     spriteHeight
//     );
//     placeMap();
//   drawFrame(naruto, cycleLoop[currentLoopIndex], 0, 1, 1);
//   currentLoopIndex++;
//   if (currentLoopIndex >= cycleLoop.length) {
//     currentLoopIndex = 0;
//   }
//   window.requestAnimationFrame(step);
// }

// function players(){
//   window.requestAnimationFrame(step);
//   // ctx.drawImage(
//   //   naruto,
//   //   10,
//   //   74,
//   //   28,
//   //   46,
//   //   0,
//   //   0,
//   //   20,
//   //   28.7
//   // );
// }