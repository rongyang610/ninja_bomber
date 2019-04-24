class Player{
  constructor(ctx, xPos, yPos, xOffsetPlayer, nameImg){
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
    this.nameImg = nameImg;

    let num = 40;
    this.spriteSheetWidth = 28;
    this.spriteSheetHeight = 46;
    this.startingX = num;
    this.startingY = num;
    this.spriteWidth = 27;
    this.spriteHeight = num;

    this.spriteXStartPos = (10 - xOffsetPlayer);
    this.spriteYStartPos = 9;
    this.spriteXOffset = 46;
    this.spriteYOffset = 65;
    this.xMapOffset = 5;
    this.dead = false;

    this.cycleLoop = [0, 1, 2, 3];
    this.cols = 4;
    this.row = 4;
    this.obj = true;
  }

  step(direction) {
    this.drawFrame(0, direction, this.xPos, this.yPos);
  }

  drawFrame(frameX, frameY, canvasX, canvasY){
    this.ctx.drawImage(
      this.nameImg, 
      (frameX * this.spriteXOffset) + this.spriteXStartPos,
      (frameY * this.spriteYOffset) + this.spriteYStartPos,
      this.spriteSheetWidth,
      this.spriteSheetHeight,
      this.startingX * canvasX + this.xMapOffset,
      this.startingY * canvasY,
      this.spriteWidth,
      this.spriteHeight
    );
  }
}

export default Player;