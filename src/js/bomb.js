class bomb{
  constructor(ctx, bombImg, xPos, yPos){
    this.ctx = ctx;
    this.bombImg = bombImg;
    this.xPos = xPos;
    this.yPos = yPos;

    this.spriteXStartPos = 3.5;
    this.spriteYStartPos = 3;
    this.spriteXOffset = 52;
    this.spriteYOffset = 52;
    this.spriteSheetWidth = 47;
    this.spriteSheetHeight = 47.5;
    this.startingX = 28.7;
    this.startingY = 28.7;
    this.spriteMapWidth = 28.7;
    this.spriteMapHeight = 28.7;

    this.placed = false;
    this.explodedSet = false;
    this.xMapOffset = 220;
  }

  drawBomb(frameX, frameY, canvasX, canvasY){
    this.ctx.drawImage(
      this.bombImg, 
      (frameX * this.spriteXOffset) + this.spriteXStartPos,
      (frameY * this.spriteYOffset) + this.spriteYStartPos,
      this.spriteSheetWidth,
      this.spriteSheetHeight,
      (this.startingX * canvasX) + this.xMapOffset,
      (this.startingY * canvasY),
      this.spriteMapWidth,
      this.spriteMapHeight
    );
  }

  placeBomb(){
    if (this.placed === false){
      this.drawBomb(0,2,this.xPos, this.yPos);
      if (!this.explodedSet){
        setTimeout(() =>{
           this.explodeBomb();
           this.placed = true;
          }, 1500);
        this.explodedSet = false;
      }
    }
  }

  explodeBomb(){
    this.drawBomb(5, 3, this.xPos, this.yPos);
    this.explodeUp();
    this.explodeDown();
    this.explodeLeft();
    this.explodeRight();
  }

  explodeUp(){
    for (let j = this.yPos - 1; j > 0; j--) {
      if(j % 2 === 0 && this.xPos % 2 === 0){
        break;
      } else if(j === 1){
        this.drawBomb(7, 1, this.xPos, j);
      } else{
        this.drawBomb(5, 4, this.xPos, j);
      }
    }
  }

  explodeDown(){
    for (let j = this.yPos + 1; j < 14; j++) {
      if(j % 2 === 0 && this.xPos % 2 === 0){
        break;
      } else if(j === 13){
        this.drawBomb(5, 5, this.xPos, j);
      } else{
        this.drawBomb(5, 4, this.xPos, j);
      }
    }
  }

  explodeLeft(){
    for (let i = this.xPos - 1; i > 0; i--) {
      if(i % 2 === 0 && this.yPos % 2 === 0){
        break;
      }else if (i === 1){
        this.drawBomb(4, 1, i, this.yPos);
      } else{
        this.drawBomb(0, 3, i, this.yPos);
      }
    }
  }

  explodeRight(){
    for (let i = this.xPos + 1; i < 14; i++) {
      if(i % 2 === 0 && this.yPos % 2 === 0){
        break;
      } else if (i === 13){
        this.drawBomb(1, 3, i, this.yPos);
      } else{
        this.drawBomb(0, 4, i, this.yPos);
      }
    }
  }
}

export default bomb;