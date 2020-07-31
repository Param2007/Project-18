//Global Variables 

  

var monkey, monkeyImage, banana, bananaImage, obstacle, obstacleImage, restart, restartImage, gameover, gameoverImage, bg, bgImage, ground, groundImage, score; 

  

var PLAY = 1; 

var END = 0; 

var gameState = PLAY; 

  

var obstacleGroup, bananaGroup; 

  

score = 0; 

  

function preload(){ 

   

  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 

   

  bananaImage = loadImage("banana.png"); 

  obstacleImage = loadImage("stone.png"); 

  bgImage = loadImage("jungle.png"); 

  gameoverImage = loadImage("gameOver.png"); 

  restartImage = loadImage("restart.png"); 

  groundImage = loadImage("ground.png"); 

   

} 

  

  

function setup() { 

  createCanvas(600,300); 

   

  monkey = createSprite(560,50,1,1); 

  monkey.addAnimation(monkeyImage); 

   

  bg = createSprite(150,300,1,1); 

  bg.addImage(bgImage); 

  bg.velocityX = 5; 

  bg.width = bg.width/2; 

   

  restart = createSprite(150,400,1,1); 

  restart.addImage(restartImage); 

  restart.visible = false; 

   

  gameover = createSprite(150,300,1,1); 

  gameover.addImage(gameoverImage); 

  gameover.visible = false; 

   

  ground = createSprite(150,590,1,1); 

  ground.addImage(groundImage); 

  ground.visible = false; 

   

} 

  

  

function draw(){ 

background(255);  

   

  if(gameState === PLAY) { 

    bg.velocityX = 5; 

    bg.width = bg.width/2; 

  } 

   

  if(keyDown("space")) { 

   

    trex.velocityX = -10; 

  } 

   

  trex.velocityX = trex.velocityX + 0.8; 

   

  if(bananaGroup.isTouching(monkey)) { 

  

    score = score + 2; 

    bananaGroup.destroyEach(); 

  } 

   

  switch(score) { 

       

    case 10: monkey.scale = 0.12; 

            break; 

  

    case 20: monkey.scale = 0.12; 

            break; 

     

    case 30: monkey.scale = 0.12; 

            break; 

         

    case 40: monkey.scale = 0.12; 

            break;         

    default: break; 

  } 

   

  if(obstacleGroup.isTouching(monkey)) { 

    gameState = END; 

  } 

   

  if(gameState === END) { 

     

    bg.velocityX = 0; 

    bananaGroup.setVelocityXEach(0); 

    bananaGroup.destroyEach(); 

    obstacleGroup.setVelocityXEach(0); 

    obstacleGroup.destroyEach(0); 

    monkey.destroy(); 

    gameover.visible = true; 

    restart.visible = true; 

     

    if(keyPressedOver(restart)) { 

      reset(); 

    } 

     

  } 

   

  spawnBanana(); 

  spawnObstacle(); 

   

  drawSprites(); 

   

  stroke("white"); 

  textSize(20); 

  fill("white"); 

  text("Score :" + score,30,150); 

   

} 

  

function spawnBanana() { 

   

  if(frameCount % 80 === 0) { 

     

    banana = createSprite(600,random(130,170),1,1); 

    banana.addImage(bananaImage); 

    banana.velocity = -5; 

    banana.lifetime = 120; 

     

    bananaGroup.add(banana); 

  } 

} 

  

function spawnObstacle() { 

   

  if(frameCount % 60 === 0) { 

     

    obstacle = createSprite(600,390,1,1); 

    obstacle.addImage(obstacleImage); 

    obstacle.velocity = -5; 

    obstacle.lifetime = 120; 

     

    obstacleGroup.add(obstacle); 

     

} 

} 

  

function reset() { 

  

  gameState = PLAY; 

  monkey.changeAnimation(monkeyImage); 

  bananaGroup.destroyEach(); 

  obstacleGroup.destroyEach(); 

  restart.visible = false; 

  gameover.visible = false; 

  score = 0; 

   

} 

 