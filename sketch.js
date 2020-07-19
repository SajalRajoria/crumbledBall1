const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var paper;
var wood;

function preload()
{
	
}

function setup() {
	 var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,350,20);
	ground = new Ground(400,580,800,20);
	wood = new Wood(600,540,200,20);
	wood1 = new Wood(500,510,20,120);
	wood2 = new Wood(700,510,20,120);

	Engine.run(engine);
}


function draw() {
  
  background("cyan");

  Engine.update(engine);

  
 
   paper.display();
   ground.display();
   wood.display();
   wood1.display();
   wood2.display();
 
 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
	}
}



