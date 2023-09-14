var garden,rabbit;
var gardenImg,rabbitImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  createApple();
  createOrange();
  createRed();

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

 

  drawSprites();

}

function createApple(){
 if(frameCount%80===0){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
  apple.y=Math.round(random(3,4));
}
}

function createOrange(){
  if(frameCount%80===0){
  orange = createSprite(random(50,350),40,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocityY=3;
  orange.lifetime=150;
  orange.y=Math.round(random(1,6));
}
}
function createRed(){
  if(frameCount%80===0){
  redL = createSprite(random(50,350),40,10,10);
  redL.addImage(redImg);
  redL.scale=0.06;
  redL.velocityY=3;
  redL.lifetime=150;
  redL.y=Math.round(random(2,5));
}
}



