var userPaddle, playerScore, gameState, ball,scoreSound, wall_hitSound, hitSound;

var userPaddleimg,ballimg;

function preload(){
  //scoreSound = loadSound('score.mp3');
  //wall_hitSound = loadSound('wall_hit.mp3');
  //hitSound = loadSound('hit.mp3');
  userPaddleimg = loadImage("paddle.png");
  ballimg = loadImage("ball.png");
}

function setup() {
  
createCanvas(400,400);

//create a user paddle sprite
userPaddle = createSprite(390,200,10,70);
  userPaddle.addImage("user",userPaddleimg);

//create a computer paddle sprite


//create the pong ball
ball = createSprite(200,200,12,12);
  ball.addImage("ball",ballimg);

playerScore = 0;
gameState = "serve";
}

function draw() {  
  //fill the computer screen with white color
  background("lightBlue");
  edges = createEdgeSprites();
  //display Scores

  
 
  //give velocity to the ball when the user presses play
  //assign random velocities later for fun
  if (keyDown("space") && gameState == "serve") {
    ball.velocityX = 5;
    ball.velocityY = 5;
    
  }

  //make the userPaddle move with the mouse
  userPaddle.y = World.mouseY;
 

  //make the ball bounce off the top and bottom walls
   
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[0]);
    ball.bounceOff(userPaddle);
    //wall_hitSound.play();
 
  //add AI to the computer paddle so that it always hits the ball

  drawSprites();

}