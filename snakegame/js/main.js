let timer = null;
start();

function hard(){
  alert("HARD MODE");
  clearInterval(timer);
  FPS = 20;
  start();
}

function easy(){
  alert("EASY MODE");
  clearInterval(timer);
  FPS = 5;
  start();
}

function reload(){
  document.location.reload();
}


function start() {
ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
timer = setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);
  ctx.fillStyle = "purple";
  ctx.fillRect(pappleX*SIZE, pappleY*SIZE, SIZE-2, SIZE-2);
  ctx.fillStyle = "lime";
  for(let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while(snake.length > tail)  {
    snake.shift();
  }

  if (appleX == px && appleY == py){
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE)
    appleY = Math.floor(Math.random()*canv.height/SIZE)
    pappleX = Math.floor(Math.random()*canv.width/SIZE)
    pappleY = Math.floor(Math.random()*canv.height/SIZE)
  }

  score = snake.length - 5;

  if (pappleX == px && pappleY == py){
    // document.location.reload();
    alert("GAME OVER : Score " + score);
    clearInterval(timer);
    imputName();

  }
  if(px >= canv.width/SIZE  || px <= -1||py >= canv.height/SIZE|| py <= -1) {
    // document.location.reload();
    alert("GAME OVER : Score " + score);
    clearInterval(timer);
    imputName();
  }

}, 1000/FPS);
}
