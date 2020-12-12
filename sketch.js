
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, ground;

function setup() {
	createCanvas(1000,700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(60,435, 15);

	dustbin1 = new Dustbin(800,435,200,20);
	dustbin2 = new Dustbin(700,400,20,100);
	dustbin3 = new Dustbin(900,400,20,100);

	ground = new Ground(500,450,1500,10);

	keyPressed();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 40, y: -40});
	}
}