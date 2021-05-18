const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var backgroundImg

function preload(){
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas();
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,70,70);
    box2 = new Box(700,300,70,70);
    ground = new Ground(400,height,800,20);
    pig1 = new Pig(600,300);
    log1 = new Log(600,200,280,PI/2);
    box3 = new Box(500,180,70,70);
    box4 = new Box(700,180,70,70);
    pig2 = new Pig(600,180);
    log2 = new Log(600,150,280,PI/2);
    box5 = new Box(600,100,70,70);
    log3 = new Log(550,100,180,PI/6);
    log4 = new Log(650,100,180,-PI/6);
    bird = new Bird(100,100)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
}