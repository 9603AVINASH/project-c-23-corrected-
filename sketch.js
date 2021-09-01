const Engine = Matter.Engine;
const World = Matter.World;        
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;    

 

var engine, world;
var canvas,angle, Computerbase,Playerbase, Player1, Computerplayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  Playerbase = new PlayerBase(300,random(450,height-300),180,150);
  Player1 = new Player(285,Playerbase.body.position.y-153,50,180);
  
  Computerbase = new ComputerBase(width-300,random(450,height-300),180,150);
  Computerplayer = new ComputerPlayer(
    width-280,
    Computerbase.body.position.y-153,
    50,
    180
    );
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Playerbase.display();
   Computerbase.display();
  
  
   //display Player and computerplayer
   Player1.display();
   Computerplayer.display();
}
