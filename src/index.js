import placeMap from './js/map';
import keyControls from './js/keyControls';

//add event listenr to player
let canvas = document.getElementById('ninjaBomberCanvas');
let ctx = canvas.getContext('2d');

let naruto = new Image();
naruto.src = "../src/images/sprites/naruto.png";

let sasuke = new Image();
sasuke.src = "../src/images/sprites/sasuke.png";

let bomb = new Image();
bomb.src = "../src/images/sprites/MapAndBomb.png";
// bomb.onload = () => bomberDraw();

let controls = new keyControls(ctx, canvas, sasuke, naruto, bomb);
controls.eventListner();
controls.step();

// function bomberDraw(){
//   // ctx.drawImage(
//   //   bomb,
//   //   3.5 + (52*2),
//   //   2.5 + (52*2),
//   //   47.5,
//   //   47.5,
//   //   0,
//   //   0,
//   //   28.7,
//   //   28.7
//   // );
// }