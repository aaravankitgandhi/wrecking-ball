const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;;
var backgroundImg,platform;
var rope,ball;
var box1,box2,box3,box4,box5;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    

    

    box5 = new Box(700,160,70,70);

    ball=new Ball(200,200,80,80);

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    box3.display();
    box4.display();
   

    box5.display();
    

    ball.display();
    

    rope.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}







