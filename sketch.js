
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, body1, body2, body3, ground;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(220,280);
	body1 = new Dustbin(1000,560);
	body4 = new supporter(1000,650,200,20);
	body2 = new supporter(909,550,20,200);
	body3 = new supporter(1092,550,20,200);
	ground = new Ground(600,569);

	Engine.run(engine);
  
}


function draw() {
  background("white");

  keyPressed();
  
  ball.display();
//   body2.display();
//   body3.display();
//   body4.display();
  ground.display();
  body1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:1, y:-4});
	}
}



