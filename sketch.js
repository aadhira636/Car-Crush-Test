var car;
var wall;

var speed;
var weight;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  speed = random(50,90);
  weight = random(400,1500);

  car = createSprite(20,200,50,50);
  car.velocityX = speed;
  wall = createSprite(700,200,20,height/2);

}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < car.width+wall.width/2)
  {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180)
    {
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      car.shapeColor = "green";
    }

  }
  
  
  drawSprites();

}