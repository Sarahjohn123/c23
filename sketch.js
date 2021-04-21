const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var box1;

function setup(){
    var canvas =createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

    box1 = new Box(400,200,50,50);
    box2 = new Box(100,300,50,30);
    ground = new Ground(200,height,40,40);

}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
}