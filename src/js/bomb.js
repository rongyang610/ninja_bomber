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
    this.startingX = 40;
    this.startingY = 40;
    this.spriteMapWidth = 40;
    this.spriteMapHeight = 40;

    this.frames = 0;
    this.multiplier = 40;
  }

  drawBomb(frameX, frameY, canvasX, canvasY){
    this.ctx.drawImage(
      this.bombImg, 
      (frameX * this.spriteXOffset) + this.spriteXStartPos,
      (frameY * this.spriteYOffset) + this.spriteYStartPos,
      this.spriteSheetWidth,
      this.spriteSheetHeight,
      (this.startingX * canvasX),
      (this.startingY * canvasY),
      this.spriteMapWidth,
      this.spriteMapHeight
    );
  }

  placeBomb(){
    const {xPos, yPos, frames, multiplier, naruto, sasuke} = this;

    if(naruto.dead || sasuke.dead){
      this.frames = (109 * multiplier);
    }
    if (frames < (20*multiplier)){
      this.drawBomb(0, 2, xPos, yPos);
    } else if (frames < (40*multiplier)){
      this.drawBomb(1, 2, xPos, yPos);
    } else if(frames < (50*multiplier)){
      this.drawBomb(0, 2, xPos, yPos);      
    } else if(frames < (60*multiplier)){
      this.drawBomb(1, 2, xPos, yPos);      
    } else if(frames < (70*multiplier)){
      this.drawBomb(2, 2, xPos, yPos);      
    } else if(frames < (80*multiplier)){
      this.drawBomb(1, 2, xPos, yPos);      
    } else if (frames < (90*multiplier)){
      this.drawBomb(2, 2, xPos, yPos);
    } else if (frames < (110*multiplier)){
      this.explodeBomb(xPos, yPos);
    }
    const nextFrame = requestAnimationFrame(this.placeBomb.bind(this));
    this.frames ++;
    if (frames > (110*multiplier)){
      cancelAnimationFrame(nextFrame);
    }
  }

  explodeBomb(x, y){
    const {naruto, sasuke} = this;
    this.drawBomb(5, 3, x, y);
    if(( y=== naruto.yPos && x === naruto.xPos)){
      this.naruto.dead = true;
    }
    if((y === sasuke.yPos && x === sasuke.xPos)){
      this.sasuke.dead = true;
    }
    this.explodeUp();
    this.explodeDown();
    this.explodeLeft();
    this.explodeRight();
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