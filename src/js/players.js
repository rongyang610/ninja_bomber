class Player{
  constructor(ctx, xPos, yPos, xOffsetPlayer, nameImg){
    this.ctx = ctx;
    this.xPos = xPos;
    this.yPos = yPos;
    this.nameImg = nameImg;

    this.spriteSheetWidth = 28;
    this.spriteSheetHeight = 46;
    this.startingX = 28.7;
    this.startingY = 28.7;
    this.spriteWidth = 20;
    this.spriteHeight = 28.7;

    this.spriteXStartPos = (10 - xOffsetPlayer);
    this.spriteYStartPos = 9;
    this.spriteXOffset = 46;
    this.spriteYOffset = 65;
    this.xMapOffset = 225.3;

    this.cycleLoop = [0, 1, 2, 3];
    this.cols = 4;
    this.row = 4;
    this.currentFrame = 0;
    this.currentLoopIndex = 0;
    this.obj = true;
  }

  step(direction) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    //not gonna animate right now
    this.drawFrame(this.nameImg, 0, direction, this.xPos, this.yPos);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    // requestAnimationFrame(this.step.bind(this));
  }

  drawFrame(nameImg, frameX, frameY, canvasX, canvasY){
    this.ctx.drawImage(
      nameImg, 
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