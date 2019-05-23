import placeMap from './js/map';
import keyControls from './js/keyControls';
import { isContext } from 'vm';

//add event listenr to player
document.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById('start');
  const instructions = document.getElementById("instructions");
  const gameOver = document.getElementById("gameOver");

  start.addEventListener("click", () => {
    start.setAttribute("style", "visibility: hidden");
    instructions.setAttribute("style", "visibility:visible");
  });

  instructions.addEventListener("click", () => {
    instructions.setAttribute("style", "visibility: hidden");
    gameStart();
  });

  gameOver.addEventListener("click", () => {
    gameOver.setAttribute("style", "visibility: hidden");
    start.setAttribute("style", "visibility: show");
  });

  const gameStart = () => {
    let canvas = document.getElementById('ninjaBomberCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let naruto = new Image();
    naruto.src = "./src/images/sprites/naruto.png";
    
    let sasuke = new Image();
    sasuke.src = "./src/images/sprites/sasuke.png";
    
    let bomb = new Image();
    bomb.src = "./src/images/sprites/MapAndBomb.png";
    // bomb.onload = () => bomberDraw();
    // let narutoInstructions = new Instructions(ctx, canvas, 0, 0, 0, naruto);
    let controls = new keyControls(ctx, canvas, sasuke, naruto, bomb);
    controls.eventListner();
    controls.renderAll();
  };
});