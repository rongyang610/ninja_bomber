class bomb{
  constructor(ctx, bombImg, xPos, yPos, naruto, sasuke){
    this.ctx = ctx;
    this.bombImg = bombImg;
    this.xPos = xPos;
    this.yPos = yPos;
    this.naruto = naruto;
    this.sasuke = sasuke;

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
    this.frames = 0;
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
    const that = this;
    if (this.placed === false){
      this.drawBomb(0,2,this.xPos, this.yPos);
    }
    if (!this.explodedSet){
      setTimeout(() =>{
          this.explodeBomb();
          this.placed = true;
        }, 1500);
        this.explodedSet = true;
    }
  }

  explodeBomb(){
    this.drawBomb(5, 3, this.xPos, this.yPos);
    // console.log(this.sasuke.xPos, this.sasuke.yPos, this.naruto.xPos, this.naruto.yPos);
    //if the position of sasuke or naruto are in blast range then change their dead to true
    this.explodeUp();
    this.explodeDown();
    this.explodeLeft();
    this.explodeRight();
    
    const nextFrame = requestAnimationFrame(this.explodeBomb.bind(this));
    this.frames++;
    if (this.frames > 20) {
      cancelAnimationFrame(nextFrame);
    }
    
  }

  explodeUp(){
    const {yPos, xPos, naruto, sasuke} = this;
    for (let j = yPos - 1; j > 0; j--) {
      if((j === naruto.yPos && xPos === naruto.xPos)){
        this.naruto.dead = true;
      }
      if((j === sasuke.yPos && xPos === sasuke.xPos)){
        this.sasuke.dead = true;
      }
      if(j % 2 === 0 && xPos % 2 === 0){
        break;
      } else if(j === 1){
        this.drawBomb(7, 1, xPos, j);
      } else{
        this.drawBomb(5, 4, xPos, j);
      }
    }
  }

  explodeDown(){
    const {yPos, xPos, naruto, sasuke} = this;
    for (let j = yPos + 1; j < 14; j++) {
      if((j === naruto.yPos && xPos === naruto.xPos)){
        this.naruto.dead = true;
      }
      if((j === sasuke.yPos && xPos === sasuke.xPos)){
        this.sasuke.dead = true;
      }
      if(j % 2 === 0 && xPos % 2 === 0){
        break;
      } else if(j === 13){
        this.drawBomb(5, 5, xPos, j);
      } else{
        this.drawBomb(5, 4, xPos, j);
      }
    }
  }

  explodeLeft(){
    const {yPos, xPos, naruto, sasuke} = this;
    for (let i = xPos - 1; i > 0; i--) {
      if((yPos === naruto.yPos && i === naruto.xPos)){
        this.naruto.dead = true;
      }
      if((yPos === sasuke.yPos && i === sasuke.xPos)){
        this.sasuke.dead = true;
      }
      if(i % 2 === 0 && yPos % 2 === 0){
        break;
      }else if (i === 1){
        this.drawBomb(4, 1, i, yPos);
      } else{
        this.drawBomb(0, 3, i, yPos);
      }
    }
  }

  explodeRight(){
    const {yPos, xPos, naruto, sasuke} = this;
    for (let i = xPos + 1; i < 14; i++) {
      if((yPos === naruto.yPos && i === naruto.xPos)){
        this.naruto.dead = true;
      }
      if((yPos === sasuke.yPos && i === sasuke.xPos)){
        this.sasuke.dead = true;
      }
      if(i % 2 === 0 && yPos % 2 === 0){
        break;
      } else if (i === 13){
        this.drawBomb(1, 3, i, yPos);
      } else{
        this.drawBomb(0, 4, i, yPos);
      }
    }
  }
}

export default bomb;