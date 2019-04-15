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
    this.narutoKeyUpHandler = this.narutoKeyUpHandler.bind(this);
    this.sasukeKeyUpHandler = this.sasukeKeyUpHandler.bind(this);
    this.update = 3;
    this.narutoPos = 0;
    this.sasukePos = 0;

    this.narBomb1 = {x:0, y:0, bombDisplay: false, explodeDisplay: false};
    this.narBomb2 = {x:0, y:0, bombDisplay: false, explodeDisplay: false};
    this.narBomb3 = {x:0, y:0, bombDisplay: false, explodeDisplay: false};
    this.narBombs = [];

    this.sasBomb1 = {x:0, y:0, bombDisplay: false, explodeDisplay: false};
    this.sasBomb2 = {x:0, y:0, bombDisplay: false, explodeDisplay: false};
    this.sasBomb3 = {x:0, y:0, bombDisplay: false, explodeDisplay: false};
    this.sasBombs = [];

  }

  narutoKeyDownHandler(e){
    //in order of w,a,s,d,c
    if (e.which === 87){
      this.wPressed = true;
      if ((this.player1.yPos !== 1) && (this.player1.xPos % 2 !== 0) && 
      !((this.player1.xPos === this.player2.xPos && (this.player1.yPos - 1) === this.player2.yPos)) &&
      !((this.narBomb1.x === this.player1.xPos) && (this.narBomb1.y === this.player1.yPos -1)) &&
      !((this.narBomb2.x === this.player1.xPos) && (this.narBomb2.y === this.player1.yPos -1)) &&
      !((this.narBomb3.x === this.player1.xPos) && (this.narBomb3.y === this.player1.yPos -1)) &&
      !((this.sasBomb1.x === this.player1.xPos) && (this.sasBomb1.y === this.player1.yPos - 1)) &&
      !((this.sasBomb2.x === this.player1.xPos) && (this.sasBomb2.y === this.player1.yPos - 1)) &&
      !((this.sasBomb3.x === this.player1.xPos) && (this.sasBomb3.y === this.player1.yPos - 1))
      ){
        this.player1.yPos -= 1;
        this.narutoPos = 3;
      } else {
        this.narutoPos = 3;
      }
    } else if (e.which === 65){             
      this.aPressed = true;
      if (this.player1.xPos !== 1 && this.player1.yPos % 2 !== 0 && 
        !(((this.player1.xPos - 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos)) &&
        !((this.narBomb1.x === this.player1.xPos - 1) && (this.narBomb1.y === this.player1.yPos)) &&
        !((this.narBomb2.x === this.player1.xPos - 1) && (this.narBomb2.y === this.player1.yPos)) &&
        !((this.narBomb3.x === this.player1.xPos - 1) && (this.narBomb3.y === this.player1.yPos)) &&
        !((this.sasBomb1.x === this.player1.xPos - 1) && (this.sasBomb1.y === this.player1.yPos)) &&
        !((this.sasBomb2.x === this.player1.xPos - 1) && (this.sasBomb2.y === this.player1.yPos)) &&
        !((this.sasBomb3.x === this.player1.xPos - 1) && (this.sasBomb3.y === this.player1.yPos))
        ){
        this.player1.xPos -= 1;
        this.narutoPos = 1;
      } else {
        this.narutoPos = 1;
      }
    } else if (e.which === 83){
      this.sPressed = true;
      if (this.player1.yPos !== 13 && this.player1.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player1.yPos + 1) === this.player2.yPos)) &&
        !((this.narBomb1.x === this.player1.xPos) && (this.narBomb1.y === this.player1.yPos + 1)) &&
        !((this.narBomb2.x === this.player1.xPos) && (this.narBomb2.y === this.player1.yPos + 1)) &&
        !((this.narBomb3.x === this.player1.xPos) && (this.narBomb3.y === this.player1.yPos + 1)) &&
        !((this.sasBomb1.x === this.player1.xPos) && (this.sasBomb1.y === this.player1.yPos + 1)) &&
        !((this.sasBomb2.x === this.player1.xPos) && (this.sasBomb2.y === this.player1.yPos + 1)) &&
        !((this.sasBomb3.x === this.player1.xPos) && (this.sasBomb3.y === this.player1.yPos + 1))
        ){
        this.player1.yPos += 1;
        this.narutoPos = 0;
      } else {
        this.narutoPos = 0;
      }
    } else if (e.which === 68){
      this.dPressed = true;
      if (this.player1.xPos !== 13 && this.player1.yPos % 2 !== 0 && 
        !(((this.player1.xPos + 1) === this.player2.xPos && this.player1.yPos === this.player2.yPos)) &&
        !((this.narBomb1.x === this.player1.xPos + 1) && (this.narBomb1.y === this.player1.yPos)) &&
        !((this.narBomb2.x === this.player1.xPos + 1) && (this.narBomb2.y === this.player1.yPos)) &&
        !((this.narBomb3.x === this.player1.xPos + 1) && (this.narBomb3.y === this.player1.yPos)) &&
        !((this.sasBomb1.x === this.player1.xPos + 1) && (this.sasBomb1.y === this.player1.yPos)) &&
        !((this.sasBomb2.x === this.player1.xPos + 1) && (this.sasBomb2.y === this.player1.yPos)) &&
        !((this.sasBomb3.x === this.player1.xPos + 1) && (this.sasBomb3.y === this.player1.yPos))
        ){
        this.player1.xPos += 1;
        this.narutoPos = 2;
      } else {
        this.narutoPos = 2;
      }
    }
    if (e.which === 67){
      if(this.narBombs.length === 0){
        this.narBomb1.bombDisplay = true;
        this.narBomb1.x = this.player1.xPos;
        this.narBomb1.y = this.player1.yPos;
        let droppedNarBomb1 = new Bomb(this.ctx, this.bombImg, this.narBomb1.x, this.narBomb1.y);
        this.narBombs.push(droppedNarBomb1);
        setTimeout( () => {
          this.narBomb1 = {x:0, y:0, bombDisplay: false, explodeDisplay: true};
          this.narBombs.shift();
        }, 1500);
      } else if (this.narBombs.length === 1){
        this.narBomb2.bombDisplay = true;
        this.narBomb2.x = this.player1.xPos;
        this.narBomb2.y = this.player1.yPos;
        let droppedNarBomb2 = new Bomb(this.ctx, this.bombImg, this.narBomb2.x, this.narBomb2.y);
        this.narBombs.push(droppedNarBomb2);
        setTimeout( () => {
          this.narBomb2 = {x:0, y:0, bombDisplay: false, explodeDisplay: true};
          this.narBombs.shift();
        }, 1500);
      } else if (this.narBombs.length === 2){
        this.narBomb3.bombDisplay = true;
        this.narBomb3.x = this.player1.xPos;
        this.narBomb3.y = this.player1.yPos;
        let droppedNarBomb3 = new Bomb(this.ctx, this.bombImg, this.narBomb3.x, this.narBomb3.y);
        this.narBombs.push(droppedNarBomb3);
        setTimeout( () => {
          this.narBomb3 = {x:0, y:0, bombDisplay: false, explodeDisplay: true};
          this.narBombs.shift();
        }, 1500);
      }
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
  }

  sasukeKeyDownHandler(e){
    //in order of up,left,down,right,period
    if (e.which == 38){
      this.upPressed = true;
      if (this.player2.yPos !== 1 && this.player2.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos - 1) === this.player1.yPos)) &&
        !((this.narBomb1.x === this.player2.xPos) && (this.narBomb1.y === this.player2.yPos -1)) &&
        !((this.narBomb2.x === this.player2.xPos) && (this.narBomb2.y === this.player2.yPos -1)) &&
        !((this.narBomb3.x === this.player2.xPos) && (this.narBomb3.y === this.player2.yPos -1)) &&
        !((this.sasBomb1.x === this.player2.xPos) && (this.sasBomb1.y === this.player2.yPos - 1)) &&
        !((this.sasBomb2.x === this.player2.xPos) && (this.sasBomb2.y === this.player2.yPos - 1)) &&
        !((this.sasBomb3.x === this.player2.xPos) && (this.sasBomb3.y === this.player2.yPos - 1))
        ){
        this.player2.yPos -= 1;
        this.sasukePos = 3;
      } else {
        this.sasukePos = 3;
      }
    } else if (e.which === 37){
      if (this.player2.xPos !== 1 && this.player2.yPos % 2 !== 0 && 
        !(((this.player2.xPos - 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos)) &&
        !((this.narBomb1.x === this.player2.xPos - 1) && (this.narBomb1.y === this.player2.yPos)) &&
        !((this.narBomb2.x === this.player2.xPos - 1) && (this.narBomb2.y === this.player2.yPos)) &&
        !((this.narBomb3.x === this.player2.xPos - 1) && (this.narBomb3.y === this.player2.yPos)) &&
        !((this.sasBomb1.x === this.player2.xPos - 1) && (this.sasBomb1.y === this.player2.yPos)) &&
        !((this.sasBomb2.x === this.player2.xPos - 1) && (this.sasBomb2.y === this.player2.yPos)) &&
        !((this.sasBomb3.x === this.player2.xPos - 1) && (this.sasBomb3.y === this.player2.yPos))
        ){
        this.player2.xPos -= 1;
        this.sasukePos = 1;
      } else {
        this.sasukePos = 1;
      }
    } else if (e.which === 40){
      if (this.player2.yPos !== 13 && this.player2.xPos % 2 !== 0 && 
        !((this.player1.xPos === this.player2.xPos && (this.player2.yPos + 1) === this.player1.yPos)) &&
        !((this.narBomb1.x === this.player2.xPos) && (this.narBomb1.y === this.player2.yPos + 1)) &&
        !((this.narBomb2.x === this.player2.xPos) && (this.narBomb2.y === this.player2.yPos + 1)) &&
        !((this.narBomb3.x === this.player2.xPos) && (this.narBomb3.y === this.player2.yPos + 1)) &&
        !((this.sasBomb1.x === this.player2.xPos) && (this.sasBomb1.y === this.player2.yPos + 1)) &&
        !((this.sasBomb2.x === this.player2.xPos) && (this.sasBomb2.y === this.player2.yPos + 1)) &&
        !((this.sasBomb3.x === this.player2.xPos) && (this.sasBomb3.y === this.player2.yPos + 1))
        ){
        this.player2.yPos += 1;
        this.sasukePos = 0;
      } else {
        this.sasukePos = 0;
      }
    } else if (e.which === 39){
      if (this.player2.xPos !== 13 && this.player2.yPos % 2 !== 0 && 
        !(((this.player2.xPos + 1) === this.player1.xPos && this.player1.yPos === this.player2.yPos)) &&
        !((this.narBomb1.x === this.player2.xPos + 1) && (this.narBomb1.y === this.player2.yPos)) &&
        !((this.narBomb2.x === this.player2.xPos + 1) && (this.narBomb2.y === this.player2.yPos)) &&
        !((this.narBomb3.x === this.player2.xPos + 1) && (this.narBomb3.y === this.player2.yPos)) &&
        !((this.sasBomb1.x === this.player2.xPos + 1) && (this.sasBomb1.y === this.player2.yPos)) &&
        !((this.sasBomb2.x === this.player2.xPos + 1) && (this.sasBomb2.y === this.player2.yPos)) &&
        !((this.sasBomb3.x === this.player2.xPos + 1) && (this.sasBomb3.y === this.player2.yPos))
        ){
        this.player2.xPos += 1;
        this.sasukePos = 2;
      } else {
        this.sasukePos = 2;
      }
    }
    if (e.which === 190){
      if(this.sasBombs.length === 0){
        this.sasBomb1.bombDisplay = true;
        this.sasBomb1.x = this.player2.xPos;
        this.sasBomb1.y = this.player2.yPos;
        let droppedSasBomb1 = new Bomb(this.ctx, this.bombImg, this.sasBomb1.x, this.sasBomb1.y);
        this.sasBombs.push(droppedSasBomb1);
        setTimeout( () => {
          this.sasBomb1 = {x:0, y:0, bombDisplay: false, explodeDisplay: true};
          this.sasBombs.shift();
        }, 1500);
      } else if (this.sasBombs.length === 1){
        this.sasBomb2.bombDisplay = true;
        this.sasBomb2.x = this.player2.xPos;
        this.sasBomb2.y = this.player2.yPos;
        let droppedSasBomb2 = new Bomb(this.ctx, this.bombImg, this.sasBomb2.x, this.sasBomb2.y);
        this.sasBombs.push(droppedSasBomb2);
        setTimeout( () => {
          this.sasBomb2 = {x:0, y:0, bombDisplay: false, explodeDisplay: true};
          this.sasBombs.shift();
        }, 1500);
      } else if (this.sasBombs.length === 2){
        this.sasBomb3.bombDisplay = true;
        this.sasBomb3.x = this.player2.xPos;
        this.sasBomb3.y = this.player2.yPos;
        let droppedsasBomb3 = new Bomb(this.ctx, this.bombImg, this.sasBomb3.x, this.sasBomb3.y);
        this.sasBombs.push(droppedsasBomb3);
        setTimeout( () => {
          this.sasBomb3 = {x:0, y:0, bombDisplay: false, explodeDisplay: true};
          this.sasBombs.shift();
        }, 1500);
      }
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
  }

  eventListner(){
    document.addEventListener("keydown", this.narutoKeyDownHandler, false);
    document.addEventListener("keyup", this.narutoKeyUpHandler, false);
    document.addEventListener("keydown", this.sasukeKeyDownHandler, false);
    document.addEventListener("keyup", this.sasukeKeyUpHandler, false);
  }

  step(){
    this.ctx.clearRect(220, 0, this.canvas.width, this.canvas.height);
    placeMap();
    if (this.narBombs.length === 1){
      this.narBombs[0].explodeBomb();
    } else if (this.narBombs.length === 2){
      this.narBombs[0].explodeBomb();
      this.narBombs[1].explodeBomb();
    } else if (this.narBombs.length === 3){
      this.narBombs[0].explodeBomb();
      this.narBombs[1].explodeBomb();
      this.narBombs[2].explodeBomb();
    }
    if (this.sasBombs.length === 1){
      this.sasBombs[0].explodeBomb();
    } else if (this.sasBombs.length === 2){
      this.sasBombs[0].explodeBomb();
      this.sasBombs[1].explodeBomb();
    } else if (this.sasBombs.length === 3){
      this.sasBombs[0].explodeBomb();
      this.sasBombs[1].explodeBomb();
      this.sasBombs[2].explodeBomb();
    }
    this.player1.step(this.narutoPos);
    this.player2.step(this.sasukePos);
    requestAnimationFrame(this.step.bind(this));
  }
}

export default keyControls;