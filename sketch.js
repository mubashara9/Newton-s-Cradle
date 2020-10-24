
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var dia=40;
	var startX = width/2;
	var startY = height/2+50;
	bob1 = new Bob(startX-dia*2,startY,20 );
	bob2 = new Bob(startX-dia,startY,20 );
	bob3 = new Bob(startX,startY,20 );
	bob4 = new Bob(startX+dia,startY,20 );
	bob5 = new Bob(startX+dia*2,startY,20 );

	ground = new Roof(width/2, 100,200,20);

	rope1 = new Rope(bob1.body,ground.body,-dia*2,0);
	rope2 = new Rope(bob2.body,ground.body,-dia,0);
	rope3 = new Rope(bob3.body,ground.body,0,0);
	rope4 = new Rope(bob4.body,ground.body,dia,0);
	rope5 = new Rope(bob5.body,ground.body,dia*2,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
}


