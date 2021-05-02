var balloon ,bg

function preload(){
bgimage=loadImage("bg.png")
balloonimage=loadImage("Hot Air Ballon-02.png")
}

function setup() {
  createCanvas(600,500);
  balloon=createSprite(200, 20, 100, 100);
  balloon.addImage(balloonimage)
  balloon.scale=0.5
}

function draw() {

  background("black");  
  image(bgimage,2,2,800,600)
  if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10
}
else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10
  balloon.scale-=0.01
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10
  balloon.scale+=0.01
}

  drawSprites();
}