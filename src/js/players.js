import placeMap from './map';

let naruto = new Image();
naruto.src = "../src/images/sprites/naruto.png";
naruto.onload = function(){
  players();
};

let sasuke = new Image();
sasuke.src = "../src/images/sprites/sasuke.png";
sasuke.onload = function(){
  players();
};

let canvas = document.getElementById('ninjaBomberCanvas');
let ctx = canvas.getContext('2d');

const spriteSheetWidth = 28;
const spriteSheetHeight = 46;
const startingX = 28.7;
const startingY = 28.7;
const spriteWidth = 20;
const spriteHeight = 28.7;

const spriteXStartPos = 10;
const spriteYStartPos = 9;
const spriteXOffset = 46;
const spriteYOffset = 65;
const xMapOffset = 225.3;

function drawFrame(frameX, frameY, canvasX, canvasY){
  ctx.drawImage(
    naruto, 
    (frameX * spriteXOffset) + spriteXStartPos,
    (frameY * spriteYOffset) + spriteYStartPos,
    spriteSheetWidth,
    spriteSheetHeight,
    startingX * canvasX,
    startingY * canvasY,
    spriteWidth,
    spriteHeight
  );
}

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  placeMap();
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  // window.requestAnimationFrame(step);
}

export default function players(){
  // drawFrame(0,0,0,0);
  // drawFrame(1,0,1,0);
  // drawFrame(2,0,2,0);
  // drawFrame(3,0,3,0);
  window.requestAnimationFrame(step);
  // ctx.drawImage(
  //   naruto,
  //   10,
  //   74,
  //   28,
  //   46,
  //   0,
  //   0,
  //   20,
  //   28.7
  // );
}