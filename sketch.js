const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope
var fruit
let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
  rope=new Rope(5,{x:245,y:20})
  fruit= Bodies.circle(300,300,30)
  Matter.Composite.add(rope.body,fruit)
  fruitconstraint=new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
rope.show()
 ellipse(fruit.position.x,fruit.position.y,30,30)
   
}
