var fixedRect, movingRect, rect3, rect4, rect5, rect6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  rect3 = createSprite(300, 100, 70, 50);
  
  rect4 = createSprite(300, 800, 100, 200,);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect3.velocityY = 5;
  rect4.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  

  bounceOff(rect3,rect4);
  
  

  drawSprites();
}



function bounceOff(rect5,rect6) {
  if (rect6.x - rect5.x < rect5.width/2 + rect6.width/2
    && rect5.x - rect6.x < rect5.width/2 + rect6.width/2) {
  rect6.velocityX = rect6.velocityX * (-1);
  rect5.velocityX = rect5.velocityX * (-1);
  
}

if (rect6.y - rect5.y < rect5.height/2 + rect6.height/2
  && rect5.y - rect6.y < rect5.height/2 + rect6.height/2){
    rect6.velocityY = rect6.velocityY * (-1);
  rect5.velocityY = rect5.velocityY * (-1);
}

}