var wall, thickness;
var bullet, weight, speed;
function setup() 
{
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";

}
  
function draw() 
{
  background(0); 
    bullet.velocityX = speed;
  
    bulletImpact();
  
  

    //console.log(wall.x);


  drawSprites();
}





function bulletImpact()
{
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage);
    

    if(damage > 10)
    {
      bullet.shapeColor = color(255,0,0);
      text("The Wall IS NOT Strong enough to withstand the Bullet", 200,200);
    }

    if(damage < 10)
    {
      bullet.shapeColor = color(0,255,0);
      text("The Wall IS Strong enough to withstand the Bullet", 200,200);
    }
  }

  if(bullet.isTouching(wall))
  {
    bullet.velocityX = 0;
  }


}


function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }

  return false;

}


