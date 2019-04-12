class keyControls{
  constructor(){
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
  }

  narutoKeyDownHandler(e){
    //in order of w,a,s,d,c
    if (e.key === 87){
      wPressed = true;
    } else if (e.key === 65){
      aPressed = true;
    } else if (e.key === 83){
      sPressed = true;
    } else if (e.key === 68){
      dPressed = true;
    } else if (e.key === 67){
      cPressed = true;
    }
  }

  narutoKeyUpHandler(e){
    //in order of w,a,s,d,c
    if (e.key === 87){
      wPressed = false;
    } else if (e.key === 65){
      aPressed = false;
    } else if (e.key === 83){
      sPressed = false;
    } else if (e.key === 68){
      dPressed = false;
    } else if (e.key === 67){
      cPressed = false;
    }
  }

  sasukeKeyDownHandler(e){
    //in order of up,left,down,right,period
    if (e.key === 38){
      upPressed = true;
    } else if (e.key === 37){
      leftPressed = true;
    } else if (e.key === 40){
      downPressed = true;
    } else if (e.key === 90){
      rightPressed = true;
    } else if (e.key === 190){
      perPressed = true;
    }
  }

  sasukeKeyUpHandler(e){
    //in order of up,left,down,right,period
    if (e.key === 38){
      upPressed = false;
    } else if (e.key === 37){
      leftPressed = false;
    } else if (e.key === 40){
      downPressed = false;
    } else if (e.key === 90){
      rightPressed = false;
    } else if (e.key === 190){
      perPressed = false;
    }
  }

  eventListner(){
    document.addEventListener("keydown", narutoKeyDownHandler, false);
    document.addEventListener("keyup", narutoKeyUpHandler, false);
    document.addEventListener("keydown", sasukeKeyDownHandler, false);
    document.addEventListener("keyup", sasukeKeyUpHandler, false);
  }
}