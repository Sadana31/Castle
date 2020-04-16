const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    fill("blue");
    tower1 = new tower(650,590,400,450);
    tower2 = new tower(400,590,120,800);
    tower3 = new tower(900,590,120,800);
    tower4 = new tower(650,250,300,230);
    tower5 = new tower(240,590,200,400);
    tower6 = new tower(1060,590,200,400);
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    tower1.display();
    tower2.display();
    tower3.display();
    tower4.display();

    fill("purple");
    tower5.display();
    tower6.display();
    fill("red");
    dome1 = triangle(400,100,330,200,470,200);
    dome2 = triangle(900,100,830,200,970,200);
    dome3 = triangle(650,40,500,140,800,140);

    dome1.display();
}