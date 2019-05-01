import Player from './players';
import placeMap from './map';
import Bomb from './bomb';

class keyControls{
  constructor(ctx, canvas, sasuke, naruto, bombImg){
    this.ctx = ctx;
    this.canvas = canvas;
    this.bombImg = bombImg;
    this.player1 = new Player(ctx, 1, 1, 0, naruto);
    this.player2 = new Player(ctx, 13, 13, 3, sasuke);
    
    this.keyDownHandler = this.keyDownHandler.bind(this);

    //direction they face (0 = down, 1 = left, 2 = right, 3 = up)
    this.narutoPos = 0;
    this.sasukePos = 0;

    this.nBomb = [];
    this.sBomb= [];
    this.givenBombs = 4;
  }

  keyDownHandler(e){
    //Naruto Controls (in order of w,a,s,d,c)
    e.preventDefault();
    const {ctx, bombImg, player1, player2, nBomb, sBomb, givenBombs} = this;
    if (e.which === 87){
      //why do we need this (maybe it's because we are assigning a new class value? Even if I had const as let)
      this.narutoPos = 3;
      if ((player1.yPos !== 1) && (player1.xPos % 2 !== 0) && 
      !((player1.xPos === player2.xPos && (player1.yPos - 1) === player2.yPos))
      ){
        this.player1.yPos -= 1;
      }
    } else if (e.which === 65){     
      this.narutoPos = 1;
      if (player1.xPos !== 1 && player1.yPos % 2 !== 0 && 
        !(((player1.xPos - 1) === player2.xPos && player1.yPos === player2.yPos))
        ){
        this.player1.xPos -= 1;
      }
    } else if (e.which === 83){
      this.narutoPos = 0;
      if (player1.yPos !== 13 && player1.xPos % 2 !== 0 && 
        !((player1.xPos === player2.xPos && (player1.yPos + 1) === player2.yPos))
        ){
        this.player1.yPos += 1;
      }
    } else if (e.which === 68){
      this.narutoPos = 2;      
      if (player1.xPos !== 13 && player1.yPos % 2 !== 0 && 
        !(((player1.xPos + 1) === player2.xPos && player1.yPos === player2.yPos))
        ){
        this.player1.xPos += 1;
      }
    }
    if (e.which === 67){
      if (nBomb.length < givenBombs){
        nBomb.push(new Bomb(ctx, bombImg, player1.xPos, player1.yPos, player1, player2));
        setTimeout(() => this.nBomb.shift(), 1700);
      }
    }
    
    //Sasuke Controls (in order of w,a,s,d,c)
    if (e.which == 38){
      this.sasukePos = 3;
      if (player2.yPos !== 1 && player2.xPos % 2 !== 0 && 
        !((player1.xPos === player2.xPos && (player2.yPos - 1) === player1.yPos))
        ){
        this.player2.yPos -= 1;
      }
    } else if (e.which === 37){
      this.sasukePos = 1;
      if (player2.xPos !== 1 && player2.yPos % 2 !== 0 && 
        !(((player2.xPos - 1) === player1.xPos && player1.yPos === player2.yPos))
        ){
        this.player2.xPos -= 1;
      }
    } else if (e.which === 40){
      this.sasukePos = 0;
      if (player2.yPos !== 13 && player2.xPos % 2 !== 0 && 
        !((player1.xPos === player2.xPos && (player2.yPos + 1) === player1.yPos))
        ){
        this.player2.yPos += 1;
      }
    } else if (e.which === 39){
      this.sasukePos = 2;
      if (player2.xPos !== 13 && player2.yPos % 2 !== 0 && 
        !(((player2.xPos + 1) === player1.xPos && player1.yPos === player2.yPos))
        ){
        this.player2.xPos += 1;
      }
    }
    if (e.which === 190){
      if (sBomb.length < givenBombs){
        sBomb.push(new Bomb(ctx, bombImg, player2.xPos, player2.yPos, player1, player2));
        setTimeout(() => this.sBomb.shift(), 1700);
      }
    }
  }

  eventListner(){
    document.addEventListener("keydown", this.keyDownHandler, false);
  }

  renderNBomb(){
    const {nBomb} = this;
    for (let i = 0; i < nBomb.length; i++) {
      nBomb[i].placeBomb();
      // setTimeout(() => nBomb.shift(), 1500);
    }
  }

  renderSBomb(){
    const {sBomb} = this;
    for (let i = 0; i < sBomb.length; i++) {
      sBomb[i].placeBomb();
    }
  }

  renderAll(){
    const {ctx, canvas, player1, player2, narutoPos, sasukePos, nBomb, sBomb} = this;
    ctx.clearRect(220, 0, canvas.width, canvas.height);
    placeMap();
    if (nBomb.length !== 0){
      this.renderNBomb();
    }
    if (sBomb.length !== 0){
      this.renderSBomb();
    }
    if (player1.dead === false){
      player1.step(narutoPos);
    } else {
      const gameOver = document.getElementById("gameOver");
      document.getElementById("loser").innerHTML = `Player 1 Lost!`;
      gameOver.setAttribute("style", "visbility: visbile");
    }
    if (player2.dead === false){
      player2.step(sasukePos);
    } else {
      const gameOver = document.getElementById("gameOver");
      document.getElementById("loser").innerHTML = `Player 2 Lost!`;
      gameOver.setAttribute("style", "visbility: visbile");
    }
    if(!player1.dead && !player2.dead){
      requestAnimationFrame(this.renderAll.bind(this));
    }
  }
}

export default keyControls;