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
    // first player
    this.wPressed = false;
    this.aPressed = false;
    this.sPressed = false;
    this.dPressed = false;
    this.cPressed = false; //1st player bomb
    // 2nd player
    this.upPressed = false;
    this.leftPressed = false;
    this.downPressed = false;
    this.rightPressed = false;
    this.perPressed = false; //2nd player bomb
    
    this.narutoKeyDownHandler = this.narutoKeyDownHandler.bind(this);
    this.sasukeKeyDownHandler = this.sasukeKeyDownHandler.bind(this);
    this.narutoPos = 0;
    this.sasukePos = 0;

    this.nBomb = [];
    this.sBomb= [];
  }

  narutoKeyDownHandler(e){
    //in order of w,a,s,d,c
    if (e.which === 87){
      if ((this.player1.yPos !== 1) && (this.player1.xPos % 2 !== 0) && 
      !((this.player1.xPos === this.player2.xPos && (this.player1.yPos - 1) === this.player2.yPos))
      ){
        this.player1.yPos -= 1;
        this.narutoPos = 3;
      } else {
        this.narutoPos = 3;
      }
    } else if (e.which === 65){             
      if (this.player1.xPos !== 1 && this.player1.yPos % 2 !== 0 && 
        !(((this.player1.xPos - 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos))
        ){
        this.player1.xPos -= 1;
        this.narutoPos = 1;
      } else {
        this.narutoPos = 1;
      }
    } else if (e.which === 83){
      if (this.player1.yPos !== 13 && this.player1.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player1.yPos + 1) === this.player2.yPos))
        ){
        this.player1.yPos += 1;
        this.narutoPos = 0;
      } else {
        this.narutoPos = 0;
      }
    } else if (e.which === 68){
      if (this.player1.xPos !== 13 && this.player1.yPos % 2 !== 0 && 
        !(((this.player1.xPos + 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos))
        ){
        this.player1.xPos += 1;
        this.narutoPos = 2;
      } else {
        this.narutoPos = 2;
      }
    }
    if (e.which === 67){
      const {ctx, bombImg, player1, nBomb, player2} = this;
      if (nBomb.length < 3){
        nBomb.push(new Bomb(ctx, bombImg, player1.xPos, player1.yPos, player1, player2));
        console.log(nBomb);
      }
    }
  }

  sasukeKeyDownHandler(e){
    //in order of up,left,down,right,period
    if (e.which == 38){
      if (this.player2.yPos !== 1 && this.player2.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos - 1) === this.player1.yPos))
        ){
        this.player2.yPos -= 1;
        this.sasukePos = 3;
      } else {
        this.sasukePos = 3;
      }
    } else if (e.which === 37){
      if (this.player2.xPos !== 1 && this.player2.yPos % 2 !== 0 && 
        !(((this.player2.xPos - 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos))
        ){
        this.player2.xPos -= 1;
        this.sasukePos = 1;
      } else {
        this.sasukePos = 1;
      }
    } else if (e.which === 40){
      if (this.player2.yPos !== 13 && this.player2.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos + 1) === this.player1.yPos))
        ){
        this.player2.yPos += 1;
        this.sasukePos = 0;
      } else {
        this.sasukePos = 0;
      }
    } else if (e.which === 39){
      if (this.player2.xPos !== 13 && this.player2.yPos % 2 !== 0 && 
        !(((this.player2.xPos + 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos))
        ){
        this.player2.xPos += 1;
        this.sasukePos = 2;
      } else {
        this.sasukePos = 2;
      }
    }
    if (e.which === 190){
      const {ctx, bombImg, player2, sBomb, player1} = this;
      if (sBomb.length < 3){
        sBomb.push(new Bomb(ctx, bombImg, player2.xPos, player2.yPos, player1, player2));
      }
    }
  }

  eventListner(){
    document.addEventListener("keydown", this.narutoKeyDownHandler, false);
    document.addEventListener("keydown", this.sasukeKeyDownHandler, false);
  }

  renderNBomb(){
    const {nBomb} = this;
    for (let i = 0; i < nBomb.length; i++) {
      nBomb[i].placeBomb();
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
      console.log('Naruto Died');
    }
    if (player2.dead === false){
      player2.step(sasukePos);
    } else {
      console.log('Sasuke Died');
    }
    requestAnimationFrame(this.renderAll.bind(this));
  }
}

export default keyControls;