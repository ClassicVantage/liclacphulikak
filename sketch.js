const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball;
var log;
var string;
var world,engine

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(400,400);
  
  ball=Bodies.circle(200,200,20);
 log=Bodies.rectangle(50,200,80,20) 
  World.add(world,ball.body)
  World.add(world,log.body)
  
  options={
     bodyA:ball.body,
     bodyB: log.body,
     stiffness: 0.04,
    length: 10
  }

  string=Constraint.create(options);
  World.add(world,string)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  circle(ball.body.position.x,ball.body.position.y,20)
  rect(log.body.position.y,log.body.position.x,80,20)
line(log.body.position.x,log.body.position.y,ball.body.position.x,ball.body.position.y)
  drawSprites();
}