
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, launchObj;
var ground, backdrop;
var treeImg, kidImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;


function preload()
{
	treeImg = loadImage("tree.png");
	kidImg = loadImage("boy.png");
	backdrop = loadImage("ground.png")
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	 ground = new Ground();

	//Create the Bodies Here.
	mango1 = new Mangoes(750,200);
	mango2 = new Mangoes(780,180);
	mango3 = new Mangoes(800,220);
	mango4 = new Mangoes(890,240);
	mango5 = new Mangoes(870,210);
	mango6 = new Mangoes(720,300);
	mango7 = new Mangoes(820,310);
	mango8 = new Mangoes(850,300);

	stone = new Stone(165,480);
	launchObj = new Launcher(stone.body,{x:165,y:480});
	
	
	  Engine.run(engine);
	 
}


function draw() {
	rectMode(CENTER);
	background("lightblue");
	imageMode(CENTER);
	image(treeImg,800,350,300,500);
	image(kidImg,200,530,100,200);
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	stone.display();
	launchObj.display();
	//ground.display();

	detectCollision(mango1,stone);
	detectCollision(mango2,stone);
	detectCollision(mango3,stone);
	detectCollision(mango4,stone);
	detectCollision(mango5,stone);
	detectCollision(mango6,stone);
	detectCollision(mango7,stone);
	detectCollision(mango8,stone);
	
}


function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	
	launchObj.fly();
}

function detectCollision(lmango,lstone){
	

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  

  	if(distance<=lmango.r+lstone.r)
    {
	  console.log(distance);
	  console.log(lmango.r+lstone.r);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


function keyPressed(){
	console.log(keyCode);
	if (keyCode === 32){

		launchObj.attach(stone.body);
		
	}
}