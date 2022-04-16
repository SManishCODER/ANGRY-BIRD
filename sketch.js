
const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



var gameState = "onSling";

var platform;

var score=0;
var pig1,pig1G,bird;



function preload(){

  backgroundImage =loadImage("bg.png");

 


}

function setup() {

  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  //First Floor

  
  platform=createSprite(77,390,450,345)
 
  

  box1 = new Box(800,320,70,70);
  box2 = new Box(1000,320,70,70);
  box3 = new Box(826,210,70,70);
  box4 = new Box(990,210,70,70);
  box5 = new Box(890,50,70,70);

  pig1 = new Pig1(910,350);
  pig2 = new Pig2(910,190,50,50);

log1 = new Log(910,270,270,90);
log2 = new Log(910,100,300,90);
log3 = new Log(880,32,150,30);
log4 = new Log(950,33,150,-30);

 bird = new Bird(200,50);
 bird.depth=1;

  ground = new Ground(600,height,1200,20);

 slingshot=new SlingShot(bird.body,{x:210,y:50})





 

}


function draw() {

  background (backgroundImage)
 
  Engine.update(engine);

  

  fill("red");
  textSize(30);
  text("Score:"+score,width-300,50)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  platform.display("brown");

  ground.display();
  pig1.display()
  
  pig2.display();
  log2.display();
  log1.display();
   log3.display();
   log4.display();
   pig2.display();
  bird.display();
 // baseClass.display
slingshot.display();








}
function mouseDragged(){

  if(gameState!="launch"){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  slingshot.fly();
  gameState="onSling";
 
}

function keyPressed(){

  if(keyCode===32 && (bird.body.speed<1 || bird.body.speed>50)){
    slingshot.attach(bird.body)
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200,y:50});
  }
}
 
