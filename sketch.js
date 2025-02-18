
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		dinsity:1.2,
	rectMode(CENTER);

	}
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(100,200,40,50);

	Engine.run(engine);
  
	}

function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}

