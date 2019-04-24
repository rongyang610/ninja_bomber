import placeMap from './js/map';
import keyControls from './js/keyControls';

//add event listenr to player
let canvas = document.getElementById('ninjaBomberCanvas');
let ctx = canvas.getContext('2d');

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