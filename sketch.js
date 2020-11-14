//Global Variables
var monkey, monkeyimage;
var ground;
var banana_image, bananagroup;
var stoneimage, obstaclegroup;
var backdrop, backimage
var score


function preload(){
  backimage = loadImage("jungle.jpg");
  
   monkeyimage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  banana_image = loadImage("Banana.png");
  stoneimage = loadImage("stone.png");
}


function setup() {
  
  createCanvas(800,400);
  
  backdrop = createSprite(200, 200, 20, 20);
  backdrop.addImage("background", backimage);
  backdrop.x = backdrop.width /2;
  backdrop.velocityX = -4;
  
  monkey = createSprite(60, 360, 20, 50);
  monkey.addAnimation("running", monkeyimage);
  monkey.scale = 0.2;
  
  ground = createSprite(400, 370, 800, 20);
  ground.VelocityX = -2;
  ground.visible = false;
}


function draw(){
 background(255);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY +0.8
  
  if (backdrop.x < 0){
        backdrop.x = backdrop.width/4;
      }
  
  monkey.collide(ground);
  
  bananafruit();
  
  obstacle();
  
  drawSprites();
}

function bananafruit() {
  if(World.frameCount % 80 === 0) {
    var rand = random(120, 200);
    bananagroup = createSprite(800, rand, 20, 50);
    bananagroup.addImage("fruit", banana_image);
    bananagroup.scale = 0.1;
    bananagroup.velocityX = -4;
    bananagroup.lifetime = 400;
    Group(bananagroup);
  }
}

function obstacle() {
  if(World.frameCount % 100 === 0) {
    obstaclegroup = createSprite(800, 330, 20, 50);
    obstaclegroup.addImage("obstacle", stoneimage);
    obstaclegroup.scale = 0.2;
    obstaclegroup.velocityX = -4;
    obstaclegroup.lifetime = 400;
  }
} 
