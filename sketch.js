
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
var plane;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options = {
		isStatic:true
	}

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}


	plane = Bodies.rectangle(250,500,500,10,plane_options);
	World.add(world,plane);

	block1 = Bodies.circle(220,10,30,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,50,50,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,75,40,block3_options);
	World.add(world,block3);


	Engine.run(engine);



	rectMode(CENTER);
	ellipseMode(RADIUS);
	fill(50,205,50);

  
}


function draw() {
  background(128,0,128);
  Engine.update(engine);

  rect(plane.position.x,plane.position.y,5000,10);
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,75,40);
  
 
  drawSprites();
 
}



