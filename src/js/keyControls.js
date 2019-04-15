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
      const {ctx, bombImg, player1, nBomb} = this;
      if (nBomb.length < 3){
        nBomb.push(new Bomb(ctx, bombImg, player1.xPos, player1.yPos));
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
      
    }
  }

  eventListner(){
    document.addEventListener("keydown", this.narutoKeyDownHandler, false);
    document.addEventListener("keydown", this.sasukeKeyDownHandler, false);
  }

  renderBomb(){
    const {nBomb} = this;
    for (let i = 0; i < nBomb.length; i++) {
      nBomb[i].placeBomb();
    }
    setTimeout(() => this.nBomb = [], 6000);
  }

  renderAll(){
    const {ctx, canvas, player1, player2, narutoPos, sasukePos, nBomb} = this;
    ctx.clearRect(220, 0, canvas.width, canvas.height);
    placeMap();
    if (nBomb !== 0){
      this.renderBomb();
    }
    player1.step(narutoPos);
    player2.step(sasukePos);
    requestAnimationFrame(this.renderAll.bind(this));
  }
}

export default keyControls;