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

function drawFrame(player, frameX, frameY, canvasX, canvasY){
  ctx.drawImage(
    player, 
    (frameX * spriteXOffset) + spriteXStartPos,
    (frameY * spriteYOffset) + spriteYStartPos,
    spriteSheetWidth,
    spriteSheetHeight,
    startingX * canvasX + xMapOffset,
    startingY * canvasY,
    spriteWidth,
    spriteHeight
  );
}

export default function players(){
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