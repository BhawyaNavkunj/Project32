const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stage1, stage2, ball, slingshot, polygonImg, bg, backgroundImg, score = 0;
var block1, block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;

function preload(){
  polygonImg = loadImage("Images/polygon.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,790,800,10);
  stage1 = new Ground(400,650,240,10);
  stage2 = new Ground(600,400,200,10);

  block1 = new Box(400,610,30,40);
  block2 = new Box(430,610,30,40);
  block3 = new Box(460,610,30,40);
  block4 = new Box(490,610,30,40);
  block5 = new Box(370,610,30,40);
  block6 = new Box(340,610,30,40);
  block7 = new Box(310,610,30,40);
  block8 = new Box(370,570,30,40);
  block9 = new Box(340,570,30,40);
  block10 = new Box(400,570,30,40);
  block11 = new Box(430,570,30,40);
  block12 = new Box(460,570,30,40);
  block13 = new Box(400,540,30,40);
  block14 = new Box(430,540,30,40);
  block15 = new Box(370,540,30,40);
  block16 = new Box(400,510,30,40);

  block17 = new Box(600,360,30,40);
  block18 = new Box(630,360,30,40);
  block19 = new Box(660,360,30,40);
  block20 = new Box(570,360,30,40);
  block21 = new Box(540,360,30,40);
  block22 = new Box(600,320,30,40);
  block23 = new Box(630,320,30,40);
  block24 = new Box(570,320,30,40);
  block25 = new Box(600,290,30,40);

  ball = new Ball(150,400); 
  slingshot = new SlingShot(ball.body,{x:150,y:400});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}  
  fill(255);
  textSize(20);
  text("Drag the stone to launch it towards the blocks",100,50);
  text("Press space to play again",180,80);
  text("Score:"+score,650,50);
  Engine.update(engine);

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  
 ground.display();
 stage1.display();
 stage2.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 ball.display();
 slingshot.display();
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  slingshot.attach(ball.body);
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=6 && hour<=18){
    bg = "Images/orange.png";
  }
  else{
    bg = "Images/black.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

