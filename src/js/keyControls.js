import Player from './players';
import placeMap from './map';

class keyControls{
  constructor(ctx, canvas, sasuke, naruto){
    this.ctx = ctx;
    this.canvas = canvas;
    this.sasuke = sasuke;
    this.naruto = naruto;
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
    this.narutoKeyUpHandler = this.narutoKeyUpHandler.bind(this);
    this.sasukeKeyUpHandler = this.sasukeKeyUpHandler.bind(this);
    this.update = 3;
    this.narutoPos = 0;
    this.sasukePos = 0;
  }

  narutoKeyDownHandler(e){
    //in order of w,a,s,d,c
    if (e.which === 87){
      this.wPressed = true;
      if ((this.player1.yPos !== 1) && (this.player1.xPos % 2 !== 0) && 
      !((this.player1.xPos === this.player2.xPos && (this.player1.yPos - 1) === this.player2.yPos))){
        this.player1.yPos -= 1;
        this.narutoPos = 3;
      } else {
        this.narutoPos = 3;
      }
    } else if (e.which === 65){             
      this.aPressed = true;
      if (this.player1.xPos !== 1 && this.player1.yPos % 2 !== 0 && 
        !(((this.player1.xPos - 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos))){
        this.player1.xPos -= 1;
        this.narutoPos = 1;
      } else {
        this.narutoPos = 1;
      }
    } else if (e.which === 83){
      this.sPressed = true;
      if (this.player1.yPos !== 13 && this.player1.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player1.yPos + 1) === this.player2.yPos))){
        this.player1.yPos += 1;
        this.narutoPos = 0;
      } else {
        this.narutoPos = 0;
      }
    } else if (e.which === 68){
      this.dPressed = true;
      if (this.player1.xPos !== 13 && this.player1.yPos % 2 !== 0 && 
        !(((this.player1.xPos + 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos))){
        this.player1.xPos += 1;
        this.narutoPos = 2;
      } else {
        this.narutoPos = 2;
      }
    }
    if (e.which === 67){
      this.cPressed = true;
      console.log("bomb");
    }
  }

  narutoKeyUpHandler(e){
    //in order of w,a,s,d,c
    if (e.which === 87){
      this.wPressed = false;
    } else if (e.which === 65){
      this.aPressed = false;
    } else if (e.which === 83){
      this.sPressed = false;
    } else if (e.which === 68){
      this.dPressed = false;
    }
    if (e.which === 67){
      this.cPressed = false;
    }
  }

  sasukeKeyDownHandler(e){
    //in order of up,left,down,right,period
    if (e.which == 38){
      this.upPressed = true;
      if (this.player2.yPos !== 1 && this.player2.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos - 1) === this.player1.yPos))){
        this.player2.yPos -= 1;
        this.sasukePos = 3;
      } else {
        this.sasukePos = 3;
      }
    } else if (e.which === 37){
      if (this.player2.xPos !== 1 && this.player2.yPos % 2 !== 0 && 
        !(((this.player2.xPos - 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos))){
        this.player2.xPos -= 1;
        this.sasukePos = 1;
      } else {
        this.sasukePos = 1;
      }
    } else if (e.which === 40){
      if (this.player2.yPos !== 13 && this.player2.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos + 1) === this.player1.yPos))){
        this.player2.yPos += 1;
        this.sasukePos = 0;
      } else {
        this.sasukePos = 0;
      }
    } else if (e.which === 39){
      if (this.player2.xPos !== 13 && this.player2.yPos % 2 !== 0 && 
        !(((this.player2.xPos + 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos))){
        this.player2.xPos += 1;
        this.sasukePos = 2;
      } else {
        this.sasukePos = 2;
      }
    }
    if (e.which === 190){
      this.perPressed = true;
    }
  }

  sasukeKeyUpHandler(e){
    //in order of up,left,down,right,period
    if (e.which === 38){
      this.upPressed = false;
    } else if (e.which === 37){
      this.leftPressed = false;
    } else if (e.which === 40){
      this.downPressed = false;
    } else if (e.which === 39){
      this.rightPressed = false;
    }
    if (e.which === 190){
      this.perPressed = false;
    }
  }

  eventListner(){
    document.addEventListener("keydown", this.narutoKeyDownHandler, false);
    document.addEventListener("keyup", this.narutoKeyUpHandler, false);
    document.addEventListener("keydown", this.sasukeKeyDownHandler, false);
    document.addEventListener("keyup", this.sasukeKeyUpHandler, false);
  }

  step(){
    this.ctx.clearRect(220, 0, this.canvas.width, this.canvas.height);
    debugger
    placeMap();
    this.player1.step(this.narutoPos);
    this.player2.step(this.sasukePos);
    requestAnimationFrame(this.step.bind(this));
  }
}

export default keyControls;