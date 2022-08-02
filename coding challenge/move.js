var positionX = 0;
var velocity = 50;
var reverse = false;
var list = [];
var ball = document.getElementById("ball");

function moveBall() {

  var Xmin = 0;
  var Xmax = 500;

  if (reverse) {
    positionX = positionX - velocity;   
    ball.style.left = positionX + "px";
  
  } else {
    positionX = positionX + velocity; 
    ball.style.left = positionX + "px";
  }

  if (positionX > Xmax || positionX === Xmin ) {
    reverse = !reverse;
  }

if (positionX < 0 || positionX > 500) {
    list.push(create());
  }
}

setInterval(moveBall, 100);
