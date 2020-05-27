const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,100,50);
    box2 = new Box(203,70,30,50);
    box3 = new Box(203,90, 50,50);
    box4 = new Box(205,300,120,50);
    box5 = new Box(205,110,70,50);
    box6 = new Box(200,180,90,50);
    
    ground = new Ground(200,380,400,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();
}
