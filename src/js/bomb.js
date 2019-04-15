class bomb{
  constructor(ctx, bombImg, xPos, yPos){
    this.ctx = ctx;
    this.bombImg = bombImg;
    this.xPos = xPos;
    this.yPos = yPos;

    this.spriteXStartPos = 3.5;
    this.spriteYStartPos = 2.5;
    this.spriteXOffset = 52;
    this.spriteYOffset = 52;
    this.spriteSheetWidth = 47;
    this.spriteSheetHeight = 47.5;
    this.startingX = 28.7;
    this.startingY = 28.7;
    this.spriteMapWidth = 28.7;
    this.spriteMapHeight = 28.7;

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

  explodeBomb(){
    this.drawBomb(0,2,this.xPos, this.yPos);
  }
}

export default bomb;