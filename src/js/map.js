let mapComponents = new Image();
mapComponents.src = "./src/images/sprites/MapAndBomb.png";
mapComponents.onload = () => mapping();

let canvas = document.getElementById('ninjaBomberCanvas');
let ctx = canvas.getContext('2d');

// RELATED TO SPRITE
// sx: x position on sprite sheet
// sy: y position on sprite sheet
// sWdith: width of sprite to cut from x position
// sHeight: hieght of sprite to cut from y position

// RELATED TO CANVAS
// dx: canvas x position
// dy: canvas y position
// dWdith: Width of cut out sprite shown on canvas
// dHeight: Height of cut out sprite shown on canvas

//constants for mapping
let a = 40;
const spriteXStartPos = 3.5;
const spriteYStartPos = 2.5;
const spriteXOffset = 52;
const spriteYOffset = 52;
const spriteSheetWidth = 47.5;
const spriteSheetHeight = 47.5;
const startingX = a;
const startingY = a;
const spriteMapWidth = a;
const spriteMapHeight = a;


function drawMap(frameX, frameY, canvasX, canvasY){
  ctx.drawImage(
    mapComponents, 
    (frameX * spriteXOffset) + spriteXStartPos,
    (frameY * spriteYOffset) + spriteYStartPos,
    spriteSheetWidth,
    spriteSheetHeight,
    (startingX * canvasX),
    (startingY * canvasY),
    spriteMapWidth,
    spriteMapHeight
  );
}

export default function mapping(){
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if(i === 0 || j === 0 || i === 14 || j === 14 || ((i % 2 === 0) && (j % 2 === 0))){
        // unbreakable walls
        drawMap(1, 0, i, j);
        //shadows on grass
      // } else if((j < 2 && (j - 1) % 2 === 0) || ((j-1) % 2 === 0 && (i) % 2 === 0)){
      //   // grass with top shadow
      //   drawMap(4, 0, i, j);
      } else{
        // grass without shadow
        drawMap(3, 0, i, j);
      }
    }
  }
}